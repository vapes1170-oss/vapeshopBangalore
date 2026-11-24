'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroBannerSlider from '@/components/HeroBannerSlider';
import Footer from '@/components/Footer';
import ReviewsSection from '@/components/ReviewsSection';
import { products, Product } from '@/data/products';
import { bangaloreLocations } from '@/data/locations';
import { 
  ShieldCheck, 
  Truck, 
  Clock, 
  Sparkles, 
  ChevronRight, 
  Star, 
  Zap, 
  Flame, 
  CheckCircle2, 
  PhoneCall, 
  ShoppingBag, 
  MapPin, 
  ArrowRight, 
  ChevronDown,
  Search,
  Filter,
  MessageCircle
} from 'lucide-react';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { label: 'All', count: products.length },
    { label: 'Disposable Vapes', count: products.filter(p => p.category === 'Disposable Vapes').length },
    { label: 'Pod Systems', count: products.filter(p => p.category === 'Pod Systems').length },
    { label: 'Starter Kits', count: products.filter(p => p.category === 'Starter Kits').length },
    { label: 'Premium E-Liquids', count: products.filter(p => p.category === 'Premium E-Liquids').length },
    { label: 'Coils & Pods', count: products.filter(p => p.category === 'Coils & Pods').length },
  ];

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const bangaloreZones = [
    'Koramangala',
    'Indiranagar',
    'HSR Layout',
    'Whitefield',
    'JP Nagar',
    'MG Road',
    'Electronic City',
    'Bellandur',
    'Marathahalli',
    'Jayanagar',
    'BTM Layout',
    'Hebbal'
  ];

  const faqs = [
    {
      q: 'How do you guarantee 100% authentic products in Bangalore?',
      a: 'All our devices, disposables, and liquids come with manufacturer scratch-and-check authentication QR codes directly verifiable on official brand websites (Uwell, ElfBar, Geekvape, Lost Mary, etc.).',
    },
    {
      q: 'What are the delivery times across Bangalore?',
      a: 'In Bangalore, we offer lightning-fast express same-day delivery (within 2 to 4 hours in prime zones like Koramangala, Indiranagar, HSR, Whitefield, MG Road) and standard delivery within 24 hours. Discreet, tamper-evident packaging is guaranteed.',
    },
    {
      q: 'What payment methods do you accept in Bangalore?',
      a: 'We accept instant secure UPI (Google Pay, PhonePe, Paytm), Credit & Debit cards, and Net Banking with immediate express dispatch.',
    },
    {
      q: 'Can I verify the product before accepting delivery?',
      a: 'Absolutely. Every box has a sealed scratch-off verification QR code. You can scan it on the spot to confirm authenticity with the official brand manufacturer.',
    },
    {
      q: 'What is the minimum age to purchase in Bangalore?',
      a: 'You must be at least 18 years of age (or legal adult age in your jurisdiction) to place an order. Age verification is strictly conducted at delivery.',
    },
  ];

  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        name: 'Best Selling Authentic Vapes & Pods in Bangalore',
        description: 'Popular high-puff disposables, pod systems, and nicotine salts with same-day express delivery in Bangalore.',
        itemListElement: products.slice(0, 15).map((p, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          url: `https://www.vapeshopsbangalore.com/products/${p.slug}`,
          name: p.name,
          image: p.image,
          offers: {
            '@type': 'Offer',
            price: p.price,
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
          },
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      {/* Top Banner - Compact */}
      <div className="bg-[#0e0e12] border-b border-[#1f1f26] py-1.5 px-3 text-[11px] sm:text-xs text-center flex items-center justify-center gap-2">
        <span className="flex h-1.5 w-1.5 rounded-full bg-[#b4f733] animate-pulse"></span>
        <span className="text-zinc-300">
          ⚡ <strong>Same Day Express Delivery in Bangalore</strong> (Within 2-4 Hours) • 100% Original
        </span>
      </div>

      {/* Main Navbar - Compact & Sleek */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#050505]/95 border-b border-[#1a1a22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-15 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="Vape Shop Bangalore Official Logo"
              width={160}
              height={53}
              priority
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* Navigation Links - Requested Tabs */}
          <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-zinc-300">
            <Link href="/" className="hover:text-[#b4f733] transition">Home</Link>
            <a href="#bestsellers" className="hover:text-[#b4f733] transition">Products</a>
            <a href="#brands" className="hover:text-[#b4f733] transition">Brands</a>
            <Link href="/locations" className="hover:text-[#b4f733] transition">Locations</Link>
            <Link href="/blog" className="hover:text-[#b4f733] transition">Blog</Link>
            <Link href="/contact" className="hover:text-[#b4f733] transition">Contact</Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            <div className="hidden lg:flex items-center gap-1.5 bg-[#121218] border border-[#23232e] px-3 py-1 rounded-full text-[11px] text-zinc-300">
              <MapPin className="w-3 h-3 text-[#b4f733]" />
              <span>Delivering to <strong>Bangalore</strong></span>
            </div>
            <a
              href="https://wa.me/917404563603?text=Hi%2C%20I%20want%20to%20order%20vapes%20in%20Bangalore"
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

      {/* Hero Banner Slider - Just Below Navbar (Full Width) */}
      <div className="w-full">
        <HeroBannerSlider />
      </div>

      {/* Hero Content Section - Sleek, Compact & Balanced 2-Column Layout */}
      <section className="relative py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden">
        {/* Glow ambient background effect */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#b4f733]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        {/* Left Column: Compact Headline & CTAs */}
        <div className="flex-1 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#121218] border border-[#262633] text-[10px] font-semibold text-zinc-300 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b4f733]"></span>
            <span>100% Genuine Vape Shop</span>
            <span className="text-[#b4f733]">•</span>
            <span className="text-[#b4f733] font-bold">Bangalore Express Hub</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
            <span className="text-white block sm:inline">Bangalore&apos;s most </span>
            <span className="text-[#b4f733] block sm:inline text-shadow-[0_0_20px_rgba(180,247,51,0.25)]">
              trusted vape destination.
            </span>
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
            100% authentic imported disposable vapes, refillable pod systems, and premium e-liquids with 2-4 hours doorstep delivery across Bengaluru.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            <a
              href="#bestsellers"
              className="bg-[#b4f733] text-black font-extrabold px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-xs hover:bg-[#c8ff3d] transition flex items-center gap-1.5 shadow-[0_0_15px_rgba(180,247,51,0.25)]"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Explore Bestsellers</span>
              <ArrowRight className="w-3 h-3 ml-0.5" />
            </a>
            <a
              href="#delivery"
              className="bg-[#12121a] border border-[#272736] text-white hover:border-[#b4f733] font-bold px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs transition flex items-center gap-1.5"
            >
              <Truck className="w-3.5 h-3.5 text-[#b4f733]" />
              <span>Delivery Zones</span>
            </a>
          </div>
        </div>

        {/* Right Column: Sleek 3-Card Trust Badges (Zero COD) */}
        <div className="grid grid-cols-3 gap-2 sm:gap-2.5 w-full md:w-auto md:min-w-[340px]">
          <div className="bg-[#0c0c10] border border-[#1b1b24] p-2.5 sm:p-3 rounded-lg flex flex-col justify-center text-center">
            <div className="text-base sm:text-xl font-black text-[#b4f733]">100%</div>
            <div className="text-[10px] sm:text-[11px] text-zinc-400 font-medium">Authentic</div>
          </div>
          <div className="bg-[#0c0c10] border border-[#1b1b24] p-2.5 sm:p-3 rounded-lg flex flex-col justify-center text-center">
            <div className="text-base sm:text-xl font-black text-white">2-4 Hrs</div>
            <div className="text-[10px] sm:text-[11px] text-zinc-400 font-medium">BLR Delivery</div>
          </div>
          <div className="bg-[#0c0c10] border border-[#1b1b24] p-2.5 sm:p-3 rounded-lg flex flex-col justify-center text-center">
            <div className="text-base sm:text-xl font-black text-[#b4f733]">50K+</div>
            <div className="text-[10px] sm:text-[11px] text-zinc-400 font-medium">Happy Vapers</div>
          </div>
        </div>
      </section>

      {/* Bangalore Same Day Delivery Zones Section - Compact */}
      <section id="locations" className="py-8 bg-[#09090c] border-y border-[#181822] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#b4f733] mb-0.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Express 2-4 Hours Coverage</span>
              </div>
              <h2 className="text-lg sm:text-2xl font-extrabold text-white">
                Same-Day Delivery Across Bangalore Neighborhoods
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/locations"
                className="bg-[#151520] hover:bg-[#1e1e2c] text-zinc-300 hover:text-white text-[11px] sm:text-xs font-bold px-3 py-2 sm:px-3.5 sm:py-2 rounded-lg border border-[#2b2b3d] transition flex items-center gap-1"
              >
                <span>All 12 Hubs</span>
                <ChevronRight className="w-3 h-3 text-[#b4f733]" />
              </Link>
              <a
                href="https://wa.me/917404563603?text=Hi%2C%20check%20delivery%20time%20for%20my%20Bangalore%20pincode"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#b4f733] hover:bg-[#c6ff00] text-black text-[11px] sm:text-xs font-bold px-3.5 py-2 sm:px-4 sm:py-2 rounded-lg transition whitespace-nowrap shadow-[0_0_15px_rgba(180,247,51,0.25)]"
              >
                Check My Pin Code
              </a>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {bangaloreLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="bg-[#0e0e14] border border-[#1e1e2b] text-zinc-300 text-[11px] px-2.5 py-1.5 rounded-lg hover:border-[#b4f733] hover:text-[#b4f733] transition flex items-center gap-1.5 group"
              >
                <span className="text-[#b4f733] group-hover:scale-110 transition">📍</span>
                <span>{loc.name}</span>
                <span className="text-[10px] text-zinc-500 font-mono hidden sm:inline">({loc.deliveryTime.split(' ')[0]})</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section - All 25 Authentic Products with Filter & Search */}
      <section id="bestsellers" className="py-8 sm:py-14 max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 w-full overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5 sm:mb-6">
          <div>
            <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#b4f733] mb-1">
              Verified 100% Authentic Catalog
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white">
              Trending Devices & Flavors
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5 sm:mt-1">
              Showing {filteredProducts.length} premium products with same-day Bangalore dispatch
            </p>
          </div>

          {/* Search Input Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by brand, device, puffs..."
              className="w-full bg-[#0c0c12] border border-[#222230] focus:border-[#b4f733] rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-zinc-500 outline-none transition"
            />
          </div>
        </div>

        {/* Category & Brand Filter Tabs */}
        <div id="brands" className="flex items-center gap-2 overflow-x-auto pb-2.5 mb-5 sm:mb-6 no-scrollbar scroll-mt-24">
          {filterTabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(tab.label)}
              className={`text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 ${
                selectedCategory === tab.label
                  ? 'bg-[#b4f733] text-black shadow-[0_0_12px_rgba(180,247,51,0.35)]'
                  : 'bg-[#101016] text-zinc-400 hover:text-white border border-[#20202c]'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === tab.label ? 'bg-black/20 text-black' : 'bg-[#1c1c28] text-zinc-400'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* 25 Products Grid - Strictly 2 Columns on Mobile, 4 Columns on Desktop */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#0c0c12] border border-[#1e1e28] rounded-2xl p-6">
            <p className="text-sm text-zinc-400">No products found matching &quot;{searchQuery}&quot;.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-3 text-xs text-[#b4f733] font-bold underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5 w-full">
            {filteredProducts.map((p) => {
              const saveAmount = p.originalPrice - p.price;
              return (
                <div
                  key={p.id}
                  className="min-w-0 w-full bg-[#111114] border border-[#202026] hover:border-[#b4f733]/50 rounded-[18px] sm:rounded-[24px] p-2 sm:p-3 flex flex-col justify-between transition-all duration-300 group shadow-lg"
                >
                  <Link href={`/products/${p.slug}`} className="block min-w-0">
                    {/* Full Fill Image Box with Top Badges */}
                    <div className="relative w-full aspect-square rounded-[14px] sm:rounded-[18px] bg-black overflow-hidden border border-white/5">
                      {/* Top-Left: Save Amount Badge */}
                      <span className="absolute top-2 left-2 z-10 bg-[#b4f733] text-black font-extrabold text-[9px] sm:text-xs px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-md whitespace-nowrap">
                        Save ₹{saveAmount.toLocaleString('en-IN')}
                      </span>

                      {/* Top-Right: Brand Pill */}
                      <span className="absolute top-2 right-2 z-10 bg-black/75 backdrop-blur-md text-white font-bold text-[9px] sm:text-[11px] px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/10 uppercase tracking-wide truncate max-w-[48%] shadow-sm">
                        {p.brand}
                      </span>

                      {/* Product Image - Full Edge-to-Edge Fill */}
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 48vw, (max-width: 1024px) 30vw, 25vw"
                      />
                    </div>

                    {/* Product Name */}
                    <h3 className="text-xs sm:text-base font-extrabold text-white group-hover:text-[#b4f733] transition truncate mt-2 sm:mt-2.5 tracking-tight px-0.5">
                      {p.name}
                    </h3>

                    {/* Price Row: Updated Price (Green) + Struck-through Original Price */}
                    <div className="flex items-baseline gap-1.5 sm:gap-2 mt-1 mb-2 sm:mb-3 px-0.5">
                      <span className="text-base sm:text-2xl font-black text-[#b4f733]">
                        ₹{p.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] sm:text-sm text-zinc-500 line-through font-medium">
                        ₹{p.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </Link>

                  {/* Full-Width Lime Neon Pill: Chat on WhatsApp */}
                  <a
                    href={`https://wa.me/917404563603?text=${encodeURIComponent(`Hi Vape Shop Bangalore, I want to order ${p.name} for ₹${p.price.toLocaleString('en-IN')}`)}`}
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
        )}
      </section>

      {/* About Us & Blog Section - Vape Shop Bangalore (SEO Optimized matching reference layout) */}
      <section id="blog" className="py-12 sm:py-16 bg-[#07070a] border-t border-[#171720] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Comprehensive Story & SEO Content */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#b4f733]">
                ABOUT US
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white mt-2 leading-tight">
                Vape Shop Bangalore – Premium Vapes,{' '}
                <span className="text-[#b4f733]">Pods & E-Liquids</span>
              </h2>

              <div className="mt-5 space-y-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                <p>
                  Welcome to <strong>Vape Shop Bangalore</strong>, a premier destination for customers looking for a curated range of vape products, disposable vapes, pod systems, and e-liquids in Bangalore. We focus on providing genuine products, clear product information, verified scannable authentication, and responsive customer support.
                </p>
                <p>
                  Our collection includes products from popular international brands such as <strong>Elf Bar, Lost Mary, Uwell Caliburn, Vaporesso, Geekvape, Nasty Bolt, iGET, and Pod Salt</strong>. Whether you&apos;re searching for disposable vapes in Bangalore, refillable vape pods, premium nicotine salts, or replacement coils, our range is designed to make product discovery simple and convenient.
                </p>
                <p>
                  We serve customers across Bangalore—including <strong>Koramangala, Indiranagar, HSR Layout, Whitefield, JP Nagar, MG Road, Bellandur, and Electronic City</strong>—with fast same-day local delivery support (within 2-4 hours) and responsive assistance. Product authenticity, secure discrete packaging, and customer service are central to our approach.
                </p>
                <p>
                  Explore our collection and discover a convenient, reliable online destination for authentic vape products in Bangalore.
                </p>
              </div>
            </div>

            {/* Right Column: 3 Sleek Pill Feature Cards */}
            <div className="lg:col-span-5 flex flex-col gap-3.5">
              {/* Card 1: 100% Authentic */}
              <div className="bg-[#0f0f16] border border-[#20202c] hover:border-[#b4f733]/50 rounded-[22px] p-4 sm:p-5 flex items-center gap-4 transition duration-300 group shadow-lg">
                <div className="w-12 h-12 rounded-full bg-[#161622] border border-[#2b2b3d] flex items-center justify-center shrink-0 text-[#b4f733] group-hover:scale-105 group-hover:border-[#b4f733]/40 transition">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-white">100% Authentic</h3>
                  <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                    Original products sourced from authorized channels with verifiable scratch QR codes.
                  </p>
                </div>
              </div>

              {/* Card 2: Same-Day Support */}
              <div className="bg-[#0f0f16] border border-[#20202c] hover:border-[#b4f733]/50 rounded-[22px] p-4 sm:p-5 flex items-center gap-4 transition duration-300 group shadow-lg">
                <div className="w-12 h-12 rounded-full bg-[#161622] border border-[#2b2b3d] flex items-center justify-center shrink-0 text-[#b4f733] group-hover:scale-105 group-hover:border-[#b4f733]/40 transition">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-white">Same-Day Support</h3>
                  <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                    Quick replies on WhatsApp & 2-4 hours express courier dispatch across all Bangalore pin codes.
                  </p>
                </div>
              </div>

              {/* Card 3: Curated Range */}
              <div className="bg-[#0f0f16] border border-[#20202c] hover:border-[#b4f733]/50 rounded-[22px] p-4 sm:p-5 flex items-center gap-4 transition duration-300 group shadow-lg">
                <div className="w-12 h-12 rounded-full bg-[#161622] border border-[#2b2b3d] flex items-center justify-center shrink-0 text-[#b4f733] group-hover:scale-105 group-hover:border-[#b4f733]/40 transition">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-white">Curated Range</h3>
                  <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                    Best-selling devices & rich imported flavors, always in stock and ready to ship in Bangalore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section - 20 Verified Bangalore Reviews */}
      <ReviewsSection />

      {/* Why Choose Us - Compact */}
      <section id="authenticity" className="py-10 sm:py-14 bg-[#09090c] border-y border-[#181824]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#b4f733]">Unmatched Quality</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-1">
              Why We Are Bangalore&apos;s #1 Choice
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2">
              Every single piece is backed by our zero-counterfeit guarantee and genuine QR verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-[#0e0e14] border border-[#1d1d29] p-4 sm:p-6 rounded-xl flex flex-col items-start">
              <div className="w-10 h-10 rounded-xl bg-[#141420] text-[#b4f733] flex items-center justify-center mb-4 border border-[#232332]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">100% Genuine Guaranteed</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Scan the security hologram scratch sticker on every product package directly on brand official websites.
              </p>
            </div>

            <div className="bg-[#0e0e14] border border-[#1d1d29] p-4 sm:p-6 rounded-xl flex flex-col items-start">
              <div className="w-10 h-10 rounded-xl bg-[#141420] text-[#b4f733] flex items-center justify-center mb-4 border border-[#232332]">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">2-4 Hrs Express Delivery</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Got a craving? Our express courier network delivers straight to your doorstep across Bangalore in hours.
              </p>
            </div>

            <div className="bg-[#0e0e14] border border-[#1d1d29] p-4 sm:p-6 rounded-xl flex flex-col items-start">
              <div className="w-10 h-10 rounded-xl bg-[#141420] text-[#b4f733] flex items-center justify-center mb-4 border border-[#232332]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">100% Discrete Packaging</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Orders are packed in completely plain, secure, unbranded packaging with tamper seals to protect privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO FAQ Section - Compact */}
      <section id="faq" className="py-10 sm:py-14 max-w-3xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center mb-8">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#b4f733]">Got Questions?</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-1">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            Clear answers on shipping across Bangalore, authenticity, and ordering.
          </p>
        </div>

        <div className="space-y-2.5">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#0e0e14] border border-[#1b1b26] rounded-lg sm:rounded-xl overflow-hidden transition"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left px-4 py-3 sm:px-5 sm:py-3.5 flex items-center justify-between text-xs sm:text-sm font-bold text-white hover:text-[#b4f733] transition"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                    openFaq === idx ? 'rotate-180 text-[#b4f733]' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-3 sm:px-5 sm:pb-3.5 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-[#181822] pt-2.5">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer Banner - Compact */}
      <section className="bg-gradient-to-r from-[#0d0d12] via-[#14141d] to-[#0d0d12] border-t border-[#222230] py-10 sm:py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#b4f733]">Ready to order in Bangalore?</span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1.5">
            Get Bangalore&apos;s Best Vapes Today.
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
            Contact our dedicated support team via WhatsApp for instant ordering, stock inquiries, or recommendations.
          </p>
          <div className="mt-5 flex justify-center">
            <a
              href="https://wa.me/917404563603?text=Hello%20Vape%20Shop%20Bangalore%2C%20I%20would%20like%20to%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#b4f733] hover:bg-[#c6ff00] text-black font-extrabold text-xs sm:text-sm px-6 py-2.5 sm:px-7 sm:py-3 rounded-lg transition shadow-[0_0_25px_rgba(180,247,51,0.3)] flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* SEO Optimized Comprehensive Footer */}
      <Footer />
      {/* Floating WhatsApp Action Button (Right Bottom) */}
      <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-5 right-5 z-50 flex items-center group">
        <a
          href="https://wa.me/917404563603?text=Hi%2C%20I%20want%20to%20order%20vapes%20in%20Bangalore"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order on WhatsApp"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold p-3 sm:px-4 sm:py-3 rounded-full shadow-[0_4px_25px_rgba(37,211,102,0.5)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.7)] transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {/* WhatsApp Vector Icon */}
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="hidden sm:inline text-xs font-extrabold tracking-wide">
            Chat on WhatsApp
          </span>
          <span className="flex h-2.5 w-2.5 rounded-full bg-white animate-pulse"></span>
        </a>
      </aside>
    </div>
  );
}
