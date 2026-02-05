'use client'

import { useState } from 'react'
import Image from 'next/image'
import logo from '../../public/logo/logo.png'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-snow-pink backdrop-blur-md border-b border-electric-purple/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                <Link href="/" className="transition-transform hover:scale-105 active:scale-95">
                    <Image
                        src={logo}
                        alt="Moka Logo"
                        width={150}
                        height={80}
                        priority
                        className="h-auto w-auto"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    <ul className="flex gap-10 text-base font-semibold text-foreground/80">
                        <li><Link href="/" className="hover:text-electric-purple transition-colors">Stories</Link></li>
                        <li><Link href="/series" className="hover:text-electric-purple transition-colors">Series</Link></li>
                        <li><Link href="/about" className="hover:text-electric-purple transition-colors">About</Link></li>
                    </ul>

                    <Link href="/contact" className="bg-electric-purple text-white px-8 py-3 rounded-xl text-base font-bold hover:bg-electric-purple/90 transition-all active:scale-95 glow-purple">
                        Join Now
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-electric-purple p-2 hover:bg-electric-purple/5 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 top-20 bg-snow-pink z-40 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
                    <nav className="p-8 space-y-8">
                        <ul className="space-y-6 text-xl font-bold text-foreground">
                            <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Stories</Link></li>
                            <li><Link href="/series" onClick={() => setIsMenuOpen(false)}>Series</Link></li>
                            <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                        </ul>
                        <Link
                            href="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="block w-full text-center bg-electric-purple text-white py-4 rounded-xl font-bold glow-purple"
                        >
                            Join Now
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}
