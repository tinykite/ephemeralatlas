<script>
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<p class="article__text article__text--caption">{@render children?.()}</p>

<style>
	.article__text--caption {
		font-size: 1rem;
		font-style: italic;
		text-align: center;
		margin: 0;
	}
</style>
