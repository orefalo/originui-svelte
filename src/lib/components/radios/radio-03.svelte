<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group/index.js';
</script>

<RadioGroup value="medium" disabled>
	<div class="flex items-center gap-2">
		<RadioGroupItem value="small" id="radio-03-small" />
		<Label for="radio-03-small">Small</Label>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroupItem value="medium" id="radio-03-medium" />
		<Label for="radio-03-medium">Medium</Label>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroupItem value="large" id="radio-03-large" />
		<Label for="radio-03-large">Large</Label>
	</div>
</RadioGroup>
