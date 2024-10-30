import type { Component } from 'svelte';

export type ComponentMetadata = {
	id: string;
	path: string;
	code: {
		copyable: { content: string };
		preview: { content: string };
		highlighted: { content: string };
	};
};

export type ComponentRender = ComponentMetadata & {
	render: Component;
};

export type ComponentDirectory = {
	directory: string;
	files: string[];
};
