import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { 
  PhoneCall, 
  MessageCircle, 
  MapPin, 
  Clock, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Vape Shop Bangalore - Instant WhatsApp & 2-4 Hrs Delivery',
  description:
    'Contact Vape Shop Bangalore for instant orders, 2-4 hours same-day doorstep delivery tracking, product availability, and customer support across Bengaluru.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Vape Shop Bangalore',
    description: 'Get in touch with Vape Shop Bangalore for fast same-day vape delivery and verified products.',
    url: 'https://www.vapeshopsbangalore.com/contact',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Vape Shop Bangalore',
      image: 'https://www.vapeshopsbangalore.com/logo.png',
      telephone: '+916265321741',
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Koramangala 5th Block',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560095',
        addressCountry: 'IN',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '10:00',
          closes: '23:00',
        },
      ],
    },
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
          ⚡ <strong>Same Day Express Delivery in Bangalore</strong> (Within 2-4 Hours) • 100% Original
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
            <Link href="/locations" className="hover:text-[#b4f733] transition">Locations</Link>
            <Link href="/#blog" className="hover:text-[#b4f733] transition">Blog</Link>
            <Link href="/contact" className="text-[#b4f733] font-bold">Contact</Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            <div className="hidden lg:flex items-center gap-1.5 bg-[#121218] border border-[#23232e] px-3 py-1 rounded-full text-[11px] text-zinc-300">
              <MapPin className="w-3 h-3 text-[#b4f733]" />
              <span>Delivering to <strong>Bangalore</strong></span>
            </div>
            <a
              href="https://wa.me/916265321741?text=Hi%20Vape%20Shop%20Bangalore%2C%20I%20want%20to%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#b4f733] hover:bg-[#c6ff00] text-black font-bold px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs transition flex items-center gap-1.5 shadow-[0_0_15px_rgba(180,247,51,0.25)] hover:shadow-[0_0_25px_rgba(180,247,51,0.4)]"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Contact Section */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 w-full">
        {/* Breadcrumb matching reference image */}
        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-6">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span className="text-zinc-600">/</span>
          <span className="text-white font-medium">Contact</span>
        </div>

        {/* Headline & Subtitle */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
          Contact Vape Shop Bangalore
        </h1>
        <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
          Fastest way to reach us is WhatsApp — instant replies during business hours.
        </p>

        {/* 2 Contact Cards matching reference image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-10">
          
          {/* Card 1: Call or WhatsApp */}
          <div className="bg-[#0e0e14] border border-[#1e1e28] hover:border-[#b4f733]/40 rounded-[22px] sm:rounded-[26px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-white">
                Call or WhatsApp
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 font-semibold mt-2">
                +91 62653 21741
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-6 sm:mt-8">
              {/* Neon Lime WhatsApp Button */}
              <a
                href="https://wa.me/916265321741?text=Hi%20Vape%20Shop%20Bangalore%2C%20I%20have%20an%20inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#b4f733] hover:bg-[#c8ff3d] text-black font-extrabold text-xs sm:text-sm px-5 py-2.5 sm:px-6 sm:py-3 rounded-full flex items-center gap-2 transition duration-200 shadow-[0_0_15px_rgba(180,247,51,0.3)] active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Dark Rounded Call Now Button */}
              <a
                href="tel:+916265321741"
                className="bg-[#14141e] hover:bg-[#1c1c2b] text-white border border-[#272738] hover:border-[#b4f733] font-bold text-xs sm:text-sm px-5 py-2.5 sm:px-6 sm:py-3 rounded-full flex items-center gap-2 transition duration-200 active:scale-95"
              >
                <PhoneCall className="w-4 h-4 text-[#b4f733]" />
                <span>Call now</span>
              </a>
            </div>
          </div>

          {/* Card 2: Store address */}
          <div className="bg-[#0e0e14] border border-[#1e1e28] hover:border-[#b4f733]/40 rounded-[22px] sm:rounded-[26px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-white">
                Store address
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
                Koramangala 5th Block, Bengaluru, Karnataka 560095, India
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Hours: Mon–Sun, 10:00 AM – 11:00 PM
              </p>
            </div>

            <div className="mt-6 sm:mt-8">
              <a
                href="https://maps.google.com/?q=Koramangala+5th+Block+Bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#b4f733] hover:underline"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Service areas section matching reference image */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[#181824]">
          <h3 className="text-lg sm:text-xl font-black text-white">
            Service areas
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-3xl">
            We deliver across Bengaluru — Koramangala, Indiranagar, HSR Layout, Whitefield, JP Nagar, Jayanagar, MG Road, Bellandur, Electronic City, Marathahalli, Hebbal, BTM Layout, and all Bengaluru pin codes with 2-4 hours express same-day courier dispatch.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-8 sm:mt-10">
          <div className="bg-[#0b0b10] border border-[#1a1a24] p-3.5 rounded-xl flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#b4f733] shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">100% Genuine QR Codes</div>
              <div className="text-[10px] text-zinc-500">Zero counterfeit guarantee</div>
            </div>
          </div>

          <div className="bg-[#0b0b10] border border-[#1a1a24] p-3.5 rounded-xl flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#b4f733] shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">2-4 Hours BLR Delivery</div>
              <div className="text-[10px] text-zinc-500">Same-day express dispatch</div>
            </div>
          </div>

          <div className="bg-[#0b0b10] border border-[#1a1a24] p-3.5 rounded-xl flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#b4f733] shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Discreet Packaging</div>
              <div className="text-[10px] text-zinc-500">Completely unbranded boxes</div>
            </div>
          </div>
        </div>

      </main>

      {/* Floating WhatsApp Action Button */}
      <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-5 right-5 z-50 flex items-center group">
        <a
          href="https://wa.me/916265321741?text=Hi%20Vape%20Shop%20Bangalore%2C%20I%20want%20to%20order"
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
