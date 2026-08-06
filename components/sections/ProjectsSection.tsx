'use client'

import { useState } from 'react'
import Image from 'next/image'
import AnimatedSection from '@/components/AnimatedSection'

const projects = [
  {
    title: 'Shei Hoise',
    description: 'Store Management SaaS Platform',
    longDesc: 'A powerful SaaS platform to help store owners run their business smarter — inventory, orders, and analytics in one place. 7-day free trial, no credit card required.',
    tags: ['Next.js', 'React', 'SaaS', 'Tailwind'],
    href: 'https://www.sheihoise.com/',
    image: '/images/sheiHoise.png?w=600&q=80&fit=crop',
    local: true,
    category: 'SaaS',
  },
  {
    title: 'Daatti Home Collection',
    description: 'A Multivendor E-commerce Platform',
    longDesc: 'Full-stack multivendor marketplace with vendor dashboards, real-time inventory, and seamless checkout.',
    tags: ['Next.js', 'React', 'Nest.js', 'Tailwind'],
    href: 'https://www.daattihomecollection.com/',
    image: '/images/daatti.jpg?w=600&q=80&fit=crop',
    local: false,
    category: 'E-Commerce',
  },
  {
    title: "MOE'S DELI",
    description: 'Food Business Website with Yelp Integration',
    longDesc: 'A vibrant food business website featuring live Yelp reviews, menu showcase, and location integration.',
    tags: ['WordPress', 'CSS3', 'Yelp API'],
    href: 'https://moesdelioc.com/',
    image: '/images/moesdeli.png?w=600&q=80&fit=crop',
    local: false,
    category: 'Restaurant',
  },
  {
    title: 'Valerie Taylor Trust',
    description: 'UK Rehabilitation Support Organisation',
    longDesc: 'Digital presence for the UK support org for Centre for Rehabilitation of the Paralysed — Bangladesh.',
    tags: ['WordPress', 'CSS3', 'Social Media'],
    href: 'https://www.crp-bangladesh.org/',
    image: '/images/VTT.png?w=600&q=80&fit=crop',
    local: false,
    category: 'Non-profit',
  },
  
  {
    title: 'Pawfect',
    description: 'UI/UX Design Concept — Pet Social App',
    longDesc: 'A playful and intuitive social platform for pet owners to connect, share, and discover — Figma concept.',
    tags: ['Figma', 'UI Design', 'UX Research'],
    href: '/assets/pawfect-figma.pdf',
    image: '/images/pawfect.png?w=600&q=80&fit=crop',
    local: false,
    category: 'Brand Guideline',
  },
  {
    title: 'Krayonmag',
    description: 'Online Storytelling Platform',
    longDesc: 'A digital magazine platform empowering writers and readers with rich content experiences.',
    tags: ['WordPress', 'CSS3', 'Social Media'],
    href: 'https://krayonmag.org/',
    image: '/images/krayonmag.png?w=600&q=80&fit=crop',
    local: false,
    category: 'Media',
  },
  {
    title: 'MIANS AI Chat',
    description: 'AI-powered real-time conversation platform',
    longDesc: 'An intelligent chatbot powered by OpenAI delivering smart, context-aware conversations in real-time.',
    tags: ['Next.js', 'Tailwind CSS', 'OpenAI API'],
    href: 'https://mians-chatbot.vercel.app/',
    image: '/images/aiChat.jpg?w=600&q=80&fit=crop',
    local: false,
    category: 'AI',
  },
  {
    title: 'Luxury Chauffeur Car',
    description: 'Premium Car Booking Platform — Australia',
    longDesc: 'A high-end chauffeur booking platform built for an Australian client — featuring real-time flight tracking, luxury fleet selection (Mercedes, BMW, Audi), fixed transparent pricing, and 24/7 dispatch across Australia.',
    tags: ['Next.js', 'Booking System', 'Real-time', 'Tailwind'],
    href: 'https://luxurychauffeurcar.com.au/',
    image: '/images/luxurychauffeur.jpg?w=600&q=80&fit=crop',
    local: false,
    category: 'Transport',
  },
  {
    title: 'Priority Carpet Clean',
    description: 'Carpet Cleaning Service with Online Booking — USA',
    longDesc: 'A professional cleaning service website for a US-based client with a fully integrated custom booking system, service catalog covering carpets, tile, hardwood & upholstery, and customer review integration.',
    tags: ['WordPress', 'Custom Booking', 'PHP', 'CSS3'],
    href: 'https://prioritycarpetclean.com/',
    image: '/images/prioritycarpet.jpg?w=600&q=80&fit=crop',
    local: false,
    category: 'Home Services',
  },
]

const ALL = 'All'
const categories = [ALL, 'SaaS', 'E-Commerce', 'Transport', 'Home Services', 'Restaurant', 'Media', 'Non-profit', 'AI', 'Brand Guideline']

export default function ProjectsSection() {
  const [active, setActive] = useState(ALL)
  const filtered = active === ALL ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="py-24 lg:py-32 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <AnimatedSection className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="section-line" />
            <span className="font-hind text-[var(--text-secondary)] text-sm tracking-widest uppercase">Range of Work</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-[var(--text-primary)] leading-tight">
              Beyond Product Builds,<br />
              <span className="text-[var(--text-secondary)]">Across Industries</span>
            </h2>
            <p className="font-hind text-[var(--text-secondary)] max-w-sm leading-relaxed">
              From SaaS platforms to booking systems and community sites — a look at the range of work we&apos;ve delivered for clients over the years.
            </p>
          </div>
        </AnimatedSection>

        {/* Filter pills */}
        <AnimatedSection className="mb-10" delay={80}>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-hind text-xs px-4 py-2 border transition-all duration-200 uppercase tracking-wider ${
                  active === cat
                    ? 'bg-[var(--text-primary)] text-[var(--bg)] border-[var(--text-primary)] font-semibold'
                    : 'text-[var(--text-secondary)] border-[var(--border)] hover:border-[var(--border-hover)] hover:text-[var(--gray)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 60}>
              <a
                href={project.href}
                target={project.href !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="project-card block group overflow-hidden"
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: '200px' }}>
                  {project.local ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="project-img object-cover"
                      style={{ filter: 'grayscale(20%) brightness(0.85)' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-img w-full h-full object-cover"
                      style={{ filter: 'grayscale(30%) brightness(0.75)' }}
                    />
                  )}

                  {/* Overlay on hover */}
                  <div className="project-overlay absolute inset-0 flex items-center justify-center"
                    style={{ background: 'color-mix(in srgb, var(--bg) 60%, transparent)' }}>
                    <div className="border px-4 py-2 flex items-center gap-2" style={{ borderColor: 'var(--border-hover)' }}>
                      <span className="font-hind text-xs uppercase tracking-widest" style={{ color: 'var(--text-primary)' }}>View Project</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-primary)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1"
                    style={{ background: 'color-mix(in srgb, var(--bg) 80%, transparent)', border: '1px solid var(--border)' }}>
                    <span className="font-hind text-[10px] uppercase tracking-widest" style={{ color: 'var(--gray)' }}>{project.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-poppins font-semibold text-[var(--text-primary)] text-base mb-1.5">
                    {project.title}
                  </h3>
                  <p className="font-hind text-[var(--text-secondary)] text-sm leading-relaxed mb-4 transition-colors">
                    {project.longDesc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}