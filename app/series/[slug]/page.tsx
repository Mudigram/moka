import SeriesDetail from '@/components/series/SeriesDetail'
import { client } from '@/sanity/lib/client'
import { SERIES_BY_SLUG_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import { groq } from 'next-sanity'

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

export default async function SeriesDetailPage({ params }: PageProps) {
    const { slug } = await params
    const series = await client.fetch(SERIES_BY_SLUG_QUERY, { slug })

    if (!series) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-snow-pink pt-32 pb-24 px-6 mb-20">
            <div className="max-w-7xl mx-auto">
                <SeriesDetail series={series} />
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    const series = await client.fetch(groq`*[_type == "series"]{ "slug": slug.current }`)
    return series.map((item: any) => ({
        slug: item.slug,
    }))
}
