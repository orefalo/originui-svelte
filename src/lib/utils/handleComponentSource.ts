import type { Component } from 'svelte';
import type { ComponentMetadata, ComponentRender } from '../types/components.js';
import { removeShikiComments, addPathComment, addDependenciesComments } from './sourceProcessor.js';
import highlighter from './codePreview.js';

interface ComponentImports {
	compiled: Record<string, Component>;
	source: Record<string, string>;
}

interface ComponentCache {
	metadata: Map<string, ComponentMetadata>;
	renders: Map<string, ComponentRender>;
}

// Initialize caches
const cache: ComponentCache = {
	metadata: new Map(),
	renders: new Map()
};

// Lazy load imports
let imports: ComponentImports | null = null;

function getImports(): ComponentImports {
	if (!imports) {
		imports = {
			compiled: import.meta.glob('/src/lib/components/**/*.svelte', {
				eager: true,
				import: 'default'
			}) as Record<string, Component>,

			source: import.meta.glob('/src/lib/components/**/*.svelte', {
				query: '?raw',
				eager: true,
				import: 'default'
			}) as Record<string, string>
		};
	}
	return imports;
}

function getCacheKey(directory: string, componentName: string): string {
	return `${directory}/${componentName}`;
}

function buildComponentPath(directory: string, componentName: string): string {
	return `/src/lib/components/${directory}/${componentName}.svelte`;
}

function createEmptyComponentMetadata(componentName: string, path: string): ComponentMetadata {
	return {
		id: componentName,
		path,
		code: {
			copyable: { content: '' },
			preview: { content: '' },
			highlighted: { content: '' }
		}
	};
}

async function processComponentSource(rawSource: string, path: string) {
	const cleanedSource = removeShikiComments(rawSource);
	const sourceWithDeps = addDependenciesComments(cleanedSource);
	const previewSource = addPathComment(addDependenciesComments(rawSource), path);
	const highlightedSource = await highlighter(previewSource);

	return {
		copyable: { content: sourceWithDeps },
		preview: { content: previewSource },
		highlighted: { content: highlightedSource }
	};
}

export async function getCompiledComponent(path: string): Promise<Component | null> {
	const { compiled } = getImports();
	return compiled[path] ?? null;
}

export async function getComponentSource(
	directory: string,
	componentName: string
): Promise<ComponentMetadata> {
	const cacheKey = getCacheKey(directory, componentName);

	// Check cache first
	const cachedMetadata = cache.metadata.get(cacheKey);
	if (cachedMetadata) {
		return cachedMetadata;
	}

	const path = buildComponentPath(directory, componentName);
	const { source } = getImports();
	const rawSource = source[path];

	const metadata = !rawSource
		? createEmptyComponentMetadata(componentName, path)
		: {
				id: componentName,
				path,
				code: await processComponentSource(rawSource, path)
			};

	// Cache the result
	cache.metadata.set(cacheKey, metadata);
	return metadata;
}

export async function fetchComponentsFromAPI(
	fetchFn: typeof fetch,
	directory: string,
	skipCache = false
): Promise<ComponentMetadata[]> {
	// Check if all components for this directory are cached
	if (!skipCache) {
		const cachedComponents = Array.from(cache.metadata.entries())
			.filter(([key]) => key.startsWith(directory + '/'))
			.map(([, metadata]) => metadata);

		if (cachedComponents.length > 0) {
			return cachedComponents;
		}
	}

	const response = await fetchFn(`/api/v1/components/${directory}`);

	if (!response.ok) {
		throw new Error(`Failed to fetch components: ${response.statusText}`);
	}

	const components = (await response.json()) as ComponentMetadata[];

	// Cache the results
	components.forEach((component) => {
		const cacheKey = getCacheKey(directory, component.id);
		cache.metadata.set(cacheKey, component);
	});

	return components;
}

export async function createComponentRender(metadata: ComponentMetadata): Promise<ComponentRender> {
	// Check render cache
	const cachedRender = cache.renders.get(metadata.path);
	if (cachedRender) {
		return cachedRender;
	}

	const component = await getCompiledComponent(metadata.path);
	if (!component) {
		console.warn(`Component not found: ${metadata.path}`);
		throw new Error(`Component not found: ${metadata.path}`);
	}

	const render: ComponentRender = {
		render: component,
		...metadata
	};

	// Cache the render
	cache.renders.set(metadata.path, render);
	return render;
}

// Utility function to clear caches if needed
export function clearCache(type?: 'metadata' | 'renders') {
	if (!type || type === 'metadata') cache.metadata.clear();
	if (!type || type === 'renders') cache.renders.clear();
}
