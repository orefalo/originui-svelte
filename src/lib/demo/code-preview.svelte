<script lang="ts">
	import highlighter from '$lib/renderer/codePreview.js';

	let { code }: { code: string } = $props();

	const highlightedCode = highlighter(code, {
		meta: {
			class: 'shiki text-sm text-left px-2 py-4 overflow-auto h-full'
		}
	});
</script>

{#await highlightedCode then value}
	{@html value}
{/await}

<style>
	:global(html.dark .shiki),
	:global(html.dark .shiki span) {
		color: var(--shiki-dark) !important;
		background-color: var(--shiki-dark-bg) !important;
		/* Optional, if you also want font styles */
		font-style: var(--shiki-dark-font-style) !important;
		font-weight: var(--shiki-dark-font-weight) !important;
		text-decoration: var(--shiki-dark-text-decoration) !important;
	}
</style>
