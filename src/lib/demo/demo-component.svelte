<script lang="ts">
	import { cn } from '$lib/utils.js';
	import CopyButton from './copy-button.svelte';

	import { readComponent } from './readComponentSource.js';

	let {
		directory,
		componentName,
		class: className
	}: { directory: string; componentName: string; class: string } = $props();
</script>

<div class={cn('group/item relative', className)}>
	{#await readComponent(directory, componentName) then { Component, source }}
		{#if Component && source}
			<Component />
			<CopyButton componentSource={source} />
		{:else}
			<div class="inline-flex items-center gap-2 text-center text-muted-foreground">
				<p>Soon™</p>
			</div>
		{/if}
	{/await}
</div>
