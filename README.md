# MIANS Website

Modern website for MIANS Digital Agency — built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Fonts**: Poppins (headlines) + Hind (body) — Google Fonts
- **Animations**: CSS animations + Intersection Observer API

## Brand Guidelines
- **Colors**: White `#FAFEFF`, Black `#090909`, Stone `#50505F`, Gray `#C0C0C0`
- **Fonts**: Poppins (headings), Hind (body text)

## Pages
- `/` — Home (Hero, Services, Products, Projects, Expertise, About, Testimonials, CTA)
- `/contact` — Contact form
- `/privacy` — Privacy policy

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
mians-website/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + animations
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   ├── privacy/
│   │   └── page.tsx        # Privacy policy page
│   └── not-found.tsx       # 404 page
├── components/
│   ├── Navbar.tsx           # Responsive sticky navbar
│   ├── Footer.tsx           # Footer with social links
│   ├── AnimatedSection.tsx  # Scroll-reveal wrapper
│   ├── CounterStat.tsx      # Animated number counter
│   ├── ContactForm.tsx      # Contact form with service selection
│   └── sections/
│       ├── HeroSection.tsx
│       ├── ServicesSection.tsx
│       ├── ProductsSection.tsx
│       ├── ProjectsSection.tsx
│       ├── ExpertiseSection.tsx
│       ├── AboutSection.tsx
│       ├── TestimonialsSection.tsx
│       └── CTASection.tsx
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## Deployment
Deploy on [Vercel](https://vercel.com) for best Next.js performance:
```bash
npm i -g vercel
vercel
```
