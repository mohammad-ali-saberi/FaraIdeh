'use client';

// React Imports
import { useState } from 'react';

// Components
import Container from '@/component/Container';
import AboutServicesDecoration from '@/component/icons/SVG/AboutServicesDecoration';
import Toast from '@/component/Toast';
import FormRequest from './FormRequest';
import SelectCategory from './SelectCategory';

// Actions
import { createOrder } from '@/app/actions/createOrder';

const SubmitRequest = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleFormSubmit = async (formData: {
    name: string;
    family: string;
    phone: string;
    email: string;
    message: string;
  }) => {
    // Validate categories before submitting
    if (selectedCategories.length === 0) {
      setToast({
        type: 'error',
        message: 'لطفا حداقل یک دسته را انتخاب کنید',
      });
      return;
    }

    setIsSubmitting(true);
    setToast(null);

    try {
      const result = await createOrder({
        categories: selectedCategories,
        users: [
          {
            firstName: formData.name,
            lastName: formData.family,
            contactNumber: formData.phone,
            email: formData.email,
          },
        ],
        description: formData.message,
      });

      if (!result.success) {
        setToast({
          type: 'error',
          message: result.error || 'خطایی در ثبت سفارش رخ داد',
        });
        throw new Error(result.error);
      }

      setToast({
        type: 'success',
        message: result.message || 'سفارش شما با موفقیت ثبت شد',
      });

      // Reset categories after successful submission
      setSelectedCategories([]);
    } catch (error) {
      // Error already shown in toast
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div
        className="bg-[#F9F9F9] mt-14 lg:mt-32 rtl pb-10 pt-1 lg:py-28 lg:pt-32 relative"
        id="services"
      >
        <Container>
          <SelectCategory
            selectedCategories={selectedCategories}
            onCategoriesChange={setSelectedCategories}
          />
          <FormRequest onSubmit={handleFormSubmit} isSubmitting={isSubmitting} />
        </Container>

        <div className="absolute right-0 -top-20 hidden xl:block">
          <AboutServicesDecoration />
        </div>
      </div>
    </>
  );
};

export default SubmitRequest;
