<script lang="ts">
	import PageHeader from '$lib/demo/page-header.svelte';
	import * as DemoComponents from '$lib/demo/demo-component/index.js';

	const directory = 'inputs';
	const inputFiles = [
		'input-01',
		'input-02',
		'input-03',
		'input-04',
		'input-05',
		'input-06',
		'input-07',
		'input-08',
		'input-09',
		'input-10',
		'input-11',
		'input-12',
		'input-13',
		'input-14',
		'input-15',
		'input-16',
		'input-17',
		'input-18',
		'input-19',
		'input-20',
		'input-21',
		'input-22',
		'input-23',
		'input-24',
		'input-25',
		'input-26',
		'input-27',
		'input-28',
		'input-29',
		'input-30',
		'input-31',
		'input-32',
		'input-33',
		'input-34',
		'input-35',
		'input-36',
		'input-37',
		'input-38',
		'input-39',
		'input-40',
		'input-41',
		'input-42',
		'input-43',
		'input-44',
		'input-45',
		'input-46',
		'input-47',
		'input-48',
		'input-49',
		'input-50',
		'input-51'
	];
</script>

<main>
	<div class="px-4 sm:px-6">
		<div class="mx-auto w-full max-w-6xl">
			<PageHeader title="Input">
				A growing collection of over 50 input components built with <span class="text-svelte"
					>Svelte</span
				> and TailwindCSS.
			</PageHeader>

			<DemoComponents.Wrapper class="[&>[data-preview-code]]:px-1.5 [&>[data-preview-code]]:py-2">
				{#each inputFiles as file}
					<DemoComponents.Demo {directory} componentName={file} />
				{/each}
			</DemoComponents.Wrapper>
		</div>
	</div>
</main>
