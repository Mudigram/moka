import { sanityClient } from '@/lib/sanity.client'
import { storiesQuery } from '@/lib/sanity.queries'

export default async function Home() {
  const stories = await sanityClient.fetch(storiesQuery)

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Sanity Connected</h1>
      <pre className="mt-4 text-sm">{JSON.stringify(stories, null, 2)}</pre>
    </main>
  )
}
