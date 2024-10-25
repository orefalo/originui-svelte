<script lang="ts">
	import '../app.css';
	import '@fontsource/inter/latin.css';
	import '@fontsource/jetbrains-mono/400.css';

	import Header from '$lib/demo/header.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import Cta from '$lib/demo/cta.svelte';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<ModeWatcher />

<div
	class="relative flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip"
>
	<Header />
	{@render children()}
	{#if $page.url.pathname !== '/'}
		<Cta />
	{/if}
</div>
