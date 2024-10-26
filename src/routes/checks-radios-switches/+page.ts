export const prerender = true;

import type { PageLoad } from './$types.js';
import { readComponent } from '$lib/readComponentSource.js';

const checboxDir = 'checkboxes';
const checboxFiles = [
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
];

const radioDir = 'radios';
const radioFiles = [
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
	'radio-18'
];

const switchDir = 'switches';
const switchFiles = [
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
	'switch-17',
	'switch-18'
];

export const load = (async () => {
	const checkboxComponents = await Promise.all(
		checboxFiles.map((file) => readComponent(checboxDir, file))
	);
	const radioComponents = await Promise.all(
		radioFiles.map((file) => readComponent(radioDir, file))
	);
	const switchComponents = await Promise.all(
		switchFiles.map((file) => readComponent(switchDir, file))
	);

	return { checkboxComponents, radioComponents, switchComponents };
}) satisfies PageLoad;
