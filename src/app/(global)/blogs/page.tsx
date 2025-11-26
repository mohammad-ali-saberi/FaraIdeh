// Components
import BlogsPageWrapper from '@/views/global/blogs/_blogspage';

// Actions
import { getBlogs } from '@/app/actions/getBlogs';

// Types
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'وبلاگ',
  description:
    'در بلاگ فراایده از تجربه‌های واقعی پروژه‌ها می‌نویسیم؛ نکته‌های عملی طراحی، محتوا و رشد محصول کوتاه، شفاف و قابل‌اجرا برای امروزِ کسب‌وکار شما.',
};

const BlogsPage = async () => {
  // Fetch initial blogs on server
  const blogsData = await getBlogs({ limit: 6 });
  const latestBlogsData = await getBlogs({ limit: 5 });

  return (
    <BlogsPageWrapper
      initialBlogs={blogsData.blogs}
      hasMore={blogsData.hasMore}
      latestBlogs={latestBlogsData.blogs}
    />
  );
};

export default BlogsPage;
