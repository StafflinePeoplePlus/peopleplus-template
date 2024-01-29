// import peoplePlusAuth from '@peopleplus/auth';
// import { cosmosAdapter } from '@peopleplus/auth/cosmos';
// import { lucia } from 'lucia';
// import { sveltekit } from 'lucia/middleware';
// import { dev } from '$app/environment';
// import { extractPermissions } from '$lib/util';
// // import { cosmos } from './cosmos';

// const auth = lucia({
// 	sessionExpiresIn: {
// 		activePeriod: 86400000, // 1 day in milliseconds which matches the auth0 access token length
// 		idlePeriod: 0, // we don't support an idle period (though we _could_ if we implemented auth0 token refreshing)
// 	},
// 	env: dev ? 'DEV' : 'PROD',
// 	middleware: sveltekit(),
// 	adapter: cosmosAdapter(cosmos, {
// 		user: 'user',
// 		session: 'session',
// 		key: 'user_key',
// 	}),
// 	// TODO: get user attributes
// 	// getUserAttributes(user) {
// 	// 	return {
// 	// 		...
// 	// 	};
// 	// },
// 	getSessionAttributes(session) {
// 		const permissions = extractPermissions(session.access_token) ?? [];
// 		return { accessToken: session.access_token, idToken: session.id_token, permissions };
// 	},
// });

// export const { handleAuthCallback, handleSignInRedirect, handleSignOut, authenticationHook } =
// 	peoplePlusAuth({
// 		auth,
// 		// TODO: add auth0 config
// 		domain: 'PRIVATE_AUTH0_CLIENT_ISSUER',
// 		clientID: 'PRIVATE_AUTH0_CLIENT_ID',
// 		clientSecret: 'PRIVATE_AUTH0_CLIENT_SECRET',
// 		audience: 'PRIVATE_AUTH0_API_IDENTIFIER',
// 		urls: {
// 			authCallback: '/auth/callback/auth0',
// 		},
// 		// TODO: extract user attributes from idToken
// 		// extractUserAttributes({ idToken }) {
// 		// 	return {
// 		//         ...
// 		//     }
// 		// },
// 	});

// export async function parseSession(locals: App.Locals): Promise<App.Session | null> {
// 	const session = await locals.auth.validate();
// 	if (!session) return null;
// 	return {
// 		user: { ...session.user, id: session.userId },
// 		permissions: session.permissions,
// 		roles: session.roles,
// 		sessionId: session.sessionId,
// 		auth0Token: session?.accessToken,
// 	};
// }
