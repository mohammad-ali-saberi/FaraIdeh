'use client';

// React Imports
import { useState } from 'react';

// Next Imports
import Image from 'next/image';
import Link from 'next/link';

// Components
import CloseCircleIcon from '@/component/icons/blogs/CloseCircleIcon';
import EditIcon from '@/component/icons/blogs/EditIcon';
import EyeStrockIcon from '@/component/icons/blogs/EyeStrockIcon';
import InformationIcon from '@/component/icons/blogs/InformationIcon';
import UnlockIcon from '@/component/icons/blogs/UnlockIcon';
import LockIcon from '@/component/icons/blogs/LockIcon';
import TickCircleIcon from '@/component/icons/blogs/TickCircleIcon';
import Modal from '@/component/Modal';
import BlogInfoModalContent from '@/component/dashboard/BlogInfoModalContent';
import PlusIcon from '@/component/icons/blogs/PlusIcon';

// Types
import { AdminBlog } from '@/types/AdminBlogType';

// Actions
import { toggleBlogPublish } from '@/app/actions/toggleBlogPublish';

interface BlogsListProps {
  blogs: AdminBlog[];
}

const BlogsList = ({ blogs }: BlogsListProps) => {
  const [selectedBlog, setSelectedBlog] = useState<AdminBlog | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blogList, setBlogList] = useState<AdminBlog[]>(blogs);
  const [loading, setLoading] = useState(false);

  const openBlogInfo = (blog: AdminBlog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const handleTogglePublish = async (blog: AdminBlog) => {
    setLoading(true);
    try {
      const result = await toggleBlogPublish(blog.id, blog.published);
      if (result.success) {
        // Update local state
        setBlogList(
          blogList.map((b) => (b.id === blog.id ? { ...b, published: !b.published } : b)),
        );
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="px-12 mt-12 relative">
        <div className="h-176 overflow-y-scroll grid grid-cols-3 gap-y-9 gap-x-12 pb-2">
          {blogs.length === 0 ? (
            <div className="col-span-3 flex flex-col items-center justify-center h-full">
              <Image
                src="https://s6.uupload.ir/files/image_8_mict-removebg-preview_kxug.png"
                alt="EmptyImage"
                width={300}
                height={300}
              />
              <p className="font-iranYekan text-[#BCBCBC] text-xl">هیچ وبلاگی ایجاد نشده است!</p>
            </div>
          ) : (
            blogList.map((blog) => (
              <div key={blog.id} className="bg-white shadow rounded-xl h-130 relative">
                {/* Image & Views & Published Blogs */}
                <div className="relative w-full h-72 overflow-hidden rounded-t-xl">
                  {/* Image */}
                  {blog.featuredImage ? (
                    <Image
                      src={blog.featuredImage}
                      alt={blog.title}
                      fill
                      className="object-center object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 font-iranYekan">بدون تصویر</span>
                    </div>
                  )}

                  {/* Views */}
                  <div className="flex gap-2 rounded-lg bg-black/50 absolute top-5 right-5 z-20 px-4 py-2.5">
                    <EyeStrockIcon size="24" className="text-white" />
                    <span className="font-yekanBakhFaNum text-white font-medium">{blog.views}</span>
                  </div>

                  {/* Published Status */}
                  <div className="flex gap-2 rounded-lg bg-black/50 absolute top-5 right-30 z-20 px-3.5 py-2.5">
                    {blog.published ? (
                      <>
                        <UnlockIcon size="20" className="text-white" />
                        <span className="font-yekanBakhFaNum text-white">فعال</span>
                      </>
                    ) : (
                      <>
                        <LockIcon size="20" className="text-white" />
                        <span className="font-yekanBakhFaNum text-white">غیر فعال</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Detail */}
                <div className="px-8 pt-7">
                  {/* Title */}
                  <p className="text-[#6B7A99] font-iranYekan font-extrabold text-2xl line-clamp-1">
                    {blog.title}
                  </p>

                  {/* Excerpt */}
                  <p className="line-clamp-2 text-[#ADB8CC] font-iranYekan leading-8 mt-3">
                    {blog.excerpt}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-3 gap-5 px-8 absolute bottom-7 w-full">
                  {/* Publish/Unpublish Button */}
                  <button
                    onClick={() => handleTogglePublish(blog)}
                    disabled={loading}
                    className="text-primary font-iranYekan border border-primary outline-none rounded-md flex items-center justify-center gap-2 py-2.5 group hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer"
                  >
                    {blog.published ? (
                      <>
                        <CloseCircleIcon
                          size="22"
                          className="text-primary group-hover:text-white transition-all duration-200"
                        />
                        غیر فعال
                      </>
                    ) : (
                      <>
                        <TickCircleIcon
                          size="22"
                          className="text-primary group-hover:text-white transition-all duration-200"
                        />
                        فعال
                      </>
                    )}
                  </button>

                  {/* Edit Button */}
                  <Link
                    href={`/admin/blogs/edit/${blog.slug}`}
                    className="text-primary font-iranYekan border border-primary rounded-md flex items-center justify-center gap-2 py-2.5 group hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    <EditIcon
                      size="22"
                      className="text-primary group-hover:text-white transition-all duration-200"
                    />
                    ویرایش
                  </Link>

                  {/* Information Button */}
                  <button
                    onClick={() => openBlogInfo(blog)}
                    className="text-primary font-iranYekan border border-primary outline-none rounded-md flex items-center justify-center gap-2 py-2.5 group hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer"
                  >
                    <InformationIcon
                      size="24"
                      className="text-primary group-hover:text-white transition-all duration-200"
                    />
                    اطلاعات
                  </button>
                </div>
              </div>
            ))
          )}

          {/* Add Button */}
          <div className="absolute bottom-0 right-5 z-10">
            <Link href="/admin/blogs/add">
              <div className="bg-primary rounded-full p-4 border-2 border-white group hover:bg-transparent hover:border-primary hover:-translate-y-1 transition-all duration-200">
                <PlusIcon
                  size="20"
                  className="text-white group-hover:text-primary transition-all duration-200"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Blog Info Modal */}
      {selectedBlog && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedBlog(null);
          }}
          title={`اطلاعات وبلاگ: ${selectedBlog.title}`}
          size="lg"
          actions={[
            {
              label: 'بستن',
              onClick: () => {
                setIsModalOpen(false);
                setSelectedBlog(null);
              },
              variant: 'secondary',
            },
          ]}
          linkButtons={[
            {
              label: 'مشاهده وبلاگ',
              link: `/blogs/${selectedBlog.slug}`,
              variant: 'primary',
            },
          ]}
        >
          <BlogInfoModalContent blog={selectedBlog} />
        </Modal>
      )}
    </>
  );
};

export default BlogsList;
