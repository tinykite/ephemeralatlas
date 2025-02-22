<script lang="ts">
	import Article from '$components/Article.svelte';
	import { urlFor } from '$lib/utils/image';

	interface Props {
		[key: string]: any;
	}

	let { data }: Props = $props();

	let ogImage = $derived.by(() => {
		if (data.content.ogImage) {
			return urlFor(data.content.ogImage).width(1200).dpr(2).url();
		}
		return 'https://ephemeralatlas.com/og-image.png';
	});
</script>

<svelte:head>
	<title>{data.content.title} - Ephemeral Atlas</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={`${data.content.title} - Ephemeral Atlas`} />
	<meta property="og:description" content={data.content.description} />
	<meta property="og:image" content={ogImage} />
	<meta property="twitter:image" content={ogImage} />
</svelte:head>

<Article {data} />
