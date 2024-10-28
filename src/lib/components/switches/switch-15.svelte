<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import Switch from '$lib/components/ui/switch.svelte';

	let checked = $state(false);
</script>

<div
	class="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/[.04] has-[[data-state=checked]]:border-ring"
>
	<Switch
		id="switch-15"
		bind:checked
		class="order-1 h-4 w-6 after:absolute after:inset-0 [&_span]:size-3 [&_span]:data-[state=checked]:translate-x-2 rtl:[&_span]:data-[state=checked]:-translate-x-2"
		aria-describedby="switch-15-description"
	/>
	<div class="grid grow gap-1">
		<Label for="switch-15">
			Label
			<span class="text-xs font-normal leading-[inherit] text-muted-foreground"> (Sublabel) </span>
		</Label>
		<p id="switch-15-description" class="text-xs text-muted-foreground">
			A short description goes here.
		</p>
	</div>
</div>
