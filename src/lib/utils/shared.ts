const COLLAPSIBLE_START_REGEX = new RegExp(
	`\\s*(?://|/\\*|<!--|#|--|%{1,2}|;{1,2}|"|')\\s+\\[!code collapse-start\\]\\s*(?:\\*/|-->)?\\s*$`
);
const COLLAPSIBLE_END_REGEX = new RegExp(
	`\\s*(?://|/\\*|<!--|#|--|%{1,2}|;{1,2}|"|')\\s+\\[!code collapse-end\\]\\s*(?:\\*/|-->)?\\s*$`
);

const IMPORTS_REGEX = new RegExp(
	'(?:(?<=(?:import|export)[^`\'"]*from\\s+[`\'"])(?<path1>[^`\'"]+)(?=(?:|\'|"|`)))|(?:\\b(?:import|export)(?:\\s+|\\s*\\(\\s*)[`\'"](?<path2>[^`\'"]+)[`\'"])',
	'g'
);

const ENHANCED_IMAGE_REGEX = new RegExp('<enhanced:img');
const POSSIBLE_DEPENDENCIES = [
	{
		name: 'bits-ui',
		packageName: 'bits-ui@next',
		dev: false
	},
	{
		name: 'lucide-svelte',
		packageName: 'lucide-svelte',
		dev: false
	},
	{
		name: '~icons/ri',
		packageName: 'unplugin-icons @iconify-json/ri',
		dev: true
	},
	{
		name: '@internationalized/date',
		packageName: '@internationalized/date',
		dev: false
	},
	{
		name: 'inputmask',
		packageName: 'inputmask',
		dev: false
	}
] as const;

export {
	COLLAPSIBLE_START_REGEX,
	COLLAPSIBLE_END_REGEX,
	POSSIBLE_DEPENDENCIES,
	IMPORTS_REGEX,
	ENHANCED_IMAGE_REGEX
};
