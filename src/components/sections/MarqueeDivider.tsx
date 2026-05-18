interface MarqueeDividerProps {
  items: string[];
  reverse?: boolean;
  fontSize?: string;
}

export const MarqueeDivider = ({ items, reverse = false, fontSize }: MarqueeDividerProps) => {
  const doubled = [...items, ...items];

  return (
    <section
      className="overflow-hidden py-6"
      style={{ background: "hsl(220 26% 5%)" }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: reverse ? "marquee-reverse 30s linear infinite" : "marquee 30s linear infinite",
          gap: "3rem",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="shrink-0 font-black tracking-[0.3em] uppercase select-none"
            style={{
              color: "hsl(213 14% 22%)",
              fontSize: fontSize || "clamp(1.2rem, 3vw, 2rem)",
            }}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Fade edges */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-28"
        style={{ background: "linear-gradient(to right, hsl(220 26% 5%) 0%, transparent 100%)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-28"
        style={{ background: "linear-gradient(to left, hsl(220 26% 5%) 0%, transparent 100%)" }}
      />
    </section>
  );
};
