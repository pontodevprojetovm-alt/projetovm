import { useEffect, lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Sobre } from "@/components/sections/Sobre";
import { ServicosCards } from "@/components/sections/ServicosCards";
import { CtaStrip } from "@/components/sections/CtaStrip";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Pains = lazy(() =>
  import("@/components/sections/Pains").then((m) => ({
    default: m.Pains,
  }))
);

const Delivers = lazy(() =>
  import("@/components/sections/Delivers").then((m) => ({
    default: m.Delivers,
  }))
);

const MarqueeDivider = lazy(() =>
  import("@/components/sections/MarqueeDivider").then((m) => ({
    default: m.MarqueeDivider,
  }))
);

const Portfolio = lazy(() =>
  import("@/components/sections/Portfolio").then((m) => ({
    default: m.Portfolio,
  }))
);

const Brands = lazy(() =>
  import("@/components/sections/Brands").then((m) => ({
    default: m.Brands,
  }))
);

const Testimonials = lazy(() =>
  import("@/components/sections/Testimonials").then((m) => ({
    default: m.Testimonials,
  }))
);

const Authority = lazy(() =>
  import("@/components/sections/Authority").then((m) => ({
    default: m.Authority,
  }))
);

const Process = lazy(() =>
  import("@/components/sections/Process").then((m) => ({
    default: m.Process,
  }))
);

const Booking = lazy(() =>
  import("@/components/sections/Booking").then((m) => ({
    default: m.Booking,
  }))
);

const Footer = lazy(() =>
  import("@/components/sections/Footer").then((m) => ({
    default: m.Footer,
  }))
);

const MobileStickyCta = lazy(() =>
  import("@/components/MobileStickyCta").then((m) => ({
    default: m.MobileStickyCta,
  }))
);

const Index = () => {
  useScrollReveal();

  useEffect(() => {
    document.title =
      "Vinicius Martins Films | Produção Audiovisual Estratégica";

    const desc =
      "Vinicius Martins Films é especializada em produção audiovisual estratégica para empresas, corretores e marcas que querem vender mais através de vídeos profissionais.";

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", desc);
  }, []);

  return (
    <main className="min-h-screen bg-background pb-16 md:pb-0">
      <Header />
      <Hero />
      <StatsBar />
      <Sobre />
      <ServicosCards />

      <CtaStrip
        headline="Você merece muito mais do que um vídeo comum"
        sub="CEOs que investem em vídeo profissional aceleram sua autoridade no mercado e potencializam suas vendas."
        ctaLabel="Solicitar Orçamento"
        subtitle="Vagas limitadas por mês — agenda abre toda segunda"
        dark
      />

      <Suspense fallback={null}>
        <Pains />
        <Delivers />

        <MarqueeDivider
          items={[
            "VINICIUS MARTINS FILMS",
            "FILMES QUE CONVERTEM",
            "SÃO PAULO E REGIÃO",
            "ENTREGA ÁGIL",
            "CAPTAÇÃO AÉREA",
            "+500 PROJETOS",
            "ALTA PERFORMANCE VISUAL",
            "AGENDE SEU PROJETO",
          ]}
        />

        <Portfolio />
        <Brands />
        <StatsBar />
        <Testimonials />
        <Authority />
        <Process />
        <Booking />
        <Footer />
        <MobileStickyCta />
      </Suspense>
    </main>
  );
};

export default Index;