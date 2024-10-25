export const prerender = true;

import type { PageLoad } from './$types.js';
import { readComponent } from '$lib/readComponentSource.js';

const directory = 'buttons';
const buttonFiles = [
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
];
export const load = (async () => {
	const components = await Promise.all(buttonFiles.map((file) => readComponent(directory, file)));
	return { components };
}) satisfies PageLoad;
