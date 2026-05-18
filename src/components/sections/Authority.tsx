const authorityPoints = [
  {
    number: "01",
    title: "Vídeos que vendem, não só impressionam",
    desc: "Cada frame é pensado com objetivo: converter visualizações em contatos e contatos em vendas. Nada de vídeo bonito sem resultado.",
  },
  {
    number: "02",
    title: "Especialista no mercado imobiliário",
    desc: "Conheço o setor como ninguém. Sei o que o comprador quer ver e o que faz o corretor fechar negócio mais rápido.",
  },
  {
    number: "03",
    title: "Entrega rápida sem perder qualidade",
    desc: "Prazo é dinheiro no seu negócio. Entrego em até 48h com qualidade cinematográfica — porque seu imóvel não pode esperar.",
  },
  {
    number: "04",
    title: "Atendimento direto com o videomaker",
    desc: "Sem intermediários. Você fala com quem faz, alinha a visão e recebe exatamente o que precisa — com agilidade total.",
  },
];

export const Authority = () => (
  <section
    className="relative overflow-hidden py-20 lg:py-28"
    style={{ background: "hsl(220 26% 5%)" }}
  >
    {/* Grid texture */}
    <div className="absolute inset-0 bg-grid-fine opacity-50 pointer-events-none" />

    {/* Ambient glow */}
    <div
      className="orb drift-slow absolute"
      style={{
        width: "600px",
        height: "400px",
        top: "40%",
        left: "-10%",
        background: "radial-gradient(ellipse, hsl(213 100% 52% / 0.05) 0%, transparent 70%)",
        filter: "blur(70px)",
      }}
    />

    {/* Top border */}
    <div
      className="absolute top-0 left-0 right-0 h-px pointer-events-none"
      style={{ background: "linear-gradient(90deg, transparent 5%, hsl(213 100% 58% / 0.12) 50%, transparent 95%)" }}
    />

    <div className="relative container-page">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left — Authority statement */}
        <div>
          <div className="reveal chip-primary mb-5">Por que trabalhar comigo</div>

          <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-black leading-[1.05] max-w-lg">
            <span className="text-reflect">Faço vídeos com propósito,</span>
            <br />
            <span className="text-gradient-blue">não só por estética.</span>
          </h2>

          <p
            className="reveal mt-5 text-lg leading-relaxed max-w-md"
            style={{ color: "hsl(213 14% 58%)" }}
          >
            Enquanto outros fazem vídeos artísticos, eu faço vídeos que{" "}
            <span style={{ color: "hsl(142 68% 55%)", fontWeight: 700 }}>
              geram resultados reais para seu negócio.
            </span>
          </p>

        </div>

        {/* Right — Numbered authority points */}
        <div className="space-y-5">
          {authorityPoints.map((point, i) => (
            <div
              key={point.number}
              className="reveal group relative rounded-xl p-5 transition-all duration-300 cursor-default"
              style={{
                transitionDelay: `${i * 70}ms`,
                border: "1px solid hsl(220 24% 14%)",
                background: "hsl(222 26% 7%)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "hsl(213 100% 58% / 0.25)";
                el.style.background = "hsl(220 22% 9%)";
                el.style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "hsl(220 24% 14%)";
                el.style.background = "hsl(222 26% 7%)";
                el.style.transform = "translateX(0)";
              }}
            >
              <div className="flex items-start gap-4">
                <span
                  className="shrink-0 text-2xl font-black tabular-nums leading-none"
                  style={{
                    background: "linear-gradient(160deg, hsl(213 100% 80%) 0%, hsl(213 100% 55%) 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {point.number}
                </span>
                <div>
                  <h3
                    className="font-extrabold text-base leading-tight mb-1.5 transition-colors duration-300"
                    style={{ color: "hsl(210 18% 90%)" }}
                  >
                    {point.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "hsl(213 14% 55%)" }}
                  >
                    {point.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom border */}
    <div
      className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
      style={{ background: "linear-gradient(90deg, transparent 5%, hsl(213 100% 58% / 0.1) 50%, transparent 95%)" }}
    />
  </section>
);
