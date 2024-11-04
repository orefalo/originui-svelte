<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import Switch from '$lib/components/ui/switch.svelte';
</script>

<div
	class="inline-flex items-center gap-2"
	style:--primary="238.7 83.5% 66.7%"
	style:--ring="238.7 83.5% 66.7%"
>
	<Switch id="switch-03" checked />
	<Label for="switch-03" class="sr-only">Colored switch</Label>
</div>
