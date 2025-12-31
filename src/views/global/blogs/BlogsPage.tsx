'use client';

// React Imports
import { useState } from 'react';

// Components
import Footer from '@/components/Footer';
import Blogs from './Blogs';
import HeroSection from './HeroSection';

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
