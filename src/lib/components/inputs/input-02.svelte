<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import Input from '$lib/components/ui/input.svelte';
</script>

<div class="space-y-2">
	<Label for="input-02">
		Required input <span class="text-destructive">*</span>
	</Label>
	<Input id="input-02" placeholder="Email" type="email" required />
</div>
