'use client';

// React Imports
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

// Components
import Input from '@/component/Input';
import PlusIcon from '@/component/icons/blogs/PlusIcon';
import ContentEditor from '@/component/ContentEditor';
import Toast from '@/component/Toast';

// Utils
import { formatDate } from '@/utils/formatDate';

// Types
import { BlogPostWithLabels, UpdateBlogInput, UpdateBlogResponse } from '@/types/BlogsType';

interface IBlogFormData {
  featuredImage: string;
  category: string;
  readingTimeMinutes: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  content: string;
}

interface EditBlogFormProps {
  blog: BlogPostWithLabels;
  updateBlogAction: (data: UpdateBlogInput) => Promise<UpdateBlogResponse>;
}

const EditBlogForm = ({ blog, updateBlogAction }: EditBlogFormProps) => {
  const router = useRouter();
  const [labels, setLabels] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'error';
  }>({
    show: false,
    message: '',
    type: 'success',
  });

  const [formData, setFormData] = useState<IBlogFormData>({
    featuredImage: '',
    category: '',
    readingTimeMinutes: '',
    title: '',
    slug: '',
    excerpt: '',
    author: '',
    content: '',
  });

  const createdDate = useMemo(() => formatDate(blog.createdAt), [blog.createdAt]);

  // Initialize form with blog data
  useEffect(() => {
    setFormData({
      featuredImage: blog.featuredImage || '',
      category: blog.category,
      readingTimeMinutes: blog.readingTimeMinutes.toString(),
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.excerpt || '',
      author: blog.author,
      content: blog.content,
    });

    // Set labels (ensure at least one empty field)
    setLabels(blog.labels.length > 0 ? blog.labels : ['']);
  }, [blog]);

  const handleAddLabel = () => {
    setLabels([...labels, '']);
  };

  const handleChangeLabel = (value: string, index: number) => {
    const updated = [...labels];
    updated[index] = value;
    setLabels(updated);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContentChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      content: value,
    }));
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type });
  };

  const handleCloseToast = () => {
    setToast({ show: false, message: '', type: 'success' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Filter empty labels
      const filteredLabels = labels.filter((label) => label.trim() !== '');

      // Validation
      if (!formData.content.trim()) {
        showToast('لطفاً محتوای بلاگ را وارد کنید', 'error');
        setIsSubmitting(false);
        return;
      }

      if (filteredLabels.length === 0) {
        showToast('لطفاً حداقل یک برچسب وارد کنید', 'error');
        setIsSubmitting(false);
        return;
      }

      const blogData: UpdateBlogInput = {
        id: blog.id,
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt,
        content: formData.content,
        category: formData.category,
        author: formData.author,
        featuredImage: formData.featuredImage,
        readingTimeMinutes: parseInt(formData.readingTimeMinutes),
        labels: filteredLabels,
      };

      // Send to server
      const result = await updateBlogAction(blogData);

      if (result.success) {
        showToast(result.message, 'success');

        // Redirect to blogs list after 1.5 seconds
        setTimeout(() => {
          router.push('/admin/blogs');
        }, 1500);
      } else {
        showToast(result.message, 'error');
      }
    } catch (error) {
      console.error('Error updating blog:', error);
      showToast('خطایی غیرمنتظره رخ داد. لطفاً دوباره تلاش کنید.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {toast.show && <Toast message={toast.message} type={toast.type} onClose={handleCloseToast} />}

      <div className="px-12 mt-7 py-5 h-181 overflow-y-scroll">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 rtl w-full gap-x-14 gap-y-8"
        >
          {/* Featured Image */}
          <Input
            type="text"
            name="featuredImage"
            id="featured-image"
            placeholder=" "
            required={true}
            label="لینک عکس"
            htmlFor="featured-image"
            value={formData.featuredImage}
            onChange={handleInputChange}
          />

          {/* Category */}
          <Input
            type="text"
            name="category"
            id="category"
            placeholder=" "
            required={true}
            label="دسته بندی"
            htmlFor="category"
            value={formData.category}
            onChange={handleInputChange}
          />

          {/* Reading Time */}
          <Input
            type="number"
            name="readingTimeMinutes"
            id="reading-time"
            placeholder=" "
            required={true}
            label="زمان مطالعه (دقیقه)"
            htmlFor="reading-time"
            value={formData.readingTimeMinutes}
            onChange={handleInputChange}
          />

          {/* Title */}
          <Input
            type="text"
            name="title"
            id="title"
            placeholder=" "
            required={true}
            label="عنوان"
            htmlFor="title"
            value={formData.title}
            onChange={handleInputChange}
          />

          {/* Slug */}
          <Input
            type="text"
            name="slug"
            id="slug"
            placeholder=" "
            required={true}
            label="Slug (آدرس یکتا)"
            htmlFor="slug"
            value={formData.slug}
            onChange={handleInputChange}
          />

          {/* Excerpt */}
          <Input
            type="text"
            name="excerpt"
            id="excerpt"
            placeholder=" "
            required={true}
            label="خلاصه (توضیح کوتاه)"
            htmlFor="excerpt"
            value={formData.excerpt}
            onChange={handleInputChange}
          />

          {/* Author */}
          <Input
            type="text"
            name="author"
            id="author"
            placeholder=" "
            required={true}
            label="نویسنده"
            htmlFor="author"
            value={formData.author}
            onChange={handleInputChange}
          />

          {/* Date */}
          <Input
            type="text"
            name="date"
            id="date"
            placeholder=" "
            label={`تاریخ ایجاد: ${createdDate}`}
            htmlFor="date"
            disabled={true}
          />

          {/* Labels */}
          {labels.map((label, index) => (
            <Input
              key={index}
              type="text"
              name={`label-${index}`}
              id={`label-${index}`}
              placeholder=" "
              label={`برچسب ${index + 1}`}
              htmlFor={`label-${index}`}
              value={label}
              onChange={(e) => handleChangeLabel(e.target.value, index)}
            />
          ))}

          {/* Add Labels Input Button */}
          <button
            type="button"
            onClick={handleAddLabel}
            className="w-16 h-16 flex items-center outline-none justify-center bg-white shadow-md shadow-[#EDEFF1] rounded-lg cursor-pointer border-2 border-transparent hover:border-[#7D8FB3] hover:bg-transparent transition-all duration-200"
          >
            <PlusIcon size="20" className="text-[#7D8FB3]" />
          </button>

          {/* Content */}
          <div className="col-span-2">
            <ContentEditor value={formData.content} onChange={handleContentChange} height={450} />
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center gap-4">
            <button
              type="button"
              onClick={() => router.push('/admin/blogs')}
              className="px-8 py-4 bg-gray-400 font-iranYekan outline-none text-lg text-white rounded-lg cursor-pointer border-b-4 border-gray-600 hover:border-transparent hover:translate-y-1 transition-all duration-200"
              disabled={isSubmitting}
            >
              انصراف
            </button>

            <button
              type="submit"
              className="px-8 py-4 bg-orange font-iranYekan outline-none text-lg text-white rounded-lg cursor-pointer border-b-4 border-[#a33f00] hover:border-transparent hover:translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'در حال به‌روزرسانی...' : 'به‌روزرسانی اطلاعات'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditBlogForm;
