import { useEffect, useState } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface HeroSectionProps {
  onOpenVideo: () => void;
  onOpenPortfolio: () => void;
}

export function HeroSection({ onOpenVideo, onOpenPortfolio }: HeroSectionProps) {
  const [animatedStats, setAnimatedStats] = useState({ years: 0, projects: 0, clients: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({
        years: PERSONAL_INFO.stats[0].value,
        projects: PERSONAL_INFO.stats[1].value,
        clients: PERSONAL_INFO.stats[2].value,
      });
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-radial from-[#1e070b]/60 via-[#090606] to-[#090606]"
    >
      {/* Background Ambient Glow & Geometric lines */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Top radial ambient glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#E31B35]/15 blur-[120px] rounded-full" />
        
        {/* Subtle geometric circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full border border-[#E31B35]/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[920px] h-[920px] rounded-full border border-[#E31B35]/5 pointer-events-none" />
        
        {/* Fine diagonal grain line accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#250B10]/20 to-transparent" />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#250B10]/20 to-transparent" />
      </div>

      {/* Top Editorial Kicker */}
      <div className="relative z-10 text-center pt-2">
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#CDBAA9] font-medium inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E31B35] shadow-[0_0_8px_#E31B35]" />
          CREATIVE PORTFOLIO
        </span>
      </div>

      {/* Massive Overlapping Headline "PORTFOLIO" */}
      <div className="relative z-0 w-full text-center select-none pointer-events-none -mt-3 sm:-mt-5 lg:-mt-7">
        <h1 className="font-bebas fluid-portfolio-title font-bold text-[#EAD5BD] tracking-[0.04em] text-glow-cream opacity-90 transition-opacity">
          PORTFOLIO
        </h1>
      </div>

      {/* Main Hero Composite Row: Left Info | Center Portrait | Right Stats */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-16 sm:-mt-24 lg:-mt-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* LEFT HERO CONTENT (lg:col-span-4) */}
          <div className="lg:col-span-4 order-2 lg:order-1 text-center lg:text-left z-20">
            <div className="inline-block">
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EAD5BD] tracking-tight">
                {PERSONAL_INFO.name}
              </h2>
              <p className="font-sans font-bold text-sm sm:text-base text-[#E31B35] tracking-wide mt-1 text-glow-red">
                {PERSONAL_INFO.role}
              </p>
            </div>

            <p className="text-[#A99B94] text-xs sm:text-sm leading-relaxed mt-4 max-w-md mx-auto lg:mx-0">
              {PERSONAL_INFO.heroBio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6">
              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenPortfolio();
                }}
                className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-[#E31B35] bg-[#250B10]/50 hover:bg-[#E31B35] text-xs uppercase tracking-wider font-semibold text-[#EAD5BD] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(227,27,53,0.3)] hover:shadow-[0_0_25px_rgba(227,27,53,0.6)] cursor-pointer"
              >
                <span>Lihat Portofolio</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E31B35] group-hover:text-white transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenVideo}
                className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium text-[#EAD5BD] hover:text-white transition-colors cursor-pointer"
              >
                <span className="w-7 h-7 rounded-full border border-[rgba(220,60,70,0.5)] bg-[#120A0C] group-hover:border-[#E31B35] group-hover:bg-[#E31B35] group-hover:text-white flex items-center justify-center transition-all duration-300">
                  <Play className="w-3 h-3 fill-current text-[#EAD5BD] group-hover:text-white ml-0.5" />
                </span>
                <span>Tonton Profil</span>
              </button>
            </div>
          </div>

          {/* CENTER MAIN PORTRAIT (lg:col-span-4) */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[440px] flex items-center justify-center">
              
              {/* Glowing Burgundy Circle Backdrop */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[320px] lg:w-[360px] h-[260px] sm:h-[320px] lg:h-[360px] rounded-full bg-gradient-to-b from-[#7A1320] via-[#3D0A11] to-[#120406] border border-[#E31B35]/40 shadow-[0_0_90px_rgba(227,27,53,0.5)] animate-pulse-subtle pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 40%, #8E101E 0%, #4A0D16 60%, #150508 100%)",
                }}
              />

              {/* Decorative Subtle Star Badge */}
              <div className="absolute top-4 right-6 z-20 pointer-events-none">
                <Sparkles className="w-4 h-4 text-[#E31B35]/80 animate-spin" style={{ animationDuration: "12s" }} />
              </div>

              {/* Saeful Nazmi Formal Portrait (Wearing black suit, white shirt, black tie) */}
              <div className="relative z-10 w-full flex items-center justify-center">
                <img
                  src="/assets/extracted/saeful_hero_clean.png"
                  alt="Saeful Nazmi — UI/UX Designer & Web Developer"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[480px] sm:max-h-[540px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] transition-transform duration-500 hover:scale-[1.02]"
                  loading="eager"
                />
              </div>

              {/* Subtle bottom shadow vignette to blend seamlessly */}
              <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#090606] via-[#090606]/80 to-transparent z-15 pointer-events-none" />
            </div>
          </div>

          {/* RIGHT HERO CONTENT (lg:col-span-4) */}
          <div className="lg:col-span-4 order-3 text-center lg:text-left space-y-6 lg:pl-6 z-20">
            {/* Signature Typography */}
            <div className="flex justify-center lg:justify-start">
              <span className="font-signature text-4xl sm:text-5xl lg:text-6xl text-[#EAD5BD] tracking-wide select-none drop-shadow-[0_2px_10px_rgba(234,213,189,0.3)]">
                {PERSONAL_INFO.signature}
              </span>
            </div>

            {/* Statistics Row */}
            <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-2">
              {/* Stat 1 */}
              <div>
                <div className="font-bebas text-3xl sm:text-4xl text-[#EAD5BD] tracking-wide">
                  {animatedStats.years}
                  <span className="text-[#E31B35] font-bold">+</span>
                </div>
                <div className="text-[11px] sm:text-xs text-[#A99B94] uppercase tracking-wider font-medium">
                  {PERSONAL_INFO.stats[0].label}
                </div>
              </div>

              {/* Stat 2 */}
              <div>
                <div className="font-bebas text-3xl sm:text-4xl text-[#EAD5BD] tracking-wide">
                  {animatedStats.projects}
                  <span className="text-[#E31B35] font-bold">+</span>
                </div>
                <div className="text-[11px] sm:text-xs text-[#A99B94] uppercase tracking-wider font-medium">
                  {PERSONAL_INFO.stats[1].label}
                </div>
              </div>

              {/* Stat 3 */}
              <div>
                <div className="font-bebas text-3xl sm:text-4xl text-[#EAD5BD] tracking-wide">
                  {animatedStats.clients}
                  <span className="text-[#E31B35] font-bold">+</span>
                </div>
                <div className="text-[11px] sm:text-xs text-[#A99B94] uppercase tracking-wider font-medium">
                  {PERSONAL_INFO.stats[2].label}
                </div>
              </div>
            </div>

            {/* Quote Block with Red Quote Mark */}
            <div className="flex items-start justify-center lg:justify-start gap-3 max-w-sm mx-auto lg:mx-0 pt-2 border-t border-[rgba(220,60,70,0.18)]">
              <span className="text-[#E31B35] text-3xl font-serif font-black leading-none select-none">
                “
              </span>
              <p className="text-xs sm:text-sm text-[#CDBAA9] italic leading-relaxed pt-1">
                "{PERSONAL_INFO.quote}"
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
