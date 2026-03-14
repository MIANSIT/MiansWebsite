import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "MIANS — Reflection of Your Desires | Digital Agency",
  description:
    "MIANS is a full-service digital agency specializing in custom web & app development, UI/UX design, IT consulting, branding, and e-commerce solutions.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "MIANS — Reflection of Your Desires | Digital Agency",
    description:
      "Custom web & app development, UI/UX design, IT consulting, branding, and e-commerce solutions. Let's build something remarkable.",
    url: "/",
  },
  twitter: {
    title: "MIANS — Reflection of Your Desires | Digital Agency",
    description:
      "Custom web & app development, UI/UX design, IT consulting, branding, and e-commerce solutions.",
  },
};

export default function Home() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <ProductsSection />
      <ServicesSection />
      <ExpertiseSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
