import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Brand Guidelines — MIANS Identity & Style Guide",
  description:
    "Explore the official MIANS brand guidelines — logo usage, color palette, typography, and visual identity principles.",
  alternates: { canonical: "/brand-guideline" },
  openGraph: {
    title: "Brand Guidelines — MIANS Identity & Style Guide",
    description:
      "Official MIANS brand guidelines covering logo, colors, typography and usage rules.",
    url: "/brand-guideline",
  },
};

const colors = [
  {
    name: "White",
    hex: "#FAFEFF",
    label: "PRIMARY BACKGROUND",
    bg: "#FAFEFF",
    text: "#090909",
    border: true,
  },
  {
    name: "Black",
    hex: "#090909",
    label: "PRIMARY TEXT",
    bg: "#090909",
    text: "#FAFEFF",
    border: false,
  },
  {
    name: "Stone Gray",
    hex: "#50505F",
    label: "DECORATIVE ACCENTS",
    bg: "#50505F",
    text: "#FAFEFF",
    border: false,
  },
  {
    name: "Light Gray",
    hex: "#C0C0C0",
    label: "SUPPORTING ELEMENT",
    bg: "#C0C0C0",
    text: "#090909",
    border: false,
  },
];

const avoidRules = [
  "Horizontal skewing",
  "Vertical skewing",
  "Rotating the logo",
  "Rearranging letterforms",
  "Changing brand colors",
  "Using strokes / outlines",
  "Boxing in the logo",
  "Stretching or distorting",
  "Using both logos together",
];

export default function BrandGuidelinePage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="pt-36 pb-24 px-6 relative overflow-hidden grid-bg">
        {/* decorative blobs */}
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.03] pointer-events-none"
          style={{ background: "var(--text-primary)" }}
        />
        <div
          aria-hidden
          className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.02] pointer-events-none"
          style={{ background: "var(--gray)" }}
        />

        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="section-line" />
            <span
              className="font-hind text-sm tracking-widest uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              Brand Style Guide
            </span>
          </div>

          <h1
            className="font-poppins font-bold text-5xl lg:text-7xl leading-[1.06] mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Brand
            <br />
            <span style={{ color: "var(--text-muted)" }}>Guidelines</span>
          </h1>

          <p
            className="font-hind text-lg max-w-xl leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            The visual and verbal identity of MIANS — a complete reference for
            how to use our logo, colors, and typography consistently across
            every touchpoint.
          </p>

          {/* index chips */}
          <div className="flex flex-wrap gap-3 mt-10">
            {["Mission", "Logo", "Colors", "Typography", "Usage Rules"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(" ", "-")}`}
                className="font-hind text-sm px-4 py-2 rounded-full border transition-colors duration-200 hover:border-opacity-80"
                style={{
                  border: "1px solid var(--border-strong)",
                  color: "var(--text-secondary)",
                  background: "var(--bg-card)",
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION ──────────────────────────────────────── */}
      <section
        id="mission"
        className="py-24 px-6 border-t"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionLabel text="Mission" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="font-poppins font-bold text-3xl lg:text-4xl mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Mission Statement
              </h2>
              <p
                className="font-hind text-xl leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                We are a one stop solution for all your digital needs. Our main
                objective is to satisfy the ever-evolving digital experience of
                your clients and business through our strategies and flexible
                end-to-end services.
              </p>
            </div>

            {/* decorative quote card */}
            <div
              className="relative p-10 rounded-2xl border overflow-hidden"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border)",
              }}
            >
              <span
                className="font-poppins font-bold text-[120px] leading-none absolute -top-6 left-6 select-none pointer-events-none"
                style={{ color: "var(--border)" }}
                aria-hidden
              >
                "
              </span>
              <p
                className="font-poppins font-semibold text-xl leading-relaxed relative z-10"
                style={{ color: "var(--text-primary)" }}
              >
                Reflection of Your Desires.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="section-line" />
                <span
                  className="font-hind text-sm tracking-widest uppercase"
                  style={{ color: "var(--text-muted)" }}
                >
                  MIANS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGO ─────────────────────────────────────────── */}
      <section
        id="logo"
        className="py-24 px-6 border-t"
        style={{
          borderColor: "var(--border)",
          background: "var(--bg-subtle)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionLabel text="Logo" />

          <h2
            className="font-poppins font-bold text-3xl lg:text-4xl mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Logo Construction
          </h2>
          <p
            className="font-hind text-base max-w-2xl leading-relaxed mb-14"
            style={{ color: "var(--text-secondary)" }}
          >
            The logo contains one <strong>wordmark</strong> and one{" "}
            <strong>lettermark</strong>. In most cases the wordmark will be the
            priority to use. The lettermark is reserved for icons, favicons, and
            small-scale applications. Using both together is strictly prohibited.
          </p>

          {/* Wordmark + Lettermark cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Wordmark — dark bg */}
            <div
              className="rounded-2xl border overflow-hidden"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="flex items-center justify-center py-16 px-8"
                style={{ background: "#090909" }}
              >
                <Image
                  src="/logos/logo-inverted.svg"
                  alt="MIANS Wordmark"
                  width={200}
                  height={60}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div
                className="px-6 py-4 flex items-center justify-between border-t"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border)",
                }}
              >
                <div>
                  <p
                    className="font-poppins font-semibold text-sm"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Wordmark
                  </p>
                  <p
                    className="font-hind text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Primary usage — most contexts
                  </p>
                </div>
                <span
                  className="font-hind text-xs px-2 py-1 rounded"
                  style={{
                    background: "var(--border)",
                    color: "var(--text-secondary)",
                  }}
                >
                  ✓ PRIMARY
                </span>
              </div>
            </div>

            {/* Wordmark — light bg */}
            <div
              className="rounded-2xl border overflow-hidden"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="flex items-center justify-center py-16 px-8"
                style={{ background: "#FAFEFF" }}
              >
                <Image
                  src="/logos/logo.svg"
                  alt="MIANS Wordmark Light"
                  width={200}
                  height={60}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div
                className="px-6 py-4 flex items-center justify-between border-t"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border)",
                }}
              >
                <div>
                  <p
                    className="font-poppins font-semibold text-sm"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Wordmark — Light
                  </p>
                  <p
                    className="font-hind text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    On light / white backgrounds
                  </p>
                </div>
                <span
                  className="font-hind text-xs px-2 py-1 rounded"
                  style={{
                    background: "var(--border)",
                    color: "var(--text-secondary)",
                  }}
                >
                  ✓ ALT
                </span>
              </div>
            </div>
          </div>

          {/* Lettermark explainer */}
          <div
            className="rounded-2xl border p-8 flex flex-col md:flex-row items-center gap-10"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            {/* SVG Lettermark (drawn inline — no separate asset needed) */}
            <div
              className="flex-shrink-0 w-28 h-28 rounded-full flex items-center justify-center border-[3px]"
              style={{
                borderColor: "var(--text-primary)",
                background: "transparent",
              }}
            >
              <svg
                viewBox="0 0 60 60"
                width="56"
                height="56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Stylised M lettermark matching brand */}
                <path
                  d="M10 46 L10 14 L30 32 L50 14 L50 46"
                  stroke="var(--text-primary)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>

            <div>
              <p
                className="font-poppins font-semibold text-lg mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                Lettermark
              </p>
              <p
                className="font-hind text-sm leading-relaxed max-w-lg"
                style={{ color: "var(--text-secondary)" }}
              >
                A typography-based monogram exclusively made up of the brand
                initial. Reserved for icons, favicons, app thumbnails, and other
                small-scale applications where the full wordmark would become
                illegible.
              </p>
              <p
                className="font-hind text-xs mt-3 flex items-center gap-2"
                style={{ color: "var(--text-muted)" }}
              >
                <span
                  className="inline-block w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: "#C0C0C0" }}
                />
                Minimum recommended size: 30 × 30 px
              </p>
            </div>
          </div>

          {/* Minimum size note */}
          <div
            className="mt-6 rounded-xl border p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            {[
              { label: "Wordmark min-width", value: "80px" },
              { label: "Wordmark min-height", value: "20px" },
              { label: "Lettermark min-width", value: "30px" },
              { label: "Lettermark min-height", value: "30px" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p
                  className="font-poppins font-bold text-2xl"
                  style={{ color: "var(--text-primary)" }}
                >
                  {value}
                </p>
                <p
                  className="font-hind text-xs mt-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLORS ───────────────────────────────────────── */}
      <section
        id="colors"
        className="py-24 px-6 border-t"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionLabel text="Colors" />

          <h2
            className="font-poppins font-bold text-3xl lg:text-4xl mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            The Color Palette
          </h2>
          <p
            className="font-hind text-base max-w-2xl leading-relaxed mb-14"
            style={{ color: "var(--text-secondary)" }}
          >
            Intentionally minimal — a tight palette keeps the brand visuals
            focused and avoids dilution. Every color has a defined role.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {colors.map((c) => (
              <div
                key={c.hex}
                className="group rounded-2xl overflow-hidden border transition-transform duration-300 hover:-translate-y-1"
                style={{ borderColor: "var(--border)" }}
              >
                {/* Swatch */}
                <div
                  className="h-36"
                  style={{
                    background: c.bg,
                    border: c.border ? "1px solid #E0E0E8" : undefined,
                  }}
                />
                {/* Meta */}
                <div
                  className="p-5"
                  style={{ background: "var(--bg-card)" }}
                >
                  <p
                    className="font-poppins font-semibold text-base mb-0.5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {c.name}
                  </p>
                  <p
                    className="font-hind text-xs mb-3"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {c.label}
                  </p>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-hind text-sm tracking-wider"
                    style={{
                      background: "var(--bg-subtle)",
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <span
                      className="inline-block w-3 h-3 rounded-full flex-shrink-0 border"
                      style={{
                        background: c.bg,
                        borderColor: c.border ? "#D0D0D8" : "transparent",
                      }}
                    />
                    {c.hex}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Usage note */}
          <div
            className="mt-10 rounded-2xl border p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            {[
              {
                swatch: "#090909",
                title: "Text & Foreground",
                desc: "Black (#090909) is used for all primary text, icons, and foreground elements on light backgrounds.",
                border: false,
              },
              {
                swatch: "#FAFEFF",
                title: "Backgrounds & Surfaces",
                desc: "White (#FAFEFF) is the default canvas. Use it for page backgrounds and card surfaces in light contexts.",
                border: true,
              },
              {
                swatch: "#50505F",
                title: "Decorative Accents Only",
                desc: "Stone Gray (#50505F) is reserved exclusively for borders, dividers, and decorative SVG elements.",
                border: false,
              },
            ].map(({ swatch, title, desc, border }) => (
              <div key={title} className="flex gap-4">
                <div
                  className="w-8 h-8 rounded-lg flex-shrink-0 mt-1 border"
                  style={{
                    background: swatch,
                    borderColor: border ? "#C0C0C0" : "transparent",
                  }}
                />
                <div>
                  <p
                    className="font-poppins font-semibold text-sm mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {title}
                  </p>
                  <p
                    className="font-hind text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TYPOGRAPHY ───────────────────────────────────── */}
      <section
        id="typography"
        className="py-24 px-6 border-t"
        style={{
          borderColor: "var(--border)",
          background: "var(--bg-subtle)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionLabel text="Typography" />

          <h2
            className="font-poppins font-bold text-3xl lg:text-4xl mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Typography — Fonts
          </h2>
          <p
            className="font-hind text-base max-w-2xl leading-relaxed mb-14"
            style={{ color: "var(--text-secondary)" }}
          >
            Two complementary typefaces form the typographic system.{" "}
            <strong>Poppins</strong> drives all headlines for bold visual impact;{" "}
            <strong>Hind</strong> handles all body copy for maximum legibility.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Poppins */}
            <div
              className="rounded-2xl border overflow-hidden"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="p-10 border-b"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border)",
                }}
              >
                <p
                  className="font-poppins font-bold"
                  style={{
                    fontSize: "clamp(56px, 8vw, 96px)",
                    lineHeight: 1,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Aa
                </p>
              </div>
              <div
                className="p-8"
                style={{ background: "var(--bg-card)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <p
                    className="font-poppins font-semibold text-lg"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Poppins
                  </p>
                  <span
                    className="font-hind text-xs px-3 py-1 rounded-full"
                    style={{
                      background: "var(--bg-subtle)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    HEADLINES
                  </span>
                </div>
                <p
                  className="font-poppins text-sm leading-relaxed mb-5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Geometric sans-serif. Nearly monolinear letterforms with
                  optical corrections applied where necessary to maintain even
                  typographic color.
                </p>
                <div className="space-y-1">
                  {[
                    { weight: "300", label: "Light" },
                    { weight: "400", label: "Regular" },
                    { weight: "500", label: "Medium" },
                    { weight: "600", label: "SemiBold" },
                    { weight: "700", label: "Bold" },
                  ].map(({ weight, label }) => (
                    <div key={weight} className="flex items-baseline gap-3">
                      <span
                        className="font-hind text-xs w-16 flex-shrink-0"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {weight}
                      </span>
                      <span
                        className="font-poppins text-base"
                        style={{ fontWeight: weight, color: "var(--text-primary)" }}
                      >
                        {label} — The quick brown fox
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hind */}
            <div
              className="rounded-2xl border overflow-hidden"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="p-10 border-b"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border)",
                }}
              >
                <p
                  className="font-hind"
                  style={{
                    fontSize: "clamp(56px, 8vw, 96px)",
                    lineHeight: 1,
                    color: "var(--text-primary)",
                    fontWeight: 400,
                  }}
                >
                  Aa
                </p>
              </div>
              <div
                className="p-8"
                style={{ background: "var(--bg-card)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <p
                    className="font-poppins font-semibold text-lg"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Hind
                  </p>
                  <span
                    className="font-hind text-xs px-3 py-1 rounded-full"
                    style={{
                      background: "var(--bg-subtle)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    BODY TEXT
                  </span>
                </div>
                <p
                  className="font-hind text-sm leading-relaxed mb-5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Humanist-style construction with monolinear strokes and flat
                  endings. Developed for UI text — extremely legible at small
                  sizes across digital screens.
                </p>
                <div className="space-y-1">
                  {[
                    { weight: "300", label: "Light" },
                    { weight: "400", label: "Regular" },
                    { weight: "500", label: "Medium" },
                    { weight: "600", label: "SemiBold" },
                    { weight: "700", label: "Bold" },
                  ].map(({ weight, label }) => (
                    <div key={weight} className="flex items-baseline gap-3">
                      <span
                        className="font-hind text-xs w-16 flex-shrink-0"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {weight}
                      </span>
                      <span
                        className="font-hind text-base"
                        style={{ fontWeight: weight, color: "var(--text-primary)" }}
                      >
                        {label} — The quick brown fox
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Type scale */}
          <div
            className="mt-6 rounded-2xl border p-8"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            <p
              className="font-poppins font-semibold text-sm mb-6 tracking-widest uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              Type Scale
            </p>
            <div className="space-y-5 divide-y" style={{ borderColor: "var(--border)" }}>
              {[
                { sample: "Display Heading", size: "text-6xl", weight: "font-bold", font: "font-poppins", tag: "H1 / 60px" },
                { sample: "Section Title", size: "text-4xl", weight: "font-bold", font: "font-poppins", tag: "H2 / 36px" },
                { sample: "Card Heading", size: "text-2xl", weight: "font-semibold", font: "font-poppins", tag: "H3 / 24px" },
                { sample: "Body copy for paragraphs and descriptions", size: "text-base", weight: "font-normal", font: "font-hind", tag: "Body / 16px" },
                { sample: "Caption and label text", size: "text-sm", weight: "font-normal", font: "font-hind", tag: "Small / 14px" },
              ].map(({ sample, size, weight, font, tag }) => (
                <div key={tag} className="flex items-baseline justify-between gap-4 pt-5 first:pt-0">
                  <span
                    className={`${size} ${weight} ${font} leading-tight`}
                    style={{ color: "var(--text-primary)" }}
                  >
                    {sample}
                  </span>
                  <span
                    className="font-hind text-xs flex-shrink-0"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── USAGE RULES ──────────────────────────────────── */}
      <section
        id="usage-rules"
        className="py-24 px-6 border-t"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionLabel text="Usage Rules" />

          <h2
            className="font-poppins font-bold text-3xl lg:text-4xl mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Logo — What to Avoid
          </h2>
          <p
            className="font-hind text-base max-w-2xl leading-relaxed mb-14"
            style={{ color: "var(--text-secondary)" }}
          >
            To maintain the integrity of the brand, always use the approved logo
            files without modification. The following practices are strictly
            prohibited.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {avoidRules.map((rule) => (
              <div
                key={rule}
                className="flex items-center gap-4 rounded-xl border px-5 py-4 transition-colors duration-200 hover:border-opacity-60"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border)",
                }}
              >
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-poppins font-bold text-sm"
                  style={{ background: "rgba(220,38,38,0.12)", color: "#F87171" }}
                >
                  ✕
                </span>
                <span
                  className="font-hind text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {rule}
                </span>
              </div>
            ))}
          </div>

          {/* Do's */}
          <div
            className="mt-10 rounded-2xl border p-8"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            <p
              className="font-poppins font-semibold text-sm mb-6 tracking-widest uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              Best Practices
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Always use original, unmodified logo files",
                "Maintain clear space around the logo at all times",
                "Use wordmark as the primary logo in most contexts",
                "Use lettermark only for icons and favicons",
                "Apply logo in approved colors only (black or white)",
                "Ensure sufficient contrast with the background",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5"
                    style={{ background: "rgba(34,197,94,0.15)", color: "#4ADE80" }}
                  >
                    ✓
                  </span>
                  <span
                    className="font-hind text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD CTA ─────────────────────────────────── */}
      <section
        className="py-24 px-6 border-t"
        style={{
          borderColor: "var(--border)",
          background: "var(--bg-subtle)",
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="section-line" />
            <span
              className="font-hind text-sm tracking-widest uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              Questions?
            </span>
            <span className="section-line" />
          </div>
          <h2
            className="font-poppins font-bold text-3xl lg:text-4xl mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Need brand assets or have a question?
          </h2>
          <p
            className="font-hind text-base max-w-lg mx-auto leading-relaxed mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Reach out to us and we&apos;ll provide the official files and any
            clarification on brand usage.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 font-hind font-semibold px-8 py-4 rounded-xl transition-opacity duration-200 hover:opacity-90"
            style={{
              background: "var(--btn-bg)",
              color: "var(--btn-text)",
            }}
          >
            Get in touch
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ── shared sub-component ──────────────────────────────── */
function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="section-line" />
      <span
        className="font-hind text-sm tracking-widest uppercase"
        style={{ color: "var(--text-muted)" }}
      >
        {text}
      </span>
    </div>
  );
}
