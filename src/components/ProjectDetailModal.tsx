import { useEffect } from "react";
import { X, ExternalLink, Calendar, User, Briefcase, CheckCircle2, ArrowRight } from "lucide-react";
import { ProjectItem } from "../data/portfolioData";

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      {/* Modal Dialog Container */}
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-[#120A0C] border border-[#E31B35]/40 shadow-[0_20px_60px_rgba(227,27,53,0.35)] overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="p-4 sm:p-5 border-b border-[rgba(220,60,70,0.2)] flex items-center justify-between bg-[#18090C]">
          <div>
            <span className="text-[10px] font-medium uppercase tracking-widest text-[#E31B35]">
              Studi Kasus Proyek
            </span>
            <h3 className="font-bebas text-2xl sm:text-3xl text-[#EAD5BD] tracking-wide leading-none mt-0.5">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-white/10 hover:border-[#E31B35] bg-[#090606] flex items-center justify-center text-[#EAD5BD] hover:text-white transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6 flex-1">
          {/* Main Visual Image Banner */}
          <div className="relative rounded-xl overflow-hidden border border-[rgba(220,60,70,0.25)] bg-[#090606] shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[380px] object-cover"
            />
            <div className="absolute top-3 right-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#090606]/90 text-[#EAD5BD] border border-[#E31B35]/40 backdrop-blur-sm shadow">
                {project.category}
              </span>
            </div>
          </div>

          {/* Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#090606] border border-white/5 text-xs">
            <div>
              <span className="text-[#A99B94] block text-[11px]">Klien</span>
              <span className="font-semibold text-[#EAD5BD]">{project.client}</span>
            </div>
            <div>
              <span className="text-[#A99B94] block text-[11px]">Tahun</span>
              <span className="font-semibold text-[#EAD5BD]">{project.year}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-[#A99B94] block text-[11px]">Peran</span>
              <span className="font-semibold text-[#EAD5BD]">{project.role}</span>
            </div>
          </div>

          {/* Full Narrative Story */}
          <div className="space-y-2">
            <h4 className="font-bebas text-xl text-[#EAD5BD] tracking-wide">
              Latar Belakang & Solusi Desain
            </h4>
            <p className="text-xs sm:text-sm text-[#CDBAA9] leading-relaxed">
              {project.fullStory}
            </p>
          </div>

          {/* Highlights & Features */}
          <div className="space-y-3">
            <h4 className="font-bebas text-xl text-[#EAD5BD] tracking-wide">
              Fitur & Pencapaian Utama
            </h4>
            <div className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#A99B94]">
                  <CheckCircle2 className="w-4 h-4 text-[#E31B35] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Used */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-[#A99B94] font-medium">
              Alat & Teknologi
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono text-[#EAD5BD] bg-[#18090C] border border-[#E31B35]/30"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 sm:p-5 border-t border-[rgba(220,60,70,0.2)] bg-[#18090C] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#A99B94]">
            Tertarik mendiskusikan konsep serupa untuk brand Anda?
          </span>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 rounded-full border border-white/10 text-xs text-[#A99B94] hover:text-white transition-colors"
            >
              Tutup
            </button>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-[#E31B35] hover:bg-[#ff2440] text-xs uppercase tracking-wider font-semibold text-white transition-all shadow-[0_0_15px_rgba(227,27,53,0.5)]"
            >
              <span>Diskusikan via WA</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
