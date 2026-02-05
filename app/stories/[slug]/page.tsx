import StoryContent from '@/components/stories/StoryContent'
import RelatedStories from '@/components/stories/RelatedStories'
import Newsletter from '@/components/home/Newsletter'
import { client } from '@/sanity/lib/client'
import { STORY_BY_SLUG_QUERY, ALL_STORIES_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import { groq } from 'next-sanity'

export default async function StoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const story = await client.fetch(STORY_BY_SLUG_QUERY, { slug })
    const recentStories = await client.fetch(groq`*[_type == "story" && slug.current != $slug] | order(publishedAt desc)[0...3] {
        _id,
        title,
        "slug": slug.current,
        coverImage,
        "series": series->{ title },
        themes
    }`, { slug })

    if (!story) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-white">
            <StoryContent story={story} />
            <RelatedStories stories={recentStories} />
            <Newsletter />
        </main>
    )
}

export async function generateStaticParams() {
    const stories = await client.fetch(groq`*[_type == "story"]{ "slug": slug.current }`)
    return stories.map((story: any) => ({
        slug: story.slug,
    }))
}
