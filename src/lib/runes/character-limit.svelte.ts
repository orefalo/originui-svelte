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
