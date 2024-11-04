import type { PageServerLoad } from './$types.js';
import { fetchComponentsFromAPI } from '$lib/utils/handleComponentSource.js';

export const load = (async ({ fetch }) => {
	const componentMetadataSwitch = await fetchComponentsFromAPI(fetch, 'switches');
	const componentMetadataRadio = await fetchComponentsFromAPI(fetch, 'radios');
	const componentMetadataCheckbox = await fetchComponentsFromAPI(fetch, 'checkboxes');

	return {
		componentMetadataSwitch,
		componentMetadataRadio,
		componentMetadataCheckbox
	};
}) satisfies PageServerLoad;
