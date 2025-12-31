'use client';

// React Imports
import { useActionState, useEffect, useState } from 'react';

// Components
import Container from '@/components/Container';
import EmailIcon from '@/components/icons/contact/EmailIcon';
import MessageIcon from '@/components/icons/contact/MessageIcon';
import PhoneIcon from '@/components/icons/contact/PhoneIcon';
import UserIcon from '@/components/icons/contact/UserIcon';
import HomeContactDecoration from '@/components/icons/SVG/HomeContactDecoration';
import LargeLabel from '@/components/LargeLabel';
import SmallLabel from '@/components/SmallLabel';
import Toast from '@/components/Toast';

// Utils
import { normalizePhoneInput } from '@/utils/normalizePhoneInput';

// Actions
import { createContact } from '@/app/actions/createContact';

const Contact = () => {
  const [state, formAction] = useActionState(createContact, null);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    if (!state) return;

    if (state.ok) {
      setToast({
        type: 'success',
        message: state.message || 'پیام شما با موفقیت ثبت شد.',
      });
    } else {
      setToast({
        type: 'error',
        message: state.message || 'مشکلی پیش آمد. لطفاً دوباره تلاش کنید.',
      });
    }
  }, [state]);

  return (
    <>
      {/* Toast Notification */}
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <Container>
        <div
          id="contact"
          className="relative w-full flex flex-col items-center justify-center mt-16 lg:mt-36 lg:py-20 py-12 px-4 sm:px-6 lg:px-0 bg-[#F2F3F5] rounded-2xl"
        >
          <SmallLabel title="CONTACTS" color="#3361FF" bgColor="#DFE5F6" />
          <LargeLabel
            label="IN TOUCH"
            subLabel="می‌خواهید عضو تیم شوید یا همکاری کنیم؟"
            color="#EAECF1"
          />

          <p className="text-text-description text-center font-iranYekan leading-5 sm:leading-8 px-4 sm:px-12 md:px-24 lg:px-48 xl:px-96 rtl mt-2 font-light sm:font-medium lg:-mt-8 text-xs sm:text-base">
            از عضویت در تیم تا همکاری‌های پروژه‌ای و حتی نقد و انتقاد، خوشحال می‌شویم بشنویم. فرم را
            پر کنید تا زود با شما تماس بگیریم.
          </p>

          <div className="absolute -top-16 -left-12 hidden xl:block">
            <HomeContactDecoration />
          </div>

          {/* Form */}
          <form
            action={formAction}
            className="grid grid-cols-1 lg:grid-cols-2 rtl mt-10 w-full lg:px-8 xl:px-52 gap-8"
          >
            {/* Name */}
            <div
              className="flex items-center justify-center pr-5 w-full bg-white rounded-full shadow-md shadow-[#EDEFF1] transition ring-0
            focus-within:ring-2 focus-within:ring-blue-500
            focus-within:ring-offset-2 focus-within:ring-offset-white
            focus-within:shadow-lg"
            >
              <UserIcon />

              <div className="relative w-full">
                <input
                  className="peer text-text-description placeholder:text-text-description font-iranYekan outline-none bg-bg-transparent rounded-l-full w-full p-3 py-5"
                  type="text"
                  name="name"
                  id="name"
                  placeholder=" "
                  required
                  aria-invalid={!!state?.fieldErrors?.firstName}
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
                  نام
                </label>

                {!!state?.fieldErrors?.firstName && (
                  <span className="text-xs text-red-600 absolute -bottom-5 right-2 font-iranYekan">
                    {state.fieldErrors.firstName[0]}
                  </span>
                )}
              </div>
            </div>

            {/* Family */}
            <div
              className="flex items-center justify-center pr-5 w-full bg-white rounded-full shadow-md shadow-[#EDEFF1] transition ring-0
            focus-within:ring-2 focus-within:ring-blue-500
            focus-within:ring-offset-2 focus-within:ring-offset-white
            focus-within:shadow-lg"
            >
              <UserIcon />

              <div className="relative w-full">
                <input
                  className="peer text-text-description placeholder:text-text-description font-iranYekan outline-none bg-bg-transparent rounded-l-full w-full p-3 py-5"
                  type="text"
                  name="family"
                  id="family"
                  placeholder=" "
                  required
                  aria-invalid={!!state?.fieldErrors?.lastName}
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
                  نام خانوادگی
                </label>

                {!!state?.fieldErrors?.lastName && (
                  <span className="text-xs text-red-600 absolute -bottom-5 right-2 font-iranYekan">
                    {state.fieldErrors.lastName[0]}
                  </span>
                )}
              </div>
            </div>

            {/* Phone Number */}
            <div
              className="flex items-center justify-center pr-5 w-full bg-white rounded-full shadow-md shadow-[#EDEFF1] transition ring-0
            focus-within:ring-2 focus-within:ring-blue-500
            focus-within:ring-offset-2 focus-within:ring-offset-white
            focus-within:shadow-lg"
            >
              <PhoneIcon />

              <div className="relative w-full">
                <input
                  className="peer text-text-description placeholder:text-text-description font-iranYekan outline-none bg-bg-transparent rounded-l-full w-full p-3 py-5"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder=" "
                  inputMode="numeric"
                  pattern="[0-9]*"
                  autoComplete="tel"
                  onInput={(e) => normalizePhoneInput(e, { maxLength: 11 })}
                  aria-invalid={!!state?.fieldErrors?.phone}
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
                  شماره تماس
                </label>

                {!!state?.fieldErrors?.phone && (
                  <span className="text-xs text-red-600 absolute -bottom-5 right-2 font-iranYekan">
                    {state.fieldErrors.phone[0]}
                  </span>
                )}
              </div>
            </div>

            {/* Email */}
            <div
              className="flex items-center justify-center pr-5 w-full bg-white rounded-full shadow-md shadow-[#EDEFF1] transition ring-0
            focus-within:ring-2 focus-within:ring-blue-500
            focus-within:ring-offset-2 focus-within:ring-offset-white
            focus-within:shadow-lg"
            >
              <EmailIcon />

              <div className="relative w-full">
                <input
                  className="peer text-text-description placeholder:text-text-description font-iranYekan outline-none bg-bg-transparent rounded-l-full w-full p-3 py-5"
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" "
                  aria-invalid={!!state?.fieldErrors?.email}
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

                {!!state?.fieldErrors?.email && (
                  <span className="text-xs text-red-600 absolute -bottom-5 right-2 font-iranYekan">
                    {state.fieldErrors.email[0]}
                  </span>
                )}
              </div>
            </div>

            {/* Message */}
            <div
              className="flex items-center justify-center pr-5 w-full bg-white rounded-full shadow-md shadow-[#EDEFF1] transition ring-0
            focus-within:ring-2 focus-within:ring-blue-500
            focus-within:ring-offset-2 focus-within:ring-offset-white
            focus-within:shadow-lg lg:col-span-2"
            >
              <MessageIcon />

              <div className="relative w-full">
                <input
                  className="peer text-text-description placeholder:text-text-description font-iranYekan outline-none bg-bg-transparent rounded-l-full w-full p-3 py-5"
                  type="text"
                  name="message"
                  id="message"
                  placeholder=" "
                  required
                  aria-invalid={!!state?.fieldErrors?.message}
                />

                <label
                  htmlFor="message"
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
                  پیام
                </label>

                {!!state?.fieldErrors?.message && (
                  <span className="text-xs text-red-600 absolute -bottom-5 right-2 font-iranYekan">
                    {state.fieldErrors.message[0]}
                  </span>
                )}
              </div>
            </div>

            <div className="lg:col-span-2 flex justify-center">
              <button
                className="bg-primary text-white font-iranYekan text-center rounded-full mt-4 lg:mt-10 px-14 py-4 font-semibold border-b-4 border-[#000a75] cursor-pointer hover:border-transparent hover:translate-y-1 transition-all duration-200"
                type="submit"
              >
                ارسال
              </button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Contact;
