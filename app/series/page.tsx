import SeriesListing from '@/components/series/SeriesListing'

export default function SeriesPage() {
    return (
        <main className="min-h-screen bg-snow-pink">
            {/* Header */}
            <header className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-electric-purple/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

                <div className="max-w-4xl mx-auto space-y-6 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
                    <p className="text-electric-purple font-bold tracking-[0.2em] uppercase text-sm">Curated Collections</p>
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">Career Series</h1>
                    <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-medium leading-relaxed">
                        Deep dives into thematic journeys. Discover stories grouped by the challenges and milestones that define modern careers.
                    </p>
                </div>
            </header>

            {/* Series Section */}
            <section className="pb-32 px-6 max-w-7xl mx-auto">
                <SeriesListing />
            </section>
        </main>
    )
}
