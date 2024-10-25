<script lang="ts">
	import type { PageData } from './$types.js';

	import PageHeader from '$lib/demo/page-header.svelte';
	import * as DemoComponents from '$lib/demo/demo-component/index.js';

	let { data }: { data: PageData } = $props();
</script>

<main>
	<div class="px-4 sm:px-6">
		<div class="mx-auto w-full max-w-6xl">
			<PageHeader title="Button">
				A growing collection of over 51 button components built with <span class="text-svelte"
					>Svelte</span
				> and TailwindCSS.
			</PageHeader>

			<DemoComponents.Wrapper class="[&>[data-preview-code]]:px-1.5 [&>[data-preview-code]]:py-2">
				{#each data.components as component}
					<DemoComponents.Demo
						Component={component.Component}
						componentSource={component.source}
						class="flex justify-center"
					/>
				{/each}
			</DemoComponents.Wrapper>
		</div>
	</div>
</main>
