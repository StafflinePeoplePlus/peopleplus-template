import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		csp: {
			directives: {
				'script-src': ['strict-dynamic', 'https:', 'self'],
				'style-src': ['self', 'unsafe-inline'],
				'default-src': ['self'],
				'img-src': [
					'self',
					'https://servicecore.blob.core.windows.net/',
					'https://uatservicecore.blob.core.windows.net/',
					'https://www.facebook.com',
					'https://px.ads.linkedin.com',
				],
				'frame-ancestors': ['none'],
				'connect-src': ['self'],
			},
		},
		adapter: adapter(),
	},
};

export default config;
