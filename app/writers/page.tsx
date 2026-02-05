import WritersListing from '@/components/writers/WritersListing'
import Newsletter from '@/components/home/Newsletter'

export default function WritersPage() {
    return (
        <main className="min-h-screen bg-snow-pink">
            {/* Header */}
            <header className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-warm-coral/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
                <div className="absolute top-0 left-0 w-[400px] h-[300px] bg-electric-purple/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

                <div className="max-w-4xl mx-auto space-y-6 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
                    <p className="text-warm-coral font-bold tracking-[0.2em] uppercase text-sm">Our Contributors</p>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">The Voices of <span className="text-electric-purple italic">Moka.</span></h1>
                    <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-medium leading-relaxed">
                        A diverse community of writers, experts, and professionals dedicated to sharing the real stories behind success in Africa.
                    </p>
                </div>
            </header>

            {/* Writers Grid Section */}
            <section className="pb-32 px-6 max-w-7xl mx-auto">
                <WritersListing />
            </section>

            <Newsletter />
        </main>
    )
}
