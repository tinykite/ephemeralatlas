<script lang="ts">
	export let name: String;
	export let className = '';
	import { mapleLeafGrid } from '../illustrations/main';
</script>

<div class={!!className ? className : ''}>
	{#if name === 'mapleLeafGrid'}
		{@html mapleLeafGrid}
	{/if}
</div>

<style>
	.article__illustration {
		width: 100%;
		margin-block-start: var(--spacing-16);
	}
</style>
