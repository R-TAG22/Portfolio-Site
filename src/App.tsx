import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroLeft } from './components/HeroLeft';
import { CirclesVisualization } from './components/CirclesVisualization';
import { LogoTicker } from './components/LogoTicker';
import { ContactModal } from './components/ContactModal';
import { ResumeModal } from './components/ResumeModal';
import { WorkModal } from './components/WorkModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);

  return (
    <div
      id="app-root"
      className="app relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden text-[#2F5D3A] font-inter selection:bg-[#C9DAB0] selection:text-[#2F5D3A]"
      style={{
        background: `radial-gradient(ellipse at 80% 40%, rgba(201, 218, 176, 0.45) 0%, rgba(212, 226, 176, 0.25) 35%, rgba(242, 242, 238, 0.95) 70%, #F2F2EE 100%), url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_111401_56af5012-2263-45d3-849a-8688084d7c2a.png&w=1280&q=85') center center / cover no-repeat fixed`,
        backgroundColor: '#F2F2EE',
      }}
    >
      {/* Top Header */}
      <Header
        onOpenContact={() => setIsContactOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenWork={() => setIsWorkOpen(true)}
      />

      {/* Hero Content Section */}
      <main
        id="main-hero"
        className="w-full max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-4 lg:py-6 relative z-10"
      >
        <HeroLeft
          onOpenContact={() => setIsContactOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <div
          id="hero-right-wrapper"
          className="flex-1 flex items-center justify-center w-full min-h-[480px] sm:min-h-[580px] lg:min-h-[720px] overflow-visible"
        >
          <CirclesVisualization />
        </div>
      </main>

      {/* Bottom Tech & Platform Ticker */}
      <LogoTicker />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onOpenHire={() => setIsContactOpen(true)}
      />

      <WorkModal
        isOpen={isWorkOpen}
        onClose={() => setIsWorkOpen(false)}
        onOpenHire={() => setIsContactOpen(true)}
      />
    </div>
  );
}
