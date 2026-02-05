'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Calendar, Clock, Quote, Sparkles } from 'lucide-react'

interface StoryContentProps {
    story: {
        title: string
        category: string
        author: string
        date: string
        readTime: string
        image: string
        content: string[]
        takeaways: string[]
    }
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
                    <span className="bg-electric-purple/10 px-3 py-1 rounded-full">{story.category}</span>
                    <span className="w-1 h-1 bg-foreground/20 rounded-full" />
                    <div className="flex items-center gap-1.5 transition-colors">
                        <Calendar size={14} />
                        <span>{story.date}</span>
                    </div>
                    <span className="w-1 h-1 bg-foreground/20 rounded-full" />
                    <div className="flex items-center gap-1.5 transition-colors">
                        <Clock size={14} />
                        <span>{story.readTime}</span>
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] max-w-5xl mx-auto break-words">
                    {story.title}
                </h1>

                <div className="flex items-center justify-center gap-4 pt-4">
                    <div className="w-12 h-12 rounded-full bg-electric-purple flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-electric-purple/20">
                        {story.author.charAt(0)}
                    </div>
                    <div className="text-left">
                        <p className="text-sm font-bold text-foreground">Written by {story.author}</p>
                        <p className="text-xs font-medium text-foreground/40">Storyteller at Moka</p>
                    </div>
                </div>
            </header>

            {/* Hero Image */}
            <div className="max-w-7xl mx-auto px-6 mb-20 animate-in fade-in zoom-in-95 duration-1000">
                <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl">
                    <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Main Content Side-by-Side with Takeaways for Desktop */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24">
                {/* Text Column */}
                <div className="lg:col-span-8 space-y-10">
                    <div className="prose prose-lg max-w-none text-foreground/80 leading-[1.8] font-medium space-y-8 text-lg md:text-xl">
                        {story.content.map((paragraph, i) => {
                            if (paragraph.startsWith('>')) {
                                return (
                                    <div key={i} className="relative py-12 px-10 my-12 bg-snow-pink rounded-[2.5rem] border-l-8 border-electric-purple italic text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
                                        <Quote className="absolute top-6 left-6 text-electric-purple/10 w-16 h-16 -z-10" strokeWidth={3} />
                                        {paragraph.substring(1).trim()}
                                    </div>
                                )
                            }
                            return <p key={i}>{paragraph}</p>
                        })}
                    </div>
                </div>

                {/* Sticky Takeaways Side Column */}
                <aside className="lg:col-span-4 lg:sticky lg:top-36 h-fit space-y-8">
                    <div className="bg-white rounded-[2.5rem] p-10 border border-electric-purple/5 shadow-soft space-y-8 animate-in slide-in-from-right-8 duration-1000">
                        <div className="flex items-center gap-3 text-electric-purple">
                            <Sparkles size={24} />
                            <h3 className="text-xl font-bold">Key Lessons</h3>
                        </div>
                        <ul className="space-y-6">
                            {story.takeaways.map((task, i) => (
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
                            <button className="w-full bg-warm-coral text-white py-4 rounded-xl font-bold hover:bg-warm-coral/90 transition-all active:scale-95 shadow-lg shadow-warm-coral/20">
                                Support this Story
                            </button>
                        </div>
                    </div>

                    <div className="p-10 bg-snow-pink rounded-[2.5rem] border border-electric-purple/5">
                        <p className="text-sm font-bold text-electric-purple uppercase tracking-widest mb-4">Share this journey</p>
                        <div className="flex gap-4">
                            {['X', 'In', 'Fb'].map(social => (
                                <div key={social} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-foreground/40 font-bold text-xs hover:bg-electric-purple hover:text-white cursor-pointer transition-all">
                                    {social}
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </article>
    )
}
