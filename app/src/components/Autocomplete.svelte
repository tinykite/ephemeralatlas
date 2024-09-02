<script>
	import { onMount } from 'svelte';
	let accessibleAutocomplete;
	export let label;
	export let options;
	export let handleChange;

	const optionLabels = options.reduce((acc, curr) => {
		return [...acc, curr.name];
	}, []);

	onMount(async () => {
		if (typeof window !== 'undefined') {
			// Import accessible-autocomplete and initialize it
			const module = await import('accessible-autocomplete');
			accessibleAutocomplete = module.default;

			accessibleAutocomplete({
				element: document.querySelector('#my-autocomplete-container'),
				id: 'my-autocomplete', // To match it to the existing <label>.
				source: optionLabels,
				onConfirm: (confirmed) => {
					handleChange(confirmed);
				},
				confirmOnBlur: false
			});
		}
	});
</script>

<label class="label" for="my-autocomplete">{label}</label>
<div id="my-autocomplete-container" />

<style>
	.label {
		font-family: 'Termina Regular';
	}
</style>
