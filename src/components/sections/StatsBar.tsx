const stats = [
  "+500 Projetos",
  "Entrega em 48h",
  "São Paulo e região",
];

export const StatsBar = () => (
  <section
    style={{
      background: "linear-gradient(135deg, hsl(213 100% 46%) 0%, hsl(221 100% 38%) 100%)",
      boxShadow: "0 4px 32px -4px hsl(213 100% 52% / 0.4), inset 0 1px 0 hsl(0 0% 100% / 0.12)",
    }}
  >
    <div className="container-page">
      <div
        className="flex items-center justify-center py-3 md:py-0 md:h-20"
      >
        {stats.map((s, i) => (
          <div
            key={s}
            className="flex items-center justify-center text-center px-3 md:px-6 py-1 md:py-0"
            style={{
              borderLeft: i > 0 ? "1px solid hsl(0 0% 100% / 0.2)" : "none",
            }}
          >
            <span
              className="font-bold text-[11px] md:text-[15px] tracking-wide"
              style={{ color: "hsl(0 0% 100%)" }}
            >
              {s}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
