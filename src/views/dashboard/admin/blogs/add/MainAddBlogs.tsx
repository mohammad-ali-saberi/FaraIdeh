'use client';

// React Imports
import { useMemo, useState } from 'react';

// Components
import Input from '@/component/Input';
import PlusIcon from '@/component/icons/blogs/PlusIcon';
import ContentEditor from '@/component/ContentEditor';

// Utils
import { formatDate } from '@/utils/formatDate';

interface IBlogFormData {
  imageLink: string;
  category: string;
  readingTime: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  labels: string[];
  content: string;
}

const MainAddBlogs = () => {
  const [labels, setLabels] = useState<string[]>(['']);
  const [formData, setFormData] = useState<IBlogFormData>({
    imageLink: '',
    category: '',
    readingTime: '',
    title: '',
    slug: '',
    excerpt: '',
    author: '',
    labels: [''],
    content: '',
  });

  const todayDate = useMemo(() => formatDate(new Date()), []);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // فیلتر کردن برچسب‌های خالی
    const filteredLabels = labels.filter((label) => label.trim() !== '');

    const blogData = {
      ...formData,
      labels: filteredLabels,
    };

    console.log('Blog Data:', blogData);

    // اینجا می‌توانید درخواست API را بفرستید
    // try {
    //   const response = await createBlog(blogData);
    //   console.log('Blog created:', response);
    // } catch (error) {
    //   console.error('Error creating blog:', error);
    // }
  };

  return (
    <div className="px-12 mt-12 pb-5 h-176 overflow-y-scroll">
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 rtl w-full gap-x-14 gap-y-8"
      >
        {/* Image Link */}
        <Input
          type="text"
          name="image-link"
          id="image-link"
          placeholder=" "
          required={true}
          label="لینک عکس"
          htmlFor="image-link"
          value={formData.imageLink}
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
          name="Reading-time"
          id="Reading-time"
          placeholder=" "
          required={true}
          label="زمان مطالعه"
          htmlFor="Reading-time"
          value={formData.readingTime}
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
          label="Slug"
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
          label={todayDate}
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
            label={`برچسب`}
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
        <div className="col-span-2 flex justify-center">
          <button
            type="submit"
            className="px-8 py-4 bg-orange font-iranYekan outline-none text-lg text-white rounded-lg cursor-pointer border-b-4 border-[#a33f00] hover:border-transparent hover:translate-y-1 transition-all duration-200"
          >
            ثبت اطلاعات
          </button>
        </div>
      </form>
    </div>
  );
};

export default MainAddBlogs;
