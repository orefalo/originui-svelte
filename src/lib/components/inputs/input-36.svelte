<script lang="ts">
	// Dependencies: pnpm install bits-ui @internationalized/date

	/**
	 * //$lib/runes/use-locale.svelte.js
	 * import { getContext, setContext } from 'svelte';

const LOCALE_CONTEXT_KEY = Symbol('locale');

interface LocaleOptions {
	locale?: string;
}

function getDefaultLocale(): string {
	if (typeof navigator !== 'undefined' && 'language' in navigator) {
		return navigator.language;
	}
	return 'en-US';
}

export class LocaleManager {
	#locale = $state('');

	constructor(options: LocaleOptions = {}) {
		this.#locale = options.locale ?? getDefaultLocale();
	}

	get locale(): string {
		return this.#locale;
	}

	set locale(value: string) {
		this.#locale = value;
	}
}

export function useLocale(options: LocaleOptions = {}): LocaleManager {
	const contextLocale = getContext<LocaleManager | undefined>(LOCALE_CONTEXT_KEY);

	if (contextLocale) {
		return contextLocale;
	}

	const localeManager = new LocaleManager(options);
	setContext(LOCALE_CONTEXT_KEY, localeManager);

	return localeManager;
}

	*/

	import { DateField } from 'bits-ui';
	import Label from '$lib/components/ui/label.svelte';
	import { useLocale } from '$lib/runes/use-locale.svelte.js';

	const localeCtx = useLocale();
</script>

<div class="space-y-2">
	<Label class="text-sm font-medium text-foreground">Date input</Label>
	<DateField.Root locale={localeCtx.locale}>
		<DateField.Input
			class="relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input bg-background px-3 py-2 text-sm shadow-sm shadow-black/[.04] ring-offset-background transition-shadow focus-within:border-ring data-[disabled]:opacity-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-ring/30 focus-within:ring-offset-2"
		>
			{#snippet children({ segments })}
				{#each segments as segment}
					<DateField.Segment
						part={segment.part}
						class="inline rounded p-0.5 text-foreground caret-transparent outline outline-0 data-[disabled]:cursor-not-allowed focus:bg-accent data-[invalid]:data-[focused]:bg-destructive data-[type=literal]:px-0 focus:aria-[valuetext=Empty]:text-foreground focus:text-foreground data-[invalid]:focus:data-[placeholder]:text-destructive-foreground data-[invalid]:focus:text-destructive-foreground data-[invalid]:aria-[valuetext=Empty]:text-destructive data-[invalid]:text-destructive aria-[valuetext=Empty]:text-muted-foreground/70 data-[segment=literal]:text-muted-foreground/70 data-[disabled]:opacity-50"
					>
						{segment.value}
					</DateField.Segment>
				{/each}
			{/snippet}
		</DateField.Input>
	</DateField.Root>
	<p class="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
		Built with <a
			class="underline hover:text-foreground"
			href="https://next.bits-ui.com/docs/components/date-field"
			target="_blank"
			rel="noopener nofollow"
		>
			Bits UI DateField
		</a>
	</p>
</div>
