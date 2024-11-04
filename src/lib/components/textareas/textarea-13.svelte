<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import Textarea from '$lib/components/ui/textarea.svelte';
</script>

<div class="group relative">
	<Label
		for="textarea-13"
		class="absolute start-1 top-0 z-10 block -translate-y-1/2 bg-background px-2 text-xs font-medium text-foreground group-has-[:disabled]:opacity-50"
	>
		Textarea with overlapping label
	</Label>
	<Textarea id="textarea-13" />
</div>
