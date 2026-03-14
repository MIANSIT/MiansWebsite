import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — Insights on Design, Development & Digital Strategy",
  description:
    "Read the latest insights from MIANS on web development, UI/UX design, IT consulting, digital transformation, and building better digital products.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — MIANS",
    description:
      "Insights on web development, UI/UX design, IT consulting, and digital strategy from the MIANS team.",
    url: "/blog",
  },
  twitter: {
    title: "Blog — MIANS",
    description:
      "Read the latest insights from MIANS on design, development & digital strategy.",
  },
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
};

// Starter content — in a production setup you'd pull this from a CMS or MDX files
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-your-business-needs-a-custom-website",
    title: "Why Your Business Needs a Custom Website in 2026",
    excerpt:
      "Template websites are holding your business back. Learn why a custom-built website tailored to your brand and goals delivers better results, higher conversions, and lasting competitive advantage.",
    date: "2026-03-10",
    category: "Development",
    readTime: "5 min read",
    author: "MIANS Team",
  },
  {
    slug: "the-roi-of-good-ui-ux-design",
    title: "The ROI of Good UI/UX Design: Why It Pays to Invest",
    excerpt:
      "For every $1 invested in UX, companies see a return of $100. Discover how investing in user experience design directly impacts your bottom line through better retention, lower support costs, and higher conversion rates.",
    date: "2026-02-28",
    category: "Design",
    readTime: "7 min read",
    author: "MIANS Team",
  },
  {
    slug: "digital-transformation-roadmap-for-small-businesses",
    title: "A Practical Digital Transformation Roadmap for Small Businesses",
    excerpt:
      "Digital transformation isn't just for enterprises. Here's a step-by-step roadmap that small businesses can follow to modernize operations, reach more customers, and scale efficiently.",
    date: "2026-02-15",
    category: "IT Consulting",
    readTime: "8 min read",
    author: "MIANS Team",
  },
  {
    slug: "nextjs-vs-traditional-websites",
    title: "Next.js vs Traditional Websites: Which Is Right for You?",
    excerpt:
      "Server-side rendering, static generation, edge functions — modern frameworks like Next.js offer massive performance gains. But is it the right choice for every project? We break it down.",
    date: "2026-01-30",
    category: "Development",
    readTime: "6 min read",
    author: "MIANS Team",
  },
  {
    slug: "branding-mistakes-startups-make",
    title: "5 Branding Mistakes Startups Make (and How to Avoid Them)",
    excerpt:
      "Your brand is more than a logo. Many startups rush brand decisions early on — here are the most common mistakes and how to build a brand that grows with your business.",
    date: "2026-01-15",
    category: "Branding",
    readTime: "5 min read",
    author: "MIANS Team",
  },
  {
    slug: "why-seo-matters-for-new-websites",
    title: "SEO from Day One: Why It Matters for New Websites",
    excerpt:
      "Most businesses treat SEO as an afterthought. Learn why building SEO into your website from the very beginning saves time, money, and delivers compounding returns.",
    date: "2026-01-05",
    category: "Digital Strategy",
    readTime: "6 min read",
    author: "MIANS Team",
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section className='pt-36 pb-16 px-6 relative overflow-hidden grid-bg'>
        <div className='max-w-7xl mx-auto relative'>
          <div className='flex items-center gap-3 mb-5'>
            <span className='section-line' />
            <span
              className='font-hind text-sm tracking-widest uppercase'
              style={{ color: "var(--text-secondary)" }}
            >
              Blog
            </span>
          </div>
          <h1
            className='font-poppins font-bold text-5xl lg:text-6xl leading-tight mb-4'
            style={{ color: "var(--text-primary)" }}
          >
            Insights &amp; Ideas
          </h1>
          <p
            className='font-hind text-lg max-w-2xl leading-relaxed'
            style={{ color: "var(--text-secondary)" }}
          >
            Thoughts on design, development, and digital strategy from the MIANS
            team.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className='py-20 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className='group border flex flex-col p-8 transition-all duration-300 hover:border-[var(--border-hover)]'
                style={{
                  borderColor: "var(--border)",
                  background: "var(--bg-card)",
                }}
              >
                {/* Category & date */}
                <div className='flex items-center justify-between mb-4'>
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

                {/* Title */}
                <h2
                  className='font-poppins font-semibold text-lg mb-3 leading-snug group-hover:text-[var(--gray)] transition-colors'
                  style={{ color: "var(--text-primary)" }}
                >
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p
                  className='font-hind text-sm leading-relaxed flex-1 mb-6'
                  style={{ color: "var(--text-secondary)" }}
                >
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div
                  className='flex items-center justify-between pt-4 border-t'
                  style={{ borderColor: "var(--border)" }}
                >
                  <span
                    className='font-hind text-xs'
                    style={{ color: "var(--text-muted)" }}
                  >
                    {formatDate(post.date)}
                  </span>
                  <span
                    className='font-hind text-sm flex items-center gap-1 group-hover:gap-2 transition-all'
                    style={{ color: "var(--text-primary)" }}
                  >
                    Read
                    <svg
                      className='w-3.5 h-3.5'
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
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
