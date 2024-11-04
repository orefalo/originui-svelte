<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import Textarea from '$lib/components/ui/textarea.svelte';
</script>

<div class="space-y-2">
	<Label for="textarea-09">Disabled textarea</Label>
	<Textarea id="textarea-09" disabled placeholder="Leave a comment" />
</div>
