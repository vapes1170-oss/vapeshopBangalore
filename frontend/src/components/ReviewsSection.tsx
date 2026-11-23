'use client';

import React, { useState } from 'react';
import { Star, CheckCircle2, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  location: string;
  device: string;
  rating: number;
  date: string;
  text: string;
}

const reviewsData: Review[] = [
  {
    id: 1,
    name: 'Rahul M.',
    location: 'Koramangala, 5th Block',
    device: 'Elfbar BC5000',
    rating: 5,
    date: 'Yesterday',
    text: 'Ordered the Elfbar BC5000 Grape Energy around 3 PM and received it in Koramangala by 4:45 PM. Scanned the QR code on the box and it verified 100% genuine on the official brand site. Best vape store in Bangalore!',
  },
  {
    id: 2,
    name: 'Arjun K.',
    location: 'Indiranagar, 100ft Road',
    device: 'Uwell Caliburn G3 Pro',
    rating: 5,
    date: '2 days ago',
    text: 'Really smooth ordering experience on WhatsApp. The plain discreet packaging was tamper-proof and delivered within 2 hours to Indiranagar. The support team answered my pod resistance questions quickly.',
  },
  {
    id: 3,
    name: 'Vikram S.',
    location: 'HSR Layout, Sector 3',
    device: 'Lost Mary MT35000',
    rating: 5,
    date: '3 days ago',
    text: 'I liked the variety of devices in stock and how easy it was to order. The Lost Mary Turbo has insane flavor and the dynamic screen keeps track of juice levels. Delivery in HSR was under 90 minutes.',
  },
  {
    id: 4,
    name: 'Priya N.',
    location: 'Whitefield, ITPL Main Rd',
    device: 'Nasty Bolt 50K',
    rating: 5,
    date: '4 days ago',
    text: 'Living in Whitefield usually means waiting 24-48 hours for e-commerce, but Vape Shop Bangalore got it to my apartment the exact same evening. 100% authentic and packaging was completely discrete.',
  },
  {
    id: 5,
    name: 'Rohan D.',
    location: 'JP Nagar, 6th Phase',
    device: 'Geekvape B60 Aegis Boost',
    rating: 5,
    date: '5 days ago',
    text: 'The Geekvape B60 60W kit is an absolute tank. Scratch-and-verify hologram was intact and genuine. Instant UPI payment and quick courier tracking on WhatsApp made it super easy.',
  },
  {
    id: 6,
    name: 'Sneha B.',
    location: 'MG Road / Brigade Rd',
    device: 'Pod Salt UK Nic Salts',
    rating: 5,
    date: '6 days ago',
    text: 'Finding original imported UK nicotine salts in Bangalore was frustrating until I found this shop. Fresh batch, smooth 20mg throat hit, and doorstep delivery in central Bangalore in under 2 hours.',
  },
  {
    id: 7,
    name: 'Aditya T.',
    location: 'Bellandur, Outer Ring Rd',
    device: 'iGET 10000 Puffs',
    rating: 5,
    date: '1 week ago',
    text: 'The iGET 10000 Puffs device lasts forever. Solid build quality, authentic batch code, and zero leaking. Best vape shop delivery in Bengaluru without question.',
  },
  {
    id: 8,
    name: 'Karthik R.',
    location: 'Electronic City, Phase 1',
    device: 'VOOPOO Argus G2 Mini',
    rating: 5,
    date: '1 week ago',
    text: 'Electronic City delivery was prompt and on time. Device came fully sealed with official scratch verification. Pricing is fair and transparent compared to shady local shops.',
  },
  {
    id: 9,
    name: 'Manish G.',
    location: 'Jayanagar, 4th Block',
    device: 'Elfbar AF5000',
    rating: 5,
    date: '1 week ago',
    text: 'Been ordering from them for 4 months now. Never received a single counterfeit or dried-up pod. AF5000 rechargeable is my daily driver now. Delivered in 2 hours to Jayanagar.',
  },
  {
    id: 10,
    name: 'Ananya P.',
    location: 'Marathahalli',
    device: 'Vaporesso XROS 3 Mini',
    rating: 5,
    date: '2 weeks ago',
    text: 'Discrete packaging is a huge plus. The delivery courier was professional, discreet, and verified age appropriately. The XROS 3 Mini produces rich flavor with no hassle.',
  },
  {
    id: 11,
    name: 'Devendra S.',
    location: 'Hebbal / Sahakara Nagar',
    device: 'Lost Mary BM6000',
    rating: 5,
    date: '2 weeks ago',
    text: 'The Lost Mary BM6000 power display screen is super convenient. Arrived in North Bangalore within 3 hours on a Saturday evening. Top-notch service!',
  },
  {
    id: 12,
    name: 'Siddharth V.',
    location: 'BTM Layout, 2nd Stage',
    device: 'VOOPOO Drag & VMATE Set',
    rating: 5,
    date: '2 weeks ago',
    text: 'Got the VOOPOO limited dual gift set for a friend. Packaging was pristine, genuine serial codes, and top customer service on WhatsApp throughout the delivery.',
  },
  {
    id: 13,
    name: 'Tarun B.',
    location: 'Kalyan Nagar, HRBR',
    device: 'Bang Box 30K Dual Switch',
    rating: 5,
    date: '2 weeks ago',
    text: 'The double flavor switch on Bang Box 30K is incredible. You can switch between two fresh flavors on the fly. Fast dispatch from their Bangalore warehouse.',
  },
  {
    id: 14,
    name: 'Neha C.',
    location: 'Richmond Town',
    device: 'Uwell Caliburn G5 KOKO',
    rating: 5,
    date: '3 weeks ago',
    text: 'The Caliburn G5 KOKO with 1600mAh battery lasts me nearly 3 days on a single charge. Genuine replacement pods also readily available. 10/10 shopping experience.',
  },
  {
    id: 15,
    name: 'Akash L.',
    location: 'Banashankari, 2nd Stage',
    device: 'Nasty Bolt 50K Twin',
    rating: 5,
    date: '3 weeks ago',
    text: 'Customer support is 10/10. Helped me track the courier live on WhatsApp when I had an urgent flight to catch. Delivered right on schedule.',
  },
  {
    id: 16,
    name: 'Gaurav J.',
    location: 'Sarjapur Road',
    device: 'Vaporesso Armour G 80W',
    rating: 5,
    date: '3 weeks ago',
    text: 'The 80W Armour G Pod Mod is a powerhouse for freebase liquids. Authentic product with original warranty scratch card. Very impressed with their catalog.',
  },
  {
    id: 17,
    name: 'Divya M.',
    location: 'Malleshwaram, 8th Cross',
    device: 'Elfbar BC5000',
    rating: 5,
    date: '1 month ago',
    text: 'Fast and courteous delivery to Malleshwaram. The packaging was completely unbranded with tamper seals. QR scan showed verified 1st time scan.',
  },
  {
    id: 18,
    name: 'Prateek S.',
    location: 'Yelahanka New Town',
    device: 'Uwell Caliburn G4 Mini',
    rating: 5,
    date: '1 month ago',
    text: 'Lightweight, pocketable pod kit with zero spitback. Delivered to Yelahanka within 3 hours. Great communication from the team.',
  },
  {
    id: 19,
    name: 'Varun K.',
    location: 'Domlur / Indiranagar',
    device: 'Lost Mary MT35000 Turbo',
    rating: 5,
    date: '1 month ago',
    text: 'Ordered around lunchtime from my office in Domlur and had it in my hands before evening commute. 100% genuine vape store in Bangalore.',
  },
  {
    id: 20,
    name: 'Shreya T.',
    location: 'Frazer Town / Pulikeshi Nagar',
    device: 'Pod Salt Classic Tobacco',
    rating: 5,
    date: '1 month ago',
    text: 'Best pricing in Bangalore without compromising on authenticity. Friendly WhatsApp support and rapid doorstep courier. Will be a regular buyer!',
  },
];

export default function ReviewsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? reviewsData : reviewsData.slice(0, 6);

  return (
    <section id="reviews" className="py-12 sm:py-16 bg-[#060609] border-t border-[#161622] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching user reference image */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#b4f733]">
            REVIEWS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white mt-1.5">
            Loved across Bangalore
          </h2>

          {/* 5-Star Rating Pill Badge */}
          <div className="mt-3.5 inline-flex items-center gap-2 bg-[#0e0e16] border border-[#232332] px-4 py-1.5 rounded-full shadow-md">
            <div className="flex items-center gap-0.5 text-[#b4f733]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#b4f733] text-[#b4f733]" />
              ))}
            </div>
            <span className="text-xs font-bold text-white">5.0</span>
            <span className="text-zinc-500">•</span>
            <span className="text-xs text-zinc-300 font-medium">
              20 verified customer reviews
            </span>
          </div>
        </div>

        {/* 20 Reviews Grid (Mobile 1-col, Tablet 2-col, Desktop 3-col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {displayedReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#0e0e14] border border-[#1e1e28] hover:border-[#b4f733]/40 rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 group shadow-lg hover:-translate-y-0.5"
            >
              <div>
                {/* 5 Neon Lime Stars */}
                <div className="flex items-center gap-1 mb-3.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#b4f733] text-[#b4f733]" />
                  ))}
                  <span className="text-[10px] text-zinc-500 font-semibold ml-2">
                    {rev.device}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal mb-5">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Reviewer Info Row */}
              <div className="pt-4 border-t border-[#181824] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#161622] text-[#b4f733] border border-[#272738] flex items-center justify-center font-bold text-xs uppercase shrink-0">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{rev.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#b4f733]" />
                    </div>
                    <div className="text-[10px] text-zinc-500 font-medium">
                      Verified Buyer • {rev.location}
                    </div>
                  </div>
                </div>

                <span className="text-[10px] text-zinc-600 font-medium shrink-0">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Show All / Show Less Toggle Button */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#12121a] hover:bg-[#1a1a26] text-white border border-[#28283a] hover:border-[#b4f733] text-xs font-bold px-6 py-2.5 rounded-full transition flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>{showAll ? 'Show Fewer Reviews' : `Show All 20 Verified Reviews (${reviewsData.length - 6} more)`}</span>
            {showAll ? <ChevronUp className="w-4 h-4 text-[#b4f733]" /> : <ChevronDown className="w-4 h-4 text-[#b4f733]" />}
          </button>

          <a
            href="https://wa.me/917404563603?text=Hi%20Vape%20Shop%20Bangalore%2C%20I%20would%20like%20to%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#b4f733] hover:bg-[#c8ff3d] text-black font-extrabold text-xs px-6 py-2.5 rounded-full transition flex items-center gap-1.5 shadow-[0_0_15px_rgba(180,247,51,0.25)] active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Order on WhatsApp (2-4 Hrs BLR)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
