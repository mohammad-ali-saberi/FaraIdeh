import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/', // Admin Dashboard
          '/api/', // API routes
          '/login', // Login page
          '/_next/', // Next.js files
        ],
      },
      {
        userAgent: 'GPTBot', // ChatGPT
        disallow: ['/'],
      },
      {
        userAgent: 'CCBot', // Common Crawl
        disallow: ['/'],
      },
      {
        userAgent: 'Google-Extended', // Bard/Gemini
        disallow: ['/'],
      },
    ],
    sitemap: 'https://fara-ideh.ir/sitemap.xml',
  };
}
