<script lang="ts">
	// Dependencies: pnpm install lucide-svelte
	import { ChevronDown, ChevronUp } from 'lucide-svelte';
	import Label from '$lib/components/ui/label.svelte';

	let value = $state(99);

	function formatCurrency(amount: number): string {
		return new Intl.NumberFormat('de-DE', {
			style: 'currency',
			currency: 'EUR',
			currencySign: 'accounting'
		}).format(amount);
	}

	function increment() {
		value++;
	}

	function decrement() {
		value--;
	}

	function handleInput(event: Event) {
		const input = event.target as HTMLInputElement;
		const newValue = parseFloat(input.value.replace(/[^0-9.-]+/g, ''));
		if (!isNaN(newValue)) {
			value = newValue;
		} else {
			input.value = formatCurrency(value);
		}
	}

	$effect(() => {
		const input = document.getElementById('input-29') as HTMLInputElement;
		if (input) {
			input.value = formatCurrency(value);
		}
	});
</script>

<div class="space-y-2">
	<Label for="input-29" class="text-sm font-medium text-foreground"
		>Number input with chevrons</Label
	>
	<div
		class="relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input text-sm shadow-sm shadow-black/[.04] ring-offset-background transition-shadow focus-within:border-ring focus-within:outline-none focus-within:ring-2 focus-within:ring-ring/30 focus-within:ring-offset-2"
	>
		<input
			id="input-29"
			type="text"
			oninput={handleInput}
			aria-labelledby="input-29"
			autocomplete="off"
			inputmode="decimal"
			autocorrect="off"
			aria-roledescription="Currency input"
			spellcheck="false"
			class="flex-1 bg-background px-3 py-2 tabular-nums text-foreground focus:outline-none"
		/>
		<div class="flex h-[calc(100%+2px)] flex-col">
			<button
				id="increment-button"
				onclick={increment}
				class="-me-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-sm text-muted-foreground/80 ring-offset-background transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
				aria-label="Increase value"
				aria-labelledby="increment-button input-29"
				aria-controls="input-29"
			>
				<ChevronUp size={12} stroke-width={2} aria-hidden="true" />
			</button>
			<button
				id="decrement-button"
				onclick={decrement}
				class="-me-px -mt-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-sm text-muted-foreground/80 ring-offset-background transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
				aria-label="Decrease value"
				aria-labelledby="decrement-button input-29"
				aria-controls="input-29"
			>
				<ChevronDown size={12} stroke-width={2} aria-hidden="true" />
			</button>
		</div>
	</div>
</div>
