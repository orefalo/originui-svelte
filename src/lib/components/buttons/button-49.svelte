<script lang="ts">
	// Dependencies: pnpm install -D unplugin-icons @iconify-json/lucide

	import Button from '$lib/components/ui/button.svelte';
	import IconCircleUserRound from 'lucide-svelte/icons/circle-user-round';
	import IconX from 'lucide-svelte/icons/x';

	let fileInput: HTMLInputElement;
	let files = $state<FileList | null>(null);
	let fileName = $state<string | null>(null);
	let previewUrl = $state<string | null>(null);

	function handleThumbnailClick() {
		fileInput.click();
	}

	$effect(() => {
		if (files && files.length > 0) {
			fileName = files[0].name;
			previewUrl = URL.createObjectURL(files[0]);
			console.log('File selected:', files[0]);
		}
	});

	function handleRemove() {
		fileName = null;
		previewUrl = null;
		fileInput.value = '';
	}
</script>

<div>
	<div class="relative inline-flex">
		<Button
			variant="outline"
			class="relative size-16 overflow-hidden"
			onclick={handleThumbnailClick}
			aria-label={previewUrl ? 'Change image' : 'Upload image'}
		>
			{#if previewUrl}
				<img
					class="absolute inset-0 h-full w-full object-cover"
					src={previewUrl}
					alt="Preview of uploaded file"
				/>
			{:else}
				<div aria-hidden="true">
					<IconCircleUserRound class="opacity-60" width="16" height="16" stroke-width="2" />
				</div>
			{/if}
		</Button>
		{#if previewUrl}
			<Button
				onclick={handleRemove}
				size="icon"
				variant="destructive"
				class="absolute -right-2 -top-2 size-6 rounded-full border-2 border-background"
				aria-label="Remove image"
			>
				<IconX size={16} />
			</Button>
		{/if}
		<input
			type="file"
			bind:this={fileInput}
			bind:files
			class="hidden"
			accept="image/*"
			aria-label="Upload image file"
		/>
	</div>
	{#if fileName}
		<p
			class="mt-2 text-xs text-muted-foreground lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100"
		>
			{fileName}
		</p>
	{/if}
	<div class="sr-only" aria-live="polite" role="status">
		{previewUrl ? 'Image uploaded and preview available' : 'No image uploaded'}
	</div>
</div>
