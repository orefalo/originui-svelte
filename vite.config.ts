/// <reference types="vitest" />
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		enhancedImages(),
		sveltekit(),
		Icons({
			compiler: 'svelte'
		})

	ssr: {
		//https://github.com/lukasbach/headless-tree/issues/104
		noExternal: ['@headless-tree/core']
	},
	]
});
