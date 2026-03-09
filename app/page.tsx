import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ProductsSection from '@/components/sections/ProductsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ExpertiseSection from '@/components/sections/ExpertiseSection'
import AboutSection from '@/components/sections/AboutSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <main style={{ background: 'var(--bg)' }}>
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
  )
}
 