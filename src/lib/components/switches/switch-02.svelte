<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import Switch from '$lib/components/ui/switch.svelte';
</script>

<div class="inline-flex items-center gap-2">
	<Switch
		id="switch-02"
		class="h-5 w-8 [&_span]:size-4 [&_span]:data-[state=checked]:translate-x-3 rtl:[&_span]:data-[state=checked]:-translate-x-3"
	/>
	<Label for="switch-02" class="sr-only">Small switch</Label>
</div>
