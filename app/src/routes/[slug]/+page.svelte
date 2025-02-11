<script lang="ts">
	import Article from '$components/Article.svelte';
	interface Props {
		[key: string]: any;
	}

	let { data }: Props = $props();
</script>

<Article {data} />
