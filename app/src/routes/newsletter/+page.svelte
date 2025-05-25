<script lang="ts">
	/** @type {import('./$types').PageProps} */
	let { form } = $props();
	import FormError from '$components/FormError.svelte';
	import { PUBLIC_BUTTONDOWN_URL } from '$env/static/public';
</script>

<svelte:head>
	<title>Newsletter — Ephemeral Atlas</title>
</svelte:head>

<div class="newsletter">
	<h2>Subscribe to the Newsletter</h2>

	{#if form?.success}
		<p>Successfully signed up!</p>
	{:else}
		<form class="form" method="POST" action={PUBLIC_BUTTONDOWN_URL}>
			<label for="email" class="form__label"> Email </label>
			<input class="form__input" name="email" type="email" />
			{#if form?.missing}
				<FormError message="Your email is required" />
			{/if}
			{#if form?.invalid}
				<FormError message="Your email is invalid" />
			{/if}
			{#if form?.error}
				<FormError message="Whoops, something unexpected happened!" />
			{/if}
			<input type="hidden" value="1" name="embed" />
			<button class="form__button">Signup</button>
		</form>
	{/if}
</div>

<style>
	.newsletter {
		max-width: 60ch;
		margin-inline: auto;
		text-align: center;
	}

	.form {
		display: grid;
	}

	.form__input,
	.form__label,
	.form__button {
		display: block;
		border-radius: 9999px;
		font-family: var(--font-stack-subheadings);
	}

	.form__label {
		text-align: left;
		margin-block-start: var(--spacing-24);
	}

	.form__input {
		width: 100%;
		padding: 0.5rem 1.25rem;
		border: 1px solid #731963;
		margin-block-end: 0.5rem;
		margin-block-start: var(--spacing-8);
	}
	.form__button {
		margin-block-start: var(--spacing-8);
		color: white;
		background: blue;
		border: none;
		outline: transparent;
		padding-block: 0.75rem;
		cursor: pointer;
		transition: 0.3s ease-in-out;

		&:hover {
			background: color-mix(in srgb, blue, black 30%);
		}
	}
</style>
