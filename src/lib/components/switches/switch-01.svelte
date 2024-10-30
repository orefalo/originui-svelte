<script lang="ts">
	import Switch from '$lib/components/ui/switch.svelte';
	import Label from '$lib/components/ui/label.svelte';
</script>

<div class="inline-flex items-center gap-2">
	<Switch id="switch-01" />
	<Label for="switch-01" class="sr-only">Simple switch</Label>
</div>
