import React from 'react';
import { ExternalLink, ShoppingBag, FileText, Headphones, Video, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICES, PROJECTS } from '../data/portfolioData';

interface WorkPageProps {
  onOpenHire: () => void;
}

export interface ClientStore {
  id: string;
  name: string;
  url: string;
  category: string;
  role: string;
  metrics: string;
  description: string;
  tags: string[];
}

export const CLIENT_STORES: ClientStore[] = [
  {
    id: 'willow-bath',
    name: 'Willow Bath and Vanity',
    url: 'https://willowbathandvanity.com/',
    category: 'Luxury Bathroom Vanities & Fixtures',
    role: 'E-commerce VA & Catalog Lead',
    metrics: '3,000+ Products & Multi-Channel Uploads',
    description: 'Managed product catalog across Shopify, WooCommerce, and Home Depot. Formatted structured specifications, variant pricing matrices, SEO titles, and Photoshop product imagery.',
    tags: ['Shopify', 'WooCommerce', 'Home Depot', 'Adobe Photoshop'],
  },
  {
    id: 'sultans-fabrics',
    name: "Sultan's Fine Fabrics",
    url: 'https://www.sultansfinefabrics.com/',
    category: 'Premium Textiles & Bespoke Tailoring',
    role: 'Catalog & Store Operations Assistant',
    metrics: 'Inventory Sync & Fabric Variations',
    description: 'Maintained fabric swatch collections, luxury suiting catalogs, price tiers, and inventory availability across high-ticket tailoring lines.',
    tags: ['E-commerce', 'Inventory Management', 'Product Variations', 'Quality Control'],
  },
  {
    id: 'canton-roast',
    name: 'Canton Roast',
    url: 'https://cantonroast.com/',
    category: 'Culinary Brand & Online Ordering',
    role: 'Store Listings & Content Support',
    metrics: 'Menu Restructuring & Digital Assets',
    description: 'Structured online menu items, imagery optimization, pricing updates, and digital brand presence support.',
    tags: ['Online Ordering', 'Catalog Setup', 'Image Optimization', 'Content Entry'],
  },
];

export const WorkPage: React.FC<WorkPageProps> = ({ onOpenHire }) => {
  const iconMap: Record<string, React.ReactNode> = {
    ShoppingBag: <ShoppingBag className="w-5 h-5 text-[#2F5D3A]" />,
    FileText: <FileText className="w-5 h-5 text-[#2F5D3A]" />,
    Headphones: <Headphones className="w-5 h-5 text-[#2F5D3A]" />,
    Video: <Video className="w-5 h-5 text-[#2F5D3A]" />,
  };

  return (
    <div
      id="work-page"
      className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-12 animate-fade-up font-inter text-[#2F5D3A]"
      style={{
        animationDuration: '0.6s',
        animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* Header */}
      <div className="space-y-3 pb-8 border-b-2 border-[#C9DAB0]/70">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-[#C9DAB0] shadow-xs text-xs font-bold text-[#2F5D3A]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2F5D3A]" />
          <span>Client Stores & Services Portfolio</span>
        </div>
        <h1 className="font-urbanist font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#2F5D3A] tracking-tight">
          Selected Work & Store Operations
        </h1>
        <p className="text-base sm:text-lg text-[#2F5D3A]/85 font-medium max-w-3xl leading-relaxed">
          Explore stores I've supported with product listings, catalog cleanups, multi-channel uploads, and day-to-day operations. Click on any store card to visit the live site.
        </p>
      </div>

      {/* Featured Client Stores (Direct Links) */}
      <div className="py-10 space-y-6">
        <h2 className="font-urbanist font-bold text-2xl text-[#2F5D3A] flex items-center justify-between">
          <span>Client Stores Worked On</span>
          <span className="text-xs font-bold text-[#3A6B4A] uppercase tracking-wider">Live E-commerce Sites</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLIENT_STORES.map((store) => (
            <a
              key={store.id}
              href={store.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-white border-2 border-[#C9DAB0] hover:border-[#2F5D3A] transition-all shadow-sm hover:shadow-lg flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#3A6B4A] bg-[#C9DAB0]/40 px-2.5 py-1 rounded-md">
                    {store.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-[#2F5D3A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <h3 className="font-urbanist font-bold text-xl text-[#2F5D3A] group-hover:text-[#3A6B4A] transition-colors">
                  {store.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#2F5D3A]/90 font-medium leading-relaxed">
                  {store.description}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t-2 border-[#C9DAB0]/50">
                <div className="text-xs font-bold text-[#2F5D3A] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2F5D3A]" />
                  <span>{store.metrics}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {store.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#F2F2EE] border border-[#C9DAB0] text-[#2F5D3A]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-10 border-t-2 border-[#C9DAB0]/70 space-y-6">
        <h2 className="font-urbanist font-bold text-2xl text-[#2F5D3A]">
          Core Services & Responsibilities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border-2 border-[#C9DAB0] hover:border-[#2F5D3A] transition-all space-y-3 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#C9DAB0]/40 border border-[#2F5D3A]/30 flex items-center justify-center">
                  {iconMap[s.iconName] || <ShoppingBag className="w-5 h-5 text-[#2F5D3A]" />}
                </div>
                <h3 className="font-urbanist font-bold text-lg text-[#2F5D3A]">{s.title}</h3>
                <p className="text-xs text-[#2F5D3A]/90 font-medium leading-relaxed">{s.description}</p>
              </div>

              <div className="flex flex-wrap gap-1 pt-2 border-t border-[#C9DAB0]/50">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[10px] bg-[#C9DAB0] text-[#2F5D3A] font-bold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="mt-8 p-8 rounded-2xl bg-[#2F5D3A] text-[#F2F2EE] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="font-urbanist font-bold text-2xl text-[#F2F2EE]">
            Need a reliable VA to run your store operations?
          </h3>
          <p className="text-sm text-[#D4E2B0] font-medium max-w-xl">
            Whether you need bulk product uploading, inventory sync, Home Depot management, or daily maintenance, let's talk.
          </p>
        </div>
        <button
          type="button"
          onClick={onOpenHire}
          className="btn-join px-8 py-3.5 text-sm font-bold bg-[#C9DAB0] text-[#2F5D3A] rounded-full hover:bg-[#D4E2B0] shadow-md flex-none cursor-pointer"
        >
          <span className="relative z-10">Hire Russell →</span>
        </button>
      </div>
    </div>
  );
};
