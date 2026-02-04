import { LucideIcon, Zap, Target, Users } from 'lucide-react'

interface FeatureCardProps {
    title: string
    description: string
    icon: LucideIcon
}

function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
    return (
        <div className="bg-white p-8 rounded-3xl border border-electric-purple/5 shadow-soft hover:shadow-xl transition-all duration-500 group">
            <div className="w-14 h-14 bg-electric-purple/5 rounded-2xl flex items-center justify-center text-electric-purple mb-6 group-hover:bg-electric-purple group-hover:text-white transition-colors duration-500">
                <Icon size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-foreground/60 leading-relaxed text-sm">
                {description}
            </p>
        </div>
    )
}

export default function Features() {
    const features = [
        {
            title: "Real Journeys",
            description: "Learn from the honest, unfiltered experiences of those who walked the path before you.",
            icon: Zap
        },
        {
            title: "Market Insights",
            description: "Navigate the unique landscape of the African job market with data-driven confidence.",
            icon: Target
        },
        {
            title: "Professional Community",
            description: "Connect with a network of like-minded young professionals across the entire continent.",
            icon: Users
        }
    ]

    return (
        <section className="py-24 px-6 bg-snow-pink relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-electric-purple/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-16 relative z-10">
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold">What is Moka?</h2>
                    <p className="text-lg text-foreground/70 font-medium">
                        We bridge the gap between education and career through authentic narratives that matter.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <FeatureCard {...feature} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
