<script>
	import { onMount } from 'svelte';
	let accessibleAutocomplete;

	const countries = [
		'France',
		'Germany',
		'United Kingdom',
		'Brazil',
		'Something',
		'Somethingna',
		'Somethingnananana',
		'Somethingnananananana',
		'somethingnandhfhedhfhshfh',
		'somethingsgfgfgd',
		'somethingnananandhfhsjshfgskjfggd',
		'somethingnananandhfhsjshfgskjfggddddddddd',
		'somethingnananandhfhsjshfgskaaaaaa',
		'somethingnananandhfhsjshfgskjfggsffd',
		'somethingnananandhfhsjshfgskjfggakjfhsgwg3hrhjd',
		'somethingnananandhfhsjshfgskjfggdj1hfd',
		'Somethingna',
		'Somethingnananana',
		'Somethingnananananana',
		'somethingnandhfhedhfhshfh',
		'somethingsgfgfgd',
		'somethingnananandhfhsjshfgskjfggd',
		'somethingnananandhfhsjshfgskjfggddddddddd',
		'somethingnananandhfhsjshfgskaaaaaa',
		'somethingnananandhfhsjshfgskjfggsffd',
		'somethingnananandhfhsjshfgskjfggakjfhsgwg3hrhjd',
		'somethingnananandhfhsjshfgskjfggdj1hfd'
	];

	onMount(async () => {
		if (typeof window !== 'undefined') {
			// Import accessible-autocomplete and initialize it
			const module = await import('accessible-autocomplete');
			accessibleAutocomplete = module.default;

			accessibleAutocomplete({
				element: document.querySelector('#my-autocomplete-container'),
				id: 'my-autocomplete', // To match it to the existing <label>.
				source: countries
			});
		}
	});
</script>

<label class="label" for="my-autocomplete">Select your country</label>
<div id="my-autocomplete-container" />

<style>
	.label {
		font-family: 'Termina Regular';
	}
</style>
