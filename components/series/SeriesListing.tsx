import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'

interface SeriesCardProps {
    title: string
    description: string
    image: string
    count: number
    delay: number
}

function SeriesCard({ title, description, image, count, delay }: SeriesCardProps) {
    return (
        <div
            className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-electric-purple/5 shadow-soft hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row h-full animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="md:w-1/3 relative min-h-[250px] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
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
                    <p className="text-foreground/60 text-lg leading-relaxed font-medium">
                        {description}
                    </p>
                </div>

                <Link
                    href={`/series/${title.toLowerCase().replace(/\s+/g, '-')}`}
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

export default function SeriesListing() {
    const series = [
        {
            title: "First Jobs",
            description: "The honest, unfiltered stories of how young professionals landed their very first roles and survived their first 90 days.",
            image: "/Featured.jpg",
            count: 12,
            delay: 0
        },
        {
            title: "Tech Transitions",
            description: "From banking to coding, or teaching to product management. Real journeys of those who pivoted into the tech landscape.",
            image: "/Featured2.jpg",
            count: 8,
            delay: 150
        },
        {
            title: "Creative Hub",
            description: "Spotlighting the designers, writers, and artists building impactful careers in Africa's growing creative economy.",
            image: "/hero-image.png",
            count: 15,
            delay: 300
        },
        {
            title: "Global Diaspora",
            description: "Navigating international career paths while staying rooted. Stories of relocation, remote work, and global impact.",
            image: "/Featured.jpg",
            count: 6,
            delay: 450
        }
    ]

    return (
        <div className="grid grid-cols-1 gap-12">
            {series.map((item, index) => (
                <SeriesCard key={index} {...item} />
            ))}
        </div>
    )
}
