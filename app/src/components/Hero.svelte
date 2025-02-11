<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import Illustration from '$components/Illustration.svelte';
	import { format } from 'date-fns';

	interface Props {
		post: any;
		showLink: boolean;
	}

	let { post, showLink }: Props = $props();

	const image = post.image || post.mainImage;
</script>

<header class="hero">
	{#if post.mainIllustration}
		<Illustration name={post.mainIllustration} />
	{:else if image}
		<img class="hero__graphic" src={urlFor(image).url()} alt={image.alt} />
	{/if}

	<div class="hero__contentWrapper">
		{#if post.eyebrow}
			<p class="hero__eyebrow">{post.eyebrow}</p>
		{/if}

		<h2 class="hero__title">
			{#if showLink}
				<a class="hero__link" href={`/${post.slug.current}`}>
					{post.title}
				</a>
			{:else}
				{post.title}
			{/if}
		</h2>
		{#if post.description}
			<p class="hero__description">{post.description}</p>
		{/if}

		{#if post.publishedAt}
			<p class="hero__date">{format(new Date(post.publishedAt), 'MMMM do, y')}</p>
		{/if}
	</div>
</header>

<style>
	.hero {
		@media (min-width: 45rem) {
			display: grid;
			grid-template-columns: 60% 1fr;
			gap: 1.5rem;
			align-items: center;
			justify-content: center;
			width: 100%;
		}
	}

	.hero__link {
		text-decoration: none;
		font-family: var(--font-stack-headings);
		font-weight: 600;

		@media (min-width: 45rem) {
			font-size: var(--font-size-900);
		}

		&:hover {
			text-decoration: underline;
		}
	}

	.hero__title {
		margin-block: 0.25rem 0.5rem;

		@media (min-width: 45rem) {
			font-size: var(--font-size-900);
		}
	}

	.hero__description,
	.hero__eyebrow {
		margin-block: 0;
	}

	.hero__description {
		margin-inline: auto;
		font-style: italic;
		font-size: var(--font-size-100);
		@media (min-width: 45rem) {
			max-width: 36ch;
		}
	}

	.hero__eyebrow {
		text-transform: uppercase;
		font-family: var(--font-stack-subheadings);
		font-size: 1rem;
	}

	.hero__date {
		font-family: Avenir, sans-serif;
		font-size: 1rem;
	}

	.hero__contentWrapper {
		margin-block-start: 1rem;
		text-align: center;
		@media (min-width: 45rem) {
			margin: 0;
		}
	}
</style>
