// import { PeoplePlusAuth } from '@peopleplus/auth';
// import { PostgresAdapter } from '@peopleplus/auth/database/postgres';
// import {
// 	PRIVATE_AUTH0_CLIENT_ISSUER,
// 	PRIVATE_AUTH0_CLIENT_ID,
// 	PRIVATE_AUTH0_CLIENT_SECRET,
// 	PRIVATE_AUTH0_API_IDENTIFIER,
// } from '$env/static/private';
// import { extractPermissions } from '$lib/util';
// import type { Sql } from 'postgres';

export type SessionResponse = {
	auth0Token: string;
	permissions: string[];
	user: App.Locals['user'];
} | null;

declare module '@peopleplus/auth' {
	interface Provide {
		// Auth: Auth;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

// export type Auth = ReturnType<typeof createAuth>;
type DatabaseUserAttributes = {
	roles?: string[];
	pps_id?: string;
	name: string;
	email?: string;
	image?: string;
	userId?: string;
	domain?: string;
};

// export function createAuth(database: Sql) {
// 	return new PeoplePlusAuth({
// adapter: new PostgresAdapter(database, { user: 'p3.user', session: 'p3.session' }),

// auth0: {
// 	domain: PRIVATE_AUTH0_CLIENT_ISSUER,
// 	clientID: PRIVATE_AUTH0_CLIENT_ID,
// 	clientSecret: PRIVATE_AUTH0_CLIENT_SECRET,
// 	audience: PRIVATE_AUTH0_API_IDENTIFIER,
// 	callbackURL: '/auth/callback/auth0',
// },

// exposeUserAttributes(user) {
// 	return {
//         ...
// 	};
// },

// exposeSessionAttributes(session) {
// 	return { accessToken: session.access_token };
// },

// captureUserAttributes({ idToken }) {
// 	return {
//         ...
// 	};
// },
// });
// }

// export async function parseSession(locals: App.Locals): Promise<SessionResponse> {
// 	const { session, user } = locals;
// 	if (!session) return null;
// 	return {
// 		user,
// 		permissions: extractPermissions(session.accessToken) ?? [],
// 		auth0Token: session.accessToken,
// 	};
// }
