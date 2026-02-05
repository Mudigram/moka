'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, ArrowUpRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { urlFor } from '@/sanity/lib/image'

interface StoriesListingProps {
    initialStories: any[]
}

export default function StoriesListing({ initialStories }: StoriesListingProps) {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('ALL')

    // Derive active categories from the stories
    const categories = ["ALL", ...new Set(initialStories.map(s => s.series?.title || s.themes?.[0] || "STORY").filter(Boolean))]

    const filteredStories = (initialStories || []).filter(story => {
        const title = story.title || ''
        const intro = story.intro || ''
        const category = story.series?.title || story.themes?.[0] || "STORY"

        const matchesSearch = title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            intro.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === 'ALL' || category === selectedCategory
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
                    {categories.map(category => (
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
                                        {story.series?.title || story.themes?.[0] || "STORY"}
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

                                <div className="pt-4 mt-auto flex items-center justify-between border-t border-electric-purple/5 text-sm font-medium text-foreground/40">
                                    <div className="flex items-center gap-3">
                                        {story.author?.photo ? (
                                            <div className="w-8 h-8 rounded-full overflow-hidden">
                                                <Image
                                                    src={urlFor(story.author.photo).width(32).url()}
                                                    alt={story.author.name}
                                                    width={32}
                                                    height={32}
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-8 h-8 rounded-full bg-electric-purple/10 flex items-center justify-center text-electric-purple font-bold text-xs">
                                                {story.author?.name?.charAt(0) || "M"}
                                            </div>
                                        )}
                                        <span>{story.author?.name || "Moka Writer"}</span>
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
