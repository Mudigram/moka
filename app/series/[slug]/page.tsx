import SeriesDetail from '@/components/series/SeriesDetail'

interface PageProps {
    params: {
        slug: string
    }
}

export default function SeriesDetailPage({ params }: PageProps) {
    return (
        <main className="min-h-screen bg-snow-pink pt-32 pb-24 px-6 mb-20">
            <div className="max-w-7xl mx-auto">
                <SeriesDetail slug={params.slug} />
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    return [
        { slug: 'first-jobs' },
        { slug: 'tech-transitions' },
        { slug: 'creative-hub' },
        { slug: 'global-diaspora' }
    ]
}
