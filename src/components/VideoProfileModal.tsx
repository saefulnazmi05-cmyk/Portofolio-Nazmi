import { useEffect, useState } from "react";
import { X, Play, Pause, Volume2, VolumeX, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { PERSONAL_INFO, PROJECTS } from "../data/portfolioData";
import { StarIcon } from "./StarIcon";

interface VideoProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewWork: () => void;
}

export function VideoProfileModal({ isOpen, onClose, onViewWork }: VideoProfileModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Visi & Pendekatan Desain",
      subtitle: "Human-Centered · Pixel-Perfect · Result-Driven",
      text: "Menggabungkan kepekaan estetika modern dengan logika fungsional untuk menciptakan produk digital yang berdampak nyata bagi bisnis dan pengguna.",
      image: "/assets/extracted/hero_centered.png",
      tag: "Design Philosophy",
    },
    {
      title: "Desain Berstandar Industri",
      subtitle: "Naj Quran · Aplikasi Al-Qur'an Digital",
      text: "Mengembangkan antarmuka mobile yang bersih, ramah mata saat malam hari, dan dirancang dengan arsitektur navigasi yang mengutamakan ketenangan membaca.",
      image: "/assets/extracted/project_naj_quran.png",
      tag: "Featured Case Study",
    },
    {
      title: "Kreativitas & Identitas Brand",
      subtitle: "Ziezan Station & UMKM Nusantara",
      text: "Membangun ekosistem visual menyeluruh mulai dari logo, palet warna, tipografi, hingga media interaktif yang memikat pasar generasi muda.",
      image: "/assets/extracted/project_ziezan.png",
      tag: "Visual Experience",
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOpen && isPlaying) {
      interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isOpen, isPlaying, slides.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const current = slides[activeSlide];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-[#120A0C] border border-[#E31B35]/40 shadow-[0_25px_70px_rgba(227,27,53,0.4)] overflow-hidden my-6 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="p-4 sm:p-5 border-b border-[rgba(220,60,70,0.2)] flex items-center justify-between bg-[#18090C]">
          <div className="flex items-center gap-2.5">
            <StarIcon className="w-5 h-5 text-[#E31B35]" />
            <div>
              <span className="text-[10px] font-medium uppercase tracking-widest text-[#E31B35] block">
                Showreel & Profil Interaktif
              </span>
              <h3 className="font-bebas text-2xl text-[#EAD5BD] tracking-wide leading-none mt-0.5">
                Saeful Nazmi — Profil Kreatif
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-white/10 hover:border-[#E31B35] bg-[#090606] flex items-center justify-center text-[#EAD5BD] hover:text-white transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cinematic Presentation Viewport */}
        <div className="relative aspect-video w-full bg-[#090606] overflow-hidden flex items-center justify-center border-b border-[rgba(220,60,70,0.2)]">
          {/* Background image with slow zoom & transition */}
          <img
            key={activeSlide}
            src={current.image}
            alt={current.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-60 animate-in fade-in zoom-in-95 duration-700"
          />

          {/* Cinematic Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#120A0C] via-transparent to-[#120A0C]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#120A0C]/90 via-transparent to-[#120A0C]/70" />

          {/* Floating Slide Content Overlay */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 max-w-xl space-y-3 z-20">
            <span className="px-2.5 py-1 rounded bg-[#E31B35] text-[10px] font-semibold uppercase tracking-wider text-white shadow-[0_0_12px_rgba(227,27,53,0.6)]">
              {current.tag}
            </span>
            <h4 className="font-bebas text-3xl sm:text-4xl text-[#EAD5BD] tracking-wide leading-none text-glow-cream">
              {current.title}
            </h4>
            <p className="font-sans font-bold text-xs sm:text-sm text-[#E31B35]">
              {current.subtitle}
            </p>
            <p className="text-xs text-[#CDBAA9] leading-relaxed hidden sm:block">
              {current.text}
            </p>
          </div>

          {/* Showreel Media Controls */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-full bg-[#090606]/80 border border-white/20 text-[#EAD5BD] hover:text-white hover:border-[#E31B35] transition-colors"
              aria-label={isPlaying ? "Jeda" : "Putar"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 rounded-full bg-[#090606]/80 border border-white/20 text-[#EAD5BD] hover:text-white hover:border-[#E31B35] transition-colors"
              aria-label={isMuted ? "Aktifkan suara" : "Bisukan"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>

          {/* Slide Progress Ticks */}
          <div className="absolute bottom-3 left-6 right-6 z-20 flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                  activeSlide === i ? "bg-[#E31B35] shadow-[0_0_8px_#E31B35]" : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Footer info & CTA */}
        <div className="p-4 sm:p-5 bg-[#18090C] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-[#A99B94]">
            <span>Serang, Banten</span>
            <span aria-hidden="true">·</span>
            <span>UI/UX Designer & Web Developer</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full border border-white/10 text-xs text-[#A99B94] hover:text-white transition-colors"
            >
              Tutup
            </button>
            <button
              onClick={() => {
                onClose();
                onViewWork();
              }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#E31B35] hover:bg-[#ff2440] text-xs uppercase tracking-wider font-semibold text-white shadow-[0_0_15px_rgba(227,27,53,0.4)] transition-all cursor-pointer"
            >
              <span>Eksplor Portofolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
