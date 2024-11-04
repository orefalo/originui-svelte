<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import Textarea from '$lib/components/ui/textarea.svelte';
</script>

<div class="space-y-2">
	<Label for="textarea-18">Read-only textarea</Label>
	<Textarea
		id="textarea-18"
		class="read-only:bg-muted"
		value="This is a read-only textarea"
		readonly
		placeholder="Leave a comment"
	/>
</div>
