import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import { 
  bangaloreLocations, 
  getLocationBySlug, 
  getAllLocationSlugs 
} from '@/data/locations';
import { 
  PhoneCall, 
  MapPin, 
  Truck, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  ArrowLeft,
  ChevronRight,
  ExternalLink,
  Zap,
  Sparkles
} from 'lucide-react';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllLocationSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);

  if (!loc) {
    return {
      title: 'Location Not Found | Vape Shop Bangalore',
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vapeshopsbangalore.com';

  return {
    title: `${loc.title} | Vape Shop Bangalore`,
    description: loc.metaDesc,
    keywords: [
      `vape shop ${loc.name.toLowerCase()}`,
      `vape delivery ${loc.name.toLowerCase()}`,
      `vape store ${loc.name.toLowerCase()}`,
      `buy vape ${loc.name.toLowerCase()}`,
      `disposable vape ${loc.name.toLowerCase()}`,
      `elfbar ${loc.name.toLowerCase()}`,
      `caliburn ${loc.name.toLowerCase()}`,
      ...loc.pincodes.map(p => `vape delivery ${p}`),
    ],
    alternates: {
      canonical: `${baseUrl}/locations/${loc.slug}`,
    },
    openGraph: {
      title: `${loc.title} | Vape Shop Bangalore`,
      description: loc.metaDesc,
      url: `${baseUrl}/locations/${loc.slug}`,
      type: 'website',
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);

  if (!loc) {
    notFound();
  }

  const topProducts = products.slice(0, 4);
  const otherLocations = bangaloreLocations.filter((l) => l.slug !== loc.slug);

  // LocalBusiness & FAQ Schema for maximum Google SERP rich results
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        name: `Vape Shop Bangalore - ${loc.name}`,
        description: loc.metaDesc,
        url: `https://www.vapeshopsbangalore.com/locations/${loc.slug}`,
        telephone: '+916265321741',
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: loc.hub,
          addressLocality: loc.name,
          addressRegion: 'Bangalore, Karnataka',
          postalCode: loc.pincodes[0],
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: loc.geo.latitude.toString(),
          longitude: loc.geo.longitude.toString(),
        },
        areaServed: loc.name,
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '10:00',
          closes: '23:30',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: loc.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-[#b4f733] selection:text-black font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Banner - Compact */}
      <div className="bg-[#0e0e12] border-b border-[#1f1f26] py-1.5 px-3 text-[11px] sm:text-xs text-center flex items-center justify-center gap-2">
        <span className="flex h-1.5 w-1.5 rounded-full bg-[#b4f733] animate-pulse"></span>
        <span className="text-zinc-300">
          ⚡ <strong>Same Day Express Delivery in {loc.name}</strong> ({loc.deliveryTime}) • 100% Original
        </span>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#050505]/95 border-b border-[#1a1a22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-15 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="Vape Shop Bangalore Official Logo"
              width={160}
              height={53}
              priority
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-zinc-300">
            <Link href="/" className="hover:text-[#b4f733] transition">Home</Link>
            <Link href="/#bestsellers" className="hover:text-[#b4f733] transition">Products</Link>
            <Link href="/#brands" className="hover:text-[#b4f733] transition">Brands</Link>
            <Link href="/#locations" className="text-[#b4f733] font-bold">Locations</Link>
            <Link href="/blog" className="hover:text-[#b4f733] transition">Blog</Link>
            <Link href="/contact" className="hover:text-[#b4f733] transition">Contact</Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            <div className="hidden lg:flex items-center gap-1.5 bg-[#121218] border border-[#23232e] px-3 py-1 rounded-full text-[11px] text-zinc-300">
              <MapPin className="w-3 h-3 text-[#b4f733]" />
              <span>Hub: <strong>{loc.name}</strong></span>
            </div>
            <a
              href={`https://wa.me/916265321741?text=${encodeURIComponent(`Hi Vape Shop Bangalore, I want express vape delivery in ${loc.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#b4f733] hover:bg-[#c8ff3d] text-black font-bold px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs transition flex items-center gap-1.5 shadow-[0_0_15px_rgba(180,247,51,0.25)] hover:shadow-[0_0_25px_rgba(180,247,51,0.4)]"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Location Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-6">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span className="text-zinc-600">/</span>
          <Link href="/#locations" className="hover:text-white transition">Locations</Link>
          <span className="text-zinc-600">/</span>
          <span className="text-white font-medium">{loc.name}</span>
        </div>

        {/* Hero Section for Location */}
        <div className="bg-[#0c0c12] border border-[#1e1e2c] rounded-2xl sm:rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#b4f733]/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151522] border border-[#27273c] text-xs font-bold text-[#b4f733] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#b4f733] animate-pulse"></span>
              <span>Express {loc.deliveryTime} Delivery Active</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              {loc.h1}
            </h1>

            <p className="mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {loc.intro}
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-[#1b1b28]">
              <div className="bg-[#08080c] border border-[#181822] p-3 rounded-xl">
                <div className="text-[10px] text-zinc-500 font-bold uppercase">Estimated Time</div>
                <div className="text-sm sm:text-base font-black text-[#b4f733] mt-0.5">{loc.deliveryTime}</div>
              </div>
              <div className="bg-[#08080c] border border-[#181822] p-3 rounded-xl">
                <div className="text-[10px] text-zinc-500 font-bold uppercase">Dispatch Hub</div>
                <div className="text-xs sm:text-sm font-bold text-white truncate mt-0.5">{loc.hub}</div>
              </div>
              <div className="bg-[#08080c] border border-[#181822] p-3 rounded-xl">
                <div className="text-[10px] text-zinc-500 font-bold uppercase">Authenticity</div>
                <div className="text-xs sm:text-sm font-bold text-[#b4f733] mt-0.5">100% QR Verified</div>
              </div>
              <div className="bg-[#08080c] border border-[#181822] p-3 rounded-xl">
                <div className="text-[10px] text-zinc-500 font-bold uppercase">Packaging</div>
                <div className="text-xs sm:text-sm font-bold text-white mt-0.5">Plain Discreet Box</div>
              </div>
            </div>

            {/* Order on WhatsApp CTA */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/916265321741?text=${encodeURIComponent(`Hi Vape Shop Bangalore, I want to place an order in ${loc.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#b4f733] hover:bg-[#c8ff3d] text-black font-extrabold text-xs sm:text-sm px-6 py-3 rounded-full flex items-center gap-2 transition duration-200 shadow-lg active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Order on WhatsApp for {loc.name}</span>
              </a>

              <Link
                href="/#bestsellers"
                className="bg-[#151520] hover:bg-[#1e1e2d] text-white border border-[#2b2b3d] font-bold text-xs sm:text-sm px-5 py-3 rounded-full transition"
              >
                Browse All 25 Products
              </Link>
            </div>
          </div>
        </div>

        {/* Pincodes & Neighborhood Landmarks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-[#0b0b10] border border-[#1a1a26] p-5 sm:p-6 rounded-2xl">
            <h2 className="text-sm sm:text-base font-bold text-white flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-[#b4f733]" />
              <span>Pincodes Covered in {loc.name}</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {loc.pincodes.map((pin, idx) => (
                <span
                  key={idx}
                  className="bg-[#12121a] border border-[#232334] text-zinc-300 font-bold text-xs px-3 py-1.5 rounded-lg"
                >
                  📍 PIN: {pin}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-zinc-500 mt-3">
              Have a nearby pincode? Our dispatch network covers all surrounding roads and apartments.
            </p>
          </div>

          <div className="bg-[#0b0b10] border border-[#1a1a26] p-5 sm:p-6 rounded-2xl">
            <h2 className="text-sm sm:text-base font-bold text-white flex items-center gap-2 mb-3">
              <Truck className="w-4 h-4 text-[#b4f733]" />
              <span>Key Delivery Points in {loc.name}</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {loc.popularPlaces.map((place, idx) => (
                <span
                  key={idx}
                  className="bg-[#12121a] border border-[#232334] text-zinc-300 text-xs px-2.5 py-1 rounded-md"
                >
                  ✓ {place}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Popular Devices in this Neighborhood */}
        <div className="mt-12">
          <div className="flex items-end justify-between mb-6">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#b4f733]">In Stock Bangalore</span>
              <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                Trending Vapes for Same-Day Delivery in {loc.name}
              </h2>
            </div>
            <Link href="/#bestsellers" className="text-xs text-[#b4f733] font-bold hover:underline flex items-center">
              View All 25 <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5 w-full">
            {topProducts.map((p) => {
              const saveAmount = p.originalPrice - p.price;
              return (
                <div
                  key={p.id}
                  className="min-w-0 w-full bg-[#111114] border border-[#202026] hover:border-[#b4f733]/50 rounded-[18px] sm:rounded-[24px] p-2 sm:p-3 flex flex-col justify-between transition-all duration-300 group shadow-lg"
                >
                  <Link href={`/products/${p.slug}`} className="block min-w-0">
                    <div className="relative w-full aspect-square rounded-[14px] sm:rounded-[18px] bg-black overflow-hidden border border-white/5">
                      <span className="absolute top-2 left-2 z-10 bg-[#b4f733] text-black font-extrabold text-[9px] sm:text-xs px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-md whitespace-nowrap">
                        Save ₹{saveAmount.toLocaleString('en-IN')}
                      </span>
                      <span className="absolute top-2 right-2 z-10 bg-black/75 backdrop-blur-md text-white font-bold text-[9px] sm:text-[11px] px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/10 uppercase tracking-wide truncate max-w-[48%] shadow-sm">
                        {p.brand}
                      </span>
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 48vw, 25vw"
                      />
                    </div>
                    <h3 className="text-xs sm:text-base font-extrabold text-white group-hover:text-[#b4f733] transition truncate mt-2 sm:mt-2.5 tracking-tight px-0.5">
                      {p.name}
                    </h3>
                    <div className="flex items-baseline gap-1.5 sm:gap-2 mt-1 mb-2 sm:mb-3 px-0.5">
                      <span className="text-base sm:text-2xl font-black text-[#b4f733]">
                        ₹{p.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] sm:text-sm text-zinc-500 line-through font-medium">
                        ₹{p.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </Link>

                  <a
                    href={`https://wa.me/916265321741?text=${encodeURIComponent(`Hi Vape Shop Bangalore, I want to order ${p.name} in ${loc.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#b4f733] hover:bg-[#c8ff3d] text-black font-extrabold text-[11px] sm:text-sm py-2 sm:py-2.5 px-2 rounded-full flex items-center justify-center gap-1.5 transition duration-200 shadow-md hover:shadow-[0_0_20px_rgba(180,247,51,0.4)] active:scale-95 whitespace-nowrap"
                  >
                    <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 fill-current" />
                    <span className="truncate">Chat on WhatsApp</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Local FAQs */}
        <div className="mt-12 bg-[#09090e] border border-[#1a1a26] p-6 sm:p-8 rounded-2xl">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4">
            Frequently Asked Questions about Vape Delivery in {loc.name}
          </h2>
          <div className="space-y-4">
            {loc.faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[#171724] pb-3 last:border-b-0 last:pb-0">
                <h3 className="text-xs sm:text-sm font-bold text-[#b4f733]">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Bangalore Neighborhoods - Internal Linking */}
        <div className="mt-12 pt-8 border-t border-[#181824]">
          <h2 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
            Other Same-Day Bangalore Express Delivery Zones
          </h2>
          <div className="flex flex-wrap gap-2">
            {otherLocations.map((other) => (
              <Link
                key={other.slug}
                href={`/locations/${other.slug}`}
                className="bg-[#0e0e14] border border-[#1e1e2c] hover:border-[#b4f733] text-zinc-300 hover:text-white text-xs px-3 py-1.5 rounded-lg transition"
              >
                📍 Vape Shop {other.name} ({other.deliveryTime})
              </Link>
            ))}
          </div>
        </div>

      </main>

      {/* Floating WhatsApp Action Button */}
      <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-5 right-5 z-50 flex items-center group">
        <a
          href={`https://wa.me/916265321741?text=${encodeURIComponent(`Hi Vape Shop Bangalore, I want express vape delivery in ${loc.name}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order on WhatsApp"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold p-3 sm:px-4 sm:py-3 rounded-full shadow-[0_4px_25px_rgba(37,211,102,0.5)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.7)] transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="hidden sm:inline text-xs font-extrabold tracking-wide">
            Chat on WhatsApp
          </span>
          <span className="flex h-2.5 w-2.5 rounded-full bg-white animate-pulse"></span>
        </a>
      </aside>

      {/* Footer */}
      <Footer />
    </div>
  );
}

