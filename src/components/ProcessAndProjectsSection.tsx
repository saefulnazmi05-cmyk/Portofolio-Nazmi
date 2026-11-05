import { useState } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { WORKFLOW, PROJECTS, ProjectItem } from "../data/portfolioData";

interface ProcessAndProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onViewAllProjects: () => void;
}

export function ProcessAndProjectsSection({
  onSelectProject,
  onViewAllProjects,
}: ProcessAndProjectsSectionProps) {
  const [activeProcess, setActiveProcess] = useState<string>("01");
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "app") return p.category.toLowerCase().includes("aplikasi") || p.tag.toLowerCase().includes("app");
    if (activeFilter === "branding") return p.category.toLowerCase().includes("brand") || p.tag.toLowerCase().includes("branding");
    return true;
  });

  return (
    <section id="portfolio" className="relative py-16 sm:py-24 bg-[#090606] border-t border-[rgba(220,60,70,0.18)]">
      {/* Decorative ambient background accents */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-[#E31B35]/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-[#4A0D16]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT: MY PROCESS — ALUR KERJA (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A99B94] font-medium block">
                MY PROCESS
              </span>
              <h2 className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-[#EAD5BD] tracking-wide leading-tight mt-1">
                Alur Kerja Saya
              </h2>
              <p className="text-xs sm:text-sm text-[#A99B94] mt-2 leading-relaxed">
                Dari ide hingga hasil terbaik, dengan proses yang terstruktur.
              </p>
            </div>

            {/* Vertical Timeline */}
            <div className="relative pl-2 pt-2">
              {/* Connecting Vertical Luminous Line */}
              <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#E31B35] via-[#E31B35]/60 to-[#4A0D16]/40 shadow-[0_0_8px_rgba(227,27,53,0.5)]" />

              <div className="space-y-6">
                {WORKFLOW.map((step) => {
                  const isSelected = activeProcess === step.number;
                  return (
                    <div
                      key={step.number}
                      onClick={() => setActiveProcess(step.number)}
                      className={`relative flex items-start gap-4 p-2 -ml-2 rounded-lg transition-all duration-300 cursor-pointer ${
                        isSelected ? "bg-[#160B0E]/60 border border-[rgba(220,60,70,0.3)] shadow-[0_0_15px_rgba(227,27,53,0.15)]" : "hover:bg-white/[0.02]"
                      }`}
                    >
                      {/* Numbered Red Circle */}
                      <div
                        className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center font-bebas text-sm shrink-0 transition-all duration-300 ${
                          isSelected
                            ? "bg-[#E31B35] text-white shadow-[0_0_15px_rgba(227,27,53,0.8)] scale-110"
                            : "bg-[#18090C] border border-[#E31B35]/50 text-[#EAD5BD] hover:border-[#E31B35]"
                        }`}
                      >
                        {step.number}
                      </div>

                      {/* Step Details */}
                      <div className="pt-0.5 space-y-1">
                        <h3 className="font-sans font-bold text-sm sm:text-base text-[#EAD5BD] flex items-center gap-2">
                          <span>{step.title}</span>
                          {isSelected && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E31B35] shadow-[0_0_6px_#E31B35]" />
                          )}
                        </h3>
                        <p className="text-xs text-[#A99B94] leading-relaxed">
                          {step.description}
                        </p>
                        {isSelected && (
                          <p className="text-[11px] text-[#CDBAA9] leading-relaxed pt-1.5 border-t border-white/5 animate-in fade-in duration-200">
                            {step.details}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: FEATURED WORK — PROYEK UNGGULAN (lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[rgba(220,60,70,0.18)] pb-4">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#A99B94] font-medium block">
                  FEATURED WORK
                </span>
                <h2 className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-[#EAD5BD] tracking-wide leading-tight mt-1">
                  Proyek Unggulan
                </h2>
              </div>

              {/* Action and Filter Controls */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 p-1 bg-[#120A0C] border border-[rgba(220,60,70,0.2)] rounded-lg">
                  <button
                    onClick={() => setActiveFilter("all")}
                    className={`px-2.5 py-1 text-[11px] font-medium rounded transition-colors ${
                      activeFilter === "all" ? "bg-[#E31B35] text-white" : "text-[#A99B94] hover:text-[#EAD5BD]"
                    }`}
                  >
                    Semua
                  </button>
                  <button
                    onClick={() => setActiveFilter("app")}
                    className={`px-2.5 py-1 text-[11px] font-medium rounded transition-colors ${
                      activeFilter === "app" ? "bg-[#E31B35] text-white" : "text-[#A99B94] hover:text-[#EAD5BD]"
                    }`}
                  >
                    Aplikasi
                  </button>
                  <button
                    onClick={() => setActiveFilter("branding")}
                    className={`px-2.5 py-1 text-[11px] font-medium rounded transition-colors ${
                      activeFilter === "branding" ? "bg-[#E31B35] text-white" : "text-[#A99B94] hover:text-[#EAD5BD]"
                    }`}
                  >
                    Branding
                  </button>
                </div>

                <button
                  onClick={onViewAllProjects}
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#E31B35] hover:text-white transition-colors cursor-pointer"
                >
                  <span>Lihat Semua Proyek</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* 2-Column Grid of 4 Landscape Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className="group relative bg-[#120A0C] border border-[rgba(220,60,70,0.25)] hover:border-[#E31B35] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(227,27,53,0.25)] cursor-pointer flex flex-col"
                >
                  {/* Landscape Image Container with Hover Zoom */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#090606]">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      loading="lazy"
                    />

                    {/* Subtle Gradient Scrim at bottom of image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120A0C] via-[#120A0C]/30 to-transparent" />

                    {/* Tag badge on top right */}
                    <div className="absolute top-2.5 right-2.5">
                      <span className="text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 rounded bg-[#090606]/80 text-[#CDBAA9] border border-white/10 backdrop-blur-sm">
                        {project.tag}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Row */}
                  <div className="p-4 flex items-center justify-between gap-3 bg-[#120A0C] border-t border-[rgba(220,60,70,0.15)]">
                    <div className="min-w-0">
                      <h3 className="font-sans font-bold text-base sm:text-lg text-[#EAD5BD] group-hover:text-white transition-colors truncate">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#A99B94] truncate">
                        {project.category}
                      </p>
                    </div>

                    {/* Circular Red Arrow Button */}
                    <div className="w-8 h-8 rounded-full border border-[#E31B35] bg-[#250B10]/40 group-hover:bg-[#E31B35] flex items-center justify-center shrink-0 transition-all duration-300 shadow-[0_0_10px_rgba(227,27,53,0.3)]">
                      <ArrowRight className="w-3.5 h-3.5 text-[#EAD5BD] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom prompt strip */}
            <div className="p-3 rounded-lg bg-[#120A0C]/50 border border-white/5 flex items-center justify-between text-xs text-[#A99B94]">
              <span>💡 Klik kartu proyek untuk melihat studi kasus, tujuan desain, dan demonstrasi interaktif.</span>
              <span className="text-[#EAD5BD] font-medium hidden sm:inline">4 Proyek Unggulan</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
