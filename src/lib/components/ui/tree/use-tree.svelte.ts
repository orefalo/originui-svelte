import {
	createTree,
	type FeatureImplementation,
	type ItemInstance,
	type TreeConfig,
	type TreeInstance,
	type TreeState
} from '@headless-tree/core';
import { createAttachmentKey } from 'svelte/attachments';
import { createSubscriber } from 'svelte/reactivity';

// This is a workaround to allow for behavior in Svelte.
export const svelteFeatures: FeatureImplementation = {
	itemInstance: {
		getProps: ({ prev }) => {
			const props = prev?.() ?? {};

			return {
				...props,
				attacher: {
					[createAttachmentKey()]: (node: HTMLElement) => {
						props.ref?.(node);
					}
				},
				onclick: props.onClick ? (e: MouseEvent) => props.onClick(e) : undefined,
				ondragend: props.onDragEnd ? (e: DragEvent) => props.onDragEnd(e) : undefined,
				ondragleave: props.onDragLeave ? (e: DragEvent) => props.onDragLeave(e) : undefined,
				ondragover: props.onDragOver ? (e: DragEvent) => props.onDragOver(e) : undefined,
				ondragstart: props.onDragStart ? (e: DragEvent) => props.onDragStart(e) : undefined,
				ondrop: props.onDrop ? (e: DragEvent) => props.onDrop(e) : undefined
			};
		},
		getRenameInputProps({ prev }) {
			const { onBlur, onChange, ...props } = prev?.() ?? {};

			return {
				...props,
				[createAttachmentKey()]: (node: HTMLElement) => {
					props.ref?.(node);
				},
				onblur: onBlur ? (e: FocusEvent) => onBlur(e) : undefined,
				oninput: onChange ? (e: Event) => onChange(e) : undefined
			};
		}
	},
	treeInstance: {
		getContainerProps({ prev }, ...rest) {
			const props = prev?.() ?? {};
			return {
				...props,
				...rest,
				attacher: {
					[createAttachmentKey()]: (node: HTMLElement) => {
						props.ref?.(node);
					}
				}
			};
		},
		getSearchInputElementProps({ prev }, ...rest) {
			const { onBlur, onChange, ...props } = prev?.() ?? {};
			const extendedOnChange = (e: Event) => {
				onChange?.(e);
			};
			return {
				...props,
				...rest,
				[createAttachmentKey()]: (node: HTMLElement) => {
					props.ref?.(node);
				},
				onblur: onBlur ? (e: FocusEvent) => onBlur(e) : undefined,
				oninput: onChange ? (e: Event) => extendedOnChange(e) : undefined
			};
		}
	}
};

export class ReactiveTree<T> {
	#tree: TreeInstance<T>;
	#subscribe: () => void;
	#currentState: TreeState<T>;
	#itemProxies = new Map<string, ItemInstance<T>>();
	#treeProxy: null | TreeInstance<T> = null;

	constructor(config: TreeConfig<T>) {
		const configWithFeatures: TreeConfig<T> = {
			...config,
			features: [...(config.features ?? []), svelteFeatures]
		};
		this.#tree = createTree(configWithFeatures);

		this.#currentState = this.#tree.getState();

		this.#subscribe = createSubscriber((update) => {
			this.#tree.setConfig((prev) => ({
				...prev,
				...config,
				features: [...(config.features ?? []), svelteFeatures],

				setState: (newState) => {
					this.#currentState = {
						...this.#currentState,
						...newState
					};
					config.setState?.(this.#currentState);
					// Clear item proxies cache when state changes to ensure fresh reactive state
					this.#itemProxies.clear();
					// Trigger reactive updates when tree state changes
					update();
				},
				state: {
					...this.#currentState,
					...config.state
				}
			}));

			// Do we need a cleanup?
			return () => {};
		});

		// Create the tree proxy once
		this.#treeProxy = this.#createTreeProxy();
	}

	#createItemProxy(item: ItemInstance<T>): ItemInstance<T> {
		const proxy = new Proxy(item, {
			get: (target, prop) => {
				// Make these methods reactive by subscribing when they're called
				if (typeof prop === 'string' && (prop.startsWith('is') || prop.startsWith('get'))) {
					return (...args: unknown[]) => {
						this.#subscribe(); // Subscribe to reactive updates
						const method = target[prop as keyof ItemInstance<T>] as (...args: unknown[]) => unknown;
						return method?.apply(target, args);
					};
				}

				return target[prop as keyof ItemInstance<T>];
			}
		});

		return proxy;
	}

	#createTreeProxy(): TreeInstance<T> {
		return new Proxy(this.#tree, {
			get: (target, prop) => {
				// Make getItems return proxied items
				if (prop === 'getItems') {
					return () => {
						this.#subscribe(); // Subscribe to reactive updates
						const items = target.getItems();
						return items.map((item) => {
							const itemId = item.getId();
							if (!this.#itemProxies.has(itemId)) {
								this.#itemProxies.set(itemId, this.#createItemProxy(item));
							}
							return this.#itemProxies.get(itemId)!;
						});
					};
				}

				// Make other tree methods reactive
				if (typeof prop === 'string' && prop.startsWith('get')) {
					return (...args: unknown[]) => {
						this.#subscribe(); // Subscribe to reactive updates
						const method = target[prop as keyof TreeInstance<T>] as (...args: unknown[]) => unknown;
						return method?.apply(target, args);
					};
				}

				return target[prop as keyof TreeInstance<T>];
			}
		});
	}

	get current(): TreeInstance<T> {
		this.#subscribe();
		return this.#treeProxy!;
	}
}

export const useTree = <T>(config: TreeConfig<T>) => new ReactiveTree<T>(config);
