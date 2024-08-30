<script>
	import { onMount } from 'svelte';

	// import '@spectrum-web-components/button/sp-button.js';
	let accessibleAutocomplete;
	let spButton;

	const countries = ['France', 'Germany', 'United Kingdom'];

	onMount(async () => {
		const module = await import('accessible-autocomplete');

		accessibleAutocomplete = module.default;
		accessibleAutocomplete({
			element: document.querySelector('#my-autocomplete-container'),
			id: 'my-autocomplete', // To match it to the existing <label>.
			source: countries
		});
	});
</script>

{#if accessibleAutocomplete}{/if}

<label for="my-autocomplete">Select your country</label>
<div id="my-autocomplete-container" />

<sp-theme scale="large" color="dark">
	<sp-button variant="primary">Submit</sp-button>
</sp-theme>
