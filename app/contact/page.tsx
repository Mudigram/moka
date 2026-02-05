'use client'

import { Mail, MessageSquare, Send, Users } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-snow-pink pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                {/* Information Column */}
                <div className="space-y-12 animate-in fade-in slide-in-from-left-8 duration-1000">
                    <div className="space-y-6">
                        <p className="text-warm-coral font-bold tracking-[0.2em] uppercase text-sm">Contact Us</p>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                            Let's start a <span className="text-electric-purple italic">conversation.</span>
                        </h1>
                        <p className="text-xl text-foreground/60 max-w-lg font-medium leading-relaxed">
                            Whether you want to share a story, collaborate on a series, or just say hello, we'd love to hear from you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-8 bg-white rounded-3xl border border-electric-purple/5 shadow-soft space-y-4">
                            <div className="w-12 h-12 bg-electric-purple/5 rounded-2xl flex items-center justify-center text-electric-purple">
                                <Users size={24} />
                            </div>
                            <h3 className="text-lg font-bold">Story Submissions</h3>
                            <p className="text-sm text-foreground/60 font-medium">Share your career journey with our global community.</p>
                        </div>
                        <div className="p-8 bg-white rounded-3xl border border-electric-purple/5 shadow-soft space-y-4">
                            <div className="w-12 h-12 bg-warm-coral/10 rounded-2xl flex items-center justify-center text-warm-coral">
                                <MessageSquare size={24} />
                            </div>
                            <h3 className="text-lg font-bold">Collaborations</h3>
                            <p className="text-sm text-foreground/60 font-medium">Partner with Moka on series, events, or workshops.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-6 bg-electric-purple rounded-3xl text-white">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-white/60 uppercase tracking-widest">Email us at</p>
                            <p className="text-lg font-bold">hello@moka.com</p>
                        </div>
                    </div>
                </div>

                {/* Form Column */}
                <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl border border-electric-purple/5 animate-in fade-in slide-in-from-right-8 duration-1000">
                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-foreground/60 ml-1">Full Name</label>
                                <Input placeholder="Jane Doe" className="h-14 px-6 rounded-xl border-electric-purple/10 focus-visible:ring-electric-purple bg-snow-pink" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-foreground/60 ml-1">Email Address</label>
                                <Input type="email" placeholder="jane@example.com" className="h-14 px-6 rounded-xl border-electric-purple/10 focus-visible:ring-electric-purple bg-snow-pink" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-foreground/60 ml-1">Subject</label>
                            <Input placeholder="How can we help?" className="h-14 px-6 rounded-xl border-electric-purple/10 focus-visible:ring-electric-purple bg-snow-pink" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-foreground/60 ml-1">Message</label>
                            <Textarea
                                placeholder="Tell us more about your inquiry..."
                                className="min-h-[150px] p-6 rounded-xl border-electric-purple/10 focus-visible:ring-electric-purple bg-snow-pink resize-none"
                            />
                        </div>

                        <Button className="w-full h-16 rounded-2xl bg-warm-coral hover:bg-warm-coral/90 text-white font-bold text-lg shadow-lg shadow-warm-coral/20 transition-all active:scale-95 flex items-center gap-3">
                            Send Message <Send size={20} />
                        </Button>
                    </form>
                </div>
            </div>
        </main>
    )
}
