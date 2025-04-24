import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		csp: {
			directives: {
				'script-src': ['self'],
				'style-src': ['self', 'unsafe-inline'],
				'default-src': ['self'],
				'img-src': ['self'],
				'frame-ancestors': ['none'],
				'connect-src': ['self'],
			},
		},
		adapter: adapter(),
	},
};

export default config;
