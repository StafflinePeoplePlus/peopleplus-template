// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { ExecutionContext, CacheStorage } from '@cloudflare/workers-types';
// import type { Auth } from '$lib/server/auth';

declare global {
	namespace App {
		interface Platform {
			env: unknown;
			context: ExecutionContext;
			caches: CacheStorage;
		}
		// TODO: add in auth local once auth is setup
		interface Locals {
			// auth: Auth;
			user: import('@peopleplus/auth').User | null;
			session: import('@peopleplus/auth').Session | null;
		}
	}
}

export {};
