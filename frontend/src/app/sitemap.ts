import { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { blogs } from '@/data/blogs';
import { bangaloreLocations } from '@/data/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vapeshopbangalore.com';
  const currentDate = new Date().toISOString();

  // Static core routes
  const staticRoutes = [
    '',
    '/blog',
    '/contact',
    '/locations',
    '/disposables',
    '/pod-systems',
    '/e-liquids',
    '/starter-kits',
    '/accessories',
    '/bangalore-express-delivery',
    '/vape-shop-koramangala',
    '/vape-shop-indiranagar',
    '/vape-shop-whitefield',
    '/vape-shop-hsr-layout',
    '/faq',
    '/about-us',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: (route === '' ? 'daily' : 'weekly') as 'daily' | 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic Product Pages - 25 High-priority SEO URLs
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  // Dynamic Blog Guide Pages - 15 In-depth SEO Articles
  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // Dynamic Location Hub Landing Pages - 12 Bangalore Neighborhoods
  const locationRoutes = bangaloreLocations.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes, ...locationRoutes];
}
