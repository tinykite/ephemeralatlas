<script lang="ts">
	import Logo from '$components/Logo.svelte';
	import { navItems } from '$lib/utils/consts';
</script>

<header class="header">
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
	}
	.navList {
		display: flex;
		justify-content: flex-end;
		list-style: none;
		margin: 0;
		font-family: 'Nimbus Mono PS', 'Courier New', monospace;
		font-size: 1rem;
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
