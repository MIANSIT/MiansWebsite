import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { caseStudies } from '@/app/case-studies/data'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Deep dives into real client projects — how MIANS approaches problems, builds solutions, and delivers measurable impact.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'Case Studies | MIANS',
    description: 'Deep dives into real client projects — how MIANS approaches problems, builds solutions, and delivers measurable impact.',
    url: '/case-studies',
  },
  twitter: {
    title: 'Case Studies | MIANS',
    description: 'Deep dives into real client projects — how MIANS approaches problems, builds solutions, and delivers measurable impact.',
  },
}

export default function CaseStudiesPage() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <Navbar />

      {/* ── Page hero ── */}
      <section className="pt-40 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="section-line" />
            <span className="font-hind text-[var(--text-secondary)] text-sm tracking-widest uppercase">Case Studies</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h1 className="font-poppins font-bold text-5xl lg:text-6xl text-[var(--text-primary)] leading-tight">
              Every project,<br />
              <span className="text-[var(--text-secondary)]">a story worth telling</span>
            </h1>
            <p className="font-hind text-[var(--text-secondary)] max-w-md leading-relaxed lg:text-right">
              We don't just build — we solve. Here's how we approach real problems for real clients, from brief to launch.
            </p>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div style={{ height: '1px', background: 'var(--border)' }} />
      </div>

      {/* ── 3-column grid ── */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group block border overflow-hidden transition-all duration-300 hover:border-[var(--border-hover)]"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: '220px' }}>
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'grayscale(20%) brightness(0.8)' }}
                  />
                  {/* Category */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1"
                    style={{ background: 'color-mix(in srgb, var(--bg) 85%, transparent)', border: '1px solid var(--border)' }}
                  >
                    <span className="font-hind text-[10px] uppercase tracking-widest" style={{ color: 'var(--gray)' }}>{cs.category}</span>
                  </div>
                  {/* Year */}
                  <div
                    className="absolute top-4 right-4 px-3 py-1"
                    style={{ background: 'color-mix(in srgb, var(--bg) 85%, transparent)', border: '1px solid var(--border)' }}
                  >
                    <span className="font-hind text-[10px] uppercase tracking-widest" style={{ color: 'var(--gray)' }}>{cs.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Client label */}
                  <p className="font-hind text-[10px] uppercase tracking-widest mb-2" style={{ color: 'var(--text-secondary)' }}>
                    {cs.client}
                  </p>
                  <h2 className="font-poppins font-semibold text-lg text-[var(--text-primary)] mb-2 leading-snug">
                    {cs.title}
                  </h2>
                  <p className="font-hind text-sm text-[var(--text-secondary)] leading-relaxed mb-5 line-clamp-3">
                    {cs.tagline}
                  </p>

                  {/* Services */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cs.services.slice(0, 3).map(s => (
                      <span key={s} className="tech-tag">{s}</span>
                    ))}
                    {cs.services.length > 3 && (
                      <span className="tech-tag">+{cs.services.length - 3}</span>
                    )}
                  </div>

                  {/* CTA */}
                  <div
                    className="flex items-center gap-2 font-hind text-xs uppercase tracking-widest transition-colors duration-200"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span className="group-hover:text-[var(--text-primary)] transition-colors duration-200">Read Case Study</span>
                    <svg
                      className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      style={{ color: 'inherit' }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="p-12 text-center border"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
          >
            <p className="font-hind text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--text-secondary)' }}>
              Want results like these?
            </p>
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-[var(--text-primary)] mb-8 leading-tight">
              Let's build your success story.
            </h2>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-sm">
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
