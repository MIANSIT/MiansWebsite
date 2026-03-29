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
