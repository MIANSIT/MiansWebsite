'use client'
import AnimatedSection from '@/components/AnimatedSection'

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-[var(--bg)] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, var(--border-strong), transparent)' }} />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <AnimatedSection className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="section-line" />
            <span className="font-hind text-[var(--text-secondary)] text-sm tracking-widest uppercase">Our Products</span>
          </div>
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-[var(--text-primary)] leading-tight">
            Built by MIANS.<br />
            <span className="text-[var(--text-secondary)]">Launched for the World.</span>
          </h2>
        </AnimatedSection>

        {/* Shei Hoise Card */}
        <AnimatedSection delay={100}>
          <div className="product-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
              {/* Left: content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-[var(--text-primary)]/06 border border-[var(--border)] px-3 py-1.5 mb-6 w-fit">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--text-primary)] opacity-60" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--text-primary)]" />
                  </span>
                  <span className="font-hind text-[var(--text-primary)] text-[10px] tracking-[0.2em] uppercase font-medium">Live — Our First Product</span>
                </div>

                <h3 className="font-poppins font-bold text-3xl lg:text-4xl text-[var(--text-primary)] mb-2">
                  Shei Hoise
                </h3>
                <p className="font-hind text-[var(--text-secondary)] text-base mb-4 italic">"Run Your Store Smarter"</p>
                <p className="font-hind text-[var(--gray)] leading-relaxed max-w-md mb-6">
                  A powerful store management dashboard for modern businesses. Manage products, track orders, control cash flow, and grow sales — no spreadsheets, no hassle.
                </p>

                <ul className="grid grid-cols-2 gap-2 mb-8">
                  {['Seamless Shopping Cart', 'Stock Management', 'Product Catalog', 'Order Tracking', 'Cash on Delivery', 'Customer Orders'].map((f) => (
                    <li key={f} className="flex items-center gap-2 font-hind text-sm text-[var(--gray)]">
                      <svg className="w-3.5 h-3.5 text-[var(--text-primary)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 mb-6">
                  <a href="https://www.sheihoise.com" target="_blank" rel="noopener noreferrer"
                    className="btn-primary px-6 py-3 text-sm inline-flex items-center gap-2 group">
                    Visit Shei Hoise
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a href="https://www.sheihoise.com/#request-demo" target="_blank" rel="noopener noreferrer"
                    className="btn-outline px-6 py-3 text-sm">Request Demo</a>
                </div>
                <div className="flex flex-wrap gap-4">
                  {['7-day free trial', 'No credit card', 'Cancel anytime'].map((t) => (
                    <span key={t} className="font-hind text-[var(--text-secondary)] text-xs flex items-center gap-1.5">
                      <svg className="w-3 h-3 text-[var(--text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: product visual */}
              <div className="relative overflow-hidden border-l border-[var(--border)] min-h-[320px] lg:min-h-0">
                {/* Background photo */}
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop"
                  alt="Shei Hoise Dashboard"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: 'grayscale(40%) brightness(0.35)' }}
                />

                {/* Dark overlay gradient */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, var(--bg)/60, transparent, var(--bg)/40)' }} />

                {/* Dashboard UI mockup floating */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="w-full max-w-xs bg-[var(--bg)]/90 border border-[var(--border)] shadow-2xl"
                    style={{ animation: 'float 5s ease-in-out infinite' }}>
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)]">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-[var(--text-primary)] flex items-center justify-center">
                          <span className="font-poppins font-black text-[var(--bg)] text-[8px]">S</span>
                        </div>
                        <span className="font-poppins text-[var(--text-primary)] text-xs font-semibold">Shei Hoise</span>
                      </div>
                      <span className="font-hind text-[var(--text-secondary)] text-[9px] border border-[var(--border)] px-1.5 py-0.5">Beta</span>
                    </div>
                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-0 border-b border-[var(--border)]">
                      {[['Orders','24'],['Revenue','৳8.2k'],['Stock','143']].map(([label, val]) => (
                        <div key={label} className="p-3 border-r last:border-0 border-[var(--border)] text-center">
                          <div className="font-poppins font-bold text-[var(--text-primary)] text-sm">{val}</div>
                          <div className="font-hind text-[var(--text-secondary)] text-[9px]">{label}</div>
                        </div>
                      ))}
                    </div>
                    {/* Chart area */}
                    <div className="p-4">
                      <div className="flex items-end gap-1.5 h-14 mb-3">
                        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                          <div key={i} className="flex-1 bg-[var(--text-primary)]/15 hover:bg-[var(--text-primary)]/25 transition-colors"
                            style={{ height: `${h}%` }} />
                        ))}
                      </div>
                      <div className="space-y-2">
                        {[['Product A', '68%'], ['Product B', '42%']].map(([name, pct]) => (
                          <div key={name}>
                            <div className="flex justify-between mb-0.5">
                              <span className="font-hind text-[var(--text-secondary)] text-[9px]">{name}</span>
                              <span className="font-hind text-[var(--gray)] text-[9px]">{pct}</span>
                            </div>
                            <div className="h-1 bg-[var(--text-primary)]/08 w-full">
                              <div className="h-full bg-[var(--text-primary)]/40" style={{ width: pct }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating metric badge */}
                <div className="absolute top-6 right-6 bg-[var(--bg)]/85 border border-[var(--border)] px-3 py-2"
                  style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '1s' }}>
                  <div className="font-poppins font-bold text-[var(--text-primary)] text-lg leading-none">7-Day</div>
                  <div className="font-hind text-[var(--text-secondary)] text-[9px]">Free Trial</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* More coming */}
        <AnimatedSection delay={200} className="mt-5">
          <div className="border border-dashed border-[var(--border)] p-8 text-center">
            <p className="font-hind text-[var(--text-secondary)] text-sm mb-1 tracking-widest uppercase">More coming soon</p>
            <p className="font-poppins font-medium text-[var(--gray)] text-lg">The MIANS product suite is growing.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
