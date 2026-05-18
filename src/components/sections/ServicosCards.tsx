import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { WhatsAppIcon } from "../icons";

const WA_BASE = "https://wa.me/5511940285768";

const services = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Captação Profissional",
    description: "Equipamentos de cinema com iluminação e enquadramento precisos para transmitir máxima qualidade e credibilidade à sua marca.",
    tags: "4K · Cinema · Iluminação",
    details: {
      items: [
        "Filmagem em 4K com iluminação cinema",
        "Até 2 locações por sessão",
        "Arquivo bruto + editado",
        "Entrega em 5 dias",
      ],
      prazo: "5 dias úteis",
      waService: "Captação Profissional",
    },
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Edição para Redes Sociais",
    description: "Reels, Shorts e Stories otimizados para engajamento. Formatos estratégicos pensados para cada plataforma e objetivo.",
    tags: "Reels · Stories · Shorts",
    details: {
      items: [
        "Reels/Stories otimizados por plataforma",
        "Legendas automáticas",
        "Thumbnail personalizada",
        "Até 3 revisões",
      ],
      prazo: "3 dias úteis",
      waService: "Edição para Redes Sociais",
    },
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Vídeos com Inteligência Artificial",
    description: "Produção potencializada com IA: voice-over, legendas automáticas, edição inteligente e geração de conteúdo de alta conversão.",
    tags: "IA · Inovação · Automação",
    details: {
      items: [
        "Voice-over IA com sua voz clonada",
        "Legendas animadas",
        "Edição inteligente",
        "Formatos para todas as plataformas",
      ],
      prazo: "2 dias úteis",
      waService: "Vídeos com Inteligência Artificial",
    },
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    title: "Drone / Imagens Aéreas",
    description: "Perspectivas cinematográficas exclusivas com drone profissional. Valorize a localização e desperte desejo no comprador.",
    tags: "Drone · Aéreo · 4K",
    details: {
      items: [
        "Cobertura aérea 4K com drone profissional",
        "Até 60min de voo",
        "Edição cinematográfica",
        "Fotos aéreas bônus",
      ],
      prazo: "4 dias úteis",
      waService: "Drone / Imagens Aéreas",
    },
  },
  {
    id: 5,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Conteúdo Imobiliário",
    description: "Tour virtual, vídeo de apresentação e conteúdo estratégico para corretores e imobiliárias que querem vender mais rápido.",
    tags: "Tour Virtual · Imóveis · Venda",
    details: {
      items: [
        "Tour virtual completo",
        "Vídeo de apresentação do imóvel",
        "Fotos profissionais",
        "Copy para redes sociais",
      ],
      prazo: "48h após captação",
      waService: "Conteúdo Imobiliário",
    },
  },
  {
    id: 6,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Cobertura de Eventos",
    description: "Captação completa de lançamentos, feiras, corporativos e eventos especiais. Entrega em até 48h com qualidade premium.",
    tags: "Eventos · 48h · Completo",
    details: {
      items: [
        "Cobertura completa do início ao fim",
        "Highlights em até 48h",
        "Versão longa + cortes para redes",
        "Arquivo bruto",
      ],
      prazo: "48h pós-evento",
      waService: "Cobertura de Eventos",
    },
  },
];

const ServiceCard = ({
  service,
  index,
  isOpen,
  onToggle,
}: {
  service: typeof services[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const waText = encodeURIComponent(
    `Olá Vinícius! Tenho interesse no serviço de ${service.details.waService}. Pode me enviar mais informações e valores?`
  );
  const waLink = `${WA_BASE}?text=${waText}`;

  return (
    <div
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
      style={{
        transitionDelay: `${(index % 3) * 70}ms`,
        border: isOpen ? "1px solid hsl(213 100% 58% / 0.3)" : "1px solid hsl(220 24% 16%)",
        background: isOpen ? "hsl(220 22% 10%)" : "hsl(222 24% 7%)",
        transform: isOpen ? "translateY(-2px)" : "translateY(0)",
        boxShadow: isOpen
          ? "0 8px 32px -8px hsl(213 100% 52% / 0.28), 0 2px 8px hsl(222 40% 2% / 0.6)"
          : "0 2px 12px hsl(222 40% 2% / 0.4)",
        transition: "all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
      onClick={onToggle}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px transition-opacity duration-400"
        style={{
          background: "linear-gradient(90deg, transparent 0%, hsl(213 100% 70% / 0.55) 50%, transparent 100%)",
          opacity: isOpen ? 1 : 0,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isOpen
            ? "linear-gradient(135deg, hsl(213 100% 58% / 0.06) 0%, transparent 50%)"
            : "transparent",
          transition: "background 0.4s ease",
        }}
      />

      <div className="relative p-7">
        <div className="flex items-start justify-between mb-5">
          <div
            className="inline-flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300"
            style={{
              background: isOpen ? "hsl(213 100% 58% / 0.16)" : "hsl(213 100% 58% / 0.09)",
              border: isOpen ? "1px solid hsl(213 100% 58% / 0.35)" : "1px solid hsl(213 100% 58% / 0.16)",
              color: isOpen ? "hsl(213 100% 72%)" : "hsl(213 100% 62%)",
              transform: isOpen ? "scale(1.07)" : "scale(1)",
              boxShadow: isOpen ? "0 4px 20px -4px hsl(213 100% 58% / 0.3)" : "none",
            }}
          >
            {service.icon}
          </div>
          <ChevronDown
            className="h-5 w-5 transition-transform duration-300"
            style={{
              color: isOpen ? "hsl(213 100% 68%)" : "hsl(213 14% 50%)",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </div>

        <h3
          className="text-lg font-extrabold leading-tight mb-3 transition-colors duration-300"
          style={{ color: isOpen ? "hsl(210 18% 98%)" : "hsl(210 18% 88%)" }}
        >
          {service.title}
        </h3>

        <p
          className="text-sm leading-relaxed mb-4 transition-colors duration-300"
          style={{ color: isOpen ? "hsl(213 14% 68%)" : "hsl(213 14% 55%)" }}
        >
          {service.description}
        </p>

        <p className="text-xs leading-relaxed" style={{ color: "#4b5563" }}>
          {service.tags}
        </p>

        <div
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{
            maxHeight: isOpen ? "400px" : "0",
            opacity: isOpen ? 1 : 0,
          }}
        >
          <div className="pt-5 mt-5" style={{ borderTop: "1px solid hsl(220 24% 16%)" }}>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "hsl(213 100% 62%)" }}
            >
              O que você recebe:
            </p>
            <ul className="space-y-2 mb-4">
              {service.details.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "hsl(210 18% 82%)" }}
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                    style={{ background: "hsl(213 100% 58%)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p
              className="text-xs font-semibold mb-4"
              style={{ color: "hsl(142 68% 55%)" }}
            >
              Prazo: {service.details.prazo}
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-bold tracking-wide transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, hsl(213 100% 52%) 0%, hsl(221 100% 44%) 100%)",
                boxShadow: "0 4px 16px -4px hsl(213 100% 52% / 0.4)",
              }}
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 6px 24px -4px hsl(213 100% 52% / 0.6)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 4px 16px -4px hsl(213 100% 52% / 0.4)";
              }}
            >
              Quero esse serviço
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ServicosCards = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="servicos" className="section-y" style={{ background: "hsl(222 28% 4%)" }}>
      <div className="container-page">
        <div className="mb-12">
          <div className="reveal chip-primary mb-5">Serviços</div>
          <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-black leading-tight max-w-2xl">
            <span className="text-reflect">O que </span>
            <span className="text-gradient-blue">Eu</span>
            <span className="text-reflect"> entrego</span>
          </h2>
          <p
            className="reveal mt-4 text-lg max-w-xl"
            style={{ color: "hsl(213 14% 54%)" }}
          >
            Soluções audiovisuais completas para marcas, corretores e imobiliárias que querem resultados reais.
          </p>
        </div>

        <div className="reveal grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              isOpen={openId === service.id}
              onToggle={() => handleToggle(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
