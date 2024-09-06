<script lang="ts">
	import { minnesotaCounties } from '$data/geographic.js';
	import { commonTreeNamesByGenus, iNaturalistGenusKeys } from '$data/trees';
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	import type { DSVRowArray } from 'd3';
	import Autocomplete from '../../components/Autocomplete.svelte';
	import { licenseCodes } from '$lib/utils/consts';
	import Waffle from '$components/Waffle.svelte';

	let county = $state('');
	let treesByCounty = $state({});
	let selectedCountyTrees = $derived.by(() => {
		if (!treesByCounty || !county) {
			return;
		}
		return treesByCounty.get(county);
	});
	let selectedCountyTreesByGenus = $derived.by(() => {
		if (!treesByCounty || !county || !selectedCountyTrees) {
			return;
		}
		const counted = d3.rollup(
			selectedCountyTrees,
			(v) => d3.sum(v, (d) => +d['COUNT']),
			(d) => d['Genus']
		);

		const totalSum = d3.sum(counted, (d) => d[1]);

		return {
			totalSum,
			trees: Array.from(counted).sort((a, b) => d3.descending(a[1], b[1]))
		};
	});

	const updateCounty = (value) => {
		county = value;
	};

	onMount(async () => {
		const trees: DSVRowArray<string> | undefined = await d3.csv(
			'/data/minnesotaTreeCountsByCounty_withNames.csv'
		);

		treesByCounty = d3.group(trees, (d) => d.name);
	});
</script>

<div class="autoComplete">
	<Autocomplete label="Your county" options={minnesotaCounties} handleChange={updateCounty} />
</div>

<div class="treeData">
	{#if county}
		<h3>Top trees in {county} county</h3>
		<p class="treeData__description">
			According to the <a href="https://research.fs.usda.gov/programs/fia"
				>Forest Inventory and Analysis (FIA) program</a
			> of the USDA Forest Service
		</p>
		<Waffle
			maxShapes="100"
			trees={selectedCountyTreesByGenus.trees}
			totalSum={selectedCountyTreesByGenus?.totalSum}
		/>
	{/if}
</div>

<style>
	.autoComplete {
		max-width: 50%;
		margin-inline: auto;
	}

	.treeData {
		margin-block-start: 4rem;
	}

	.treeData__description {
		margin-block-start: 0.25rem;
		font-style: italic;
	}
</style>
