import React, { useState, useEffect } from 'react';
import { ChevronRight, FileText, CheckCircle2, Globe } from 'lucide-react';
import { PERSONAL_INFO, METRICS } from '../data/portfolioData';

interface HeroLeftProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

const FULL_TEXT =
  'Unlock Top E-commerce Talent You Thought Was Out of Reach -- Now Just One Click Away!';
const BLACK_CHAR_COUNT = 59; // "Unlock Top E-commerce Talent You Thought Was Out of Reach -- "

export const HeroLeft: React.FC<HeroLeftProps> = ({ onOpenContact, onOpenResume }) => {
  const [typedLength, setTypedLength] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let currentIdx = 0;
      const interval = setInterval(() => {
        currentIdx += 1;
        setTypedLength(currentIdx);
        if (currentIdx >= FULL_TEXT.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 35);

      return () => clearInterval(interval);
    }, 400);

    return () => clearTimeout(startTimeout);
  }, []);

  const typedBlackText = FULL_TEXT.slice(0, Math.min(typedLength, BLACK_CHAR_COUNT));
  const typedWhiteText =
    typedLength > BLACK_CHAR_COUNT ? FULL_TEXT.slice(BLACK_CHAR_COUNT, typedLength) : '';

  return (
    <div
      id="hero-left-section"
      className="flex-none lg:flex-[0_1_620px] w-full max-w-[640px] pt-2 sm:pt-6 lg:pt-8 flex flex-col items-start z-20 animate-fade-up font-inter"
      style={{
        animationDuration: '1s',
        animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* Remote Availability Status Badge */}
      <div
        id="hero-availability-badge"
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2F2EE] border-2 border-[#C9DAB0] shadow-sm text-[12px] font-bold text-[#2F5D3A] mb-4 select-none"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#2F5D3A] animate-pulse" />
        <span>{PERSONAL_INFO.status}</span>
        <span className="text-[#3A6B4A]/50 font-normal hidden sm:inline">|</span>
        <span className="text-[#3A6B4A] text-[11px] font-semibold hidden sm:inline">
          Full-time & Part-time
        </span>
      </div>

      {/* Typewriter Heading */}
      <h1
        id="hero-main-heading"
        className="font-urbanist font-bold text-[32px] sm:text-[42px] md:text-[48px] lg:text-[58px] leading-[1.08] lg:leading-[60px] tracking-[-1.5px] min-h-[140px] sm:min-h-[160px] lg:min-h-[190px]"
      >
        <span className="text-[#2F5D3A]">{typedBlackText}</span>
        <span className="text-[#3A6B4A]">{typedWhiteText}</span>
        {/* Blinking cursor */}
        <span
          id="typing-cursor"
          className={`inline-block w-[3.5px] h-[0.85em] ml-1 bg-[#2F5D3A] align-middle ${
            isTyping ? 'animate-blink' : 'opacity-80 animate-blink'
          }`}
          aria-hidden="true"
        />
      </h1>

      {/* Intro Description from Russell's site */}
      <p
        id="hero-intro-text"
        className="mt-3 text-sm sm:text-base text-[#2F5D3A]/90 font-medium leading-relaxed max-w-xl"
      >
        {PERSONAL_INFO.intro}
      </p>

      {/* Action Buttons: Start Project / Hire Me + View Resume */}
      <div
        id="start-project-container"
        className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 opacity-0 animate-fade-up"
        style={{
          animationDelay: '3.0s',
          animationFillMode: 'forwards',
          animationDuration: '0.8s',
          animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div id="start-project-border-wrap" className="btn-border-wrap">
          <button
            id="start-project-btn"
            type="button"
            onClick={onOpenContact}
            className="btn-start cursor-pointer group"
          >
            <span className="relative z-10 font-semibold">Start Project / Hire Me</span>
            <ChevronRight className="w-[18px] h-[18px] relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <button
          id="hero-view-resume-btn"
          type="button"
          onClick={onOpenResume}
          className="px-5 py-3 rounded-full bg-[#F2F2EE] hover:bg-[#D4E2B0]/40 border-2 border-[#2F5D3A]/40 text-[#2F5D3A] text-sm font-semibold transition-all flex items-center gap-2 shadow-sm cursor-pointer"
        >
          <FileText className="w-4 h-4 text-[#3A6B4A]" />
          <span>View Resume</span>
        </button>
      </div>

      {/* Floating Pointer Cursor Element with "Russell" Badge Pill */}
      <div
        id="hero-floating-cursor"
        className="relative mt-6 sm:mt-8 ml-10 sm:ml-36 lg:ml-[260px] flex items-center gap-2 opacity-0 animate-fade-up select-none pointer-events-none"
        style={{
          animationDelay: '3.4s',
          animationFillMode: 'forwards',
          animationDuration: '0.8s',
          animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {/* Pointer Arrow SVG */}
        <svg
          id="cursor-pointer-svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_2px_8px_rgba(47,93,58,0.5)] -rotate-12 translate-y-1"
        >
          <path
            d="M3 3L10.07 20.07L13.59 13.59L20.07 10.07L3 3Z"
            fill="#2F5D3A"
            stroke="#C9DAB0"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>

        {/* Russell badge pill */}
        <div
          id="cursor-russell-badge"
          className="bg-[#2F5D3A] text-[#F2F2EE] text-[15px] font-semibold px-4 py-1.5 rounded-[20px] shadow-[0_4px_16px_rgba(47,93,58,0.4)] border-2 border-[#C9DAB0] flex items-center gap-1.5"
        >
          <span>Russell</span>
          <span className="text-[10px] bg-[#C9DAB0] text-[#2F5D3A] px-1.5 py-0.5 rounded-full font-bold">VA</span>
        </div>
      </div>

      {/* Bottom Live Metrics */}
      <div
        id="hero-metrics-grid"
        className="mt-6 sm:mt-8 pt-4 border-t-2 border-[#C9DAB0]/70 grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-lg opacity-0 animate-fade-up"
        style={{
          animationDelay: '3.6s',
          animationFillMode: 'forwards',
          animationDuration: '0.8s',
          animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {METRICS.map((m) => (
          <div key={m.id} id={`metric-${m.id}`} className="space-y-0.5">
            <div className="font-urbanist font-extrabold text-2xl sm:text-3xl text-[#2F5D3A] tracking-tight flex items-baseline gap-1">
              <span>{m.value}</span>
            </div>
            <div className="text-[11px] sm:text-xs font-bold text-[#3A6B4A] leading-tight">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
