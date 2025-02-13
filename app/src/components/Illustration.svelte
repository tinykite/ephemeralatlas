<script lang="ts">
	import { mapleLeafGrid, sunTriptych, chicago } from '../illustrations/main';
	interface Props {
		name: String;
	}

	let { name }: Props = $props();
</script>

<div class="illustration">
	{#if name === 'mapleLeafGrid'}
		{@html mapleLeafGrid}
	{/if}
	{#if name === 'sunTriptych'}
		{@html sunTriptych}
	{/if}
	{#if name === 'chicago'}
		{@html chicago}
	{/if}
</div>

<style>
	.illustration {
		width: 100%;
	}
</style>
