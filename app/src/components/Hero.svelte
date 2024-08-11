<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import Illustration from '$components/Illustration.svelte';

	export let post: any;
</script>

{#if post.mainIllustration}
	<Illustration name={post.mainIllustration} />
{:else if post.mainImage}
	<img class="hero__cover" src={urlFor(post.mainImage).url()} alt={post.mainImage.alt} />
{/if}
<div class="hero__contentWrapper">
	<h2 class="hero__title">
		<a class="hero__link" href={`/${post.slug.current}`}>
			{post.title}
		</a>
	</h2>
	<p class="hero__description">{post.description}</p>
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
		font-size: var(--font-size-100);
		margin-block-start: 0.5rem;
	}

	.hero__title {
		margin-block-start: var(--spacing-16);
		margin-inline: var(--spacing-8);
	}
</style>
