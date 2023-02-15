import { AuthError, login, type User } from '$lib/auth.server';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { ZodError } from 'zod';
import { loginFormSchema } from '$lib/schema/login-form';

export const actions: Actions = {
	login: async function ({ request, cookies, locals, url }) {
		const formData = Object.fromEntries(await request.formData());

		let email: string = '';
		let password: string = '';

		try {
			let result = loginFormSchema.parse(formData);
			email = result.email;
			password = result.password;

			const { user, session } = await login(email, password);

			cookies.set('session_id', session.id, {
				sameSite: 'strict',
				path: '/'
			});
		} catch (error) {
			if (error instanceof AuthError) {
				return fail(405, { email, authError: 'Invalid email or password.' });
			}

			if (error instanceof ZodError) {
				const zodError: ZodError = error as ZodError;
				return fail(400, {
					email,
					emailErrors: zodError.flatten().fieldErrors.email,
					passwordErrors: zodError.flatten().fieldErrors.password
				});
			}

			return fail(405, { email, unknownError: error});
		}

		throw redirect(301, '/');
	}
};
