// Next Imports
import Image from 'next/image';
import Link from 'next/link';

// Components
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';
import CalendarIcon from '@/components/icons/blogs/CalendarIcon';
import CategoryIcon from '@/components/icons/blogs/CategoryIcon';
import TimeIcon from '@/components/icons/blogs/TimeIcon';

// Types
import { BlogPost } from '@/types/BlogsType';

// Utils
import { formatDate } from '@/utils/formatDate';

interface IBlogSlideProps {
  blog: BlogPost;
}

const BlogSlide = ({ blog }: IBlogSlideProps) => {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group block rounded-[26px] focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
    >
      <div className="relative h-80 w-full overflow-hidden rounded-[26px] lg:h-[28rem]">
        <Image
          src={
            blog.featuredImage ||
            'https://res.cloudinary.com/ye11utoz/image/upload/f_auto,q_auto/images_eusf_eshcob'
          }
          alt={blog.title}
          fill
          sizes="100vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.92),rgba(0,0,0,0.55)_38%,transparent_72%)]" />

        {/* Hairline that follows the rounded corners */}
        <div className="pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-black/5" />

        {/* New badge */}
        <div className="absolute top-4 right-4 flex items-center gap-2 rounded-2xl border border-white/25 bg-white/15 px-3.5 py-1.5 backdrop-blur-md">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
          <span className="font-iranYekan text-xs font-bold text-white">جدید</span>
        </div>

        {/* Content */}
        <div className="rtl absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 lg:p-8">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-white/85">
              <div className="flex items-center gap-1.5">
                <CategoryIcon size="17" className="shrink-0" />
                <span className="font-iranYekan text-xs lg:text-sm">{blog.category}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <CalendarIcon size="19" className="shrink-0" />
                <span className="font-yekanBakhFaNum text-xs lg:text-sm">
                  {formatDate(blog.createdAt)}
                </span>
              </div>

              <div className="hidden items-center gap-1.5 sm:flex">
                <TimeIcon size="21" className="shrink-0" />
                <span className="font-yekanBakhFaNum text-xs lg:text-sm">
                  {blog.readingTimeMinutes} دقیقه
                </span>
              </div>
            </div>

            <h3 className="font-iranYekan mt-3 line-clamp-2 text-2xl font-extrabold text-white lg:text-4xl">
              {blog.title}
            </h3>

            {blog.excerpt && (
              <p className="font-iranYekan mt-2 line-clamp-2 max-w-2xl text-sm leading-7 font-medium text-white/70 lg:text-base">
                {blog.excerpt}
              </p>
            )}
          </div>

          {/* Arrow */}
          <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-white group-hover:text-[#16205f] lg:flex">
            <ArrowRightIcon
              className="rotate-[-135deg] transition-transform duration-500 ease-out group-hover:rotate-[-180deg]"
              size={22}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogSlide;
