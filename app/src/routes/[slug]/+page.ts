import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getPost, getPage } from '$lib/utils/sanity';

export const load = (async ({ params }) => {
	let type; 

	if (params.slug === 'about') {
		type = 'page'

		const query = `*[_type == "page" && slug.current == "about"]`;
        const content = await getPage(query) 

		if (content) {
			return {
				type,
				content: content[0]
			}
		}
	}

	else {
		type = 'post'

		const content = await getPost(params.slug);
		if (content) return {
			type,
			content
		}
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
