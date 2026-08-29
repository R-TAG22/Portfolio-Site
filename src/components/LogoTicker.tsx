import React from 'react';

interface TechTickerItem {
  name: string;
  category: string;
}

const TECH_ITEMS: TechTickerItem[] = [
  { name: 'Shopify Plus', category: 'E-commerce' },
  { name: 'WooCommerce', category: 'Platform' },
  { name: 'Home Depot', category: 'Catalog' },
  { name: 'WordPress', category: 'CMS' },
  { name: 'Adobe Photoshop', category: 'Design' },
  { name: 'Premiere Pro', category: 'Video' },
  { name: 'DaVinci Resolve', category: 'Grading' },
  { name: 'Google Sheets', category: 'Data & SKUs' },
  { name: 'ChatGPT & AI', category: 'SEO & Copy' },
  { name: 'Canva Pro', category: 'Media' },
  { name: 'Trello & Notion', category: 'Workflows' },
];

const ALL_ITEMS = [...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS];

export const LogoTicker: React.FC = () => {
  return (
    <div
      id="logo-ticker-section"
      className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 py-6 mt-auto z-20 animate-fade-up"
      style={{
        animationDelay: '0.6s',
        animationDuration: '1s',
        animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        animationFillMode: 'both',
      }}
    >
      <div className="flex items-center justify-between mb-2 px-2 text-xs font-bold text-[#2F5D3A] uppercase tracking-wider">
        <span>Trusted Tools & Platform Expertise</span>
        <span className="text-[#3A6B4A] hidden sm:inline font-semibold">Shopify • WooCommerce • Home Depot • Adobe</span>
      </div>

      <div
        id="ticker-wrapper"
        className="w-full overflow-hidden ticker-mask select-none py-2"
      >
        <div
          id="ticker-track"
          className="animate-ticker flex items-center gap-6 sm:gap-8"
        >
          {ALL_ITEMS.map((item, idx) => (
            <div
              key={`tech-item-${idx}`}
              id={`ticker-tech-${idx}`}
              className="flex-none flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#F2F2EE] border-2 border-[#C9DAB0] hover:border-[#3A6B4A] transition-all hover:bg-[#D4E2B0]/30 shadow-sm cursor-default"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#2F5D3A]" />
              <span className="font-bold text-sm text-[#2F5D3A] whitespace-nowrap">
                {item.name}
              </span>
              <span className="text-[11px] font-bold text-[#2F5D3A] bg-[#C9DAB0] px-2 py-0.5 rounded-md">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
