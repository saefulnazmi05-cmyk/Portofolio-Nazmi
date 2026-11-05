import { Mail, Phone, MapPin, Instagram, ArrowUp, ExternalLink, Heart } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { StarIcon } from "./StarIcon";

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative bg-[#090606] border-t border-[rgba(220,60,70,0.25)] pt-16 pb-12 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#E31B35]/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#4A0D16]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[rgba(220,60,70,0.2)]">
          
          {/* COLUMN 1: LEFT — LET'S COLLABORATE (md:col-span-5) */}
          <div className="md:col-span-5 space-y-5">
            <div>
              <h2 className="font-bebas text-3xl sm:text-4xl text-[#EAD5BD] tracking-wide">
                LET'S COLLABORATE
              </h2>
              <p className="text-xs sm:text-sm text-[#A99B94] mt-2 leading-relaxed max-w-md">
                Punya proyek, pertanyaan, atau ingin bekerja sama? Saya selalu terbuka untuk diskusi dan peluang kolaborasi.
              </p>
            </div>

            {/* Contact Channels */}
            <div className="space-y-3 pt-2 text-xs">
              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group flex items-center gap-3 text-[#CDBAA9] hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#120A0C] border border-[rgba(220,60,70,0.3)] flex items-center justify-center group-hover:border-[#E31B35] group-hover:bg-[#E31B35]/20 transition-all">
                  <Mail className="w-4 h-4 text-[#E31B35]" />
                </div>
                <span className="font-medium tracking-wide">{PERSONAL_INFO.email}</span>
              </a>

              {/* WhatsApp */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-[#CDBAA9] hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#120A0C] border border-[rgba(220,60,70,0.3)] flex items-center justify-center group-hover:border-[#E31B35] group-hover:bg-[#E31B35]/20 transition-all">
                  <Phone className="w-4 h-4 text-[#E31B35]" />
                </div>
                <span className="font-mono tracking-wide">{PERSONAL_INFO.phone}</span>
                <span className="text-[10px] uppercase font-semibold text-[#E31B35] px-2 py-0.5 rounded bg-[#250B10] border border-[#E31B35]/40">
                  Chat WA
                </span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 text-[#A99B94]">
                <div className="w-8 h-8 rounded-lg bg-[#120A0C] border border-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#E31B35]" />
                </div>
                <span>{PERSONAL_INFO.location}</span>
              </div>

              {/* Instagram */}
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-[#CDBAA9] hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#120A0C] border border-[rgba(220,60,70,0.3)] flex items-center justify-center group-hover:border-[#E31B35] group-hover:bg-[#E31B35]/20 transition-all">
                  <Instagram className="w-4 h-4 text-[#E31B35]" />
                </div>
                <span>{PERSONAL_INFO.instagram}</span>
              </a>
            </div>
          </div>

          {/* COLUMN 2: CENTER — QR CODES (md:col-span-3) */}
          <div className="md:col-span-3 flex flex-row items-center justify-center sm:justify-start gap-5">
            {/* LinkedIn QR */}
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 cursor-pointer"
            >
              <div className="relative w-28 h-28 p-2 rounded-xl bg-[#EAD5BD] border-2 border-[#EAD5BD] group-hover:border-[#E31B35] transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.6)] group-hover:shadow-[0_0_20px_rgba(227,27,53,0.4)] overflow-hidden">
                <img
                  src="/assets/extracted/qr_linkedin.png"
                  alt="LinkedIn QR Code Saeful Nazmi"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="text-xs font-semibold text-[#EAD5BD] group-hover:text-white transition-colors flex items-center gap-1">
                LinkedIn <ExternalLink className="w-2.5 h-2.5 text-[#E31B35]" />
              </span>
            </a>

            {/* Behance QR */}
            <a
              href={PERSONAL_INFO.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 cursor-pointer"
            >
              <div className="relative w-28 h-28 p-2 rounded-xl bg-[#EAD5BD] border-2 border-[#EAD5BD] group-hover:border-[#E31B35] transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.6)] group-hover:shadow-[0_0_20px_rgba(227,27,53,0.4)] overflow-hidden">
                <img
                  src="/assets/extracted/qr_behance.png"
                  alt="Behance QR Code Saeful Nazmi"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="text-xs font-semibold text-[#EAD5BD] group-hover:text-white transition-colors flex items-center gap-1">
                Behance <ExternalLink className="w-2.5 h-2.5 text-[#E31B35]" />
              </span>
            </a>
          </div>

          {/* COLUMN 3: RIGHT — MOTTO & SIGNATURE (md:col-span-4) */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end text-left md:text-right justify-between space-y-6">
            {/* Red Four-Point Star */}
            <div>
              <StarIcon className="w-8 h-8 text-[#E31B35] drop-shadow-[0_0_12px_rgba(227,27,53,0.8)]" size={32} />
            </div>

            {/* Slogan */}
            <div className="space-y-1">
              <p className="font-bebas text-2xl sm:text-3xl text-[#EAD5BD] tracking-[0.14em] leading-tight">
                DESIGNING
              </p>
              <p className="font-bebas text-2xl sm:text-3xl text-[#EAD5BD] tracking-[0.14em] leading-tight">
                BETTER EXPERIENCES.
              </p>
              <p className="font-bebas text-2xl sm:text-3xl text-[#EAD5BD] tracking-[0.14em] leading-tight">
                BUILDING
              </p>
              <p className="font-bebas text-2xl sm:text-3xl text-[#EAD5BD] tracking-[0.14em] leading-tight">
                A BRIGHTER FUTURE.
              </p>
              {/* Thin red accent line */}
              <div className="w-16 h-[2px] bg-[#E31B35] shadow-[0_0_8px_#E31B35] mt-2 md:ml-auto" />
            </div>

            {/* Handwritten Signature */}
            <div>
              <span className="font-signature text-4xl sm:text-5xl text-[#EAD5BD] block select-none">
                {PERSONAL_INFO.signature}
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A99B94]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.</span>
            <span aria-hidden="true">·</span>
            <span>Serang, Banten</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(220,60,70,0.3)] bg-[#120A0C] hover:border-[#E31B35] text-[#EAD5BD] hover:text-white transition-all duration-300"
              aria-label="Kembali ke atas"
            >
              <span className="text-[11px] font-medium uppercase tracking-wider">Kembali Ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#E31B35] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
