<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import Textarea from '$lib/components/ui/textarea.svelte';
</script>

<div class="space-y-2" style:--ring="234 89% 74%">
	<Label for="textarea-05">Textarea with colored border and ring</Label>
	<Textarea id="textarea-05" placeholder="Leave a comment" />
</div>
