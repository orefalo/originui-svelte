export const prerender = true;
import type { EntryGenerator, RequestHandler } from './$types.js';
import { getComponentSource } from '$lib/utils/handleComponentSource.js';
//We could use a dynamic import here, but this is more fun...
const AVAILABLE_COMPONENTS = [
	{
		directory: 'buttons',
		files: [
			'button-01',
			'button-02',
			'button-03',
			'button-04',
			'button-05',
			'button-06',
			'button-07',
			'button-08',
			'button-09',
			'button-10',
			'button-11',
			'button-12',
			'button-13',
			'button-14',
			'button-15',
			'button-16',
			'button-17',
			'button-18',
			'button-19',
			'button-20',
			'button-21',
			'button-22',
			'button-23',
			'button-24',
			'button-25',
			'button-26',
			'button-27',
			'button-28',
			'button-29',
			'button-30',
			'button-31',
			'button-32',
			'button-33',
			'button-34',
			'button-35',
			'button-36',
			'button-37',
			'button-38',
			'button-39',
			'button-40',
			'button-41',
			'button-42',
			'button-43',
			'button-44',
			'button-45',
			'button-46',
			'button-47',
			'button-48',
			'button-49',
			'button-50',
			'button-51'
		]
	},
	{
		directory: 'inputs',
		files: [
			'input-01',
			'input-02',
			'input-03',
			'input-04',
			'input-05',
			'input-06',
			'input-07',
			'input-08',
			'input-09',
			'input-10',
			'input-11',
			'input-12',
			'input-13',
			'input-14',
			'input-15',
			'input-16',
			'input-17',
			'input-18',
			'input-19',
			'input-20',
			'input-21',
			'input-22',
			'input-23',
			'input-24',
			'input-25',
			'input-26',
			'input-27',
			'input-28',
			'input-29',
			'input-30',
			'input-31',
			'input-32',
			'input-33',
			'input-34',
			'input-35',
			'input-36',
			'input-37',
			'input-38',
			'input-39',
			'input-40',
			'input-41',
			'input-42',
			'input-43',
			'input-44',
			'input-45',
			'input-46',
			'input-47',
			'input-48',
			'input-49',
			'input-50'
		]
	},
	{
		directory: 'checkboxes',
		files: [
			'checkbox-01',
			'checkbox-02',
			'checkbox-03',
			'checkbox-04',
			'checkbox-05',
			'checkbox-06',
			'checkbox-07',
			'checkbox-08',
			'checkbox-09',
			'checkbox-10',
			'checkbox-11',
			'checkbox-12',
			'checkbox-13',
			'checkbox-14',
			'checkbox-15',
			'checkbox-16',
			'checkbox-17',
			'checkbox-18'
		]
	},
	{
		directory: 'radios',
		files: [
			'radio-01',
			'radio-02',
			'radio-03',
			'radio-04',
			'radio-05',
			'radio-06',
			'radio-07',
			'radio-08',
			'radio-09',
			'radio-10',
			'radio-11',
			'radio-12',
			'radio-13',
			'radio-14',
			'radio-15',
			'radio-16',
			'radio-17',
			'radio-18',
			'radio-19'
		]
	},
	{
		directory: 'switches',
		files: [
			'switch-01',
			'switch-02',
			'switch-03',
			'switch-04',
			'switch-05',
			'switch-06',
			'switch-07',
			'switch-08',
			'switch-09',
			'switch-10',
			'switch-11',
			'switch-12',
			'switch-13',
			'switch-14',
			'switch-15',
			'switch-16',
			'switch-17'
		]
	}
];

export const entries: EntryGenerator = () => {
	return AVAILABLE_COMPONENTS.map(({ directory }) => ({ directory }));
};

export const GET: RequestHandler = async ({ params }) => {
	const { directory } = params;

	try {
		const foundDirectory = AVAILABLE_COMPONENTS.find(
			(component) => component.directory === directory
		);

		if (!foundDirectory) {
			return new Response(null, {
				status: 404,
				statusText: 'Component not available (yet?). Create a new issue if you need this.'
			});
		}

		const components = await Promise.all(
			foundDirectory.files.map((file) => getComponentSource(foundDirectory.directory, file))
		);

		const responseHeaders = {
			'Content-Type': 'application/json',
			'Cache-Control': 'public, max-age=31536000, immutable, stale-while-revalidate=86400'
		};

		return new Response(JSON.stringify(components), { headers: responseHeaders });
	} catch (error) {
		console.error('Error fetching components:', error);
		return new Response(null, {
			status: 500,
			statusText: 'Internal server error while fetching components'
		});
	}
};

export const fallback: RequestHandler = async () => {
	return new Response(null, {
		status: 404,
		statusText: `Components not available (yet?). Create a new issue if you need this. Not even sure why you're here.`
	});
};
