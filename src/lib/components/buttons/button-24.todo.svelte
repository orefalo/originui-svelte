<script lang="ts">
	// Dependencies: pnpm install lucide-svelte bits-ui

	import Toggle from '$lib/components/ui/toggle.svelte';
	import {
		Tooltip,
		TooltipContent,
		TooltipProvider,
		TooltipTrigger
	} from '$lib/components/ui/tooltip/index.js';
	import Bookmark from 'lucide-svelte/icons/bookmark';

	let bookmarked = $state(false);
</script>

<TooltipProvider>
	<Tooltip>
		<TooltipTrigger
			class="group size-9 p-0 hover:bg-indigo-50 hover:text-indigo-500 data-[state=on]:bg-indigo-50 data-[state=on]:text-indigo-500"
		>
			{#snippet child({ props })}
				<Toggle
					aria-label="Bookmark this"
					pressed={bookmarked}
					onPressedChange={() => (bookmarked = !bookmarked)}
				>
					{#snippet children()}
						<Bookmark size={16} stroke-width={2} aria-hidden="true" />
					{/snippet}
				</Toggle>
			{/snippet}
		</TooltipTrigger>
		<TooltipContent class="border border-input bg-popover px-2 py-1 text-xs text-muted-foreground">
			<p>{bookmarked ? 'Remove bookmark' : 'Bookmark this'}</p>
		</TooltipContent>
	</Tooltip>
</TooltipProvider>
