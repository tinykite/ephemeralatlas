<script>
	import { urlFor } from '../lib/utils/image';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	/** @type {{image: any, maxWidth?: number, alt?: any}} */
	let { image, maxWidth = 1200, alt = undefined } = $props();

	// Example image document ID: image-cc93b69600f5cd1abce97fd0d4aa71793dbbba76-1350x900-png
	// Structure: image-${storedImgId}-${dimensions}-${format}

	// If we split it by "-", the 3rd element are the dimensions (1350x900)
	let dimensions = $derived(image?.asset?._ref?.split('-')[2]);
	// If we split dimensions by "x", we get the width (1350) and height (900)
	let [width, height] = $derived(dimensions.split('x').map(Number));

	let aspectRatio = $derived(width / height);

	let imageRef = $state();
	// Once loaded, the image will transition to full opacity
	let loaded = $state(false);

	onMount(() => {
		imageRef.onload = () => {
			loaded = true;
		};
	});
</script>

{#if browser && image}
	<img
		loading="lazy"
		src={urlFor(image).width(maxWidth).fit('fillmax').auto('format').url()}
		alt={alt || image.alt || ''}
		class:loaded
		bind:this={imageRef}
		style="aspect-ratio: {aspectRatio};"
	/>
{/if}

<!-- some optional effects to make image loading look nicer -->
<style>
	img {
		opacity: 0;
		transition: opacity 500ms ease-out;
	}
	img.loaded {
		opacity: 1;
	}
</style>
