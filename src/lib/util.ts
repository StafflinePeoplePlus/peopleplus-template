export function extractPermissions(accessToken: string) {
	const payload = JSON.parse(atob(accessToken.split('.')[1])) as { permissions?: string[] };
	return payload.permissions ?? [];
}
