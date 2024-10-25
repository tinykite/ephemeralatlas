<script lang="ts">
	import { mapleLeafGrid, sunTriptych } from '../illustrations/main';
	interface Props {
		name: String;
		className?: string;
	}

	let { name, className = '' }: Props = $props();
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
