<script lang="ts">
	// Dependencies: pnpm install -D unplugin-icons @iconify-json/lucide

	import Button from '$lib/components/ui/button.svelte';
	import IconChevronLeft from 'lucide-svelte/icons/chevron-left';
</script>

<Button variant="link">
	<IconChevronLeft
		class="me-1 opacity-60"
		width="16"
		height="16"
		stroke-width="2"
		aria-hidden="true"
	/>
	Go back
</Button>
