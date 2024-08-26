<script lang="ts">
	import Datalist from '$components/Datalist.svelte';
	import { minnesotaCounties } from '$data/geographic.js';
</script>

<Datalist data={minnesotaCounties} label="counties" />
