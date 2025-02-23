<script lang="ts">
	// Importing this in the layout, instead of app.html, to enable HMR
	import '../styles/tokens.css';
	import '../styles/global.css';
	import '../styles/accessible-autocomplete.css';
	import Nav from '../components/Nav.svelte';
	import Footer from '$components/Footer.svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<main class="wrapper">
	<Nav />
	<div id="main">
		{@render children?.()}
	</div>
</main>
<Footer />
