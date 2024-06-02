<script lang="ts">
</script>

<p class="article__text article__text--center"><slot /></p>

<style>
	.article__text {
		width: 100%;
		max-width: 60ch;
	}

	.article__text:nth-of-type(2) {
		margin-block-start: 2.5rem;
	}

	.article__text--center {
		text-align: center;
	}
</style>
