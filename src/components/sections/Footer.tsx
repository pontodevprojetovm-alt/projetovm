import { Instagram, Youtube } from "lucide-react";
import { TikTokIcon, WhatsAppIcon } from "../icons";
import logoImg from "@/assets/LOGO_VMFILMS(1).png";

const WA_NUMBER = "5511940285768";
const WA_URL = `https://wa.me/${WA_NUMBER}`;
const IG_URL = "https://instagram.com/vinimartinsfilms";
const TIKTOK_URL = "https://www.tiktok.com/@vinimartinsfilms?_r=1&_t=ZS-965VaM9QVs2";
const YOUTUBE_URL = "https://www.youtube.com/@viniciusbalceiro0822";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#agende" },
];

const VMLogo = () => (
  <a href="#top" className="flex items-center select-none">
    <img
      src={logoImg}
      alt="VM Filmes"
      className="h-12"
    />
  </a>
);

export const Footer = () => (
  <footer
    style={{
      background: "hsl(222 30% 3%)",
      borderTop: "1px solid hsl(213 100% 58% / 0.08)",
    }}
  >
    {/* Main footer */}
    <div className="container-page py-14">
      <div className="grid gap-10 md:grid-cols-4 items-start">
        {/* Brand */}
        <div className="md:col-span-2">
          <VMLogo />
          <p
            className="mt-4 text-sm leading-relaxed max-w-xs"
            style={{ color: "hsl(213 14% 48%)" }}
          >
            Produção audiovisual estratégica para corretores, imobiliárias e marcas que desejam vender mais através da imagem.
          </p>
          <p
            className="mt-3 text-sm font-semibold italic"
            style={{ color: "hsl(213 100% 58% / 0.7)" }}
          >
            "Seu projeto merece uma produção à altura."
          </p>

          {/* Social icons */}
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, href: IG_URL, label: "Instagram" },
              { Icon: Youtube, href: YOUTUBE_URL, label: "YouTube" },
              { Icon: TikTokIcon, href: TIKTOK_URL, label: "TikTok" },
              { Icon: WhatsAppIcon, href: WA_URL, label: "WhatsApp" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  border: "1px solid hsl(220 24% 16%)",
                  color: "hsl(213 14% 48%)",
                  background: "hsl(222 24% 7%)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "hsl(213 100% 52%)";
                  el.style.color = "white";
                  el.style.borderColor = "hsl(213 100% 52%)";
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 4px 16px -4px hsl(213 100% 52% / 0.5)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "hsl(222 24% 7%)";
                  el.style.color = "hsl(213 14% 48%)";
                  el.style.borderColor = "hsl(220 24% 16%)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4
            className="font-extrabold mb-4 uppercase tracking-widest text-xs"
            style={{ color: "hsl(210 18% 88%)" }}
          >
            Navegação Rápida
          </h4>
          <nav className="flex flex-col gap-2.5">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm transition-colors duration-200 w-fit underline-draw"
                style={{ color: "hsl(213 14% 48%)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "hsl(213 100% 65%)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "hsl(213 14% 48%)"; }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4
            className="font-extrabold mb-4 uppercase tracking-widest text-xs"
            style={{ color: "hsl(210 18% 88%)" }}
          >
            Contato
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 transition-colors duration-300"
                style={{ color: "hsl(213 14% 48%)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "hsl(142 68% 52%)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "hsl(213 14% 48%)"; }}
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                +55 11 94028-5768
              </a>
            </li>
            <li>
              <a
                href={IG_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 transition-colors duration-300"
                style={{ color: "hsl(213 14% 48%)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "hsl(213 100% 65%)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "hsl(213 14% 48%)"; }}
              >
                <Instagram className="h-4 w-4 shrink-0" />
                @vinimartinsfilms
              </a>
            </li>
            <li
              className="flex items-center gap-2"
              style={{ color: "hsl(213 14% 42%)" }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full shrink-0"
                style={{ background: "hsl(213 100% 52% / 0.5)" }}
              />
              São Paulo, SP
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div style={{ borderTop: "1px solid hsl(220 24% 10%)" }}>
      <div className="container-page py-5 flex flex-col md:flex-row gap-3 items-center justify-between text-xs">
        <p style={{ color: "hsl(213 14% 38%)" }}>
          © 2026 VM Filmes — Vinícius Martins Produções Audiovisuais. Todos os direitos reservados.
        </p>
        <p
          className="font-semibold"
          style={{ color: "hsl(213, 74%, 31%)" }}
        >
          Desenvolvido por:{" "}
          <a
            href="https://www.lucaskikuthi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ color: "hsl(213, 74%, 31%)" }}
          >
            LucasKikuthi.dev
          </a>
        </p>
      </div>
    </div>
  </footer>
);
