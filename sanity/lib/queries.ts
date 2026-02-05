import { groq } from 'next-sanity'

// --- Stories Queries ---

export const ALL_STORIES_QUERY = groq`*[_type == "story"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  coverImage,
  intro,
  publishedAt,
  readTime,
  "author": author->{
    name,
    photo,
    role
  },
  "series": series->{
    title,
    "slug": slug.current
  },
  themes,
  challenges
}`

export const RECENT_STORIES_QUERY = groq`*[_type == "story"] | order(publishedAt desc)[0...6] {
  _id,
  title,
  "slug": slug.current,
  coverImage,
  intro,
  publishedAt,
  readTime,
  "author": author->{
    name,
    photo
  },
  "series": series->{
    title
  }
}`

export const STORY_BY_SLUG_QUERY = groq`*[_type == "story" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  coverImage,
  intro,
  body,
  publishedAt,
  readTime,
  "author": author->{
    name,
    bio,
    photo,
    role,
    socialLinks
  },
  "series": series->{
    title,
    "slug": slug.current
  },
  themes,
  challenges
}`

// --- Series Queries ---

export const ALL_SERIES_QUERY = groq`*[_type == "series"] | order(order asc, title asc) {
  _id,
  title,
  "slug": slug.current,
  description,
  coverImage,
  "storyCount": count(*[_type == "story" && references(^._id)])
}`

export const SERIES_BY_SLUG_QUERY = groq`*[_type == "series" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  description,
  coverImage,
  "stories": *[_type == "story" && references(^._id)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    coverImage,
    intro,
    readTime,
    "author": author->{
      name,
      photo
    }
  }
}`

// --- Writers Queries ---

export const ALL_WRITERS_QUERY = groq`*[_type == "writer"] | order(name asc) {
  _id,
  name,
  "slug": slug.current,
  bio,
  photo,
  role,
  socialLinks,
  color,
  "storyCount": count(*[_type == "story" && references(^._id)])
}`
