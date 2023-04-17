// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	interface Platform {
		context: {
			waitUntil(promise: Promise<never>): void;
		};
		caches: CacheStorage & { default: Cache };
	}
}

export {};
