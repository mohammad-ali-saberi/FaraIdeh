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

interface IBlogSlideProps {
  blog: BlogPost;
}

const BlogSlide = ({ blog }: IBlogSlideProps) => {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <div className="w-full h-72 lg:h-96 rounded-2xl overflow-hidden relative">
        <Image
          src={blog.featuredImage || 'https://s6.uupload.ir/files/images_eusf.png'}
          alt={blog.title}
          fill
          className="absolute object-cover object-center -z-10"
        />

        <div className="bg-black/50 w-full h-72 lg:h-96">
          <div className="bg-white rounded-lg w-18 h-9 md:w-20 md:h-11 flex items-center justify-center absolute top-3 left-3">
            <p className="font-iranYekan font-semibold text-sm md:text-base">جدید</p>
          </div>

          <div className="absolute bottom-8 right-5 lg:bottom-10 lg:right-7 xl:bottom-12 xl:right-10 flex flex-col gap-2">
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <CategoryIcon size="20" className="text-white" />
                <p className="text-white font-iranYekan text-sm">{blog.category}</p>
              </div>

              <div className="flex items-center gap-2">
                <CalendarIcon size="21" className="text-white" />
                <p className="text-white font-yekanBakhFaNum text-sm pt-1">
                  {formatDate(blog.createdAt)}
                </p>
              </div>
            </div>

            <p className="text-white font-iranYekan font-extrabold text-2xl lg:text-3xl line-clamp-1 pl-4">
              {blog.title}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogSlide;
