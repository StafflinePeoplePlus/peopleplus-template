import { sequence } from '@sveltejs/kit/hooks';
import { SvelteKitAuth } from '@auth/sveltekit';
import Auth0 from '@auth/core/providers/auth0';
/*
FIXME - Setup Auth
import {
	PRIVATE_AUTH_SECRET,
	PRIVATE_AUTH0_CLIENT_ID,
	PRIVATE_AUTH0_CLIENT_SECRET,
	PRIVATE_AUTH0_CLIENT_ISSUER
} from '$env/static/private';
 */

const headers = async function handle({ event, resolve }) {
	const response = await resolve(event);
	response.headers.set('X-Clacks-Overhead', 'GNU Terry Pratchett');
	return response;
};

export const handle = sequence(
	/*
	SvelteKitAuth({
		providers: [
			Auth0({
				clientId: PRIVATE_AUTH0_CLIENT_ID,
				clientSecret: PRIVATE_AUTH0_CLIENT_SECRET,
				issuer: PRIVATE_AUTH0_CLIENT_ISSUER
			})
		],
		trustHost: true,
		secret: PRIVATE_AUTH_SECRET
	}),
	 */
	headers
);
