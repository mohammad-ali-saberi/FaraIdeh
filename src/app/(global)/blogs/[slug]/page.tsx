// React Imports
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

// Next Imports
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Actions
import { getBlogBySlug, getRelatedBlogs } from '@/app/actions/getBlogs';
import { trackBlogView } from '@/app/actions/trackBlogViews';

// Components
import Container from '@/component/Container';
import Header from '@/component/Header';
import Footer from '@/component/Footer';
import CategoryIcon from '@/component/icons/blogs/CategoryIcon';
import CalendarIcon from '@/component/icons/blogs/CalendarIcon';
import TimeIcon from '@/component/icons/blogs/TimeIcon';
import InstagramIcon from '@/component/icons/InstagramIcon';
import TelegramIcon from '@/component/icons/TelegramIcon';
import LinkedInIcon from '@/component/icons/LinkedInIcon';
import FacebookIcon from '@/component/icons/FacebookIcon';
import EyeStrockIcon from '@/component/icons/blogs/EyeStrockIcon';

// Utils
import { formatDate } from '@/utils/formatDate';

interface IBlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

const BlogDetailPage = async ({ params }: IBlogDetailPageProps) => {
  const { slug: blogSlug } = await params;

  if (!blogSlug) {
    notFound();
  }

  const blog = await getBlogBySlug(blogSlug);

  if (!blog) {
    notFound();
  }

  // Track view
  await trackBlogView(blog.id);

  // Get related blogs
  const relatedBlogs = await getRelatedBlogs(blog.category, blog.slug, 3);

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
      <Header colorIcon="black" />

      <Container>
        <div className="xl:mt-52 mt-33 sm:mt-40 md:mt-42 lg:mt-44 flex flex-col xl:flex-row justify-between gap-x-14 rtl">
          {/* Content */}
          <div className="w-full">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl leading-11 lg:leading-normal xl:text-[47px] font-semibold font-iranYekan">
              {blog.title}
            </h1>

            {/* Desktop Detail */}
            <div className="hidden lg:flex mt-3 gap-8">
              {/* Category */}
              <div className="flex gap-2 items-center">
                <CategoryIcon className="text-black" />
                <p className="font-iranYekan">{blog.category}</p>
              </div>

              {/* Date */}
              <div className="flex gap-2 items-center">
                <CalendarIcon size="21" className="text-black" />
                <p className="font-iranYekan pt-0.5">{formatDate(blog.createdAt)}</p>
              </div>

              {/* Reading Time */}
              <div className="flex gap-2 items-center">
                <TimeIcon size="25" className="text-black" />
                <p className="font-iranYekan">
                  مطالعه <span className="font-yekanBakhFaNum">{blog.readingTimeMinutes}</span>{' '}
                  دقیقه
                </p>
              </div>

              {/* Views */}
              <div className="flex gap-2 items-center">
                <EyeStrockIcon size="25" className="text-black" />
                <p className="font-iranYekan">
                  <span className="font-yekanBakhFaNum">{blog.views}</span> بازدید
                </p>
              </div>

              {/* Author */}
              <div className="flex gap-3 items-center">
                <div className="rounded-full border-2 border-text-primary">
                  <Image
                    src="https://s6.uupload.ir/files/16_(2)_-_copy_ztvp.jpg"
                    alt="AuthorImage"
                    width={25}
                    height={25}
                    className="rounded-full object-cover object-center"
                  />
                </div>
                <p className="font-iranYekan">{blog.author}</p>
              </div>
            </div>

            {/* Mobile Detail */}
            <div className="flex mt-2 sm:mt-3 pb-3 gap-4 lg:hidden w-full max-sm:overflow-x-auto max-sm:[--webkit-overflow-scrolling:touch]">
              {/* Category */}
              <div className="flex gap-2 items-center">
                <CategoryIcon size="17" className="text-black" />
                <p className="font-iranYekan text-sm">{blog.category}</p>
              </div>

              {/* Date */}
              <div className="flex gap-2 items-center">
                <CalendarIcon size="20" className="text-black" />
                <p className="font-iranYekan pt-0.5 text-sm text-nowrap">
                  {formatDate(blog.createdAt)}
                </p>
              </div>

              {/* Reading Time */}
              <div className="flex gap-2 items-center">
                <TimeIcon size="20" className="text-black" />
                <p className="font-iranYekan text-sm text-nowrap">
                  مطالعه <span className="font-yekanBakhFaNum">{blog.readingTimeMinutes}</span>{' '}
                  دقیقه
                </p>
              </div>

              {/* Views */}
              <div className="flex gap-2 items-center">
                <EyeStrockIcon size="20" className="text-black" />
                <p className="font-iranYekan text-sm text-nowrap">
                  <span className="font-yekanBakhFaNum">{blog.views}</span> بازدید
                </p>
              </div>

              {/* Author */}
              <div className="flex gap-2 items-center">
                <div className="rounded-full border-2 border-text-primary w-[25px] h-[25px]">
                  <Image
                    src="https://s6.uupload.ir/files/16_(2)_-_copy_ztvp.jpg"
                    alt="AuthorImage"
                    width={25}
                    height={25}
                    className="rounded-full object-cover object-center"
                  />
                </div>
                <p className="font-iranYekan text-sm text-nowrap">{blog.author}</p>
              </div>
            </div>

            {/* Image */}
            <div className="w-full h-52 md:h-72 lg:h-115 overflow-hidden relative rounded-2xl lg:mt-6 mt-2 sm:mt-3">
              <Image
                src={blog.featuredImage || '/placeholder-blog.jpg'}
                alt="BlogImage"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Content */}
            <div className="mt-5 md:mt-6 lg:mt-9 font-iranYekan text-[#4C4C4C] text-justify leading-7 lg:leading-8 text-sm md:text-base prose prose-h2:text-2xl prose-h3:text-xl prose-p:leading-7 rtl">
              <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                {blog.content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Related Articles & Labels & Share */}
          <div className="w-full xl:w-3/5">
            {/* Related Articles Title */}
            <p className="font-iranYekan font-medium text-2xl mt-10 xl:mt-0">مقاله های مرتبط</p>

            {/* Related Articles */}
            <div className="lg:mt-8 mt-6 flex flex-col gap-y-5 lg:max-xl:grid lg:max-xl:grid-cols-2 lg:max-xl:gap-x-7 lg:max-xl:gap-y-3">
              {relatedBlogs.length > 0 ? (
                relatedBlogs.map((relatedBlog) => (
                  <Link key={relatedBlog.id} href={`/blogs/${relatedBlog.slug}`}>
                    <div className="flex items-center gap-x-5 rounded-xl pb-1.5 px-1.5 border-b-2 border-transparent hover:border-text-primary hover:-translate-y-1 transition-all duration-200">
                      {/* Image */}
                      <div className="relative w-full sm:w-3/4 h-38 sm:h-32 rounded-xl overflow-hidden">
                        <Image
                          src={relatedBlog.featuredImage || '/placeholder-blog.jpg'}
                          alt={relatedBlog.title}
                          fill
                          className="object-cover object-center"
                        />
                      </div>

                      {/* Detail */}
                      <div className="w-full mt-1.5">
                        {/* Category & Reading Time */}
                        <div className="w-full flex flex-col sm:flex-row gap-x-4 gap-y-2">
                          {/* Category */}
                          <div className="flex gap-2">
                            <CategoryIcon size="17" className="text-black" />
                            <p className="font-iranYekan text-sm">{relatedBlog.category}</p>
                          </div>

                          {/* Reading Time */}
                          <div className="flex gap-2 items-center">
                            <TimeIcon size="20" className="text-black" />
                            <p className="font-iranYekan text-sm">
                              مطالعه{' '}
                              <span className="font-yekanBakhFaNum">
                                {relatedBlog.readingTimeMinutes}
                              </span>{' '}
                              دقیقه
                            </p>
                          </div>
                        </div>

                        {/* Title */}
                        <p className="font-iranYekan line-clamp-1 font-semibold text-xl mt-4">
                          {relatedBlog.title}
                        </p>

                        {/* Excerpt */}
                        <p className="font-iranYekan text-[#4C4C4C] line-clamp-2 text-sm text-justify leading-6 mt-2 font-medium">
                          {relatedBlog.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-center bg-text-description font-iranYekan rtl text-white rounded-lg py-4 px-6">
                  در این دسته‌بندی مقاله دیگری نیست.
                </p>
              )}
            </div>

            {/* Labels Title */}
            <p className="font-iranYekan font-medium text-2xl mt-5 lg:mt-8 xl:mt-12">برچسب ها</p>

            {/* Labels */}
            <div className="flex flex-wrap gap-3 mt-3 lg:mt-5">
              {Array.isArray(labels) && labels.length > 0 ? (
                labels.map((label, index) => (
                  <div
                    key={index}
                    className="border-r-3 border-orange rounded-lg px-4 py-2 md:px-6 md:py-3 shadow-md text-sm md:text-base"
                  >
                    <span className="font-iranYekan">{label}</span>
                  </div>
                ))
              ) : (
                <p className="text-center bg-text-description font-iranYekan rtl text-white rounded w-full py-2">
                  برچسبی وجود ندارد
                </p>
              )}
            </div>

            {/* Share */}
            <div className="w-full flex flex-col items-center justify-center mt-10 sm:mt-12 lg:mt-16">
              {/* Share Title */}
              <p className="font-iranYekan font-medium text-lg">اشتراک گذاری</p>

              {/* Share Icons */}
              <div className="flex items-center mt-1">
                <Link
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${blog.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-3 hover:bg-[#EDEDED] hover:scale-110 transition-all duration-200"
                >
                  <LinkedInIcon className="text-[#383838]" size={23} />
                </Link>

                <Link
                  href={`https://t.me/share/url?url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${blog.slug}`)}&text=${encodeURIComponent(blog.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-3 hover:bg-[#EDEDED] hover:scale-110 transition-all duration-200"
                >
                  <TelegramIcon className="text-[#383838]" width={24} height={24} />
                </Link>

                <Link
                  href={`https://www.instagram.com/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-3 hover:bg-[#EDEDED] hover:scale-110 transition-all duration-200"
                >
                  <InstagramIcon className="text-[#383838]" size={25} />
                </Link>

                <Link
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${blog.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-3 hover:bg-[#EDEDED] hover:scale-110 transition-all duration-200"
                >
                  <FacebookIcon className="text-[#383838]" size={29} />
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

// Generate metadata for SEO
export async function generateMetadata({ params }: IBlogDetailPageProps) {
  const { slug: blogSlug } = await params;

  if (!blogSlug) {
    return { title: 'مقاله یافت نشد' };
  }

  const blog = await getBlogBySlug(blogSlug);
  if (!blog) {
    return { title: 'مقاله یافت نشد' };
  }

  return {
    title: blog.title,
    description: blog.excerpt || blog.title,
    openGraph: {
      title: blog.title,
      description: blog.excerpt || blog.title,
      images: blog.featuredImage ? [blog.featuredImage] : [],
    },
  };
}
