import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({ fallback: undefined, strict: true }),
		prerender: {
			handleHttpError: process.env.PRERENDER_LENIENT ? 'warn' : 'fail',
			handleMissingId: 'warn'
		},
		paths: { base: process.env.BASE_PATH ?? '' },
		serviceWorker: { register: true }
	}
};

export default config;
