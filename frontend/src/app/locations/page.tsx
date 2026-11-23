import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { bangaloreLocations } from '@/data/locations';
import { 
  MapPin, 
  Truck, 
  Clock, 
  ShieldCheck, 
  PhoneCall, 
  ChevronRight, 
  Sparkles, 
  ArrowLeft,
  Zap,
  CheckCircle2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vape Shop Bangalore Locations | Same-Day 2-4 Hrs Delivery Across All Zones',
  description: 'Explore all 12 express vape delivery hubs across Bengaluru. Same-day 2-4 hours courier delivery in Koramangala, Indiranagar, HSR Layout, Whitefield, MG Road & more.',
  keywords: [
    'vape shop bangalore locations',
    'vape delivery bangalore areas',
    'vape shop near me bangalore',
    'vape shop koramangala',
    'vape shop indiranagar',
    'vape delivery hsr layout',
    'vape store whitefield',
    'vape shop jp nagar',
    'vape delivery bellandur electronic city'
  ],
  alternates: {
    canonical: '/locations',
  },
  openGraph: {
    title: 'Vape Shop Bangalore Locations | 12 Express Hubs',
    description: 'Same-day 2-4 hours express vape delivery across 12 tech and residential corridors in Bangalore.',
    url: '/locations',
    type: 'website',
  },
};

export default function LocationsHubPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Vape Shop Bangalore Store Locations & Express Hubs',
    description: 'Find your nearest express vape delivery zone in Bangalore with 45 to 120 minutes courier service.',
    url: 'https://vapeshopbangalore.com/locations',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://vapeshopbangalore.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Locations',
          item: 'https://vapeshopbangalore.com/locations',
        },
      ],
    },
    hasPart: bangaloreLocations.map((loc, idx) => ({
      '@type': 'LocalBusiness',
      position: idx + 1,
      name: `Vape Shop ${loc.name}`,
      url: `https://vapeshopbangalore.com/locations/${loc.slug}`,
      telephone: '+91-7404563603',
      priceRange: '₹₹',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: loc.geo.latitude,
        longitude: loc.geo.longitude,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-[#b4f733] selection:text-black font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Banner */}
      <div className="bg-[#0e0e12] border-b border-[#1f1f26] py-1.5 px-3 text-[11px] sm:text-xs text-center flex items-center justify-center gap-2">
        <span className="flex h-1.5 w-1.5 rounded-full bg-[#b4f733] animate-pulse"></span>
        <span className="text-zinc-300">
          ⚡ <strong>12 Express Dispatch Hubs Across Bangalore</strong> • Average Delivery Time 45 - 90 Mins
        </span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#050505]/95 border-b border-[#1a1a22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-15 flex items-center justify-between">
          <Link href="/" className="text-lg font-black tracking-tight text-white flex items-center gap-1.5 group">
            <span className="text-[#b4f733]">VAPE</span>
            <span>SHOP</span>
            <span className="text-xs px-2 py-0.5 rounded bg-[#16161e] border border-[#2b2b3b] text-zinc-300 ml-1">
              BANGALORE
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-zinc-300">
            <Link href="/" className="hover:text-[#b4f733] transition">Home</Link>
            <Link href="/#bestsellers" className="hover:text-[#b4f733] transition">Products</Link>
            <Link href="/#brands" className="hover:text-[#b4f733] transition">Brands</Link>
            <Link href="/locations" className="text-[#b4f733] font-bold">Locations</Link>
            <Link href="/blog" className="hover:text-[#b4f733] transition">Blog</Link>
            <Link href="/contact" className="hover:text-[#b4f733] transition">Contact</Link>
          </nav>

          <a
            href="https://wa.me/917404563603?text=Hi%2C%20check%20delivery%20time%20for%20my%20Bangalore%20pincode"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#b4f733] hover:bg-[#c6ff00] text-black font-bold px-3 py-1.5 rounded-lg text-xs transition flex items-center gap-1.5 shadow-[0_0_15px_rgba(180,247,51,0.25)]"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Order on WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-zinc-400 mb-6">
          <Link href="/" className="hover:text-white transition flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-zinc-600" />
          <span className="text-[#b4f733] font-medium">Bangalore Locations</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#121218] border border-[#262633] text-[10px] font-semibold text-zinc-300 mb-3">
            <Sparkles className="w-3 h-3 text-[#b4f733]" />
            <span>Local Express Hub Network</span>
            <span className="text-[#b4f733]">•</span>
            <span className="text-[#b4f733] font-bold">12 Active Bangalore Corridors</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight mb-3">
            Vape Shop Bangalore — <span className="text-[#b4f733]">Store Locations & Express Hubs</span>
          </h1>

          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
            We operate dedicated local logistics hubs across Bengaluru to guarantee 45 to 120 minutes doorstep courier delivery. 
            Select your neighborhood below to view specific pincode coverage, estimated dispatch times, and available inventory.
          </p>
        </div>

        {/* 12 Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {bangaloreLocations.map((loc) => (
            <div
              key={loc.slug}
              className="bg-[#0e0e12] border border-[#1f1f26] hover:border-[#b4f733]/50 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 group hover:shadow-[0_0_20px_rgba(180,247,51,0.08)]"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h2 className="text-lg font-black text-white group-hover:text-[#b4f733] transition">
                      {loc.name}
                    </h2>
                    <p className="text-[11px] text-zinc-400 mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#b4f733]" />
                      <span>{loc.hub}</span>
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#161620] border border-[#262633] text-[10px] font-semibold text-[#b4f733]">
                    <Clock className="w-3 h-3" />
                    <span>{loc.deliveryTime}</span>
                  </span>
                </div>

                {/* Short Intro */}
                <p className="text-zinc-400 text-xs line-clamp-2 leading-relaxed mb-4">
                  {loc.intro}
                </p>

                {/* Pincodes */}
                <div className="mb-4">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 mb-1.5">
                    Pincodes Covered:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {loc.pincodes.map((pin) => (
                      <span
                        key={pin}
                        className="px-2 py-0.5 rounded bg-[#14141c] border border-[#22222e] text-[10px] font-mono text-zinc-300"
                      >
                        {pin}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Popular spots */}
                <div className="mb-5">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 mb-1.5">
                    Key Areas:
                  </div>
                  <p className="text-zinc-400 text-[11px] leading-relaxed line-clamp-1">
                    {loc.popularPlaces.join(', ')}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 pt-3 border-t border-[#181822]">
                <Link
                  href={`/locations/${loc.slug}`}
                  className="flex-1 bg-[#161620] hover:bg-[#1e1e2c] border border-[#262638] text-white text-xs font-semibold py-2 px-3 rounded-lg text-center transition flex items-center justify-center gap-1 group-hover:border-[#b4f733]/40"
                >
                  <span>Explore Hub</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#b4f733]" />
                </Link>

                <a
                  href={`https://wa.me/917404563603?text=${encodeURIComponent(`Hi Vape Shop Bangalore, I need express vape delivery in ${loc.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#b4f733] hover:bg-[#c6ff00] text-black font-bold p-2 rounded-lg text-xs transition shadow-[0_0_10px_rgba(180,247,51,0.2)]"
                  title={`Order on WhatsApp for ${loc.name}`}
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="bg-[#0b0b0f] border border-[#1a1a24] rounded-2xl p-6 sm:p-8 mb-12">
          <h2 className="text-xl sm:text-2xl font-black text-center mb-6">
            Why Bangalore Chooses Our <span className="text-[#b4f733]">Express Delivery Network</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-[#121218] p-4 rounded-xl border border-[#1e1e28]">
              <div className="w-8 h-8 rounded-lg bg-[#b4f733]/10 flex items-center justify-center text-[#b4f733] mb-3">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">45-90 Min Dispatch</h3>
              <p className="text-zinc-400 text-xs">Direct hyperlocal point-to-point courier delivery across all central and suburban zones.</p>
            </div>

            <div className="bg-[#121218] p-4 rounded-xl border border-[#1e1e28]">
              <div className="w-8 h-8 rounded-lg bg-[#b4f733]/10 flex items-center justify-center text-[#b4f733] mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">100% Genuine QR</h3>
              <p className="text-zinc-400 text-xs">Every device carries an uncompromised manufacturer scratch code verifiable on official brand sites.</p>
            </div>

            <div className="bg-[#121218] p-4 rounded-xl border border-[#1e1e28]">
              <div className="w-8 h-8 rounded-lg bg-[#b4f733]/10 flex items-center justify-center text-[#b4f733] mb-3">
                <Truck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">100% Discrete Packing</h3>
              <p className="text-zinc-400 text-xs">Zero outer product labels or mentions. Plain tamper-sealed packaging ideal for tech parks and apartments.</p>
            </div>

            <div className="bg-[#121218] p-4 rounded-xl border border-[#1e1e28]">
              <div className="w-8 h-8 rounded-lg bg-[#b4f733]/10 flex items-center justify-center text-[#b4f733] mb-3">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">Live Stock Support</h3>
              <p className="text-zinc-400 text-xs">Real-time flavor and device availability confirmed via WhatsApp concierge before dispatch.</p>
            </div>
          </div>
        </div>

        {/* Global FAQs */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-black mb-2">
              Frequently Asked Questions About <span className="text-[#b4f733]">Bangalore Vape Delivery</span>
            </h2>
            <p className="text-zinc-400 text-xs">Clear, straightforward answers for Bengaluru customers.</p>
          </div>

          <div className="space-y-3">
            <div className="bg-[#0e0e12] border border-[#1f1f26] rounded-xl p-4">
              <h3 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#b4f733]" />
                How do I place an express order for my Bangalore location?
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed pl-6">
                Click the &quot;Order on WhatsApp&quot; button, share your preferred device, flavor, and delivery pincode. Our dispatch coordinator confirms live availability and assigns the nearest courier.
              </p>
            </div>

            <div className="bg-[#0e0e12] border border-[#1f1f26] rounded-xl p-4">
              <h3 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#b4f733]" />
                What if my specific Bangalore pincode is not listed?
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed pl-6">
                We deliver to all pincodes across Bangalore Urban and Rural via our express rider network and Dunzo/Porter/private courier partners. Message us on WhatsApp to get the exact ETA for your address.
              </p>
            </div>

            <div className="bg-[#0e0e12] border border-[#1f1f26] rounded-xl p-4">
              <h3 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#b4f733]" />
                What payment methods are supported for Bangalore deliveries?
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed pl-6">
                We support instant and secure UPI (Google Pay, PhonePe, Paytm, BHIM), Net Banking, and Credit/Debit cards upon order confirmation.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
