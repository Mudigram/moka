export default function AboutHero() {
    return (
        <section className="bg-snow-pink pt-32 pb-24 px-6 relative overflow-hidden text-center">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-electric-purple/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

            <div className="max-w-4xl mx-auto space-y-8 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <p className="text-warm-coral font-bold tracking-[0.2em] uppercase text-sm">About Moka</p>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    Rooted in <span className="text-electric-purple italic">authenticity</span>, <br />
                    driven by <span className="text-warm-coral">purpose.</span>
                </h1>
                <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-medium leading-relaxed">
                    Moka is a storytelling and career platform dedicated to spotlighting the voices and journeys of young professionals across Africa and the diaspora.
                </p>
            </div>
        </section>
    )
}
