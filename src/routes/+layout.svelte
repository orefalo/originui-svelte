<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/inter';
	import '@fontsource-variable/jetbrains-mono';

	import { Tooltip } from 'bits-ui';
	import Header from '$lib/demo/header.svelte';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<ModeWatcher />
<Tooltip.Provider>
	<div
		class="relative flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip"
	>
		<Header />
		{@render children()}
	</div>
</Tooltip.Provider>
