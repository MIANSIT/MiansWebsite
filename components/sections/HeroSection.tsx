'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const SERVICES = ['Digital Products', 'Web Applications', 'UI/UX Design', 'IT Consulting', 'Brand Identity', 'E-Commerce']

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [serviceIndex, setServiceIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const charRef = useRef(0)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!mounted) return
    const target = SERVICES[serviceIndex]
    const type = () => {
      if (isTyping) {
        if (charRef.current < target.length) {
          charRef.current++
          setDisplayText(target.slice(0, charRef.current))
          timeoutRef.current = setTimeout(type, 85)
        } else {
          timeoutRef.current = setTimeout(() => setIsTyping(false), 2200)
        }
      } else {
        if (charRef.current > 0) {
          charRef.current--
          setDisplayText(target.slice(0, charRef.current))
          timeoutRef.current = setTimeout(type, 45)
        } else {
          setServiceIndex((i) => (i + 1) % SERVICES.length)
          setIsTyping(true)
        }
      }
    }
    timeoutRef.current = setTimeout(type, 120)
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [mounted, isTyping, serviceIndex])

  return (
    <section className="relative min-h-screen bg-[var(--bg)] overflow-hidden flex flex-col">

      {/* ── BG: giant ghost text ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
        <span className="font-poppins font-black leading-none tracking-tighter"
          style={{ fontSize: '28vw', color: 'transparent', WebkitTextStroke: '1px color-mix(in srgb, var(--text-primary) 4%, transparent)' }}>
          MIANS
        </span>
      </div>

      {/* ── BG: vertical rule lines ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-[18%] w-px h-full bg-gradient-to-b from-transparent via-[var(--border)] to-transparent" />
        <div className="absolute top-0 right-[18%] w-px h-full bg-gradient-to-b from-transparent via-[var(--border)] to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
        <div className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, var(--glow) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at bottom right, color-mix(in srgb, var(--stone-dec) 10%, transparent) 0%, transparent 70%)' }} />
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-6 pt-28 pb-10 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-8rem)]">

          {/* LEFT */}
          <div className="lg:col-span-7 flex flex-col justify-center py-10 lg:py-0">

            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 mb-8 w-fit border border-[var(--border)] px-3.5 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--text-primary)] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--text-primary)]" />
              </span>
              <span className="font-hind text-[10px] text-[var(--gray)] tracking-[0.22em] uppercase">Digital Agency · Est. 2020</span>
            </div>

            {/* Headline */}
            <div className="mb-7">
              <p className="font-poppins font-black text-[var(--text-primary)] leading-[1.0] mb-1"
                style={{ fontSize: 'clamp(2.6rem, 5.5vw, 5.2rem)' }}>
                We craft
              </p>
              <p className="font-poppins font-black text-[var(--text-secondary)] leading-[1.0] mb-3"
                style={{ fontSize: 'clamp(2.6rem, 5.5vw, 5.2rem)' }}>
                world&#8209;class
              </p>
              <div className="border border-[var(--border-strong)] px-4 py-2 inline-flex items-center gap-0 min-w-[2ch]"
                style={{ minHeight: 'clamp(3.2rem, 7vw, 6rem)' }}>
                <span className="font-poppins font-black text-[var(--text-primary)]"
                  style={{ fontSize: 'clamp(2rem, 4.5vw, 4.2rem)', lineHeight: 1 }}>
                  {displayText}
                </span>
                <span className="inline-block bg-[var(--text-primary)] ml-1 align-middle animate-pulse flex-shrink-0"
                  style={{ width: '3px', height: 'clamp(1.8rem, 4vw, 3.8rem)', verticalAlign: 'middle' }} />
              </div>
            </div>

            {/* Description */}
            <p className="font-hind text-[var(--text-secondary)] leading-relaxed mb-8 max-w-lg"
              style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.08rem)' }}>
              We don&apos;t just develop solutions — we craft experiences that reflect your visions. Creativity, technical expertise, and a deep understanding of your goals, blended into one.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2 group px-6 py-3.5 text-sm font-semibold">
                Begin Your Journey
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/#projects" className="btn-outline inline-flex items-center gap-2 px-6 py-3.5 text-sm">
                View Our Work
              </Link>
            </div>
          </div>

          {/* RIGHT — Rich visual panel */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-end pl-6">
            <div className="relative w-full max-w-[380px] xl:max-w-[420px]">

              {/* Main card — dashboard mockup */}
              <div className="relative bg-[var(--bg-card)] border border-[var(--border)] overflow-hidden">
                {/* Browser chrome bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] bg-[var(--bg-subtle)]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--text-secondary)]/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--text-secondary)]/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--text-secondary)]/50" />
                  </div>
                  <div className="flex-1 mx-3 bg-[var(--bg)] rounded-sm h-4 flex items-center px-2">
                    <span className="font-hind text-[var(--text-secondary)] text-[9px]">miansofficial.com</span>
                  </div>
                </div>

                {/* Mockup content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-[var(--border)]">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-[var(--text-primary)]" />
                      <div className="w-12 h-2 bg-[var(--text-primary)]/20 rounded-sm" />
                    </div>
                    <div className="flex gap-3">
                      {[16, 20, 14, 18].map((w, i) => (
                        <div key={i} style={{ width: w }} className="h-1.5 bg-[var(--text-primary)]/10 rounded-sm" />
                      ))}
                    </div>
                  </div>

                  <div className="mb-5">
                    <div className="w-3/4 h-4 bg-[var(--text-primary)]/25 rounded-sm mb-2" />
                    <div className="w-1/2 h-3 bg-[var(--text-secondary)]/40 rounded-sm mb-3" />
                    <div className="w-full h-2 bg-[var(--text-primary)]/06 rounded-sm mb-1.5" />
                    <div className="w-5/6 h-2 bg-[var(--text-primary)]/06 rounded-sm mb-4" />
                    <div className="flex gap-2">
                      <div className="w-24 h-7 bg-[var(--text-primary)]" />
                      <div className="w-20 h-7 border border-[var(--border-strong)]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {['UI/UX', 'Dev', 'Brand'].map((n) => (
                      <div key={n} className="border border-[var(--border)] p-2 text-center">
                        <div className="font-poppins font-bold text-[var(--text-primary)] text-xs mb-1">{n}</div>
                        <div className="w-full h-1.5 bg-[var(--text-secondary)]/30 rounded-sm" />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="border border-[var(--border)] p-2.5">
                        <div className="w-4 h-4 bg-[var(--text-secondary)]/40 mb-2" />
                        <div className="w-full h-1.5 bg-[var(--text-primary)]/15 rounded-sm mb-1.5" />
                        <div className="w-4/5 h-1.5 bg-[var(--text-primary)]/08 rounded-sm" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scan line effect */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, var(--grid-line) 2px, var(--grid-line) 4px)' }} />
              </div>

              {/* ── Floating badge cards ── */}

              {/* Card 1 — Shei Hoise (kept) */}
              <div className="absolute -right-12 top-[12%] bg-[var(--bg)] border border-[var(--border)] px-3.5 py-2.5 shadow-2xl z-10"
                style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '0s' }}>
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 bg-[var(--text-primary)] flex items-center justify-center flex-shrink-0">
                    <span className="font-poppins font-black text-[var(--bg)] text-[10px]">S</span>
                  </div>
                  <div>
                    <div className="font-poppins font-semibold text-[var(--text-primary)] text-xs">Shei Hoise</div>
                    <div className="font-hind text-[var(--text-secondary)] text-[10px]">Now live 🚀</div>
                  </div>
                </div>
              </div>

              {/* Card 2 — Est. 2020 / Founded */}
              <div className="absolute -left-14 top-[40%] bg-[var(--bg)] border border-[var(--border)] px-3.5 py-2.5 shadow-2xl z-10"
                style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '1s' }}>
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 bg-[var(--text-primary)]/08 border border-[var(--border)] flex items-center justify-center flex-shrink-0">
                    {/* Calendar icon */}
                    <svg className="w-3.5 h-3.5 text-[var(--text-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-poppins font-semibold text-[var(--text-primary)] text-xs">Est. July 2020</div>
                    <div className="font-hind text-[var(--text-secondary)] text-[10px]">Built to last</div>
                  </div>
                </div>
              </div>

              {/* Card 3 — 7-day free trial / product CTA */}
              <div className="absolute -left-10 bottom-[14%] bg-[var(--bg)] border border-[var(--border)] px-3.5 py-2.5 shadow-2xl z-10"
                style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '1.8s' }}>
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 bg-[var(--text-primary)]/08 border border-[var(--border)] flex items-center justify-center flex-shrink-0">
                    {/* Sparkle / star icon */}
                    <svg className="w-3.5 h-3.5 text-[var(--gray)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l1.5 4.5L11 9l-4.5 1.5L5 15l-1.5-4.5L-1 9l4.5-1.5L5 3zM19 11l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-poppins font-semibold text-[var(--text-primary)] text-xs">7-Day Free Trial</div>
                    <div className="font-hind text-[var(--text-secondary)] text-[10px]">No credit card needed</div>
                  </div>
                </div>
              </div>

              {/* Corner decorations */}
              {[
                { top: '-8px', left: '-8px', borderTop: '1px solid', borderLeft: '1px solid' },
                { top: '-8px', right: '-8px', borderTop: '1px solid', borderRight: '1px solid' },
                { bottom: '-8px', left: '-8px', borderBottom: '1px solid', borderLeft: '1px solid' },
                { bottom: '-8px', right: '-8px', borderBottom: '1px solid', borderRight: '1px solid' },
              ].map((style, i) => (
                <div key={i} className="absolute w-4 h-4 border-[var(--border-hover)]" style={style as React.CSSProperties} />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── MARQUEE STRIP ── */}
      <div className="relative z-10 border-t border-[var(--border)] py-3 overflow-hidden bg-[var(--bg)]/80">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-hind text-[var(--text-secondary)] text-xs tracking-widest uppercase px-5">
              Web Development &nbsp;·&nbsp; UI/UX Design &nbsp;·&nbsp; IT Consulting &nbsp;·&nbsp; Branding &nbsp;·&nbsp; E-Commerce &nbsp;·&nbsp; Lead Generation &nbsp;·&nbsp; Custom Apps &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}