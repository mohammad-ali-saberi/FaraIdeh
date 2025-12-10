'use client';

// Components
import Sidebar from '@/component/dashboard/Sidebar';
import Header from '@/component/dashboard/Header';
import Footer from '@/component/dashboard/Footer';
import BlogsList from './BlogsList';

// Types
import { AdminBlog } from '@/types/AdminBlogType';

interface AdminBlogsPageWrapperProps {
  blogs: AdminBlog[];
}

const AdminBlogsPageWrapper = ({ blogs }: AdminBlogsPageWrapperProps) => {
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-10 bg-[#F6F7FB] rtl">
        <Header />
        <BlogsList blogs={blogs} />
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

export default AdminBlogsPageWrapper;
