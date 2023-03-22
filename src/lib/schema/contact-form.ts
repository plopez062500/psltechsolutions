import { z } from 'zod';

export const contactFormSchema = z.object({
	name: z.string().min(1, 'Name is required.'),
	number: z.string().min(1, 'Password is required.'),
	email: z.string().min(1, 'Email is required.').email(),
	message: z.string().min(1, 'Message cannot be blank.')
});
