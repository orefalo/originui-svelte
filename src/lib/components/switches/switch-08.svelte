<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import Switch from '$lib/components/ui/switch.svelte';

	let checked = $state(true);
</script>

<div class="inline-flex items-center gap-2">
	<Switch id="switch-08" bind:checked aria-label="Toggle switch" />
	<Label for="switch-08" class="text-sm font-medium">
		{checked ? 'On' : 'Off'}
	</Label>
</div>
