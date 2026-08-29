import React, { useState } from 'react';
import { useCountUp } from '../hooks/useCountUp';
import { PERSONAL_INFO } from '../data/portfolioData';

interface SpecialistSkillAvatar {
  id: string;
  label: string;
  sublabel: string;
  imgUrl: string;
  angle: number;
  radius: number;
  size: number;
  borderRadius: string;
  glowColor: string;
  flyInDelay: number;
}

export const CirclesVisualization: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<'products' | 'exp' | 'remote'>('products');
  const count = useCountUp(3, 2000, 1200);

  // Specialist tools and avatar orbits
  const orbit1Items: SpecialistSkillAvatar[] = [
    {
      id: 'avatar-russell-main',
      label: 'Russell Taga-an',
      sublabel: '4+ Yrs Store VA',
      imgUrl: PERSONAL_INFO.avatarUrl,
      angle: 270,
      radius: 177,
      size: 64,
      borderRadius: '20px',
      glowColor: 'rgba(201, 218, 176, 0.9)',
      flyInDelay: 0.6,
    },
  ];

  const orbit2Items: SpecialistSkillAvatar[] = [
    {
      id: 'item-shopify',
      label: 'Shopify Expert',
      sublabel: '3,000+ Products',
      imgUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-shopify-logo-icon-svg-download-png-3030263.png',
      angle: 60,
      radius: 251,
      size: 56,
      borderRadius: '50%',
      glowColor: 'rgba(201, 218, 176, 0.8)',
      flyInDelay: 0.8,
    },
    {
      id: 'item-woo',
      label: 'WooCommerce',
      sublabel: 'Store Operations',
      imgUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-woocommerce-logo-icon-svg-download-png-3030282.png',
      angle: 180,
      radius: 251,
      size: 60,
      borderRadius: '50%',
      glowColor: 'rgba(58, 107, 74, 0.8)',
      flyInDelay: 1.0,
    },
    {
      id: 'item-homedepot',
      label: 'Home Depot',
      sublabel: 'Product Uploads',
      imgUrl: 'https://polo-pecan-73837341.figma.site/_assets/v11/d5470a58b02388336141575048720f19a50de832.png',
      angle: 300,
      radius: 251,
      size: 56,
      borderRadius: '20px',
      glowColor: 'rgba(212, 226, 176, 0.8)',
      flyInDelay: 1.2,
    },
  ];

  const orbit3Items: SpecialistSkillAvatar[] = [
    {
      id: 'item-photoshop',
      label: 'Adobe Photoshop',
      sublabel: 'Image Cleanup & Specs',
      imgUrl: 'https://polo-pecan-73837341.figma.site/_assets/v11/018736aa5d0275c4ce56cfebaf2ae3007d81ca1e.png',
      angle: 130,
      radius: 325,
      size: 72,
      borderRadius: '50%',
      glowColor: 'rgba(201, 218, 176, 0.8)',
      flyInDelay: 1.5,
    },
  ];

  const orbit4Items: SpecialistSkillAvatar[] = [
    {
      id: 'item-premiere',
      label: 'Premiere & DaVinci',
      sublabel: 'Social Video Editing',
      imgUrl: 'https://polo-pecan-73837341.figma.site/_assets/v11/c76d8a0b99676de31c014344bfaf75bad090758d.png',
      angle: 30,
      radius: 399,
      size: 56,
      borderRadius: '50%',
      glowColor: 'rgba(58, 107, 74, 0.8)',
      flyInDelay: 1.8,
    },
    {
      id: 'item-ai',
      label: 'ChatGPT & AI',
      sublabel: 'Descriptions & SEO',
      imgUrl: 'https://polo-pecan-73837341.figma.site/_assets/v11/7b1b5f039de7b54cc9913e96c1923c3b15a157fa.png',
      angle: 95,
      radius: 399,
      size: 72,
      borderRadius: '24px',
      glowColor: 'rgba(201, 218, 176, 0.8)',
      flyInDelay: 2.0,
    },
    {
      id: 'item-sheets',
      label: 'Google Sheets',
      sublabel: 'Bulk Data & Inventory',
      imgUrl: 'https://polo-pecan-73837341.figma.site/_assets/v11/9ae171d8895199349755c43fbff00e122221a027.png',
      angle: 220,
      radius: 399,
      size: 72,
      borderRadius: '24px',
      glowColor: 'rgba(212, 226, 176, 0.8)',
      flyInDelay: 2.2,
    },
    {
      id: 'item-willow',
      label: 'Willow Bath & Vanity',
      sublabel: 'Catalog Lead',
      imgUrl: 'https://polo-pecan-73837341.figma.site/_assets/v11/926c9eb7b4bc1df846fa0e39f0b0dc3fefd80671.png',
      angle: 320,
      radius: 399,
      size: 56,
      borderRadius: '50%',
      glowColor: 'rgba(58, 107, 74, 0.8)',
      flyInDelay: 2.3,
    },
  ];

  const renderOrbitItems = (items: SpecialistSkillAvatar[], spinDirection: 'cw' | 'ccw', durationSec: number) => {
    const counterSpinClass = spinDirection === 'ccw' ? 'spin-cw-inline' : 'spin-ccw-inline';

    return items.map((item) => {
      const rad = (item.angle * Math.PI) / 180;
      const x = Math.round(item.radius * Math.cos(rad));
      const y = Math.round(item.radius * Math.sin(rad));

      return (
        <div
          key={item.id}
          id={item.id}
          className="absolute top-1/2 left-1/2 pointer-events-auto group"
          style={{
            transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
          }}
        >
          <div
            style={{
              animation: `avatar-fly-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${item.flyInDelay}s both`,
            }}
          >
            <div
              className={`${counterSpinClass} relative flex items-center justify-center`}
              style={{
                animationDuration: `${durationSec}s`,
              }}
            >
              <img
                src={item.imgUrl}
                alt={item.label}
                className="object-cover transition-transform duration-300 group-hover:scale-115 select-none cursor-pointer bg-[#2F5D3A]"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback if external CDN is blocked
                  (e.target as HTMLElement).style.display = 'none';
                }}
                style={{
                  width: `${item.size}px`,
                  height: `${item.size}px`,
                  borderRadius: item.borderRadius,
                  boxShadow: `0 0 25px ${item.glowColor}`,
                  border: '2px solid #C9DAB0',
                }}
              />

              {/* Tooltip Badge on Hover */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none bg-[#2F5D3A] text-[#F2F2EE] border-2 border-[#C9DAB0] px-2.5 py-1 rounded-lg text-[11px] whitespace-nowrap z-30 shadow-xl">
                <div className="font-bold text-[#C9DAB0]">{item.label}</div>
                <div className="text-[9px] text-[#F2F2EE]/90">{item.sublabel}</div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div
      id="circles-visualization-container"
      className="relative flex-none w-[720px] h-[720px] max-w-full flex items-center justify-center animate-scale-in select-none origin-center transform scale-[0.42] sm:scale-[0.55] md:scale-[0.72] xl:scale-[0.88] 2xl:scale-100 transition-transform duration-300"
      style={{
        animationDuration: '1.2s',
        animationDelay: '0.3s',
        animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* Orbit 4 (Outermost) - 797px, spins CCW 60s */}
      <div
        id="orbit-4"
        className="orbit-circle w-[797px] h-[797px]"
        style={{ animation: 'spin-ccw 60s linear infinite' }}
      >
        <div className="orbit-circle-border" />
        {renderOrbitItems(orbit4Items, 'ccw', 60)}
      </div>

      {/* Orbit 3 - 649px, spins CW 50s */}
      <div
        id="orbit-3"
        className="orbit-circle w-[649px] h-[649px]"
        style={{ animation: 'spin-cw 50s linear infinite' }}
      >
        <div className="orbit-circle-border" />
        {renderOrbitItems(orbit3Items, 'cw', 50)}
      </div>

      {/* Orbit 2 - 501px, spins CW 40s */}
      <div
        id="orbit-2"
        className="orbit-circle w-[501px] h-[501px]"
        style={{ animation: 'spin-cw 40s linear infinite' }}
      >
        <div className="orbit-circle-border" />
        {renderOrbitItems(orbit2Items, 'cw', 40)}
      </div>

      {/* Orbit 1 (Innermost) - 353px, spins CCW 30s */}
      <div
        id="orbit-1"
        className="orbit-circle w-[353px] h-[353px]"
        style={{ animation: 'spin-ccw 30s linear infinite' }}
      >
        <div className="orbit-circle-border" />
        {renderOrbitItems(orbit1Items, 'ccw', 30)}
      </div>

      {/* Center Hub inside Orbit 1 */}
      <div
        id="center-circle-hub"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full flex flex-col items-center justify-center text-center z-10 pointer-events-none bg-gradient-to-b from-[#2F5D3A] to-[#1E3A24] border-3 border-[#C9DAB0] shadow-[0_12px_40px_rgba(47,93,58,0.45)]"
      >
        <span
          id="center-specialists-count"
          className="font-urbanist font-extrabold text-[64px] leading-none text-[#F2F2EE] tracking-tight drop-shadow-[0_4px_16px_rgba(201,218,176,0.5)]"
        >
          {count}k+
        </span>
        <span
          id="center-specialists-label"
          className="font-urbanist font-bold text-[15px] text-[#C9DAB0] tracking-wider mt-2 uppercase letter-spacing-[0.05em]"
        >
          Products Managed
        </span>
        <span className="text-[11px] font-medium text-[#D4E2B0] mt-1">
          Shopify & Home Depot
        </span>
      </div>
    </div>
  );
};
