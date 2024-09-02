<script lang="ts">
	import Datalist from '$components/Datalist.svelte';
	import { minnesotaCounties } from '$data/geographic.js';
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	import type { DSVRowArray } from 'd3';
	import Autocomplete from '../../components/Autocomplete.svelte';
	// import accessibleAutocomplete from 'accessible-autocomplete';
	// import '@spectrum-web-components/button/sp-button.js';

	const countries = ['France', 'Germany', 'United Kingdom'];

	// onMount(async () => {
	// 	try {
	// 		autoComplete = (await import('../../components/Autocomplete.svelte')).default;
	// 		console.log(autoComplete);
	// 	} catch (e) {
	// 		// Handle errors if the dynamic route doesn't load:
	// 		console.log(e);
	// 	}
	// });

	let AutoComplete;

	const autoComplete = () =>
		import('../../components/autoComplete.svelte').then((module) => {
			AutoComplete = module.default;
		});

	onMount(async () => {
		console.log(autoComplete);
		autoComplete();
	});

	// onMount(async () => {
	// 	const dataset: DSVRowArray<string> | undefined = await d3.csv(
	// 		'/data/minnesotaTreeCountsByCounty.csv'
	// 	);

	// 	console.log(dataset[0]);
	// 	// accessibleAutocomplete({
	// 	// 	element: document.querySelector('#my-autocomplete-container'),
	// 	// 	id: 'my-autocomplete', // To match it to the existing <label>.
	// 	// 	source: countries
	// 	// });
	// });
</script>

<!-- <Datalist data={minnesotaCounties} label="counties" /> -->
<!-- <svelte:component this={autoComplete} /> -->

{#if AutoComplete}
	<svelte:component this={AutoComplete} />
{/if}
