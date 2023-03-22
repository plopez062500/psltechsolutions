import { env } from '$env/dynamic/private';
import emailjs from '@emailjs/browser';

export async function sendMessage(name: string, email: string, number: string, message: string) {

	const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			accessToken: env.EJS_PRIVATE_KEY,
			service_id: env.EJS_SERVICE_ID,
			template_id: env.EJS_MESSAGE_TEMPLATE_ID,
			user_id: env.EJS_PUBLIC_KEY,
			template_params: {
				name,
				email,
				number,
				message
			},
		})
	});

	if (res.status !== 200){
		throw new Error('Failes to send email');
	}
}
