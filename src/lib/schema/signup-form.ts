import { z } from 'zod';

export const signupFormSchema = z.object({
	name: z.string().min(1, 'Name is required.'),
	email: z.string().min(1, 'Email is required.').email('Invalid email address.'),
	password: z.string().min(1, 'Password is required.')
});
