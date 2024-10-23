<script lang="ts">
	// Dependencies: pnpm install lucide-svelte

	import Button from '$lib/components/ui/button.svelte';
	import ChevronUp from 'lucide-svelte/icons/chevron-up';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
</script>

<div class="inline-flex -space-x-px rounded-full shadow-sm shadow-black/[0.04] rtl:space-x-reverse">
	<Button
		class="rounded-none shadow-none first:rounded-s-full last:rounded-e-full focus-visible:z-10"
		size="icon"
		aria-label="Upvote"
	>
		<ChevronUp size={16} stroke-width={2} aria-hidden="true" />
	</Button>
	<span class="flex items-center bg-primary px-1 text-sm font-medium text-primary-foreground">
		235
	</span>
	<Button
		class="rounded-none shadow-none first:rounded-s-full last:rounded-e-full focus-visible:z-10"
		size="icon"
		aria-label="Downvote"
	>
		<ChevronDown size={16} stroke-width={2} aria-hidden="true" />
	</Button>
</div>
