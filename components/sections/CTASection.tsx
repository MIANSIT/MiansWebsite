'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

const TRUST = [
  { label: 'Est. July 2020',     d: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { label: 'Fast Turnaround',    d: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { label: '24hr Response',      d: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
  { label: 'Quality Guaranteed', d: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
]

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden border-t" style={{ background: '#090909', borderColor: '#1a1a1a' }}>
      {/* Background image — always dark */}
      <div className="absolute inset-0">
        <img
          src="/images/ctaSectionBg.png"
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(20%) brightness(0.55)' }}
        />
        {/* Hardcoded dark gradient — never affected by light mode */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #090909, transparent 30%, transparent 70%, #090909)' }} />
        <div className="absolute inset-0 grid-bg" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="section-line" style={{ backgroundColor: '#33334e' }} />
            <span className="font-hind text-sm tracking-widest uppercase" style={{ color: '#8a8a9e' }}>Ready to Start?</span>
            <span className="section-line" style={{ backgroundColor: '#33334e' }} />
          </div>

          <h2 className="font-poppins font-black text-4xl lg:text-6xl leading-tight mb-6" style={{ color: '#FAFEFF' }}>
            Let&apos;s Build<br />Something Great
          </h2>
          <p className="font-hind text-lg leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: '#C8C8D8' }}>
            Have a project in mind? Tell us about it — we respond within 24 hours and love a good challenge.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link 
              href="/contact" 
              className="px-8 py-4 text-sm font-semibold inline-flex items-center gap-2 group transition-all duration-300"
              style={{ 
                background: '#FAFEFF', 
                color: '#090909',
                border: '1px solid #FAFEFF'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#e5e5e5'
                e.currentTarget.style.borderColor = '#e5e5e5'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FAFEFF'
                e.currentTarget.style.borderColor = '#FAFEFF'
              }}
            >
              Start a Project
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a 
              href="https://www.sheihoise.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 text-sm inline-flex items-center gap-2 transition-all duration-300"
              style={{ 
                background: 'transparent', 
                color: '#FAFEFF',
                border: '1px solid #33334e'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FAFEFF'
                e.currentTarget.style.color = '#090909'
                e.currentTarget.style.borderColor = '#FAFEFF'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#FAFEFF'
                e.currentTarget.style.borderColor = '#33334e'
              }}
            >
              Try Shei Hoise Free
            </a>
          </div>

          {/* Trust bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TRUST.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:border-[#8a8a9e]" 
                  style={{ border: '1px solid #1e1e3a', color: '#8a8a9e' }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.d} />
                  </svg>
                </div>
                <span className="font-hind text-xs text-center" style={{ color: '#8a8a9e' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}