<script lang="ts" module>
	// [!code collapse-start]
	/**
	 * IMPORTANT: This component was built for demo purposes only and has not been tested in production.
	 * It serves as a proof of concept for a currency input with plus/minus buttons.
	 * If you're interested in collaborating to create a more robust, production-ready
	 * headless component, your contributions are welcome!
	 */
	class CurrencyInput {
		value = $state(0);
		displayValue = $state('');
		inputElement = $state<HTMLInputElement>();

		constructor(initialValue: number = 99) {
			this.value = initialValue;
			this.displayValue = this.formatCurrency(initialValue);
		}

		formatCurrency(amount: number): string {
			return new Intl.NumberFormat('de-DE', {
				style: 'currency',
				currency: 'EUR',
				currencySign: 'accounting',
				minimumFractionDigits: 2,
				maximumFractionDigits: 2
			}).format(amount);
		}

		parseLocaleNumber(stringNumber: string): number {
			const thousandSeparator = '.';
			const decimalSeparator = ',';
			return parseFloat(
				stringNumber
					.replace(new RegExp('\\' + thousandSeparator, 'g'), '')
					.replace(new RegExp('\\' + decimalSeparator), '.')
			);
		}

		updateValue(v: string) {
			const [integerPart, fractionalPart = ''] = v.split(',');
			const limitedFractionalPart = fractionalPart.slice(0, 2);
			const limitedValue = `${integerPart},${limitedFractionalPart}`;

			const parsedValue = this.parseLocaleNumber(limitedValue);
			if (!isNaN(parsedValue)) {
				this.value = parsedValue;
				this.displayValue = limitedValue;
			}
		}

		increment() {
			this.value = Math.round((this.value + 1) * 100) / 100;
			this.displayValue = this.formatCurrency(this.value);
		}

		decrement() {
			this.value = Math.round((this.value - 1) * 100) / 100;
			this.displayValue = this.formatCurrency(this.value);
		}

		handleInput(event: Event) {
			const input = event.target as HTMLInputElement;
			const cursorPosition = input.selectionStart;
			const cleanedInput = input.value.replace(/[^\d,]/g, '');

			this.updateValue(cleanedInput);

			tick().then(() => {
				const newCursorPosition = Math.min(cursorPosition ?? 0, input.value.length);
				input.setSelectionRange(newCursorPosition, newCursorPosition);
			});
		}

		handleFocus(event: FocusEvent) {
			const input = event.target as HTMLInputElement;
			const numericValue = this.value.toFixed(2).replace('.', ',');
			input.value = numericValue;
			this.displayValue = numericValue;

			tick().then(() => {
				input.setSelectionRange(numericValue.length, numericValue.length);
			});
		}

		handleBlur() {
			this.displayValue = this.formatCurrency(this.value);
		}
	}
	// [!code collapse-end]
</script>

<script lang="ts">
	import { ChevronDown, ChevronUp } from 'lucide-svelte';
	import Label from '$lib/components/ui/label.svelte';
	import { tick } from 'svelte';

	const currencyInput = new CurrencyInput();
</script>

<div class="space-y-2">
	<Label for="input-29" class="text-sm font-medium text-foreground">
		Number input with chevrons
	</Label>
	<div
		class="relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input text-sm shadow-sm shadow-black/[.04] ring-offset-background transition-shadow focus-within:border-ring focus-within:outline-none focus-within:ring-2 focus-within:ring-ring/30 focus-within:ring-offset-2"
	>
		<input
			id="input-29"
			type="text"
			bind:value={currencyInput.displayValue}
			oninput={(e) => currencyInput.handleInput(e)}
			onfocus={(e) => currencyInput.handleFocus(e)}
			onblur={() => currencyInput.handleBlur()}
			inputmode="decimal"
			autocomplete="off"
			autocorrect="off"
			aria-roledescription="Currency input"
			spellcheck="false"
			class="flex-1 bg-background px-3 py-2 tabular-nums text-foreground focus:outline-none"
		/>
		<div class="flex h-[calc(100%+2px)] flex-col">
			<button
				onclick={() => currencyInput.increment()}
				class="-me-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-sm text-muted-foreground/80 ring-offset-background transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
				aria-label="Increase value"
			>
				<ChevronUp size={12} strokeWidth={2} aria-hidden="true" />
			</button>
			<button
				onclick={() => currencyInput.decrement()}
				class="-me-px -mt-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-sm text-muted-foreground/80 ring-offset-background transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
				aria-label="Decrease value"
			>
				<ChevronDown size={12} strokeWidth={2} aria-hidden="true" />
			</button>
		</div>
	</div>
</div>
