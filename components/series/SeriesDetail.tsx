'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Clock, User } from 'lucide-react'

// Dummy data for stories in a series
const SERIES_STORIES: Record<string, any[]> = {
    'first-jobs': [
        {
            id: '1',
            title: "Victorit's Tech Start",
            category: "SOFTWARE ENGINEERING",
            image: "/Featured.jpg",
            excerpt: "How a curious mind found its way into the world of lines and logic.",
            author: "Victorit",
            date: "Feb 1, 2026",
            readTime: "5 min read"
        },
        {
            id: '4',
            title: "Kofis Corporate Leap",
            category: "CORPORATE LEAP",
            image: "/Featured.jpg",
            excerpt: "The transition from entry-level to leading teams in a fast-paced environment.",
            author: "Kofi",
            date: "Jan 20, 2026",
            readTime: "7 min read"
        }
    ],
    'tech-transitions': [
        {
            id: '2',
            title: "Destiny's Global Journey",
            category: "GLOBAL JOURNEY",
            image: "/Featured2.jpg",
            excerpt: "Navigating international waters and building a career beyond borders.",
            author: "Destiny",
            date: "Jan 28, 2026",
            readTime: "8 min read"
        }
    ]
}

const SERIES_INFO: Record<string, any> = {
    'first-jobs': {
        title: "First Jobs",
        description: "The honest, unfiltered stories of how young professionals landed their very first roles and survived their first 90 days. A series about beginnings, mistakes, and early triumphs.",
        stats: "12 Stories | 4 Interviews | 8 Essays"
    },
    'tech-transitions': {
        title: "Tech Transitions",
        description: "From banking to coding, or teaching to product management. Real journeys of those who pivoted into the tech landscape and the skills they carried with them.",
        stats: "8 Stories | 3 Guides | 5 Interviews"
    }
}

export default function SeriesDetail({ slug }: { slug: string }) {
    const info = SERIES_INFO[slug] || { title: "Series Collection", description: "Discover a curated collection of career narratives.", stats: "Multiple Stories" }
    const stories = SERIES_STORIES[slug] || []

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
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">{info.title}</h1>
                    <p className="text-xl text-foreground/60 font-medium leading-relaxed max-w-2xl">
                        {info.description}
                    </p>
                    <div className="pt-4 border-t border-electric-purple/10 inline-block">
                        <span className="text-xs font-bold tracking-widest text-electric-purple uppercase">{info.stats}</span>
                    </div>
                </div>
            </div>

            {/* Stories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stories.length > 0 ? (
                    stories.map((story, index) => (
                        <Link
                            href={`/stories/${story.id}`}
                            key={story.id}
                            className="group animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="bg-white rounded-[2rem] overflow-hidden border border-electric-purple/5 shadow-soft hover:shadow-xl transition-all duration-500 flex flex-col h-full">
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={story.image}
                                        alt={story.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-md text-[10px] font-bold tracking-wider text-electric-purple px-3 py-1.5 rounded-full uppercase">
                                            {story.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 space-y-4 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold group-hover:text-electric-purple transition-colors duration-300">
                                        {story.title}
                                    </h3>
                                    <p className="text-foreground/60 text-base leading-relaxed line-clamp-2">
                                        {story.excerpt}
                                    </p>

                                    <div className="pt-4 mt-auto flex items-center justify-between border-t border-electric-purple/5 text-[13px] font-medium text-foreground/40">
                                        <div className="flex items-center gap-2">
                                            <User size={14} />
                                            <span>{story.author}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={14} />
                                            <span>{story.readTime}</span>
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
