<script>
	let userInput = ''; // Stores the user's input
	let genera = []; // Array of genera from user input
	let taxonomyData = [];
	let error = null;

	const formatUserList = () => {
		genera = userInput
			.split(',')
			.map((genus) => genus.trim())
			.filter((genus) => genus.length > 0);
		if (genera.length > 0) {
			fetchTaxonIds();
		} else {
			taxonomyData = [];
			error = 'Please enter at least one genus.';
		}
	};

	// Function to fetch taxonomy IDs for the list of genera
	async function fetchTaxonIds() {
		try {
			const promises = genera.map(async (genus) => {
				const response = await fetch(`https://api.inaturalist.org/v1/taxa?q=${genus}&rank=genus`);
				const data = await response.json();
				if (data.results.length > 0) {
					return { genus, taxonId: data.results[0].id };
				} else {
					return { genus, error: `No results found` };
				}
			});
			taxonomyData = await Promise.all(promises);
			console.log(taxonomyData);
		} catch (err) {
			error = `Error fetching data: ${err.message}`;
		}
	}
</script>

<main>
	<h1>Taxonomy Data Fetcher</h1>
	<p>Enter genera and click "Fetch Taxonomy Data" to see results.</p>

	<form>
		<label for="genera">Genera (separated by commas)</label>
		<input id="genera" type="text" bind:value={userInput} />
		<button on:click={formatUserList}>Fetch Taxonomy Data</button>
	</form>

	{#if taxonomyData.length > 0}
		<ul>
			{#each taxonomyData as item}
				<li>
					{item.genus}:
					{#if item.taxonId}
						{item.taxonId}
					{:else}
						{item.error}
					{/if}
				</li>
			{/each}
		</ul>
	{:else if error}
		<p>Error: {error}</p>
	{/if}
</main>
