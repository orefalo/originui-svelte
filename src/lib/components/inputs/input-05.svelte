<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import Input from '$lib/components/ui/input.svelte';
</script>

<div class="space-y-2" style:--ring="234 89% 74%">
	<Label for="input-05">Input with colored border and ring</Label>
	<Input id="input-05" placeholder="Email" type="email" />
</div>
