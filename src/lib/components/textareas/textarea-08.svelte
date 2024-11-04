<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import Textarea from '$lib/components/ui/textarea.svelte';
</script>

<div class="space-y-2">
	<Label for="textarea-08">Shorter textarea</Label>
	<Textarea id="textarea-08" class="min-h-[none]" placeholder="Leave a comment" rows={2} />
</div>
