'use client';

// React Imports
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

// Components
import PlusIcon from '@/components/icons/blogs/PlusIcon';
import Input from '@/components/Input';
import Toast from '@/components/Toast';

// Utils
import { formatDate } from '@/utils/formatDate';

// Constants
import { categoryLabels, PROJECT_CATEGORIES } from '@/features/projects/categories';

// Types
import { AdminProject, UpdateProjectInput, UpdateProjectResponse } from '@/types/ProjectsType';

interface IProjectFormData {
  name: string;
  description: string;
  year: string;
  category: string;
  projectLink: string;
  requesterName: string;
}

interface EditProjectFormProps {
  project: AdminProject;
  updateProjectAction: (data: UpdateProjectInput) => Promise<UpdateProjectResponse>;
}

const EditProjectForm = ({ project, updateProjectAction }: EditProjectFormProps) => {
  const router = useRouter();
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [photos, setPhotos] = useState<string[]>([]);
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

  const [formData, setFormData] = useState<IProjectFormData>({
    name: '',
    description: '',
    year: '',
    category: '',
    projectLink: '',
    requesterName: '',
  });

  const createdDate = useMemo(() => formatDate(project.createdAt), [project.createdAt]);

  // Initialize form with project data
  useEffect(() => {
    setFormData({
      name: project.name,
      description: project.description,
      year: project.year.toString(),
      category: project.category,
      projectLink: project.projectLink || '',
      requesterName: project.requesterName || '',
    });

    // Set technologies (ensure at least one empty field)
    setTechnologies(project.technologies.length > 0 ? project.technologies : ['']);

    // Set photos (ensure at least one empty field)
    setPhotos(project.photos.length > 0 ? project.photos : ['']);
  }, [project]);

  const handleAddTechnology = () => {
    setTechnologies([...technologies, '']);
  };

  const handleChangeTechnology = (value: string, index: number) => {
    const updated = [...technologies];
    updated[index] = value;
    setTechnologies(updated);
  };

  const handleAddPhoto = () => {
    setPhotos([...photos, '']);
  };

  const handleChangePhoto = (value: string, index: number) => {
    const updated = [...photos];
    updated[index] = value;
    setPhotos(updated);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
      // Filter empty technologies and photos
      const filteredTechnologies = technologies.filter((tech) => tech.trim() !== '');
      const filteredPhotos = photos.filter((photo) => photo.trim() !== '');

      // Validation
      if (!formData.name.trim()) {
        showToast('لطفاً نام پروژه را وارد کنید', 'error');
        setIsSubmitting(false);
        return;
      }

      if (!formData.description.trim()) {
        showToast('لطفاً توضیحات پروژه را وارد کنید', 'error');
        setIsSubmitting(false);
        return;
      }

      if (!formData.category) {
        showToast('لطفاً دسته‌بندی را انتخاب کنید', 'error');
        setIsSubmitting(false);
        return;
      }

      if (filteredTechnologies.length === 0) {
        showToast('لطفاً حداقل یک تکنولوژی وارد کنید', 'error');
        setIsSubmitting(false);
        return;
      }

      if (filteredPhotos.length === 0) {
        showToast('لطفاً حداقل یک عکس وارد کنید', 'error');
        setIsSubmitting(false);
        return;
      }

      const projectData: UpdateProjectInput = {
        id: project.id,
        name: formData.name,
        description: formData.description,
        year: parseInt(formData.year),
        category: formData.category,
        projectLink: formData.projectLink.trim() || null,
        requesterName: formData.requesterName.trim() || null,
        technologies: filteredTechnologies,
        photos: filteredPhotos,
      };

      // Send to server
      const result = await updateProjectAction(projectData);

      if (result.success) {
        showToast(result.message, 'success');

        // Redirect to projects list after 1 seconds
        setTimeout(() => {
          router.push('/admin/projects');
        }, 1000);
      } else {
        showToast(result.message, 'error');
      }
    } catch (error) {
      console.error('Error updating project:', error);
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
          {/* Photos */}
          {photos.map((photo, index) => (
            <Input
              key={index}
              type="text"
              name={`photo-${index}`}
              id={`photo-${index}`}
              placeholder=" "
              label={`لینک عکس ${index + 1}`}
              htmlFor={`photo-${index}`}
              value={photo}
              onChange={(e) => handleChangePhoto(e.target.value, index)}
            />
          ))}

          {/* Add Photo Input Button */}
          <button
            type="button"
            onClick={handleAddPhoto}
            className="w-16 h-16 flex items-center outline-none justify-center bg-white shadow-md shadow-[#EDEFF1] rounded-lg cursor-pointer border-2 border-transparent hover:border-[#7D8FB3] hover:bg-transparent transition-all duration-200"
          >
            <PlusIcon size="20" className="text-[#7D8FB3]" />
          </button>

          {/* Project Name */}
          <Input
            type="text"
            name="name"
            id="name"
            placeholder=" "
            required={true}
            label="نام پروژه"
            htmlFor="name"
            value={formData.name}
            onChange={handleInputChange}
          />

          {/* Year */}
          <Input
            type="number"
            name="year"
            id="year"
            placeholder=" "
            required={true}
            label="سال انتشار"
            htmlFor="year"
            value={formData.year}
            onChange={handleInputChange}
          />

          {/* Category */}
          <div className="flex items-start pr-3 w-full bg-white rounded-lg shadow-md shadow-[#EDEFF1] transition ring-0 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-white focus-within:shadow-lg relative">
            <div className="relative w-full">
              <select
                className="peer text-text-description font-iranYekan outline-none bg-transparent w-full p-3 pt-5 cursor-pointer appearance-none"
                name="category"
                id="category"
                required
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="" disabled className="text-gray-400">
                  انتخاب کنید
                </option>
                {Object.entries(PROJECT_CATEGORIES)
                  .filter(([key]) => key !== 'all')
                  .map(([key, value]) => (
                    <option key={key} value={value} className="text-gray-700 font-iranYekan py-2">
                      {categoryLabels[value]}
                    </option>
                  ))}
              </select>

              {/* Custom Dropdown Arrow */}
              <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-[#7D8FB3] transition-transform peer-focus:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              <label
                htmlFor="category"
                className="absolute right-0 px-2 rounded py-1 bg-white pointer-events-none transition-all duration-200 ease-out text-text-description top-0 -translate-y-1/2 text-xs font-iranYekan"
              >
                دسته بندی
              </label>
            </div>
          </div>

          {/* Project Link */}
          <Input
            type="text"
            name="projectLink"
            id="projectLink"
            placeholder=" "
            label="لینک پروژه (اختیاری)"
            htmlFor="projectLink"
            value={formData.projectLink}
            onChange={handleInputChange}
          />

          {/* Requester Name */}
          <Input
            type="text"
            name="requesterName"
            id="requesterName"
            placeholder=" "
            label="نام درخواست کننده (اختیاری)"
            htmlFor="requesterName"
            value={formData.requesterName}
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

          {/* Technologies */}
          {technologies.map((technology, index) => (
            <Input
              key={index}
              type="text"
              name={`technology-${index}`}
              id={`technology-${index}`}
              placeholder=" "
              label={`تکنولوژی ${index + 1}`}
              htmlFor={`technology-${index}`}
              value={technology}
              onChange={(e) => handleChangeTechnology(e.target.value, index)}
            />
          ))}

          {/* Add Technology Input Button */}
          <button
            type="button"
            onClick={handleAddTechnology}
            className="w-16 h-16 flex items-center outline-none justify-center bg-white shadow-md shadow-[#EDEFF1] rounded-lg cursor-pointer border-2 border-transparent hover:border-[#7D8FB3] hover:bg-transparent transition-all duration-200"
          >
            <PlusIcon size="20" className="text-[#7D8FB3]" />
          </button>

          {/* Description */}
          <div className="col-span-2">
            <div className="flex items-start pr-3 w-full bg-white rounded-lg shadow-md shadow-[#EDEFF1] transition ring-0 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-white focus-within:shadow-lg lg:col-span-2">
              <div className="relative w-full">
                <textarea
                  className="peer text-text-description placeholder:text-text-description font-iranYekan outline-none bg-transparent w-full p-3 pt-5"
                  name="description"
                  id="description"
                  placeholder=" "
                  rows={10}
                  required
                  value={formData.description}
                  onChange={handleInputChange}
                />

                <label
                  htmlFor="description"
                  className="absolute right-0 px-2 rounded py-1 bg-white pointer-events-none transition-all duration-200 ease-out text-text-description top-3 translate-y-0 text-base peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:text-xs font-iranYekan"
                >
                  توضیحات
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center gap-4">
            <button
              type="button"
              onClick={() => router.push('/admin/projects')}
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

export default EditProjectForm;
