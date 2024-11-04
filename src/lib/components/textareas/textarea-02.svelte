<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import Textarea from '$lib/components/ui/textarea.svelte';
</script>

<div class="space-y-2">
	<Label for="textarea-02">
		Required textarea <span class="text-destructive">*</span>
	</Label>
	<Textarea id="textarea-02" placeholder="Leave a message" required />
</div>
