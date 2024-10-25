<script lang="ts">
	// Dependencies: pnpm install bits-ui

	import { ToggleGroup, ToggleGroupItem } from '$lib/components/ui/toggle-group/index.js';
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
	] as const;
	let value = $state('');
</script>

<ToggleGroup
	class="flex gap-0 -space-x-px rounded-lg shadow-sm shadow-black/[0.04] rtl:space-x-reverse"
	type="single"
	variant="outline"
	bind:value
>
	{#each options as option (option.value)}
		<ToggleGroupItem
			value={option.value}
			class="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
		>
			{option.label}
		</ToggleGroupItem>
	{/each}
</ToggleGroup>
