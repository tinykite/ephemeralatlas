<script>
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<p class="article__text article__text--caption">{@render children?.()}</p>

<style>
	.article__text {
		width: 100%;
		max-width: 60ch;
	}

	.article__text--caption {
		font-size: 0.8rem;
		font-style: italic;
		text-align: center;
	}

	.article__text:first-of-type {
		margin-block-start: 2.5rem;
	}
</style>
