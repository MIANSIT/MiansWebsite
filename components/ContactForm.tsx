'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'

const services = ['Web Development', 'UI/UX Design', 'Branding', 'IT Consulting', 'E-Commerce', 'Lead Generation', 'Other']

export default function ContactForm() {
  const [selected, setSelected] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const toggleService = (s: string) => setSelected((p) => p.includes(s) ? p.filter(x => x !== s) : [...p, s])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className="py-16 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

          {/* Info panel */}
          <AnimatedSection className="lg:col-span-2">
            <div className="sticky top-28 space-y-6">
              <h2 className="font-poppins font-semibold text-xl" style={{ color: 'var(--text-primary)' }}>Contact Info</h2>
              <div className="space-y-3">
                {/* Phone Numbers Section */}
                <div className="border p-4 transition-colors" style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}>
                  <div className="flex items-start gap-4">
                    <div style={{ color: 'var(--gray)' }} className="mt-0.5 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-hind text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>Phone Numbers</p>
                      <div className="space-y-2">
                        <div>
                          <a href="tel:+8801833228622" className="font-hind text-sm hover-underline block" style={{ color: 'var(--text-secondary)' }}>
                            +880 1833 228 622
                          </a>
                          <span className="font-hind text-[10px]" style={{ color: 'var(--text-muted)' }}>BD - Support</span>
                        </div>
                        <div>
                          <a href="tel:+8801953446666" className="font-hind text-sm hover-underline block" style={{ color: 'var(--text-secondary)' }}>
                            +880 1953 446 666
                          </a>
                          <span className="font-hind text-[10px]" style={{ color: 'var(--text-muted)' }}>BD - Technical Team</span>
                        </div>
                        <div>
                          <a href="tel:+8801761867763" className="font-hind text-sm hover-underline block" style={{ color: 'var(--text-secondary)' }}>
                            +880 1761 867 763
                          </a>
                          <span className="font-hind text-[10px]" style={{ color: 'var(--text-muted)' }}>BD - International</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {[
                  { 
                    label: 'Email', 
                    value: 'miansofficial@gmail.com', 
                    href: 'mailto:miansofficial@gmail.com?subject=Project%20Inquiry%20from%20Website',
                    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
                  { label: 'Facebook', value: 'mians.official', href: 'https://www.facebook.com/mians.official',
                    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                  { label: 'LinkedIn', value: 'mians-official', href: 'https://www.linkedin.com/company/mians-official/',
                    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                  { label: 'Twitter / X', value: '@mians_official', href: 'https://x.com/mians_official',
                    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 border transition-colors" style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}>
                    <div style={{ color: 'var(--gray)' }} className="mt-0.5 flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-hind text-xs uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-muted)' }}>{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          target={item.label === 'Email' ? undefined : '_blank'}
                          rel={item.label === 'Email' ? undefined : 'noopener noreferrer'}
                          className="font-hind text-sm hover-underline" 
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-hind text-sm" style={{ color: 'var(--text-secondary)' }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border p-5" style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: 'var(--text-primary)' }} />
                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--text-primary)' }} />
                  </span>
                  <span className="font-poppins text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Responds within 24h</span>
                </div>
                <p className="font-hind text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  We review every message carefully. Expect a thoughtful response — not a template.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection className="lg:col-span-3" delay={100}>
            {submitted ? (
              <div className="border p-12 text-center" style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}>
                <div className="w-12 h-12 border flex items-center justify-center mx-auto mb-5" style={{ borderColor: 'var(--border-hover)' }}>
                  <svg className="w-6 h-6" style={{ color: 'var(--text-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-2" style={{ color: 'var(--text-primary)' }}>Message Received</h3>
                <p className="font-hind" style={{ color: 'var(--text-secondary)' }}>Thank you for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-hind text-xs uppercase tracking-wider block mb-2" style={{ color: 'var(--text-muted)' }}>Full Name *</label>
                    <input required type="text" placeholder="Your full name" className="form-input w-full px-4 py-3 text-sm" />
                  </div>
                  <div>
                    <label className="font-hind text-xs uppercase tracking-wider block mb-2" style={{ color: 'var(--text-muted)' }}>Email Address *</label>
                    <input required type="email" placeholder="your@email.com" className="form-input w-full px-4 py-3 text-sm" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-hind text-xs uppercase tracking-wider block mb-2" style={{ color: 'var(--text-muted)' }}>Phone (optional)</label>
                    <input type="tel" placeholder="+1 234 567 890" className="form-input w-full px-4 py-3 text-sm" />
                  </div>
                  <div>
                    <label className="font-hind text-xs uppercase tracking-wider block mb-2" style={{ color: 'var(--text-muted)' }}>Company (optional)</label>
                    <input type="text" placeholder="Your company" className="form-input w-full px-4 py-3 text-sm" />
                  </div>
                </div>

                <div>
                  <label className="font-hind text-xs uppercase tracking-wider block mb-3" style={{ color: 'var(--text-muted)' }}>Services Interested In</label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button type="button" key={s} onClick={() => toggleService(s)}
                        className="font-hind text-xs px-3.5 py-2 border transition-all duration-200 uppercase tracking-wider"
                        style={selected.includes(s)
                          ? { background: 'var(--btn-bg)', color: 'var(--btn-text)', borderColor: 'var(--btn-bg)' }
                          : { background: 'transparent', color: 'var(--text-secondary)', borderColor: 'var(--border)' }}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-hind text-xs uppercase tracking-wider block mb-2" style={{ color: 'var(--text-muted)' }}>Budget Range</label>
                  <select className="form-input w-full px-4 py-3 text-sm appearance-none cursor-pointer">
                    <option value="">Select a range</option>
                    <option>Less than $1,000</option>
                    <option>$1,000 — $5,000</option>
                    <option>$5,000 — $15,000</option>
                    <option>$15,000 — $50,000</option>
                    <option>$50,000+</option>
                  </select>
                </div>

                <div>
                  <label className="font-hind text-xs uppercase tracking-wider block mb-2" style={{ color: 'var(--text-muted)' }}>Your Message *</label>
                  <textarea required rows={5} placeholder="Tell us about your project, goals, and timeline..."
                    className="form-input w-full px-4 py-3 text-sm resize-none" />
                </div>

                <button type="submit" disabled={loading}
                  className="btn-primary w-full py-4 text-sm inline-flex items-center justify-center gap-2 group disabled:opacity-60">
                  {loading ? (
                    <><div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin opacity-60" />Sending...</>
                  ) : (
                    <>Send Message
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}