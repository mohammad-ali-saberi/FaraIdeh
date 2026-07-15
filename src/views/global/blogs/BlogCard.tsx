'use client';

// Next Imports
import Image from 'next/image';
import Link from 'next/link';

// Components
import CalendarIcon from '@/components/icons/blogs/CalendarIcon';
import CategoryIcon from '@/components/icons/blogs/CategoryIcon';

// Types
import { BlogPost } from '@/types/BlogsType';

// Utils
import { formatDate } from '@/utils/formatDate';

interface IBlogCardsProps {
  blogs: BlogPost[];
}

const BlogCards = ({ blogs }: IBlogCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 lg:gap-y-10 w-full rtl mt-8 lg:mt-16">
      {blogs.map((blog) => (
        <Link
          key={blog.id}
          href={`/blogs/${blog.slug}`}
          className="hover:shadow-md hover:-translate-y-2 rounded-2xl pb-6 transition-all duration-200"
        >
          <div className="relative">
            {/* Image Blog */}
            <div className="relative w-full h-64">
              <Image
                src={
                  blog.featuredImage ||
                  'https://res.cloudinary.com/ye11utoz/image/upload/f_auto,q_auto/images_eusf_eshcob'
                }
                alt={blog.title}
                fill
                className="object-cover object-center rounded-2xl"
              />
            </div>

            {/* Description Blog */}
            <div className="px-5 mt-6">
              <div className="flex items-center gap-4">
                {/* Category */}
                <div className="flex items-center gap-1.5">
                  <CategoryIcon size="17" className="text-black" />
                  <p className="font-iranYekan text-sm">{blog.category}</p>
                </div>

                {/* Date */}
                <div className="flex items-center gap-1.5">
                  <CalendarIcon size="18" className="text-black" />
                  <p className="font-yekanBakhFaNum text-sm pt-1">{formatDate(blog.createdAt)}</p>
                </div>
              </div>

              {/* Reading Time */}
              {/* <div className="flex items-center gap-1 mt-2">
                <p className="font-iranYekan text-xs text-gray-500">زمان مطالعه:</p>
                <p className="font-yekanBakhFaNum text-xs text-gray-500">
                  {blog.readingTimeMinutes} دقیقه
                </p>
              </div> */}

              {/* Title */}
              <p className="font-iranYekan font-semibold text-xl lg:text-2xl mt-2 md:mt-3 line-clamp-1">
                {blog.title}
              </p>

              {/* Excerpt */}
              <p className="font-iranYekan text-[#505050] mt-2 md:mt-3 line-clamp-2 leading-7 text-justify">
                {blog.excerpt || 'خلاصه‌ای برای این مقاله موجود نیست.'}
              </p>

              {/* Author */}
              {/* <p className="font-iranYekan text-xs text-gray-400 mt-3">نویسنده: {blog.author}</p> */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogCards;
