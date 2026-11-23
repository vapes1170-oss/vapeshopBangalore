import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Truck, 
  Clock, 
  MapPin, 
  PhoneCall, 
  CheckCircle2, 
  AlertTriangle,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

export default function Footer() {
  const topBrands = [
    { name: 'Elf Bar Disposable Vapes (BC5000, AF5000)', href: '/#bestsellers' },
    { name: 'Lost Mary Turbo Vapes (MT35000, BM6000)', href: '/#bestsellers' },
    { name: 'Uwell Caliburn Pod Kits (G3 Pro, G4, KOKO)', href: '/#bestsellers' },
    { name: 'Vaporesso Pod Systems (XROS 3, Armour G, GTX)', href: '/#bestsellers' },
    { name: 'Geekvape Aegis Series (B60 Boost 2 60W)', href: '/#bestsellers' },
    { name: 'Nasty Bolt 50K Hyper Puff Series', href: '/#bestsellers' },
    { name: 'VOOPOO Argus & VMATE Gift Sets', href: '/#bestsellers' },
    { name: 'iGET 10000 Puffs Disposable Pods', href: '/#bestsellers' },
    { name: 'Pod Salt UK Nicotine Salts (30ml)', href: '/#bestsellers' },
  ];

  const popularCategories = [
    { name: 'High-Puff Disposable Vapes (5K to 50K)', href: '/#bestsellers' },
    { name: 'Refillable Pod Mod Kits & Systems', href: '/#bestsellers' },
    { name: 'Nicotine Salt E-Liquids (20mg, 50mg)', href: '/#bestsellers' },
    { name: 'Freebase Sub-Ohm E-Liquids', href: '/#bestsellers' },
    { name: 'Original Mesh Replacement Coils', href: '/#bestsellers' },
    { name: 'Leak-Proof Refillable Pod Cartridges', href: '/#bestsellers' },
    { name: 'Starter Vape Kits for Adults', href: '/#bestsellers' },
    { name: 'Dual Flavor & Boost Mode Vapes', href: '/#bestsellers' },
  ];

  const bangaloreLocations = [
    { name: 'Vape Delivery Koramangala (2-4 Hrs)', href: '/locations/koramangala' },
    { name: 'Vape Shop Indiranagar & 100ft Road', href: '/locations/indiranagar' },
    { name: 'Vape Delivery HSR Layout (All Sectors)', href: '/locations/hsr-layout' },
    { name: 'Vape Store Whitefield & ITPL', href: '/locations/whitefield' },
    { name: 'Vape Shop JP Nagar & Jayanagar', href: '/locations/jp-nagar' },
    { name: 'Same-Day Delivery MG Road & Brigade Rd', href: '/locations/mg-road' },
    { name: 'Vape Delivery Bellandur & Outer Ring Rd', href: '/locations/bellandur' },
    { name: 'Vape Delivery Electronic City Phase 1 & 2', href: '/locations/electronic-city' },
    { name: 'Vape Shop Marathahalli & Hebbal', href: '/locations/marathahalli' },
  ];

  const seoTags = [
    'Buy Vapes Online Bangalore',
    'Vape Shop Near Me Bengaluru',
    'Disposable Vapes Bangalore',
    'Same Day Vape Delivery Bangalore',
    'Elfbar BC5000 Bangalore Price',
    'Uwell Caliburn Pod Kit Bangalore',
    'Lost Mary 35000 Puffs Bangalore',
    'Vaporesso XROS 3 Mini Bangalore',
    'Geekvape Aegis B60 India',
    'Authentic E-Liquids Bangalore',
    'Discreet Vape Delivery Karnataka',
    'Vape Store Koramangala Express',
    'Vape Delivery Indiranagar 2 Hours',
    'Nasty Bolt 50K Bangalore',
    'Nicotine Salts Bangalore Store',
    'VOOPOO Argus Top Fill Pods',
    '100% Genuine Scannable Vapes',
  ];

  return (
    <footer className="bg-[#050508] border-t border-[#181822] text-zinc-400 text-xs selection:bg-[#b4f733] selection:text-black">
      {/* Top Pre-Footer Help & WhatsApp CTA Banner */}
      <div className="bg-[#0a0a0f] border-b border-[#181824] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-[#14141f] border border-[#232332] flex items-center justify-center shrink-0 text-[#b4f733]">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-extrabold text-white">
                Looking for a specific device, puff count, or flavor in Bangalore?
              </h4>
              <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">
                Our Bengaluru concierge responds within 5 minutes on WhatsApp with stock confirmation and instant dispatch.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/917404563603?text=Hi%20Vape%20Shop%20Bangalore%2C%20I%20am%20looking%20for%20a%20product%20recommendation"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#b4f733] hover:bg-[#c8ff3d] text-black font-extrabold text-xs px-5 py-2.5 rounded-full flex items-center gap-2 transition duration-200 shadow-[0_0_20px_rgba(180,247,51,0.3)] hover:shadow-[0_0_30px_rgba(180,247,51,0.5)] shrink-0 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat with Bangalore Concierge</span>
          </a>
        </div>
      </div>

      {/* Main 4-Column SEO Footer Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Brand Authority & About (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="inline-block group">
              <Image
                src="/logo.png"
                alt="Vape Shop Bangalore Official Logo"
                width={170}
                height={57}
                className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            <p className="text-xs text-zinc-400 leading-relaxed">
              <strong>Vape Shop Bangalore</strong> is Karnataka&apos;s #1 most trusted online destination for 100% verified, original imported disposable vapes, refillable pod kits, coils, and premium nicotine salts.
            </p>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Serving every Bengaluru neighborhood with rapid <strong>same-day 2 to 4 hours express delivery</strong>, unbranded discreet tamper-evident packaging, and manufacturer scannable anti-counterfeit QR verification.
            </p>

            {/* Quick Trust Badges */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="bg-[#0d0d14] border border-[#1c1c28] p-2.5 rounded-xl flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#b4f733] shrink-0" />
                <span className="text-[11px] font-bold text-white">100% Authentic</span>
              </div>
              <div className="bg-[#0d0d14] border border-[#1c1c28] p-2.5 rounded-xl flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#b4f733] shrink-0" />
                <span className="text-[11px] font-bold text-white">2-4 Hrs BLR Express</span>
              </div>
              <div className="bg-[#0d0d14] border border-[#1c1c28] p-2.5 rounded-xl flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#b4f733] shrink-0" />
                <span className="text-[11px] font-bold text-white">QR Code Verified</span>
              </div>
              <div className="bg-[#0d0d14] border border-[#1c1c28] p-2.5 rounded-xl flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#b4f733] shrink-0" />
                <span className="text-[11px] font-bold text-white">Same-Day Dispatch</span>
              </div>
            </div>
          </div>

          {/* Column 2: Top Brands in Bangalore (col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-black uppercase tracking-widest text-white mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b4f733]"></span>
              <span>Top Brands Bangalore</span>
            </h3>
            <ul className="space-y-2 text-xs">
              {topBrands.map((brand, idx) => (
                <li key={idx}>
                  <Link
                    href={brand.href}
                    className="text-zinc-400 hover:text-[#b4f733] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-zinc-600 group-hover:text-[#b4f733] transition-colors">›</span>
                    <span className="line-clamp-1">{brand.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Categories (col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-black uppercase tracking-widest text-white mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b4f733]"></span>
              <span>Categories</span>
            </h3>
            <ul className="space-y-2 text-xs">
              {popularCategories.map((cat, idx) => (
                <li key={idx}>
                  <Link
                    href={cat.href}
                    className="text-zinc-400 hover:text-[#b4f733] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-zinc-600 group-hover:text-[#b4f733] transition-colors">›</span>
                    <span className="line-clamp-1">{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Express Delivery Zones (col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-black uppercase tracking-widest text-white mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b4f733]"></span>
              <span>Bangalore Express Hubs</span>
            </h3>
            <ul className="space-y-2 text-xs">
              {bangaloreLocations.map((loc, idx) => (
                <li key={idx}>
                  <Link
                    href={loc.href}
                    className="text-zinc-400 hover:text-[#b4f733] transition-colors flex items-center gap-1.5 group"
                  >
                    <MapPin className="w-3 h-3 text-[#b4f733] shrink-0" />
                    <span className="line-clamp-1">{loc.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* SEO Keyword Cloud Strip */}
        <div className="mt-12 pt-8 border-t border-[#171722]">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-black uppercase tracking-wider text-white">
              Trending Bangalore Vape Searches
            </span>
            <span className="text-[10px] text-zinc-500">• 100% Authentic Stock</span>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {seoTags.map((tag, idx) => (
              <Link
                key={idx}
                href="/#bestsellers"
                className="bg-[#0a0a10] border border-[#1a1a26] text-zinc-400 hover:text-black hover:bg-[#b4f733] hover:border-[#b4f733] text-[10px] sm:text-[11px] px-2.5 py-1 rounded-md transition duration-200"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Statutory 18+ Adult Nicotine Warning Notice */}
        <div className="mt-8 bg-[#0d0d12] border border-amber-500/20 rounded-xl p-3.5 sm:p-4 flex items-start gap-3">
          <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-bold text-amber-300 uppercase tracking-wide">
              Mandatory Age Restriction Notice (Strictly 18+ Only)
            </h5>
            <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed">
              Nicotine is an addictive chemical. All products cataloged on this website are exclusively intended for existing adult nicotine consumers and smokers of legal adult age (18 years or older). Age and identity verification are strictly required upon doorstep delivery. Keep strictly out of reach of children and pets.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Navigation Bar */}
      <div className="border-t border-[#14141e] bg-[#030305] py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500">
          <p className="text-center md:text-left">
            © 2026 <strong>Vape Shop Bangalore</strong>. All rights reserved. Bangalore&apos;s #1 Most Trusted Authentic Vape Destination.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-zinc-400">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/#bestsellers" className="hover:text-white transition">Products</Link>
            <Link href="/#brands" className="hover:text-white transition">Brands</Link>
            <Link href="/#locations" className="hover:text-white transition">Locations</Link>
            <Link href="/#blog" className="hover:text-white transition">Blog</Link>
            <Link href="/contact" className="hover:text-[#b4f733] transition">Contact</Link>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-zinc-500">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#b4f733]"></span>
            <span>Same-Day BLR Dispatch Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
