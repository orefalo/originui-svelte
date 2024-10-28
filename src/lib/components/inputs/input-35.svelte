<script module lang="ts">
	// [!code collapse-start]
	/**
	 * IMPORTANT: This component was built for demo purposes only and has not been tested in production.
	 * It serves as a proof of concept for a character limit input.
	 * If you're interested in collaborating to create a more robust, production-ready
	 * headless component, your contributions are welcome!
	 */
	export class CharacterLimit {
		maxLength: number;

		#value = $state('');
		characterCount = $derived(this.#value.length);

		constructor(maxLength: number) {
			this.maxLength = maxLength;
		}

		set value(value: string) {
			this.#value = value.slice(0, this.maxLength);
		}

		get value() {
			return this.#value;
		}
	}
	// [!code collapse-end]
</script>

<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import Input from '$lib/components/ui/input.svelte';

	const maxLength = 8;
	const characterLimit = new CharacterLimit(maxLength);
</script>

<div class="space-y-2">
	<Label for="input-35">Input with characters left</Label>
	<Input
		id="input-35"
		type="text"
		bind:value={characterLimit.value}
		maxlength={characterLimit.maxLength}
		aria-describedby="characters-left"
	/>
	<p
		id="characters-left"
		class="mt-2 text-xs text-muted-foreground"
		role="status"
		aria-live="polite"
	>
		<span class="tabular-nums">{characterLimit.maxLength - characterLimit.characterCount}</span> characters
		left
	</p>
</div>
