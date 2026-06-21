'use client';

// React Imports
import { useState } from 'react';

// Components
import Input from '@/components/Input';
import Toast from '@/components/Toast';
import PasswordToggle from '@/components/PasswordToggle';

// Actions
import { updateProfile } from '@/app/actions/updateProfile';

// Types
import { UserType } from '@/types/UsersType';

interface ToastState {
  show: boolean;
  message: string;
  type: 'success' | 'error';
}

const ProfileEdit = ({ user }: { user: UserType | null }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<ToastState>({ show: false, message: '', type: 'success' });
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    photo: user?.photo ?? '',
    fullName: user?.fullName ?? '',
    username: user?.username ?? '',
    password: '',
    email: user?.email ?? '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEdit = () => setIsEditing(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isEditing) return;

    setIsLoading(true);
    const result = await updateProfile(formData);
    setIsLoading(false);

    setToast({ show: true, message: result.message, type: result.success ? 'success' : 'error' });

    if (result.success) setIsEditing(false);
  };

  const handleCloseToast = () => setToast((prev) => ({ ...prev, show: false }));

  const lastLoginFormatted = user?.lastLogin
    ? new Date(user.lastLogin).toLocaleString('fa-IR')
    : 'ثبت نشده';

  return (
    <>
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
              label="لینک عکس پروفایل"
              htmlFor="photo"
              value={formData.photo}
              onChange={handleChange}
              disabled={!isEditing}
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
            value={formData.fullName}
            onChange={handleChange}
            disabled={!isEditing}
          />

          {/* UserName */}
          <Input
            type="text"
            name="userName"
            id="userName"
            placeholder=" "
            required={true}
            label="نام کاربری"
            htmlFor="userName"
            value={formData.username}
            onChange={handleChange}
            disabled={!isEditing}
          />

          {/* Password */}
          <Input
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            placeholder=" "
            label="رمز عبور (خالی بگذارید اگر تغییر نمی‌دهید)"
            htmlFor="password"
            value={formData.password}
            onChange={handleChange}
            disabled={!isEditing}
            icon={
              <PasswordToggle
                show={showPassword}
                onToggle={() => setShowPassword((prev) => !prev)}
                disabled={!isEditing}
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
            value={formData.email}
            onChange={handleChange}
            disabled={!isEditing}
          />

          {/* Roll */}
          <Input
            type="text"
            name="roll"
            id="roll"
            placeholder=" "
            label="نقش"
            htmlFor="roll"
            disabled
            value={user?.role ?? ''}
          />

          {/* Last Login */}
          <Input
            type="text"
            name="lastLogin"
            id="lastLogin"
            placeholder=" "
            label="آخرین بازدید"
            htmlFor="lastLogin"
            disabled
            value={lastLoginFormatted}
          />

          <div className="col-span-2 flex justify-center gap-4">
            <button
              type="button"
              onClick={handleEdit}
              disabled={isEditing}
              className="px-8 py-4 bg-gray-400 font-iranYekan outline-none text-lg text-white rounded-lg cursor-pointer border-b-4 border-gray-600 hover:border-transparent hover:translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:border-gray-600 disabled:translate-y-0"
            >
              ویرایش اطلاعات
            </button>

            <button
              type="submit"
              disabled={!isEditing || isLoading}
              className="px-8 py-4 bg-orange font-iranYekan outline-none text-lg text-white rounded-lg cursor-pointer border-b-4 border-[#a33f00] hover:border-transparent hover:translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:border-[#a33f00] disabled:translate-y-0"
            >
              {isLoading ? 'در حال ثبت...' : 'ثبت اطلاعات'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileEdit;
