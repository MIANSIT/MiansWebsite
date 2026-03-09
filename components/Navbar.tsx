'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: '01 Home',     href: '/' },
  { label: '02 About',    href: '/#about' },
  { label: '03 Services', href: '/#services' },
  { label: '04 Projects', href: '/#projects' },
  { label: '05 Products', href: '/#products' },
  { label: '06 Contact',  href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 nav-blur transition-all duration-500 ${scrolled ? 'py-3 border-b' : 'py-5'}`}
      style={{
        background: scrolled ? 'color-mix(in srgb, var(--bg) 85%, transparent)' : 'transparent',
        borderColor: 'var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="relative w-8 h-8 flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
            style={{ background: 'var(--text-primary)' }}>
            <span className="font-poppins font-black text-xs" style={{ color: 'var(--bg)' }}>M</span>
          </div>
          <span className="font-poppins font-semibold tracking-widest text-sm" style={{ color: 'var(--text-primary)' }}>MIANS</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="font-hind text-sm link-hover hover-underline">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/contact" className="hidden lg:inline-flex btn-primary px-5 py-2.5 text-sm">
            Start a Project
          </Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-1"
            style={{ color: 'var(--text-primary)' }} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col px-6 pb-6 pt-4 border-t"
          style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
              className="font-hind py-3 border-b text-sm link-hover"
              style={{ borderColor: 'var(--border)' }}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}
            className="btn-primary mt-5 px-6 py-3 text-sm text-center">
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  )
}
