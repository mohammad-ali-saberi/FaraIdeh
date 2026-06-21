'use client';

// React Imports
import { useState } from 'react';

// Next Imports
import { useRouter } from 'next/navigation';

// Components
import Input from '@/components/Input';
import Switch from '@/components/Switch';
import Toast from '@/components/Toast';
import PasswordToggle from '@/components/PasswordToggle';

// Features
import { USER_ROLES, roleLabels, UserRole } from '@/features/users/roles';

// Actions
import { createUser } from '@/app/actions/createUser';

const AddUserForm = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'error';
  }>({ show: false, message: '', type: 'success' });
  const [showPassword, setShowPassword] = useState(false);

  const handleCloseToast = () => setToast((prev) => ({ ...prev, show: false }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.set('isActive', String(isActive));

    try {
      const result = await createUser(formData);

      if (result.success) {
        setToast({ show: true, message: result.message, type: 'success' });
        setTimeout(() => {
          router.push('/admin/users');
        }, 1200);
      } else {
        setToast({ show: true, message: result.message, type: 'error' });
      }
    } catch (error) {
      console.error(error);
      setToast({ show: true, message: 'خطای غیرمنتظره‌ای رخ داد', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {toast.show && <Toast message={toast.message} type={toast.type} onClose={handleCloseToast} />}

      <div className="px-12 mt-7 py-5 h-181 overflow-y-scroll">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 rtl w-full gap-x-14 gap-y-8"
        >
          {/* Photo */}
          <div className="col-span-2">
            <Input
              type="text"
              name="photo"
              id="photo"
              placeholder=" "
              label="لینک عکس"
              htmlFor="photo"
            />
          </div>

          {/* Full Name */}
          <Input
            type="text"
            name="fullName"
            id="fullName"
            placeholder=" "
            required={true}
            label="نام و نام خانوادگی"
            htmlFor="fullName"
          />

          {/* User Name */}
          <Input
            type="text"
            name="userName"
            id="userName"
            placeholder=" "
            required={true}
            label="نام کاربری"
            htmlFor="userName"
          />

          {/* Password */}
          <Input
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            placeholder=" "
            required={true}
            label="رمز عبور"
            htmlFor="password"
            icon={
              <PasswordToggle
                show={showPassword}
                onToggle={() => setShowPassword((prev) => !prev)}
              />
            }
          />

          {/* Email */}
          <Input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            label="ایمیل"
            htmlFor="email"
          />

          {/* Role */}
          <div className="flex items-start pr-3 w-full bg-white rounded-lg shadow-md shadow-[#EDEFF1] transition ring-0 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-white focus-within:shadow-lg relative">
            <div className="relative w-full">
              <select
                className="peer text-text-description font-iranYekan outline-none bg-transparent w-full p-3 pt-5 cursor-pointer appearance-none"
                name="role"
                id="role"
                required
                defaultValue=""
              >
                <option value="" disabled className="text-gray-400">
                  انتخاب کنید
                </option>
                {Object.entries(USER_ROLES).map(([key, value]) => (
                  <option key={key} value={value} className="text-gray-700 font-iranYekan py-2">
                    {roleLabels[value as UserRole]}
                  </option>
                ))}
              </select>

              {/* Custom Dropdown Arrow */}
              <div className="absolute left-5 top-1/2 -translate-y-1.5 pointer-events-none">
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
                htmlFor="role"
                className="absolute right-0 px-2 rounded py-1 bg-white pointer-events-none transition-all duration-200 ease-out text-text-description top-0 -translate-y-1/2 text-xs font-iranYekan"
              >
                نقش
              </label>
            </div>
          </div>

          {/* IsActive */}
          <Switch checked={isActive} onChange={setIsActive} label="وضعیت فعال بودن کاربر" />

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center gap-4">
            <button
              type="button"
              onClick={() => router.push('/admin/users')}
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
              {isSubmitting ? 'در حال ثبت...' : 'ثبت اطلاعات'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddUserForm;
