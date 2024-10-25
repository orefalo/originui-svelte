<script lang="ts">
	import { cn } from '$lib/utils.js';
	import CopyButton from '../copy-button.svelte';
	import ViewToggleButton from './demo-view-toggle-button.svelte';
	import { readComponent } from './readComponentSource.js';
	import CodePreview from '$lib/demo/code-preview.svelte';

	let {
		directory,
		componentName,
		class: className
	}: { directory: string; componentName: string; class?: string } = $props();

	let showCode = $state(false);

	async function toggleView() {
		showCode = !showCode;
	}
</script>

{#snippet actionButtons({ source }: { source: string })}
	<div
		class={cn(
			'absolute top-2 right-2 transition-colors z-10 flex items-center gap-x-2 bg-background/30 backdrop-blur-sm rounded-lg border border-transparent',
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

<div
	class={cn('group/item relative ', className)}
	data-preview-code={showCode ? 'true' : undefined}
>
	{#await readComponent(directory, componentName)}
		<div class="flex items-center justify-center h-40 text-muted-foreground">
			<p class="text-sm font-medium">Loading...</p>
		</div>
	{:then { Component, source }}
		{#if Component && source}
			{@render actionButtons({ source })}

			{#if showCode}
				<CodePreview code={source} />
			{:else}
				<div class="text-left">
					<Component />
				</div>
			{/if}
		{:else}
			<div
				class="flex flex-col items-center text-muted-foreground text-sm text-center h-full justify-center"
			>
				<p>Component not available</p>
				<a
					class="underline hover:text-foreground"
					href="https://github.com/max-got/originui-svelte"
				>
					Create a pull request
				</a>
			</div>
		{/if}
	{:catch error}
		<div class="flex items-center justify-center h-40 text-destructive">
			<p class="text-sm font-medium">Error: {error.message}</p>
		</div>
	{/await}
</div>
