import {
	createHighlighterCore,
	type CodeToHastOptions,
	type HighlighterCore,
	type ShikiTransformer
} from 'shiki/core';
import { createOnigurumaEngine } from 'shiki/engine/oniguruma';
import githubDarkDefault from 'shiki/themes/github-dark-default.mjs';
import githubLightDefault from 'shiki/themes/github-light-default.mjs';
import type { Element } from 'hast';
import { h } from 'hastscript';

let highlighterInstance: HighlighterCore | null = null;
let highlighterPromise: Promise<HighlighterCore> | null = null;

async function createHighlighterInstance() {
	// Return existing instance if available
	if (highlighterInstance) return highlighterInstance;

	// Return in-progress initialization if one exists
	if (highlighterPromise) return highlighterPromise;

	// Create new initialization promise
	highlighterPromise = createHighlighterCore({
		themes: [githubDarkDefault, githubLightDefault],
		langs: [import('shiki/langs/svelte.mjs')],
		engine: createOnigurumaEngine(import('shiki/wasm'))
	}).then((instance) => {
		highlighterInstance = instance;
		return instance;
	});

	return highlighterPromise;
}

type CollapsibleSection = {
	start: { line: Element; characterStart: number; characterEnd: number };
	end?: { line: Element; characterStart: number; characterEnd: number };
};

function createCollapsibleSectionTransformer(
	startRegex: RegExp,
	endRegex: RegExp
): ShikiTransformer {
	return {
		code(code) {
			const lines = code.children.filter((i) => i.type === 'element') as Element[];

			const collapsibleSectionsMap = new Map<number, CollapsibleSection>();

			lines.forEach((line, idx) => {
				for (const child of line.children) {
					if (child.type !== 'element') continue;
					const text = child.children[0];
					if (text.type !== 'text') continue;

					if (startRegex.test(text.value)) {
						const section = {
							start: { line: line, characterStart: 0, characterEnd: text.value.length },
							end: undefined
						};
						collapsibleSectionsMap.set(idx, section);
					}

					if (endRegex.test(text.value)) {
						const openSection = Array.from(collapsibleSectionsMap.values()).find((s) => !s.end);
						if (!openSection) continue;

						openSection.end = {
							line: line,
							characterStart: 0,
							characterEnd: text.value.length
						};
					}
				}
			});

			if (collapsibleSectionsMap.size === 0) return code;

			const collapsibleSections = Array.from(collapsibleSectionsMap.entries());
			for (let i = collapsibleSections.length - 1; i >= 0; i--) {
				const [_idx, section] = collapsibleSections[i];
				const { start, end } = section;
				if (!end) continue; // Skip sections without an end

				const startLineIdx = code.children.indexOf(start.line);
				const endLineIdx = code.children.indexOf(end.line);
				const linesBetween = code.children.slice(startLineIdx + 1, endLineIdx);

				const linesBetweenContent = linesBetween
					.filter((line) => line.type === 'element' || line.type === 'text')
					.filter((line) => (line.type === 'element' ? line.children.length > 0 : true))
					.map((line) => (line.type === 'element' ? line.children : line.value));

				const wrapperDiv = h(
					'div',
					{
						class: 'collapsed-section-wrapper contents group',
						'data-open': 'false'
					},
					[
						h(
							'button',
							{
								class: /*tw*/ `inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium
									bg-muted/40 hover:bg-muted/60
									border border-border/30 hover:border-border/50
									rounded-md shadow-sm 
									text-foreground/70 hover:text-foreground
									transition-all duration-150
									relative -ml-1 -mt-1`,
								onclick: `
									this.parentElement.dataset.open === 'true' ? this.parentElement.dataset.open = 'false' : this.parentElement.dataset.open = 'true'
									this.textContent = this.parentElement.dataset.open === 'true' ? 'Collapse code 📕' : 'Expand code 📖'
									this.parentElement.focus()
								`
							},
							'Expand code 📖'
						),
						h(
							'span',
							{ class: 'collapsed-section inline group-data-[open=false]:hidden' },
							linesBetweenContent
						)
					]
				);

				code.children[startLineIdx] = wrapperDiv;
				code.children.splice(startLineIdx + 1, linesBetween.length + 1);
			}

			return code;
		}
	};
}

const collapsibleSectionTransformer = createCollapsibleSectionTransformer(
	new RegExp(
		`\\s*(?://|/\\*|<!--|#|--|%{1,2}|;{1,2}|"|')\\s+\\[!code collapse-start\\]\\s*(?:\\*/|-->)?\\s*$`
	),
	new RegExp(
		`\\s*(?://|/\\*|<!--|#|--|%{1,2}|;{1,2}|"|')\\s+\\[!code collapse-end\\]\\s*(?:\\*/|-->)?\\s*$`
	)
);

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
		transformers: [collapsibleSectionTransformer],
		...options
	});

	return html;
}

export default highlighter;
