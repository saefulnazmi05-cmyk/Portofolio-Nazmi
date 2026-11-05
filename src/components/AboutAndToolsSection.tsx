import { Phone, Instagram, MapPin, CheckCircle2, ExternalLink } from "lucide-react";
import { PERSONAL_INFO, TOOLS } from "../data/portfolioData";
import { StarIcon } from "./StarIcon";

export function AboutAndToolsSection() {
  const renderToolLogo = (type: string) => {
    switch (type) {
      case "figma":
        return (
          <svg className="w-6 h-6" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 28.5C19 33.7467 14.7467 38 9.5 38C4.25329 38 0 33.7467 0 28.5C0 23.2533 4.25329 19 9.5 19C14.7467 19 19 23.2533 19 28.5Z" fill="#0ACF83"/>
            <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#1ABCFE"/>
            <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
            <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
            <path d="M0 28.5C0 23.2533 4.25329 19 9.5 19H19V38H9.5C4.25329 38 0 33.7467 0 28.5Z" fill="#A259FF"/>
          </svg>
        );
      case "xd":
        return (
          <span className="font-bebas text-lg font-bold text-[#FF61F6] tracking-wider">
            Xd
          </span>
        );
      case "ps":
        return (
          <span className="font-bebas text-lg font-bold text-[#31A8FF] tracking-wider">
            Ps
          </span>
        );
      case "ai":
        return (
          <span className="font-bebas text-lg font-bold text-[#FF9A00] tracking-wider">
            Ai
          </span>
        );
      case "webflow":
        return (
          <svg className="w-6 h-6 text-[#146EF5]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.8 7.3l-3.3 9.4h-2.9l-2.1-5.7-2.1 5.7H4.5L1.2 7.3h3l1.8 5.6 2.1-5.6h2.9l2.1 5.6 1.8-5.6h2.9z" />
          </svg>
        );
      case "html":
        return <span className="font-mono text-xs font-bold text-[#E34F26]">&lt;/&gt;</span>;
      case "css":
        return <span className="font-mono text-xs font-bold text-[#1572B6]">{"{;}"}</span>;
      case "js":
        return <span className="font-mono text-xs font-bold text-[#F7DF1E]">JS</span>;
      default:
        return null;
    }
  };

  return (
    <section id="about" className="relative py-16 sm:py-24 bg-[#090606] border-t border-[rgba(220,60,70,0.18)] overflow-hidden">
      {/* Background glow behind about section */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#E31B35]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT: ABOUT ME — TENTANG SAYA (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A99B94] font-medium block">
                ABOUT ME
              </span>
              <h2 className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-[#EAD5BD] tracking-wide leading-tight mt-1">
                Tentang Saya
              </h2>
            </div>

            {/* Photo + Bio Composite Layout */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 pt-2">
              
              {/* Seated Portrait in Blue Blazer with glowing red circle background */}
              <div className="relative shrink-0 flex items-center justify-center">
                {/* Glowing red circle */}
                <div
                  className="w-40 sm:w-48 h-40 sm:h-48 rounded-full border border-[#E31B35]/40 shadow-[0_0_50px_rgba(227,27,53,0.4)] flex items-center justify-center overflow-hidden"
                  style={{
                    background: "radial-gradient(circle at 50% 40%, #7A1320 0%, #3D0A11 60%, #120A0C 100%)",
                  }}
                >
                  <img
                    src="/assets/extracted/saeful_about_portrait.png"
                    alt="Saeful Nazmi — Tentang Saya"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top scale-105 hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Star icon badge accent */}
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#18090C] border border-[#E31B35] flex items-center justify-center shadow-[0_0_10px_rgba(227,27,53,0.5)]">
                  <StarIcon className="w-3.5 h-3.5 text-[#E31B35]" />
                </div>
              </div>

              {/* Bio Text & Biodata */}
              <div className="space-y-4 text-center sm:text-left">
                <p className="text-xs sm:text-sm text-[#CDBAA9] leading-relaxed">
                  {PERSONAL_INFO.aboutBio[0]}
                </p>
                <p className="text-xs sm:text-sm text-[#A99B94] leading-relaxed">
                  {PERSONAL_INFO.aboutBio[1]}
                </p>

                {/* Direct Contact Links */}
                <div className="pt-2 flex flex-col gap-2 text-xs">
                  {/* WhatsApp */}
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center sm:justify-start gap-2 text-[#EAD5BD] hover:text-white transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#250B10] border border-[#E31B35]/40 flex items-center justify-center group-hover:bg-[#E31B35] transition-colors">
                      <Phone className="w-3 h-3 text-[#E31B35] group-hover:text-white" />
                    </div>
                    <span className="font-mono text-xs">{PERSONAL_INFO.phone}</span>
                    <ExternalLink className="w-3 h-3 text-[#A99B94] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  {/* Instagram */}
                  <a
                    href={PERSONAL_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center sm:justify-start gap-2 text-[#EAD5BD] hover:text-white transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#250B10] border border-[#E31B35]/40 flex items-center justify-center group-hover:bg-[#E31B35] transition-colors">
                      <Instagram className="w-3 h-3 text-[#E31B35] group-hover:text-white" />
                    </div>
                    <span className="text-xs">{PERSONAL_INFO.instagram}</span>
                    <ExternalLink className="w-3 h-3 text-[#A99B94] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  {/* Location */}
                  <div className="inline-flex items-center justify-center sm:justify-start gap-2 text-[#A99B94]">
                    <div className="w-6 h-6 rounded-full bg-[#18090C] border border-white/10 flex items-center justify-center">
                      <MapPin className="w-3 h-3 text-[#E31B35]" />
                    </div>
                    <span className="text-xs">{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Strengths 2x2 Grid */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-[rgba(220,60,70,0.15)]">
              {PERSONAL_INFO.strengths.map((s, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#120A0C] border border-[rgba(220,60,70,0.15)] hover:border-[#E31B35]/50 transition-colors flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#E31B35] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#EAD5BD]">{s.title}</h4>
                    <p className="text-[11px] text-[#A99B94] leading-relaxed mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: TOOLS I USE (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A99B94] font-medium block">
                SOFTWARE & TECH
              </span>
              <h2 className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-[#EAD5BD] tracking-wide leading-tight mt-1">
                Tools I Use
              </h2>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-4 gap-3">
              {TOOLS.map((tool) => (
                <div
                  key={tool.name}
                  className="group relative p-3 rounded-xl bg-[#120A0C] border border-[rgba(220,60,70,0.2)] hover:border-[#E31B35] flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(227,27,53,0.2)] cursor-default"
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: tool.bgColor }}
                  >
                    {renderToolLogo(tool.logoType)}
                  </div>
                  <span className="text-[11px] font-medium text-[#EAD5BD] group-hover:text-white text-center">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Editorial Quote Box */}
            <div className="relative p-6 rounded-xl bg-[#120A0C] border border-[rgba(220,60,70,0.25)] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <span className="text-[#E31B35] text-4xl sm:text-5xl font-serif font-black leading-none block -mt-2 mb-2 select-none">
                “
              </span>
              <blockquote className="text-xs sm:text-sm text-[#EAD5BD] italic leading-relaxed">
                "{PERSONAL_INFO.quotePhilosophy}"
              </blockquote>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="font-signature text-2xl text-[#EAD5BD]">
                  — {PERSONAL_INFO.signature}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#A99B94]">
                  UI/UX Philosophy
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
