'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { blogs, BlogPost } from '@/data/blogs';
import { 
  PhoneCall, 
  MapPin, 
  ArrowRight, 
  Clock, 
  Search, 
  Sparkles,
  BookOpen
} from 'lucide-react';

export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Buying Guides', 'Device Reviews', 'Bangalore Delivery', 'E-Liquids'];

  const filteredBlogs = blogs.filter((b) => {
    const matchesCategory = selectedCategory === 'All' || b.category === selectedCategory;
    const matchesSearch =
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-[#b4f733] selection:text-black font-sans">
      
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
            <Link href="/blog" className="text-[#b4f733] font-bold">Blog</Link>
            <Link href="/contact" className="hover:text-[#b4f733] transition">Contact</Link>
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
              className="bg-[#b4f733] hover:bg-[#c8ff3d] text-black font-bold px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs transition flex items-center gap-1.5 shadow-[0_0_15px_rgba(180,247,51,0.25)] hover:shadow-[0_0_25px_rgba(180,247,51,0.4)]"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Blog Listing Section matching reference image */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 w-full">
        {/* Breadcrumb matching reference image */}
        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-6">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span className="text-zinc-600">/</span>
          <span className="text-white font-medium">Blog</span>
        </div>

        {/* Headline matching reference image: Vape Blog */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
          Vape <span className="text-[#b4f733]">Blog</span>
        </h1>
        <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
          Buying guides, brand comparisons and Bangalore delivery advice.
        </p>

        {/* Filter and Search Bar */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#181824]">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold px-3.5 py-1.5 rounded-full whitespace-nowrap transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#b4f733] text-black shadow-[0_0_12px_rgba(180,247,51,0.3)]'
                    : 'bg-[#101016] text-zinc-400 hover:text-white border border-[#222230]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides..."
              className="w-full bg-[#0c0c12] border border-[#222230] focus:border-[#b4f733] rounded-full pl-9 pr-4 py-1.5 text-xs text-white placeholder-zinc-500 outline-none transition"
            />
          </div>
        </div>

        {/* 15 Stacked Blog Cards matching reference image */}
        <div className="space-y-4 sm:space-y-5 mt-6 sm:mt-8">
          {filteredBlogs.map((b) => (
            <Link
              key={b.id}
              href={`/blog/${b.slug}`}
              className="block bg-[#0e0e14] border border-[#1e1e28] hover:border-[#b4f733]/50 rounded-[22px] sm:rounded-[26px] p-6 sm:p-7 transition-all duration-300 group shadow-lg hover:-translate-y-0.5"
            >
              {/* Date & Meta */}
              <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
                <span>{b.date}</span>
                <span>•</span>
                <span>{b.readTime}</span>
                <span>•</span>
                <span className="text-[#b4f733] font-semibold">{b.category}</span>
              </div>

              {/* Title matching reference image */}
              <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#b4f733] transition leading-snug">
                {b.title}
              </h2>

              {/* Excerpt */}
              <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed line-clamp-2">
                {b.excerpt}
              </p>

              {/* Read Guide Link matching reference image */}
              <div className="mt-4 flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#b4f733] group-hover:underline">
                <span>Read guide</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-16 bg-[#0c0c12] border border-[#1e1e28] rounded-2xl p-6 mt-6">
            <p className="text-sm text-zinc-400">No blog guides found matching &quot;{searchQuery}&quot;.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-3 text-xs text-[#b4f733] font-bold underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
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
