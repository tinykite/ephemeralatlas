<script lang="ts">
	import type { BlockComponentProps } from '@portabletext/svelte';
	export let portableText: BlockComponentProps;
	$: ({ value } = portableText);
	$: ({ style } = value);
</script>

{#if style === 'h1'}
	<h1 class="article__subheading"><slot /></h1>
{:else if style === 'h2'}
	<h2 class="article__subheading"><slot /></h2>
{:else if style === 'h3'}
	<h3 class="article__subheading"><slot /></h3>
{:else}
	<h4 class="article__subheading"><slot /></h4>
{/if}

<style>
	.article__subheading {
		width: 100%;
		max-width: 35ch;
		margin-block-start: var(--spacing-32);
	}
</style>
