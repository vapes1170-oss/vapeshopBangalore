import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import ReviewsSection from '@/components/ReviewsSection';
import { 
  products, 
  getProductBySlug, 
  getAllProductSlugs 
} from '@/data/products';
import { 
  ShieldCheck, 
  Truck, 
  Clock, 
  Star, 
  CheckCircle2, 
  PhoneCall, 
  ShoppingBag, 
  ArrowLeft, 
  ArrowRight,
  Share2,
  ChevronRight,
  Zap,
  Sparkles,
  MessageCircle
} from 'lucide-react';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// Pre-render all 25 products at build time for lightning speed
export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Beast Dynamic SEO Metadata for every single product
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found | Vape Shop Bangalore',
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vapeshopsbangalore.com';
  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return {
    title: `${product.name} | Buy Online Bangalore @ ₹${product.price.toLocaleString('en-IN')}`,
    description: `Order 100% authentic ${product.name} in Bangalore at discounted price ₹${product.price.toLocaleString('en-IN')} (Original ₹${product.originalPrice.toLocaleString('en-IN')}, Save ${discountPercent}%). Same-day 2-4 hrs express delivery across all Bangalore zones with genuine manufacturer scratch-and-scan QR verification.`,
    keywords: [
      product.name,
      `buy ${product.name} Bangalore`,
      `${product.brand} Bangalore`,
      `${product.name} price`,
      `authentic ${product.name}`,
      `vape shop Bangalore ${product.category}`,
      `same day delivery ${product.name} Bangalore`,
    ],
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} - ₹${product.price.toLocaleString('en-IN')} | Vape Shop Bangalore`,
      description: `Buy ${product.name} at lowest price ₹${product.price.toLocaleString('en-IN')} in Bangalore. 100% genuine with express 2-4 hours delivery.`,
      url: `/products/${product.slug}`,
      siteName: 'Vape Shop Bangalore',
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
      type: 'website',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Best Price ₹${product.price.toLocaleString('en-IN')} in Bangalore`,
      description: `100% authentic ${product.name}. Same-day delivery across Bangalore. Order on WhatsApp!`,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vapeshopsbangalore.com';
  const discountAmount = product.originalPrice - product.price;
  const discountPercent = Math.round((discountAmount / product.originalPrice) * 100);

  // Related products from the same category
  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand))
    .slice(0, 4);

  const whatsappMessage = encodeURIComponent(
    `Hello Vape Shop Bangalore! I want to order:\n\n*Product:* ${product.name}\n*Price:* ₹${product.price.toLocaleString('en-IN')}\n*Link:* ${siteUrl}/products/${product.slug}\n\nPlease let me know delivery time to my Bangalore address.`
  );

  // Beast Structured Data JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': `${siteUrl}/products/${product.slug}#product`,
        name: product.name,
        image: `${siteUrl}${product.image}`,
        description: product.description,
        sku: `VAPE-BLR-${product.id}`,
        mpn: `BLR-${product.slug}`,
        brand: {
          '@type': 'Brand',
          name: product.brand,
        },
        offers: {
          '@type': 'Offer',
          url: `${siteUrl}/products/${product.slug}`,
          priceCurrency: 'INR',
          price: product.price,
          priceValidUntil: '2027-12-31',
          itemCondition: 'https://schema.org/NewCondition',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'Vape Shop Bangalore',
            url: siteUrl,
          },
          shippingDetails: {
            '@type': 'OfferShippingDetails',
            shippingRate: {
              '@type': 'MonetaryAmount',
              value: '0',
              currency: 'INR',
            },
            deliveryTime: {
              '@type': 'ShippingDeliveryTime',
              handlingTime: {
                '@type': 'QuantitativeValue',
                minValue: 0,
                maxValue: 1,
                unitCode: 'HUR',
              },
              transitTime: {
                '@type': 'QuantitativeValue',
                minValue: 2,
                maxValue: 4,
                unitCode: 'HUR',
              },
            },
          },
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: product.rating,
          reviewCount: product.reviews,
          bestRating: 5,
          worstRating: 1,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: product.category,
            item: `${siteUrl}/#categories`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: product.name,
            item: `${siteUrl}/products/${product.slug}`,
          },
        ],
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
          ⚡ <strong>Same Day Express Delivery in Bangalore</strong> (Within 2-4 Hours) • 100% Original
        </span>
      </div>

      {/* Main Navbar - Compact */}
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

          {/* Navigation Links - Requested Tabs */}
          <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-zinc-300">
            <Link href="/" className="hover:text-[#b4f733] transition">Home</Link>
            <Link href="/#bestsellers" className="hover:text-[#b4f733] transition">Products</Link>
            <Link href="/#brands" className="hover:text-[#b4f733] transition">Brands</Link>
            <Link href="/locations" className="hover:text-[#b4f733] transition">Locations</Link>
            <Link href="/blog" className="hover:text-[#b4f733] transition">Blog</Link>
            <Link href="/contact" className="hover:text-[#b4f733] transition">Contact</Link>
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={`https://wa.me/916265321741?text=${whatsappMessage}`}
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

      {/* Dedicated SEO Banner Bar for this product */}
      <div className="bg-gradient-to-r from-[#0d0d14] via-[#151522] to-[#0d0d14] border-b border-[#1f1f2e] py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-zinc-400">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <Link href="/#categories" className="hover:text-white transition">{product.category}</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-[#b4f733] font-semibold truncate max-w-[200px] sm:max-w-none">{product.name}</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-zinc-400">
            <span className="flex items-center gap-1 text-[#b4f733] font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" /> Guaranteed Genuine
            </span>
            <span>•</span>
            <span>Same-Day BLR Dispatch</span>
          </div>
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Product Image Gallery */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative w-full aspect-square bg-black border border-[#1f1f2c] rounded-2xl overflow-hidden shadow-2xl group">
              {/* Product Badges */}
              <div className="absolute top-3.5 left-3.5 z-10 flex flex-col gap-1.5">
                <span className="bg-[#b4f733] text-black font-extrabold text-[10px] sm:text-xs px-2.5 py-1 rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(180,247,51,0.5)]">
                  {product.tag}
                </span>
                <span className="bg-black/70 backdrop-blur-md border border-emerald-500/30 text-emerald-400 font-semibold text-[10px] px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  In Stock Bangalore
                </span>
              </div>

              <div className="absolute top-3.5 right-3.5 z-10 bg-black/75 backdrop-blur-md border border-[#262636] px-2.5 py-1 rounded-full text-[11px] font-bold text-[#b4f733] shadow-sm">
                Save {discountPercent}%
              </div>

              {/* Product Image - Edge-to-Edge Clean Fill */}
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              />
            </div>

            {/* Micro Trust Strip under Image */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-[#0b0b10] border border-[#1c1c28] p-2.5 rounded-xl text-center">
                <ShieldCheck className="w-4 h-4 text-[#b4f733] mx-auto mb-1" />
                <div className="text-[10px] font-bold text-white">QR Scannable</div>
                <div className="text-[9px] text-zinc-500">100% Genuine</div>
              </div>
              <div className="bg-[#0b0b10] border border-[#1c1c28] p-2.5 rounded-xl text-center">
                <Clock className="w-4 h-4 text-[#b4f733] mx-auto mb-1" />
                <div className="text-[10px] font-bold text-white">2-4 Hours</div>
                <div className="text-[9px] text-zinc-500">Express BLR</div>
              </div>
              <div className="bg-[#0b0b10] border border-[#1c1c28] p-2.5 rounded-xl text-center">
                <Truck className="w-4 h-4 text-[#b4f733] mx-auto mb-1" />
                <div className="text-[10px] font-bold text-white">Discreet Box</div>
                <div className="text-[9px] text-zinc-500">Plain Packing</div>
              </div>
            </div>
          </div>

          {/* Right Column: Product Info & Buy CTA */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Category & Brand */}
              <div className="flex items-center gap-2 text-xs font-bold text-[#b4f733] uppercase tracking-wider mb-2">
                <span>{product.brand}</span>
                <span>•</span>
                <span className="text-zinc-400">{product.category}</span>
                {product.puffs && (
                  <>
                    <span>•</span>
                    <span className="text-[#b4f733]">{product.puffs}</span>
                  </>
                )}
              </div>

              {/* Product Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                {product.name}
              </h1>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-3 mt-3">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white">{product.rating}</span>
                <span className="text-xs text-zinc-500">({product.reviews} verified Bangalore orders)</span>
              </div>

              {/* Price Block */}
              <div className="mt-5 p-4 rounded-xl bg-[#0d0d14] border border-[#1d1d28] flex flex-wrap items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-black text-[#b4f733]">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <span className="text-base sm:text-lg text-zinc-500 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="bg-[#b4f733]/15 text-[#b4f733] text-xs font-extrabold px-2.5 py-1 rounded-md border border-[#b4f733]/30">
                  Save ₹{discountAmount.toLocaleString('en-IN')} ({discountPercent}% OFF)
                </span>
              </div>

              {/* Short Description */}
              <p className="mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {product.shortDesc}
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={`https://wa.me/916265321741?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#b4f733] hover:bg-[#c8ff3d] text-black font-black text-sm sm:text-base py-3.5 px-6 rounded-xl transition duration-200 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(180,247,51,0.35)]"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>Order Now on WhatsApp</span>
                </a>
                <Link
                  href="/#delivery"
                  className="bg-[#12121a] hover:border-[#b4f733] border border-[#272736] text-white font-bold text-xs sm:text-sm py-3.5 px-5 rounded-xl transition text-center flex items-center justify-center gap-1.5"
                >
                  <Truck className="w-4 h-4 text-[#b4f733]" />
                  <span>Check Delivery Zones</span>
                </Link>
              </div>

              {/* Delivery Guarantee Alert */}
              <div className="mt-4 bg-[#0a0a0e] border border-[#1e1e28] rounded-xl p-3 flex items-center gap-3 text-xs text-zinc-300">
                <span className="flex h-2 w-2 rounded-full bg-[#b4f733] animate-pulse"></span>
                <span>
                  <strong>Bangalore Express Delivery:</strong> Orders confirmed before 9:00 PM are delivered within <strong>2 to 4 hours</strong> today across Koramangala, Indiranagar, HSR, Whitefield, MG Road & all zones.
                </span>
              </div>

              {/* Product Key Features */}
              <div className="mt-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#b4f733] mb-2.5">
                  Key Features & Authenticity
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-[#09090d] border border-[#171722] p-2 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-[#b4f733] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specifications */}
              <div className="mt-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#b4f733] mb-2.5">
                  Technical Specifications
                </h3>
                <div className="bg-[#09090d] border border-[#171722] rounded-xl overflow-hidden divide-y divide-[#171722] text-xs">
                  {product.specs.map((s, idx) => (
                    <div key={idx} className="flex justify-between py-2.5 px-4">
                      <span className="text-zinc-400 font-medium">{s.label}</span>
                      <span className="text-white font-bold">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Description */}
              <div className="mt-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#b4f733] mb-2">
                  Product Overview
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed bg-[#09090d] border border-[#171722] p-4 rounded-xl">
                  {product.description}
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-[#181824]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#b4f733]">Recommended For You</span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
                  Related Devices & Flavors
                </h2>
              </div>
              <Link href="/#bestsellers" className="text-xs text-[#b4f733] hover:underline flex items-center font-bold">
                View All <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5 w-full">
              {relatedProducts.map((p) => {
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

                      {/* Price Row */}
                      <div className="flex items-baseline gap-1.5 sm:gap-2 mt-1 mb-2 sm:mb-3 px-0.5">
                        <span className="text-base sm:text-2xl font-black text-[#b4f733]">
                          ₹{p.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] sm:text-sm text-zinc-500 line-through font-medium">
                          ₹{p.originalPrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </Link>

                    {/* Chat on WhatsApp Button */}
                    <a
                      href={`https://wa.me/916265321741?text=${encodeURIComponent(`Hi Vape Shop Bangalore, I want to order ${p.name} for ₹${p.price.toLocaleString('en-IN')}`)}`}
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
          </section>
        )}
      </main>

      {/* Verified Bangalore Customer Reviews Section */}
      <ReviewsSection />

      {/* Floating WhatsApp Action Button */}
      <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-5 right-5 z-50 flex items-center group">
        <a
          href={`https://wa.me/916265321741?text=${whatsappMessage}`}
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

      {/* SEO Optimized Comprehensive Footer */}
      <Footer />
    </div>
  );
}
