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

<svelte:head>
	<meta name="author" content="Dakota Sexton" />
	<meta
		name="description"
		content="Ephemeral Atlas is a creative exploration of storytelling, art, and culture"
	/>
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Ephemeral Atlas" />
	<meta property="og:title" content="Ephemeral Atlas" />
	<meta
		property="og:description"
		content="Ephemeral Atlas is a creative exploration of storytelling, art, and culture"
	/>
	<meta property="og:image" content="https://ephemeralatlas.com/og-image.png" />
	<meta property="twitter:image" content="https://ephemeralatlas.com/og-image.png" />
</svelte:head>

<main class="wrapper">
	<Nav />
	{@render children?.()}
</main>
<Footer />
