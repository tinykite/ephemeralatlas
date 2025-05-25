<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import Illustration from '$components/Illustration.svelte';
	import Hero from '$components/Hero.svelte';
	import { format } from 'date-fns';

	interface Props {
		[key: string]: any;
	}

	let { data }: Props = $props();
	const { posts } = data;
	const latestPost = posts[0];
	const archive = posts.slice(1, posts.length);
</script>

<svelte:head>
	<title>Ephemeral Atlas</title>
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://ephemeralatlas.com/og-image.png" />
	<meta property="twitter:image" content="https://ephemeralatlas.com/og-image.png" />
</svelte:head>

<Hero content={latestPost} showLink={true} type="post" />

<div class="intro">
	<p class="intro__content">
		Ephemeral Atlas is a creative exploration of storytelling, art, and culture.
	</p>
</div>

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

				{#if post.publishedAt}
					<p class="articleList__date">{format(new Date(post.publishedAt), 'MMMM do, y')}</p>
				{/if}
			</div>
		</li>
	{/each}
</ul>

<style>
	.articleList {
		display: grid;
		list-style: none;
		padding: 0;
		margin-block-start: 3rem;
		margin-inline: auto;
		gap: var(--spacing-16);

		@media (min-width: 45rem) {
			grid-template-columns: 1fr 1fr;
			align-items: start;
			max-width: 70rem;
			gap: var(--spacing-24);
		}

		@media (min-width: 70rem) {
			grid-template-columns: 1fr 1fr 1fr;
			gap: var(--spacing-40);
		}
	}

	.articleList__item {
		position: relative;
		margin-block: 0;
		@media (min-width: 45rem) {
			text-align: unset;
		}
	}

	.articleList__link {
		display: block;
		padding-inline: var(--spacing-16);
		text-decoration: none;
		font-family: var(--font-stack-headings);
		font-weight: 400;
		font-style: normal;
		font-stretch: normal;
		line-height: 1.4;
		text-align: center;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}

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
		margin-block-start: var(--spacing-12);
		font-size: 1.25rem;
	}

	.articleList__date {
		font-size: 1rem;
		margin-block-start: 0.5rem;
		color: #757575;
		font-style: italic;
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
