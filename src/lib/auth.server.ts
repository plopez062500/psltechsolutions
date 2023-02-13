import { compare, hash } from 'bcryptjs';
import { prisma } from './prisma.server';

export type PrismaUser = NonNullable<Awaited<ReturnType<typeof getUser>>>;
export type User = Pick<PrismaUser, 'email' | 'name' | 'passwordHash'>;

export type Session = NonNullable<Awaited<ReturnType<typeof getSession>>>;

export class AuthError extends Error {}

export async function login(email: string, pw: string) {
	const user = await getUser(email);
	if (!user) {
		throw new AuthError('User not found.');
	}

	if (!(await compare(pw, user.passwordHash))) {
		throw new AuthError('Invalid password.');
	}

	const session = await createSession(user);

	return { user, session };
}

export async function logout(currentSession: Session) {
	await prisma.session.update({
		where: {
			id: currentSession.id
		},
		data: {
			revoked: true
		}
	});
}

export async function signup(email: string, name: string, password: string) {
	const user = await prisma.user.create({
		data: {
			email,
			name,
			passwordHash: await hash(password, 8)
		}
	});

	return user;
}

async function getUser(email: string) {
	const user = await prisma.user.findUnique({
		where: {
			email
		}
	});

	return user;
}

async function createSession(user: User) {
	const _1weekFromNow = new Date().getSeconds() + 60 * 60 * 24 * 7;
	const eat = new Date();
	eat.setSeconds(_1weekFromNow);

	const session = await prisma.session.create({
		data: {
			userEmail: user.email,
			eat,
			revoked: false
		}
	});

	return session;
}

async function getSession(id: string) {
	const session = await prisma.session.findUnique({
		where: {
			id
		}
	});

	return session;
}

export async function authenticateSession(sessionId: string) {
	const sessionWithUser = await prisma.session.findUnique({
		where: {
			id: sessionId
		},
		include: {
			user: true
		}
	});

	if (!sessionWithUser) {
		throw new AuthError('Session not found');
	}

	if (new Date() > sessionWithUser.eat) {
		throw new AuthError('Session has expired');
	}

	if (sessionWithUser.revoked) {
		throw new AuthError('Session has been revoked');
	}

	const session: Session = {
		eat: sessionWithUser.eat,
		iat: sessionWithUser.iat,
		id: sessionWithUser.id,
		revoked: sessionWithUser.revoked,
		userEmail: sessionWithUser.userEmail
	};
	const user = {
		...sessionWithUser.user
	};

	return {
		session,
		user
	};
}
