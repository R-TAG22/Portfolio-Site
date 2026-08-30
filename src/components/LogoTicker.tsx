import React from 'react';

interface ToolLogoItem {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
}

export const TOOL_LOGOS: ToolLogoItem[] = [
  {
    id: 'shopify',
    name: 'Shopify Plus',
    category: 'E-commerce',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 109 124" fill="none">
        <path
          d="M74.8 17.5c-.4-.4-1-.5-1.5-.4l-5.6 1.7c-.5.2-.9.6-1.1 1.1l-10 27.2c-.3.7.1 1.5.8 1.7.7.3 1.5-.1 1.7-.8l9.6-26.1 4.5-1.3c.7-.2 1.2.3 1.4 1l11.4 56.6-46.7 9.8-24.1-17.6c-.3-.2-.5-.6-.5-1l4.4-44.2 13.9-3.8c.7-.2 1.5.2 1.7.9.2.7-.2 1.5-.9 1.7l-12.7 3.5-3.8 38.3 22.3 16.3 43.8-9.2-10.7-53.1c-.2-.8-.7-1.4-1.4-1.6l-6.3-1.9z"
          fill="#95BF47"
        />
        <path
          d="M60.8 19.8c0-.7-.3-1.4-.9-1.8L44.2 8.7c-1.2-.8-2.8-.5-3.6.7L18.4 43.1c-.4.7-.4 1.5 0 2.2l22.7 39.4 19.7-5.4V19.8z"
          fill="#95BF47"
        />
        <path
          d="M60.8 19.8v59.5l23.5-6.4 10.9-54.3-34.4 1.2z"
          fill="#5E8E3E"
        />
      </svg>
    ),
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    category: 'Platform',
    icon: (
      <svg className="w-9 h-9" viewBox="0 0 100 60" fill="none">
        <rect width="100" height="60" rx="14" fill="#2F5D3A" />
        <path
          d="M20 18h8l5 18 5-18h8l5 18 5-18h8l-8 26h-8l-5-18-5 18h-8L20 18zm43 8c0-5 3.5-9 9-9s9 4 9 9-3.5 9-9 9-9-4-9-9zm12 0c0-2.5-1.5-4.5-3-4.5s-3 2-3 4.5 1.5 4.5 3 4.5 3-2 3-4.5z"
          fill="#F2F2EE"
        />
      </svg>
    ),
  },
  {
    id: 'homedepot',
    name: 'The Home Depot',
    category: 'Catalog Partner',
    icon: (
      <div className="w-8 h-8 rounded-lg bg-[#F96302] flex items-center justify-center text-white font-extrabold text-[9px] leading-tight font-urbanist p-0.5 text-center shadow-xs">
        HOME DEPOT
      </div>
    ),
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    category: 'CMS',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="48" fill="#2F5D3A" />
        <path
          d="M50 8C26.8 8 8 26.8 8 50c0 10.7 4 20.4 10.6 27.8L38.2 24.3c.7-2 .3-3.3-1.1-3.6l-3.3-.3v-1.8h17.4v1.8l-4.4.4c-1.5.1-2.1 1.6-1.5 3.5L55 53.6l6.8-19.8c.8-2.3.2-3.6-1.2-3.8l-3.8-.4v-1.8h17.2v1.8l-3.5.3c-1.5.1-2.2 1.6-1.5 3.5l12.7 36.9C88.2 63.8 92 57.3 92 50c0-23.2-18.8-42-42-42zM15 50c0 4.2.8 8.2 2.3 11.9l16.1-46.7C22.6 23.3 15 35.8 15 50zm35 34.3c-3 0-5.8-.4-8.5-1.2L28.2 46.2 43 89c2.3.6 4.7.9 7 .9 3.5 0 6.9-.5 10.1-1.6L44.8 44.1 50 84.3z"
          fill="#C9DAB0"
        />
      </svg>
    ),
  },
  {
    id: 'photoshop',
    name: 'Adobe Photoshop',
    category: 'Image Editing',
    icon: (
      <div className="w-8 h-8 rounded-lg bg-[#001E36] border border-[#31A8FF] flex items-center justify-center text-[#31A8FF] font-black text-sm font-urbanist shadow-xs">
        Ps
      </div>
    ),
  },
  {
    id: 'premiere',
    name: 'Adobe Premiere Pro',
    category: 'Video Production',
    icon: (
      <div className="w-8 h-8 rounded-lg bg-[#00005B] border border-[#9999FF] flex items-center justify-center text-[#9999FF] font-black text-sm font-urbanist shadow-xs">
        Pr
      </div>
    ),
  },
  {
    id: 'davinci',
    name: 'DaVinci Resolve',
    category: 'Color & Mastering',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="48" fill="#1C1C1E" />
        <path d="M50 20 L75 65 L25 65 Z" fill="#E63946" />
        <path d="M65 35 L80 80 L35 75 Z" fill="#457B9D" opacity="0.85" />
        <path d="M35 35 L65 75 L20 80 Z" fill="#2A9D8F" opacity="0.85" />
      </svg>
    ),
  },
  {
    id: 'sheets',
    name: 'Google Sheets',
    category: 'Data & Metafields',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="4" width="48" height="56" rx="6" fill="#0F9D58" />
        <path d="M40 4 L56 20 L40 20 Z" fill="#87CEAB" />
        <rect x="18" y="24" width="28" height="24" rx="2" fill="#FFFFFF" />
        <path d="M18 32 h28 M18 40 h28 M32 24 v24" stroke="#0F9D58" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    id: 'canva',
    name: 'Canva Pro',
    category: 'Marketing Visuals',
    icon: (
      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00C4CC] to-[#7D2AE8] flex items-center justify-center text-white font-black text-xs font-urbanist shadow-xs italic">
        Canva
      </div>
    ),
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT / AI',
    category: 'Copy & SEO',
    icon: (
      <div className="w-8 h-8 rounded-lg bg-[#10A37F] flex items-center justify-center text-white p-1 shadow-xs">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464z" />
        </svg>
      </div>
    ),
  },
  {
    id: 'capcut',
    name: 'CapCut',
    category: 'Video Reels',
    icon: (
      <div className="w-8 h-8 rounded-lg bg-black border border-white/20 flex items-center justify-center p-1 shadow-xs">
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 8l8 4-8 4V8zm16 0l-8 4 8 4V8z" />
        </svg>
      </div>
    ),
  },
];

const ALL_LOGOS = [...TOOL_LOGOS, ...TOOL_LOGOS, ...TOOL_LOGOS];

export const LogoTicker: React.FC = () => {
  return (
    <footer
      id="app-footer"
      className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 pt-4 pb-6 mt-auto z-20 animate-fade-up font-inter"
      style={{
        animationDelay: '0.4s',
        animationDuration: '0.8s',
        animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        animationFillMode: 'both',
      }}
    >
      {/* Unified White Block Marquee Container */}
      <div
        id="ticker-wrapper"
        className="w-full bg-white border-2 border-[#C9DAB0] rounded-2xl shadow-sm overflow-hidden ticker-mask select-none py-3.5 px-2"
      >
        <div
          id="ticker-track"
          className="animate-ticker flex items-center gap-10 sm:gap-14"
        >
          {ALL_LOGOS.map((item, idx) => (
            <div
              key={`tech-logo-${idx}`}
              id={`ticker-tech-logo-${idx}`}
              className="flex-none flex items-center justify-center transition-transform hover:scale-115 cursor-pointer group"
              title={`${item.name} (${item.category})`}
            >
              <div className="w-8 h-8 flex items-center justify-center">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright text directly below footer */}
      <div
        id="footer-copyright"
        className="mt-4 pt-3 border-t border-[#C9DAB0]/60 text-center text-xs font-semibold text-[#2F5D3A]/80 tracking-wide select-none"
      >
        © 2026 Russell Taga-an
      </div>
    </footer>
  );
};
