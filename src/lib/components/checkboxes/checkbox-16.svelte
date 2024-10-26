<script lang="ts">
	import Checkbox from '$lib/components/ui/checkbox.svelte';
	import Label from '$lib/components/ui/label.svelte';
	import Brush from 'lucide-svelte/icons/brush';
	import Eraser from 'lucide-svelte/icons/eraser';
	import Scissors from 'lucide-svelte/icons/scissors';
	import SwatchBook from 'lucide-svelte/icons/swatch-book';

	const items = [
		{ id: 'checkbox-16-c1', value: 'c1', label: 'Palette', Icon: SwatchBook, defaultChecked: true },
		{ id: 'checkbox-16-c2', value: 'c2', label: 'Brush', Icon: Brush },
		{ id: 'checkbox-16-c3', value: 'c3', label: 'Eraser', Icon: Eraser },
		{ id: 'checkbox-16-c4', value: 'c4', label: 'Cut', Icon: Scissors }
	];
</script>

<div class="grid grid-cols-2 gap-3">
	{#each items as item (item.id)}
		<label
			class="items-top relative flex cursor-pointer flex-col gap-4 rounded-lg border border-input p-4 shadow-sm shadow-black/[.04] has-[[data-state=checked]]:border-ring"
		>
			<div class="flex justify-between gap-2">
				<Checkbox
					id={item.id}
					value={item.value}
					class="order-1 h-4 w-4 after:absolute after:inset-0"
					checked={item.defaultChecked}
				/>
				<item.Icon class="opacity-60" size={16} stroke-width={2} aria-hidden="true" />
			</div>
			<Label for={item.id}>{item.label}</Label>
		</label>
	{/each}
</div>
