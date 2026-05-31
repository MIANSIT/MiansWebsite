import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { caseStudies } from '@/app/case-studies/data'

export function generateStaticParams() {
  return caseStudies.map(cs => ({ slug: cs.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const cs = caseStudies.find(c => c.slug === params.slug)
  if (!cs) return {}
  return {
    title: `${cs.title} — Case Study`,
    description: cs.tagline,
    alternates: { canonical: `/case-studies/${cs.slug}` },
    openGraph: {
      title: `${cs.title} — Case Study | MIANS`,
      description: cs.tagline,
      url: `/case-studies/${cs.slug}`,
    },
    twitter: {
      title: `${cs.title} — Case Study | MIANS`,
      description: cs.tagline,
    },
  }
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string }
}) {
  const cs = caseStudies.find(c => c.slug === params.slug)
  if (!cs) notFound()

  const sections = [
    { num: '01', label: 'Overview', body: cs.overview },
    { num: '02', label: 'The Challenge', body: cs.challenge },
    { num: '03', label: 'Our Approach', body: cs.solution },
  ]

  return (
    <main style={{ background: 'var(--bg)' }}>
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-40 pb-16 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Back link */}
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 font-hind text-xs uppercase tracking-widest mb-10 hover:opacity-60 transition-opacity"
            style={{ color: 'var(--text-secondary)' }}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            All Case Studies
          </Link>

          {/* Category + Year */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className="font-hind text-xs uppercase tracking-widest px-3 py-1 border"
              style={{ color: 'var(--text-secondary)', borderColor: 'var(--border)' }}
            >
              {cs.category}
            </span>
            <span className="font-hind text-xs uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>
              {cs.year}
            </span>
          </div>

          <h1 className="font-poppins font-bold text-5xl lg:text-7xl text-[var(--text-primary)] leading-tight mb-6">
            {cs.title}
          </h1>
          <p className="font-hind text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-10">
            {cs.tagline}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {cs.tags.map(t => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>

          {/* Live site CTA */}
          <a
            href={cs.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm"
          >
            View Live Site
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── Hero image ── */}
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <div className="overflow-hidden" style={{ height: '480px' }}>
          <img
            src={cs.image}
            alt={cs.title}
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(15%) brightness(0.85)' }}
          />
        </div>
      </div>

      {/* ── Meta grid ── */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ background: 'var(--border)' }}
        >
          {[
            { label: 'Client', value: cs.client },
            { label: 'Category', value: cs.category },
            { label: 'Year', value: cs.year },
            { label: 'Services', value: cs.services.join(' · ') },
          ].map(item => (
            <div key={item.label} className="p-6" style={{ background: 'var(--bg-card)' }}>
              <p className="font-hind text-[10px] uppercase tracking-widest mb-2" style={{ color: 'var(--text-secondary)' }}>
                {item.label}
              </p>
              <p className="font-poppins font-medium text-sm leading-snug" style={{ color: 'var(--text-primary)' }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Written sections ── */}
      <div className="max-w-3xl mx-auto px-6 mb-24 space-y-20">
        {sections.map((s, i) => (
          <div key={s.num}>
            <p className="font-hind text-[10px] uppercase tracking-widest mb-4" style={{ color: 'var(--text-secondary)' }}>
              {s.num} — {s.label}
            </p>
            <p className="font-hind text-lg leading-relaxed" style={{ color: 'var(--text-primary)' }}>
              {s.body}
            </p>
            {i < sections.length - 1 && (
              <div className="mt-20" style={{ height: '1px', background: 'var(--border)' }} />
            )}
          </div>
        ))}

        {/* Divider before results */}
        <div style={{ height: '1px', background: 'var(--border)' }} />

        {/* Results */}
        <div>
          <p className="font-hind text-[10px] uppercase tracking-widest mb-8" style={{ color: 'var(--text-secondary)' }}>
            04 — Results & Impact
          </p>
          <ul className="space-y-6">
            {cs.results.map((r, i) => (
              <li key={i} className="flex items-start gap-5">
                <span
                  className="font-hind text-xs font-semibold mt-1 flex-shrink-0"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  0{i + 1}
                </span>
                <p className="font-hind text-base leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  {r}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div
          className="p-12 text-center border"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
        >
          <p className="font-hind text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--text-secondary)' }}>
            Ready to build?
          </p>
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-[var(--text-primary)] mb-8 leading-tight">
            Let's create something remarkable together.
          </h2>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-sm">
            Start a Project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
