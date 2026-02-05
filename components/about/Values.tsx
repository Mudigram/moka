import { Compass, Sprout, Users2 } from 'lucide-react'

interface ValueCardProps {
    title: string
    description: string
    icon: any
}

function ValueCard({ title, description, icon: Icon }: ValueCardProps) {
    return (
        <div className="p-10 rounded-3xl bg-snow-pink border border-electric-purple/5 space-y-6 hover:shadow-xl transition-all duration-500 group">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-electric-purple group-hover:bg-electric-purple group-hover:text-white transition-colors duration-500 shadow-sm">
                <Icon size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-foreground/60 leading-relaxed font-medium">{description}</p>
        </div>
    )
}

export default function Values() {
    const values = [
        {
            title: "Authenticity",
            description: "Sharing human-centered stories that reveal the real people, experiences, and growth behind success.",
            icon: Users2
        },
        {
            title: "Growth",
            description: "Highlighting the common pursuit of purpose and professional evolution across the continent.",
            icon: Sprout
        },
        {
            title: "Connection",
            description: "Fostering a space where the new generation can see themselves in others' stories and build meaningful networks.",
            icon: Compass
        }
    ]

    return (
        <section className="py-24 px-6 bg-purple-100">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold">Our Core Values</h2>
                    <p className="text-lg text-foreground/60 max-w-2xl mx-auto font-medium">The principles that guide every story we share and every connection we foster.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <ValueCard key={index} {...value} />
                    ))}
                </div>
            </div>
        </section>
    )
}

