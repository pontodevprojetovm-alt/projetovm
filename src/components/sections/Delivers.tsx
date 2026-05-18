import { useState, useEffect, useCallback } from "react";
import p7 from "@/assets/card7.jpeg";
import p6 from "@/assets/card6.jpeg";
import p5 from "@/assets/card5.jpeg";
import p3 from "@/assets/card3.jpeg";
import p1 from "@/assets/card1.jpeg";

const slides = [
  { img: p5, title: "Cobertura em Tempo Real", desc: "Gravamos e já postamos com qualidade profissional no mesmo dia" },
  { img: p7, title: "Direção Estratégica", desc: "Cada cena pensada para conectar e converter sua audiência" },
  { img: p6, title: "Produção de Eventos", desc: "Cobertura completa para capturar todos os ângulos do seu evento" },
  { img: p3, title: "Branded Content", desc: "Conteúdo de marca que comunica valor e identidade" },
  { img: p1, title: "Memórias Cinematográficas", desc: "Transformamos momentos em histórias inesquecíveis" },
];

export const Delivers = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="section-y bg-background">
      <div className="container-page">
        <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-black text-center mx-auto max-w-3xl leading-tight">
          <span className="text-reflect">Eu </span>
          <span className="text-gradient-blue">entrego </span>
          <span className="text-reflect">exatamente o que seu negócio </span>
          <span className="text-gradient-blue">precisa</span>
        </h2>

        <div className="reveal mt-12 max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform ease-in-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
                transitionDuration: "600ms",
              }}
            >
              {slides.map((s) => (
                <div key={s.title} className="w-full shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-card bg-white">
                    <img src={s.img} alt={s.title} className="h-72 md:h-[420px] w-full object-cover" loading="lazy" decoding="async" />
                    <div className="flex flex-col justify-center p-8 md:p-12 text-background text-center">
                      <h3 className="text-2xl md:text-3xl font-extrabold">{s.title}</h3>
                      <p className="mt-3 text-background/70">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "24px" : "8px",
                  background: i === current ? "#2563eb" : "rgba(255,255,255,0.2)",
                }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
