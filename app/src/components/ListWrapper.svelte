<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<ul class="list">{@render children?.()}</ul>

<style>
	.list {
		width: 100%;
	}
</style>
