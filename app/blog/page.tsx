import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "./posts";

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
