<script lang="ts">
	// Importing this in the layout, instead of app.html, to enable HMR
	import '../styles/tokens.css';
	import '../styles/global.css';
	import '../styles/accessible-autocomplete.css';
	import Nav from '../components/Nav.svelte';
	import Footer from '$components/Footer.svelte';
	import Article from '$components/Article.svelte';
</script>

<Nav />
<main class="wrapper">
	<slot />
</main>
<Footer />

<style>
	.wrapper {
		max-width: 70rem;
		margin-inline: auto;
		margin-block-start: 5rem;
	}
</style>
