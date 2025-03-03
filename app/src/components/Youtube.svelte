<script lang="ts">
	interface Props {
		portableText: any;
	}

	let { portableText }: Props = $props();
	const { value } = portableText;
	const videoId = $derived.by(() => {
		const url = new URL(value.url);
		const searchParams = new URLSearchParams(url.search);
		const videoId = searchParams.get('v');
		return videoId;
	});
</script>

<iframe
	class="video"
	src={`https://www.youtube.com/embed/${videoId}`}
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen
></iframe>
