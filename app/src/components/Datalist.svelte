<script>
	import { states } from '$data/geographic.js';
	const stateNames = states.reduce((accumulator, currentValue) => {
		return accumulator.concat(currentValue.name);
	}, []);

	let selectedValue;
	let selectedData;
	let showInfo;

	$: showInfo = stateNames.includes(selectedValue);
	$: selectedData = states.find((state) => state.name === selectedValue);
</script>

<form>
	<label for="search">State</label>
	<input list="states" bind:value={selectedValue} />
	<datalist id="states">
		{#each states as state}
			<option value={state.name} />
		{/each}
	</datalist>
</form>

{#if showInfo}
	<h2>{selectedData.name}</h2>
{/if}
