'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'

const projects = [
  {
    title: 'Daatti Home Collection',
    description: 'A Multivendor E-commerce Platform',
    longDesc: 'Full-stack multivendor marketplace with vendor dashboards, real-time inventory, and seamless checkout.',
    tags: ['Next.js', 'React', 'Nest.js', 'Tailwind'],
    href: 'https://www.daattihomecollection.com/',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80&fit=crop',
    category: 'E-Commerce',
  },
  {
    title: "MOE'S DELI",
    description: 'Food Business Website with Yelp Integration',
    longDesc: 'A vibrant food business website featuring live Yelp reviews, menu showcase, and location integration.',
    tags: ['WordPress', 'CSS3', 'Yelp API'],
    href: 'https://moesdelioc.com/',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80&fit=crop',
    category: 'Web',
  },
  {
    title: 'Valerie Taylor Trust',
    description: 'UK Rehabilitation Support Organisation',
    longDesc: 'Digital presence for the UK support org for Centre for Rehabilitation of the Paralysed — Bangladesh.',
    tags: ['WordPress', 'CSS3', 'Social Media'],
    href: 'https://www.crp-bangladesh.org/',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&q=80&fit=crop',
    category: 'Non-profit',
  },
  {
    title: 'MIANS AI Chat',
    description: 'AI-powered real-time conversation platform',
    longDesc: 'An intelligent chatbot powered by OpenAI delivering smart, context-aware conversations in real-time.',
    tags: ['Next.js', 'Tailwind CSS', 'OpenAI API'],
    href: 'https://mians-chatbot.vercel.app/',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&fit=crop',
    category: 'AI',
  },
  {
    title: 'Pawfect',
    description: 'UI/UX Design Concept — Pet Social App',
    longDesc: 'A playful and intuitive social platform for pet owners to connect, share, and discover — Figma concept.',
    tags: ['Figma', 'UI Design', 'UX Research'],
    href: '/assets/pawfect-figma.pdf',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80&fit=crop',
    category: 'Design',
  },
  {
    title: 'Krayonmag',
    description: 'Online Storytelling Platform',
    longDesc: 'A digital magazine platform empowering writers and readers with rich content experiences.',
    tags: ['WordPress', 'CSS3', 'Social Media'],
    href: '#',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&q=80&fit=crop',
    category: 'Web',
  },
  {
    title: 'Motamot',
    description: 'Opinion Sharing & Voting Platform',
    longDesc: 'An engaging platform where users share opinions, start discussions, and vote on community topics.',
    tags: ['Next.js', 'React', 'Laravel'],
    href: 'https://motamot.io/',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80&fit=crop',
    category: 'Web App',
  },
]

const ALL = 'All'
const categories = [ALL, 'E-Commerce', 'Web', 'AI', 'Design', 'Web App', 'Non-profit']

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
            <span className="font-hind text-[var(--text-secondary)] text-sm tracking-widest uppercase">Portfolio</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-[var(--text-primary)] leading-tight">
              World-class digital products,<br />
              <span className="text-[var(--text-secondary)]">from ideas to execution</span>
            </h2>
            <p className="font-hind text-[var(--text-secondary)] max-w-sm leading-relaxed">
              A selection of real projects built for real clients — each one a reflection of our commitment to craft.
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
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img w-full h-full object-cover"
                    style={{ filter: 'grayscale(30%) brightness(0.75)' }}
                  />
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
                  <div className="absolute top-3 left-3 px-2.5 py-1" style={{ background: 'color-mix(in srgb, var(--bg) 80%, transparent)', border: '1px solid var(--border)' }}>
                    <span className="font-hind text-[10px] uppercase tracking-widest" style={{ color: 'var(--gray)' }}>{project.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-poppins font-semibold text-[var(--text-primary)] text-base mb-1.5 group-hover:text-[var(--text-primary)]">
                    {project.title}
                  </h3>
                  <p className="font-hind text-[var(--text-secondary)] text-sm leading-relaxed mb-4 group-hover:text-[var(--gray)] transition-colors">
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
