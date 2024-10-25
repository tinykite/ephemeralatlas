<script lang="ts">
	import type { PageData } from './$types';
	import Article from '$components/Article.svelte';
	interface Props { [key: string]: any }

	let { data, ...rest }: Props = $props();
	rest;
</script>

<Article {data} />
