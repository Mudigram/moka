'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, Quote, Sparkles } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/sanity/lib/image'

interface StoryContentProps {
    story: any
}

const components = {
    block: {
        blockquote: ({ children }: any) => (
            <div className="relative py-12 px-10 my-12 bg-snow-pink rounded-[2.5rem] border-l-8 border-electric-purple italic text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
                <Quote className="absolute top-6 left-6 text-electric-purple/10 w-16 h-16 -z-10" strokeWidth={3} />
                {children}
            </div>
        ),
        h2: ({ children }: any) => <h2 className="text-3xl font-bold mt-16 mb-8 text-foreground">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-2xl font-bold mt-12 mb-6 text-foreground">{children}</h3>,
        normal: ({ children }: any) => <p className="mb-6">{children}</p>,
    },
    types: {
        image: ({ value }: any) => (
            <div className="my-12 relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-lg">
                <Image
                    src={urlFor(value).width(1200).url()}
                    alt={value.alt || 'Story Content Image'}
                    fill
                    className="object-cover"
                />
            </div>
        ),
    },
}

export default function StoryContent({ story }: StoryContentProps) {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const updateScrollProgress = () => {
            const currentScroll = window.scrollY
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
            if (scrollHeight) {
                setScrollProgress(Number((currentScroll / scrollHeight).toFixed(2)) * 100)
            }
        }

        window.addEventListener('scroll', updateScrollProgress)
        return () => window.removeEventListener('scroll', updateScrollProgress)
    }, [])

    if (!story) return null

    const publishDate = story.publishedAt ? new Date(story.publishedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }) : 'Moka Story'

    return (
        <article className="relative">
            {/* Reading Progress Bar */}
            <div className="fixed top-20 left-0 w-full h-1 z-50 pointer-events-none">
                <div
                    className="h-full bg-electric-purple transition-all duration-150"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            {/* Story Header */}
            <header className="pt-24 pb-16 space-y-8 text-center px-6">
                <div className="flex items-center justify-center gap-4 text-xs font-bold tracking-[0.2em] text-electric-purple uppercase">
                    <span className="bg-electric-purple/10 px-3 py-1 rounded-full">
                        {story.series?.title || story.themes?.[0] || 'STORY'}
                    </span>
                    <span className="w-1 h-1 bg-foreground/20 rounded-full" />
                    <div className="flex items-center gap-1.5 transition-colors">
                        <Calendar size={14} />
                        <span>{publishDate}</span>
                    </div>
                    <span className="w-1 h-1 bg-foreground/20 rounded-full" />
                    <div className="flex items-center gap-1.5 transition-colors">
                        <Clock size={14} />
                        <span>{story.readTime || '5 min read'}</span>
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] max-w-5xl mx-auto break-words">
                    {story.title}
                </h1>

                <div className="flex items-center justify-center gap-4 pt-4">
                    {story.author?.photo ? (
                        <div className="w-12 h-12 rounded-full overflow-hidden relative shadow-lg">
                            <Image
                                src={urlFor(story.author.photo).width(48).url()}
                                alt={story.author.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ) : (
                        <div className="w-12 h-12 rounded-full bg-electric-purple flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-electric-purple/20">
                            {story.author?.name?.charAt(0) || 'M'}
                        </div>
                    )}
                    <div className="text-left">
                        <p className="text-sm font-bold text-foreground">Written by {story.author?.name || 'Moka Writer'}</p>
                        <p className="text-xs font-medium text-foreground/40">{story.author?.role || 'Contributor'}</p>
                    </div>
                </div>
            </header>

            {/* Hero Image */}
            <div className="max-w-7xl mx-auto px-6 mb-20 animate-in fade-in zoom-in-95 duration-1000">
                <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl">
                    {story.coverImage ? (
                        <Image
                            src={urlFor(story.coverImage).width(1600).url()}
                            alt={story.title}
                            fill
                            priority
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-snow-pink" />
                    )}
                </div>
            </div>

            {/* Main Content Side-by-Side with Takeaways for Desktop */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24">
                {/* Text Column */}
                <div className="lg:col-span-8 space-y-10">
                    <div className="prose prose-lg max-w-none text-foreground/80 leading-[1.8] font-medium space-y-0 text-lg md:text-xl">
                        <PortableText value={story.body} components={components} />
                    </div>
                </div>

                {/* Sticky Takeaways Side Column */}
                <aside className="lg:col-span-4 lg:sticky lg:top-36 h-fit space-y-8">
                    {story.takeaways && story.takeaways.length > 0 && (
                        <div className="bg-white rounded-[2.5rem] p-10 border border-electric-purple/5 shadow-soft space-y-8 animate-in slide-in-from-right-8 duration-1000">
                            <div className="flex items-center gap-3 text-electric-purple">
                                <Sparkles size={24} />
                                <h3 className="text-xl font-bold">Key Lessons</h3>
                            </div>
                            <ul className="space-y-6">
                                {story.takeaways.map((task: string, i: number) => (
                                    <li key={i} className="flex gap-4 group">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-electric-purple/10 text-electric-purple flex items-center justify-center font-bold text-xs group-hover:bg-electric-purple group-hover:text-white transition-colors duration-300">
                                            {i + 1}
                                        </span>
                                        <p className="text-base text-foreground/70 font-semibold leading-relaxed">
                                            {task}
                                        </p>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-8 border-t border-electric-purple/5">
                                <Link
                                    href="/contact"
                                    className="block w-full text-center bg-warm-coral text-white py-4 rounded-xl font-bold hover:bg-warm-coral/90 transition-all active:scale-95 shadow-lg shadow-warm-coral/20"
                                >
                                    Support this Story
                                </Link>
                            </div>
                        </div>
                    )}

                    <div className="p-10 bg-snow-pink rounded-[2.5rem] border border-electric-purple/5">
                        <p className="text-sm font-bold text-electric-purple uppercase tracking-widest mb-4">Share this journey</p>
                        <div className="flex gap-4">
                            {['X', 'LinkedIn', 'Instagram'].map(social => (
                                <div key={social} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-foreground/40 font-bold text-[10px] hover:bg-electric-purple hover:text-white cursor-pointer transition-all">
                                    {social.substring(0, 2)}
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </article>
    )
}
