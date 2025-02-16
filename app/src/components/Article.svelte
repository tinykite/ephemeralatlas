<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import UnorderedListItem from './UnorderedListItem.svelte';
	import OrderedListItem from './OrderedListItem.svelte';
	import ListWrapper from './ListWrapper.svelte';
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
				bullet: ListWrapper,
				number: ListWrapper
			},
			listItem: {
				normal: UnorderedListItem,
				bullet: UnorderedListItem,
				checklist: UnorderedListItem,
				number: OrderedListItem
			}
		}}
	/>
</article>
