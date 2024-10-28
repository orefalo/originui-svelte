<script lang="ts">
	import Checkbox from '$lib/components/ui/checkbox.svelte';
	import Label from '$lib/components/ui/label.svelte';
</script>

<div class="flex items-start gap-2">
	<Checkbox id="checkbox-12" class="order-1" aria-describedby="checkbox-12-description" />
	<div class="grid grow gap-1">
		<Label for="checkbox-12">
			Label
			<span class="text-xs font-normal leading-[inherit] text-muted-foreground"> (Sublabel) </span>
		</Label>
		<p id="checkbox-12-description" class="text-xs text-muted-foreground">
			You can use this checkbox with a label and a description.
		</p>
	</div>
</div>
