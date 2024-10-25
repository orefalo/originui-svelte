<script lang="ts">
	// Dependencies: pnpm install bits-ui

	import { ToggleGroup, ToggleGroupItem } from '$lib/components/ui/toggle-group/index.js';
	import Button from '../ui/button.svelte';
	import Toggle from '../ui/toggle.svelte';
	const options = [
		{
			value: 'left',
			label: 'Left'
		},
		{
			value: 'center',
			label: 'Center'
		},
		{
			value: 'right',
			label: 'Right'
		}
	];
	let value = $state(options[0].value);
</script>

<ToggleGroup
	type="single"
	variant="outline"
	class="flex gap-0 -space-x-px rounded-lg shadow-sm shadow-black/[0.04] rtl:space-x-reverse"
	bind:value
>
	{#each options as option (option.value)}
		<ToggleGroupItem
			class="flex-1 rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
			value={option.value}
			aria-label={option.label}
		>
			{option.label}
		</ToggleGroupItem>
	{/each}
</ToggleGroup>
