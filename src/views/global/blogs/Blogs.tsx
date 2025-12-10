'use client';

// React Imports
import { useEffect, useRef, useState } from 'react';

// Components
import Container from '@/component/Container';
import HomeStoryDecoration from '@/component/icons/SVG/HomeStoryDecoration';
import LargeLabel from '@/component/LargeLabel';
import SmallLabel from '@/component/SmallLabel';
import BlogCard from './BlogCard';

// Types
import { BlogPost } from '@/types/BlogsType';

// Actions
import { getBlogs } from '@/app/actions/getBlogs';

interface IBlogsProps {
  blogs: BlogPost[];
  setBlogs: (blogs: BlogPost[]) => void;
  hasMore: boolean;
}

const Blogs = ({ blogs, setBlogs, hasMore: initialHasMore }: IBlogsProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [page, setPage] = useState(0);
  const observerTarget = useRef<HTMLDivElement>(null);

  // Infinite scroll with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      { threshold: 0.1 },
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasMore, isLoading]);

  // Load more blogs
  const loadMore = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    const nextPage = page + 1;
    const result = await getBlogs({
      limit: 6,
      skip: nextPage * 6,
    });

    setBlogs([...blogs, ...result.blogs]);
    setHasMore(result.hasMore);
    setPage(nextPage);
    setIsLoading(false);
  };

  return (
    <Container>
      <div className="relative w-full flex flex-col items-center justify-center mt-10 sm:mt-16 md:mt-20">
        <SmallLabel title="BLOGS" color="#3361FF" bgColor="#EBF0FF" />
        <LargeLabel label="BLOGS" subLabel="آخرین مقالات" />

        <p className="text-text-description text-center font-iranYekan leading-5 sm:leading-8 px-4 sm:px-12 md:px-24 lg:px-48 xl:px-96 rtl mt-2 font-light sm:font-medium lg:-mt-8 text-xs sm:text-base">
          در بلاگ فراایده از تجربه‌های واقعی پروژه‌ها می‌نویسیم؛ نکته‌های عملی طراحی، محتوا و رشد
          محصول <br /> کوتاه، شفاف و قابل‌اجرا برای امروزِ کسب‌وکار شما.
        </p>

        {/* Blog Cards */}
        {blogs.length === 0 && !isLoading ? (
          <div className="w-full flex items-center justify-center mt-8 lg:mt-16">
            <p className="text-center bg-text-description font-iranYekan rtl text-white py-3 px-5 lg:px-0 rounded w-3/4">
              مقاله‌ای یافت نشد
            </p>
          </div>
        ) : (
          <>
            <BlogCard blogs={blogs} />

            {/* Infinite Scroll Trigger */}
            {hasMore && (
              <div ref={observerTarget} className="w-full flex items-center justify-center py-10">
                {isLoading && (
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
                )}
              </div>
            )}
          </>
        )}

        <div className="hidden xl:block absolute top-0 right-0 xl:right-52 2xl:right-90 scale-50 lg:scale-100 origin-top-right">
          <HomeStoryDecoration width="124" height="104" />
        </div>
      </div>
    </Container>
  );
};

export default Blogs;
