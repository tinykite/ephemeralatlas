<script lang="ts">
	import Logo from '$components/Logo.svelte';
	import { navItems } from '$lib/utils/consts';

	let menuToggled = $state(false);
</script>

<header class="header">
	<a class="u-skipLink" href="#main">Skip to Main Content</a>
	<Logo />
	<nav class="nav">
		<button class="button" aria-expanded={menuToggled} onclick={() => (menuToggled = !menuToggled)}>
			<span class="button__content">
				<span class="u-visually-hidden">Toggle Main</span>
				Menu
			</span>
		</button>
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
		row-gap: 1rem;
		align-items: center;
		position: relative;
	}

	.nav {
		grid-row: 2;
		grid-column: 1 / -1;

		@media (min-width: 50rem) {
			grid-row: 1;
			grid-column: 2 / -1;
		}
	}

	.nav:has(button[aria-expanded='true']) .navList {
		display: block;

		@media (min-width: 50rem) {
			display: flex;
		}
	}

	.navList {
		display: none;
		padding: 0;
		list-style: none;
		font-family: var(--font-stack-subheadings);
		font-size: 1rem;
		text-align: center;

		@media (min-width: 50rem) {
			display: flex;
			justify-self: end;
			text-align: left;
		}
	}
	.navList__link {
		display: block;
		text-decoration: none;
		padding-block: 1rem;
		margin: 0;

		&:hover {
			background: #000;
			color: white;
		}

		@media (max-width: 50rem) {
			&:before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				border-bottom: 1px solid #000;
			}
		}
		@media (min-width: 50rem) {
			&:hover {
				text-decoration: underline;
				background: none;
				color: unset;
			}
		}
	}

	.navList__item {
		width: 100%;
		position: relative;
		margin: 0;

		@media (min-width: 50rem) {
			&:not(:last-child) {
				margin-inline-end: 1.8125rem;
			}
		}
	}

	.button {
		position: absolute;
		top: calc(4.375rem / 2); /* 4.375rem is 70px, the height of the logo */
		transform: translateY(-50%);
		right: 0;
		width: max-content;
		border-radius: 0.25rem;
		border: transparent;
		background: #222222;
		color: #f2f2f2;
		font-family: var(--font-stack-subheadings);
		font-size: 0.85rem;
		padding: 0.25rem 0.5rem;
		cursor: pointer;

		@media (min-width: 50rem) {
			display: none;
		}
	}
</style>
