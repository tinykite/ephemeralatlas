<script>
	import * as d3 from 'd3';
	import { commonTreeNamesByGenus } from '$data/trees';

	export let shape;
	export let padding;
	export let maxShapes;
	export let trees;
	export let totalSum;

	$: shapes = Array(parseInt(maxShapes));

	const getForestPercent = (tree) => {
		const percent = d3.format('.0%')(tree / totalSum);
		return percent !== '0%' ? percent : 'Less than 1 percent';
	};
</script>

<div class="waffleGroup">
	{#each trees as tree}
		<div class="waffleOuterContainer">
			<div class="waffleInnerContainer">
				{#each shapes as _, i (i)}
					<div class="shape" />
				{/each}
			</div>
			<h2>{commonTreeNamesByGenus[tree[0]]}</h2>
			{getForestPercent(tree[1])}
		</div>
	{/each}
</div>

<style>
	.waffleGroup {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-auto-flow: row;
		gap: 20px;
		margin-block-start: 2rem;
	}

	.waffleOuterContainer {
		width: 30fr;
	}

	.waffleInnerContainer {
		display: grid;
		grid-template-columns: repeat(10, 1fr);
		grid-auto-flow: row;
		gap: 5px;
	}

	.shape {
		background: yellow;
		max-width: 100%;
		aspect-ratio: 1 / 1;
	}
</style>
