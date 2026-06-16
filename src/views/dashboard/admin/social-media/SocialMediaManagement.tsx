'use client';

// React Imports
import { useState, useEffect, useTransition } from 'react';

// Components
import Input from '@/components/Input';
import Toast from '@/components/Toast';

// Actions
import { getSocialMedia } from '@/app/actions/getSocialMedia';
import { updateSocialMedia } from '@/app/actions/updateSocialMedia';

// Types
import { SocialMediaData } from '@/types/SocialMediaType';

interface ToastState {
  show: boolean;
  message: string;
  type: 'success' | 'error';
}

const SocialMediaManagement = () => {
  const [formData, setFormData] = useState<SocialMediaData>({
    githubLink: '',
    linkedinLink: '',
    instagramLink: '',
    telegramLink: '',
  });

  const [toast, setToast] = useState<ToastState>({
    show: false,
    message: '',
    type: 'success',
  });

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSocialMedia();
      setFormData({
        githubLink: data.githubLink,
        linkedinLink: data.linkedinLink,
        instagramLink: data.instagramLink,
        telegramLink: data.telegramLink,
      });
    };
    fetchData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      try {
        await updateSocialMedia(formData);
        setToast({ show: true, message: 'لینک‌ها با موفقیت ذخیره شدند', type: 'success' });
      } catch {
        setToast({ show: true, message: 'خطا در ذخیره‌سازی اطلاعات', type: 'error' });
      }
    });
  };

  const handleCloseToast = () => {
    setToast((prev) => ({ ...prev, show: false }));
  };

  return (
    <>
      {toast.show && <Toast message={toast.message} type={toast.type} onClose={handleCloseToast} />}

      <div className="px-12 mt-7 py-5 h-181 overflow-y-scroll">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 rtl w-full gap-x-14 gap-y-8"
        >
          <Input
            type="text"
            name="githubLink"
            id="githubLink"
            placeholder=" "
            label="لینک گیت هاب"
            htmlFor="githubLink"
            value={formData.githubLink}
            onChange={handleInputChange}
          />

          <Input
            type="text"
            name="linkedinLink"
            id="linkedinLink"
            placeholder=" "
            label="لینک لینکدین"
            htmlFor="linkedinLink"
            value={formData.linkedinLink}
            onChange={handleInputChange}
          />

          <Input
            type="text"
            name="instagramLink"
            id="instagramLink"
            placeholder=" "
            label="لینک اینستاگرام"
            htmlFor="instagramLink"
            value={formData.instagramLink}
            onChange={handleInputChange}
          />

          <Input
            type="text"
            name="telegramLink"
            id="telegramLink"
            placeholder=" "
            label="لینک تلگرام"
            htmlFor="telegramLink"
            value={formData.telegramLink}
            onChange={handleInputChange}
          />

          <div className="col-span-2 flex justify-center gap-4">
            <button
              type="submit"
              disabled={isPending}
              className="px-8 py-4 bg-orange font-iranYekan outline-none text-lg text-white rounded-lg cursor-pointer border-b-4 border-[#a33f00] hover:border-transparent hover:translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? 'در حال ذخیره...' : 'ثبت اطلاعات'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SocialMediaManagement;
