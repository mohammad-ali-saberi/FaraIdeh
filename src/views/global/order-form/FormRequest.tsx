'use client';

// React Imports
import { useState } from 'react';

// Components
import EmailIcon from '@/components/icons/contact/EmailIcon';
import MessageIcon from '@/components/icons/contact/MessageIcon';
import PhoneIcon from '@/components/icons/contact/PhoneIcon';
import UserIcon from '@/components/icons/contact/UserIcon';
import HomeContactDecoration from '@/components/icons/SVG/HomeContactDecoration';

interface FormRequestProps {
  onSubmit: (formData: {
    name: string;
    family: string;
    phone: string;
    email: string;
    message: string;
  }) => Promise<void>;
  isSubmitting: boolean;
}

const FormRequest = ({ onSubmit, isSubmitting }: FormRequestProps) => {
  const [formData, setFormData] = useState({
    name: '',
    family: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await onSubmit(formData);
      // Reset form on success
      setFormData({
        name: '',
        family: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch {
      // Error is handled by parent component via Toast
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between xl:pl-32 lg:gap-x-44">
      <div className="relative w-full lg:w-44 flex-shrink-0 -mt-10">
        <p className="font-iranYekan text-[#D9D9D9] text-[140px] h-44 lg:h-auto lg:text-[200px] pr-7 lg:pr-0 text-right lg:text-center">
          ۲
        </p>
        <div className="absolute top-16 lg:top-24 right-0 w-44 lg:w-52">
          <div className="border-2 border-primary rounded-full w-8 lg:w-11"></div>
          <p className="font-iranYekan font-semibold text-lg lg:text-2xl mt-4">
            فرم را پر کنید تا در ارتباط باشیم
          </p>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 rtl mt-3 lg:mt-10 w-full gap-5"
      >
        {/* Name */}
        <div
          className="flex items-center justify-center pr-3 w-full bg-white rounded-lg shadow-md shadow-[#EDEFF1] transition ring-0
            focus-within:ring-2 focus-within:ring-blue-500
            focus-within:ring-offset-2 focus-within:ring-offset-white
            focus-within:shadow-lg"
        >
          <UserIcon size="40" />

          <div className="relative w-full pr-3">
            <input
              className="peer text-text-description placeholder:text-text-description font-iranYekan outline-none bg-transparent w-full p-3 py-5"
              type="text"
              name="name"
              id="name"
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />

            <label
              htmlFor="name"
              className="absolute right-0
                px-2 rounded py-1 bg-white pointer-events-none
                transition-all duration-200 ease-out
                text-text-description
                top-1/2 -translate-y-1/2 text-base
                peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm
                peer-[&:not(:placeholder-shown)]:top-0
                peer-[&:not(:placeholder-shown)]:-translate-y-1/2
                peer-[&:not(:placeholder-shown)]:text-xs font-iranYekan"
            >
              نام*
            </label>
          </div>
        </div>

        {/* Family */}
        <div
          className="flex items-center justify-center pr-3 w-full bg-white rounded-lg shadow-md shadow-[#EDEFF1] transition ring-0
            focus-within:ring-2 focus-within:ring-blue-500
            focus-within:ring-offset-2 focus-within:ring-offset-white
            focus-within:shadow-lg"
        >
          <UserIcon size="40" />

          <div className="relative w-full pr-3">
            <input
              className="peer text-text-description placeholder:text-text-description font-iranYekan outline-none bg-transparent w-full p-3 py-5"
              type="text"
              name="family"
              id="family"
              placeholder=" "
              value={formData.family}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />

            <label
              htmlFor="family"
              className="absolute right-0
                px-2 rounded py-1 bg-white pointer-events-none
                transition-all duration-200 ease-out
                text-text-description
                top-1/2 -translate-y-1/2 text-base
                peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm
                peer-[&:not(:placeholder-shown)]:top-0
                peer-[&:not(:placeholder-shown)]:-translate-y-1/2
                peer-[&:not(:placeholder-shown)]:text-xs font-iranYekan"
            >
              نام خانوادگی*
            </label>
          </div>
        </div>

        {/* Phone Number */}
        <div
          className="flex items-center justify-center pr-3 w-full bg-white rounded-lg shadow-md shadow-[#EDEFF1] transition ring-0
            focus-within:ring-2 focus-within:ring-blue-500
            focus-within:ring-offset-2 focus-within:ring-offset-white
            focus-within:shadow-lg"
        >
          <PhoneIcon size="40" />

          <div className="relative w-full pr-3">
            <input
              className="peer text-text-description placeholder:text-text-description font-iranYekan outline-none bg-transparent w-full p-3 py-5"
              type="tel"
              name="phone"
              id="phone"
              placeholder=" "
              inputMode="numeric"
              pattern="[0-9]*"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />

            <label
              htmlFor="phone"
              className="absolute right-0
                px-2 rounded py-1 bg-white pointer-events-none
                transition-all duration-200 ease-out
                text-text-description
                top-1/2 -translate-y-1/2 text-base
                peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm
                peer-[&:not(:placeholder-shown)]:top-0
                peer-[&:not(:placeholder-shown)]:-translate-y-1/2
                peer-[&:not(:placeholder-shown)]:text-xs font-iranYekan"
            >
              شماره تماس*
            </label>
          </div>
        </div>

        {/* Email */}
        <div
          className="flex items-center justify-center pr-3 w-full bg-white rounded-lg shadow-md shadow-[#EDEFF1] transition ring-0
            focus-within:ring-2 focus-within:ring-blue-500
            focus-within:ring-offset-2 focus-within:ring-offset-white
            focus-within:shadow-lg"
        >
          <EmailIcon width="40" height="35" />

          <div className="relative w-full pr-3">
            <input
              className="peer text-text-description placeholder:text-text-description font-iranYekan outline-none bg-transparent w-full p-3 py-5"
              type="email"
              name="email"
              id="email"
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
            />

            <label
              htmlFor="email"
              className="absolute right-0
                px-2 rounded py-1 bg-white pointer-events-none
                transition-all duration-200 ease-out
                text-text-description
                top-1/2 -translate-y-1/2 text-base
                peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm
                peer-[&:not(:placeholder-shown)]:top-0
                peer-[&:not(:placeholder-shown)]:-translate-y-1/2
                peer-[&:not(:placeholder-shown)]:text-xs font-iranYekan"
            >
              ایمیل
            </label>
          </div>
        </div>

        {/* Message */}
        <div
          className="flex items-start pr-3 w-full bg-white rounded-lg shadow-md shadow-[#EDEFF1] transition ring-0
            focus-within:ring-2 focus-within:ring-blue-500
            focus-within:ring-offset-2 focus-within:ring-offset-white
            focus-within:shadow-lg lg:col-span-2"
        >
          <MessageIcon size="38" className="mt-3 shrink-0" />

          <div className="relative w-full">
            <textarea
              className="peer text-text-description placeholder:text-text-description font-iranYekan outline-none bg-transparent w-full p-3 pt-5"
              name="message"
              id="message"
              placeholder=" "
              rows={10}
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />

            <label
              htmlFor="message"
              className="
                absolute right-0 px-2 rounded py-1 bg-white pointer-events-none
                transition-all duration-200 ease-out text-text-description
                top-3 translate-y-0 text-base
                peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs
                peer-[&:not(:placeholder-shown)]:top-0
                peer-[&:not(:placeholder-shown)]:-translate-y-1/2
                peer-[&:not(:placeholder-shown)]:text-xs
                font-iranYekan
              "
            >
              توضیح مختصر در مورد پروژه ...
            </label>
          </div>
        </div>

        <div className="lg:col-span-2 flex justify-end relative">
          <button
            className="bg-orange text-white font-iranYekan text-center rounded-lg mt-4 lg:mt-8 w-full md:w-auto md:px-14 py-4 font-semibold border-b-4 border-[#bd4800] cursor-pointer hover:border-transparent hover:translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'در حال ثبت...' : 'ثبت سفارش'}
          </button>

          <div className="absolute -top-12 -left-42 hidden xl:block">
            <HomeContactDecoration className="w-[160px] h-[100px]" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormRequest;
