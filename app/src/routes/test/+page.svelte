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

<Autocomplete label="Your county" options={minnesotaCounties} handleChange={updateCounty} />
{#if county}
	<Waffle
		maxShapes="100"
		trees={selectedCountyTreesByGenus.trees}
		totalSum={selectedCountyTreesByGenus?.totalSum}
	/>
{/if}

<style>
	.test {
		width: 100%; /* Or you can set a specific width like 600px */
		height: auto;
		max-width: 100%;
		display: block;
		object-fit: cover;
	}

	/* If you want the image to retain its aspect ratio and not exceed container width */

	.testBox {
		width: 50vw;
		aspect-ratio: 1/ 1;
		background: green;
	}

	.testBoxContainer {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-auto-flow: dense;
	}
</style>
