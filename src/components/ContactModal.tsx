import { useState, useEffect } from "react";
import { X, Send, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export function ContactModal({ isOpen, onClose, prefilledService }: ContactModalProps) {
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [projectType, setProjectType] = useState(prefilledService || "UI/UX Design");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setProjectType(prefilledService);
    }
  }, [prefilledService]);

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

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `Halo Saeful Nazmi! 👋\n\nNama: ${name || "Klien"}\nKontak: ${contactInfo || "-"}\nJenis Proyek: ${projectType}\nPesan: ${message || "Halo Saeful, saya ingin berdiskusi mengenai proyek kolaborasi."}\n\nSalam!`
    );

    window.open(`https://wa.me/${PERSONAL_INFO.phoneRaw}?text=${text}`, "_blank");
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl rounded-2xl bg-[#120A0C] border border-[#E31B35]/40 shadow-[0_20px_60px_rgba(227,27,53,0.35)] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[rgba(220,60,70,0.2)] flex items-center justify-between bg-[#18090C]">
          <div>
            <span className="text-[10px] font-medium uppercase tracking-widest text-[#E31B35]">
              Let's Connect
            </span>
            <h3 className="font-bebas text-2xl sm:text-3xl text-[#EAD5BD] tracking-wide mt-0.5">
              Mari Ngobrol & Berkolaborasi
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

        {/* Body Form */}
        <div className="p-6 space-y-5">
          {isSent ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#E31B35]/20 border border-[#E31B35] text-[#E31B35] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(227,27,53,0.5)]">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-bebas text-2xl text-[#EAD5BD] tracking-wide">
                Membuka WhatsApp...
              </h4>
              <p className="text-xs text-[#A99B94]">
                Terima kasih! Pesan Anda akan langsung terkirim ke WhatsApp Saeful Nazmi.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSendWhatsApp} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#CDBAA9] mb-1">
                  Nama Anda / Perusahaan
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso / PT Kreatif Nusantara"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#090606] border border-[rgba(220,60,70,0.25)] focus:border-[#E31B35] text-xs text-[#EAD5BD] placeholder:text-neutral-600 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#CDBAA9] mb-1">
                    WhatsApp atau Email Anda
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="0812xxxxxx / budi@email.com"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#090606] border border-[rgba(220,60,70,0.25)] focus:border-[#E31B35] text-xs text-[#EAD5BD] placeholder:text-neutral-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#CDBAA9] mb-1">
                    Jenis Kebutuhan
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#090606] border border-[rgba(220,60,70,0.25)] focus:border-[#E31B35] text-xs text-[#EAD5BD] focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Interaction Design">Interaction Design</option>
                    <option value="Prototyping">Prototyping</option>
                    <option value="Design Systems">Design Systems</option>
                    <option value="Brand Identity">Brand Identity UMKM</option>
                    <option value="Konsultasi Lainnya">Lainnya / Diskusi Lepas</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#CDBAA9] mb-1">
                  Pesan atau Detail Singkat
                </label>
                <textarea
                  rows={3}
                  placeholder="Ceritakan gambaran proyek atau pertanyaan Anda..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#090606] border border-[rgba(220,60,70,0.25)] focus:border-[#E31B35] text-xs text-[#EAD5BD] placeholder:text-neutral-600 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#E31B35] hover:bg-[#ff2440] text-xs uppercase tracking-widest font-semibold text-white flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(227,27,53,0.4)] transition-all cursor-pointer active:scale-98"
              >
                <span>Kirim Langsung via WhatsApp</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          {/* Quick Direct Chips */}
          <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-[#A99B94]">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#E31B35]" /> {PERSONAL_INFO.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#E31B35]" /> {PERSONAL_INFO.email}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#E31B35]" /> Serang, Banten
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
