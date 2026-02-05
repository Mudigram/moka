'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, ArrowUpRight } from 'lucide-react'
import { Input } from '@/components/ui/input'

const DUMMY_STORIES = [
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
        id: '2',
        title: "Destiny's Global Journey",
        category: "GLOBAL JOURNEY",
        image: "/Featured2.jpg",
        excerpt: "Navigating international waters and building a career beyond borders.",
        author: "Destiny",
        date: "Jan 28, 2026",
        readTime: "8 min read"
    },
    {
        id: '3',
        title: "Ikechukwu's Financial Path",
        category: "FINANCE",
        image: "/Featured2.jpg",
        excerpt: "Breaking down complex numbers into a successful career in investment banking.",
        author: "Ikechukwu",
        date: "Jan 25, 2026",
        readTime: "6 min read"
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
    },
    {
        id: '5',
        title: "Amina's Creative Vision",
        category: "GRAPHIC DESIGN",
        image: "/Featured2.jpg",
        excerpt: "Finding colors and shapes that tell a story of African identity.",
        author: "Amina",
        date: "Jan 15, 2026",
        readTime: "4 min read"
    },
    {
        id: '6',
        title: "Kwame's Medical Residency",
        category: "HEALTHCARE",
        image: "/Featured.jpg",
        excerpt: "The rigorous path of becoming a doctor in a developing healthcare system.",
        author: "Kwame",
        date: "Jan 10, 2026",
        readTime: "10 min read"
    }
]

const CATEGORIES = ["ALL", "SOFTWARE ENGINEERING", "FINANCE", "HEALTHCARE", "GRAPHIC DESIGN", "GLOBAL JOURNEY", "CORPORATE LEAP"]

export default function StoriesListing() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('ALL')

    const filteredStories = DUMMY_STORIES.filter(story => {
        const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            story.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === 'ALL' || story.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    return (
        <div className="space-y-12">
            {/* Search & Filters */}
            <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                <div className="relative w-full md:max-w-md group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30 transition-colors group-focus-within:text-electric-purple" size={20} />
                    <Input
                        placeholder="Search stories..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-12 h-14 bg-white border-electric-purple/10 rounded-2xl focus-visible:ring-electric-purple text-base"
                    />
                </div>

                <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${selectedCategory === category
                                    ? 'bg-electric-purple text-white shadow-lg shadow-electric-purple/20'
                                    : 'bg-white text-foreground/60 border border-electric-purple/5 hover:bg-electric-purple/5 hover:text-electric-purple'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Stories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredStories.map((story, index) => (
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

                                <div className="pt-4 mt-auto flex items-center justify-between border-t border-electric-purple/5 text-sm font-medium text-foreground/40">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-electric-purple/10 flex items-center justify-center text-electric-purple font-bold text-xs">
                                            {story.author.charAt(0)}
                                        </div>
                                        <span>{story.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2 group-hover:text-electric-purple transition-colors">
                                        View Story <ArrowUpRight size={16} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {filteredStories.length === 0 && (
                <div className="text-center py-20 bg-white rounded-[2rem] border-2 border-dashed border-electric-purple/10">
                    <p className="text-foreground/40 font-medium text-lg">No stories found matching your criteria.</p>
                </div>
            )}
        </div>
    )
}
