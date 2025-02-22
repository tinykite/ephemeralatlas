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
	<meta property="og:title" content="Ephemeral Atlas" />
	<meta
		property="og:description"
		content="Ephemeral Atlas explores nature, art, and community from a queer and disabled perspective"
	/></svelte:head
>

<main class="wrapper">
	<Nav />
	{@render children?.()}
</main>
<Footer />
