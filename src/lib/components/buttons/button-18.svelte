<script lang="ts">
	// Dependencies: pnpm install lucide-svelte
	// Dependencies: pnpm install --save-dev @sveltejs/enhanced-img
	// see @https://svelte.dev/docs/kit/images#sveltejs-enhanced-img

	import Button from '$lib/components/ui/button.svelte';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
</script>

<Button variant="ghost" class="h-auto p-0 hover:bg-transparent">
	<enhanced:img
		class="size-[40px] rounded-full"
		src="/static/avatar.jpg"
		alt="Profile image"
		loading="lazy"
		aria-hidden="true"
	/>

	<ChevronDown size={16} stroke-width={2} class="ms-2 opacity-60" aria-hidden="true" />
</Button>
