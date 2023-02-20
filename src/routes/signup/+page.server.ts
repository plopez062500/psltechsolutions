import { signup } from '$lib/prisma/auth.server';
import { signupFormSchema } from '$lib/schema/signup-form';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { ZodError } from 'zod';

export const actions: Actions = {
	signup: async ({ request }) => {
		const { name, email, password } = Object.fromEntries(await request.formData());

		try {
			const userInfo = await signupFormSchema.parse({name, email, password });
         const user = await signup(userInfo.email, userInfo.name, userInfo.password);

		} catch (err) {
			if (err instanceof ZodError) {
				return fail(400, {
					email,
					nameErrors: err.flatten().fieldErrors.name,
					emailErrors: err.flatten().fieldErrors.email,
					passwordErrors: err.flatten().fieldErrors.password
				});
			}

         return fail(400, {email, unknownError: JSON.stringify(err)});
		}

		throw redirect(301, "/login");
	}
};
