import { dev } from '$app/environment';
import { PUBLIC_TRACING_DSN, PUBLIC_SENTRY_ENVIRONMENT } from '$env/static/public';
import { clientInit } from '@jill64/sentry-sveltekit-cloudflare';

const onError = clientInit(PUBLIC_TRACING_DSN, {
	sentryOptions: {
		environment: dev ? 'dev' : PUBLIC_SENTRY_ENVIRONMENT ?? 'production',
	},
	enableInDevMode: true,
});

export const handleError = onError();
