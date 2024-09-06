<script>
	import * as d3 from 'd3';
	import { commonTreeNamesByGenus } from '$data/trees';

	export let shape;
	export let padding;
	export let maxShapes;
	export let trees;
	export let totalSum;

	$: shapes = Array(parseInt(maxShapes));

	const formattedForestPercent = (tree) => {
		const percent = d3.format('.0%')(tree / totalSum);
		return percent !== '0%' ? percent : 'Less than 1 percent';
	};

	const minCellHighlight = (tree) => {
		const initialPercent = Math.round((tree[1] / totalSum) * 100);
		return 100 - initialPercent;
	};
</script>

<div class="waffle">
	{#each trees as tree}
		<div class="waffle__outerContainer">
			<div class="waffle__innerContainer">
				{#each shapes as _, i (i)}
					<div class="shape" class:shape--filled={i >= minCellHighlight(tree)} />
				{/each}
			</div>

			<p class="waffle__text">
				<strong>{commonTreeNamesByGenus[tree[0]]}</strong>
				{formattedForestPercent(tree[1])}
			</p>
		</div>
	{/each}
</div>

<style>
	.waffle {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-auto-flow: row;
		column-gap: 2rem;
		row-gap: 1.815rem;
		margin-block-start: 2rem;
	}

	.waffle__outerContainer {
		width: 25fr;
	}

	.waffle__innerContainer {
		display: grid;
		grid-template-columns: repeat(10, 1fr);
		grid-auto-flow: row;
		gap: 5px;
	}

	.waffle__text {
		margin-block-start: 0.5rem;
		display: flex;
		justify-content: space-between;
	}

	.shape {
		background: rgba(103, 163, 65, 0.25);
		max-width: 100%;
		aspect-ratio: 1 / 1;
	}

	.shape--filled {
		background: rgba(103, 163, 65, 1);
	}
</style>
