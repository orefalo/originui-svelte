<script lang="ts">
	// Dependencies: pnpm install --save-dev @sveltejs/enhanced-img
	// see @https://svelte.dev/docs/kit/images#sveltejs-enhanced-img

	import Button from '$lib/components/ui/button.svelte';
</script>

<Button class="rounded-full py-0 ps-0">
	<div class="me-0.5 flex aspect-square h-full p-1.5">
		<enhanced:img
			class="size-[24px] rounded-full"
			src="/static/avatar.jpg"
			alt="Profile image"
			aria-hidden="true"
		/>
	</div>
	@max_gotts
</Button>
