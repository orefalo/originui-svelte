<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import Textarea from '$lib/components/ui/textarea.svelte';
</script>

<div class="space-y-2">
	<Label for="textarea-17">Textarea with no resize</Label>
	<Textarea id="textarea-17" class="[resize:none]" placeholder="Leave a comment" />
</div>
