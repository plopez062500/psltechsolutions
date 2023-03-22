import { sendMessage } from '$lib/emailJS.server';
import { contactFormSchema } from '$lib/schema/contact-form';
import type { Actions } from '@sveltejs/kit';
import { unknown, ZodError } from 'zod';

type ContactFormRespons = {
	status: number;
	formData: {
		name: string;
		number: string;
		email: string;
		message: string;
	};
	errors?: {
		name?: string[];
		number?: string[];
		email?: string[];
		message?: string[];
		unknown?: string;
	};
};

export const actions: Actions = {
	default: async (event) => {
		const formData = Object.fromEntries(
			await event.request.formData()
		) as ContactFormRespons['formData'];

		const response: ContactFormRespons = {
			status: 200,
			formData
		};

		try {
			const { name, number, email, message } = contactFormSchema.parse(formData);

			await sendMessage(name, email, number, message);
		} catch (err) {
			response.status = 405;

			if (err instanceof ZodError) {
				response.errors = { ...err.flatten().fieldErrors };
			} else {
				response.errors = {
					unknown: JSON.stringify(err)
				};
			}
		} finally {
         console.log(true);
         console.log(response);
			return response;
		}
	}
};
