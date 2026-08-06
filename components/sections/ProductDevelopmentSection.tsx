'use client'
import AnimatedSection from '@/components/AnimatedSection'

const STACK = [
  {
    label: 'Frontend',
    sublabel: 'What your users touch',
    tools: ['Next.js', 'React', 'TypeScript'],
    note: 'Server-rendered by default, fast by default — so performance and SEO aren’t a separate line item.',
  },
  {
    label: 'Backend',
    sublabel: 'What runs your business logic',
    tools: ['NestJS', 'Node.js'],
    note: 'Structured, typed, testable code a team can maintain long after handover — not a solo script.',
  },
  {
    label: 'Data Layer',
    sublabel: 'Where your data lives',
    tools: ['PostgreSQL', 'MongoDB'],
    note: 'Relational where relationships matter, document store where flexibility matters.',
  },
  {
    label: 'Infrastructure',
    sublabel: 'How it ships and stays up',
    tools: ['Docker', 'CI/CD'],
    note: 'Every environment reproducible. Ship on every merge, roll back in seconds.',
  },
]

export default function ProductDevelopmentSection() {
  return (
    <section id="product-development" className="py-24 lg:py-32 border-t" style={{ background: 'var(--bg-subtle)', borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="section-line" />
            <span className="font-hind text-[var(--text-secondary)] text-sm tracking-widest uppercase">How We Build</span>
          </div>
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-[var(--text-primary)] leading-tight mb-5">
            Product Development,<br />
            <span className="text-[var(--text-secondary)]">Not Just Web Design</span>
          </h2>
          <p className="font-hind text-[var(--text-secondary)] leading-relaxed">
            Every product we ship starts with the same question: what does this need to look like at 10x the users, a year from now? That question shapes the architecture before a single screen gets designed.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: narrative */}
          <AnimatedSection delay={80}>
            <div className="space-y-6">
              <div>
                <p className="font-poppins font-semibold text-[var(--text-primary)] text-sm mb-2">Architecture first, screens second</p>
                <p className="font-hind text-[var(--gray)] leading-relaxed text-sm">
                  Before we build UI, we map how information moves through the system — what&apos;s read often, what&apos;s written often, what has to be consistent versus what can catch up later. That decision shapes everything downstream: which database fits, how the API is shaped, where the first bottleneck will show up.
                </p>
              </div>
              <div>
                <p className="font-poppins font-semibold text-[var(--text-primary)] text-sm mb-2">Why Next.js and NestJS</p>
                <p className="font-hind text-[var(--gray)] leading-relaxed text-sm">
                  Next.js gives the frontend server rendering, routing, and performance defaults we don&apos;t have to rebuild per project — so time goes into your product logic, not plumbing. NestJS brings the same discipline to the backend: a typed, modular structure that keeps a codebase readable as it grows past the first few features.
                </p>
              </div>
              <div>
                <p className="font-poppins font-semibold text-[var(--text-primary)] text-sm mb-2">Scaling and deployment</p>
                <p className="font-hind text-[var(--gray)] leading-relaxed text-sm">
                  Every project runs in Docker from day one, so &ldquo;it works on my machine&rdquo; isn&apos;t a conversation we have. CI/CD pipelines test and deploy on every merge — the distance between a code review and production is minutes, not a release calendar.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: stack spec panel */}
          <AnimatedSection delay={160}>
            <div className="border p-6 lg:p-8" style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}>
              <div className="flex items-center justify-between mb-6">
                <p className="font-poppins font-semibold text-[var(--text-primary)] text-sm">Our Default Stack</p>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--text-primary)] opacity-40" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--text-primary)]" />
                </span>
              </div>
              <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
                {STACK.map((row) => (
                  <div key={row.label} className="py-5 first:pt-0 last:pb-0">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="font-hind text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">{row.label}</span>
                      <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
                      <span className="font-hind text-[9px] text-[var(--text-muted)] opacity-60">{row.sublabel}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {row.tools.map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                    <p className="font-hind text-[var(--text-secondary)] text-xs leading-relaxed">{row.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
