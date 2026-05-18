import viniPhoto from "@/assets/exit.jpeg";
import { WhatsAppIcon } from "../icons";

const steps = [
  { n: 1, title: "Consulta gratuita", desc: "Para entender seu projeto e objetivos" },
  { n: 2, title: "Proposta personalizada", desc: "Você recebe sua proposta em até 24h" },
  { n: 3, title: "Início em 48h", desc: "Tendo disponibilidade, começamos em 48h" },
  { n: 4, title: "Acompanhamento total", desc: "Suporte completo durante todo o processo" },
];

export const Process = () => (
  <section
    id="beneficios"
    className="relative overflow-hidden"
    style={{ background: "hsl(222 28% 4%)" }}
  >
    {/* Mobile: Vini photo as background */}
    <div
      className="absolute inset-0 md:hidden"
      style={{
        backgroundImage: `url(${viniPhoto})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    />
    <div
      className="absolute inset-0 md:hidden"
      style={{
        background: "linear-gradient(to top, hsl(222 28% 4%) 30%, hsl(222 28% 4% / 0.85) 65%, hsl(222 28% 4% / 0.7) 100%)",
      }}
    />

    {/* Grid texture */}
    <div className="absolute inset-0 bg-grid-fine opacity-40 pointer-events-none" />

    {/* Desktop layout: left content inside container, right photo full-bleed */}
    <div className="relative hidden md:flex items-stretch min-h-[480px]">
      {/* Left column — content, respects container padding */}
      <div className="relative z-10 flex items-center w-[55%] px-6 lg:px-10" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="w-full mx-auto" style={{ maxWidth: "640px" }}>
          <h2 className="reveal text-2xl md:text-3xl lg:text-4xl font-black leading-tight text-left">
            <span className="text-reflect">Pronto para </span>
            <span className="text-gradient-blue">transformar</span>
            <span className="text-reflect"> sua marca em história autêntica?</span>
          </h2>

          <div className="reveal mt-8 grid gap-6 grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="reveal relative bg-white text-background rounded-xl px-3 pt-8 pb-4 shadow-card text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-primary text-primary-foreground font-extrabold flex items-center justify-center shadow-orange text-sm">
                  {s.n}
                </div>
                <h3 className="font-extrabold text-primary text-sm mb-0.5">{s.title}</h3>
                <p className="text-xs text-background/70">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal mt-8 flex flex-col items-start">
            <a
              href="https://wa.me/5511940285768"
              target="_blank"
              rel="noreferrer"
              className="btn-cinema sweep-hover inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-base tracking-wide"
              style={{ background: "linear-gradient(135deg, hsl(213 100% 52%) 0%, hsl(221 100% 44%) 100%)" }}
            >
              Vamos fazer história juntos
            </a>
          </div>
        </div>
      </div>

      {/* Right column — Vini photo, full-bleed to viewport edges */}
      <div className="absolute top-0 right-0 bottom-0 w-[45%] pointer-events-none">
        {/* Overlay: fade left edge into dark background */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, transparent 30%, hsl(222 28% 4%) 90%)",
          }}
        />
        <img
          src={viniPhoto}
          alt="Vinícius Martins"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top"
          style={{ opacity: 0.75 }}
        />
      </div>
    </div>

    {/* Mobile layout */}
    <div className="relative md:hidden container-page py-20">
      <div className="relative z-10">
        <h2 className="reveal text-3xl font-black leading-tight text-center">
          <span className="text-reflect">Pronto para </span>
          <span className="text-gradient-blue">transformar</span>
          <span className="text-reflect"> sua marca em história autêntica?</span>
        </h2>

        <div className="reveal mt-10 grid gap-5 grid-cols-2">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal relative bg-white text-background rounded-2xl px-5 pt-10 pb-6 shadow-card text-center"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-primary text-primary-foreground font-extrabold flex items-center justify-center shadow-orange">
                {s.n}
              </div>
              <h3 className="font-extrabold text-primary mb-1">{s.title}</h3>
              <p className="text-sm text-background/70">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 flex flex-col items-center">
          <a
            href="https://wa.me/5511940285768"
            target="_blank"
            rel="noreferrer"
            className="btn-cinema sweep-hover inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-base tracking-wide"
            style={{ background: "linear-gradient(135deg, hsl(213 100% 52%) 0%, hsl(221 100% 44%) 100%)" }}
          >
            Vamos fazer história juntos
          </a>
        </div>
      </div>
    </div>
  </section>
);
