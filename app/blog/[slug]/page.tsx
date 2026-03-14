import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type BlogPostFull = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  content: string[];
};

const BLOG_POSTS: BlogPostFull[] = [
  {
    slug: "why-your-business-needs-a-custom-website",
    title: "Why Your Business Needs a Custom Website in 2026",
    excerpt:
      "Template websites are holding your business back. Learn why a custom-built website tailored to your brand and goals delivers better results, higher conversions, and lasting competitive advantage.",
    date: "2026-03-10",
    category: "Development",
    readTime: "5 min read",
    author: "MIANS Team",
    content: [
      "In 2026, your website is often the first — and sometimes the only — interaction a potential customer has with your business. Template-based websites might get you online quickly, but they come with significant trade-offs that impact your growth.",
      "Custom websites are built around your specific business goals, brand identity, and user needs. Unlike templates, they don't force you into a rigid structure. Every page, every interaction, every element serves a purpose aligned with your strategy.",
      "Performance is another critical factor. Template websites carry bloated code, unnecessary plugins, and generic stylesheets that slow down your site. Google's Core Web Vitals directly impact your search rankings — a custom-built site, optimized from the ground up, gives you a real competitive edge.",
      "Then there's branding. A template might look \"professional,\" but it won't look like you. When every competitor uses the same handful of templates, standing out becomes impossible. A custom website communicates credibility, uniqueness, and attention to detail.",
      "Security matters too. Templates often rely on third-party plugins that can introduce vulnerabilities. A custom solution means you control exactly what code runs on your site, reducing attack surfaces and compliance risks.",
      "The ROI of a custom website compounds over time. Better performance means better SEO. Better branding means better recall. Better UX means higher conversions. It's an investment that pays for itself — and then some.",
      "At MIANS, we specialize in building custom websites that reflect your business vision. From strategy and design to development and deployment, we handle every step. Ready to stand out? Get in touch.",
    ],
  },
  {
    slug: "the-roi-of-good-ui-ux-design",
    title: "The ROI of Good UI/UX Design: Why It Pays to Invest",
    excerpt:
      "For every $1 invested in UX, companies see a return of $100. Discover how investing in user experience design directly impacts your bottom line.",
    date: "2026-02-28",
    category: "Design",
    readTime: "7 min read",
    author: "MIANS Team",
    content: [
      "The often-cited statistic — a $100 return for every $1 invested in UX — comes from research by Forrester. But what does this actually look like in practice? The ROI of good design manifests in multiple measurable ways.",
      "First, reduced development costs. Fixing a problem during design costs 10x less than fixing it during development, and 100x less than fixing it post-launch. Well-researched UX design catches usability issues before they become expensive engineering problems.",
      "Customer retention is another major factor. A well-designed interface reduces friction, builds trust, and makes users want to come back. Research shows that 88% of online consumers are less likely to return after a bad experience.",
      "Conversion rates directly tie to UX quality. Improving your checkout flow, simplifying navigation, or streamlining a sign-up process can boost conversions by 200% or more. These aren't hypothetical numbers — they're consistent findings across industries.",
      "Support costs drop when products are intuitive. Every confusing interface element generates support tickets. Good UX design eliminates confusion before it happens, freeing your support team to handle genuinely complex issues.",
      "Brand perception matters more than ever in 2026. Your digital product IS your brand for many users. A polished, thoughtful interface communicates competence and care. A clunky one communicates the opposite — regardless of how good your service actually is.",
      "The bottom line: UX design isn't a one-time expense. It's a lever that improves every metric that matters — acquisition, activation, retention, revenue, and referral. At MIANS, design isn't decoration — it's strategy.",
    ],
  },
  {
    slug: "digital-transformation-roadmap-for-small-businesses",
    title: "A Practical Digital Transformation Roadmap for Small Businesses",
    excerpt:
      "Digital transformation isn't just for enterprises. Here's a step-by-step roadmap for small businesses.",
    date: "2026-02-15",
    category: "IT Consulting",
    readTime: "8 min read",
    author: "MIANS Team",
    content: [
      "Digital transformation sounds like a buzzword reserved for Fortune 500 companies, but it's equally critical for small businesses. In fact, smaller organizations often have the agility advantage — they can adopt new tools and processes faster than their larger counterparts.",
      "Step 1: Audit your current state. Before you change anything, understand what you have. Map out every tool, process, and workflow. Identify what's manual, what's duplicated, and what's causing friction.",
      'Step 2: Define clear goals. "Going digital" isn\'t a goal. Reducing invoice processing time by 60% is. Increasing online sales by 40% is. Specific, measurable objectives keep your transformation focused and accountable.',
      "Step 3: Start with quick wins. You don't need to overhaul everything at once. Automating email responses, setting up online booking, or digitizing paper forms can deliver immediate value and build momentum.",
      "Step 4: Invest in your web presence. Your website is your 24/7 salesperson. Make sure it's fast, mobile-friendly, and designed to convert visitors into customers. This is non-negotiable in 2026.",
      "Step 5: Leverage cloud tools. Move from desktop-bound software to cloud-based solutions. Google Workspace, project management tools, and cloud accounting save time and enable remote work.",
      "Step 6: Measure and iterate. Digital transformation isn't a one-time project — it's an ongoing process. Track your KPIs, gather feedback, and continuously improve. The businesses that thrive are the ones that keep evolving.",
      "At MIANS, we've helped businesses across Bangladesh, Belgium, and the USA navigate their digital transformation journey. Whether you need a roadmap, a website, or a custom application, we're here to help.",
    ],
  },
  {
    slug: "nextjs-vs-traditional-websites",
    title: "Next.js vs Traditional Websites: Which Is Right for You?",
    excerpt:
      "Modern frameworks like Next.js offer massive performance gains. But is it the right choice for every project?",
    date: "2026-01-30",
    category: "Development",
    readTime: "6 min read",
    author: "MIANS Team",
    content: [
      "The web development landscape has changed dramatically. Next.js, a React-based framework, has emerged as a leading choice for modern websites. But does it make sense for every project? Let's break it down.",
      "Traditional websites — built with HTML, CSS, and perhaps WordPress — are straightforward. They work well for simple content sites, blogs, and small business pages. The ecosystem is mature, hosting is cheap, and finding developers is easy.",
      "Next.js brings server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR) to the table. This means your pages can be pre-rendered for instant loading, dynamically updated without full rebuilds, and served from edge servers worldwide.",
      "Performance is where Next.js truly shines. Automatic code splitting means users only download the JavaScript they need. Image optimization is built-in. The framework is designed from the ground up for Core Web Vitals compliance.",
      'SEO benefits are significant. SSR and SSG ensure that search engines see fully-rendered content — no more "render budget" concerns associated with client-side React apps. The metadata API in Next.js makes managing titles, descriptions, and Open Graph tags effortless.',
      "The trade-off is complexity. Next.js requires JavaScript/React knowledge, has a steeper learning curve, and hosting options are more specific (Vercel, AWS, etc.). For a simple 5-page brochure site, it might be overkill.",
      "Our recommendation: if your site needs dynamic content, excellent performance, strong SEO, or will grow into a web application — choose Next.js. For simple static content with no interactivity needs, a traditional approach may suffice. At MIANS, we use Next.js for most projects because our clients deserve the best performance and SEO foundation available.",
    ],
  },
  {
    slug: "branding-mistakes-startups-make",
    title: "5 Branding Mistakes Startups Make (and How to Avoid Them)",
    excerpt:
      "Your brand is more than a logo. Here are the most common branding mistakes startups make.",
    date: "2026-01-15",
    category: "Branding",
    readTime: "5 min read",
    author: "MIANS Team",
    content: [
      'Branding is the foundation of how the world perceives your business. Yet many startups treat it as an afterthought — something to "figure out later" after they have product-market fit. That\'s mistake number zero.',
      "Mistake #1: Confusing a logo with a brand. Your logo is one element of your brand, not the whole thing. A brand encompasses your voice, colors, typography, messaging, values, and the emotion you evoke. Without a cohesive system, you look inconsistent.",
      "Mistake #2: Trying to appeal to everyone. When your brand tries to speak to everyone, it speaks to no one. The most successful brands have a clear point of view and a defined audience. Narrowing your focus sharpens your message.",
      "Mistake #3: Ignoring brand guidelines. You create a nice logo, choose some colors, and then… everyone on the team uses them differently. Without documented brand guidelines, consistency erodes with every new employee, contractor, or social media post.",
      "Mistake #4: Chasing trends over identity. Trends come and go. If you redesign your brand every year to match the latest design fad, you lose recognition. Build a timeless foundation that evolves thoughtfully, not reactively.",
      "Mistake #5: Skipping the strategy. Jumping straight into visual design without defining your brand strategy (positioning, personality, competitor landscape) is like building a house without blueprints. It might look okay, but the structure won't hold.",
      "At MIANS, we approach branding as a strategic exercise, not just a design task. From PawfectBD to our own brand identity, we practice what we preach. If your startup needs a brand that lasts, let's talk.",
    ],
  },
  {
    slug: "why-seo-matters-for-new-websites",
    title: "SEO from Day One: Why It Matters for New Websites",
    excerpt:
      "Most businesses treat SEO as an afterthought. Learn why building SEO in from the start saves time and money.",
    date: "2026-01-05",
    category: "Digital Strategy",
    readTime: "6 min read",
    author: "MIANS Team",
    content: [
      'Here\'s a common scenario: a business launches a beautiful new website, waits for traffic, and… crickets. Then, months later, they hire an SEO consultant to "fix" things. The consultant finds structural issues that require significant rework. Time and money wasted.',
      "SEO isn't a feature you bolt on after launch. It's a structural consideration that should inform your site architecture, content strategy, URL structure, and technical setup from the very first sprint.",
      "Technical SEO starts with your code. Proper semantic HTML, fast load times, mobile responsiveness, structured data (JSON-LD), XML sitemaps, canonical URLs, and meta tags — these aren't afterthoughts. They're requirements. And they're much easier to implement correctly the first time than to retrofit.",
      "Content architecture matters. Your heading hierarchy (H1, H2, H3), internal linking structure, and URL patterns all signal to search engines what your pages are about and how they relate to each other. Getting this wrong early creates a debt that compounds over time.",
      "Core Web Vitals are now a ranking factor. Google measures your Largest Contentful Paint, First Input Delay, and Cumulative Layout Shift. If your website is slow or janky, you'll be penalized in search results — no amount of keyword optimization can compensate.",
      "Local SEO is critical for service businesses. Proper NAP (Name, Address, Phone) consistency, Google Business Profile optimization, and location-specific landing pages should be part of your launch plan if you serve local customers.",
      "The compound effect of good SEO is powerful. Every month you wait to implement proper SEO is a month of organic traffic you've lost forever. Start right, start early. At MIANS, SEO is baked into every website we build — not sprinkled on top.",
    ],
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
      tags: [post.category],
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://www.miansofficial.com",
    },
    publisher: {
      "@type": "Organization",
      name: "MIANS",
      url: "https://www.miansofficial.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.miansofficial.com/logos/logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.miansofficial.com/blog/${post.slug}`,
    },
    articleSection: post.category,
  };

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Article Header */}
      <section className='pt-36 pb-12 px-6 relative overflow-hidden grid-bg'>
        <div className='max-w-3xl mx-auto relative'>
          <Link
            href='/blog'
            className='inline-flex items-center gap-2 font-hind text-sm mb-8 hover:gap-3 transition-all'
            style={{ color: "var(--text-secondary)" }}
          >
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
                d='M7 16l-4-4m0 0l4-4m-4 4h18'
              />
            </svg>
            Back to Blog
          </Link>

          <div className='flex items-center gap-3 mb-4'>
            <span
              className='font-hind text-xs tracking-widest uppercase px-2 py-1 border'
              style={{
                borderColor: "var(--border)",
                color: "var(--text-secondary)",
              }}
            >
              {post.category}
            </span>
            <span
              className='font-hind text-xs'
              style={{ color: "var(--text-muted)" }}
            >
              {post.readTime}
            </span>
          </div>

          <h1
            className='font-poppins font-bold text-4xl lg:text-5xl leading-tight mb-4'
            style={{ color: "var(--text-primary)" }}
          >
            {post.title}
          </h1>

          <div className='flex items-center gap-4'>
            <span
              className='font-hind text-sm'
              style={{ color: "var(--text-secondary)" }}
            >
              {post.author}
            </span>
            <span style={{ color: "var(--text-muted)" }}>·</span>
            <time
              className='font-hind text-sm'
              style={{ color: "var(--text-muted)" }}
              dateTime={post.date}
            >
              {formatDate(post.date)}
            </time>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className='py-12 px-6'>
        <div className='max-w-3xl mx-auto'>
          <div className='space-y-6'>
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className='font-hind text-base leading-relaxed'
                style={{
                  color:
                    i === 0 ? "var(--text-primary)" : "var(--text-secondary)",
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share / CTA */}
          <div
            className='mt-16 pt-8 border-t'
            style={{ borderColor: "var(--border)" }}
          >
            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6'>
              <div>
                <p
                  className='font-poppins font-semibold text-lg mb-1'
                  style={{ color: "var(--text-primary)" }}
                >
                  Enjoyed this article?
                </p>
                <p
                  className='font-hind text-sm'
                  style={{ color: "var(--text-secondary)" }}
                >
                  Follow us on social media for more insights.
                </p>
              </div>
              <Link
                href='/contact'
                className='btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold'
              >
                Work with Us
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
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
