import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import { blogs, getBlogBySlug, getAllBlogSlugs } from '@/data/blogs';
import { 
  PhoneCall, 
  MapPin, 
  ArrowLeft, 
  Clock, 
  CheckCircle2, 
  Share2, 
  MessageCircle, 
  ChevronRight,
  Sparkles,
  BookOpen
} from 'lucide-react';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | Vape Shop Bangalore',
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vapeshopsbangalore.com';

  return {
    title: `${post.title} | Vape Shop Bangalore`,
    description: post.excerpt,
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Vape Shop Bangalore`,
      description: post.excerpt,
      url: `${baseUrl}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogs.filter((b) => b.id !== post.id).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vape Shop Bangalore',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.vapeshopsbangalore.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.vapeshopsbangalore.com/blog/${post.slug}`,
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

      {/* Article Content Container */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-6 flex-wrap">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span className="text-zinc-600">/</span>
          <Link href="/blog" className="hover:text-white transition">Blog</Link>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-300 truncate max-w-[280px] sm:max-w-none">{post.title}</span>
        </div>

        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs text-[#b4f733] hover:underline mb-6 font-bold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Guides</span>
        </Link>

        {/* Header Meta */}
        <div className="flex items-center gap-2 text-xs mb-3 flex-wrap">
          <span className="bg-[#b4f733]/10 border border-[#b4f733]/30 text-[#b4f733] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider text-[10px]">
            {post.category}
          </span>
          <span className="text-zinc-500">•</span>
          <span className="text-zinc-400">{post.date}</span>
          <span className="text-zinc-500">•</span>
          <span className="text-zinc-400">{post.readTime}</span>
          <span className="text-zinc-500">•</span>
          <span className="text-zinc-400">By {post.author}</span>
        </div>

        {/* Article Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
          {post.title}
        </h1>

        {/* Quick Intro Box */}
        <div className="mt-6 bg-[#0e0e14] border-l-4 border-[#b4f733] p-4 sm:p-5 rounded-r-xl">
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-medium">
            {post.content.intro}
          </p>
        </div>

        {/* Main Article Body */}
        <article className="mt-8 sm:mt-10 space-y-8 text-sm sm:text-base text-zinc-300 leading-relaxed">
          {post.content.sections.map((sec, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight pt-2 border-t border-[#181822]">
                {sec.heading}
              </h2>
              {sec.body.map((para, pIdx) => (
                <p key={pIdx} className="text-zinc-300 leading-relaxed text-xs sm:text-sm">
                  {para}
                </p>
              ))}
              {sec.bullets && (
                <ul className="space-y-2 mt-3 pl-2">
                  {sec.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#b4f733] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Conclusion */}
          <div className="bg-[#0b0b10] border border-[#1f1f2c] rounded-2xl p-5 sm:p-6 mt-8">
            <h3 className="text-base sm:text-lg font-bold text-white mb-2">
              Summary & Bangalore Dispatch Advice
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {post.content.conclusion}
            </p>

            <div className="mt-4 pt-4 border-t border-[#1c1c28] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-[#b4f733] font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Express 2-4 Hours Delivery across Bengaluru</span>
              </div>
              <a
                href={`https://wa.me/916265321741?text=${encodeURIComponent(`Hi Vape Shop Bangalore, I read your guide "${post.title}" and want to order`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#b4f733] hover:bg-[#c8ff3d] text-black font-extrabold text-xs px-5 py-2.5 rounded-full flex items-center gap-1.5 transition duration-200 shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>
        </article>

        {/* Related Guides Section */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[#181824]">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
            More Helpful Bangalore Vaping Guides
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedPosts.map((r) => (
              <Link
                key={r.id}
                href={`/blog/${r.slug}`}
                className="bg-[#0e0e14] border border-[#1c1c26] hover:border-[#b4f733]/50 rounded-xl p-4 flex flex-col justify-between transition group"
              >
                <div>
                  <span className="text-[10px] text-[#b4f733] font-semibold">{r.category}</span>
                  <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#b4f733] transition line-clamp-2 mt-1">
                    {r.title}
                  </h4>
                </div>
                <div className="mt-3 flex items-center text-[11px] text-[#b4f733] font-semibold">
                  <span>Read article →</span>
                </div>
              </Link>
            ))}
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
