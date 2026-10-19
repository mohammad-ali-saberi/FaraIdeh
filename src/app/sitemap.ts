import { prisma } from '@/libs/prisma';
import { SITE_URL } from '@/libs/siteConfig';
import { MetadataRoute } from 'next';

/**
 * Build timestamp for pages whose content is not tracked in the database.
 * Using `new Date()` inline would report "just now" on every crawl, which
 * search engines learn to ignore.
 */
const buildDate = new Date();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Published blogs
  const blogs = await prisma.blogs.findMany({
    where: { published: true },
    select: {
      slug: true,
      updatedAt: true,
    },
    orderBy: {
      updatedAt: 'desc',
    },
  });

  // Latest content change, used as `lastModified` for the listing pages.
  const latestBlogUpdate = blogs[0]?.updatedAt ?? buildDate;

  const latestProject = await prisma.project.findFirst({
    where: { isActive: true },
    select: { updatedAt: true },
    orderBy: { updatedAt: 'desc' },
  });

  // Static Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}`,
      lastModified: latestBlogUpdate,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: latestProject?.updatedAt ?? buildDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blogs`,
      lastModified: latestBlogUpdate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/order-form`,
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: buildDate,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: buildDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${SITE_URL}/blogs/${blog.slug}`,
    lastModified: blog.updatedAt || buildDate,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
