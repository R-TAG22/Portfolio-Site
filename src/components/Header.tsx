import React, { useState } from 'react';
import { Menu, X, Download, FileText, Briefcase, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
  onOpenWork: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenContact,
  onOpenResume,
  onOpenWork,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      id="main-header"
      className="w-full max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16 py-6 flex items-center justify-between animate-fade-down relative z-30 font-inter"
      style={{
        animationDuration: '0.8s',
        animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* Left side: Russell. branding + Nav links */}
      <div id="header-left" className="flex items-center gap-8 lg:gap-12">
        <a
          id="brand-logo-link"
          href="#"
          className="flex items-center gap-2.5 group select-none"
        >
          <div className="w-8 h-8 rounded-full border-2 border-[#C9DAB0] overflow-hidden bg-[#2F5D3A]/10 flex items-center justify-center group-hover:border-[#3A6B4A] transition-all">
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="font-urbanist font-extrabold text-2xl tracking-tight text-[#2F5D3A]">
            Russell<span className="text-[#3A6B4A] group-hover:text-[#C9DAB0] transition-colors">.</span>
          </div>
        </a>

        {/* Desktop Nav links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-6 lg:gap-8">
          <button
            id="nav-link-services"
            type="button"
            onClick={onOpenWork}
            className="nav-link text-[#2F5D3A] hover:text-[#3A6B4A] text-[15px] font-semibold tracking-tight bg-transparent border-0 p-0"
          >
            Services & Work
          </button>
          <button
            id="nav-link-experience"
            type="button"
            onClick={onOpenResume}
            className="nav-link text-[#2F5D3A] hover:text-[#3A6B4A] text-[15px] font-semibold tracking-tight bg-transparent border-0 p-0"
          >
            Experience
          </button>
          <a
            id="nav-link-portfolio"
            href={PERSONAL_INFO.portfolioSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link text-[#2F5D3A] hover:text-[#3A6B4A] text-[15px] font-semibold tracking-tight"
          >
            Original Site ↗
          </a>
          <button
            id="nav-link-contact"
            type="button"
            onClick={onOpenContact}
            className="nav-link text-[#2F5D3A] hover:text-[#3A6B4A] text-[15px] font-semibold tracking-tight bg-transparent border-0 p-0"
          >
            Contact
          </button>
        </nav>
      </div>

      {/* Right side: Resume link + Hire Me button */}
      <div id="header-right" className="flex items-center gap-4 sm:gap-6 lg:gap-8">
        <button
          id="login-link"
          type="button"
          onClick={onOpenResume}
          className="nav-link text-[#2F5D3A] text-[15px] font-semibold tracking-tight hover:text-[#3A6B4A] bg-transparent border-0 p-0 hidden sm:inline-block cursor-pointer"
        >
          View Resume
        </button>

        <div id="join-now-wrap" className="btn-border-wrap">
          <button
            id="join-now-btn"
            type="button"
            onClick={onOpenContact}
            className="btn-join cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#C9DAB0] group-hover:text-white" />
              <span>Hire Me</span>
            </span>
          </button>
        </div>

        {/* Mobile menu toggle button */}
        <button
          id="mobile-menu-toggle"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#2F5D3A] p-2 hover:opacity-80 transition-opacity"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#2F5D3A]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="absolute top-full left-0 right-0 bg-[#2F5D3A] text-[#F2F2EE] border-b border-[#C9DAB0]/30 px-8 py-6 flex flex-col gap-4 md:hidden shadow-2xl z-50 rounded-b-2xl"
        >
          <button
            id="mobile-nav-services"
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenWork();
            }}
            className="text-left text-[#F2F2EE] text-base font-semibold hover:text-[#C9DAB0] transition-colors py-2 border-b border-white/10"
          >
            Services & Work
          </button>
          <button
            id="mobile-nav-experience"
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="text-left text-[#F2F2EE] text-base font-semibold hover:text-[#C9DAB0] transition-colors py-2 border-b border-white/10"
          >
            Experience & Resume
          </button>
          <button
            id="mobile-nav-contact"
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="text-left text-[#F2F2EE] text-base font-semibold hover:text-[#C9DAB0] transition-colors py-2 border-b border-white/10"
          >
            Contact & Hire Me
          </button>
          <a
            id="mobile-nav-original-site"
            href={PERSONAL_INFO.portfolioSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-left text-[#C9DAB0] text-sm font-semibold hover:text-[#D4E2B0] transition-colors py-2"
          >
            Open Original Site ↗
          </a>
        </div>
      )}
    </header>
  );
};
