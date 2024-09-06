<script>
	export let maxX;
	export let maxY;

	let halfmaxX = parseInt(maxX) / 2;
	let halfmaxY = parseInt(maxY) / 2;
</script>

<polygon
	points={`0, ${halfmaxY} ${halfmaxX} ${halfmaxY} 0 ${maxY} ${maxX} ${maxY} ${halfmaxX} ${halfmaxY} ${maxX} ${halfmaxY} ${halfmaxX} 0`}
/>
