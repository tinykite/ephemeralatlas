<script lang="ts">
	import { mapleLeafGrid, sunTriptych } from '../illustrations/main';
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
	{#if name === 'test'}
		<svg viewBox="0 0 1000 1000">
			<rect width="1000" height="1000" fill="#EF8903" />
		</svg>
	{/if}
</div>

<style>
	.illustration {
		width: 100%;
	}
</style>
