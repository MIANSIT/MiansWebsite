'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

const TRUST = [
  { label: 'Trusted by 600+', d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
  { label: 'Fast Turnaround',  d: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { label: '24hr Response',    d: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
  { label: 'Quality Guaranteed', d: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
]

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden border-t" style={{ borderColor: 'var(--border)' }}>
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=60"
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(100%) brightness(0.12)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--bg), transparent, var(--bg))' }} />
        <div className="absolute inset-0 grid-bg" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="section-line" />
            <span className="font-hind text-[var(--text-secondary)] text-sm tracking-widest uppercase">Ready to Start?</span>
            <span className="section-line" />
          </div>

          <h2 className="font-poppins font-black text-4xl lg:text-6xl text-[var(--text-primary)] leading-tight mb-6">
            Let&apos;s Build<br />Something Great
          </h2>
          <p className="font-hind text-[var(--text-secondary)] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Have a project in mind? Tell us about it — we respond within 24 hours and love a good challenge.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link href="/contact" className="btn-primary px-8 py-4 text-sm font-semibold inline-flex items-center gap-2 group">
              Start a Project
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href="https://www.sheihoise.com" target="_blank" rel="noopener noreferrer"
              className="btn-outline px-8 py-4 text-sm inline-flex items-center gap-2">
              Try Shei Hoise Free
            </a>
          </div>

          {/* Trust bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TRUST.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 border flex items-center justify-center"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.d} />
                  </svg>
                </div>
                <span className="font-hind text-[var(--text-secondary)] text-xs text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
