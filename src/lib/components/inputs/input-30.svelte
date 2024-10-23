<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import Input from '$lib/components/ui/input.svelte';
</script>

<div class="space-y-2">
	<Label for="input-30">File input</Label>
	<Input id="input-30" class="p-0 pe-3 file:me-3 file:border-0 file:border-e" type="file" />
</div>
