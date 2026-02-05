import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { urlFor } from '@/sanity/lib/image'

interface StoryCardProps {
    image: any
    title: string
    category: string
    slug: string
    delay: number
}

function StoryCard({ image, title, category, slug, delay }: StoryCardProps) {
    return (
        <Link
            href={`/stories/${slug}`}
            className="group cursor-pointer animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-soft group-hover:shadow-xl transition-all duration-500">
                {image ? (
                    <Image
                        src={urlFor(image).width(800).url()}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full bg-electric-purple/5 flex items-center justify-center">
                        <span className="text-electric-purple/20 font-bold">Moka</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-electric-purple/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowUpRight size={20} className="text-electric-purple" />
                </div>
            </div>
            <div className="space-y-2">
                <p className="text-[10px] font-bold tracking-[0.1em] text-electric-purple uppercase">{category}</p>
                <h3 className="text-xl font-bold group-hover:text-electric-purple transition-colors duration-300 leading-tight">
                    {title}
                </h3>
            </div>
        </Link>
    )
}

interface FeaturedSeriesProps {
    title?: string
    stories: any[]
}

export default function FeaturedSeries({ title = "Featured Series", stories }: FeaturedSeriesProps) {
    if (!stories || stories.length === 0) return null

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="flex justify-between items-end">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
                    </div>
                    <Link
                        href="/stories"
                        className="flex items-center gap-2 text-foreground/40 font-bold hover:text-electric-purple transition-colors duration-300 mb-2"
                    >
                        View All <ArrowUpRight size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stories.map((story, index) => (
                        <StoryCard
                            key={story._id || index}
                            title={story.title}
                            category={story.category || story.series?.title || "STORY"}
                            image={story.coverImage}
                            slug={story.slug}
                            delay={index * 150}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
