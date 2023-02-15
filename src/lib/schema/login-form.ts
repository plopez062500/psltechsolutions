import { z } from 'zod';

export const loginFormSchema = z.object({
	email: z.string().min(1, 'Username is required.').email('Invalid email address.'),
	password: z.string().min(1, 'Password is required.')
});
