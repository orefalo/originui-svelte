<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import Switch from '$lib/components/ui/switch.svelte';
</script>

<div class="inline-flex items-center gap-2">
	<Switch id="switch-06" class="h-3 w-9 border-none [&_span]:border [&_span]:border-input" />
	<Label for="switch-06" class="sr-only">M2-style switch</Label>
</div>
