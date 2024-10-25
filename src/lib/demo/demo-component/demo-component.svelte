<script lang="ts">
	import { cn } from '$lib/utils.js';
	import CopyButton from '../copy-button.svelte';
	import ViewToggleButton from './demo-view-toggle-button.svelte';

	import CodePreview from '$lib/demo/code-preview.svelte';
	import type { Component as ComponentType } from 'svelte';

	let {
		Component,
		componentSource,
		class: className
	}: {
		Component: ComponentType | null;
		componentSource: string | null;
		class?: string;
	} = $props();

	let showCode = $state(false);

	async function toggleView() {
		showCode = !showCode;
	}
</script>

{#snippet actionButtons({ source }: { source: string })}
	<div
		class={cn(
			'absolute right-2 top-2 z-10 flex items-center gap-x-2 rounded-lg border border-transparent bg-background/30 backdrop-blur-sm transition-colors',
			showCode && 'border border-input',
			!showCode &&
				'lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100 '
		)}
	>
		<ViewToggleButton {showCode} onToggle={toggleView} />
		<div class="h-6 w-px bg-border"></div>
		<CopyButton componentSource={source} />
	</div>
{/snippet}

<div class={cn('group/item', className)} data-preview-code={showCode ? 'true' : undefined}>
	{#if Component && componentSource}
		{@render actionButtons({ source: componentSource })}
		{#if showCode}
			<CodePreview code={componentSource} />
		{:else}
			<Component />
		{/if}
	{:else}
		<div
			class="flex h-full flex-col items-center justify-center text-center text-sm text-muted-foreground"
		>
			<p>Component not available</p>
			<a class="underline hover:text-foreground" href="https://github.com/max-got/originui-svelte">
				Create a pull request
			</a>
		</div>
	{/if}
</div>
