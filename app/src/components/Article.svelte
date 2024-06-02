<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import UnorderedListItem from './UnorderedListItem.svelte';
	import UnorderedListWrapper from './UnorderedListWrapper.svelte';
	import ParagraphBlock from '$components/ParagraphBlock.svelte';
	import ImageBlock from '$components/ImageBlock.svelte';
	import { urlFor } from '$lib/utils/image';
	import { formatDate } from '$lib/utils';
	import Illustration from './Illustration.svelte';
	import CentralizedText from './CentralizedText.svelte';
	import CustomHeading from './CustomHeading.svelte';
	export let data: any;
</script>

<main class="wrapper">
	<article class="article">
		<h1 class="article__title">{data.title}</h1>
		{#if data.mainIllustration}
			<Illustration name={data.mainIllustration} className="article__illustration" />
		{:else if data.mainImage}
			<img class="article__cover" src={urlFor(data.mainImage).url()} alt={data.mainImage.alt} />
		{/if}

		<PortableText
			value={data.body}
			components={{
				types: {
					image: ImageBlock
				},
				block: {
					normal: ParagraphBlock,
					textCenter: CentralizedText /* Svelte throws a compiler warning if this isn't defined */,
					h1: CustomHeading,
					h2: CustomHeading,
					h3: CustomHeading
				},
				list: {
					bullet: UnorderedListWrapper
				},
				listItem: {
					bullet: UnorderedListItem,
					checklist: UnorderedListItem
				}
			}}
		/>
		<p class="article__date">
			{formatDate(data.publishedAt)}
		</p>
	</article>
</main>

<style>
	.article {
		margin: var(--spacing-24) auto;
		display: grid;
		justify-items: center;
	}

	@media (min-width: 45rem) {
		.article {
			margin-block-start: var(--spacing-64);
		}
	}

	.article__cover {
		margin-block-start: var(--spacing-32);
	}

	.article__cover {
		max-width: 65%;
	}

	.article__title {
		font-size: var(--font-size-500);
		line-height: 1.25;
		text-align: center;
		font-family: var(--font-stack-headings);

		@media (min-width: 50rem) {
			max-width: 65%;
			font-size: var(--font-size-900);
		}
	}
</style>
