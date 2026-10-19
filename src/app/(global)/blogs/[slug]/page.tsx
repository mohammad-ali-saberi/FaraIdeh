// React Imports
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

// Next Imports
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Actions
import {
  getPublishedBlogBySlug,
  getPublishedBlogSlugs,
  getPublishedRelatedBlogs,
} from '@/app/actions/getPublicBlogs';

// Components
import BlogViewTracker from '@/components/BlogViewTracker';
import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CalendarIcon from '@/components/icons/blogs/CalendarIcon';
import CategoryIcon from '@/components/icons/blogs/CategoryIcon';
import EyeStrockIcon from '@/components/icons/blogs/EyeStrockIcon';
import TimeIcon from '@/components/icons/blogs/TimeIcon';
import FacebookIcon from '@/components/icons/FacebookIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import TelegramIcon from '@/components/icons/TelegramIcon';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

// Utils
import { formatDate } from '@/utils/formatDate';

// Libs
import { OG_DEFAULTS, SITE_URL } from '@/libs/siteConfig';

// Types
import { RelatedBlog } from '@/types/BlogsType';

// Styles
import styles from './BlogDetailPage.module.css';

interface IBlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: IBlogDetailPageProps): Promise<Metadata> {
  const { slug: blogSlug } = await params;

  if (!blogSlug) {
    return {
      title: 'مقاله یافت نشد',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const blog = await getPublishedBlogBySlug(blogSlug);

  if (!blog) {
    return {
      title: 'مقاله یافت نشد',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  // Parse labels
  const labels = (() => {
    try {
      return typeof blog.labels === 'string' ? JSON.parse(blog.labels) : blog.labels;
    } catch {
      return [];
    }
  })();

  return {
    title: blog.title,
    description: blog.excerpt || blog.content.substring(0, 160),
    keywords: Array.isArray(labels) ? labels : [],
    authors: [{ name: blog.author || 'فراایده' }],

    openGraph: {
      ...OG_DEFAULTS,
      title: blog.title,
      description: blog.excerpt || blog.content.substring(0, 160),
      type: 'article',
      publishedTime: blog.createdAt?.toISOString(),
      modifiedTime: blog.updatedAt?.toISOString(),
      authors: [blog.author || 'فراایده'],
      url: `/blogs/${blog.slug}`,
      images: [
        {
          // Using Dynamic OG Image
          url: `/api/og?title=${encodeURIComponent(blog.title)}&category=${encodeURIComponent(blog.category)}&author=${encodeURIComponent(blog.author || 'فراایده')}`,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt || blog.content.substring(0, 160),
      images: [
        `/api/og?title=${encodeURIComponent(blog.title)}&category=${encodeURIComponent(blog.category)}&author=${encodeURIComponent(blog.author || 'فراایده')}`,
      ],
    },

    alternates: {
      canonical: `/blogs/${blog.slug}`,
    },
  };
}

/**
 * Prerender every published article at build time; new ones are rendered on
 * first request and then cached (`dynamicParams` defaults to true).
 */
export async function generateStaticParams() {
  const slugs = await getPublishedBlogSlugs();

  return slugs.map((slug) => ({ slug }));
}

/** Re-check the content hourly; admin edits invalidate the `blogs` tag anyway. */
export const revalidate = 3600;

const BlogDetailPage = async ({ params }: IBlogDetailPageProps) => {
  const { slug: blogSlug } = await params;

  if (!blogSlug) {
    notFound();
  }

  const blog = await getPublishedBlogBySlug(blogSlug);

  if (!blog) {
    notFound();
  }

  // Get related blogs
  const relatedBlogs = await getPublishedRelatedBlogs(blog.category, blog.slug, 3);

  // Parse labels
  const labels = (() => {
    try {
      return typeof blog.labels === 'string' ? JSON.parse(blog.labels) : blog.labels;
    } catch {
      return [];
    }
  })();

  return (
    <>
      <BlogViewTracker blogId={blog.id} />

      {/* JSON-LD Structured Data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: blog.title,
            description: blog.excerpt,
            image: blog.featuredImage || `${SITE_URL}/images/og-image.png`,
            datePublished: blog.createdAt?.toISOString(),
            dateModified: blog.updatedAt?.toISOString(),
            author: {
              '@type': 'Person',
              name: blog.author || 'فراایده',
            },
            publisher: {
              '@type': 'Organization',
              name: 'فراایده',
              logo: {
                '@type': 'ImageObject',
                url: `${SITE_URL}/images/logo.png`,
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${SITE_URL}/blogs/${blog.slug}`,
            },
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema
        items={[
          { name: 'خانه', url: SITE_URL },
          { name: 'بلاگ', url: `${SITE_URL}/blogs` },
          { name: blog.title, url: `${SITE_URL}/blogs/${blog.slug}` },
        ]}
      />

      <Header colorIcon="black" />

      <Container>
        <div className="xl:mt-52 mt-33 sm:mt-40 md:mt-42 lg:mt-44 flex flex-col xl:flex-row justify-between gap-x-14 rtl">
          {/* Content */}
          <div className="w-full">
            {/* Title */}
            <div className="bg-orange mb-4 h-1 w-12 rounded-full lg:mb-5" />

            <h1 className="font-iranYekan text-2xl leading-[1.7] font-bold text-balance text-text-services-about sm:text-3xl lg:text-4xl lg:leading-normal">
              {blog.title}
            </h1>

            {/* Meta — one responsive row instead of duplicated desktop/mobile blocks */}
            <div className="mt-4 flex flex-wrap items-center gap-x-3.5 gap-y-2.5 sm:mt-5">
              {/* Category */}
              <span className="font-iranYekan inline-flex items-center gap-1.5 rounded-full border border-[#dbe6ff] bg-[#f0f5ff] px-3 py-1.5 text-xs font-bold text-primary">
                <CategoryIcon size="15" className="shrink-0" />
                {blog.category}
              </span>

              {/* Date */}
              <span className="font-iranYekan inline-flex items-center gap-1.5 text-sm text-[#6B7A99]">
                <CalendarIcon size="18" className="shrink-0 text-[#adb8cc]" />
                <span className="font-yekanBakhFaNum">{formatDate(blog.createdAt)}</span>
              </span>

              {/* Reading Time */}
              <span className="font-iranYekan inline-flex items-center gap-1.5 text-sm text-[#6B7A99]">
                <TimeIcon size="20" className="shrink-0 text-[#adb8cc]" />
                مطالعه <span className="font-yekanBakhFaNum">{blog.readingTimeMinutes}</span> دقیقه
              </span>

              {/* Views — the least important of the four, so it waits for width */}
              <span className="font-iranYekan hidden items-center gap-1.5 text-sm text-[#6B7A99] sm:inline-flex">
                <EyeStrockIcon size="21" className="shrink-0 text-[#adb8cc]" />
                <span className="font-yekanBakhFaNum">{blog.views}</span> بازدید
              </span>

              {/* Author */}
              <span className="font-iranYekan inline-flex items-center gap-2 text-sm font-extrabold text-text-services-about">
                <Image
                  src="https://res.cloudinary.com/ye11utoz/image/upload/f_auto,q_auto/16_2_-_Copy_wf5qco"
                  alt={blog.author}
                  width={30}
                  height={30}
                  className="h-[30px] w-[30px] rounded-full object-cover object-center ring-2 ring-[#e9eef7]"
                />
                {blog.author}
              </span>
            </div>

            {/* Image */}
            <div className="w-full h-52 md:h-72 lg:h-115 overflow-hidden relative rounded-2xl lg:mt-6 mt-2 sm:mt-3">
              <Image
                src={
                  blog.featuredImage ||
                  'https://res.cloudinary.com/ye11utoz/image/upload/f_auto,q_auto/images_eusf_eshcob'
                }
                alt={blog.title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 60vw"
                className="object-cover object-center"
              />
            </div>

            {/* Content */}
            <div
              className={`mt-5 md:mt-6 lg:mt-9 font-iranYekan text-sm md:text-base rtl ${styles.markdown}`}
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkBreaks]}
                components={{
                  // The page title above is already the single <h1>. Authors
                  // often repeat it as `# ...` at the top of the body, which
                  // would give the page two H1s — demote it, keeping the look.
                  h1: ({ children }) => <h2 className={styles.contentTitle}>{children}</h2>,
                }}
              >
                {blog.content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Related Articles & Labels & Share */}
          <div className="w-full xl:w-3/5">
            {/* Related Articles Title */}
            <h2 className="font-iranYekan text-2xl font-bold text-text-services-about mt-10 xl:mt-0">
              مقاله های مرتبط
            </h2>

            {/* Related Articles */}
            <div className="mt-4 flex flex-col gap-3 lg:max-xl:grid lg:max-xl:grid-cols-2">
              {relatedBlogs.length > 0 ? (
                relatedBlogs.map((relatedBlog: RelatedBlog) => (
                  <Link
                    key={relatedBlog.id}
                    href={`/blogs/${relatedBlog.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-transparent p-2.5 transition-all duration-300 ease-out hover:border-[#e9eef7] hover:bg-white hover:shadow-[0_14px_32px_-24px_rgba(16,24,40,0.55)]"
                  >
                    {/* Image */}
                    <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-40">
                      <Image
                        src={
                          relatedBlog.featuredImage ||
                          'https://res.cloudinary.com/ye11utoz/image/upload/f_auto,q_auto/images_eusf_eshcob'
                        }
                        alt={relatedBlog.title}
                        fill
                        sizes="(max-width: 640px) 96px, 160px"
                        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      />

                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/5" />
                    </div>

                    {/* Detail */}
                    <div className="min-w-0 flex-1">
                      {/* Category & Reading Time */}
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                        <span className="font-iranYekan inline-flex items-center gap-1.5 text-[11px] font-bold text-primary">
                          <CategoryIcon size="14" className="shrink-0" />
                          {relatedBlog.category}
                        </span>

                        <span className="font-iranYekan inline-flex items-center gap-1.5 text-[11px] text-[#adb8cc]">
                          <TimeIcon size="16" className="shrink-0" />
                          <span className="font-yekanBakhFaNum">
                            {relatedBlog.readingTimeMinutes}
                          </span>
                          دقیقه
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-iranYekan mt-2 line-clamp-2 text-sm font-bold text-text-services-about transition-colors duration-300 group-hover:text-primary sm:text-base">
                        {relatedBlog.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="font-iranYekan mt-1.5 line-clamp-2 text-xs leading-6 font-medium text-text-description">
                        {relatedBlog.excerpt}
                      </p>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-center bg-text-description font-iranYekan rtl text-white rounded-xl py-4 px-6">
                  در این دسته‌بندی مقاله دیگری نیست.
                </p>
              )}
            </div>

            {/* Labels Title */}
            <h2 className="font-iranYekan text-2xl font-bold text-text-services-about mt-5 lg:mt-8 xl:mt-12">
              برچسب ها
            </h2>

            {/* Labels */}
            <div className="flex flex-wrap gap-2.5 mt-3 lg:mt-5">
              {Array.isArray(labels) && labels.length > 0 ? (
                labels.map((label, index) => (
                  <span
                    key={index}
                    className="font-iranYekan rounded-full border border-[#e8eef8] bg-[#f5f8fd] px-4 py-2 text-sm font-semibold text-[#6B7A99] transition-colors duration-300 hover:border-primary/40 hover:bg-white hover:text-primary"
                  >
                    {label}
                  </span>
                ))
              ) : (
                <p className="text-center bg-text-description font-iranYekan rtl text-white rounded-xl w-full py-2">
                  برچسبی وجود ندارد
                </p>
              )}
            </div>

            {/* Share */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#e9eef7] bg-[#f9fbfe] px-5 py-4 sm:mt-12 lg:mt-16">
              {/* Share Title */}
              <h2 className="font-iranYekan text-sm font-bold text-text-services-about">
                اشتراک گذاری
              </h2>

              {/* Share Icons */}
              <div className="flex items-center gap-1">
                <Link
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${SITE_URL}/blogs/${blog.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="اشتراک‌گذاری در لینکدین"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[#6B7A99] transition-all duration-300 ease-out hover:bg-white hover:text-primary hover:shadow-[0_10px_22px_-14px_rgba(16,24,40,0.6)]"
                >
                  <LinkedInIcon size={20} />
                </Link>

                <Link
                  href={`https://t.me/share/url?url=${encodeURIComponent(`${SITE_URL}/blogs/${blog.slug}`)}&text=${encodeURIComponent(blog.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="اشتراک‌گذاری در تلگرام"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[#6B7A99] transition-all duration-300 ease-out hover:bg-white hover:text-primary hover:shadow-[0_10px_22px_-14px_rgba(16,24,40,0.6)]"
                >
                  <TelegramIcon size="20" />
                </Link>

                <Link
                  href={`https://www.instagram.com/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="اینستاگرام فراایده"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[#6B7A99] transition-all duration-300 ease-out hover:bg-white hover:text-primary hover:shadow-[0_10px_22px_-14px_rgba(16,24,40,0.6)]"
                >
                  <InstagramIcon size={21} />
                </Link>

                <Link
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${SITE_URL}/blogs/${blog.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="اشتراک‌گذاری در فیسبوک"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[#6B7A99] transition-all duration-300 ease-out hover:bg-white hover:text-primary hover:shadow-[0_10px_22px_-14px_rgba(16,24,40,0.6)]"
                >
                  <FacebookIcon size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default BlogDetailPage;
