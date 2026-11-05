import { useState, useEffect } from "react";
import { StarIcon } from "./StarIcon";
import { Send, Menu, X } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface NavbarProps {
  onOpenChat: () => void;
}

export function Navbar({ onOpenChat }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ["hero", "about", "services", "portfolio", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#hero", id: "hero" },
    { name: "Tentang", href: "#about", id: "about" },
    { name: "Layanan", href: "#services", id: "services" },
    { name: "Portofolio", href: "#portfolio", id: "portfolio" },
    { name: "Blog", href: "#blog", id: "blog" },
    { name: "Kontak", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#090606]/95 backdrop-blur-md border-b border-[rgba(220,60,70,0.2)] py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group cursor-pointer"
          aria-label="Saeful Nazmi Beranda"
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
            <StarIcon className="w-5 h-5 text-[#E31B35] drop-shadow-[0_0_8px_rgba(227,27,53,0.8)]" />
          </div>
          <span className="font-bebas text-xl sm:text-2xl tracking-[0.18em] text-[#EAD5BD] group-hover:text-white transition-colors">
            {PERSONAL_INFO.name.toUpperCase()}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Navigasi Utama">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-xs uppercase tracking-[0.16em] font-medium transition-all duration-200 relative py-1 ${
                  isActive
                    ? "text-[#EAD5BD] font-semibold"
                    : "text-[#A99B94] hover:text-[#EAD5BD]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E31B35] shadow-[0_0_8px_rgba(227,27,53,0.9)] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Mari Ngobrol CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenChat}
            className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#E31B35] text-xs uppercase tracking-wider font-semibold text-[#EAD5BD] bg-[#250B10]/30 hover:bg-[#E31B35] hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(227,27,53,0.5)] active:scale-95 cursor-pointer"
          >
            <span>Mari Ngobrol</span>
            <Send className="w-3.5 h-3.5 text-[#E31B35] group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenChat}
            className="px-3 py-1.5 rounded-full border border-[#E31B35] text-[11px] uppercase tracking-wider font-semibold text-[#EAD5BD] bg-[#250B10]/40"
          >
            Ngobrol
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#EAD5BD] hover:text-white border border-[rgba(220,60,70,0.3)] bg-[#120A0C]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#090606]/98 border-b border-[rgba(220,60,70,0.25)] px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-wider uppercase text-[#CDBAA9] hover:text-white py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                {activeSection === link.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E31B35] shadow-[0_0_6px_#E31B35]" />
                )}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="w-full py-3 rounded-full border border-[#E31B35] text-xs uppercase tracking-widest font-semibold text-white bg-[#E31B35] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(227,27,53,0.4)]"
            >
              <span>Mari Ngobrol</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
