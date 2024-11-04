<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import Textarea from '$lib/components/ui/textarea.svelte';
</script>

<div class="space-y-2">
	<Label for="textarea-07">Textarea with gray background</Label>
	<Textarea
		id="textarea-07"
		class="border-transparent bg-muted shadow-none"
		placeholder="Leave a comment"
	/>
</div>
