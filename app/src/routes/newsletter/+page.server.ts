
import { fail } from '@sveltejs/kit';
import { supabasePrivate } from '$lib/supbaseClientPrivate.js';
const emailRegExp = /^[^\s]+@[^\s]+\.[^\s]+$/;

const validateEmail = (email?: string) => {
	if (!email || typeof email !== 'string') {
		return false;
	}
	return emailRegExp.test(email.toLowerCase());
};

/** @satisfies {import('./$types').Actions} */
export const actions = {
	newsletterSignup: async ({ request }) => {
	const data = await request.formData();
	const email = data.get('email') as unknown as string;

	if (!email) {
		return fail(400, { email, missing: true });
	}

	const isValid = validateEmail(email);

	if (!isValid) {
		console.log(email)
		return fail(400, { email, invalid: true });
	}

	const { error } = await supabasePrivate.from('users').insert({ email, active: true});

	if (error) {
		console.log(error.message)
		
		return fail(500, {
			email,
			error: error.message
		});
	}

	return {
		success: 'Your email was successsfully subscribed!'
	};
}};
