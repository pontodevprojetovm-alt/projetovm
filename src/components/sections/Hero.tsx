import { useState, useEffect } from "react";
import viniPhoto from "@/assets/vini2.png";

const DroneLabel = () => (
  <div
    className="mt-4"
    style={{
      opacity: 0,
      animation: "fade-in-up 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 420ms forwards",
    }}
  >
    <div
      className="relative rounded-xl overflow-hidden"
      style={{
        border: "1px solid hsl(220 24% 14%)",
        background: "hsl(220 26% 6%)",
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(213 100% 70% / 0.5), transparent)",
        }}
      />

      <div className="flex items-center gap-3 px-4 py-3">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className="h-7 w-7 shrink-0"
          style={{ color: "hsl(213 100% 62%)" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
        <div className="flex-1 min-w-0">
          <p
            className="text-base font-black leading-tight"
            style={{
              background: "linear-gradient(160deg, hsl(213 100% 90%) 0%, hsl(213 100% 65%) 40%, hsl(221 100% 58%) 70%, hsl(213 100% 75%) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Captação com Drone
          </p>
          <p className="text-xs mt-0.5 leading-snug" style={{ color: "hsl(213 14% 50%)" }}>
            Imagens aéreas cinematográficas em 4K
          </p>
        </div>
      </div>
    </div>
  </div>
);

const headlines = [
  "Transformo vídeos em vendas reais",
  "Sua marca com presença profissional",
  "Conteúdo que gera autoridade",
  "Impacto visual que posiciona",
];

const trustBadges = [
  { icon: "clock", text: "Atendimento rápido" },
  { icon: "film", text: "Conteúdo profissional" },
  { icon: "building", text: "Especialista imobiliário" },
  { icon: "trending", text: "Vídeos pensados para vender" },
];

const TrustIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactNode> = {
    clock: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    film: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    building: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    trending: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  };
  return <>{icons[type]}</>;
};

const RotatingHeadline = () => {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"visible" | "exit" | "enter">("visible");

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase("exit");
      setTimeout(() => {
        setIdx((prev) => (prev + 1) % headlines.length);
        setPhase("enter");
        setTimeout(() => setPhase("visible"), 50);
      }, 360);
    }, 3400);
    return () => clearInterval(interval);
  }, []);

  const style: React.CSSProperties = {
    opacity: phase === "exit" ? 0 : 1,
    transform:
      phase === "exit"
        ? "translateY(-8px) scale(0.99)"
        : phase === "enter"
        ? "translateY(8px) scale(0.99)"
        : "translateY(0) scale(1)",
    transition:
      phase === "exit"
        ? "opacity 0.36s ease, transform 0.36s ease"
        : "opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  };

  return (
    <span className="text-gradient-blue block" style={style}>
      {headlines[idx]}
    </span>
  );
};

export const Hero = () => (
  <section
    id="top"
    className="relative min-h-screen overflow-hidden"
    style={{ background: "hsl(222, 40%, 2%)" }}
  >
    {/* Mobile background photo */}
    <div
      className="absolute inset-0 md:hidden"
      style={{
        backgroundImage: `url(${viniPhoto})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    />
    {/* Mobile overlay */}
    <div
      className="absolute inset-0 md:hidden"
      style={{
        background: "linear-gradient(to top, hsl(222 40% 2%) 30%, hsl(222 28% 4% / 0.75) 70%, hsl(222 28% 4% / 0.55) 100%)",
      }}
    />

    {/* Grid textures */}
    <div className="absolute inset-0 bg-grid-fine pointer-events-none opacity-60" />
    <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

    {/* Ambient orbs */}
    <div
      className="orb drift-slow absolute pointer-events-none"
      style={{
        width: "700px",
        height: "400px",
        top: "-80px",
        left: "10%",
        background: "radial-gradient(ellipse, hsl(213 100% 52% / 0.07) 0%, transparent 68%)",
        filter: "blur(60px)",
      }}
    />
    <div
      className="orb drift-slow-reverse absolute pointer-events-none"
      style={{
        width: "400px",
        height: "400px",
        bottom: "10%",
        left: "-5%",
        background: "radial-gradient(ellipse, hsl(221 100% 44% / 0.05) 0%, transparent 70%)",
        filter: "blur(80px)",
      }}
    />

    {/* Desktop layout: left content + right photo */}
    <div className="relative min-h-screen flex items-stretch">

      {/* Left column — text content */}
      <div className="relative z-10 w-full md:w-[55%] flex flex-col justify-center pt-28 pb-20 px-6 lg:pl-16 xl:pl-24">
        <div className="max-w-xl">
          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-black leading-[1.02] text-white animate-fade-in-up"
            style={{ animationDelay: "60ms", minHeight: "1.15em" }}
          >
            <RotatingHeadline />
          </h1>

          {/* Subheadline */}
          <p
            className="text-base sm:text-lg leading-relaxed animate-fade-in-up md:mt-5"
            style={{ animationDelay: "140ms", color: "hsl(213 14% 58%)" }}
          >
            Produção audiovisual estratégica<br />
            <span style={{ color: "hsl(38 91% 60%)", fontWeight: 700 }}>
              Imagens que fortalecem posicionamento
            </span>
              {" "}
            <span style={{ color: "hsl(213 14% 58%)", fontWeight: 700 }}>
               e geram 
            </span>
              {" "}
            <span style={{ color: "hsl(38 91% 60%)", fontWeight: 700 }}>
              percepção de valor.
            </span>
          </p>

          {/* CTAs */}
          <div
            className="mt-8 flex flex-wrap gap-3 animate-fade-in-up"
            style={{ animationDelay: "260ms" }}
          >
            <a
              href="#agende"
              className="btn-cinema sweep-hover blue-glow-pulse inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-white font-bold text-sm tracking-wide"
              style={{
                background: "linear-gradient(135deg, hsl(213 100% 52%) 0%, hsl(221 100% 44%) 100%)",
              }}
            >
              Solicitar Orçamento
            </a>

            <a
              href="#portfolio"
              className="sweep-hover inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300"
              style={{
                border: "1px solid hsl(0 0% 100% / 0.25)",
                color: "hsl(210 18% 88%)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "hsl(0 0% 100% / 0.55)";
                el.style.color = "hsl(0 0% 100%)";
                el.style.background = "hsl(0 0% 100% / 0.06)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "hsl(0 0% 100% / 0.25)";
                el.style.color = "hsl(210 18% 88%)";
                el.style.background = "transparent";
                el.style.transform = "translateY(0)";
              }}
            >
              Ver Portfólio
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="mt-8 grid grid-cols-2 gap-2.5 animate-fade-in-up"
            style={{ animationDelay: "340ms" }}
          >
            {trustBadges.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 px-3 py-2.5"
                style={{
                  borderRadius: "6px",
                  border: "1px solid hsl(220 24% 14%)",
                  background: "hsl(222 26% 7% / 0.85)",
                }}
              >
                <span style={{ color: "hsl(38 91% 55%)" }}>
                  <TrustIcon type={badge.icon} />
                </span>
                <span
                  className="text-xs font-semibold leading-tight"
                  style={{ color: "hsl(210 18% 82%)" }}
                >
                  {badge.text}
                </span>
              </div>
            ))}
          </div>

          {/* Drone highlight card — animated with video embed */}
          <DroneLabel />
        </div>
      </div>

      {/* Right column — Vini photo (desktop only) */}
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[45%] pointer-events-none">
        {/* Left-edge fade to blend with background */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: "linear-gradient(to right, hsl(222 40% 2%) 0%, transparent 38%)",
          }}
        />
        {/* Top fade */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: "linear-gradient(to bottom, hsl(222 40% 2%) 0%, transparent 18%, transparent 75%, hsl(222 40% 2%) 100%)",
          }}
        />
        <img
          src={viniPhoto}
          alt="Vinícius Martins — Videomaker"
          fetchPriority="high"
          className="w-full h-full object-cover object-top"
          style={{ objectPosition: "center top" }}
        />
      </div>

    </div>

    {/* Bottom gradient */}
    <div
      className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-20"
      style={{ background: "linear-gradient(to top, hsl(222 40% 2%) 0%, transparent 100%)" }}
    />
    <div
      className="absolute bottom-0 left-0 right-0 h-px pointer-events-none z-20"
      style={{ background: "linear-gradient(90deg, transparent 10%, hsl(213 100% 58% / 0.14) 50%, transparent 90%)" }}
    />
  </section>
);
