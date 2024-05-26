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

	<h2>Archives</h2>
	<ul class="articleList">
		{#each archive as post, i}
			<li class="articleList__item">
				{#if post.mainIllustration}
					<Illustration name={post.mainIllustration} />
				{:else if post.mainImage}
					<img
						class="articleList__image"
						loading="lazy"
						src={urlFor(post.mainImage).width(600).height(400).quality(100).auto('format').url()}
						alt={post.mainImage.alt}
						width="600"
						height="400"
					/>
				{/if}

				<div class="articleList__text">
					<p class="articleList__date">{formatDate(post.publishedAt)}</p>

					<a class="articleList__link" href={`/${post.slug.current}`}>
						{post.title}
					</a>
				</div>
			</li>
		{/each}
	</ul>
</main>

<style>
	.homepageWrapper {
		max-width: 70rem;
		margin-inline: auto;
	}

	.latestArticle {
		text-align: center;
		margin: 3rem auto;
	}

	.latestArticle__contentWrapper {
		max-width: 55rem;
		margin-inline: auto;
	}

	.latestArticle__link {
		text-decoration: none;
		font-family: var(--f-headings);
		font-weight: 600;

		&:hover {
			text-decoration: underline;
		}
	}

	.latestArticle__date {
		font-family: 'Courier New', Courier, monospace;
	}

	.latestArticle__title {
		margin-block-start: 0.5rem;
	}

	.articleList {
		display: grid;
		grid-auto-flow: column;
		column-gap: 3.75rem;
		list-style: none;
		padding: 0;
		margin: 0 auto;
		max-width: 70rem;
		margin-block-start: 1.5rem;
	}

	.articleList__item {
		max-width: 30rem;
		display: flex;
		flex-direction: column;
		padding-block-end: 1.5rem;
	}

	.articleList__link {
		display: block;
		margin-block-start: 0.25rem;
		text-decoration: none;
		font-size: 1.25rem;
		font-family: var(--f-headings);
		font-weight: 400;
		font-style: normal;
		font-stretch: normal;
		line-height: 1.125;
	}

	.articleList__link:hover {
		text-decoration: underline;
	}

	.articleList__date {
		margin-block-start: 0.5rem;
		font-size: 1rem;
		font-family: 'Courier New', Courier, monospace;
	}

	.articleList__image {
		height: auto;
	}

	.intro {
		background-color: #ffb82e;
		position: relative;
		margin-block: 5rem;

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

	.intro__content {
		font-family: var(--f-subheadings);
		font-size: 1.5rem;
		text-align: center;
		padding-block: 8rem;
		padding-inline: 9.5rem;
	}
</style>
