<script lang="ts">
	// Dependencies: pnpm install bits-ui

	import { ToggleGroup, ToggleGroupItem } from '$lib/components/ui/toggle-group/index.js';
</script>

<ToggleGroup
	variant="outline"
	class="inline-flex gap-0 -space-x-px rounded-lg shadow-sm shadow-black/[0.04] rtl:space-x-reverse"
	type="single"
>
	<ToggleGroupItem
		class="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
		value="left"
	>
		Left
	</ToggleGroupItem>
	<ToggleGroupItem
		class="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
		value="center"
	>
		Center
	</ToggleGroupItem>
	<ToggleGroupItem
		class="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
		value="right"
	>
		Right
	</ToggleGroupItem>
</ToggleGroup>
