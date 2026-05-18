import heroImage from "@/assets/hero-photographer.jpeg";

export const Sobre = () => {
  return (
    <section
      id="sobre"
      className="section-y relative overflow-hidden"
      style={{ background: "hsl(222 28% 4%)" }}
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-grid-fine opacity-60 pointer-events-none" />

      {/* Ambient glow behind image */}
      <div
        className="orb absolute"
        style={{
          width: "500px",
          height: "500px",
          top: "50%",
          left: "25%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(ellipse, hsl(213 100% 52% / 0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <div className="reveal relative order-2 lg:order-1">
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:max-w-none"
              style={{ boxShadow: "0 24px 64px -12px hsl(222 50% 2% / 0.8), 0 4px 16px hsl(222 50% 2% / 0.5)" }}
            >
              <img
                src={heroImage}
                alt="Vinícius Martins — Videomaker"
                className="w-full h-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, hsl(222 28% 4% / 0.55) 0%, transparent 60%)" }}
              />
              {/* Shimmer border */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  border: "1px solid hsl(213 100% 70% / 0.12)",
                  boxShadow: "inset 0 1px 0 hsl(213 100% 80% / 0.08)",
                }}
              />

              {/* Floating badge */}
              <div
                className="absolute bottom-6 left-6 right-6 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full"
                style={{
                  background: "hsl(222 28% 4% / 0.82)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid hsl(213 100% 58% / 0.18)",
                }}
              >
                <span
                  className="h-2 w-2 rounded-full shrink-0"
                  style={{ background: "hsl(213 100% 62%)", boxShadow: "0 0 6px hsl(213 100% 62% / 0.8)" }}
                />
                <span
                  className="text-xs font-semibold tracking-wide"
                  style={{ color: "hsl(210 18% 88%)" }}
                >
                  Atuação estratégica no audiovisual
                </span>
              </div>
            </div>

            {/* Neon orb behind image */}
            <div
              className="absolute -bottom-8 -left-8 w-64 h-64 rounded-full pointer-events-none -z-10"
              style={{
                background: "radial-gradient(ellipse, hsl(213 100% 52% / 0.08) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
          </div>

          {/* Content column */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="reveal chip-primary">Sobre Mim</div>

            <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-black leading-[1.05]">
              <span className="text-reflect">Por trás de cada </span>
              <span className="text-gradient-blue">frame. </span>
            </h2>

            <div
              className="reveal space-y-4 leading-relaxed text-base md:text-lg"
              style={{ color: "hsl(213 14% 62%)" }}
            >
              <p>
                Me chamo{" "}
                <span style={{ color: "hsl(210 18% 90%)", fontWeight: 600 }}>Vinícius Martins</span>
                . Atuo com produção audiovisual estratégica unindo equipamentos de cinema, câmeras 4K, estabilizadores profissionais e edição com IA — tudo a serviço de quem precisa{" "}
                <span style={{ color: "hsl(213 100% 68%)", fontWeight: 600 }}>vender mais e impressionar de verdade</span>.
              </p>
              <p>
                Sempre evoluindo com o mercado, desenvolvo{" "}
                <span style={{ color: "hsl(38 91% 60%)", fontWeight: 700 }}>captações aéreas com drone </span>
                 que transformam imagens em experiências visuais capazes de valorizar seu negócio ou fortalecer sua marca.
              </p>
              <p style={{ color: "hsl(210 18% 84%)", fontWeight: 600 }}>
                Meu objetivo é transformar imagens em resultado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
