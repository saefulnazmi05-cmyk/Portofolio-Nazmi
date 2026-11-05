import { useEffect } from "react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { SERVICES, ServiceItem, PERSONAL_INFO } from "../data/portfolioData";

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  isOpenAll: boolean;
  onClose: () => void;
  onConsult: (serviceTitle: string) => void;
}

export function ServiceDetailModal({
  service,
  isOpenAll,
  onClose,
  onConsult,
}: ServiceDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (service || isOpenAll) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, isOpenAll, onClose]);

  if (!service && !isOpenAll) return null;

  const currentList = service ? [service] : SERVICES;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-[#120A0C] border border-[#E31B35]/40 shadow-[0_20px_60px_rgba(227,27,53,0.35)] overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[rgba(220,60,70,0.2)] flex items-center justify-between bg-[#18090C]">
          <div>
            <span className="text-[10px] font-medium uppercase tracking-widest text-[#E31B35]">
              Layanan Digital & Desain
            </span>
            <h3 className="font-bebas text-2xl sm:text-3xl text-[#EAD5BD] tracking-wide mt-0.5">
              {service ? service.title : "Katalog Layanan Lengkap"}
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

        {/* Content */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-8 flex-1">
          {currentList.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-xl bg-[#090606] border border-[rgba(220,60,70,0.2)] space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#E31B35] text-white font-bebas text-sm flex items-center justify-center">
                    {item.number}
                  </span>
                  <h4 className="font-sans font-bold text-lg text-[#EAD5BD]">
                    {item.title}
                  </h4>
                </div>
                <button
                  onClick={() => onConsult(item.title)}
                  className="px-3.5 py-1.5 rounded-full border border-[#E31B35] text-[11px] font-semibold text-[#EAD5BD] hover:bg-[#E31B35] hover:text-white transition-all cursor-pointer"
                >
                  Pilih Layanan Ini
                </button>
              </div>

              <p className="text-xs sm:text-sm text-[#CDBAA9] leading-relaxed">
                {item.fullDesc}
              </p>

              {/* Deliverables */}
              <div className="space-y-2 pt-2 border-t border-white/5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A99B94]">
                  Hasil Pengerjaan (Deliverables):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#EAD5BD]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E31B35] shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="flex items-center gap-2 pt-1 text-[11px]">
                <span className="text-[#A99B94]">Software / Stack:</span>
                <div className="flex flex-wrap gap-1.5">
                  {item.tools.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-[#18090C] border border-[#E31B35]/25 text-[#EAD5BD] font-mono text-[10px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-[rgba(220,60,70,0.2)] bg-[#18090C] flex items-center justify-between">
          <span className="text-xs text-[#A99B94]">
            Ada kebutuhan khusus di luar paket standar?
          </span>
          <button
            onClick={() => onConsult("Konsultasi Custom")}
            className="px-5 py-2 rounded-full bg-[#E31B35] hover:bg-[#ff2440] text-xs uppercase tracking-wider font-semibold text-white transition-all shadow-[0_0_15px_rgba(227,27,53,0.4)]"
          >
            Konsultasi Kustom via WA
          </button>
        </div>
      </div>
    </div>
  );
}
