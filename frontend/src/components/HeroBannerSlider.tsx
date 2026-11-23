'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BannerItem {
  id: number;
  desktopImage: string;
  mobileImage: string;
  title: string;
  alt: string;
}

const banners: BannerItem[] = [
  {
    id: 1,
    desktopImage: "/Bangalore’s Neon Vape Destination.png",
    mobileImage: "/Bangalore’s Neon Vape Showcase.png",
    title: "Bangalore’s Neon Vape Destination",
    alt: "Bangalore’s Neon Vape Destination Official Banner",
  },
  {
    id: 2,
    desktopImage: "/ELFBAR Ice King Moonnight Collection.png",
    mobileImage: "/Neon Ice King Vape Collection Display.png",
    title: "ELFBAR Ice King Moonnight Collection",
    alt: "ELFBAR Ice King Moonnight Collection Official Banner",
  },
  {
    id: 3,
    desktopImage: "/Neon Disposable Vape Showcase.png",
    mobileImage: "/Neon Vape Product Display Poster.png",
    title: "Neon Disposable Vape Showcase",
    alt: "Neon Disposable Vape Showcase Official Banner",
  },
];

export default function HeroBannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  }, []);

  // Auto-slide effect every 4.5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 40) {
      nextSlide();
    } else if (diff < -40) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <div 
      className="w-full relative group my-0 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Edge-to-edge full width container */}
      <div className="relative w-full overflow-hidden bg-black">
        
        {/* Responsive Aspect Ratio: Mobile (1112x1415 portrait) | Desktop (2120x742 landscape) */}
        <div className="relative w-full aspect-[1112/1415] md:aspect-[2120/742] bg-black">
          {banners.map((banner, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={banner.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                {/* Desktop Banner (Screen >= 768px) */}
                <div className="hidden md:block relative w-full h-full">
                  <Image
                    src={banner.desktopImage}
                    alt={`${banner.alt} - Desktop`}
                    fill
                    priority={index === 0}
                    className="object-contain w-full h-full"
                    sizes="100vw"
                  />
                </div>

                {/* Mobile Banner (Screen < 768px) */}
                <div className="block md:hidden relative w-full h-full">
                  <Image
                    src={banner.mobileImage}
                    alt={`${banner.alt} - Mobile`}
                    fill
                    priority={index === 0}
                    className="object-contain w-full h-full"
                    sizes="100vw"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrow Buttons */}
        <button
          onClick={prevSlide}
          aria-label="Previous Banner"
          className="absolute left-2.5 sm:left-5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#b4f733] text-white hover:text-black border border-[#2b2b3a] flex items-center justify-center backdrop-blur-md transition-all duration-200 opacity-90 sm:opacity-0 group-hover:opacity-100 hover:scale-110 shadow-lg cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Banner"
          className="absolute right-2.5 sm:right-5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#b4f733] text-white hover:text-black border border-[#2b2b3a] flex items-center justify-center backdrop-blur-md transition-all duration-200 opacity-90 sm:opacity-0 group-hover:opacity-100 hover:scale-110 shadow-lg cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Bottom Pagination Dots & Progress Bar */}
        <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 z-30 flex items-center gap-1.5 sm:gap-2 bg-black/70 backdrop-blur-md border border-[#262636] px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full">
          {banners.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setCurrentIndex(dotIndex)}
              aria-label={`Go to slide ${dotIndex + 1}`}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                dotIndex === currentIndex
                  ? 'w-5 sm:w-7 bg-[#b4f733] shadow-[0_0_10px_#b4f733]'
                  : 'w-1.5 sm:w-2 bg-zinc-600 hover:bg-zinc-400'
              }`}
            />
          ))}
          <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 ml-1">
            0{currentIndex + 1} / 0{banners.length}
          </span>
        </div>
      </div>
    </div>
  );
}
