import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import TerminaDemi from '$lib/fonts/Termina-Demi.woff';
import { read } from '$app/server';

const fontData = read(TerminaDemi).arrayBuffer();

const height = 630;
const width = 1200;

export const GET = async () => {
	const html = {
		type: 'div',
		props: {
			children: 'hello, world',
			style: { color: 'red' }
		}
	};
	const svg = await satori(html, {
		fonts: [
			{
				name: 'Termina Demi',
				data: await fontData,
				style: 'normal'
			}
		],
		height,
		width
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: width
		}
	});

	const image = resvg.render();

	return new Response(image.asPng(), {
		headers: {
			'content-type': 'image/png'
		}
	});
};
