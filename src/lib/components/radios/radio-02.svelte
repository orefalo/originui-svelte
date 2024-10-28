<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group/index.js';
</script>

<RadioGroup value="small" --primary="238.7 83.5% 66.7%" --ring="238.7 83.5% 66.7%">
	<div class="flex items-center gap-2">
		<RadioGroupItem value="small" id="radio-02-small" />
		<Label for="radio-02-small">Small</Label>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroupItem value="medium" id="radio-02-medium" />
		<Label for="radio-02-medium">Medium</Label>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroupItem value="large" id="radio-02-large" />
		<Label for="radio-02-large">Large</Label>
	</div>
</RadioGroup>
