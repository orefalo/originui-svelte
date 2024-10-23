<script lang="ts">
	// Dependencies: pnpm install lucide-svelte

	import Button from '$lib/components/ui/button.svelte';
	import X from 'lucide-svelte/icons/x';
</script>

<Button variant="secondary">
	<X class="-ms-1 me-2 opacity-60" size={16} stroke-width={2} aria-hidden="true" />
	Button
</Button>
