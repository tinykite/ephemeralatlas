import { getPage } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export const load = async () => {
    const query = `*[_type == "page" && slug.current == "about"]`;
    const pageData = await getPage(query) 

	if (pageData) {
		return pageData[0]
	}

	throw error(404, 'Not found');
};
