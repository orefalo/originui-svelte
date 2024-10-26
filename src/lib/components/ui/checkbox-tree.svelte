<script lang="ts" module>
	/**
	 * IMPORTANT: This component was built for demo purposes only and has not been tested in production.
	 * It serves as a proof of concept for a checkbox tree implementation.
	 * If you're interested in collaborating to create a more robust, production-ready
	 * headless component, your contributions are welcome!
	 */

	export interface TreeNode {
		id: string;
		label: string;
		defaultChecked?: boolean;
		children?: TreeNode[];
	}

	export interface RenderNodeProps {
		id: string;
		label: string;
		isChecked: boolean | 'indeterminate';
		onCheckedChange: () => void;
		children: RenderNodeProps[];
	}
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import { SvelteSet } from 'svelte/reactivity';

	let {
		tree,
		renderNode
	}: {
		tree: TreeNode;
		renderNode: Snippet<[RenderNodeProps]>;
	} = $props();

	const checkedNodes = new SvelteSet<string>();

	// Initialize checked nodes (Self-invoking function)
	(function initializeCheckedNodes(node: TreeNode) {
		if (node.defaultChecked) {
			checkedNodes.add(node.id);
		}
		node.children?.forEach(initializeCheckedNodes);
	})(tree);

	function isChecked(node: TreeNode): boolean | 'indeterminate' {
		if (!node.children) {
			return checkedNodes.has(node.id);
		}

		const childrenChecked = node.children.map(isChecked);
		if (childrenChecked.every((status) => status === true)) {
			return true;
		}
		if (childrenChecked.some((status) => status === true || status === 'indeterminate')) {
			return 'indeterminate';
		}
		return false;
	}

	function handleCheck(node: TreeNode) {
		function toggleNode(n: TreeNode, check: boolean) {
			if (check) {
				checkedNodes.add(n.id);
			} else {
				checkedNodes.delete(n.id);
			}
			n.children?.forEach((child) => toggleNode(child, check));
		}

		const currentStatus = isChecked(node);
		const newCheck = currentStatus !== true;

		toggleNode(node, newCheck);
	}

	function renderTreeNode(node: TreeNode): RenderNodeProps {
		return {
			id: node.id,
			label: node.label,
			isChecked: isChecked(node),
			onCheckedChange: () => handleCheck(node),
			children: node.children?.map(renderTreeNode) ?? []
		};
	}

	const treeProps = $derived(renderTreeNode(tree));
</script>

{@render renderNode(treeProps)}
