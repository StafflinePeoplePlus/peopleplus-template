// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { ExecutionContext, CacheStorage } from '@cloudflare/workers-types';

declare namespace App {
	interface Platform {
		env: unknown;
		context: ExecutionContext;
		caches: CacheStorage;
	}
}

export {};
