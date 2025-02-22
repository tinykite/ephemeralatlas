import { componentToPng } from '$lib/renderImage';
import Card from '$components/Card.svelte';

export const GET = async ({ params, url }) => {
	const image = url.searchParams.get('image');
	const type = url.searchParams.get('type');

	return componentToPng({
		image,
		type
	});
};
