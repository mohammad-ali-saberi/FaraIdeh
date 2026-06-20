'use client';

// React Imports
import { useState } from 'react';

// Next Imports
import { useRouter } from 'next/navigation';

// Components
import Input from '@/components/Input';
import Switch from '@/components/Switch';
import Toast from '@/components/Toast';

// Types
import { UserType } from '@/types/UsersType';

// Features
import { USER_ROLES, roleLabels, UserRole } from '@/features/users/roles';

// Utils
import { formatDate } from '@/utils/formatDate';

// Actions
import { updateUser } from '@/app/actions/updateUser';

interface EditUserFormProps {
  user: UserType;
}

const EditUserForm = ({ user }: EditUserFormProps) => {
  const router = useRouter();

  const [photo, setPhoto] = useState(user.photo ?? '');
  const [fullName, setFullName] = useState(user.fullName);
  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(user.email ?? '');
  const [role, setRole] = useState<UserRole>(user.role as UserRole);
  const [isActive, setIsActive] = useState(user.isActive);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'error';
  }>({ show: false, message: '', type: 'success' });

  const handleCloseToast = () => setToast((prev) => ({ ...prev, show: false }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await updateUser(user.id, {
        photo,
        fullName,
        username,
        password,
        email,
        role,
        isActive,
      });

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
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
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
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* Password */}
          <Input
            type="password"
            name="password"
            id="password"
            placeholder=" "
            label="رمز عبور (خالی بگذارید اگر تغییر نمی‌دهید)"
            htmlFor="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Email */}
          <Input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            label="ایمیل"
            htmlFor="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Role */}
          <div className="flex items-start pr-3 w-full bg-white rounded-lg shadow-md shadow-[#EDEFF1] transition ring-0 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-white focus-within:shadow-lg relative">
            <div className="relative w-full">
              <select
                className="peer text-text-description font-iranYekan outline-none bg-transparent w-full p-3 pt-5 cursor-pointer appearance-none"
                name="role"
                id="role"
                required
                value={role}
                onChange={(e) => setRole(e.target.value as UserRole)}
              >
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

          {/* Created Date */}
          <Input
            type="text"
            name="createdAt"
            id="createdAt"
            placeholder=" "
            label="تاریخ ایجاد"
            htmlFor="createdAt"
            disabled={true}
            value={formatDate(user.createdAt)}
          />

          {/* Updated Date */}
          <Input
            type="text"
            name="updatedAt"
            id="updatedAt"
            placeholder=" "
            label="تاریخ آخرین ویرایش"
            htmlFor="updatedAt"
            disabled={true}
            value={formatDate(user.updatedAt)}
          />

          {/* Last Login Date */}
          <Input
            type="text"
            name="lastLogin"
            id="lastLogin"
            placeholder=" "
            label="تاریخ آخرین بازدید"
            htmlFor="lastLogin"
            disabled={true}
            value={user.lastLogin ? formatDate(user.lastLogin) : 'هنوز وارد نشده'}
          />

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
              {isSubmitting ? 'در حال به‌روزرسانی...' : 'به‌روزرسانی اطلاعات'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditUserForm;
