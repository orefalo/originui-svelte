<script lang="ts">
	/**
     * export class CharacterLimit {
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
    */
	import Label from '$lib/components/ui/label.svelte';
	import Input from '$lib/components/ui/input.svelte';
	import { CharacterLimit } from '$lib/runes/character-limit.svelte';

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
