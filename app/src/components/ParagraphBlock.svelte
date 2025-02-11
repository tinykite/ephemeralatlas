<script>
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<p class="article__text">{@render children?.()}</p>

<style>
	.article__text {
		width: 100%;
		max-width: 50ch;
	}

	.article__text:first-of-type {
		margin-block-start: 2.5rem;
	}
</style>
