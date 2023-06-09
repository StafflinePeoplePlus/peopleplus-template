// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { ExecutionContext, CacheStorage } from '@cloudflare/workers-types/2022-11-30';

declare namespace App {
	interface Platform {
		env: unknown;
		context: ExecutionContext;
		caches: CacheStorage;
	}
}

export {};
