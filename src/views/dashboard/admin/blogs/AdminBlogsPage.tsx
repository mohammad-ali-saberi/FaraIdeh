'use client';

// Components
import Footer from '@/components/dashboard/Footer';
import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';
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
