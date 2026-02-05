import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import { urlFor } from '@/sanity/lib/image'

interface SeriesCardProps {
    title: string
    description: string
    image: any
    slug: string
    count: number
    delay: number
}

function SeriesCard({ title, description, image, slug, count, delay }: SeriesCardProps) {
    return (
        <div
            className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-electric-purple/5 shadow-soft hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row h-full animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="md:w-1/3 relative min-h-[250px] overflow-hidden">
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
                <div className="absolute inset-0 bg-electric-purple/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="p-10 md:w-2/3 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-electric-purple font-bold text-xs tracking-widest uppercase">
                        <BookOpen size={16} />
                        <span>{count} {count === 1 ? 'Story' : 'Stories'}</span>
                    </div>
                    <h3 className="text-3xl font-bold group-hover:text-electric-purple transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-foreground/60 text-lg leading-relaxed font-medium line-clamp-3">
                        {description}
                    </p>
                </div>

                <Link
                    href={`/series/${slug}`}
                    className={`inline-flex items-center justify-center gap-2 text-white px-8 py-3.5 rounded-xl font-bold transition-all active:scale-95 w-fit ${title === 'Tech Transitions' || title === 'Global Diaspora'
                            ? 'bg-warm-coral hover:bg-warm-coral/90 shadow-lg shadow-warm-coral/20'
                            : 'bg-electric-purple hover:bg-electric-purple/90 glow-purple'
                        }`}
                >
                    Explore Series <ArrowRight size={20} />
                </Link>
            </div>
        </div>
    )
}

interface SeriesListingProps {
    series: any[]
}

export default function SeriesListing({ series }: SeriesListingProps) {
    if (!series || series.length === 0) return (
        <div className="text-center py-20 bg-white rounded-[2rem] border-2 border-dashed border-electric-purple/10">
            <p className="text-foreground/40 font-medium text-lg">No series found.</p>
        </div>
    )

    return (
        <div className="grid grid-cols-1 gap-12">
            {series.map((item, index) => (
                <SeriesCard
                    key={item._id || index}
                    title={item.title}
                    description={item.description}
                    image={item.coverImage}
                    slug={item.slug}
                    count={item.storyCount || 0}
                    delay={index * 150}
                />
            ))}
        </div>
    )
}
