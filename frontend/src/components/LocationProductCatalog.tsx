'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products, Product } from '@/data/products';
import { Search, MessageCircle, Zap } from 'lucide-react';

interface Props {
  locationName: string;
}

export default function LocationProductCatalog({ locationName }: Props) {
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

  return (
    <section className="mt-12 w-full">
      {/* Header with Search and Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5 sm:mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#b4f733] mb-1">
            <Zap className="w-3.5 h-3.5" />
            <span>Full Catalog In Stock • Express {locationName} Dispatch</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white">
            All Authentic Products Available in {locationName}
          </h2>
          <p className="text-xs text-zinc-400 mt-0.5 sm:mt-1">
            Showing all {filteredProducts.length} devices, pods & e-liquids ready for 45-90 min delivery to {locationName}
          </p>
        </div>

        {/* Search Input */}
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

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2.5 mb-5 sm:mb-6 no-scrollbar">
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
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === tab.label ? 'bg-black/20 text-black' : 'bg-[#1c1c28] text-zinc-400'
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* All Products Grid - Strictly 2 Columns on Mobile, 4 Columns on Desktop */}
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

                    {/* Product Image */}
                    <Image
                      src={p.image}
                      alt={`${p.name} delivered in ${locationName}`}
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

                {/* WhatsApp Order Button tailored to Location */}
                <a
                  href={`https://wa.me/916265321741?text=${encodeURIComponent(`Hi Vape Shop Bangalore, I want to order ${p.name} for ₹${p.price.toLocaleString('en-IN')} in ${locationName}`)}`}
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
  );
}
