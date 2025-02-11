<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import Illustration from '$components/Illustration.svelte';
	import Hero from '$components/Hero.svelte';

	interface Props {
		[key: string]: any;
	}

	let { data }: Props = $props();
	const { posts } = data;
	const latestPost = posts[0];
	const archive = posts.slice(1, posts.length);
</script>

<div class="latestArticle">
	<Hero post={latestPost} showLink={true} />
</div>

<div class="archives">
	<h2 class="archives__heading">Archives</h2>
	<ul class="articleList">
		{#each archive as post, i}
			<li class="articleList__item">
				{#if post.mainIllustration}
					<Illustration name={post.mainIllustration} />
				{:else if post.mainImage}
					<img
						class="articleList__image"
						loading="lazy"
						src={urlFor(post.mainImage)
							.width(600)
							.height(400)
							.quality(100)
							.auto('format')
							.fit('fill')
							.url()}
						alt={post.mainImage.alt}
						width="600"
						height="400"
					/>
				{/if}

				<div class="articleList__text">
					<p class="articleList__title">
						<a class="articleList__link" href={`/${post.slug.current}`}>
							{post.title}
						</a>
					</p>
					<p class="articleList__description">
						{post.description}
					</p>
				</div>
			</li>
		{/each}
	</ul>
</div>

<div class="intro">
	<p class="intro__content">
		Ephemeral Atlas is a creative exploration of storytelling, art, and culture from a queer &
		disabled perspective.
	</p>
</div>

<style>
	.archives {
		display: grid;
		justify-items: center;
		margin-inline: var(--spacing-16);

		@media (min-width: 45rem) {
			justify-items: unset;
			margin-inline: 0;
		}
	}

	/* Should become a utility class */
	.archives__heading {
		margin: 0;
	}

	.latestArticle {
		display: flex;
		justify-content: center;
	}

	.articleList {
		display: grid;
		list-style: none;
		padding: 0;
		margin-block-start: 1.5rem;
		margin-inline: auto;

		@media (min-width: 45rem) {
			grid-template-columns: 1fr 1fr;
			align-items: start;
			max-width: 70rem;
			gap: var(--spacing-24);
		}

		@media (min-width: 70rem) {
			grid-template-columns: 1fr 1fr 1fr;
			column-gap: var(--spacing-52);
		}
	}

	.articleList__item {
		@media (min-width: 45rem) {
			text-align: unset;
		}
	}

	.articleList__item:not(:first-of-type) {
		margin-block-start: var(--spacing-32);

		@media (min-width: 45rem) {
			margin-block-start: unset;
		}
	}

	.articleList__link {
		margin-block-start: 1.125rem;
		display: block;
		padding-inline: var(--spacing-16);
		text-decoration: none;
		font-family: var(--font-stack-headings);
		font-weight: 400;
		font-style: normal;
		font-stretch: normal;
		line-height: 1.4;
		text-align: center;

		@media (min-width: 45rem) {
			padding-inline: unset;
			font-size: var(--font-size-200);
			text-align: left;
		}
	}

	/* This is not as elegant as I'd like */
	.articleList__image {
		min-width: 9.375rem;
		height: auto;
		aspect-ratio: 6/4;

		@media (min-width: 75rem) {
			min-width: 18.75rem;
		}
	}

	.articleList__link:hover {
		text-decoration: underline;
	}

	.articleList__title {
		margin-block-start: 1rem;
	}

	.articleList__description {
		margin-block-start: 0.5rem;
		font-size: var(--font-size-100);
		font-style: italic;
		text-align: center;

		@media (min-width: 45rem) {
			text-align: unset;
		}
	}

	.intro {
		margin-block-start: 2.5rem;
		padding: 0;
		background-color: #ffb82e;
		position: relative;

		@media (min-width: 45rem) {
			margin-block-start: 3.375rem;
		}

		@media (min-width: 45rem) {
			&::before {
				content: '';
				display: block;
				position: absolute;
				width: 81px;
				height: 68px;
				left: 2rem;
				top: 2rem;
				background-image: url(/illustrations/flower.svg);
			}

			&::after {
				content: '';
				display: block;
				position: absolute;
				width: 81px;
				height: 68px;
				right: 2rem;
				bottom: 2rem;
				background-image: url(/illustrations/flower.svg);
			}
		}
	}

	.intro__content {
		margin: 0;
		padding: var(--spacing-32);
		font-family: var(--font-stack-subheadings);
		text-align: center;

		@media (min-width: 35rem) {
			padding: var(--spacing-64);
		}

		@media (min-width: 45rem) {
			padding-block: 8rem;
			padding-inline: 9.5rem;
			font-size: var(--font-size-400);
		}
	}
</style>
