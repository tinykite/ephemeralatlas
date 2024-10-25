<script lang="ts">
	import SanityImage from './SanityImage.svelte';

	interface Props {
		portableText: any;
	}

	let { portableText }: Props = $props();
	let { value } = $derived(portableText);
</script>

{#if value.asset}
	<figure class="figure">
		<SanityImage image={value} />
		{#if value.caption}
			<figcaption>{value.caption}</figcaption>
		{/if}
	</figure>
{/if}

<style>
	.figure {
		margin-inline: auto;
	}
</style>
