<script lang="ts">
	export let data: any;
	export let label: string;

	const dataList = data.reduce((accumulator, currentValue) => {
		return accumulator.concat(currentValue.name);
	}, []);

	let selectedValue;
	let selectedData;
	let showInfo;

	$: showInfo = dataList.includes(selectedValue);
	$: selectedData = data.find((value) => value.name === selectedValue);
</script>

<form>
	<label for="search">{label}</label>
	<input list={label} bind:value={selectedValue} />
	<datalist id={label}>
		{#each data as option}
			<option value={option.name} />
		{/each}
	</datalist>
</form>
