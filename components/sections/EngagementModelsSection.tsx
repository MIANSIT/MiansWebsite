'use client'
import AnimatedSection from '@/components/AnimatedSection'

const MODELS = [
  {
    num: '01',
    title: 'Fixed-Scope MVP Build',
    desc: 'A defined product, a defined timeline, a fixed price. We scope the build together, then execute against it — no scope creep, no surprises.',
    bestFor: 'Founders validating a new idea who need to launch fast.',
  },
  {
    num: '02',
    title: 'Dedicated Team / Retainer',
    desc: 'An embedded team that works inside your roadmap on a monthly retainer. We plug into your process — sprints, standups, your tools — as an extension of your team.',
    bestFor: 'Teams that need sustained development capacity without hiring in-house.',
  },
  {
    num: '03',
    title: 'Ongoing Product Partner',
    desc: 'We stay on after launch — fixing, scaling, and shipping new features as your product and its users grow. Long-term technical ownership, not a one-off handoff.',
    bestFor: 'Live products that need to keep evolving.',
  },
]

export default function EngagementModelsSection() {
  return (
    <section id="engagement" className="py-24 lg:py-32 border-t" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="section-line" />
              <span className="font-hind text-[var(--text-secondary)] text-sm tracking-widest uppercase">How We Work</span>
            </div>
            <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-[var(--text-primary)] leading-tight">
              Ways to Work<br />With Us
            </h2>
          </div>
          <p className="font-hind text-[var(--text-secondary)] max-w-md leading-relaxed">
            Every product needs something different at different stages. Pick the model that fits where you are.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: 'var(--border)' }}>
          {MODELS.map((model, i) => (
            <AnimatedSection key={model.num} delay={i * 80}>
              <div className="service-card p-8 h-full flex flex-col">
                <span className="font-poppins font-light text-4xl leading-none select-none mb-6" style={{ color: 'var(--text-secondary)', opacity: 0.3 }}>
                  {model.num}
                </span>
                <h3 className="font-poppins font-semibold text-[var(--text-primary)] text-lg mb-3">{model.title}</h3>
                <p className="font-hind text-[var(--text-secondary)] text-sm leading-relaxed mb-5 flex-1">{model.desc}</p>
                <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <p className="font-hind text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-1">Best For</p>
                  <p className="font-hind text-[var(--gray)] text-xs leading-relaxed">{model.bestFor}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
