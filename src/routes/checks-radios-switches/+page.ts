export const prerender = true;

import type { PageLoad } from './$types.js';
import { createComponentRender } from '$lib/utils/handleComponentSource.js';

export const load = (async ({ data }) => {
	const { componentMetadataSwitch, componentMetadataRadio, componentMetadataCheckbox } = data;

	const switchComponents = await Promise.all(
		componentMetadataSwitch.map((component) => createComponentRender(component))
	);
	const radioComponents = await Promise.all(
		componentMetadataRadio.map((component) => createComponentRender(component))
	);
	const checkboxComponents = await Promise.all(
		componentMetadataCheckbox.map((component) => createComponentRender(component))
	);

	return { switchComponents, radioComponents, checkboxComponents };
}) satisfies PageLoad;
