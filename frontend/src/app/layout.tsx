import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://vapeshopbangalore.com"),
  title: {
    default: "Vape Shop Bangalore | Bangalore's #1 Most Trusted Vape Destination",
    template: "%s | Vape Shop Bangalore",
  },
  description:
    "Bangalore's most trusted vape destination. 100% authentic disposables, pod systems, premium e-liquids, coils, and accessories. Fast same-day express delivery across Bangalore (Indiranagar, Koramangala, HSR, Whitefield) with 2-4 hours delivery and 100% genuine scratch QR codes.",
  keywords: [
    "vape shop Bangalore",
    "vape store Bangalore",
    "buy vape online Bangalore",
    "disposable vapes Bangalore",
    "pod systems Bangalore",
    "authentic vape shop Bangalore",
    "same day vape delivery Bangalore",
    "vape shop Koramangala",
    "vape shop Indiranagar",
    "vape delivery HSR Layout",
    "vape store Whitefield",
    "premium e-liquids Bangalore",
    "nicotine salts Bangalore"
  ],
  authors: [{ name: "Vape Shop Bangalore" }],
  creator: "Vape Shop Bangalore",
  publisher: "Vape Shop Bangalore",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Vape Shop Bangalore",
    title: "Vape Shop Bangalore | Bangalore's #1 Most Trusted Vape Destination",
    description:
      "Order 100% authentic vapes, disposables & pod devices in Bangalore. Same-day express delivery across all Bangalore zones, guaranteed genuine products, and premium customer service.",
    images: [
      {
        url: "/Bangalore%E2%80%99s%20Neon%20Vape%20Destination.png",
        width: 2120,
        height: 742,
        alt: "Vape Shop Bangalore - Most Trusted Vape Destination",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vape Shop Bangalore | Bangalore's Most Trusted Vape Destination",
    description: "Premium vape devices, disposables & e-liquids with lightning-fast same-day delivery across Bangalore.",
    images: ["/Bangalore%E2%80%99s%20Neon%20Vape%20Destination.png"],
    creator: "@VapeShopBLR",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://vapeshopbangalore.com/#organization",
        "name": "Vape Shop Bangalore",
        "url": "https://vapeshopbangalore.com",
        "logo": "https://vapeshopbangalore.com/icon-512.png",
        "description": "Bangalore's most trusted destination for authentic vapes, pod systems and accessories.",
        "sameAs": [
          "https://instagram.com/vapeshopbangalore",
          "https://t.me/vapeshopbangalore"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://vapeshopbangalore.com/#localbusiness",
        "name": "Vape Shop Bangalore",
        "image": "https://vapeshopbangalore.com/Bangalore%E2%80%99s%20Neon%20Vape%20Destination.png",
        "telephone": "+91-7404563603",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "MG Road / Koramangala / Indiranagar",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "560001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "12.9716",
          "longitude": "77.5946"
        },
        "areaServed": [
          "Bangalore",
          "Koramangala",
          "Indiranagar",
          "HSR Layout",
          "Whitefield",
          "JP Nagar",
          "Electronic City",
          "MG Road",
          "Jayanagar"
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "10:00",
          "closes": "23:30"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://vapeshopbangalore.com/#website",
        "url": "https://vapeshopbangalore.com",
        "name": "Vape Shop Bangalore",
        "publisher": {
          "@id": "https://vapeshopbangalore.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://vapeshopbangalore.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#050505] text-white antialiased selection:bg-[#b4f733] selection:text-black">
        {children}
      </body>
    </html>
  );
}
