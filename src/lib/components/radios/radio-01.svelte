<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group/index.js';
</script>

<RadioGroup value="small">
	<div class="flex items-center gap-2">
		<RadioGroupItem value="small" id="radio-01-small" />
		<Label for="radio-01-small">Small</Label>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroupItem value="medium" id="radio-01-medium" />
		<Label for="radio-01-medium">Medium</Label>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroupItem value="large" id="radio-01-large" />
		<Label for="radio-01-large">Large</Label>
	</div>
</RadioGroup>
