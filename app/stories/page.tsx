import StoriesListing from '@/components/stories/StoriesListing'

export default function StoriesPage() {
    return (
        <main className="min-h-screen bg-snow-pink">
            {/* Header */}
            <header className="pt-32 pb-20 px-6 text-center bg-snow-pink relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-electric-purple/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

                <div className="max-w-4xl mx-auto space-y-6 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">Explore Stories</h1>
                    <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-medium leading-relaxed">
                        Authentic career journeys and expert insights from professionals across the African continent and the diaspora.
                    </p>
                </div>
            </header>

            {/* Listing Section */}
            <section className="pb-24 px-6 max-w-7xl mx-auto">
                <StoriesListing />
            </section>

            {/* Pagination / CTA */}
            <div className="pb-24 text-center">
                <button className="bg-white border-2 border-electric-purple text-electric-purple px-10 py-4 rounded-2xl font-bold hover:bg-electric-purple hover:text-white transition-all active:scale-95 shadow-sm glow-purple">
                    Load More Stories
                </button>
            </div>
        </main>
    )
}
