<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import Illustration from '$components/Illustration.svelte';
	import type { SanityAsset } from '@sanity/image-url/lib/types/types';
	import SanityImage from './SanityImage.svelte';

	interface Props {
		illustrationName: string;
		sanityAsset: SanityAsset;
	}

	let { illustrationName, sanityAsset }: Props = $props();
</script>

{#if sanityAsset}
	<img
		class="hero__graphic"
		src={urlFor(sanityAsset.mainImage).url()}
		alt={sanityAsset.mainImage.alt}
	/>
{/if}

{#if illustrationName}
	<Illustration name={illustrationName} />
{/if}
