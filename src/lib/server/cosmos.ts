import { CosmosClient, FeedResponse, ItemResponse, type PersistedResource } from '@cfworker/cosmos';
import { z } from 'zod';

// TODO: setup cosmos config
export const cosmos = new CosmosClient({
	connectionString: 'PRIVATE_COSMOS_CONNECTION_STRING',
	dbId: 'PRIVATE_COSMOS_DATABASE',
});

export async function resolveCosmosJSON<T extends PersistedResource>(
	response: ItemResponse<T>,
): Promise<T | null>;
export async function resolveCosmosJSON<T>(response: FeedResponse<T>): Promise<T[]>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function resolveCosmosJSON(res: ItemResponse<any> | FeedResponse<any>) {
	if (!('hasNext' in res) && res.status === 404) {
		return null;
	}

	if (res.status !== 200 && res.status !== 201) {
		const errorResponse = await res.raw.text();
		let error: Error;
		try {
			const errorResponseObject = ErrorResponse.parse(JSON.parse(errorResponse));
			error = new Error(
				`Cosmos query failed with ${res.status} response.\n  Code: ${
					errorResponseObject.code
				}\n  ${errorResponseObject.message.replaceAll('\n', '\n  ')}`,
			);
		} catch (err) {
			error = new Error(`Cosmos query failed with ${res.status} response.\n${errorResponse}`);
		}
		throw error;
	}
	return await res.json();
}

const ErrorResponse = z.object({ code: z.string(), message: z.string() });
