<script lang="ts">
	export let name: String;
	export let className = '';
	import { mapleLeafGrid, sunTriptych } from '../illustrations/main';
</script>

<div class={!!className ? className : ''}>
	{#if name === 'mapleLeafGrid'}
		{@html mapleLeafGrid}
	{/if}
	{#if name === 'sunTriptych'}
		{@html sunTriptych}
	{/if}
</div>

<style>
	.article__illustration {
		width: 100%;
	}
</style>
