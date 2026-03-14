import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type ServiceData = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  features: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  iconD: string;
};

const SERVICES: ServiceData[] = [
  {
    slug: "it-consulting",
    title: "IT Consulting",
    tagline: "Strategic technology guidance for your business",
    description:
      "We help businesses navigate the complexities of modern technology. From infrastructure audits to digital transformation roadmaps, our consulting services are designed to align your tech stack with your business objectives — saving time, reducing costs, and accelerating growth.",
    metaTitle: "IT Consulting Services",
    metaDescription:
      "Expert IT consulting services from MIANS. Strategic technology guidance, infrastructure audits, and digital transformation roadmaps tailored to your business goals.",
    features: [
      {
        title: "Technology Audits",
        desc: "Comprehensive assessment of your current tech stack and infrastructure.",
      },
      {
        title: "Digital Strategy",
        desc: "Custom roadmaps for digital transformation aligned with business goals.",
      },
      {
        title: "Vendor Selection",
        desc: "Unbiased guidance on choosing the right tools and platforms.",
      },
      {
        title: "Process Optimization",
        desc: "Streamline workflows and eliminate inefficiencies with technology.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        desc: "We assess your current state, goals, and pain points.",
      },
      {
        step: "02",
        title: "Analysis",
        desc: "Deep-dive into your systems, data, and team workflows.",
      },
      {
        step: "03",
        title: "Roadmap",
        desc: "Deliver a clear, prioritized action plan.",
      },
      {
        step: "04",
        title: "Execution Support",
        desc: "We guide implementation and measure outcomes.",
      },
    ],
    iconD:
      "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    slug: "wireframing",
    title: "Wireframing",
    tagline: "From concept to clickable prototype",
    description:
      "Before writing a single line of code, we translate your vision into structured layouts. Our wireframing process ensures stakeholders can see, interact with, and validate ideas early — reducing risk, saving budget, and producing better outcomes.",
    metaTitle: "Wireframing & Prototyping Services",
    metaDescription:
      "Professional wireframing and prototyping services by MIANS. Transform ideas into clickable prototypes that stakeholders can validate before development begins.",
    features: [
      {
        title: "Low-Fidelity Wireframes",
        desc: "Quick structural layouts to establish information architecture.",
      },
      {
        title: "Interactive Prototypes",
        desc: "Clickable prototypes that simulate the real user experience.",
      },
      {
        title: "User Flow Mapping",
        desc: "Visual mapping of every user journey through your product.",
      },
      {
        title: "Stakeholder Validation",
        desc: "Review sessions to gather feedback and iterate before development.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Requirements",
        desc: "Gather business requirements and user needs.",
      },
      {
        step: "02",
        title: "Sketching",
        desc: "Rough sketches and layout exploration.",
      },
      {
        step: "03",
        title: "Wireframing",
        desc: "Detailed wireframes with content structure.",
      },
      {
        step: "04",
        title: "Prototyping",
        desc: "Interactive prototypes for review and testing.",
      },
    ],
    iconD:
      "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    tagline: "Pixel-perfect interfaces, user-first thinking",
    description:
      "Great design is invisible — it just works. We craft design systems grounded in user research that are intuitive, accessible, and unmistakably yours. Every pixel serves a purpose, every interaction feels natural.",
    metaTitle: "UI/UX Design Services",
    metaDescription:
      "Expert UI/UX design services from MIANS. Pixel-perfect interfaces grounded in user research — intuitive, accessible, and designed to convert.",
    features: [
      {
        title: "User Research",
        desc: "Deep user interviews, surveys, and competitive analysis.",
      },
      {
        title: "Design Systems",
        desc: "Scalable component libraries and style guides.",
      },
      {
        title: "Responsive Design",
        desc: "Seamless experiences across every screen size.",
      },
      {
        title: "Accessibility (A11y)",
        desc: "WCAG-compliant designs that work for everyone.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Research",
        desc: "User interviews, personas, and competitive analysis.",
      },
      {
        step: "02",
        title: "Information Architecture",
        desc: "Content hierarchy and navigation structure.",
      },
      {
        step: "03",
        title: "Visual Design",
        desc: "High-fidelity mockups and design system creation.",
      },
      {
        step: "04",
        title: "Handoff",
        desc: "Developer-ready specs with assets and documentation.",
      },
    ],
    iconD:
      "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
  {
    slug: "development",
    title: "Development",
    tagline: "Clean code, fast performance, built to scale",
    description:
      "From sleek landing pages to complex full-stack web applications — we build it all. Our development process prioritizes clean, maintainable code, blazing-fast performance, and architecture that scales with your business.",
    metaTitle: "Web & App Development Services",
    metaDescription:
      "Full-stack web and app development services from MIANS. Custom websites, web apps, and e-commerce solutions built with clean code, fast performance, and scalable architecture.",
    features: [
      {
        title: "Frontend Development",
        desc: "React, Next.js, and modern frameworks for blazing-fast UIs.",
      },
      {
        title: "Backend Development",
        desc: "APIs, databases, and server architecture built to scale.",
      },
      {
        title: "E-Commerce",
        desc: "Custom online stores with payment integrations and inventory management.",
      },
      {
        title: "CMS Integration",
        desc: "Headless CMS setups for easy content management.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Architecture",
        desc: "Tech stack selection and system design.",
      },
      {
        step: "02",
        title: "Sprint Development",
        desc: "Agile sprints with regular demos and feedback.",
      },
      {
        step: "03",
        title: "Code Review",
        desc: "Peer reviews and automated quality checks.",
      },
      {
        step: "04",
        title: "Performance Tuning",
        desc: "Optimization for speed, SEO, and Core Web Vitals.",
      },
    ],
    iconD: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    slug: "testing-qa",
    title: "Testing & QA",
    tagline: "Rigorous quality, zero compromises",
    description:
      "We don't ship bugs. Our QA process covers every device, every browser, and every edge case. From automated test suites to manual usability testing, we ensure your users only ever see the best version of your product.",
    metaTitle: "Testing & Quality Assurance Services",
    metaDescription:
      "Comprehensive testing and QA services from MIANS. Cross-browser testing, automated test suites, performance audits, and usability testing to ensure your product is flawless.",
    features: [
      {
        title: "Cross-Browser Testing",
        desc: "Verified compatibility across Chrome, Firefox, Safari, Edge, and more.",
      },
      {
        title: "Automated Testing",
        desc: "CI/CD-integrated test suites for continuous quality assurance.",
      },
      {
        title: "Performance Testing",
        desc: "Load testing, stress testing, and Core Web Vitals optimization.",
      },
      {
        title: "Usability Testing",
        desc: "Real-user testing to validate flows and catch UX issues.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Test Planning",
        desc: "Define test cases, acceptance criteria, and coverage goals.",
      },
      {
        step: "02",
        title: "Automated Suites",
        desc: "Build and run automated functional and regression tests.",
      },
      {
        step: "03",
        title: "Manual QA",
        desc: "Exploratory testing for edge cases machines miss.",
      },
      {
        step: "04",
        title: "Bug Resolution",
        desc: "Triage, fix, verify, and close — fast.",
      },
    ],
    iconD: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    slug: "deployment",
    title: "Deployment",
    tagline: "Go live with confidence",
    description:
      "We handle the entire deployment pipeline — CI/CD configuration, cloud hosting, domain setup, SSL certificates, and ongoing monitoring. Your product goes live smoothly and stays running reliably.",
    metaTitle: "Deployment & DevOps Services",
    metaDescription:
      "Professional deployment and DevOps services from MIANS. CI/CD pipelines, cloud hosting, domain configuration, SSL setup, and 24/7 monitoring to keep your product running smoothly.",
    features: [
      {
        title: "CI/CD Pipelines",
        desc: "Automated build, test, and deploy workflows.",
      },
      {
        title: "Cloud Hosting",
        desc: "AWS, Vercel, DigitalOcean — optimized for your needs.",
      },
      {
        title: "Domain & SSL",
        desc: "Custom domain setup with free SSL certificates.",
      },
      {
        title: "Monitoring & Support",
        desc: "Uptime monitoring, error tracking, and ongoing maintenance.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Environment Setup",
        desc: "Configure staging and production environments.",
      },
      {
        step: "02",
        title: "Pipeline Config",
        desc: "Set up CI/CD for automated deployments.",
      },
      {
        step: "03",
        title: "Go Live",
        desc: "DNS configuration, SSL, and production launch.",
      },
      {
        step: "04",
        title: "Post-Launch",
        desc: "Monitoring, updates, and ongoing support.",
      },
    ],
    iconD: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
  },
];

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.metaTitle} — MIANS`,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
    },
    twitter: {
      title: `${service.metaTitle} — MIANS`,
      description: service.metaDescription,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "Organization",
      name: "MIANS",
      url: "https://www.miansofficial.com",
    },
    url: `https://www.miansofficial.com/services/${service.slug}`,
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
              Service
            </span>
          </div>
          <div className='flex items-start gap-6 mb-6'>
            <div
              className='w-16 h-16 flex items-center justify-center flex-shrink-0'
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
            <div>
              <h1
                className='font-poppins font-bold text-5xl lg:text-6xl leading-tight mb-2'
                style={{ color: "var(--text-primary)" }}
              >
                {service.title}
              </h1>
              <p
                className='font-hind text-xl'
                style={{ color: "var(--text-secondary)" }}
              >
                {service.tagline}
              </p>
            </div>
          </div>
          <p
            className='font-hind text-lg max-w-3xl leading-relaxed'
            style={{ color: "var(--text-secondary)" }}
          >
            {service.description}
          </p>
        </div>
      </section>

      {/* Features */}
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
              What&apos;s Included
            </span>
          </div>
          <h2
            className='font-poppins font-bold text-3xl lg:text-4xl mb-12'
            style={{ color: "var(--text-primary)" }}
          >
            Key Features
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {service.features.map((feature, i) => (
              <div
                key={i}
                className='border p-8 transition-colors hover:border-[var(--border-hover)]'
                style={{
                  borderColor: "var(--border)",
                  background: "var(--bg-card)",
                }}
              >
                <h3
                  className='font-poppins font-semibold text-lg mb-3'
                  style={{ color: "var(--text-primary)" }}
                >
                  {feature.title}
                </h3>
                <p
                  className='font-hind text-sm leading-relaxed'
                  style={{ color: "var(--text-secondary)" }}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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
              How We Work
            </span>
          </div>
          <h2
            className='font-poppins font-bold text-3xl lg:text-4xl mb-12'
            style={{ color: "var(--text-primary)" }}
          >
            Our Process
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {service.process.map((step, i) => (
              <div key={i} className='relative'>
                <div
                  className='font-poppins font-light text-6xl leading-none mb-4 select-none'
                  style={{ color: "var(--text-secondary)", opacity: 0.15 }}
                >
                  {step.step}
                </div>
                <h3
                  className='font-poppins font-semibold text-lg mb-2'
                  style={{ color: "var(--text-primary)" }}
                >
                  {step.title}
                </h3>
                <p
                  className='font-hind text-sm leading-relaxed'
                  style={{ color: "var(--text-secondary)" }}
                >
                  {step.desc}
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
            Interested in {service.title}?
          </h2>
          <p
            className='font-hind mb-8'
            style={{ color: "var(--text-secondary)" }}
          >
            Let&apos;s discuss how we can help you achieve your goals with our{" "}
            {service.title.toLowerCase()} expertise.
          </p>
          <div className='flex flex-wrap gap-4 justify-center'>
            <Link
              href='/contact'
              className='btn-primary inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold'
            >
              Get a Free Consultation
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
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
