import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const RELATED_STORIES = [
    {
        id: '2',
        title: "Destiny's Global Journey",
        category: "GLOBAL JOURNEY",
        image: "/Featured2.jpg",
    },
    {
        id: '3',
        title: "Ikechukwu's Financial Path",
        category: "FINANCE",
        image: "/Featured2.jpg",
    },
    {
        id: '4',
        title: "Kofis Corporate Leap",
        category: "CORPORATE LEAP",
        image: "/Featured.jpg",
    }
]

export default function RelatedStories() {
    return (
        <section className="py-24 bg-snow-pink">
            <div className="max-w-7xl mx-auto px-6 space-y-12">
                <div className="flex justify-between items-end">
                    <h2 className="text-3xl md:text-4xl font-bold">More for you to explore</h2>
                    <Link href="/stories" className="text-electric-purple font-bold flex items-center gap-2 hover:underline">
                        View all <ArrowUpRight size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {RELATED_STORIES.map((story, index) => (
                        <Link
                            href={`/stories/${story.id}`}
                            key={index}
                            className="group animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="bg-white rounded-[2.5rem] overflow-hidden border border-electric-purple/5 shadow-soft hover:shadow-xl transition-all duration-500 flex flex-col h-full p-4">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                                    <Image
                                        src={story.image}
                                        alt={story.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="px-4 pb-4 space-y-2">
                                    <span className="text-[10px] font-bold tracking-[0.1em] text-electric-purple uppercase">{story.category}</span>
                                    <h3 className="text-xl font-bold group-hover:text-electric-purple transition-colors duration-300">
                                        {story.title}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
