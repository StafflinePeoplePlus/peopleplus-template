import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';
import { dev } from '$app/environment';
import { PUBLIC_TRACING_DSN, PUBLIC_SENTRY_ENVIRONMENT } from '$env/static/public';
import { serverInit } from '@jill64/sentry-sveltekit-cloudflare';

const headers: Handle = async function handle({ event, resolve }) {
	const response = await resolve(event);
	response.headers.set('X-Clacks-Overhead', 'GNU Terry Pratchett');
	response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set('Cross-Origin-Resource-Policy', 'same-origin');
	response.headers.set(
		'Permissions-Policy',
		'camera=(), display-capture=(), fullscreen=(), geolocation=(), microphone=()',
	);
	response.headers.delete('access-control-allow-origin');
	response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');

	if (!response.headers.has('Cache-Control')) {
		response.headers.set('Cache-Control', 'private');
	}

	return response;
};

const { onHandle, onError } = serverInit(PUBLIC_TRACING_DSN, {
	toucanOptions: {
		environment: dev ? 'dev' : PUBLIC_SENTRY_ENVIRONMENT ?? 'production',
	},
	enableInDevMode: true,
});

export const handleError = onError();
export const handle = sequence(onHandle(), headers);
