<script>
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<p class="article__text article__text--centered">{@render children?.()}</p>

<style>
	.article__text {
		width: 100%;
		max-width: 60ch;
	}

	.article__text--centered {
		text-align: center;
	}

	.article__text:first-of-type {
		margin-block-start: 2.5rem;
	}
</style>
