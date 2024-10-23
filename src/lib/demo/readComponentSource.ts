import type { Component } from 'svelte';

const components = import.meta.glob('/src/lib/components/**/*.svelte', {
	eager: true,
	import: 'default'
});
const rawComponents = import.meta.glob('/src/lib/components/**/*.svelte', {
	query: '?raw',
	eager: true,
	import: 'default'
});

export async function readComponent(directory: string, componentName: string) {
	const path = `/src/lib/components/${directory}/${componentName}.svelte`;

	if (components[path]) {
		const Component = components[path] as Component;
		const source = rawComponents[path] as string;

		return { Component, source };
	} else {
		return { Component: null, source: null };
	}
}
