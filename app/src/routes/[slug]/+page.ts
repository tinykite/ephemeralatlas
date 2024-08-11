import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getPost, getPage } from '$lib/utils/sanity';

export const load = (async ({ params }) => {
	if (params.slug === 'about') {
		const query = `*[_type == "page" && slug.current == "about"]`;
        const pageData = await getPage(query) 

		if (pageData) {
			return pageData[0]
		}
	}

	else {
		const post = await getPost(params.slug);
		if (post) return post;
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
