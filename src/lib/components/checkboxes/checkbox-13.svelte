<script lang="ts">
	import Checkbox from '$lib/components/ui/checkbox.svelte';
	import Label from '$lib/components/ui/label.svelte';
</script>

<div
	class="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/[.04] has-[[data-state=checked]]:border-ring"
>
	<Checkbox
		id="checkbox-13"
		class="order-1 after:absolute after:inset-0"
		aria-describedby="checkbox-13-description"
	/>
	<div class="grid grow gap-2">
		<Label for="checkbox-13">
			Label
			<span class="text-xs font-normal leading-[inherit] text-muted-foreground"> (Sublabel) </span>
		</Label>
		<p id="checkbox-13-description" class="text-xs text-muted-foreground">
			A short description goes here.
		</p>
	</div>
</div>
