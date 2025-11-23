'use client';

// Components
import Sidebar from '@/component/dashboard/Sidebar';
import Header from '@/component/dashboard/Header';
import Footer from '@/component/dashboard/Footer';
import MainBlogs from './MainBlogs';

// Types
import { AdminBlog } from '@/types/AdminBlogType';

interface BlogsPageWrapperProps {
  blogs: AdminBlog[];
}

const BlogsPageWrapper = ({ blogs }: BlogsPageWrapperProps) => {
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-10 bg-[#F6F7FB] rtl">
        <Header />
        <MainBlogs blogs={blogs} />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default BlogsPageWrapper;
