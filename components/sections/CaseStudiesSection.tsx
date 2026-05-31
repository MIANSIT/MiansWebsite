'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { caseStudies } from '@/app/case-studies/data'

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 lg:py-32" style={{ background: 'var(--bg-card)' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <AnimatedSection className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="section-line" />
            <span className="font-hind text-[var(--text-secondary)] text-sm tracking-widest uppercase">Case Studies</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-[var(--text-primary)] leading-tight">
              Deep dives into<br />
              <span className="text-[var(--text-secondary)]">the work we do</span>
            </h2>
            <p className="font-hind text-[var(--text-secondary)] max-w-sm leading-relaxed">
              Behind every project is a story — a problem solved, a challenge overcome, and a product that delivers real impact.
            </p>
          </div>
        </AnimatedSection>

        {/* 4-in-a-row grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {caseStudies.map((cs, i) => (
            <AnimatedSection key={cs.slug} delay={i * 70}>
              <Link
                href={`/case-studies/${cs.slug}`}
                className="group block border overflow-hidden transition-all duration-300 hover:border-[var(--border-hover)]"
                style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: '180px' }}>
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'grayscale(20%) brightness(0.8)' }}
                  />
                  {/* Category badge */}
                  <div
                    className="absolute top-3 left-3 px-2.5 py-1"
                    style={{ background: 'color-mix(in srgb, var(--bg) 85%, transparent)', border: '1px solid var(--border)' }}
                  >
                    <span className="font-hind text-[9px] uppercase tracking-widest" style={{ color: 'var(--gray)' }}>{cs.category}</span>
                  </div>
                  {/* Year badge */}
                  <div
                    className="absolute top-3 right-3 px-2.5 py-1"
                    style={{ background: 'color-mix(in srgb, var(--bg) 85%, transparent)', border: '1px solid var(--border)' }}
                  >
                    <span className="font-hind text-[9px] uppercase tracking-widest" style={{ color: 'var(--gray)' }}>{cs.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-poppins font-semibold text-base text-[var(--text-primary)] mb-1.5 leading-snug">{cs.title}</h3>
                  <p className="font-hind text-xs text-[var(--text-secondary)] leading-relaxed mb-4 line-clamp-2">{cs.tagline}</p>

                  {/* CTA arrow */}
                  <div className="flex items-center gap-1.5 font-hind text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>
                    <span className="group-hover:text-[var(--text-primary)] transition-colors duration-200">Read Study</span>
                    <svg
                      className="w-2.5 h-2.5 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      style={{ color: 'inherit' }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* View All button */}
        <AnimatedSection delay={320} className="flex justify-center">
          <Link
            href="/case-studies"
            className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm"
          >
            View All Case Studies
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </AnimatedSection>

      </div>
    </section>
  )
}
