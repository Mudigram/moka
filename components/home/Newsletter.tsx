import { Mail } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Newsletter() {
    return (
        <section className="py-24 px-6 bg-[#f5f0ff] relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-electric-purple/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-12 md:p-20 shadow-soft relative z-10 text-center space-y-8 animate-in fade-in zoom-in-95 duration-1000">
                <div className="w-20 h-20 bg-warm-coral rounded-full flex items-center justify-center text-white mx-auto shadow-lg shadow-warm-coral/20">
                    <Mail size={36} strokeWidth={1.5} />
                </div>

                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground">Join the Moka Community</h2>
                    <p className="text-xl text-foreground/60 max-w-xl mx-auto font-medium leading-relaxed">
                        Get career stories, market insights, and exclusive invitations delivered to your inbox every week.
                    </p>
                </div>

                <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-4">
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        className="h-14 px-6 rounded-xl border-electric-purple/10 focus-visible:ring-electric-purple bg-snow-pink lg:min-w-[300px]"
                    />
                    <Button
                        type="submit"
                        className="h-14 px-8 rounded-xl bg-warm-coral hover:bg-warm-coral/90 text-white font-bold transition-all active:scale-95 shadow-lg shadow-warm-coral/20"
                    >
                        Subscribe
                    </Button>
                </form>

                <p className="text-xs text-foreground/40 font-medium pt-2">
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </div>
        </section>
    )
}
