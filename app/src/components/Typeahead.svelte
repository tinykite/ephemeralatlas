<svelte:options runes={true} />

<!-- Future reference: https://nostyle.onrender.com/examples/autocomplete -->

<script>
	let cityName = $state('');
	let county = $state('');
	let query = $derived(
		`https://nominatim.openstreetmap.org/search?city=${cityName}&state=minnesota&format=jsonv2&addressdetails=1`
	);

	const fetchCounty = async () => {
		try {
			const response = await fetch(query);
			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}

			const json = await response.json();
			console.log(json);
			county = json[0].address.county;
		} catch (error) {
			console.error(error.message);
		}
	};
</script>

<label for="city">City</label>
<input bind:value={cityName} id="city" name="city" />
<button onclick={fetchCounty}>Submit</button>

{#if county}
	Tree results for {county}
{/if}
