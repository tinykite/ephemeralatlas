<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import CustomDefaultListItem from '$components/CustomDefaultListItem.svelte';
	import ImageBlock from '$components/ImageBlock.svelte';
	import { urlFor } from '$lib/utils/image';
	import { formatDate } from '$lib/utils';
	export let data: any;
</script>

<main class="wrapper">
	<article class="article">
		<h1 class="article__title">{data.title}</h1>
		<p class="article__description">{data.description}</p>

		{#if data.mainImage}
			<img
				class="article__cover"
				src={urlFor(data.mainImage).url()}
				alt={data.mainImage.alt}
			/>
		{/if}

		<PortableText
			value={data.body}
			components={{
				listItem: {
					bullet: CustomDefaultListItem,
					number: CustomDefaultListItem,
					normal: CustomDefaultListItem //<-- Adding "normal" as key and defaultListItem as value will supress the warning
				},
				types: {
					// block-level components
					image: ImageBlock
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
		margin: 1.5rem auto;
		display: grid;
		justify-items: center;
	}

	@media (min-width: 43.75rem) {
		.article {
			margin-top: 4rem;
		}
	}

	:global(p) {
		width: 100%;
		max-width: 60ch;
	}

	:global(p:nth-of-type(2)) {
		margin-block-start: 2.5rem;
	}

	:global(figure) {
		margin-inline: auto;
	}

	.article__cover {
		margin-top: 3rem;
	}

	.article__title {
		font-size: 3.75rem;
		line-height: 1;
		text-align: center;
		font-family: var(--f-headings);
		max-width: 65%;
	}

	.article__description {
		text-align: center;
		font-size: 1.25rem;
		margin-block-start: 1.5rem;
		max-width: 40ch;
		font-family: var(--f-subheadings);
	}

</style>
