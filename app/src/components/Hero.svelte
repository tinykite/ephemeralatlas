<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import Illustration from '$components/Illustration.svelte';

	interface Props {
		post: any;
		showLink: boolean;
	}

	let { post, showLink }: Props = $props();
</script>

<header class="hero">
	{#if post.mainIllustration}
		<Illustration name={post.mainIllustration} />
	{:else if post.mainImage}
		<img class="hero__graphic" src={urlFor(post.mainImage).url()} alt={post.mainImage.alt} />
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
		margin: 0;

		@media (min-width: 45rem) {
			font-size: var(--font-size-900);
		}
	}

	.hero__description {
		font-size: var(--font-size-100);
		margin-block-start: 0.5rem;
		margin-inline: auto;
		font-style: italic;

		@media (min-width: 45rem) {
			max-width: 36ch;
		}
	}

	.hero__eyebrow {
		text-transform: uppercase;
		font-size: var(--font-size-100);
	}

	.hero__contentWrapper {
		margin-block-start: 1rem;
		text-align: center;

		@media (min-width: 45rem) {
			margin: 0;
		}
	}
</style>
