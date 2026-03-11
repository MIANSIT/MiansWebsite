'use client'
import AnimatedSection from '@/components/AnimatedSection'

const timeline = [
  { year: '2020', event: 'MIANS founded — July 20th, 2020. Started with a vision to bridge business and digital.' },
  { year: '2021', event: 'First international clients onboarded — working with businesses in Belgium and the USA.' },
  { year: '2022', event: 'Completed brand identities for MIANS and PawfectBD — sharpening our design craft.' },
  { year: '2023', event: 'Managed corporate, community, and gaming events across Bangladesh.' },
  { year: '2024', event: 'Launched Shei Hoise — our first SaaS product. A store management platform built in-house.' },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[var(--bg)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* LEFT: Visual */}
          <AnimatedSection>
            <div className="relative">
              {/* Main image */}
              <div className="relative overflow-hidden border border-[var(--border)]" style={{ aspectRatio: '4/3' }}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&fit=crop"
                  alt="MIANS team collaborating"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(20%) brightness(0.7)' }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--bg) 0%, transparent 60%)' }} />
                {/* Corner brackets */}
                {[
                  { top: '12px', left: '12px', borderTop: '1px solid', borderLeft: '1px solid' },
                  { top: '12px', right: '12px', borderTop: '1px solid', borderRight: '1px solid' },
                  { bottom: '12px', left: '12px', borderBottom: '1px solid', borderLeft: '1px solid' },
                  { bottom: '12px', right: '12px', borderBottom: '1px solid', borderRight: '1px solid' },
                ].map((s, i) => (
                  <div key={i} className="absolute w-5 h-5 border-[var(--border-hover)]" style={s as React.CSSProperties} />
                ))}
                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-poppins font-bold text-[var(--text-primary)] text-xl mb-1">Bridging Innovation & Business</p>
                  <p className="font-hind text-[var(--gray)] text-sm">Est. July 20, 2020 · Bangladesh</p>
                </div>
              </div>

              {/* Secondary image — floating */}
              <div className="absolute -bottom-8 -right-6 w-44 lg:w-52 border border-[var(--border)] overflow-hidden shadow-2xl"
                style={{ animation: 'float 7s ease-in-out infinite' }}>
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&q=80&fit=crop"
                  alt="Digital work"
                  className="w-full h-32 object-cover"
                  style={{ filter: 'grayscale(30%) brightness(0.6)' }}
                />
                <div className="bg-[var(--bg-card)] px-3 py-2 border-t border-[var(--border)]">
                  <p className="font-poppins font-semibold text-[var(--text-primary)] text-xs">600+ Clients</p>
                  <p className="font-hind text-[var(--text-secondary)] text-[10px]">Worldwide trust</p>
                </div>
              </div>

              {/* Stat badge */}
              <div className="absolute -top-4 -left-4 bg-[var(--bg)] border border-[var(--border)] p-4 shadow-2xl">
                <div className="font-poppins font-bold text-[var(--text-primary)] text-2xl leading-none">1000+</div>
                <div className="font-hind text-[var(--text-secondary)] text-xs mt-0.5">Consultations</div>
              </div>
            </div>
          </AnimatedSection>

          {/* RIGHT: Content */}
          <AnimatedSection delay={150}>
            <div className="flex items-center gap-3 mb-4">
              <span className="section-line" />
              <span className="font-hind text-[var(--text-secondary)] text-sm tracking-widest uppercase">About MIANS</span>
            </div>
            <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-[var(--text-primary)] leading-tight mb-5">
              Bridging Innovation<br />and Business
            </h2>
            <p className="font-hind text-[var(--gray)] leading-relaxed mb-4">
              At MIANS, we&apos;re here to bring your ideas to life. Founded on{' '}
              <span className="text-[var(--text-primary)] font-medium">July 20, 2020</span>, our mission has always been to bridge business needs with smart & effective digital solutions.
            </p>
            <p className="font-hind text-[var(--text-secondary)] leading-relaxed mb-8">
              We&apos;re proud to create the <span className="text-[var(--gray)]">Reflection of Your Desires</span> — crafting visions into scalable digital assets, helping you achieve goals with precision and creativity. From startups to enterprises, we partner to build products that make real impact.
            </p>

            {/* Timeline — only this section was updated */}
            <div className="mb-8">
              <p className="font-hind text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-4">Our Journey</p>
              <div className="relative">
                <div className="absolute left-[2.75rem] top-0 bottom-0 w-px bg-[var(--text-primary)]/06" />
                <div className="space-y-0">
                  {timeline.map((item, i) => (
                    <div key={item.year} className="flex items-start gap-4 pb-5 last:pb-0">
                      <div className="flex-shrink-0 w-10 text-right">
                        <span className="font-poppins font-semibold text-[var(--text-secondary)] text-xs">{item.year}</span>
                      </div>
                      <div className="relative flex-shrink-0 mt-0.5">
                        <div
                          className="w-3 h-3 border rounded-full z-10 relative"
                          style={{
                            borderColor: i === timeline.length - 1 ? 'var(--text-primary)' : 'var(--text-muted)',
                            background: i === timeline.length - 1 ? 'var(--text-primary)' : 'var(--bg)',
                          }}
                        />
                      </div>
                      <p className={`font-hind text-sm leading-relaxed ${i === timeline.length - 1 ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                        {item.event}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Precision', desc: 'Every detail matters.', icon: '◎' },
                { label: 'Creativity', desc: 'Beyond the expected.', icon: '◈' },
                { label: 'Transparency', desc: 'Open at every stage.', icon: '◇' },
                { label: 'Impact', desc: 'Built to drive results.', icon: '◉' },
              ].map((v) => (
                <div key={v.label} className="border border-[var(--border)] p-4 hover:border-[var(--border-hover)] transition-colors group">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[var(--text-secondary)] text-sm group-hover:text-[var(--gray)] transition-colors">{v.icon}</span>
                    <p className="font-poppins font-semibold text-[var(--text-primary)] text-sm">{v.label}</p>
                  </div>
                  <p className="font-hind text-[var(--text-secondary)] text-xs">{v.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}