import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface StoryCardProps {
    image: string
    title: string
    category: string
    delay: number
}

function StoryCard({ image, title, category, delay }: StoryCardProps) {
    return (
        <div
            className="group cursor-pointer animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-soft group-hover:shadow-xl transition-all duration-500">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
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
        </div>
    )
}

export default function FeaturedSeries() {
    const stories = [
        {
            title: "Victorit's Tech Start",
            category: "SOFTWARE ENGINEERING",
            image: "/Featured.jpg", // Using hero-image as placeholder if specific ones aren't found
            delay: 0
        },
        {
            title: "Destiny's Global Journey",
            category: "GLOBAL JOURNEY",
            image: "/Featured2.jpg",
            delay: 150
        },
        {
            title: "Kofi's Corporate Leap",
            category: "CORPORATE LEAP",
            image: "/Featured.jpg",
            delay: 300
        },
        {
            title: "Ikechukwu's Financial Path",
            category: "FINANCE",
            image: "/Featured2.jpg",
            delay: 450
        }
    ]

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="flex justify-between items-end">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold">Featured Series: First Jobs</h2>
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
                        <StoryCard key={index} {...story} />
                    ))}
                </div>
            </div>
        </section>
    )
}
