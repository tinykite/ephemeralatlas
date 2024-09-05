<script lang="ts">
	import { minnesotaCounties } from '$data/geographic.js';
	import { commonTreeNamesByGenus, iNaturalistGenusKeys } from '$data/trees';
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	import type { DSVRowArray } from 'd3';
	import Autocomplete from '../../components/Autocomplete.svelte';
	import { licenseCodes } from '$lib/utils/consts';

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

	const getForestPercent = (tree) => {
		return d3.format('.0%')(tree / selectedCountyTreesByGenus.totalSum);
	};

	const fetchImage = async (treeData) => {
		try {
			const response = await fetch(
				`https://api.inaturalist.org/v1/observations?verifiable=true&spam=false&taxon_id=${treeData.taxonId}&quality_grade=research&per_page=1&license_code=${licenseCodes}&place_id=38&order_by=votes`
			);

			if (!response.ok) {
				throw new Error('Failed to fetch observations');
			}

			const observations = await response.json();

			return { treeData, observations: observations.results[0] };
		} catch (err) {
			console.log(err);
		}
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
	{#each selectedCountyTreesByGenus.trees as tree}
		<h2>{tree[0]}</h2>
		{getForestPercent(tree[1])}
	{/each}
	<!-- <div class="testBoxContainer">
		{#await selectedImages}
			<p>Loading images...</p>
		{:then images}
			{#if images && images.length > 0}
				{#each images as image}
					{#if image?.observations?.photos?.[0]?.url}
						<div class="testBox">
							<h3>{image.treeData.commonName}</h3>
							<img class="test" src={formatUrl(image.observations.photos[0].url)} alt="Tree" />
						</div>
					{:else}
						<p>No image available for {image.treeData.commonName}</p>
					{/if}
				{/each}
			{:else}
				<p>No images found for selected trees.</p>
			{/if}
		{:catch error}
			<p>Error loading images: {error.message}</p>
		{/await}
	</div> -->
	<!-- <h2>All Trees for {county} County</h2>
	<p><em>Grouped by genus</em></p>
	{#if selectedCountyTreesByGenus}
		{#each selectedCountyTreesByGenus as tree}
			<h3>{commonTreeNamesByGenus[tree[0]]}</h3>
			<ul>
				{#each tree[1] as treeSpecies}
					<li>
						{treeSpecies['Common Name']}
					</li>
				{/each}
			</ul>
		{/each}
	{/if} -->
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
