<script>
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<p class="article__text">{@render children?.()}</p>
