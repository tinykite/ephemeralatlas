<script lang="ts">
	import type { BlockComponentProps } from '@portabletext/svelte';
	interface Props {
		portableText: BlockComponentProps;
		children?: import('svelte').Snippet;
	}

	let { portableText, children }: Props = $props();
	let { value } = $derived(portableText);
	let { style } = $derived(value);
</script>

{#if style === 'h1'}
	<h1 class="article__subheading">{@render children?.()}</h1>
{:else if style === 'h2'}
	<h2 class="article__subheading">{@render children?.()}</h2>
{:else if style === 'h3'}
	<h3 class="article__subheading">{@render children?.()}</h3>
{:else}
	<h4 class="article__subheading">{@render children?.()}</h4>
{/if}
