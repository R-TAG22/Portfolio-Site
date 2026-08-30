import React from 'react';
import { ExternalLink, Plus } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { RussellPortrait } from './RussellPortrait';

interface StoreOrbitItem {
  id: string;
  name: string;
  sublabel: string;
  url?: string;
  isBlank: boolean;
  angle: number;
  radius: number;
  size: number;
  orbitIndex: number;
  flyInDelay: number;
  fallbackInitials?: string;
  faviconDomain?: string;
}

export const CirclesVisualization: React.FC = () => {
  // 8 Total Planetary Orbit Slots: 3 Live Client Stores + 5 Blank Slots
  const orbitItems: StoreOrbitItem[] = [
    // 1st site: Willow Bath and Vanity
    {
      id: 'store-willow-bath',
      name: 'Willow Bath & Vanity',
      sublabel: 'Shopify & Home Depot • Visit ↗',
      url: 'https://willowbathandvanity.com/',
      isBlank: false,
      angle: 270,
      radius: 177,
      size: 64,
      orbitIndex: 1,
      flyInDelay: 0.5,
      fallbackInitials: 'WB',
      faviconDomain: 'willowbathandvanity.com',
    },
    // 2nd site: Sultan's Fine Fabrics
    {
      id: 'store-sultans-fabrics',
      name: "Sultan's Fine Fabrics",
      sublabel: 'Luxury Textiles • Visit ↗',
      url: 'https://www.sultansfinefabrics.com/',
      isBlank: false,
      angle: 60,
      radius: 251,
      size: 60,
      orbitIndex: 2,
      flyInDelay: 0.8,
      fallbackInitials: 'SF',
      faviconDomain: 'sultansfinefabrics.com',
    },
    // 3rd site: Canton Roast
    {
      id: 'store-canton-roast',
      name: 'Canton Roast',
      sublabel: 'Online Ordering • Visit ↗',
      url: 'https://cantonroast.com/',
      isBlank: false,
      angle: 150,
      radius: 325,
      size: 64,
      orbitIndex: 3,
      flyInDelay: 1.1,
      fallbackInitials: 'CR',
      faviconDomain: 'cantonroast.com',
    },
    // 4th site: Blank slot
    {
      id: 'slot-blank-4',
      name: 'Available Store Slot',
      sublabel: 'Your Store Next',
      isBlank: true,
      angle: 230,
      radius: 251,
      size: 46,
      orbitIndex: 2,
      flyInDelay: 1.3,
    },
    // 5th site: Blank slot
    {
      id: 'slot-blank-5',
      name: 'Available Store Slot',
      sublabel: 'Your Store Next',
      isBlank: true,
      angle: 320,
      radius: 325,
      size: 48,
      orbitIndex: 3,
      flyInDelay: 1.5,
    },
    // 6th site: Blank slot
    {
      id: 'slot-blank-6',
      name: 'Available Store Slot',
      sublabel: 'Your Store Next',
      isBlank: true,
      angle: 35,
      radius: 399,
      size: 46,
      orbitIndex: 4,
      flyInDelay: 1.7,
    },
    // 7th site: Blank slot
    {
      id: 'slot-blank-7',
      name: 'Available Store Slot',
      sublabel: 'Your Store Next',
      isBlank: true,
      angle: 185,
      radius: 399,
      size: 46,
      orbitIndex: 4,
      flyInDelay: 1.9,
    },
    // 8th site: Blank slot
    {
      id: 'slot-blank-8',
      name: 'Available Store Slot',
      sublabel: 'Your Store Next',
      isBlank: true,
      angle: 285,
      radius: 399,
      size: 46,
      orbitIndex: 4,
      flyInDelay: 2.1,
    },
  ];

  const handlePlanetClick = (item: StoreOrbitItem) => {
    if (!item.isBlank && item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
  };

  const renderOrbitLayer = (orbitNumber: number, spinDir: 'cw' | 'ccw', durationSec: number) => {
    const itemsInOrbit = orbitItems.filter((it) => it.orbitIndex === orbitNumber);
    const counterSpinClass = spinDir === 'ccw' ? 'spin-cw-inline' : 'spin-ccw-inline';

    return itemsInOrbit.map((item) => {
      const rad = (item.angle * Math.PI) / 180;
      const x = Math.round(item.radius * Math.cos(rad));
      const y = Math.round(item.radius * Math.sin(rad));

      return (
        <div
          key={item.id}
          id={item.id}
          className="absolute top-1/2 left-1/2 pointer-events-auto group z-20"
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
              {item.isBlank ? (
                // Blank planet placeholder slot
                <div
                  className="rounded-full bg-white/70 border-2 border-dashed border-[#C9DAB0] flex items-center justify-center transition-all duration-300 group-hover:border-[#2F5D3A] group-hover:scale-110 shadow-xs cursor-pointer group-hover:bg-[#C9DAB0]/30"
                  style={{
                    width: `${item.size}px`,
                    height: `${item.size}px`,
                  }}
                >
                  <Plus className="w-4 h-4 text-[#3A6B4A]/60 group-hover:text-[#2F5D3A]" />
                </div>
              ) : (
                // Active Client Store Planet
                <button
                  type="button"
                  onClick={() => handlePlanetClick(item)}
                  className="relative rounded-full bg-white border-2 border-[#2F5D3A] flex items-center justify-center transition-all duration-300 group-hover:scale-115 shadow-[0_6px_20px_rgba(47,93,58,0.25)] group-hover:shadow-[0_8px_25px_rgba(47,93,58,0.4)] cursor-pointer overflow-hidden p-1.5"
                  style={{
                    width: `${item.size}px`,
                    height: `${item.size}px`,
                  }}
                  title={`Open ${item.name}`}
                >
                  {/* Store Favicon with fallback */}
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${item.faviconDomain}&sz=128`}
                    alt={item.name}
                    className="w-full h-full object-contain rounded-full select-none"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Fallback Monogram Badge */}
                  <span className="font-urbanist font-extrabold text-xs text-[#2F5D3A] select-none absolute inset-0 -z-10 flex items-center justify-center bg-[#F2F2EE]">
                    {item.fallbackInitials}
                  </span>

                  {/* Tiny External Link Indicator */}
                  <div className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#2F5D3A] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-2.5 h-2.5" />
                  </div>
                </button>
              )}

              {/* Hover Tooltip Card */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none bg-[#2F5D3A] text-[#F2F2EE] border-2 border-[#C9DAB0] px-3 py-1.5 rounded-xl text-center z-40 shadow-2xl whitespace-nowrap min-w-[120px]">
                <div className="font-bold text-xs text-[#C9DAB0]">{item.name}</div>
                <div className="text-[10px] text-[#F2F2EE]/90 font-medium">{item.sublabel}</div>
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
        {renderOrbitLayer(4, 'ccw', 60)}
      </div>

      {/* Orbit 3 - 649px, spins CW 50s */}
      <div
        id="orbit-3"
        className="orbit-circle w-[649px] h-[649px]"
        style={{ animation: 'spin-cw 50s linear infinite' }}
      >
        <div className="orbit-circle-border" />
        {renderOrbitLayer(3, 'cw', 50)}
      </div>

      {/* Orbit 2 - 501px, spins CW 40s */}
      <div
        id="orbit-2"
        className="orbit-circle w-[501px] h-[501px]"
        style={{ animation: 'spin-cw 40s linear infinite' }}
      >
        <div className="orbit-circle-border" />
        {renderOrbitLayer(2, 'cw', 40)}
      </div>

      {/* Orbit 1 (Innermost) - 353px, spins CCW 30s */}
      <div
        id="orbit-1"
        className="orbit-circle w-[353px] h-[353px]"
        style={{ animation: 'spin-ccw 30s linear infinite' }}
      >
        <div className="orbit-circle-border" />
        {renderOrbitLayer(1, 'ccw', 30)}
      </div>

      {/* Center Hub: Russell's Photo with Organic Blob Shape & White Background (matching 3rd pic) */}
      <div
        id="center-curve-hub"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] sm:w-[260px] sm:h-[260px] flex items-center justify-center z-10 select-none group"
      >
        {/* Layer 1: Ambient Sage Glow */}
        <div
          className="absolute inset-[-10px] organic-blob-shape-delayed bg-[#C9DAB0]/60 -z-20 blur-[4px] transition-transform duration-700 group-hover:scale-105"
        />

        {/* Layer 2: Main Russell Portrait Component with White Card & Organic Blob */}
        <RussellPortrait
          className="w-full h-full"
          blobVariant="green"
          showUploadControl={true}
        />

        {/* Floating Name Badge */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#2F5D3A] text-[#F2F2EE] border-2 border-[#C9DAB0] text-[11px] font-bold px-4 py-1 rounded-full shadow-lg whitespace-nowrap flex items-center gap-2 pointer-events-none z-30 transition-transform duration-300 group-hover:scale-105">
          <span className="w-2 h-2 rounded-full bg-[#C9DAB0] animate-pulse" />
          <span>Russell Taga-an</span>
        </div>
      </div>
    </div>
  );
};
