import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, Instagram } from "lucide-react";
import { WhatsAppIcon } from "../icons";
import { toast } from "sonner";

const WA_NUMBER = "5511940285768";
const WA_URL = `https://wa.me/${WA_NUMBER}`;
const IG_URL = "https://instagram.com/vinimartinsfilms";

const perks = [
  "Entrega garantida em 48h",
  "Atendimento dedicado exclusivamente ao seu projeto",
  "Suporte completo pós-entrega",
  "Orçamento sem compromisso em até 24h",
];

const contactOptions = [
  {
    Icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "+55 11 94028-5768",
    href: WA_URL,
    bg: "hsl(142 68% 40%)",
    glow: "hsl(142 68% 40% / 0.4)",
    description: "Resposta rápida",
  },
  {
    Icon: Instagram,
    label: "Instagram",
    value: "@vinimartinsfilms",
    href: IG_URL,
    bg: "linear-gradient(135deg, hsl(42 90% 55%) 0%, hsl(340 80% 55%) 50%, hsl(270 60% 50%) 100%)",
    glow: "hsl(340 80% 55% / 0.3)",
    description: "Veja o portfólio",
  },
];

export const Booking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá Vinícius! Me chamo ${name}, email: ${email}. Projeto: ${service || "Não informado"}. Adicionais: ${message}`;
    window.open(`${WA_URL}?text=${encodeURIComponent(msg)}`, "_blank");
    toast.success("Redirecionando para o WhatsApp...");
  };

  const inputStyle = {
    background: "hsl(222 28% 6%)",
    border: "1px solid hsl(220 24% 18%)",
    color: "hsl(210 18% 90%)",
    height: "3rem",
  };

  return (
    <>
      <div
        className="h-12 w-full"
        style={{ background: "linear-gradient(180deg, hsl(220 26% 5%) 0%, hsl(222 28% 4%) 100%)" }}
      />

      <section
        id="agende"
        className="section-y relative overflow-hidden"
        style={{ background: "hsl(222 28% 4%)" }}
      >
        <div className="absolute inset-0 bg-grid-fine opacity-50 pointer-events-none" />

        <div
          className="orb drift-slow absolute"
          style={{
            width: "600px",
            height: "400px",
            top: "30%",
            right: "-10%",
            background: "radial-gradient(ellipse, hsl(213 100% 52% / 0.05) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />

        <div className="relative container-page">
          {/* Header */}
          <div className="mb-12">
            <div className="reveal chip-primary mb-5">Contato</div>
            <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-black max-w-3xl leading-tight">
              <span className="text-reflect">Leve sua imagem </span>
              <span
                style={{
                  background: "linear-gradient(160deg, hsl(38 91% 75%) 0%, hsl(38 91% 55%) 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                para outro nível
              </span>
            </h2>
            <p
              className="reveal mt-3 text-lg max-w-xl"
              style={{ color: "hsl(213 14% 52%)" }}
            >
              Agenda preenchendo rapidamente — limitamos atendimentos mensais para garantir qualidade total.
            </p>
          </div>

          <div className="grid lg:grid-cols-[55%_45%] gap-10 items-start">
            {/* Form */}
            <form
              onSubmit={onSubmit}
              className="reveal rounded-2xl p-6 md:p-8"
              style={{
                background: "hsl(222 26% 7%)",
                border: "1px solid hsl(220 24% 14%)",
                boxShadow: "0 8px 40px -8px hsl(222 50% 2% / 0.7), inset 0 1px 0 hsl(213 100% 80% / 0.04)",
              }}
            >
              <div
                className="h-px mb-6 rounded"
                style={{ background: "linear-gradient(90deg, transparent, hsl(213 100% 70% / 0.4), transparent)" }}
              />

              <h3
                className="text-center text-xl font-extrabold uppercase tracking-wide"
                style={{ color: "hsl(213 100% 65%)" }}
              >
                Reserve sua consulta gratuita
              </h3>
              <p
                className="text-center text-sm mt-1 mb-6"
                style={{ color: "hsl(213 14% 50%)" }}
              >
                Preencha os dados abaixo — resposta em até 24h
              </p>

              <div className="space-y-4">
                <Input
                  required
                  placeholder="Nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="focus:border-primary/50 transition-colors"
                  style={inputStyle}
                />
                <Input
                  required
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="focus:border-primary/50 transition-colors"
                  style={inputStyle}
                />

                <Select onValueChange={setService}>
                  <SelectTrigger
                    className="h-12 focus:ring-primary/30 transition-colors"
                    style={{
                      background: "hsl(222 28% 6%)",
                      border: "1px solid hsl(220 24% 18%)",
                      color: service ? "hsl(210 18% 90%)" : "hsl(213 14% 45%)",
                    }}
                  >
                    <SelectValue placeholder="Tipo de projeto" />
                  </SelectTrigger>
                  <SelectContent style={{ background: "hsl(222 26% 8%)", border: "1px solid hsl(220 24% 16%)" }}>
                    <SelectItem value="imovel">Vídeo de Imóvel</SelectItem>
                    <SelectItem value="evento">Cobertura de Evento</SelectItem>
                    <SelectItem value="institucional">Vídeo Institucional</SelectItem>
                    <SelectItem value="redes">Conteúdo para Redes Sociais</SelectItem>
                    <SelectItem value="drone">Imagens com Drone</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="Conte um pouco sobre seu projeto..."
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="resize-none focus:border-primary/50 transition-colors"
                  style={{
                    background: "hsl(222 28% 6%)",
                    border: "1px solid hsl(220 24% 18%)",
                    color: "hsl(210 18% 90%)",
                  }}
                />

                <button
                  type="submit"
                  className="btn-cinema sweep-hover w-full h-14 rounded-full text-white font-bold text-base tracking-wide flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, hsl(213 100% 52%) 0%, hsl(221 100% 44%) 100%)",
                    boxShadow: "0 6px 24px -4px hsl(213 100% 52% / 0.5)",
                  }}
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>

            {/* Right side */}
            <div className="reveal space-y-8">
              <div>
                <p className="text-lg leading-relaxed" style={{ color: "hsl(210 18% 88%)" }}>
                  Cada atendimento é feito{" "}
                  <span style={{ color: "hsl(213 100% 65%)", fontWeight: 700 }}>
                    100% por mim.
                  </span>
                </p>
                <p className="mt-3 leading-relaxed" style={{ color: "hsl(213 14% 52%)" }}>
                  Reserve agora e garanta sua vaga no cronograma de produção.
                </p>
              </div>

              <ul className="space-y-3">
                {perks.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                      style={{
                        background: "hsl(213 100% 52% / 0.12)",
                        border: "1px solid hsl(213 100% 52% / 0.2)",
                        color: "hsl(213 100% 65%)",
                      }}
                    >
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span style={{ color: "hsl(210 18% 82%)" }}>{p}</span>
                  </li>
                ))}
              </ul>

              {/* Contact cards */}
              <div className="space-y-3">
                <p
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "hsl(213 14% 42%)" }}
                >
                  Contato direto
                </p>
                {contactOptions.map((opt) => (
                  <a
                    key={opt.label}
                    href={opt.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group"
                    style={{
                      border: "1px solid hsl(220 24% 14%)",
                      background: "hsl(222 24% 7%)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "hsl(213 100% 58% / 0.22)";
                      el.style.background = "hsl(222 22% 9%)";
                      el.style.transform = "translateX(2px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "hsl(220 24% 14%)";
                      el.style.background = "hsl(222 24% 7%)";
                      el.style.transform = "translateX(0)";
                    }}
                  >
                    <div
                      className="h-11 w-11 rounded-xl flex items-center justify-center text-white shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: opt.bg, boxShadow: `0 4px 16px -4px ${opt.glow}` }}
                    >
                      <opt.Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-sm" style={{ color: "hsl(210 18% 88%)" }}>
                        {opt.label}
                      </p>
                      <p className="text-xs" style={{ color: "hsl(213 14% 48%)" }}>
                        {opt.value}
                      </p>
                      <p className="text-[10px] mt-0.5" style={{ color: "hsl(213 100% 62%)" }}>
                        {opt.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
