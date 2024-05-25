<script lang="ts">
	import SanityImage from './SanityImage.svelte';

	export let portableText: any;
	$: ({ value } = portableText);
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
