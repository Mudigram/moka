import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo/logo.png'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-white border-t border-electric-purple/5 py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                {/* Brand Section */}
                <div className="space-y-6">
                    <Link href="/" className="inline-block">
                        <Image src={logo} alt="Moka Logo" width={120} height={42} className="h-auto w-auto opacity-90" />
                    </Link>
                    <p className="text-base text-foreground/60 leading-relaxed max-w-xs font-medium">
                        Connecting young African professionals with the stories and tools they need to thrive.
                    </p>
                    <div className="flex gap-5 text-electric-purple">
                        {/* Social Icons Placeholders */}
                        <div className="w-6 h-6 bg-electric-purple/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-electric-purple/20 transition-colors">
                            <span className="text-[12px]">𝕏</span>
                        </div>
                        <div className="w-6 h-6 bg-electric-purple/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-electric-purple/20 transition-colors">
                            <span className="text-[12px]">In</span>
                        </div>
                        <div className="w-6 h-6 bg-electric-purple/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-electric-purple/20 transition-colors">
                            <span className="text-[12px]">Ig</span>
                        </div>
                    </div>
                </div>

                {/* Links Sections */}
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider mb-8 text-foreground/80">Explore</h3>
                    <ul className="space-y-5 text-base text-foreground/60 font-medium">
                        <li><Link href="/stories" className="hover:text-electric-purple transition-colors">Our Stories</Link></li>
                        <li><Link href="/series" className="hover:text-electric-purple transition-colors">Career Series</Link></li>
                        <li><Link href="/writers" className="hover:text-electric-purple transition-colors">Contributors</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider mb-8 text-foreground/80">Company</h3>
                    <ul className="space-y-5 text-base text-foreground/60 font-medium">
                        <li><Link href="/about" className="hover:text-electric-purple transition-colors">About Us</Link></li>
                        <li><Link href="/careers" className="hover:text-electric-purple transition-colors">Careers</Link></li>
                        <li><Link href="/contact" className="hover:text-electric-purple transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider mb-8 text-foreground/80">Legal</h3>
                    <ul className="space-y-5 text-base text-foreground/60 font-medium">
                        <li><Link href="/privacy" className="hover:text-electric-purple transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="hover:text-electric-purple transition-colors">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-electric-purple/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-foreground/40 font-medium">
                <p>© {currentYear} Moka Platform. All rights reserved.</p>
                <p>Made for the next generation.</p>
            </div>
        </footer>
    )
}
