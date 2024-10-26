<script lang="ts">
	import Checkbox from '$lib/components/ui/checkbox.svelte';
	import Label from '$lib/components/ui/label.svelte';
</script>

<div
	class="flex items-center gap-2"
	style:--primary="238.7 83.5% 66.7%"
	style:--ring="238.7 83.5% 66.7%"
>
	<Checkbox id="checkbox-03" checked />
	<Label for="checkbox-03">Colored checkbox</Label>
</div>
