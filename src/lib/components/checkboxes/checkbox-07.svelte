<script lang="ts">
	import Checkbox from '$lib/components/ui/checkbox.svelte';
	import Label from '$lib/components/ui/label.svelte';
</script>

<div class="flex items-center gap-2">
	<Checkbox id="checkbox-07" />
	<Label for="checkbox-07">
		I agree to the
		<a class="underline" href="https://originui.com" target="_blank" rel="noopener noreferrer">
			terms of service
		</a>
	</Label>
</div>
