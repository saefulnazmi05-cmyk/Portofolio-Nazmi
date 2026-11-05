import { Monitor, Code, Box, Smartphone, Layers, ArrowRight } from "lucide-react";
import { SERVICES, ServiceItem } from "../data/portfolioData";

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenAllServices: () => void;
}

export function ServicesSection({ onSelectService, onOpenAllServices }: ServicesSectionProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "monitor":
        return <Monitor className="w-6 h-6 text-[#E31B35]" strokeWidth={1.75} />;
      case "code":
        return <Code className="w-6 h-6 text-[#E31B35]" strokeWidth={1.75} />;
      case "box":
        return <Box className="w-6 h-6 text-[#E31B35]" strokeWidth={1.75} />;
      case "smartphone":
        return <Smartphone className="w-6 h-6 text-[#E31B35]" strokeWidth={1.75} />;
      case "layers":
        return <Layers className="w-6 h-6 text-[#E31B35]" strokeWidth={1.75} />;
      default:
        return <Monitor className="w-6 h-6 text-[#E31B35]" strokeWidth={1.75} />;
    }
  };

  return (
    <section id="services" className="relative py-16 sm:py-20 bg-[#090606] border-t border-[rgba(220,60,70,0.18)] overflow-hidden">
      {/* Background soft red glow accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#E31B35]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Intro Column (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A99B94] font-medium block">
                WHAT I DO
              </span>
              <h2 className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-[#EAD5BD] tracking-wide leading-tight mt-1">
                Layanan Unggulan Saya
              </h2>
            </div>
            
            <p className="text-xs sm:text-sm text-[#A99B94] leading-relaxed">
              Solusi digital untuk kebutuhan bisnis dan personal Anda.
            </p>

            <button
              onClick={onOpenAllServices}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E31B35] text-xs uppercase tracking-wider font-semibold text-[#EAD5BD] hover:bg-[#E31B35] hover:text-white transition-all duration-300 cursor-pointer"
            >
              <span>Selengkapnya</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E31B35] group-hover:text-white transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Services Grid (lg:col-span-9) */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="group relative bg-[#120A0C] hover:bg-[#1C0F13] border border-[rgba(220,60,70,0.2)] hover:border-[#E31B35] rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(227,27,53,0.2)] cursor-pointer flex flex-col justify-between min-h-[210px]"
              >
                {/* Top: Red Outline Icon */}
                <div className="mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#250B10]/60 border border-[#E31B35]/30 flex items-center justify-center group-hover:border-[#E31B35] group-hover:bg-[#E31B35]/20 transition-all duration-300">
                    {getIcon(service.icon)}
                  </div>
                </div>

                {/* Body: Title & Short Desc */}
                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-sm sm:text-base text-[#EAD5BD] group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#A99B94] leading-relaxed group-hover:text-[#CDBAA9] transition-colors">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Bottom subtle indicator */}
                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-[#A99B94]">
                  <span className="font-mono text-[#E31B35] font-semibold">{service.number}</span>
                  <span className="opacity-0 group-hover:opacity-100 text-[#EAD5BD] flex items-center gap-1 transition-opacity">
                    Detail <ArrowRight className="w-2.5 h-2.5 text-[#E31B35]" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
