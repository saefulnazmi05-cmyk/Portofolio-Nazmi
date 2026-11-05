/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { ProcessAndProjectsSection } from "./components/ProcessAndProjectsSection";
import { AboutAndToolsSection } from "./components/AboutAndToolsSection";
import { FooterSection } from "./components/FooterSection";
import { ProjectDetailModal } from "./components/ProjectDetailModal";
import { ServiceDetailModal } from "./components/ServiceDetailModal";
import { ContactModal } from "./components/ContactModal";
import { VideoProfileModal } from "./components/VideoProfileModal";
import { ProjectItem, ServiceItem } from "./data/portfolioData";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isAllServicesOpen, setIsAllServicesOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);

  const handleOpenChat = (serviceTitle?: string) => {
    setPrefilledService(serviceTitle);
    setIsContactOpen(true);
  };

  const handleScrollToPortfolio = () => {
    const el = document.getElementById("portfolio");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#090606] text-[#EAD5BD] font-sans antialiased selection:bg-[#E31B35] selection:text-white bg-grain overflow-x-hidden">
      {/* Editorial Decorative Vertical Border Lines on wide screens */}
      <div className="fixed inset-y-0 left-6 lg:left-12 w-[1px] bg-gradient-to-b from-transparent via-[rgba(220,60,70,0.12)] to-transparent pointer-events-none hidden xl:block z-30" />
      <div className="fixed inset-y-0 right-6 lg:right-12 w-[1px] bg-gradient-to-b from-transparent via-[rgba(220,60,70,0.12)] to-transparent pointer-events-none hidden xl:block z-30" />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenChat={() => handleOpenChat()} />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero Section */}
        <HeroSection
          onOpenVideo={() => setIsVideoOpen(true)}
          onOpenPortfolio={handleScrollToPortfolio}
        />

        {/* Section 2: WHAT I DO — Layanan Unggulan */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onOpenAllServices={() => setIsAllServicesOpen(true)}
        />

        {/* Section 3: MY PROCESS & FEATURED WORK */}
        <ProcessAndProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
          onViewAllProjects={handleScrollToPortfolio}
        />

        {/* Section 4: ABOUT ME & TOOLS I USE */}
        <AboutAndToolsSection />
      </main>

      {/* Section 5: FOOTER — LET'S COLLABORATE */}
      <FooterSection />

      {/* Interactive Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ServiceDetailModal
        service={selectedService}
        isOpenAll={isAllServicesOpen}
        onClose={() => {
          setSelectedService(null);
          setIsAllServicesOpen(false);
        }}
        onConsult={(serviceName) => {
          setSelectedService(null);
          setIsAllServicesOpen(false);
          handleOpenChat(serviceName);
        }}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => {
          setIsContactOpen(false);
          setPrefilledService(undefined);
        }}
        prefilledService={prefilledService}
      />

      <VideoProfileModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        onViewWork={handleScrollToPortfolio}
      />
    </div>
  );
}
