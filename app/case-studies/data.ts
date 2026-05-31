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
    category: 'SaaS',
    year: '2024',
    tagline: 'A smart SaaS platform helping store owners run their entire business — from inventory to analytics — in one unified dashboard.',
    image: '/images/sheiHoise.png',
    services: ['SaaS Development', 'UI/UX Design', 'Backend Architecture'],
    tags: ['Next.js', 'React', 'SaaS', 'Tailwind CSS'],
    href: 'https://www.sheihoise.com/',
    overview: 'Shei Hoise is a full-featured SaaS platform built to modernise how small and medium retail store owners manage their day-to-day operations. The platform consolidates inventory tracking, order management, and business analytics into a single, intuitive dashboard — accessible from any device, with a 7-day free trial and no credit card required.',
    challenge: 'Most retail store owners in the target market were managing their business entirely through spreadsheets and paper records. They needed a modern, affordable, and easy-to-use alternative that could be adopted without any technical expertise. The challenge was designing something powerful enough for business-critical use, yet simple enough for first-time SaaS users.',
    solution: 'We built Shei Hoise as a multi-tenant SaaS platform with a clean React-based dashboard and a robust Next.js backend. The platform includes real-time inventory management, automated order workflows, performance analytics, and a frictionless onboarding experience. Every design decision was made with the non-technical user in mind — minimal cognitive load, clear data hierarchy, and instant value from day one.',
    results: [
      'Launched with a 7-day free trial and no credit card required — maximising early user adoption',
      'Clean multi-tenant architecture capable of supporting hundreds of concurrent store accounts',
      'Positive early feedback on dashboard simplicity and depth of features',
      'Full product delivered and deployed on schedule without compromising quality or scalability',
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
