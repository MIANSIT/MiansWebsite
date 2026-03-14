import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us — Our Story, Mission & Values",
  description:
    "Learn about MIANS — a full-service digital agency founded in July 2020. Discover our story, mission, values, and the team behind the work.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About MIANS — Our Story, Mission & Values",
    description:
      "Founded in 2020, MIANS bridges innovation and business through custom digital solutions. Learn about our journey, values, and vision.",
    url: "/about",
  },
  twitter: {
    title: "About MIANS — Our Story, Mission & Values",
    description:
      "Founded in 2020, MIANS bridges innovation and business through custom digital solutions.",
  },
};

const timeline = [
  {
    year: "2020",
    title: "MIANS Founded",
    event:
      "Started with a vision to bridge business and digital. Founded on July 20th, 2020 in Bangladesh.",
  },
  {
    year: "2021",
    title: "International Expansion",
    event:
      "First international clients onboarded — working with businesses in Belgium and the USA.",
  },
  {
    year: "2022",
    title: "Design Mastery",
    event:
      "Completed brand identities for MIANS and PawfectBD — sharpening our design craft.",
  },
  {
    year: "2023",
    title: "Event Management",
    event: "Managed corporate, community, and gaming events across Bangladesh.",
  },
  {
    year: "2024",
    title: "Shei Hoise Launch",
    event:
      "Launched Shei Hoise — our first SaaS product. A store management platform built in-house.",
  },
];

const values = [
  {
    icon: "◎",
    title: "Precision",
    desc: "Every detail matters. We obsess over quality and craftsmanship in every project we deliver.",
  },
  {
    icon: "◈",
    title: "Creativity",
    desc: "We go beyond the expected — finding innovative solutions to complex problems.",
  },
  {
    icon: "◇",
    title: "Transparency",
    desc: "Open communication at every stage. No surprises, just clear progress and honest feedback.",
  },
  {
    icon: "◉",
    title: "Impact",
    desc: "Every solution we build is designed to drive real, measurable results for your business.",
  },
];

const stats = [
  { label: "Years in Business", value: "5+" },
  { label: "Projects Delivered", value: "50+" },
  { label: "Consultations", value: "1000+" },
  { label: "Countries Served", value: "3" },
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About MIANS",
    description:
      "Learn about MIANS — a full-service digital agency founded in July 2020.",
    mainEntity: {
      "@type": "Organization",
      name: "MIANS",
      foundingDate: "2020-07-20",
      foundingLocation: "Bangladesh",
      description:
        "MIANS is a full-service digital agency offering custom web & app development, UI/UX design, IT consulting, branding, and e-commerce solutions.",
      url: "https://www.miansofficial.com",
      sameAs: [
        "https://www.linkedin.com/company/mians-official/",
        "https://x.com/mians_official",
        "https://www.facebook.com/miansofficial",
      ],
    },
  };

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
              About Us
            </span>
          </div>
          <h1
            className='font-poppins font-bold text-5xl lg:text-6xl leading-tight mb-4'
            style={{ color: "var(--text-primary)" }}
          >
            Bridging Innovation
            <br />
            <span style={{ color: "var(--text-secondary)" }}>and Business</span>
          </h1>
          <p
            className='font-hind text-lg max-w-2xl leading-relaxed'
            style={{ color: "var(--text-secondary)" }}
          >
            At MIANS, we&apos;re here to bring your ideas to life. Founded on
            July 20, 2020, our mission has always been to bridge business needs
            with smart &amp; effective digital solutions.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section
        className='py-12 px-6 border-t border-b'
        style={{ borderColor: "var(--border)" }}
      >
        <div className='max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8'>
          {stats.map((stat) => (
            <div key={stat.label} className='text-center'>
              <div
                className='font-poppins font-bold text-4xl lg:text-5xl mb-2'
                style={{ color: "var(--text-primary)" }}
              >
                {stat.value}
              </div>
              <div
                className='font-hind text-sm'
                style={{ color: "var(--text-secondary)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className='py-20 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
            {/* Left: Text */}
            <div>
              <div className='flex items-center gap-3 mb-4'>
                <span className='section-line' />
                <span
                  className='font-hind text-sm tracking-widest uppercase'
                  style={{ color: "var(--text-secondary)" }}
                >
                  Our Story
                </span>
              </div>
              <h2
                className='font-poppins font-bold text-3xl lg:text-4xl mb-6'
                style={{ color: "var(--text-primary)" }}
              >
                The Reflection of Your Desires
              </h2>
              <div
                className='space-y-4 font-hind leading-relaxed'
                style={{ color: "var(--text-secondary)" }}
              >
                <p>
                  MIANS was born with a simple yet powerful idea: every business
                  deserves a digital presence that truly reflects its vision.
                  Too many companies settle for generic solutions that
                  don&apos;t capture who they are. We wanted to change that.
                </p>
                <p>
                  Starting from Bangladesh in 2020, we quickly expanded to serve
                  clients in Belgium, the USA, and beyond. Our approach combines
                  deep technical expertise with genuine creative vision — we
                  don&apos;t just build products, we craft experiences.
                </p>
                <p>
                  Today, MIANS is a full-service digital agency handling
                  everything from IT consulting and UI/UX design to full-stack
                  development and product launches. We&apos;re proud to have
                  built Shei Hoise — our own SaaS platform — proving that we
                  practice what we preach.
                </p>
              </div>
            </div>

            {/* Right: Image grid */}
            <div className='relative'>
              <div
                className='relative overflow-hidden border'
                style={{ borderColor: "var(--border)", aspectRatio: "4/3" }}
              >
                <img
                  src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&fit=crop'
                  alt='MIANS team collaborating on a project'
                  className='w-full h-full object-cover'
                  style={{ filter: "grayscale(20%) brightness(0.7)" }}
                />
                <div
                  className='absolute inset-0'
                  style={{
                    background:
                      "linear-gradient(to top, var(--bg) 0%, transparent 60%)",
                  }}
                />
                <div className='absolute bottom-0 left-0 right-0 p-6'>
                  <p
                    className='font-poppins font-bold text-xl'
                    style={{ color: "var(--text-primary)" }}
                  >
                    Our Team at Work
                  </p>
                  <p
                    className='font-hind text-sm'
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Collaboration is at the heart of everything we do
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className='py-20 px-6 border-t'
        style={{ borderColor: "var(--border)" }}
      >
        <div className='max-w-7xl mx-auto'>
          <div className='flex items-center gap-3 mb-4'>
            <span className='section-line' />
            <span
              className='font-hind text-sm tracking-widest uppercase'
              style={{ color: "var(--text-secondary)" }}
            >
              Our Journey
            </span>
          </div>
          <h2
            className='font-poppins font-bold text-3xl lg:text-4xl mb-12'
            style={{ color: "var(--text-primary)" }}
          >
            Key Milestones
          </h2>
          <div className='relative'>
            <div
              className='absolute left-[3.25rem] top-0 bottom-0 w-px'
              style={{ background: "var(--border)" }}
            />
            <div className='space-y-10'>
              {timeline.map((item, i) => (
                <div key={item.year} className='flex items-start gap-6'>
                  <div className='flex-shrink-0 w-12 text-right'>
                    <span
                      className='font-poppins font-bold text-lg'
                      style={{
                        color:
                          i === timeline.length - 1
                            ? "var(--text-primary)"
                            : "var(--text-secondary)",
                      }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <div className='relative flex-shrink-0 mt-2'>
                    <div
                      className='w-3 h-3 border-2 rounded-full z-10 relative'
                      style={{
                        borderColor:
                          i === timeline.length - 1
                            ? "var(--text-primary)"
                            : "var(--text-muted)",
                        background:
                          i === timeline.length - 1
                            ? "var(--text-primary)"
                            : "var(--bg)",
                      }}
                    />
                  </div>
                  <div className='pb-2'>
                    <h3
                      className='font-poppins font-semibold text-lg mb-1'
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className='font-hind text-sm leading-relaxed'
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className='py-20 px-6 border-t'
        style={{ borderColor: "var(--border)" }}
      >
        <div className='max-w-7xl mx-auto'>
          <div className='flex items-center gap-3 mb-4'>
            <span className='section-line' />
            <span
              className='font-hind text-sm tracking-widest uppercase'
              style={{ color: "var(--text-secondary)" }}
            >
              What We Stand For
            </span>
          </div>
          <h2
            className='font-poppins font-bold text-3xl lg:text-4xl mb-12'
            style={{ color: "var(--text-primary)" }}
          >
            Our Values
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {values.map((v) => (
              <div
                key={v.title}
                className='border p-8 transition-colors hover:border-[var(--border-hover)]'
                style={{
                  borderColor: "var(--border)",
                  background: "var(--bg-card)",
                }}
              >
                <div
                  className='text-3xl mb-4'
                  style={{ color: "var(--text-secondary)" }}
                >
                  {v.icon}
                </div>
                <h3
                  className='font-poppins font-semibold text-lg mb-2'
                  style={{ color: "var(--text-primary)" }}
                >
                  {v.title}
                </h3>
                <p
                  className='font-hind text-sm leading-relaxed'
                  style={{ color: "var(--text-secondary)" }}
                >
                  {v.desc}
                </p>
              </div>
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
            Ready to work together?
          </h2>
          <p
            className='font-hind mb-8'
            style={{ color: "var(--text-secondary)" }}
          >
            We&apos;d love to hear about your project and explore how we can
            help.
          </p>
          <div className='flex flex-wrap gap-4 justify-center'>
            <Link
              href='/contact'
              className='btn-primary inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold'
            >
              Get in Touch
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
            <Link
              href='/services'
              className='btn-outline inline-flex items-center gap-2 px-8 py-4 text-sm'
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
