export const prerender = true;

import type { PageLoad } from './$types.js';
import { readComponent } from '$lib/readComponentSource.js';

const directory = 'inputs';
const inputFiles = [
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
	'input-50',
	'input-51'
];
export const load = (async () => {
	const components = await Promise.all(inputFiles.map((file) => readComponent(directory, file)));
	return { components };
}) satisfies PageLoad;
