export type CaseStudy = {
  slug: string
  title: string
  client: string
  category: string
  year: string
  tagline: string
  image: string
  services: string[]
  tags: string[]
  href: string
  overview: string
  challenge: string
  solution: string
  results: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'shei-hoise',
    title: 'Shei Hoise',
    client: 'Shei Hoise',
    category: 'SaaS · E-Commerce',
    year: '2026',
    tagline: 'A multi-tenant e-commerce platform for f-commerce sellers, with native ad-tracking, automated courier fulfillment, and infrastructure we fully own — from Postgres to production.',
    image: '/images/sheiHoise.png',
    services: ['Multi-Tenant Platform Architecture', 'SaaS Development', 'DevOps & Infrastructure', 'Third-Party API Integration'],
    tags: ['Next.js 16', 'Supabase (Postgres)', 'Docker', 'Tailwind CSS 4', 'TanStack Query'],
    href: 'https://www.sheihoise.com/',
    overview: 'Shei Hoise is a multi-tenant e-commerce platform purpose-built for f-commerce sellers — merchants who run their business primarily through Facebook and Instagram — as well as standalone online stores. Each merchant gets a fully isolated storefront, product catalog, order pipeline, courier connections, and marketing configuration, all served from a single Next.js codebase and a single Postgres database using row-level security for tenant isolation.',
    challenge: 'Social-commerce sellers typically run their entire operation through a patchwork of Facebook Messenger, spreadsheets, and manual courier bookings — with no reliable way to track which ads actually convert or automate fulfillment once an order comes in. They needed a single platform that could replace that patchwork without asking a non-technical merchant to become a developer, while giving us, as the platform operator, full control over cost, data, and infrastructure rather than depending entirely on third-party cloud services.',
    solution: 'We built Shei Hoise as a true multi-tenant platform from the database up — Postgres row-level security enforces tenant isolation at the data layer, not just in application code, so one merchant’s data is architecturally incapable of leaking into another’s. Every store also ships with native ad-tracking infrastructure: its own Meta Pixel and Conversions API configuration, firing both client-side and server-side events, hashed and deduplicated, so merchants get accurate ad-optimization data even where browser tracking is blocked — normally a specialist integration, built directly into the platform. Direct courier integrations with Pathao and Steadfast automate shipment creation, live delivery tracking, and COD reconciliation from inside the dashboard, removing what’s usually hours of manual per-order admin. And because we own the full infrastructure — a self-hosted Supabase deployment running containerized on Docker with a GitHub Actions CI/CD pipeline — we were later able to execute a full production migration to a new self-hosted VPS with zero data loss, proof the platform isn’t dependent on any single vendor.',
    results: [
      'Live, production multi-tenant platform serving real merchant stores with fully isolated data per tenant',
      'Built-in ad-tracking infrastructure that gives merchants accurate conversion data without needing a marketing specialist',
      'Automated courier and COD workflows that remove manual fulfillment admin for every connected store',
      'Successfully migrated the entire production system to self-hosted infrastructure with zero data loss — proof of real ownership over the platform’s architecture, not just its interface',
    ],
  },
  {
    slug: 'daatti-home-collection',
    title: 'Daatti Home Collection',
    client: 'Daatti',
    category: 'E-Commerce',
    year: '2024',
    tagline: 'A full-stack multivendor marketplace for the home furnishings market, with independent vendor dashboards and a seamless unified checkout.',
    image: '/images/daatti.jpg',
    services: ['Full-Stack Development', 'E-Commerce', 'UI/UX Design', 'API Architecture'],
    tags: ['Next.js', 'React', 'Nest.js', 'Tailwind CSS', 'PostgreSQL'],
    href: 'https://www.daattihomecollection.com/',
    overview: 'Daatti Home Collection is a multivendor e-commerce platform designed for the home furnishings and décor market. The platform allows multiple vendors to list and manage their products independently, while customers enjoy a unified, premium shopping experience with a single seamless checkout — regardless of how many vendors are in their cart.',
    challenge: 'The client needed more than a standard online store. They required a true marketplace where multiple vendors could operate independently — with their own dashboards, inventory controls, and order management — all under one branded storefront. Building this while maintaining premium UX and fast performance across the whole platform was the primary technical challenge.',
    solution: 'We built a decoupled architecture with a Next.js frontend and a Nest.js REST API backend. Each vendor receives a personalised dashboard to manage their catalogue, track orders, and monitor performance. The customer-facing storefront is fully optimised for speed, with real-time inventory updates and a frictionless multi-vendor checkout experience.',
    results: [
      'Live marketplace with multiple active vendor accounts onboarded at launch',
      'Real-time inventory sync maintained across all vendor product listings',
      'Seamless single-checkout experience for multi-vendor shopping carts',
      'Scalable API architecture designed to support ongoing marketplace growth',
    ],
  },
  {
    slug: 'luxury-chauffeur-car',
    title: 'Luxury Chauffeur Car',
    client: 'Australian Client',
    category: 'Transport',
    year: '2024',
    tagline: 'A premium online booking platform for a luxury Australian chauffeur service — real-time fleet selection, transparent fixed pricing, and 24/7 dispatch.',
    image: '/images/luxurychauffeur.jpg',
    services: ['Web Development', 'Booking System', 'UI/UX Design', 'Real-time Integration'],
    tags: ['Next.js', 'Booking System', 'Real-time APIs', 'Tailwind CSS'],
    href: 'https://luxurychauffeurcar.com.au/',
    overview: 'Luxury Chauffeur Car is a high-end ground transportation platform built for an Australian client operating across major cities. The platform allows corporate and personal clients to book luxury chauffeurs online — choosing from a premium fleet of Mercedes, BMW, Audi, and Lexus vehicles — with transparent fixed pricing and real-time availability.',
    challenge: 'The client\'s existing booking process was entirely phone-based, limiting growth and creating a friction-heavy experience for corporate clients who expected a modern digital solution. They needed a platform that reflected the premium nature of their service while making the booking process fast, transparent, and fully automated.',
    solution: 'We designed and built a modern booking platform with online reservations, real-time fleet selection, live flight tracking for airport transfers, and instant booking confirmation. The design language mirrors the luxury positioning of the brand — clean, minimal, and authoritative. The fixed pricing engine eliminates billing ambiguity and builds trust from the first interaction.',
    results: [
      'Online booking platform launched and live for Australian corporate and personal clients',
      'Real-time flight tracking integrated for seamless airport transfer coordination',
      'Fixed pricing engine eliminates billing confusion and reduces client friction',
      '24/7 availability clearly communicated across all booking flows to capture after-hours demand',
    ],
  },
  {
    slug: 'priority-carpet-clean',
    title: 'Priority Carpet Clean',
    client: 'Priority Carpet Cleaning LLC',
    category: 'Home Services',
    year: '2024',
    tagline: 'A professional cleaning service website with a fully integrated custom booking system — built for a US-based client to capture leads around the clock.',
    image: '/images/prioritycarpet.jpg',
    services: ['Web Development', 'Booking System Integration', 'UI/UX Design', 'SEO'],
    tags: ['WordPress', 'PHP', 'Custom Booking', 'CSS3'],
    href: 'https://prioritycarpetclean.com/',
    overview: 'Priority Carpet Cleaning is a professional home cleaning service based in the United States, offering carpet, tile, hardwood, upholstery, and rug cleaning using hot water extraction technology. We built their complete digital presence — including a service showcase, customer testimonials, and a fully integrated custom online booking system.',
    challenge: 'The client was relying almost entirely on phone calls to generate bookings, meaning missed opportunities outside business hours and no structured way to capture leads online. They needed a professional website that could convert visitors into booked customers automatically, without requiring ongoing technical management.',
    solution: 'We built a clean, conversion-focused WordPress website with clearly structured service pages, customer review integration, and a fully customised booking system. The booking flow allows customers to select their service type, preferred date, and contact details — generating instant enquiries. The site was optimised for local SEO to help the business rank for cleaning-related queries across the US.',
    results: [
      'Custom online booking system live and capturing qualified leads 24/7',
      'Service catalogue structured with dedicated SEO-optimised pages for each service type',
      'Customer testimonials and review integration to build trust and drive conversions',
      'Local SEO optimisation applied across all pages for improved US market visibility',
    ],
  },
]
