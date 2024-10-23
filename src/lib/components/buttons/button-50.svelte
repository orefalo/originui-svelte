<script lang="ts">
	// Dependencies: pnpm install -D unplugin-icons @iconify-json/lucide

	import Button from '$lib/components/ui/button.svelte';
	import IconChevronUp from 'lucide-svelte/icons/chevron-up';
	import IconChevronDown from 'lucide-svelte/icons/chevron-down';
	import IconChevronLeft from 'lucide-svelte/icons/chevron-left';
	import IconChevronRight from 'lucide-svelte/icons/chevron-right';
	import IconCircle from 'lucide-svelte/icons/circle';
</script>

<div class="inline-grid w-fit grid-cols-3 gap-1">
	<div></div>
	<Button variant="outline" size="icon" aria-label="Pan camera up">
		<IconChevronUp width="16" height="16" stroke-width="2" aria-hidden="true" />
	</Button>
	<div></div>
	<Button variant="outline" size="icon" aria-label="Pan camera left">
		<IconChevronLeft width="16" height="16" stroke-width="2" aria-hidden="true" />
	</Button>
	<div class="flex items-center justify-center" aria-hidden="true">
		<IconCircle class="opacity-60" width="16" height="16" stroke-width="2" />
	</div>
	<Button variant="outline" size="icon" aria-label="Pan camera right">
		<IconChevronRight width="16" height="16" stroke-width="2" aria-hidden="true" />
	</Button>
	<div></div>
	<Button variant="outline" size="icon" aria-label="Pan camera down">
		<IconChevronDown width="16" height="16" stroke-width="2" aria-hidden="true" />
	</Button>
	<div></div>
</div>
