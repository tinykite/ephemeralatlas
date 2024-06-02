<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import Illustration from '$components/Illustration.svelte';
	import { formatDate } from '$lib/utils';

	export let data: any;
	const { posts } = data;
	const latestPost = posts[0];
	const archive = posts.slice(1, posts.length);

	$$restProps;
</script>

<main class="homepageWrapper">
	<div class="latestArticle">
		{#if latestPost.mainIllustration}
			<Illustration name={latestPost.mainIllustration} />
		{:else if data.mainImage}
			<img
				class="latestArticle__cover"
				src={urlFor(latestPost.mainImage).url()}
				alt={latestPost.mainImage.alt}
			/>
		{/if}
		<div class="latestArticle__contentWrapper">
			<p class="latestArticle__date">{formatDate(latestPost.publishedAt)}</p>
			<h2 class="latestArticle__title">
				<a class="latestArticle__link" href={`/${latestPost.slug.current}`}>
					{latestPost.title}
				</a>
			</h2>
		</div>
	</div>

	<aside class="intro">
		<p class="intro__content">
			Minimal Botany celebrates the intersection of community, nature, and art from a queer,
			disabled, and neurodivergent perspective.
		</p>
	</aside>

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
						<a class="articleList__link" href={`/${post.slug.current}`}>
							{post.title}
						</a>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</main>

<!-- In the process of being converted to design tokens -->
<style>
	.homepageWrapper {
		max-width: 70rem;
		margin-inline: auto;
	}

	.latestArticle {
		text-align: center;
		margin: var(--spacing-36) auto;
	}

	.latestArticle__contentWrapper {
		max-width: 55rem;
		margin-inline: auto;
	}

	.latestArticle__link {
		text-decoration: none;
		font-family: var(--font-stack-headings);
		font-weight: 600;

		&:hover {
			text-decoration: underline;
		}
	}

	.latestArticle__date {
		font-family: 'Courier New', Courier, monospace;
	}

	.latestArticle__title {
		margin-block-start: var(--spacing-8);
		margin-inline: var(--spacing-8);
	}

	.archives {
		display: grid;
		justify-items: center;
		margin-block-start: var(--spacing-24);

		@media (min-width: 45rem) {
			justify-items: unset;
			margin-block-start: var(--spacing-64);
		}
	}

	/* Should become a utility class */
	.archives__heading {
		margin: 0;
	}

	.articleList {
		display: grid;
		list-style: none;
		padding: 0;
		margin-block-start: 1.5rem;
		margin-inline: auto;

		@media (min-width: 45rem) {
			grid-auto-flow: column;
			column-gap: var(--spacing-60);
			align-items: start;
			max-width: 70rem;
		}
	}

	.articleList__item {
		margin: 0;

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
		display: block;
		margin-block-start: var(--spacing-16);
		text-decoration: none;
		font-family: var(--font-stack-headings);
		font-weight: 400;
		font-style: normal;
		font-stretch: normal;
		line-height: 1.125;

		@media (min-width: 45rem) {
			font-size: var(--font-size-300);
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

	.intro {
		background-color: #ffb82e;
		position: relative;

		@media (min-width: 45rem) {
			margin-block-start: var(--spacing-64);

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
		padding: var(--spacing-64);
		font-family: var(--font-stack-subheadings);
		text-align: center;

		@media (min-width: 45rem) {
			padding-block: 8rem;
			padding-inline: 9.5rem;
			font-size: var(--font-size-500);
		}
	}
</style>
