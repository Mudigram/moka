import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import FeaturedSeries from '@/components/home/FeaturedSeries'
import Newsletter from '@/components/home/Newsletter'
import { client } from '@/sanity/lib/client'
import { RECENT_STORIES_QUERY } from '@/sanity/lib/queries'

export default async function Home() {
  const recentStories = await client.fetch(RECENT_STORIES_QUERY)

  return (
    <>
      <Hero />
      <Features />
      <FeaturedSeries title="Recent Stories" stories={recentStories} />
      <Newsletter />
    </>
  )
}
