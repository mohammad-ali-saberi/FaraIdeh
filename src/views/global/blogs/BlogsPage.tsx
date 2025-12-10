'use client';

// React Imports
import { useState } from 'react';

// Components
import HeroSection from './HeroSection';
import Blogs from './Blogs';
import Footer from '@/component/Footer';

// Types
import { BlogPost } from '@/types/BlogsType';

interface IBlogsPageWrapperProps {
  initialBlogs: BlogPost[];
  hasMore: boolean;
  latestBlogs: BlogPost[];
}

const BlogsPageWrapper = ({ initialBlogs, hasMore, latestBlogs }: IBlogsPageWrapperProps) => {
  const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs);

  return (
    <>
      <HeroSection latestBlogs={latestBlogs} />
      <Blogs blogs={blogs} setBlogs={setBlogs} hasMore={hasMore} />
      <Footer />
    </>
  );
};

export default BlogsPageWrapper;
