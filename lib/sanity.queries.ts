import { groq } from 'next-sanity'

export const storiesQuery = groq`
  *[_type == "story"]{
    _id,
    title,
    "slug": slug.current
  }
`
