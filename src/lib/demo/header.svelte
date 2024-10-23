<script lang="ts">
	import GithubButton from '$lib/demo/github-button.svelte';
	import ThemeToggle from '$lib/demo/theme-toggle.svelte';
</script>

<header>
	<div class="px-4 sm:px-6">
		<div
			class="mx-auto mb-16 flex h-[72px] w-full max-w-6xl items-center justify-between border-b border-border/70"
		>
			<a href="/" aria-label="Home">
				<span class="sr-only">Origin UI - Svelte</span>
				<svg
					class="stroke-zinc-800 dark:stroke-zinc-100"
					xmlns="http://www.w3.org/2000/svg"
					width="28"
					height="28"
					viewBox="0 0 32 32"
					aria-hidden="true"
				>
					<circle cx="16" cy="16" r="12" fill="none" stroke-width="8" />
				</svg>
			</a>
			<nav>
				<ul class="flex items-center gap-4">
					<li>
						<ThemeToggle />
					</li>
					<li>
						<GithubButton />
					</li>
				</ul>
			</nav>
		</div>
	</div>
</header>
