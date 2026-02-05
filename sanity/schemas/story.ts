import { defineType, defineField } from 'sanity'

export const story = defineType({
  name: 'story',
  title: 'Story',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Intro / Why this story matters',
      type: 'text',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL (Optional)',
      type: 'url',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'writer' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'series',
      title: 'Series (Optional)',
      type: 'reference',
      to: [{ type: 'series' }],
    }),
    defineField({
      name: 'careerStage',
      title: 'Career Stage(s)',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Student', value: 'student' },
          { title: 'Early Career', value: 'early-career' },
          { title: 'Mid-Level', value: 'mid-level' },
          { title: 'Career Switcher', value: 'career-switcher' },
          { title: 'Founder / Freelancer', value: 'founder' },
        ],
        layout: 'tags',
      },
    }),
    defineField({
      name: 'themes',
      title: 'Themes',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Career Clarity', value: 'career-clarity' },
          { title: 'Growth & Confidence', value: 'growth-confidence' },
          { title: 'Failure & Resilience', value: 'failure-resilience' },
          { title: 'Money & Independence', value: 'money-independence' },
          { title: 'Purpose & Impact', value: 'purpose-impact' },
        ],
        layout: 'tags',
      },
    }),
    defineField({
      name: 'challenges',
      title: 'Challenges Addressed',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Feeling Stuck', value: 'feeling-stuck' },
          { title: 'Impostor Syndrome', value: 'impostor-syndrome' },
          { title: 'Burnout', value: 'burnout' },
          { title: 'Finding Direction', value: 'finding-direction' },
          { title: 'Breaking into an Industry', value: 'breaking-industry' },
        ],
        layout: 'tags',
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      description: 'e.g., 5 min read',
    }),
    defineField({
      name: 'takeaways',
      title: 'Key Takeaways / Lessons',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'coverImage',
    },
    prepare(selection) {
      const { title, author, media } = selection
      return {
        title,
        subtitle: author ? `by ${author}` : '',
        media,
      }
    },
  },
})
