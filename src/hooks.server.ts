import { goto } from '$app/navigation';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async function ({ resolve, event }) {

	const response = await resolve(event);

	return response;
};
