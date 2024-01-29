// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { ExecutionContext, CacheStorage } from '@cloudflare/workers-types';

declare global {
	namespace App {
		interface Session {
			sessionId?: string;
			auth0Token?: string;
			permissions?: string[];
			roles: string[];
			user?: Lucia.DatabaseUserAttributes;
		}

		interface Platform {
			env: unknown;
			context: ExecutionContext;
			caches: CacheStorage;
		}

		interface Locals {
			auth: import('lucia').AuthRequest;
		}
	}
}

export {};
