import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';
// import { authenticationHook } from '$lib/server/auth';

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

export const handle = sequence(
	// TODO: add in authentication hook once auth is setup
	// authenticationHook,
	headers,
);
