<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group/index.js';

	const items = [
		{ id: 'radio-14-r1', value: 'r1', label: 'USA' },
		{ id: 'radio-14-r2', value: 'r2', label: 'UK' },
		{ id: 'radio-14-r3', value: 'r3', label: 'France' }
	];

	let selectedValue = $state('r1');
</script>

<fieldset class="space-y-3">
	<legend class="text-sm font-medium leading-none text-foreground">Server location</legend>
	<RadioGroup class="flex flex-wrap gap-2" bind:value={selectedValue}>
		{#each items as item (item.id)}
			<div
				class="relative flex flex-col items-start gap-4 rounded-lg border border-input p-3 shadow-sm shadow-black/[.04] has-[[data-state=checked]]:border-ring"
			>
				<div class="flex items-center gap-2">
					<RadioGroupItem id={item.id} value={item.value} class="after:absolute after:inset-0" />
					<Label for={item.id}>{item.label}</Label>
				</div>
			</div>
		{/each}
	</RadioGroup>
</fieldset>
