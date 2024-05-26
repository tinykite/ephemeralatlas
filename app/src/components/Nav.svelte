<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Logo from '$components/Logo.svelte';
	import { navItems } from '$lib/utils/consts';

	let mediaQuery: MediaQueryList;
	let isMinDesktop: boolean | undefined;

	const setMatches = () => {
		isMinDesktop = mediaQuery.matches;
	};

	onMount(() => {
		mediaQuery = window.matchMedia('(min-width: 800px)');
		setMatches();
		mediaQuery.addEventListener('change', () => setMatches());
	});

	onDestroy(() => {
		mediaQuery && mediaQuery.removeEventListener('change', () => setMatches());
	});
</script>

<header class="header">
	<p class="header__tagline" hidden={isMinDesktop ? undefined : true}>
		Creative Explorations of Nature
	</p>
	<Logo />
	<nav class="nav">
		<ul class="navList">
			{#each navItems as navItem}
				<li class="navList__item">
					<a class="navList__link" href={navItem.url}>
						{navItem.name}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	.header {
		display: grid;
		grid-template-columns: 4.6875rem 1fr;
		justify-content: space-between;
		align-items: center;
		margin: 2rem;

		@media (min-width: 50rem) {
			grid-template-columns: 1fr 4.6875rem 1fr;
			margin-inline: 5rem;
			margin-block-start: 3.125rem;
		}
	}

	.header__tagline,
	.navList {
		font-size: 1rem;
		font-family: 'Nimbus Mono PS', 'Courier New', monospace;
	}

	.navList {
		display: flex;
		justify-content: flex-end;
		list-style: none;
		margin: 0;
		font-family: 'Nimbus Mono PS', 'Courier New', monospace;
	}

	.navList__link {
		text-decoration: none;

		&:hover {
			border-bottom: 1px solid;
		}
	}

	.navList__item:not(:last-child) {
		margin-inline-end: 1.8125rem;
	}
</style>
