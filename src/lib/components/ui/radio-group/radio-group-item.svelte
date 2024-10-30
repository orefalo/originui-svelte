<script lang="ts">
	import { RadioGroup as RadioGroupPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		value = $bindable(''),
		class: className,
		...restProps
	}: RadioGroupPrimitive.ItemProps = $props();

	export { className as class };
</script>

<RadioGroupPrimitive.Item
	{value}
	bind:ref
	class={cn(
		'aspect-square size-4 rounded-full border border-input shadow-sm shadow-black/[.04] ring-offset-background transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
		className
	)}
	{...restProps}
>
	{#snippet children({ checked })}
		{#if checked}
			<div class="flex items-center justify-center text-current">
				<svg
					width="6"
					height="6"
					viewBox="0 0 6 6"
					fill="currentcolor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="3" cy="3" r="3" />
				</svg>
			</div>
		{/if}
	{/snippet}
</RadioGroupPrimitive.Item>
