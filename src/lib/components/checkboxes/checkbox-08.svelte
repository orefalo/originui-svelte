<script lang="ts">
	import Checkbox from '$lib/components/ui/checkbox.svelte';
	import Label from '$lib/components/ui/label.svelte';
</script>

<div class="flex gap-6">
	<div class="flex items-center gap-2">
		<Checkbox id="checkbox-08-a" />
		<Label for="checkbox-08-a">Svelte</Label>
	</div>
	<div class="flex items-center gap-2">
		<Checkbox id="checkbox-08-b" />
		<Label for="checkbox-08-b">SvelteKit</Label>
	</div>
	<div class="flex items-center gap-2">
		<Checkbox id="checkbox-08-c" />
		<Label for="checkbox-08-c">Astro</Label>
	</div>
</div>
