<script lang="ts">
	import Checkbox from '$lib/components/ui/checkbox.svelte';
	import Input from '$lib/components/ui/input.svelte';
	import Label from '$lib/components/ui/label.svelte';

	let checked = $state(false);
	let inputElement: HTMLInputElement | null = $state(null);

	$effect(() => {
		if (checked === true && inputElement) {
			inputElement.focus();
		}
	});
</script>

<div>
	<div class="flex items-start gap-2">
		<Checkbox id="checkbox-11" bind:checked aria-controls="checkbox-input-11" class="h-4 w-4" />
		<div class="grow">
			<div class="grid gap-1">
				<Label for="checkbox-11">Checkbox with expansion</Label>
				<p id="checkbox-11-description" class="text-xs text-muted-foreground">
					You can use this checkbox with a label and a description.
				</p>
			</div>
			<!-- Expandable field -->
			<div
				role="region"
				id="checkbox-input-11"
				aria-labelledby="checkbox-11"
				class="grid transition-all ease-in-out data-[state=collapsed]:grid-rows-[0fr] data-[state=expanded]:grid-rows-[1fr] data-[state=collapsed]:opacity-0 data-[state=expanded]:opacity-100"
				data-state={checked ? 'expanded' : 'collapsed'}
			>
				<div class="-m-2 overflow-hidden p-2">
					<div class="mt-3">
						<Input
							bind:ref={inputElement}
							type="text"
							id="checkbox-11-additional-info"
							placeholder="Enter details"
							aria-label="Additional Information"
							disabled={!checked}
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
