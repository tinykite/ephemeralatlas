<script>
	import Logo from '$components/Logo.svelte';
	import { navItems } from '$lib/utils/consts';
</script>

<header class="header">
	<p class="header__tagline">Creative Explorations of Nature</p>
	<Logo />
	<nav class="nav">
		<ul class="navList">
			{#each navItems as navItem}
				<li class="navList__item">
					<a href={navItem.url}>
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
		grid-template-columns: 1fr 4.6875rem 1fr;
		justify-content: space-between;
		align-items: center;
		margin-block-start: 3.125rem;
		margin-inline: 5rem;
	}
	.header__tagline,
	.nav {
		font-family: 'Nimbus Mono PS', 'Courier New', monospace;
	}

	.nav {
		justify-self: end;
	}

	.header__tagline,
	.navList {
		font-size: 1rem;
	}

	.navList {
		display: flex;
		list-style: none;
		margin: 0;
		font-family: 'Nimbus Mono PS', 'Courier New', monospace;
	}

	.navList__item {
		text-decoration: none;
	}

	.navList__item:not(:last-child) {
		margin-inline-end: 1.8125rem;
	}
</style>
