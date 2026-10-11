// Next Imports
import Image from 'next/image';
import Link from 'next/link';

// Components
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';
import CalendarIcon from '@/components/icons/blogs/CalendarIcon';
import TimeIcon from '@/components/icons/blogs/TimeIcon';

// Types
import { BlogPost } from '@/types/BlogsType';

// Utils
import { formatDate } from '@/utils/formatDate';

interface IBlogCardsProps {
  blogs: BlogPost[];
}

const BlogCards = ({ blogs }: IBlogCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 lg:gap-y-12 w-full rtl mt-8 lg:mt-16">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="group relative h-full rounded-[26px] border border-[#e9eef7] bg-white p-3 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_14px_34px_-20px_rgba(16,24,40,0.25)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_1px_2px_rgba(16,24,40,0.04),0_30px_55px_-26px_rgba(10,47,182,0.45)]"
        >
          <Link
            href={`/blogs/${blog.slug}`}
            className="flex h-full flex-col rounded-[22px] focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
          >
            {/* Cover */}
            <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-[18px]">
              <Image
                src={
                  blog.featuredImage ||
                  'https://res.cloudinary.com/ye11utoz/image/upload/f_auto,q_auto/images_eusf_eshcob'
                }
                alt={blog.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />

              {/* Hairline that follows the rounded corners */}
              <div className="pointer-events-none absolute inset-0 rounded-[18px] ring-1 ring-black/5" />

              {/* Category */}
              <div className="absolute top-3 right-3 flex items-center rounded-2xl border border-white/50 bg-white/40 px-3.5 py-1.5 shadow-[0_8px_20px_-10px_rgba(16,24,40,0.55),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-lg backdrop-saturate-150">
                <span className="font-iranYekan text-xs font-bold text-[#16205f]">
                  {blog.category}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col px-2 pt-5 pb-7">
              <h3 className="font-iranYekan line-clamp-2 text-lg font-extrabold text-[#16205f] transition-colors duration-300 group-hover:text-primary sm:text-xl">
                {blog.title}
              </h3>

              <p className="font-iranYekan mt-2 line-clamp-2 text-sm leading-7 font-medium text-[#7d8fb3]">
                {blog.excerpt || 'خلاصه‌ای برای این مقاله موجود نیست.'}
              </p>

              <div className="mt-3 flex items-center justify-between gap-3 border-t border-dashed border-[#e6ecf5] pt-4">
                <div className="flex items-center gap-1.5 text-[#adb8cc]">
                  <CalendarIcon size="18" className="shrink-0" />
                  <span className="font-yekanBakhFaNum text-xs">{formatDate(blog.createdAt)}</span>
                </div>

                <div className="flex items-center gap-1.5 text-[#adb8cc]">
                  <TimeIcon size="18" className="shrink-0" />
                  <span className="font-yekanBakhFaNum text-xs">
                    {blog.readingTimeMinutes} دقیقه
                  </span>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="absolute -bottom-7 left-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white ring-4 ring-white transition-all duration-500 ease-out group-hover:scale-110">
              <ArrowRightIcon
                className="rotate-[-135deg] transition-transform duration-500 ease-out group-hover:rotate-[-180deg]"
                size={22}
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;
