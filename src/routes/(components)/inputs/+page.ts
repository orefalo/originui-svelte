export const prerender = true;

import type { PageLoad } from './$types.js';
import { createComponentRender } from '$lib/utils/handleComponentSource.js';

export const load = (async ({ data }) => {
	const { componentMetadataInput, componentMetadataTextarea } = data;

	const inputComponents = await Promise.all(
		componentMetadataInput.map((component) => createComponentRender(component))
	);
	const textareaComponents = await Promise.all(
		componentMetadataTextarea.map((component) => createComponentRender(component))
	);

	return { inputComponents, textareaComponents };
}) satisfies PageLoad;
