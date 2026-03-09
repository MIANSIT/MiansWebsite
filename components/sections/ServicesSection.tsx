'use client'

import AnimatedSection from '@/components/AnimatedSection'

const SERVICES = [
  {
    num: '01',
    title: 'IT Consulting',
    desc: 'Strategic technology guidance tailored to your business goals. We audit, plan, and roadmap your digital transformation.',
    iconD: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    svgD: 'M12 15.5A3.5 3.5 0 018.5 12 3.5 3.5 0 0112 8.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5m7.43-2.92c.04-.3.07-.62.07-.93s-.03-.63-.07-.93l2-1.57c.18-.14.23-.41.12-.61l-1.9-3.28c-.12-.21-.37-.29-.59-.21l-2.35.94c-.5-.38-1.03-.7-1.62-.94l-.36-2.5c-.04-.24-.24-.41-.5-.41h-3.8c-.24 0-.44.17-.5.41l-.35 2.5c-.59.24-1.13.57-1.62.94l-2.35-.94c-.22-.08-.47 0-.59.21L2.74 8.87c-.12.21-.08.47.12.61l2 1.57c-.04.3-.07.63-.07.93s.03.63.07.93l-2 1.57c-.18.14-.23.41-.12.61l1.9 3.28c.12.21.37.29.59.21l2.35-.94c.5.38 1.03.7 1.62.94l.35 2.5c.06.24.26.41.5.41h3.8c.24 0 .45-.17.5-.41l.35-2.5c.59-.24 1.13-.56 1.62-.94l2.35.94c.22.08.47 0 .59-.21l1.9-3.28c.12-.21.07-.47-.12-.61l-2-1.57z',
  },
  {
    num: '02',
    title: 'Wireframing',
    desc: 'From concept to clickable prototype. We translate ideas into structured layouts that stakeholders can validate before a single line of code is written.',
    iconD: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
    svgD: 'M3 3h18v4H3zm0 6h8v4H3zm0 6h8v3H3zm10-6h8v9h-8z',
  },
  {
    num: '03',
    title: 'UI/UX Design',
    desc: 'Pixel-perfect interfaces grounded in user research. We create design systems that are intuitive, accessible, and unmistakably yours.',
    iconD: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    svgD: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z',
  },
  {
    num: '04',
    title: 'Development',
    desc: 'Full-stack development from landing pages to complex web applications. Clean code, fast performance, built to scale.',
    iconD: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    svgD: 'M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3',
  },
  {
    num: '05',
    title: 'Testing & QA',
    desc: 'Rigorous quality assurance across devices and browsers. We test, fix, and verify so your users only ever see the best version.',
    iconD: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    svgD: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    num: '06',
    title: 'Deployment',
    desc: 'CI/CD pipelines, cloud hosting, domain setup, and ongoing support. We take your product live and keep it running smoothly.',
    iconD: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12',
    svgD: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 border-t" style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="section-line" />
              <span className="font-hind text-[var(--text-secondary)] text-sm tracking-widest uppercase">Our Services</span>
            </div>
            <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-[var(--text-primary)] leading-tight">
              What We<br />Deliver
            </h2>
          </div>
          <p className="font-hind text-[var(--text-secondary)] max-w-md leading-relaxed">
            End-to-end digital services — from strategy through to launch — built around your unique goals and vision.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--border)' }}>
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.num} delay={i * 60}>
              <div className="service-card p-8 h-full flex flex-col group">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 flex items-center justify-center" style={{ color: 'var(--text-primary)', opacity: 0.5 }}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.iconD} />
                    </svg>
                  </div>
                  <span className="font-poppins font-light text-4xl leading-none select-none" style={{ color: 'var(--text-secondary)', opacity: 0.3 }}>
                    {service.num}
                  </span>
                </div>

                {/* inline SVG illustration */}
                <div className="w-full mb-5" style={{ height: '80px', color: 'var(--text-primary)' }}>
                  <svg viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-full h-full opacity-20">
                    <path d={service.svgD} />
                  </svg>
                </div>

                <h3 className="font-poppins font-semibold text-[var(--text-primary)] text-lg mb-3">{service.title}</h3>
                <p className="font-hind text-[var(--text-secondary)] text-sm leading-relaxed flex-1">{service.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
