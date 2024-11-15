import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: true,
    },
    defineField({
      name: 'hero',
      title: 'Hero Post',
      type: 'reference',
      to: {type: 'post'}, // Single reference to one post
    }),
    defineField({
      name: 'featuredPosts',
      title: 'Featured Posts',
      type: 'array',
      of: [{type: 'reference', to: {type: 'post'}}], // Multiple references to posts
    }),
  ],
  initialValue: {
    title: 'Featured Posts',
  },
})