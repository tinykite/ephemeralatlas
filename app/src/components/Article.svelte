<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import UnorderedListItem from './UnorderedListItem.svelte';
	import UnorderedListWrapper from './UnorderedListWrapper.svelte';
	import ParagraphBlock from '$components/ParagraphBlock.svelte';
	import ImageBlock from '$components/ImageBlock.svelte';
	import Hero from './Hero.svelte';
	import CustomHeading from './CustomHeading.svelte';
	import CenteredParagraphBlock from './CenteredParagraphBlock.svelte';
	import Caption from './Caption.svelte';
	interface Props {
		data: any;
	}

	let { data }: Props = $props();
</script>

<Hero content={data.content} showLink={false} type={data.type} />
<article class="article">
	<PortableText
		value={data.content.body}
		components={{
			types: {
				image: ImageBlock
			},
			block: {
				normal: ParagraphBlock,
				h1: CustomHeading,
				h2: CustomHeading,
				h3: CustomHeading,
				caption: Caption,
				centered: CenteredParagraphBlock
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

<style>
	.article {
		display: grid;
		justify-items: center;
		margin: 0;
	}

	:global(.article p:first-child::first-letter) {
		@media (min-width: 45rem) {
			float: left;
			font-size: 6.25rem;
			line-height: 4rem;
			padding-top: 0.5rem;
			padding-right: 8px;
			padding-bottom: 8px;
		}
	}
</style>
