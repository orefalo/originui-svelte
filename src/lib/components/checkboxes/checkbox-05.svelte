<script lang="ts">
	import Checkbox from '$lib/components/ui/checkbox.svelte';
	import Label from '$lib/components/ui/label.svelte';
</script>

<div class="flex items-center gap-2">
	<Checkbox id="checkbox-05" checked />
	<Label for="checkbox-05" class="peer-data-[state=checked]:line-through">Simple todo item</Label>
</div>
