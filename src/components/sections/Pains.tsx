import { Calendar, FileQuestion, CircleHelp as HelpCircle, Clock } from "lucide-react";

const pains = [
  { Icon: FileQuestion, text: "Conteúdo genérico que não traduz sua verdadeira qualidade" },
  { Icon: Calendar, text: "Eventos importantes sem registro profissional" },
  { Icon: HelpCircle, text: "Falta de clareza sobre como transformar ideias em roteiros eficientes" },
  { Icon: Clock, text: "Demora na entrega quando o timing é crucial para o negócio" },
];

export const Pains = () => (
  <section className="section-y bg-background">
    <div className="container-page text-center">
      <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-black max-w-3xl mx-auto leading-tight">
        <span className="text-reflect">Você está perdendo </span>
        <span
          style={{
            background: "linear-gradient(160deg, hsl(38 91% 75%) 0%, hsl(38 91% 55%) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          vendas
        </span>
        <span className="text-reflect"> por esses </span>
                <span
          style={{
            background: "linear-gradient(160deg, hsl(38 91% 75%) 0%, hsl(38 91% 55%) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          motivos
        </span>

      </h2>

      <div className="mt-12 grid gap-5 md:grid-cols-2" style={{ maxWidth: "800px", margin: "3rem auto 0" }}>
        {pains.map((p, i) => (
          <div
            key={p.text}
            className="reveal flex items-center gap-5 p-5 bg-gradient-feature shadow-card"
            style={{
              transitionDelay: `${i * 80}ms`,
              borderLeft: "2px solid #ef4444",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <div className="h-14 w-14 shrink-0 rounded-full bg-white flex items-center justify-center text-primary">
              <p.Icon className="h-7 w-7" />
            </div>
            <p className="font-medium text-white text-sm md:text-base">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
