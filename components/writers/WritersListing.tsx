import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Instagram, Linkedin, Twitter } from 'lucide-react'
import { urlFor } from '@/sanity/lib/image'

interface WritersListingProps {
    writers: any[]
}

export default function WritersListing({ writers }: WritersListingProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {writers.map((writer, index) => (
                <div
                    key={writer._id || index}
                    className="group bg-white rounded-[3rem] p-10 border border-electric-purple/5 shadow-soft hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
                    style={{ animationDelay: `${index * 100}ms` }}
                >
                    <div className="relative">
                        <div className={`absolute -inset-2 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${writer.color === 'warm-coral' ? 'bg-warm-coral/30' : 'bg-electric-purple/30'
                            }`} />
                        <div className={`p-1.5 rounded-full border-2 transition-transform duration-500 group-hover:scale-105 ${writer.color === 'warm-coral' ? 'border-warm-coral' : 'border-electric-purple'
                            }`}>
                            <div className="w-32 h-32 rounded-full overflow-hidden relative">
                                {writer.photo ? (
                                    <Image
                                        src={urlFor(writer.photo).width(300).url()}
                                        alt={writer.name}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-electric-purple/5 flex items-center justify-center">
                                        <span className="text-electric-purple/20 font-bold">{writer.name.charAt(0)}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-1">
                            <h3 className="text-2xl font-bold">{writer.name}</h3>
                            <p className={`text-sm font-bold uppercase tracking-widest ${writer.color === 'warm-coral' ? 'text-warm-coral' : 'text-electric-purple'
                                }`}>
                                {writer.role}
                            </p>
                        </div>
                        <p className="text-foreground/60 font-medium leading-relaxed line-clamp-3 px-2">
                            {writer.bio}
                        </p>
                        <div className="pt-2 text-xs font-bold text-foreground/40 uppercase tracking-widest">
                            {writer.storyCount || 0} Stories Contributed
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4 mt-auto">
                        {writer.socialLinks?.map((link: string, i: number) => (
                            <a
                                key={i}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-snow-pink flex items-center justify-center text-foreground/40 hover:bg-electric-purple hover:text-white transition-all cursor-pointer"
                            >
                                {link.includes('twitter') || link.includes('x.com') ? <Twitter size={18} /> :
                                    link.includes('linkedin') ? <Linkedin size={18} /> :
                                        <Instagram size={18} />}
                            </a>
                        ))}
                        {(!writer.socialLinks || writer.socialLinks.length === 0) && (
                            <>
                                <div className="w-10 h-10 rounded-full bg-snow-pink flex items-center justify-center text-foreground/40 hover:bg-electric-purple hover:text-white transition-all cursor-pointer">
                                    <Twitter size={18} />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-snow-pink flex items-center justify-center text-foreground/40 hover:bg-warm-coral hover:text-white transition-all cursor-pointer">
                                    <Instagram size={18} />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            ))}

            {/* Join the Team Card */}
            <div className="lg:col-span-1 bg-warm-coral rounded-[3rem] p-10 flex flex-col items-center justify-center text-center text-white space-y-6 shadow-lg shadow-warm-coral/20 group hover:-translate-y-2 transition-transform duration-500">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-2">
                    <ArrowUpRight size={40} />
                </div>
                <h3 className="text-3xl font-bold">Become a <br />Storyteller</h3>
                <p className="font-medium text-white/80">
                    Do you have a unique perspective on careers in Africa? We're always looking for new voices.
                </p>
                <Link href="/contact" className="bg-white text-warm-coral px-8 py-3 rounded-xl font-bold hover:bg-snow-pink transition-all">
                    Apply Now
                </Link>
            </div>
        </div>
    )
}
