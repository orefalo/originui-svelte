import { createHighlighterCore, type CodeToHastOptions, type HighlighterCore } from 'shiki/core';
import { createOnigurumaEngine } from 'shiki/engine/oniguruma';
import githubDarkDefault from 'shiki/themes/github-dark-default.mjs';
import githubLightDefault from 'shiki/themes/github-light-default.mjs';

let highlighterInstance: HighlighterCore | null = null;

async function createHighlighterInstance() {
	if (highlighterInstance) return highlighterInstance;

	highlighterInstance = await createHighlighterCore({
		themes: [githubDarkDefault, githubLightDefault],
		langs: [import('shiki/langs/svelte.mjs')],
		engine: createOnigurumaEngine(import('shiki/wasm'))
	});

	return highlighterInstance;
}

createHighlighterInstance();

async function highlighter(
	code: string,
	options: Omit<Partial<CodeToHastOptions>, 'themes' | 'theme' | 'lang'> = {}
) {
	const instance = await createHighlighterInstance();

	const html = instance.codeToHtml(code, {
		lang: 'svelte',
		themes: {
			light: 'github-light-default',
			dark: 'github-dark-default'
		},
		...options
	});

	return html;
}

export default highlighter;
