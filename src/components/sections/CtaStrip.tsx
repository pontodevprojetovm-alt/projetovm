import { ArrowRight } from "lucide-react";

interface CtaStripProps {
  headline: string;
  sub?: string;
  ctaLabel?: string;
  ctaHref?: string;
  dark?: boolean;
  subtitle?: string;
}

export const CtaStrip = ({
  headline,
  sub,
  ctaLabel = "Solicitar Orçamento",
  ctaHref = "#agende",
  dark = false,
  subtitle,
}: CtaStripProps) => (
  <section
    className="relative overflow-hidden py-16 md:py-20"
    style={{ background: dark ? "hsl(220 26% 5%)" : "hsl(222 28% 4%)" }}
  >
    {/* Grid texture */}
    <div className="absolute inset-0 bg-grid-fine opacity-60 pointer-events-none" />

    {/* Ambient glow */}
    <div
      className="orb absolute"
      style={{
        width: "600px",
        height: "200px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "radial-gradient(ellipse, hsl(213 100% 52% / 0.06) 0%, transparent 70%)",
        filter: "blur(50px)",
      }}
    />

    {/* Top/bottom border lines */}
    <div
      className="absolute top-0 left-0 right-0 h-px pointer-events-none"
      style={{ background: "linear-gradient(90deg, transparent 10%, hsl(213 100% 58% / 0.12) 50%, transparent 90%)" }}
    />
    <div
      className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
      style={{ background: "linear-gradient(90deg, transparent 10%, hsl(213 100% 58% / 0.08) 50%, transparent 90%)" }}
    />

    <div className="relative container-page">
      <div
        className="reveal rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{
          background: "linear-gradient(135deg, hsl(213 100% 52% / 0.08) 0%, hsl(220 28% 7%) 60%, hsl(213 100% 52% / 0.05) 100%)",
          border: "1px solid hsl(213 100% 58% / 0.18)",
          boxShadow: "0 8px 40px -8px hsl(213 100% 52% / 0.12), inset 0 1px 0 hsl(213 100% 80% / 0.05)",
        }}
      >
        <div className="text-center md:text-left">
          <h3
            className="text-2xl md:text-3xl font-extrabold leading-tight"
            style={{
              background: "linear-gradient(160deg, hsl(0 0% 100%) 0%, hsl(210 18% 88%) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {headline}
          </h3>
          {sub && (
            <p className="mt-2 max-w-md" style={{ color: "hsl(213 14% 52%)" }}>
              {sub}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-3 shrink-0 items-center">
          <a
            href={ctaHref}
            className="btn-cinema sweep-hover blue-glow-pulse inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-white font-bold text-sm tracking-wide"
            style={{
              background: "linear-gradient(135deg, hsl(213 100% 52%) 0%, hsl(221 100% 44%) 100%)",
              minWidth: "240px",
              justifyContent: "center",
            }}
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </a>
          {subtitle && (
            <p
              className="text-center"
              style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)" }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  </section>
);
