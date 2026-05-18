export const Brands = () => {
  const items = ["FILMES IMOBILIÁRIOS", "CAPTAÇÃO AÉREA", "EXPERIÊNCIA VISUAL", "ALTO PADRÃO", "FILMES IMOBILIÁRIOS", "CAPTAÇÃO AÉREA", "EXPERIÊNCIA VISUAL", "ALTO PADRÃO"];
  const doubled = [...items, ...items];

  return (
    <section
      className="overflow-hidden py-5"
      style={{ background: "hsl(220 26% 5%)" }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: "marquee-reverse 30s linear infinite",
          gap: "2rem",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="shrink-0 font-black tracking-[0.3em] uppercase select-none"
            style={{
              color: "hsl(213 14% 22%)",
              fontSize: "clamp(0.9rem, 2vw, 1.4rem)",
            }}
          >
            {item} ·
          </span>
        ))}
      </div>
    </section>
  );
};
