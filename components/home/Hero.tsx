import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-snow-pink pt-16 pb-24 md:pt-24 md:pb-32">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-electric-purple/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div className="relative z-10 space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1]">
                            Honest storytelling <br />
                            meets career <span className="text-electric-purple italic">inspiration</span>
                        </h1>
                        <p className="text-lg md:text-xl text-foreground/70 max-w-xl leading-relaxed font-medium">
                            Empowering the next generation of African professionals through real-world journeys and deep industry insights.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link
                            href="/contact"
                            className="bg-electric-purple text-white px-8 py-4 rounded-xl font-bold hover:bg-electric-purple/90 transition-all shadow-xl shadow-electric-purple/20 hover:shadow-electric-purple/30 active:scale-95"
                        >
                            Get Started
                        </Link>
                        <Link
                            href="/stories"
                            className="bg-white border-2 border-electric-purple text-electric-purple px-8 py-4 rounded-xl font-bold hover:bg-electric-purple/5 transition-all active:scale-95 shadow-sm"
                        >
                            Read Stories
                        </Link>
                    </div>
                </div>

                {/* Hero Image / Collage */}
                <div className="relative z-10 animate-in fade-in zoom-in-95 duration-1000 delay-200">
                    <div className="relative group">
                        {/* Main Image Container */}
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                            <Image
                                src="/hero-image.png"
                                alt="African professionals collaborating and innovating"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-electric-purple/20 to-transparent opacity-40" />
                        </div>

                        {/* Decorative Badge 1 */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-snow-pink animate-bounce-slow">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-warm-coral/10 rounded-full flex items-center justify-center text-warm-coral">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-foreground">Featured Series</p>
                                    <p className="text-[10px] text-foreground/50">First Jobs: Nigeria</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Badge 2 */}
                        <div className="absolute -top-6 -right-6 bg-electric-purple text-white p-4 rounded-2xl shadow-xl animate-float">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center overflow-hidden">
                                    <div className="w-full h-full bg-snow-pink/20" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold">New Story</p>
                                    <p className="text-[10px] text-white/70">Akin's Tech Start</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
