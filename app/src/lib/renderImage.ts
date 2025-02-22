import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { html as toReactNode } from 'satori-html';
import TerminaDemi from '$lib/fonts/Termina-Demi.woff';
import { read } from '$app/server';
import { render } from 'svelte/server';
import Card from '$components/Card.svelte';

export async function componentToPng({image, type}: {image: string, type: string}) {
    const fontFile = await read(TerminaDemi);
    const fontData = await fontFile.arrayBuffer();

    const result = render(Card);
	const markup = toReactNode(result.body);

	const svg = await satori(markup, {
		fonts: [
			{
				name: 'Termina Demi',
				data: fontData,
				style: 'normal'
			}
		],
		height: 1000,
		width: 1500
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: 1500
		}
	});

	const png = resvg.render();

	return new Response(png.asPng(), {
		headers: {
			'content-type': 'image/png'
		}
	});
}