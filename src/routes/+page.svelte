<script lang="ts">
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
</script>

<main>
	<div class="px-4 sm:px-6">
		<div class="mx-auto w-full max-w-3xl">
			<div class="mb-16">
				<h1
					class="mx-auto mb-4 max-w-3xl text-4xl/[1.1] font-extrabold tracking-tight text-foreground md:text-5xl/[1.1]"
				>
					Beautiful UI components built with Tailwind CSS and
					<span class="text-svelte"> Svelte </span>
				</h1>
				<p class="text-lg text-muted-foreground mb-4">
					Origin UI - Svelte is an extensive collection of copy-and-paste components for quickly
					building app UIs. It's free, open-source, and ready to drop into your projects.
				</p>
				<p
					class="text-accent-foreground w-fit text-sm max-w-prose text-pretty border-t border-border pt-4"
				>
					This project is not affiliated with the original <a
						class="underline text-svelte"
						href="https://originui.com/"
						rel="noreferrer">Origin UI</a
					>. <br />
					<span class="text-xs text-muted-foreground">
						I'm grateful for their work and have created these Svelte components copied from their
						design.
					</span>
				</p>
			</div>

			<div class="mb-16">
				<h2 class="mb-5 text-muted-foreground">Latest components</h2>
				<nav>
					<ul class="flex flex-col gap-2">
						<li>
							<a
								href="/inputs"
								class="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-input bg-background p-4 font-bold shadow-sm shadow-black/[0.04] ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
							>
								Input
								<ArrowRight size={16} stroke-width={2} class="-mr-1 ml-2 opacity-60" />
							</a>
						</li>
						<li>
							<a
								href="/buttons"
								class="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-input bg-background p-4 font-bold shadow-sm shadow-black/[0.04] ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
							>
								Button
								<ArrowRight size={16} stroke-width={2} class="-mr-1 ml-2 opacity-60" />
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</main>
