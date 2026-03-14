import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MIANS — Full-Service Digital Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
        fontFamily: "system-ui, -apple-system, sans-serif",
        position: "relative",
      }}
    >
      {/* Grid pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Corner brackets */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 40,
          width: 40,
          height: 40,
          borderTop: "2px solid rgba(255,255,255,0.2)",
          borderLeft: "2px solid rgba(255,255,255,0.2)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 40,
          right: 40,
          width: 40,
          height: 40,
          borderTop: "2px solid rgba(255,255,255,0.2)",
          borderRight: "2px solid rgba(255,255,255,0.2)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 40,
          width: 40,
          height: 40,
          borderBottom: "2px solid rgba(255,255,255,0.2)",
          borderLeft: "2px solid rgba(255,255,255,0.2)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          width: 40,
          height: 40,
          borderBottom: "2px solid rgba(255,255,255,0.2)",
          borderRight: "2px solid rgba(255,255,255,0.2)",
          display: "flex",
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: "white",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          MIANS
        </div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 400,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
          }}
        >
          Reflection of Your Desires
        </div>
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "32px",
            fontSize: 16,
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
          }}
        >
          <span>Web Development</span>
          <span>·</span>
          <span>UI/UX Design</span>
          <span>·</span>
          <span>IT Consulting</span>
          <span>·</span>
          <span>Branding</span>
        </div>
      </div>

      {/* URL */}
      <div
        style={{
          position: "absolute",
          bottom: 48,
          fontSize: 16,
          color: "rgba(255,255,255,0.3)",
          letterSpacing: "0.06em",
        }}
      >
        miansofficial.com
      </div>
    </div>,
    { ...size },
  );
}
