<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import UnorderedListItem from './UnorderedListItem.svelte';
	import OrderedListItem from './OrderedListItem.svelte';
	import ListWrapper from './ListWrapper.svelte';
	import ParagraphBlock from '$components/ParagraphBlock.svelte';
	import ImageBlock from '$components/ImageBlock.svelte';
	import Hero from './Hero.svelte';
	import CustomHeading from './CustomHeading.svelte';
	import CenteredParagraphBlock from './CenteredParagraphBlock.svelte';
	import Caption from './Caption.svelte';
	import Youtube from './Youtube.svelte';
	import ImageGrid from './ImageGrid.svelte';
	import maplibregl, { type Map as MapType } from 'maplibre-gl';
	import { onMount } from 'svelte';

	const { Map } = maplibregl;

	interface Props {
		data: any;
	}

	let mapContainer: HTMLElement | null | undefined = $state();
	let map = $state() as MapType;

	let { data }: Props = $props();

	onMount(() => {
		map = new Map({
			style: 'https://tiles.openfreemap.org/styles/positron',
			center: [13.388, 52.517],
			zoom: 9.5,
			container: mapContainer as HTMLElement
		});
	});
</script>

<Hero content={data.content} showLink={false} type={data.type} />
<h3 class="article__subheading">Fort Snelling State Park</h3>
<p class="article__supportingText">101 Snelling Lake Rd, Saint Paul, MN</p>

<img class="interactive__image" src="/otter-test-image.jpg" alt="an otter holding a fish" />
<p class="interactive__imageDescription">
	Lewis Mallard is an interdimensional psychedelic folk artist who made first contact with our world
	by stepping out on the streets of Hamilton, Ontario dressed like an enormous duck with
</p>

<div class="interactive__container">
	<div class="interactive__rail">
		<h3>Visit</h3>
		<p class="interactive__railText">Monday-Sunday 8am - 10pm</p>
		<p class="interactive__railText">612-279-3559</p>
		<p class="interactive__railText">Email | Website</p>
	</div>

	<div class="interactive__main">
		<h3>Overview</h3>
		<p>
			Lewis Mallard is an interdimensional psychedelic folk artist who made first contact with our
			world by stepping out on the streets of Hamilton, Ontario dressed like an enormous duck with
			impeccable style. I really wanted to find an intelligent way to describe that aesthetic. I
			absolutely failed.
		</p>

		<h3>Acessibility Considerations</h3>
		<p>
			Lewis Mallard is an interdimensional psychedelic folk artist who made first contact with our
			world by stepping out on the streets of Hamilton, Ontario dressed like an enormous duck with
			impeccable style. I really wanted to find an intelligent way to describe that aesthetic. I
			absolutely failed.
		</p>

		<h3>Trail Recommendations</h3>
		<p>
			Lewis Mallard is an interdimensional psychedelic folk artist who made first contact with our
			world by stepping out on the streets of Hamilton, Ontario dressed like an enormous duck with
			impeccable style. I really wanted to find an intelligent way to describe that aesthetic. I
			absolutely failed.
		</p>
	</div>
</div>

<div bind:this={mapContainer} style="width: 100%; height: 500px"></div>

<style>
	.article__supportingText {
		margin-block-start: calc(var(--spacing-16) / 2);
		text-transform: uppercase;
		font-family: 'Termina Regular', sans-serif;
		font-size: 0.875rem;
	}

	.interactive__image {
		margin-block-start: var(--spacing-24);
	}

	.interactive__imageDescription {
		max-width: 65ch;
		margin-inline: auto;
		font-size: var(--font-size-100);
		font-style: italic;
		text-align: center;
		margin-block-start: var(--spacing-32);
	}

	.interactive__container {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: var(--spacing-24);
	}

	.interactive__rail {
		grid-column: 3 / 6;
	}

	.interactive__railText {
		font-size: var(--font-size-100);
		margin-block-start: 0;
	}

	.interactive__railText:first-of-type {
		margin-block-start: var(--spacing-16);
	}

	.interactive__main {
		grid-column: 6 / 11;
	}
</style>
