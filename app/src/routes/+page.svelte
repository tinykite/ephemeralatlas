<script lang="ts">
	import classNames from 'classnames';
	import { urlFor } from '$lib/utils/image';

	export let data: any;
	const { posts } = data;

	$$restProps;
</script>

<main class="wrapper">
	<p class="intro">
		Minimal Botany celebrates the intersection of community, nature, and art from a queer, disabled, and neurodivergent perspective.
	</p>

	<ul class="articleList">
		{#each posts as post, i}
			<li class={i === 0 ? 'articleList__hero' : 'articleList__item'}>
				<img
					class="articleList__image"
					loading="lazy"
					src={urlFor(post.mainImage).width(600).height(400).fit('min').auto('format').url()}
					alt="Cover image for {post.title}"
					width="600"
					height="400"
				/>

				<div class="articleList__text">
					{#if i !== 0}<p class="articleList__eyebrow">{post.eyebrow}</p>{/if}
					<a
						class={classNames('articleList__link', { 'articleList__link--emphasis': i === 0 })}
						href={`/${post.slug.current}`}
					>
						{post.title}
					</a>
					{#if post.description}
						<p class="articleList__description">{post.description}</p>
					{/if}
				</div>
			</li>
		{/each}
	</ul>
</main>

<style>
	.intro {
		font-family: var(--f-subheadings);
		text-align: center;
		font-size: 1.5rem;
		max-width: 40ch;
		margin-inline: auto;
		margin-block: 3.5rem;
	}

	.articleList {
		list-style: none;
		padding: 0;
		margin: 0 auto;
	}

	.articleList__hero,
	.articleList__item {
		max-width: 60%;
		margin: 1rem auto;
	}

	.articleList__hero {
		text-align: center;
		margin: 3rem auto 0;
	}

	.articleList__item {
		text-align: center;
		margin: 3rem auto 0;

		@media (min-width: 70rem) {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-column-gap: 2rem;
			align-items: start;
			align-content: start;
			margin-block-start: 3rem;
			text-align: start;
		}
	}

	.articleList__link {
		display: block;
		margin: 0.625rem 0 0 0;
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
	.articleList__link--emphasis {
		font-size: 1.5rem;

		@media (min-width: 43.75rem) {
			font-size: 2rem;
		}
	}

	.articleList__description {
		font-family: var(--f-subheadings);
		margin-block-start: 1rem;
		font-size: 1rem;
	}

	.articleList__eyebrow {
		font-family: var(--f-subheadings);
		text-transform: uppercase;
		font-size: 0.875rem;
		margin: 0;
	}

	.articleList__text {
		margin-block-start: 1rem;

		@media (min-width: 75rem) {
			margin-block-start: 0;
		}
	}

	.articleList__hero > .articleList__text {
		margin-block-start: 1rem;
	}

	.articleList__image {
		height: auto;
	}
</style>
