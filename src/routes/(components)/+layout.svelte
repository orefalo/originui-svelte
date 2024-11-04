<script lang="ts">
	import Cta from '$lib/demo/cta.svelte';

	let { children } = $props();
</script>

{@render children()}
<Cta />
