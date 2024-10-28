<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import Switch from '$lib/components/ui/switch.svelte';

	let checked = $state(false);

	function toggleSwitch() {
		checked = !checked;
	}
</script>

<div>
	<Label for="switch-09" class="sr-only">Toggle switch</Label>
	<div class="group inline-flex items-center gap-2" data-state={checked ? 'checked' : 'unchecked'}>
		<button
			id="switch-off-label"
			class="flex-1 cursor-pointer text-right text-sm font-medium group-data-[state=checked]:text-muted-foreground/70"
			onclick={toggleSwitch}
		>
			Off
		</button>
		<Switch id="switch-09" bind:checked aria-labelledby="switch-off-label switch-on-label" />
		<button
			id="switch-on-label"
			class="flex-1 cursor-pointer text-left text-sm font-medium group-data-[state=unchecked]:text-muted-foreground/70"
			onclick={toggleSwitch}
		>
			On
		</button>
	</div>
</div>
