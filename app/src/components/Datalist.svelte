<script lang="ts">
	import { run } from 'svelte/legacy';

	interface Props {
		data: any;
		label: string;
	}

	let { data, label }: Props = $props();

	const dataList = data.reduce((accumulator, currentValue) => {
		return accumulator.concat(currentValue.name);
	}, []);

	let selectedValue = $state();
	let selectedData = $state();
	let showInfo = $state();

	run(() => {
		showInfo = dataList.includes(selectedValue);
	});
	run(() => {
		selectedData = data.find((value) => value.name === selectedValue);
	});
</script>

<form>
	<label for="search">{label}</label>
	<input list={label} bind:value={selectedValue} />
	<datalist id={label}>
		{#each data as option}
			<option value={option.name}></option>
		{/each}
	</datalist>
</form>
