<script lang="ts">
	// Dependencies: pnpm install lucide-svelte

	import Button from '$lib/components/ui/button.svelte';
	import { Minus, Plus, Volume, Volume1, Volume2, VolumeX } from 'lucide-svelte';

	let volume = $state(3);

	function decreaseVolume() {
		volume = Math.max(0, volume - 1);
	}

	function increaseVolume() {
		volume = Math.min(6, volume + 1);
	}

	// Reactive volume icon selection
	const VolumeIcon = $derived(
		volume === 0 ? VolumeX : volume < 3 ? Volume : volume < 5 ? Volume1 : Volume2
	);
</script>

<div class="inline-flex items-center" role="group" aria-labelledby="volume-control">
	<span id="volume-control" class="sr-only"> Volume Control </span>
	<Button
		class="rounded-full"
		variant="outline"
		size="icon"
		aria-label="Decrease volume"
		onclick={decreaseVolume}
		disabled={volume === 0}
	>
		<Minus size={16} stroke-width={2} aria-hidden="true" />
		<span class="sr-only">Decrease</span>
	</Button>
	<div class="flex items-center px-3 text-sm font-medium tabular-nums" aria-live="polite">
		<VolumeIcon class="opacity-60" size={16} stroke-width={2} aria-hidden="true" />

		<span class="ms-2" aria-label={`Current volume is ${volume}`}>
			{volume}
		</span>
	</div>
	<Button
		class="rounded-full"
		variant="outline"
		size="icon"
		aria-label="Increase volume"
		onclick={increaseVolume}
		disabled={volume === 6}
	>
		<Plus size={16} stroke-width={2} aria-hidden="true" />
		<span class="sr-only">Increase</span>
	</Button>
</div>
