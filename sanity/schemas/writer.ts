import { defineType, defineField } from 'sanity'

export const writer = defineType({
  name: 'writer',
  title: 'Writer / Contributor',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'Writer', value: 'writer' },
          { title: 'Editor', value: 'editor' },
          { title: 'Contributor', value: 'contributor' },
        ],
      },
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{ type: 'url' }],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'photo',
    },
  },
})
