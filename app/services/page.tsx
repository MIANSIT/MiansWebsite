import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore the full range of MIANS digital services — IT consulting, wireframing, UI/UX design, full-stack development, testing & QA, and deployment.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Our Services — MIANS",
    description:
      "End-to-end digital services from strategy through to launch — built around your unique goals and vision.",
    url: "/services",
  },
  twitter: {
    title: "Our Services — MIANS",
    description:
      "IT consulting, UI/UX design, development, testing, and deployment. See what MIANS delivers.",
  },
};

const SERVICES = [
  {
    slug: "it-consulting",
    num: "01",
    title: "IT Consulting",
    desc: "Strategic technology guidance tailored to your business goals. We audit, plan, and roadmap your digital transformation.",
    iconD:
      "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    slug: "wireframing",
    num: "02",
    title: "Wireframing",
    desc: "From concept to clickable prototype. We translate ideas into structured layouts that stakeholders can validate before a single line of code is written.",
    iconD:
      "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
  {
    slug: "ui-ux-design",
    num: "03",
    title: "UI/UX Design",
    desc: "Pixel-perfect interfaces grounded in user research. We create design systems that are intuitive, accessible, and unmistakably yours.",
    iconD:
      "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
  {
    slug: "development",
    num: "04",
    title: "Development",
    desc: "Full-stack development from landing pages to complex web applications. Clean code, fast performance, built to scale.",
    iconD: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    slug: "testing-qa",
    num: "05",
    title: "Testing & QA",
    desc: "Rigorous quality assurance across devices and browsers. We test, fix, and verify so your users only ever see the best version.",
    iconD: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    slug: "deployment",
    num: "06",
    title: "Deployment",
    desc: "CI/CD pipelines, cloud hosting, domain setup, and ongoing support. We take your product live and keep it running smoothly.",
    iconD: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
  },
];

export default function ServicesPage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section className='pt-36 pb-16 px-6 relative overflow-hidden grid-bg'>
        <div className='max-w-7xl mx-auto relative'>
          <div className='flex items-center gap-3 mb-5'>
            <span className='section-line' />
            <span
              className='font-hind text-sm tracking-widest uppercase'
              style={{ color: "var(--text-secondary)" }}
            >
              What We Do
            </span>
          </div>
          <h1
            className='font-poppins font-bold text-5xl lg:text-6xl leading-tight mb-4'
            style={{ color: "var(--text-primary)" }}
          >
            Our Services
          </h1>
          <p
            className='font-hind text-lg max-w-2xl leading-relaxed'
            style={{ color: "var(--text-secondary)" }}
          >
            End-to-end digital services — from strategy through to launch —
            built around your unique goals and vision.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-20 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className='group border p-8 flex flex-col transition-all duration-300 hover:border-[var(--border-hover)]'
                style={{
                  borderColor: "var(--border)",
                  background: "var(--bg-card)",
                }}
              >
                <div className='flex items-start justify-between mb-6'>
                  <div
                    className='w-12 h-12 flex items-center justify-center'
                    style={{ color: "var(--text-primary)", opacity: 0.5 }}
                  >
                    <svg
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      className='w-full h-full'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={1.5}
                        d={service.iconD}
                      />
                    </svg>
                  </div>
                  <span
                    className='font-poppins font-light text-4xl leading-none select-none'
                    style={{ color: "var(--text-secondary)", opacity: 0.3 }}
                  >
                    {service.num}
                  </span>
                </div>
                <h2
                  className='font-poppins font-semibold text-lg mb-3'
                  style={{ color: "var(--text-primary)" }}
                >
                  {service.title}
                </h2>
                <p
                  className='font-hind text-sm leading-relaxed flex-1'
                  style={{ color: "var(--text-secondary)" }}
                >
                  {service.desc}
                </p>
                <div
                  className='mt-6 flex items-center gap-2 font-hind text-sm group-hover:gap-3 transition-all'
                  style={{ color: "var(--text-primary)" }}
                >
                  Learn more
                  <svg
                    className='w-4 h-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className='py-20 px-6 border-t'
        style={{ borderColor: "var(--border)" }}
      >
        <div className='max-w-3xl mx-auto text-center'>
          <h2
            className='font-poppins font-bold text-3xl lg:text-4xl mb-4'
            style={{ color: "var(--text-primary)" }}
          >
            Ready to get started?
          </h2>
          <p
            className='font-hind mb-8'
            style={{ color: "var(--text-secondary)" }}
          >
            Let&apos;s discuss your project and find the right approach for your
            needs.
          </p>
          <Link
            href='/contact'
            className='btn-primary inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold'
          >
            Start a Project
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
