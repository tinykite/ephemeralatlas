<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import Illustration from '$components/Illustration.svelte';
	import { format } from 'date-fns';

	interface Props {
		content: any;
		showLink: boolean;
		type: 'page' | 'post';
	}

	let { content, showLink, type }: Props = $props();
</script>

<header class="hero">
	{#if type === 'page'}
		<img class="hero__graphic" src={urlFor(content.image).url()} alt={content.image.alt} />
	{:else if type === 'post' && content.mainIllustration}
		<Illustration name={content.mainIllustration} />
	{:else if content.mainImage}
		<img class="hero__graphic" src={urlFor(content.mainImage).url()} alt={content.mainImage.alt} />
	{/if}

	<div class="hero__contentWrapper">
		{#if content.eyebrow}
			<p class="hero__eyebrow">{content.eyebrow}</p>
		{/if}

		<h2 class="hero__title">
			{#if showLink}
				<a class="hero__link" href={`/${content.slug.current}`}>
					{content.title}
				</a>
			{:else}
				{content.title}
			{/if}
		</h2>
		{#if content.description}
			<p class="hero__description">{content.description}</p>
		{/if}

		{#if content.publishedAt}
			<p class="hero__date">{format(new Date(content.publishedAt), 'MMMM do, y')}</p>
		{/if}
	</div>
</header>

<style>
	.hero {
		margin: 0;
		position: relative;
		@media (min-width: 45rem) {
			display: grid;
			grid-template-columns: 60% 1fr;
			gap: 1.5rem;
			align-items: center;
			justify-content: center;
			width: 100%;
			margin-block-start: var(--spacing-16);
		}

		@media (min-width: 60rem) {
			margin-block-start: var(--spacing-60);
		}
	}

	.hero__link {
		text-decoration: none;
		font-family: var(--font-stack-headings);
		font-weight: 600;

		@media (min-width: 45rem) {
			font-size: var(--font-size-800);
		}

		&:hover {
			text-decoration: underline;
		}

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}

	.hero__title {
		margin-block: 0.25rem 0.5rem;
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
