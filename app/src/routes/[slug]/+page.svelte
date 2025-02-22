<script lang="ts">
	import Article from '$components/Article.svelte';
	import { urlFor } from '$lib/utils/image';
	import { daysInYear } from 'date-fns/constants';

	interface Props {
		[key: string]: any;
	}

	let { data }: Props = $props();

	let ogImage = $derived.by(() => {
		if (data.content.mainImage) {
			return urlFor(data.content.mainImage).url();
		} else if (data.content.mainIllustration) {
			return data.content.mainIllustration;
		} else {
			return urlFor(data.content.image).url();
		}
	});
</script>

<svelte:head>
	<title>{data.content.title} - Ephemeral Atlas</title>
</svelte:head>

{ogImage}
<Article {data} />
