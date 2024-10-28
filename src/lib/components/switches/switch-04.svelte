<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import Switch from '$lib/components/ui/switch.svelte';

	let checked = $state(false);
</script>

<div class="inline-flex items-center gap-2">
	<Switch id="switch-04" bind:checked disabled />
	<Label for="switch-04" class="sr-only">Disabled</Label>
</div>
