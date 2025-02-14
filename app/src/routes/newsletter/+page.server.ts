
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
	const name = data.get('name') ?? '' as unknown as string

	if (!email) {
		return fail(400, { email, missing: true });
	}

	const isValid = validateEmail(email);

	if (!isValid) {
		console.log(email)
		return fail(400, { email, invalid: true });
	}

    // const options = {
    //     method: 'POST',
    //     headers: {
    //       accept: 'application/json',
    //       authorization: `Token ${PRIVATE_BUTTONDOWN_KEY}`,
    //       'content-type': 'application/json'
    //     },
    //     body: JSON.stringify({email_address: email, type: 'regular', "metadata": {
	// 		"name": name
	// 	},})
    //   };

	// try {
	// 	const request = await fetch('https://api.buttondown.com/v1/subscribers', options)
    //     const response = await request.json()

	// 	console.log(response)
    //     if (!response.ok) {
	// 		throw Error
	// 	}

	// } catch (error) {
	// 	return fail(500, { email, error: true });
	// }

	const { error } = await supabasePrivate.from('users').insert({ email, name, active: true});

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
