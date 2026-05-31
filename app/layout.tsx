import type { Metadata, Viewport } from "next";
import { Poppins, Hind } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});
const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
  display: "swap",
});

const SITE_URL = "https://www.miansofficial.com";
const SITE_NAME = "MIANS";
const DEFAULT_DESCRIPTION =
  "MIANS is a full-service digital agency offering custom web & app development, UI/UX design, IT consulting, branding, and e-commerce solutions. Reflection of Your Desires.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MIANS — Reflection of Your Desires | Digital Agency",
    template: "%s | MIANS",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "MIANS",
    "MIANS official",
    "digital agency",
    "web development",
    "app development",
    "UI/UX design",
    "IT consulting",
    "branding",
    "e-commerce",
    "custom software",
    "digital transformation",
    "web applications",
    "brand identity",
    "Next.js development",
    "React development",
    "SaaS development",
    "mobile app development",
    "booking system development",
    "startup agency",
    "full-stack development",
    "custom booking platform",
    "restaurant website",
    "transport booking platform",
    "home services website",
    "Australian web agency",
    "USA web agency",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "MIANS — Reflection of Your Desires | Digital Agency",
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    site: "@mians_official",
    creator: "@mians_official",
    title: "MIANS — Reflection of Your Desires | Digital Agency",
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/assets/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/assets/favicon.ico",
    apple: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "MIANS",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.miansofficial.com/#organization",
        name: "MIANS",
        url: "https://www.miansofficial.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.miansofficial.com/logos/logo.svg",
        },
        foundingDate: "2020-07-20",
        description:
          "MIANS is a full-service digital agency offering custom web & app development, UI/UX design, IT consulting, branding, and e-commerce solutions.",
        areaServed: "Worldwide",
        sameAs: [
          "https://www.linkedin.com/company/mians-official/",
          "https://x.com/mians_official",
          "https://www.facebook.com/miansofficial",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          url: "https://www.miansofficial.com/contact",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital Agency Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Web Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Consulting" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Branding & Identity" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-Commerce Solutions" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Booking System Development" } },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.miansofficial.com/#website",
        url: "https://www.miansofficial.com",
        name: "MIANS",
        publisher: {
          "@id": "https://www.miansofficial.com/#organization",
        },
      },
    ],
  };

  return (
    <html
      lang='en'
      className={`${poppins.variable} ${hind.variable} light`}
      suppressHydrationWarning
    >
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className='font-hind'>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
