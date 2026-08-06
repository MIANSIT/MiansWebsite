import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProductDevelopmentSection from "@/components/sections/ProductDevelopmentSection";
import EngagementModelsSection from "@/components/sections/EngagementModelsSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";

export const metadata: Metadata = {
  title: "MIANS — Full-Stack Product Development for Founders & Teams",
  description:
    "MIANS builds full-stack applications for founders and teams who need to ship — not just launch a website. Next.js, NestJS, PostgreSQL/MongoDB, Docker. Home of Shei Hoise, our own SaaS product.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "MIANS — Full-Stack Product Development for Founders & Teams",
    description:
      "MIANS builds full-stack applications for founders and teams who need to ship — not just launch a website. Next.js, NestJS, PostgreSQL/MongoDB, Docker. Home of Shei Hoise, our own SaaS product.",
    url: "/",
  },
  twitter: {
    title: "MIANS — Full-Stack Product Development for Founders & Teams",
    description:
      "MIANS builds full-stack applications for founders and teams who need to ship — not just launch a website. Next.js, NestJS, PostgreSQL/MongoDB, Docker.",
  },
};

export default function Home() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <CaseStudiesSection />
      <ProductDevelopmentSection />
      <EngagementModelsSection />
      <ServicesSection />
      <ExpertiseSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
