'use client'
import AnimatedSection from '@/components/AnimatedSection'

const testimonials = [
  { quote: 'The team truly listened and brought my vision to life. The communication and dedication were top-notch.', name: 'Albert', role: 'Business Owner' },
  { quote: 'I was impressed with how smooth and professional the entire process was. Highly recommend them!', name: 'Samantha Johnston', role: 'Startup Founder' },
  { quote: 'From day one, they made us feel like a priority. The results were incredible.', name: 'Valerie Ann Taylor', role: 'Non-profit Director' },
  { quote: "They didn't just deliver a project, they delivered confidence. I'd definitely work with them again.", name: 'Leena Maladhari', role: 'E-commerce Entrepreneur' },
  { quote: 'They exceeded my expectations. Everything was done on time, and the results speak for themselves.', name: 'Neal Mehta', role: 'Product Manager' },
  { quote: 'I loved the attention to detail and the level of creativity they brought to my project.', name: 'Sayed Mridul Shanto', role: 'Creative Director' },
  { quote: 'Working with them was a breeze. They understood my needs and delivered with precision.', name: 'Khimily', role: 'Brand Manager' },
  { quote: 'We saw real results within weeks. Their expertise is unmatched in the field.', name: 'James Davis', role: 'CEO' },
  { quote: 'The quality of work and their commitment to excellence stood out. A fantastic team to collaborate with.', name: 'Olivia Wilson', role: 'Marketing Lead' },
  { quote: "They didn't just deliver; they impressed at every step. Very professional and easy to work with.", name: 'Liam White', role: 'Tech Lead' },
]

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className="w-3.5 h-3.5 text-[var(--gray)]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="testimonial-card flex-shrink-0 w-72 md:w-80 p-6">
      <StarRating />
      <div className="text-[var(--text-primary)]/15 text-3xl font-serif leading-none mb-3">&ldquo;</div>
      <p className="font-hind text-[var(--gray)] text-sm leading-relaxed mb-5">{t.quote}</p>
      <div className="flex items-center gap-3 border-t border-[var(--border)] pt-4">
        <div className="w-8 h-8 bg-[var(--text-primary)]/08 border border-[var(--border)] flex items-center justify-center flex-shrink-0">
          <span className="font-poppins text-[var(--gray)] text-xs font-semibold">{t.name[0]}</span>
        </div>
        <div>
          <p className="font-poppins font-semibold text-[var(--text-primary)] text-xs">{t.name}</p>
          <p className="font-hind text-[var(--text-secondary)] text-[10px]">{t.role}</p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  const row1 = testimonials.slice(0, 5)
  const row2 = testimonials.slice(5)

  return (
    <section className="py-24 lg:py-32 bg-[var(--bg)] relative overflow-hidden">
      {/* Background image strip */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=60&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--bg), transparent, var(--bg))' }} />
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-line" />
                  <span className="font-hind text-[var(--text-secondary)] text-sm tracking-widest uppercase">Testimonials</span>
                </div>
                <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-[var(--text-primary)] leading-tight">
                  Trusted by our clients
                </h2>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="font-poppins font-bold text-[var(--text-primary)] text-3xl">5+</div>
                  <div className="font-hind text-[var(--text-secondary)] text-[10px] mt-1">Years active</div>
                </div>
                <div className="w-px h-12 bg-[var(--text-primary)]/08" />
                <div className="text-center">
                  <div className="font-poppins font-bold text-[var(--text-primary)] text-3xl">3</div>
                  <div className="font-hind text-[var(--text-secondary)] text-[10px] mt-1">Countries served</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Row 1 */}
        <div className="overflow-hidden mb-4">
          <div className="flex gap-4 animate-marquee">
            {[...row1, ...row1, ...row1].map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>
        </div>

        {/* Row 2 — reverse */}
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-marquee-reverse">
            {[...row2, ...row2, ...row2].map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>
        </div>
      </div>
    </section>
  )
}