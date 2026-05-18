import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/LOGO_VMFILMS(1).png";

const links = [
  { label: "Home", href: "#top" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#agende" },
];

const Logo = () => (
  <a href="#top" className="flex items-center select-none group">
    <img
      src={logoImg}
      alt="VM Filmes"
      className="h-16"
    />
  </a>
);

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        )}
        style={
          scrolled
            ? {
                background: "hsl(222 28% 4% / 0.96)",
                backdropFilter: "blur(24px) saturate(1.6)",
                WebkitBackdropFilter: "blur(24px) saturate(1.6)",
                borderBottom: "1px solid hsl(213 100% 58% / 0.08)",
                boxShadow: "0 4px 40px hsl(222 50% 2% / 0.6)",
              }
            : { background: "transparent" }
        }
      >
        <div className="container-page flex h-20 items-center justify-between">
          <Logo />

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link-expand relative text-sm font-medium transition-colors duration-200"
                style={{ color: "hsl(213 14% 60%)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "hsl(213 100% 62%)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "hsl(213 14% 60%)"; }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#agende"
            className="hidden md:inline-flex btn-cinema sweep-hover items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-bold tracking-wide transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, hsl(213 100% 52%) 0%, hsl(221 100% 44%) 100%)",
              boxShadow: "0 4px 20px -4px hsl(213 100% 52% / 0.4)",
            }}
          >
            Solicitar Orçamento
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="md:hidden relative z-50 flex flex-col justify-center items-center h-10 w-10 gap-[6px] focus:outline-none"
          >
            <span
              className={cn(
                "block h-0.5 w-6 rounded-full transition-all duration-300 origin-center",
                menuOpen && "rotate-45 translate-y-[8px]"
              )}
              style={{ background: "hsl(210 18% 85%)" }}
            />
            <span
              className={cn(
                "block h-0.5 w-6 rounded-full transition-all duration-300",
                menuOpen && "opacity-0 scale-x-0"
              )}
              style={{ background: "hsl(210 18% 85%)" }}
            />
            <span
              className={cn(
                "block h-0.5 w-6 rounded-full transition-all duration-300 origin-center",
                menuOpen && "-rotate-45 -translate-y-[8px]"
              )}
              style={{ background: "hsl(210 18% 85%)" }}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-500",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "hsl(222 28% 3% / 0.97)",
            backdropFilter: "blur(24px)",
          }}
          onClick={closeMenu}
        />
        <div className="absolute inset-0 bg-grid-fine opacity-60" />
        <div
          className="orb absolute top-1/4 left-1/4 w-72 h-72 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, hsl(213 100% 52% / 0.06) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <nav className="relative flex flex-col items-center justify-center h-full gap-1 px-8">
          <div className="mb-10">
            <Logo />
          </div>

          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              className={cn(
                "w-full text-center py-4 text-2xl font-bold transition-all duration-300 border-b",
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
              style={{
                transition: `color 0.3s, border-color 0.3s, opacity 0.4s ${menuOpen ? i * 60 + 100 : 0}ms, transform 0.4s ${menuOpen ? i * 60 + 100 : 0}ms`,
                color: "hsl(213 14% 65%)",
                borderColor: "hsl(213 100% 58% / 0.08)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "hsl(213 100% 68%)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "hsl(213 14% 65%)"; }}
            >
              {l.label}
            </a>
          ))}

          <a
            href="#agende"
            onClick={closeMenu}
            className={cn(
              "mt-8 w-full text-center py-4 rounded-full text-white text-lg font-bold tracking-wide btn-cinema blue-glow-pulse",
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
            style={{
              background: "linear-gradient(135deg, hsl(213 100% 52%) 0%, hsl(221 100% 44%) 100%)",
              transition: `opacity 0.4s ${menuOpen ? 460 : 0}ms, transform 0.4s ${menuOpen ? 460 : 0}ms`,
            }}
          >
            Solicitar Orçamento
          </a>
        </nav>
      </div>
    </>
  );
};
