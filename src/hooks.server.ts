import { goto } from '$app/navigation';
import { authenticateSession } from '$lib/auth.server';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async function ({ resolve, event }) {
	const sessionId = event.cookies.get('session_id');
	event.locals.session = null;
	event.locals.user = null;

	if (sessionId) {
		try {
			const { session, user } = await authenticateSession(sessionId);
			event.locals.user = user;
			event.locals.session = session;
		} catch (err) {
			console.log(err);
			event.cookies.delete('session_id');
		}
	}

	if (event.locals.session) {
		//Autheticated
		if (event.url.pathname.startsWith('/login')) {
			throw redirect(301, `${event.url.origin}/`);
		}
	} else {
		//Not Authenticated
		if (event.url.pathname.startsWith('/logout')) {
			throw redirect(301, '/');
		}
	}

	const response = await resolve(event);

	return response;
};
