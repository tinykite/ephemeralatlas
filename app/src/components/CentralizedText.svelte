<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<p class="article__text article__text--center">{@render children?.()}</p>

<style>
	.article__text {
		width: 100%;
		max-width: 60ch;
	}

	.article__text:nth-of-type(2) {
		margin-block-start: 2.5rem;
	}

	.article__text--center {
		text-align: center;
	}
</style>
