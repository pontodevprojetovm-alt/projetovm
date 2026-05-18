import { useState, useEffect, useRef, createContext, useContext } from "react";
import { Play, Pause } from "lucide-react";

const AUDIO_FILES = [
  { src: "/audio/depoimento-1.mp3", label: "Depoimento em áudio — Thiago" },
  { src: "/audio/depoimento-2.mp3", label: "Depoimento em áudio — Mariana " },
  { src: "/audio/depoimento-3.mp3", label: "Depoimento em áudio — Denilson" },
];

const statsData = [
  { value: 100, suffix: "%", label: "Satisfação" },
  { value: 500, suffix: "+", label: "Clientes satisfeitos" },
  { value: 5, suffix: ".0", label: "Avaliação média" },
];

/* ─── Shared audio context: only one player at a time ─── */
interface AudioGroupContextType {
  register: (id: string, audio: HTMLAudioElement, stop: () => void) => void;
  unregister: (id: string) => void;
  play: (id: string) => void;
}

const AudioGroupContext = createContext<AudioGroupContextType | null>(null);

const useCountUp = (target: number, duration = 1500, active = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
};

const StatCard = ({
  value,
  suffix,
  label,
  active,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
  delay: number;
}) => {
  const count = useCountUp(value, 1500, active);
  return (
    <div
      className="text-center px-4 py-3 rounded-xl"
      style={{
        border: "1px solid hsl(220 24% 14%)",
        background: "hsl(220 26% 6%)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <p className="stat-number text-xl font-black">{count}{suffix}</p>
      <p className="text-xs mt-0.5" style={{ color: "hsl(213 14% 50%)" }}>
        {label}
      </p>
    </div>
  );
};

const AudioPlayer = ({ src, label }: { src: string; label: string }) => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const group = useContext(AudioGroupContext);
  const idRef = useRef(src);

  const stop = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setPlaying(false);
    setProgress(0);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !group) return;
    group.register(idRef.current, audio, stop);
    return () => group.unregister(idRef.current);
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      if (group) group.play(idRef.current);
      audio.play().catch(() => {});
      setPlaying(true);
    }
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className="reveal flex items-center gap-4 px-5 py-4 rounded-2xl max-w-md mx-auto"
      style={{
        background: "hsl(222 26% 8%)",
        border: "1px solid hsl(213 100% 58% / 0.2)",
        boxShadow: "0 4px 24px -8px hsl(213 100% 52% / 0.2)",
      }}
    >
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={() => {
          const audio = audioRef.current;
          if (audio && audio.duration) {
            setProgress((audio.currentTime / audio.duration) * 100);
          }
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) setDuration(audioRef.current.duration);
        }}
        onEnded={() => {
          setPlaying(false);
          setProgress(0);
        }}
      />

      <button
        onClick={toggle}
        className="h-11 w-11 shrink-0 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          background: "linear-gradient(135deg, hsl(213 100% 52%) 0%, hsl(221 100% 44%) 100%)",
          boxShadow: "0 4px 16px -4px hsl(213 100% 52% / 0.5)",
        }}
        aria-label={playing ? "Pausar" : "Reproduzir depoimento"}
      >
        {playing ? (
          <Pause className="h-4 w-4 text-white" />
        ) : (
          <Play className="h-4 w-4 text-white ml-0.5" />
        )}
      </button>

      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold mb-1.5 truncate" style={{ color: "hsl(210 18% 88%)" }}>
          {label}
        </p>
        <div
          className="relative h-1.5 rounded-full overflow-hidden cursor-pointer"
          style={{ background: "hsl(220 24% 18%)" }}
          onClick={(e) => {
            const audio = audioRef.current;
            if (!audio || !audio.duration) return;
            const rect = e.currentTarget.getBoundingClientRect();
            const pct = (e.clientX - rect.left) / rect.width;
            audio.currentTime = pct * audio.duration;
          }}
        >
          <div
            className="absolute inset-y-0 left-0 rounded-full transition-all duration-100"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, hsl(213 100% 52%) 0%, hsl(213 100% 68%) 100%)",
            }}
          />
        </div>
      </div>

      <span className="shrink-0 text-xs tabular-nums" style={{ color: "hsl(213 14% 50%)" }}>
        {duration > 0 ? formatTime(duration) : "--:--"}
      </span>
    </div>
  );
};

export const Testimonials = () => {
  const [statsActive, setStatsActive] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const playersRef = useRef<Map<string, { audio: HTMLAudioElement; stop: () => void }>>(new Map());

  const audioGroup: AudioGroupContextType = {
    register: (id, audio, stop) => {
      playersRef.current.set(id, { audio, stop });
    },
    unregister: (id) => {
      playersRef.current.delete(id);
    },
    play: (id) => {
      playersRef.current.forEach((player, playerId) => {
        if (playerId !== id) {
          player.stop();
        }
      });
    },
  };

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <AudioGroupContext.Provider value={audioGroup}>
      <section
        id="depoimentos"
        className="section-y relative overflow-hidden"
        style={{ background: "hsl(220 26% 5%)" }}
      >
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div
          className="orb drift-slow-reverse absolute"
          style={{
            width: "600px",
            height: "360px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse, hsl(213 100% 52% / 0.05) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent 5%, hsl(213 100% 58% / 0.1) 50%, transparent 95%)" }}
        />

        <div className="relative container-page">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="reveal chip-primary mx-auto mb-5">Depoimentos</div>
            <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-black max-w-2xl mx-auto leading-tight">
              <span className="text-reflect">Clientes que </span>
              <span
                style={{
                  background: "linear-gradient(160deg, hsl(38 91% 75%) 0%, hsl(38 91% 55%) 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                transformaram
              </span>
              <span className="text-reflect"> seus resultados</span>
            </h2>
            <p
              className="reveal mt-4 text-lg max-w-xl mx-auto"
              style={{ color: "hsl(213 14% 52%)" }}
            >
              A experiência de quem já trabalhou comigo
            </p>
          </div>

          {/* Audio testimonials */}
          <div className="space-y-4 mb-10">
            {AUDIO_FILES.map((a) => (
              <AudioPlayer key={a.src} src={a.src} label={a.label} />
            ))}
          </div>

          {/* Stats bar with count-up */}
          <div ref={statsRef} className="reveal grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {statsData.map((s, i) => (
              <StatCard
                key={s.label}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                active={statsActive}
                delay={i * 120}
              />
            ))}
          </div>
        </div>
      </section>
    </AudioGroupContext.Provider>
  );
};
