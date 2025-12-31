'use client';

// React Imports
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

// Components
import Input from '@/components/Input';
import Toast from '@/components/Toast';

// Utils
import { formatDate } from '@/utils/formatDate';

// Types
import {
  AchievementType,
  UpdateAchievementInput,
  UpdateAchievementResponse,
} from '@/types/AchievementType';

interface IAchievementFormData {
  photo: string;
  title: string;
  year: string;
  description: string;
}

interface EditAchievementFormProps {
  achievement: AchievementType;
  updateAchievementAction: (data: UpdateAchievementInput) => Promise<UpdateAchievementResponse>;
}

const EditAchievementForm = ({
  achievement,
  updateAchievementAction,
}: EditAchievementFormProps) => {
  const router = useRouter();
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

  const [formData, setFormData] = useState<IAchievementFormData>({
    photo: '',
    title: '',
    year: '',
    description: '',
  });

  const createdDate = useMemo(
    () => (achievement.createdAt ? formatDate(achievement.createdAt) : ''),
    [achievement.createdAt],
  );

  // Initialize form with achievement data
  useEffect(() => {
    setFormData({
      photo: achievement.photo || '',
      title: achievement.title,
      year: achievement.year.toString(),
      description: achievement.description,
    });
  }, [achievement]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      // Validation
      if (
        !formData.photo.trim() ||
        !formData.title.trim() ||
        !formData.description.trim() ||
        !formData.year.trim()
      ) {
        showToast('لطفاً تمام فیلدها را پر کنید', 'error');
        setIsSubmitting(false);
        return;
      }

      const yearNumber = parseInt(formData.year);
      if (isNaN(yearNumber)) {
        showToast('لطفاً سال را به صورت عددی وارد کنید', 'error');
        setIsSubmitting(false);
        return;
      }

      const achievementData: UpdateAchievementInput = {
        id: achievement.id,
        photo: formData.photo,
        title: formData.title,
        description: formData.description,
        year: yearNumber,
      };

      // Send to server
      const result = await updateAchievementAction(achievementData);

      if (result.success) {
        showToast(result.message, 'success');

        // Redirect to achievements list after 1 seconds
        setTimeout(() => {
          router.push('/admin/achievement');
        }, 1000);
      } else {
        showToast(result.message, 'error');
      }
    } catch (error) {
      console.error('Error updating achievement:', error);
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
          {/* Photo */}
          <Input
            type="text"
            name="photo"
            id="photo"
            placeholder=" "
            required={true}
            label="لینک عکس"
            htmlFor="photo"
            value={formData.photo}
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

          {/* Year */}
          <Input
            type="number"
            name="year"
            id="year"
            placeholder=" "
            required={true}
            label="سال"
            htmlFor="year"
            value={formData.year}
            onChange={handleInputChange}
          />

          {/* Date */}
          {createdDate && (
            <Input
              type="text"
              name="date"
              id="date"
              placeholder=" "
              label={`تاریخ ایجاد: ${createdDate}`}
              htmlFor="date"
              disabled={true}
            />
          )}

          {/* Description */}
          <div className="col-span-2">
            <Input
              type="text"
              name="description"
              id="description"
              placeholder=" "
              required={true}
              label="توضیحات"
              htmlFor="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center gap-4">
            <button
              type="button"
              onClick={() => router.push('/admin/achievement')}
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

export default EditAchievementForm;
