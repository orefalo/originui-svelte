<script lang="ts">
	import CheckboxTree, { type TreeNode } from '$lib/components/ui/checkbox-tree.svelte';
	import Checkbox from '$lib/components/ui/checkbox.svelte';
	import Label from '$lib/components/ui/label.svelte';

	const initialTree: TreeNode = {
		id: 'natural-wonders',
		label: 'Natural Wonders',
		children: [
			{ id: 'mountains', label: 'Mountains', defaultChecked: true },
			{
				id: 'waterfalls',
				label: 'Waterfalls',
				children: [
					{ id: 'niagara', label: 'Niagara Falls' },
					{ id: 'angel-falls', label: 'Angel Falls', defaultChecked: true }
				]
			},
			{ id: 'grand-canyon', label: 'Grand Canyon' }
		]
	};
</script>

<div class="space-y-3">
	<CheckboxTree tree={initialTree}>
		{#snippet renderNode({ id, label, isChecked, onCheckedChange, children })}
			<div class="ms-6 flex items-center gap-2">
				<Checkbox {id} checked={isChecked} {onCheckedChange} />
				<Label for={id}>{label}</Label>
			</div>

			{#if children}
				{#each children as child (child.id)}
					<div class="ms-6 space-y-3">
						{@render renderNode({ ...child })}
					</div>
				{/each}
			{/if}
		{/snippet}
	</CheckboxTree>
</div>
