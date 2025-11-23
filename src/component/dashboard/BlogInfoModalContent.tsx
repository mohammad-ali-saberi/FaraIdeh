'use client';

// React Imports
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

// Next Imports
import Image from 'next/image';

// Utils
import { formatDate } from '@/utils/formatDate';

// Types
import { AdminBlog } from '@/types/AdminBlogType';

interface BlogInfoModalContentProps {
  blog: AdminBlog;
}

const BlogInfoModalContent = ({ blog }: BlogInfoModalContentProps) => {
  const labels = Array.isArray(blog.labels) ? blog.labels : [];

  return (
    <div className="rtl space-y-5">
      {/* Featured Image */}
      {blog.featuredImage && (
        <div className="relative w-full h-80 rounded-lg overflow-hidden">
          <Image src={blog.featuredImage} alt={blog.title} fill className="object-cover" />
        </div>
      )}

      {/* Title */}
      <div>
        <h3 className="font-iranYekan font-semibold text-gray-500 mb-2">عنوان</h3>
        <p className="font-iranYekan text-lg text-gray-800">{blog.title}</p>
      </div>

      {/* Slug */}
      <div>
        <h3 className="font-iranYekan font-semibold text-gray-500 mb-2">Slug</h3>
        <p className="font-semibold text-gray-600 break-all">{blog.slug}</p>
      </div>

      {/* Excerpt */}
      {blog.excerpt && (
        <div>
          <h3 className="font-iranYekan font-semibold text-gray-500 mb-2">خلاصه</h3>
          <p className="font-iranYekan text-gray-700 leading-7">{blog.excerpt}</p>
        </div>
      )}

      {/* Author & Category & Views */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="font-iranYekan text-xs text-gray-500 mb-1">نویسنده</p>
          <p className="font-iranYekan font-semibold text-gray-800">{blog.author}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="font-iranYekan text-xs text-gray-500 mb-1">دسته‌بندی</p>
          <p className="font-iranYekan font-semibold text-gray-800">{blog.category}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="font-iranYekan text-xs text-gray-500 mb-1">بازدید</p>
          <p className="font-yekanBakhFaNum font-semibold text-gray-800">{blog.views}</p>
        </div>
      </div>

      {/* Reading Time & Status */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="font-iranYekan text-xs text-gray-500 mb-1">مدت زمان خواندن</p>
          <p className="font-yekanBakhFaNum font-semibold text-gray-800">
            {blog.readingTimeMinutes} دقیقه
          </p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="font-iranYekan text-xs text-gray-500 mb-1">وضعیت</p>
          <p
            className={`font-iranYekan font-semibold ${
              blog.published ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {blog.published ? 'منتشر شده' : 'منتشر نشده'}
          </p>
        </div>
      </div>

      {/* Dates */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="font-iranYekan text-xs text-gray-500 mb-1">تاریخ ایجاد</p>
          <p className="font-yekanBakhFaNum text-sm text-gray-800">
            {formatDate(new Date(blog.createdAt))}
          </p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="font-iranYekan text-xs text-gray-500 mb-1">آخرین ویرایش</p>
          <p className="font-yekanBakhFaNum text-sm text-gray-800">
            {formatDate(new Date(blog.updatedAt))}
          </p>
        </div>
      </div>

      {/* Labels */}
      {labels.length > 0 && (
        <div>
          <h3 className="font-iranYekan font-semibold text-gray-500 mb-3">برچسب‌ها</h3>
          <div className="flex flex-wrap gap-2">
            {labels.map((label, index) => (
              <span
                key={index}
                className="bg-orange/10 text-orange px-3 py-1 rounded-full font-iranYekan text-sm"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Content Preview */}
      <div>
        <h3 className="font-iranYekan font-semibold text-gray-500 mb-2">پیش‌نمایش متن</h3>
        <div className="bg-gray-50 p-4 rounded-lg max-h-48 overflow-y-auto font-iranYekan text-gray-700 leading-7 text-sm whitespace-pre-wrap">
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
            {`${blog.content.substring(0, 300)}...`}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default BlogInfoModalContent;
