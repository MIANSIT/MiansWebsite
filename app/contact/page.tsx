import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

// ✅ metadata export is allowed here because this is a SERVER component
// (no 'use client' at the top). ContactForm handles its own interactivity internally.
export const metadata: Metadata = {
  title: "Contact Us — Get a Free Consultation",
  description:
    "Ready to start your next digital project? Contact MIANS for a free consultation on web development, app development, UI/UX design, and IT consulting.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact MIANS — Get a Free Consultation",
    description:
      "Ready to start your next digital project? Contact MIANS for a free consultation on web development, app development, UI/UX design, and IT consulting.",
    url: "/contact",
  },
  twitter: {
    title: "Contact MIANS — Get a Free Consultation",
    description:
      "Ready to start your next digital project? Contact MIANS for a free consultation.",
  },
};

export default function ContactPage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Navbar />
      <section className='pt-36 pb-16 px-6 relative overflow-hidden grid-bg'>
        <div className='max-w-7xl mx-auto relative'>
          <div className='flex items-center gap-3 mb-5'>
            <span className='section-line' />
            <span
              className='font-hind text-sm tracking-widest uppercase'
              style={{ color: "var(--text-secondary)" }}
            >
              Get In Touch
            </span>
          </div>
          <h1
            className='font-poppins font-bold text-5xl lg:text-6xl leading-tight mb-4'
            style={{ color: "var(--text-primary)" }}
          >
            Let&apos;s build something
            <br />
            <span style={{ color: "var(--text-secondary)" }}>
              remarkable together.
            </span>
          </h1>
          <p
            className='font-hind text-lg max-w-xl leading-relaxed'
            style={{ color: "var(--text-secondary)" }}
          >
            Have a project in mind? We&apos;re all ears. Tell us your vision and
            we&apos;ll make it a reality.
          </p>
        </div>
      </section>
      <ContactForm />
      <Footer />
    </main>
  );
}
