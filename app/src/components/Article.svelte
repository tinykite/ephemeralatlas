<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import UnorderedListItem from './UnorderedListItem.svelte';
	import UnorderedListWrapper from './UnorderedListWrapper.svelte';
	import ParagraphBlock from '$components/ParagraphBlock.svelte';
	import ImageBlock from '$components/ImageBlock.svelte';
	import Hero from './Hero.svelte';
	import CentralizedText from './CentralizedText.svelte';
	import CustomHeading from './CustomHeading.svelte';
	interface Props {
		data: any;
	}

	let { data }: Props = $props();
</script>

<main class="wrapper">
	<article class="article">
		<Hero post={data} showLink={false} />

		<PortableText
			value={data.body}
			components={{
				types: {
					image: ImageBlock
				},
				block: {
					normal: ParagraphBlock,
					textCenter: CentralizedText /* Svelte throws a compiler warning if this isn't defined */,
					h1: CustomHeading,
					h2: CustomHeading,
					h3: CustomHeading
				},
				list: {
					bullet: UnorderedListWrapper
				},
				listItem: {
					bullet: UnorderedListItem,
					checklist: UnorderedListItem
				}
			}}
		/>
	</article>
</main>

<style>
	.article {
		margin-inline: auto;
		display: grid;
		justify-items: center;
	}

	.wrapper {
		margin-block-start: 5rem;
	}
</style>
