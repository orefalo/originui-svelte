<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import Textarea from '$lib/components/ui/textarea.svelte';
</script>

<div class="space-y-2">
	<Label for="textarea-01">Simple textarea</Label>
	<Textarea id="textarea-01" placeholder="Leave a comment" />
</div>
