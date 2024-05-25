<script lang="ts">
	export let name: String;
	import { mapleLeafGrid } from '../illustrations/main';
</script>

{#if name === 'mapleLeafGrid'}
	{@html mapleLeafGrid}
{/if}
