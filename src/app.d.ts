// See https://kit.svelte.dev/docs/types#app

import type { Session, User } from '$lib/prisma/auth.server';
import type { PrismaClient } from '@prisma/client';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface PageData {}
		// interface Platform {}

		interface Locals {
			// validate: import('@lucia-auth/sveltekit').Validate;
			// validateUser: import('@lucia-auth/sveltekit').ValidateUser;
			// setSession: import('@lucia-auth/sveltekit').SetSession;
			user: User | null;
			session: Session | null;
		}
	}

	var prisma: PrismaClient;
}

export {};
