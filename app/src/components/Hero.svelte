<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import Illustration from '$components/Illustration.svelte';

	export let post: any;
	export let showLink: boolean;
</script>

{#if post.mainIllustration}
	<Illustration name={post.mainIllustration} className="article__illustration" />
{:else if post.mainImage}
	<img src={urlFor(post.mainImage).url()} alt={post.mainImage.alt} />
{/if}
<div class="hero__contentWrapper">
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

<style>
	.hero__contentWrapper {
		max-width: 55rem;
		margin-inline: auto;
	}

	.hero__link {
		text-decoration: none;
		font-family: var(--font-stack-headings);
		font-weight: 600;

		&:hover {
			text-decoration: underline;
		}
	}

	.hero__description {
		font-family: 'Courier New', Courier, monospace;
		font-size: var(--font-size-200);
		margin-block-start: 0.5rem;
		margin-inline: auto;
		max-width: 45rem;
	}

	.hero__title {
		margin-block-start: var(--spacing-24);
		margin-inline: var(--spacing-8);
	}

	.hero__title,
	.hero__description {
		text-align: center;
	}
</style>
