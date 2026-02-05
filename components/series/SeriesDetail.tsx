'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, User } from 'lucide-react'
import { urlFor } from '@/sanity/lib/image'

interface SeriesDetailProps {
    series: any
}

export default function SeriesDetail({ series }: SeriesDetailProps) {
    if (!series) return null

    const stories = series.stories || []

    return (
        <div className="space-y-16">
            {/* series Header */}
            <div className="space-y-8 max-w-4xl">
                <Link
                    href="/series"
                    className="inline-flex items-center gap-2 text-foreground/40 font-bold hover:text-electric-purple transition-colors mb-4"
                >
                    <ArrowLeft size={20} /> Back to Series
                </Link>

                <div className="space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">{series.title}</h1>
                    <p className="text-xl text-foreground/60 font-medium leading-relaxed max-w-2xl">
                        {series.description}
                    </p>
                    <div className="pt-4 border-t border-electric-purple/10 inline-block">
                        <span className="text-xs font-bold tracking-widest text-electric-purple uppercase">
                            {stories.length} {stories.length === 1 ? 'Story' : 'Stories'} in this collection
                        </span>
                    </div>
                </div>
            </div>

            {/* Stories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stories.length > 0 ? (
                    stories.map((story: any, index: number) => (
                        <Link
                            href={`/stories/${story.slug}`}
                            key={story._id || index}
                            className="group animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="bg-white rounded-[2rem] overflow-hidden border border-electric-purple/5 shadow-soft hover:shadow-xl transition-all duration-500 flex flex-col h-full">
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    {story.coverImage ? (
                                        <Image
                                            src={urlFor(story.coverImage).width(800).url()}
                                            alt={story.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-electric-purple/5 flex items-center justify-center">
                                            <span className="text-electric-purple/20 font-bold">Moka</span>
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-md text-[10px] font-bold tracking-wider text-electric-purple px-3 py-1.5 rounded-full uppercase">
                                            {series.title}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 space-y-4 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold group-hover:text-electric-purple transition-colors duration-300">
                                        {story.title}
                                    </h3>
                                    <p className="text-foreground/60 text-base leading-relaxed line-clamp-2">
                                        {story.intro}
                                    </p>

                                    <div className="pt-4 mt-auto flex items-center justify-between border-t border-electric-purple/5 text-[13px] font-medium text-foreground/40">
                                        <div className="flex items-center gap-2">
                                            <User size={14} />
                                            <span>{story.author?.name || "Moka Writer"}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={14} />
                                            <span>{story.readTime || "5 min read"}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center bg-white rounded-[2.5rem] border-2 border-dashed border-electric-purple/10">
                        <p className="text-foreground/40 font-medium">More stories for this series are coming soon!</p>
                    </div>
                )}
            </div>

            {/* CTA or Footer for Series */}
            <div className="py-12 px-10 bg-electric-purple rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-2 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold">Have a similar story?</h2>
                    <p className="text-white/70 font-medium">Join our community and share your journey with thousands of others.</p>
                </div>
                <Link
                    href="/contact"
                    className="bg-white text-electric-purple px-10 py-4 rounded-xl font-bold hover:bg-snow-pink transition-all active:scale-95 whitespace-nowrap"
                >
                    Submit Your Story
                </Link>
            </div>
        </div>
    )
}
