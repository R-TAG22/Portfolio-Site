import React from 'react';
import { Mail, CheckCircle2, ShieldCheck, Cpu, Wifi, Globe, Clock, ArrowRight, Award, Zap, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, CORE_SKILLS } from '../data/portfolioData';
import { RussellPortrait } from './RussellPortrait';

interface AboutPageProps {
  onOpenHire: () => void;
  onGoToWork: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenHire, onGoToWork }) => {
  return (
    <div
      id="about-page"
      className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-12 animate-fade-up font-inter text-[#2F5D3A]"
      style={{
        animationDuration: '0.6s',
        animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* Hero Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b-2 border-[#C9DAB0]/70">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-[#C9DAB0] shadow-xs text-xs font-bold text-[#2F5D3A]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2F5D3A] animate-pulse" />
            <span>Virtual Assistant & E-commerce Operations</span>
          </div>
          <h1 className="font-urbanist font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#2F5D3A] tracking-tight leading-tight">
            Hi, I'm Russell Taga-an.
          </h1>
          <p className="text-base sm:text-lg text-[#2F5D3A]/85 font-medium leading-relaxed">
            A detail-driven E-commerce Virtual Assistant with over 4 years of hands-on experience scaling online stores, managing complex product catalogs, and automating daily operations.
          </p>
        </div>

        {/* Profile Card */}
        <div className="flex-none p-5 rounded-2xl bg-white border-2 border-[#C9DAB0] shadow-md flex items-center gap-5 w-full sm:w-auto">
          <div className="w-20 h-20 flex-none">
            <RussellPortrait
              className="w-full h-full"
              blobVariant="green"
              showUploadControl={false}
            />
          </div>
          <div className="space-y-1">
            <h3 className="font-urbanist font-bold text-xl text-[#2F5D3A]">{PERSONAL_INFO.name}</h3>
            <p className="text-xs text-[#3A6B4A] font-semibold">{PERSONAL_INFO.role}</p>
            <div className="text-[11px] font-bold text-[#2F5D3A] bg-[#C9DAB0]/50 px-2.5 py-0.5 rounded-md inline-block">
              {PERSONAL_INFO.location}
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Story & Remote Readiness */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-10">
        {/* Left 2 Cols: My Story & What I Bring */}
        <div className="lg:col-span-2 space-y-8">
          <section className="space-y-4">
            <h2 className="font-urbanist font-bold text-2xl text-[#2F5D3A] flex items-center gap-2.5">
              <Sparkles className="w-6 h-6 text-[#3A6B4A]" />
              <span>Background & Experience</span>
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#2F5D3A]/90 font-medium leading-relaxed bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#C9DAB0] shadow-sm">
              <p>
                Throughout my 4+ years in e-commerce, I have partnered with brands and retail suppliers like <strong>Willow Bath and Vanity</strong> to manage thousands of products across <strong>Shopify, WooCommerce, and Home Depot</strong>.
              </p>
              <p>
                My focus is operational excellence: ensuring every product listing has pixel-perfect imagery, high-converting SEO copy, accurate specifications, correct variant matrices, and seamless inventory sync.
              </p>
              <p>
                Beyond standard catalog updates, I bring rich multimedia editing capabilities (Adobe Photoshop, Premiere Pro, DaVinci Resolve) to produce commercial-grade product assets and social media clips.
              </p>
            </div>
          </section>

          {/* Timeline of Experience */}
          <section className="space-y-4">
            <h2 className="font-urbanist font-bold text-2xl text-[#2F5D3A] flex items-center gap-2.5">
              <Award className="w-6 h-6 text-[#3A6B4A]" />
              <span>Career Milestones</span>
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border-2 bg-white transition-all shadow-sm ${
                    exp.featured ? 'border-[#2F5D3A]' : 'border-[#C9DAB0]'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="font-bold text-lg text-[#2F5D3A]">{exp.title}</h3>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#C9DAB0] text-[#2F5D3A] self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-[#3A6B4A] mb-3">{exp.company}</div>
                  <ul className="space-y-2">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="text-xs sm:text-sm text-[#2F5D3A]/90 font-medium flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#2F5D3A] mt-1.5 flex-none" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right 1 Col: Remote Tech Setup & Skills */}
        <div className="space-y-6">
          {/* Workstation & Remote Specs */}
          <div className="p-6 rounded-2xl bg-white border-2 border-[#C9DAB0] shadow-sm space-y-4">
            <h3 className="font-urbanist font-bold text-lg text-[#2F5D3A] flex items-center gap-2 border-b-2 border-[#C9DAB0]/60 pb-3">
              <Cpu className="w-5 h-5 text-[#2F5D3A]" />
              <span>Hardware & Workspace</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-[#2F5D3A]">
              <div className="p-3.5 rounded-xl bg-[#F2F2EE] border border-[#C9DAB0]">
                <div className="font-bold text-[#3A6B4A] flex items-center gap-1.5 mb-1">
                  <Wifi className="w-4 h-4" />
                  <span>Internet Connection</span>
                </div>
                <p className="font-medium text-xs">{PERSONAL_INFO.internet}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F2F2EE] border border-[#C9DAB0]">
                <div className="font-bold text-[#3A6B4A] flex items-center gap-1.5 mb-1">
                  <Cpu className="w-4 h-4" />
                  <span>Dual Rig Setup</span>
                </div>
                <p className="font-medium text-xs">{PERSONAL_INFO.equipment}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F2F2EE] border border-[#C9DAB0]">
                <div className="font-bold text-[#3A6B4A] flex items-center gap-1.5 mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Timezone Compatibility</span>
                </div>
                <p className="font-medium text-xs">{PERSONAL_INFO.availabilityDetails}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F2F2EE] border border-[#C9DAB0]">
                <div className="font-bold text-[#3A6B4A] flex items-center gap-1.5 mb-1">
                  <Globe className="w-4 h-4" />
                  <span>Languages</span>
                </div>
                <p className="font-medium text-xs">English (Fluent) • Filipino (Native)</p>
              </div>
            </div>
          </div>

          {/* Core Tools */}
          <div className="p-6 rounded-2xl bg-white border-2 border-[#C9DAB0] shadow-sm space-y-4">
            <h3 className="font-urbanist font-bold text-lg text-[#2F5D3A] flex items-center gap-2 border-b-2 border-[#C9DAB0]/60 pb-3">
              <Zap className="w-5 h-5 text-[#2F5D3A]" />
              <span>Skills & Technologies</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {CORE_SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-lg text-xs font-bold bg-[#F2F2EE] border border-[#C9DAB0] text-[#2F5D3A] hover:bg-[#C9DAB0]/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Action Card */}
          <div className="p-6 rounded-2xl bg-[#2F5D3A] text-[#F2F2EE] shadow-lg space-y-4">
            <h4 className="font-urbanist font-bold text-xl text-[#F2F2EE]">Ready to work together?</h4>
            <p className="text-xs text-[#D4E2B0] font-medium leading-relaxed">
              Available immediately for full-time or part-time store management and daily virtual assistance.
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <button
                type="button"
                onClick={onOpenHire}
                className="w-full py-3 rounded-full bg-[#C9DAB0] hover:bg-[#D4E2B0] text-[#2F5D3A] font-bold text-sm transition-all shadow-sm text-center cursor-pointer"
              >
                Hire Me Now →
              </button>
              <button
                type="button"
                onClick={onGoToWork}
                className="w-full py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F2F2EE] font-semibold text-xs transition-all border border-white/20 text-center cursor-pointer"
              >
                Explore Selected Work ↗
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
