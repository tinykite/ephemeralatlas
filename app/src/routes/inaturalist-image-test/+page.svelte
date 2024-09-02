<script>
	export let observations;
	export let error;
</script>

<main>
	<h1>Filtered Observations</h1>
	{#if error}
		<p>{error}</p>
	{:else if observations?.length > 0}
		<ul>
			{#each observations as observation}
				<li>
					<strong>{observation.taxon.name}</strong> -
					<em>License:</em>
					{observation.default_photo.license_code}
					<br />
					<img src={observation.default_photo.medium_url} alt={observation.taxon.name} />
				</li>
			{/each}
		</ul>
	{:else}
		<p>No observations found.</p>
	{/if}
</main>

<style>
	main {
		font-family: Arial, sans-serif;
		padding: 2rem;
	}

	h1 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	ul {
		list-style-type: none;
		padding: 0;
		margin-top: 1rem;
	}

	li {
		margin-bottom: 1rem;
	}

	img {
		max-width: 200px;
		height: auto;
		margin-top: 0.5rem;
	}
</style>
