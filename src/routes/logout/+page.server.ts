import { logout } from '$lib/prisma/auth.server';
import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ locals, cookies }) => {
	throw redirect(301, '/');
};

export const actions: Actions = {
	default: async ({ locals, cookies }) => {
		if (locals.session) {
			await logout(locals.session);
			cookies.delete('session_id');
			console.log('deleted');
		}

		throw redirect(301, '/');
	}
};
