'use client';

// React Imports
import { useActionState, useEffect, useRef, useState } from 'react';

// Components
import Toast from '@/components/Toast';

// Actions
import { createContact } from '@/app/actions/createContact';

// Libs
import { CONTACT_MESSAGE_MAX_LENGTH } from '@/libs/contactInfo';

// Utils
import { normalizePhoneInput } from '@/utils/normalizePhoneInput';

const labelClass = 'font-iranYekan mb-1.5 block text-xs font-bold text-[#16205f]';

const fieldClass =
  'font-iranYekan w-full rounded-2xl border border-[#e4ebf5] bg-[#fbfcfe] px-4 py-3.5 text-sm text-[#16205f] outline-none transition-all duration-200 placeholder:text-[#a9b6cc] focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/15 disabled:cursor-not-allowed disabled:opacity-60';

const fieldErrorClass = 'border-red-300 bg-red-50/40 focus:border-red-400 focus:ring-red-100';

const errorTextClass = 'font-iranYekan mt-1.5 text-[11px] font-medium text-red-600';

interface FieldProps {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'tel' | 'email';
  required?: boolean;
  error?: string;
  autoComplete?: string;
  inputMode?: 'text' | 'numeric' | 'tel' | 'email';
  disabled?: boolean;
  onInput?: React.FormEventHandler<HTMLInputElement>;
}

const Field = ({
  id,
  name,
  label,
  type = 'text',
  required = false,
  error,
  autoComplete,
  inputMode,
  disabled,
  onInput,
}: FieldProps) => (
  <div>
    <label htmlFor={id} className={labelClass}>
      {label}
      {required && <span className="text-orange"> *</span>}
    </label>

    <input
      id={id}
      name={name}
      type={type}
      required={required}
      autoComplete={autoComplete}
      inputMode={inputMode}
      disabled={disabled}
      onInput={onInput}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`${fieldClass} ${error ? fieldErrorClass : ''}`}
    />

    {error && (
      <p id={`${id}-error`} className={errorTextClass}>
        {error}
      </p>
    )}
  </div>
);

const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(createContact, null);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [messageLength, setMessageLength] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!state) return;

    setToast({
      type: state.ok ? 'success' : 'error',
      message:
        state.message ||
        (state.ok ? 'پیام شما با موفقیت ثبت شد.' : 'مشکلی پیش آمد. لطفاً دوباره تلاش کنید.'),
    });

    // The fields are uncontrolled, so a successful submit needs an explicit reset.
    if (state.ok) {
      formRef.current?.reset();
      setMessageLength(0);
    }
  }, [state]);

  return (
    <>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div
        id="contact-form"
        className="rtl flex h-full scroll-mt-28 flex-col rounded-[26px] border border-[#e9eef7] bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_20px_45px_-34px_rgba(16,24,40,0.35)] sm:p-6 lg:p-7"
      >
        <div className="flex items-center gap-2.5">
          <span className="bg-orange h-1 w-6 rounded-full" />
          <p className="font-iranYekan text-sm font-extrabold text-primary">فرم تماس</p>
        </div>

        <h2 className="font-iranYekan mt-2.5 text-xl font-extrabold text-text-services-about sm:text-2xl">
          پیامتان را برای ما بنویسید
        </h2>

        <p className="font-iranYekan mt-2.5 text-sm leading-7 text-text-description">
          هرچه دقیق‌تر بنویسید، سریع‌تر می‌توانیم کمک کنیم. اگر دربارهٔ پروژه‌ای مشخص صحبت می‌کنید،
          هدف، مخاطب و زمان‌بندی موردنظرتان را هم بنویسید.
        </p>

        <form
          ref={formRef}
          action={formAction}
          className="mt-5 grid flex-1 grid-cols-1 grid-rows-[auto_auto_1fr_auto] gap-4 sm:grid-cols-2"
        >
          <Field
            id="contact-name"
            name="name"
            label="نام"
            required
            autoComplete="given-name"
            error={state?.fieldErrors?.firstName?.[0]}
            disabled={isPending}
          />

          <Field
            id="contact-family"
            name="family"
            label="نام خانوادگی"
            required
            autoComplete="family-name"
            error={state?.fieldErrors?.lastName?.[0]}
            disabled={isPending}
          />

          <Field
            id="contact-phone"
            name="phone"
            label="شماره تماس"
            type="tel"
            required
            inputMode="numeric"
            autoComplete="tel"
            error={state?.fieldErrors?.phone?.[0]}
            disabled={isPending}
            onInput={(e) => normalizePhoneInput(e, { maxLength: 11 })}
          />

          <Field
            id="contact-email"
            name="email"
            label="ایمیل"
            type="email"
            inputMode="email"
            autoComplete="email"
            error={state?.fieldErrors?.email?.[0]}
            disabled={isPending}
          />

          <div className="flex min-h-0 flex-col sm:col-span-2">
            <div className="mb-1.5 flex items-center justify-between gap-3">
              <label
                htmlFor="contact-message"
                className="font-iranYekan block text-xs font-bold text-text-services-about"
              >
                پیام شما
                <span className="text-orange"> *</span>
              </label>

              <span
                dir="ltr"
                className={`font-yekanBakhFaNum text-[11px] font-bold tabular-nums ${
                  messageLength >= CONTACT_MESSAGE_MAX_LENGTH ? 'text-orange' : 'text-[#9aa8c2]'
                }`}
              >
                {messageLength} / {CONTACT_MESSAGE_MAX_LENGTH}
              </span>
            </div>

            <textarea
              id="contact-message"
              name="message"
              rows={6}
              required
              disabled={isPending}
              maxLength={CONTACT_MESSAGE_MAX_LENGTH}
              onChange={(event) => setMessageLength(event.target.value.length)}
              aria-invalid={!!state?.fieldErrors?.message}
              aria-describedby={state?.fieldErrors?.message ? 'contact-message-error' : undefined}
              className={`${fieldClass} min-h-40 flex-1 resize-none ${state?.fieldErrors?.message ? fieldErrorClass : ''}`}
            />

            {state?.fieldErrors?.message?.[0] && (
              <p id="contact-message-error" className={errorTextClass}>
                {state.fieldErrors.message[0]}
              </p>
            )}
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={isPending}
              className="font-iranYekan flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-extrabold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_18px_32px_-18px_rgba(10,47,182,0.9)] focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:text-base"
            >
              {isPending ? 'در حال ارسال…' : 'ارسال پیام'}
            </button>

            <p className="font-iranYekan mt-3 text-center text-[11px] leading-6 text-[#9aa8c2]">
              با ارسال این فرم، با ذخیره و پردازش اطلاعات شما برای پاسخ‌گویی موافقت می‌کنید. اطلاعات
              شما در اختیار شخص ثالث قرار نمی‌گیرد.
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
