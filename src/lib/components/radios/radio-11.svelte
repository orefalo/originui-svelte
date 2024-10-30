<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group/index.js';
	import IconSwatchBook from 'lucide-svelte/icons/swatch-book';
	import IconBrush from 'lucide-svelte/icons/brush';
	import IconEraser from 'lucide-svelte/icons/eraser';
	import IconScissors from 'lucide-svelte/icons/scissors';

	const items = [
		{ id: 'radio-11-r1', value: 'r1', label: 'Palette', Icon: IconSwatchBook },
		{ id: 'radio-11-r2', value: 'r2', label: 'Brush', Icon: IconBrush },
		{ id: 'radio-11-r3', value: 'r3', label: 'Eraser', Icon: IconEraser },
		{ id: 'radio-11-r4', value: 'r4', label: 'Cut', Icon: IconScissors }
	];

	let selectedValue = $state('r1');
</script>

<RadioGroup class="grid grid-cols-2 gap-2" bind:value={selectedValue}>
	{#each items as item}
		<div
			class="relative flex flex-col gap-4 rounded-lg border border-input p-4 shadow-sm shadow-black/[.04] has-[[data-state=checked]]:border-ring"
		>
			<div class="flex justify-between gap-2">
				<RadioGroupItem
					id={item.id}
					value={item.value}
					class="order-1 after:absolute after:inset-0"
				/>

				<item.Icon class="opacity-60" size={16} stroke-width={2} aria-hidden="true" />
			</div>
			<Label for={item.id}>{item.label}</Label>
		</div>
	{/each}
</RadioGroup>
