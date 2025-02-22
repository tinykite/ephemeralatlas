<script lang="ts">
	/** @type {import('./$types').PageProps} */
	let { form } = $props();
	import FormError from '$components/FormError.svelte';
</script>

<svelte:head>
	<title>Newsletter — Ephemeral Atlas</title>
</svelte:head>

<div class="newsletter">
	<h2>Subscribe to the Newsletter</h2>
	<p>Get new stories in your inbox. (It's free!)</p>

	{#if form?.success}
		<p>Successfully signed up!</p>
	{:else}
		<form class="form" method="POST" action="?/newsletterSignup">
			<label class="form__label">
				Name
				<input class="form__input" name="name" type="name" />
			</label>

			<label class="form__label">
				Email
				<input class="form__input" name="email" type="email" />
			</label>
			{#if form?.missing}
				<FormError message="Your email is required" />
			{/if}
			{#if form?.invalid}
				<FormError message="Your email is invalid" />
			{/if}
			{#if form?.error}
				<FormError message="Whoops, something unexpected happened!" />
			{/if}
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
	}

	.form__input {
		width: 100%;
		padding: 0.5rem 1.25rem;
		border: 1px solid #731963;
		margin-block-end: 0.5rem;
	}

	.form__input,
	.form__label {
		margin-block-start: var(--spacing-16);
	}
	.form__button {
		margin-block-start: var(--spacing-32);
		color: white;
		background: #731963;
		border: none;
		outline: transparent;
		padding-block: 1rem;
		cursor: pointer;
	}
</style>
