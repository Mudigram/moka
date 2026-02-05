import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'

interface RelatedStoriesProps {
    stories?: any[]
}

export default function RelatedStories({ stories = [] }: RelatedStoriesProps) {
    if (!stories || stories.length === 0) return null

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
                    {stories.map((story, index) => (
                        <Link
                            href={`/stories/${story.slug}`}
                            key={story._id || index}
                            className="group animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="bg-white rounded-[2.5rem] overflow-hidden border border-electric-purple/5 shadow-soft hover:shadow-xl transition-all duration-500 flex flex-col h-full p-4">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                                    {story.coverImage ? (
                                        <Image
                                            src={urlFor(story.coverImage).width(600).url()}
                                            alt={story.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-electric-purple/5" />
                                    )}
                                </div>
                                <div className="px-4 pb-4 space-y-2">
                                    <span className="text-[10px] font-bold tracking-[0.1em] text-electric-purple uppercase">
                                        {story.series?.title || story.themes?.[0] || 'STORY'}
                                    </span>
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
