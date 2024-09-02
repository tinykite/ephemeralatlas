<script lang="ts">
	import { minnesotaCounties } from '$data/geographic.js';
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	import type { DSVRowArray } from 'd3';
	import Autocomplete from '../../components/Autocomplete.svelte';

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
		const treeGroups = d3.group(selectedCountyTrees, (d) => d['Genus']);

		console.log(Array.from(treeGroups));
		return Array.from(treeGroups);
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
	<h2>Trees for {county} County</h2>
	<p><em>Grouped by genus</em></p>
	{#if selectedCountyTreesByGenus}
		{#each selectedCountyTreesByGenus as tree}
			<h3>{tree[0]}</h3>
			<ul>
				{#each tree[1] as treeSpecies}
					<li>
						{treeSpecies['Common Name']}
					</li>
				{/each}
			</ul>
		{/each}
	{/if}
{/if}
