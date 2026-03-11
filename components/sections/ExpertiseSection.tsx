'use client'

import AnimatedSection from '@/components/AnimatedSection'

const EXPERTISE = [
  {
    num: '01',
    title: 'Custom Web Development',
    desc: 'Next.js, React, Node.js — high-performance applications built for scale.',
    iconD: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
  {
    num: '02',
    title: 'Digital Engagement Strategy',
    desc: 'Data-driven campaigns that connect brands with the right audiences.',
    iconD: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  },
  {
    num: '03',
    title: 'Branding & Identity',
    desc: 'Logos, color systems, typography — your visual identity, defined.',
    iconD: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
  },
  {
    num: '04',
    title: 'E-Commerce Solutions',
    desc: 'End-to-end stores with payments, inventory, and order management.',
    iconD: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
  },
  {
    num: '05',
    title: 'Lead Generation',
    desc: 'Funnels, landing pages, and SEO built to turn visitors into customers.',
    iconD: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    num: '06',
    title: 'UI/UX Design Systems',
    desc: 'Component libraries and design tokens that keep your product consistent at scale.',
    iconD: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
  },
]

// Grouped by what they help clients achieve — not by category
const TECH_GROUPS = [
  {
    label: 'Your Website & App',
    sublabel: 'What we build your product with',
    tools: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Node.js'],
  },
  {
    label: 'Your Data & Backend',
    sublabel: 'How we store and manage your data',
    tools: ['PostgreSQL', 'MongoDB', 'Supabase', 'Firebase', 'SQL'],
  },
  {
    label: 'Your Design',
    sublabel: 'How we shape your brand and UX',
    tools: ['Figma', 'WordPress'],
  },
]

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 lg:py-32 border-t" style={{ background: 'var(--bg-subtle)', borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="section-line" />
              <span className="font-hind text-[var(--text-secondary)] text-sm tracking-widest uppercase">Our Expertise</span>
            </div>
            <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-[var(--text-primary)] leading-tight">
              Built on Deep<br />Expertise
            </h2>
          </div>
          <p className="font-hind text-[var(--text-secondary)] max-w-md leading-relaxed">
            Six areas where we go beyond surface-level — delivering real, measurable outcomes for every client.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: expertise list */}
          <div className="divide-y lg:border-r" style={{ borderColor: 'var(--border)' }}>
            {EXPERTISE.map((item, i) => (
              <AnimatedSection key={item.num} delay={i * 60}>
                <div className="py-6 lg:pr-12 flex items-start gap-5 group cursor-default">
                  <div className="flex-shrink-0 w-10 h-10 border flex items-center justify-center"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.iconD} />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="font-poppins font-semibold text-[var(--text-primary)] text-base">{item.title}</h3>
                      <span className="font-poppins font-light text-[var(--text-secondary)] text-sm opacity-40 ml-3 flex-shrink-0">{item.num}</span>
                    </div>
                    <p className="font-hind text-[var(--text-secondary)] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Right: photo + powered by */}
          <div className="hidden lg:block">
            <AnimatedSection delay={200}>

              {/* Team photo */}
              <div className="relative mb-10" style={{ height: '300px' }}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=75"
                  alt="MIANS team at work"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(30%) brightness(0.5)' }}
                />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, var(--bg-subtle) 0%, color-mix(in srgb, var(--bg-subtle) 30%, transparent) 50%, transparent 100%)' }} />
                <div className="absolute top-4 right-4 border px-3 py-1.5"
                  style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  <span className="font-hind text-[var(--text-primary)] text-xs font-semibold">Next.js</span>
                </div>
                <div className="absolute bottom-8 left-4 border px-3 py-1.5"
                  style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  <span className="font-hind text-[var(--text-primary)] text-xs font-semibold">Figma</span>
                </div>
              </div>

              {/* Powered By — client-friendly grouping */}
              <div className="border-t pt-8" style={{ borderColor: 'var(--border)' }}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="font-poppins font-semibold text-[var(--text-primary)] text-sm">Powered By</p>
                    <p className="font-hind text-[var(--text-muted)] text-xs mt-0.5">
                      Industry-standard tools, chosen for performance &amp; reliability
                    </p>
                  </div>
                  {/* subtle pulse dot */}
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--text-primary)] opacity-40" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--text-primary)]" />
                  </span>
                </div>

                <div className="space-y-5">
                  {TECH_GROUPS.map((group) => (
                    <div key={group.label}>
                      {/* Group header */}
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="font-hind text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
                          {group.label}
                        </span>
                        <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
                        <span className="font-hind text-[9px] text-[var(--text-muted)] opacity-60">
                          {group.sublabel}
                        </span>
                      </div>
                      {/* Tool tags */}
                      <div className="flex flex-wrap gap-2">
                        {group.tools.map((t) => (
                          <span
                            key={t}
                            className="font-hind text-xs px-3 py-1.5 border"
                            style={{
                              borderColor: 'var(--border)',
                              color: 'var(--text-secondary)',
                              background: 'var(--bg-card)',
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  )
}