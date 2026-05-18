import { useState } from "react";
import { Play, X } from "lucide-react";

const v1 = "/portfolio/video-1.mp4";
const v1t = "/portfolio/video-1.jpeg";
const v2 = "/portfolio/video-2.mp4";
const v2t = "/portfolio/video-2.jpeg";
const v3 = "/portfolio/video-3.mp4";
const v3t = "/portfolio/video-3.png";
const v4 = "/portfolio/video-4.mp4";
const v4t = "/portfolio/video-4.png";
const v5 = "/portfolio/video-5.mp4";
const v5t = "/portfolio/video-5.png";

const p1 = "/portfolio/portfolio-1.png";
const p2 = "/portfolio/portfolio-2.png";
const p3 = "/portfolio/portfolio-3.png";
const p4 = "/portfolio/portfolio-4.png";
const p5 = "/portfolio/portfolio-5.jpg";
const p6 = "/portfolio/portfolio-6.jpg";
const p7 = "/portfolio/portfolio-7.jpeg";

interface PortfolioItem {
  id?: string;
  title: string;
  category: string;
  thumb: string;
  isVideo?: boolean;
  videoSrc?: string;
  isLocalVideo?: boolean;
  colSpan?: number;
  rowSpan?: number;
}

const portfolioItems: PortfolioItem[] = [
  // vídeos locais primeiro
  {
    title: "The House",
    category: "IMOBILIARIA",
    thumb: v5t,
    isVideo: true,
    isLocalVideo: true,
    videoSrc: v5,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    title: "Residencial Dallas",
    category: "IMOBILIARIA",
    thumb: v4t,
    isVideo: true,
    isLocalVideo: true,
    videoSrc: v4,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    title: "Mooca Città Torino",
    category: "IMOBILIARIA",
    thumb: v3t,
    isVideo: true,
    isLocalVideo: true,
    videoSrc: v3,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    title: "Reserva São Caetano",
    category: "IMOBILIARIA",
    thumb: v2t,
    isVideo: true,
    isLocalVideo: true,
    videoSrc: v2,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    title: "Pavan Imoveis",
    category: "IMOBILIARIA",
    thumb: v1t,
    isVideo: true,
    isLocalVideo: true,
    videoSrc: v1,
    colSpan: 1,
    rowSpan: 1,
  },

  // resto portfolio
  {
    id: "hPGD9kcyOXs",
    title: "Captação com Drone",
    category: "DRONE",
    thumb: p7,
    isVideo: true,
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: "NmKUWdKugt4",
    title: "Campanha Comercial",
    category: "GASTRONOMIA",
    thumb: p1,
    isVideo: true,
    colSpan: 1,
    rowSpan: 2,
  },
  {
    title: "Fotografia Publicitária",
    category: "PRODUTO",
    thumb: p5,
    isVideo: false,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    title: "Ensaio Fotográfico",
    category: "LIFESTYLE",
    thumb: p6,
    isVideo: false,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "qg9j0pahNE4",
    title: "Produção Institucional",
    category: "BEAUTY",
    thumb: p2,
    isVideo: true,
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: "78OraxL3PDQ",
    title: "Vídeo Institucional",
    category: "SAÚDE",
    thumb: p3,
    isVideo: true,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "aCOCvKop3Nw",
    title: "Cobertura Comercial",
    category: "FOOD SERVICEs",
    thumb: p4,
    isVideo: true,
    colSpan: 1,
    rowSpan: 1,
  },
];

/* Modal */
const VideoModal = ({
  item,
  onClose,
}: {
  item: PortfolioItem;
  onClose: () => void;
}) => (
  <div
    className="fixed inset-0 z-[200] flex items-center justify-center p-4"
    style={{ background: "rgba(0,0,0,0.95)" }}
    onClick={onClose}
  >
    <button
      onClick={onClose}
      className="absolute top-4 right-4 flex items-center justify-center rounded-full bg-white/10 text-white z-[210] hover:bg-white/20 transition-colors"
      style={{ width: 40, height: 40 }}
    >
      <X className="h-5 w-5" />
    </button>

    <div
      className="w-full max-w-2xl"
      style={{ aspectRatio: "16/9" }}
      onClick={(e) => e.stopPropagation()}
    >
      {item.isLocalVideo ? (
        <video
          src={item.videoSrc}
          controls
          autoPlay
          className="w-full h-full rounded-lg"
        />
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${item.id}?autoplay=1&rel=0&modestbranding=1`}
          title={item.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
        />
      )}
    </div>
  </div>
);

/* Card desktop */
const PortfolioCard = ({
  item,
  index,
  onVideoClick,
}: {
  item: PortfolioItem;
  index: number;
  onVideoClick: (item: PortfolioItem) => void;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="reveal group relative overflow-hidden cursor-pointer"
      style={{ transitionDelay: `${index * 50}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => item.isVideo && onVideoClick(item)}
    >
      <img
        src={item.thumb}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500"
        style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
      />

      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(to top, hsl(222 28% 4% / 0.95) 0%, hsl(222 28% 4% / 0.4) 60%, transparent 100%)",
          opacity: hovered ? 1 : 0.6,
        }}
      />

      <div
        className="absolute inset-x-0 bottom-0 p-4 transition-opacity duration-300"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-wider"
          style={{ color: "hsl(213 100% 62%)" }}
        >
          {item.category}
        </p>
        <p className="text-sm font-bold text-white mt-0.5">
          {item.title}
        </p>
      </div>

      {item.isVideo && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="play-btn relative h-14 w-14 rounded-full flex items-center justify-center bg-white">
            <Play className="h-6 w-6 ml-0.5 text-black fill-black" />
          </div>
        </div>
      )}
    </div>
  );
};

export const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] =
    useState<PortfolioItem | null>(null);

  return (
    <section
      id="portfolio"
      className="section-y relative overflow-hidden"
      style={{ background: "hsl(222 28% 4%)" }}
    >
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative container-page">
        <div className="mb-14">
          <div className="reveal chip-primary mb-5">Portfólio</div>

          <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-black max-w-2xl leading-tight">
            <span className="text-reflect">Trabalhos que </span>
            <span className="text-gradient-blue">falam por si</span>
          </h2>

          <p
            className="reveal mt-4 text-lg max-w-xl"
            style={{ color: "hsl(213 14% 52%)" }}
          >
            Cada projeto entregue com direção estratégica,
            qualidade cinematográfica e foco em resultado.
          </p>
        </div>

        {/* MOBILE */}
        <div className="md:hidden grid gap-3">
          {portfolioItems.map((item, index) => (
            <div
              key={`m-${item.id || item.title}-${index}`}
              className="reveal relative overflow-hidden rounded-xl cursor-pointer"
              style={{ aspectRatio: "4/3" }}
              onClick={() => item.isVideo && setSelectedVideo(item)}
            >
              <img
                src={item.thumb}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, hsl(222 28% 4% / 0.9) 0%, transparent 60%)",
                }}
              />

              <div className="absolute inset-x-0 bottom-0 p-4">
                <p
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "hsl(213 100% 62%)" }}
                >
                  {item.category}
                </p>

                <p className="text-sm font-bold text-white mt-0.5">
                  {item.title}
                </p>
              </div>

              {item.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="play-btn relative h-12 w-12 rounded-full flex items-center justify-center bg-white">
                    <Play className="h-5 w-5 ml-0.5 text-black fill-black" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* DESKTOP */}
        <div
          className="hidden md:grid w-full"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "220px",
            gap: "4px",
            gridAutoFlow: "row dense",
          }}
        >
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={`d-${item.id || item.title}-${index}`}
              item={item}
              index={index}
              onVideoClick={() =>
                item.isVideo && setSelectedVideo(item)
              }
            />
          ))}
        </div>
      </div>

      {selectedVideo && (
        <VideoModal
          item={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </section>
  );
};