<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import Input from '$lib/components/ui/input.svelte';
</script>

<div class="space-y-2">
	<Label for="input-01">Simple input</Label>
	<Input id="input-01" placeholder="Email" type="email" />
</div>
