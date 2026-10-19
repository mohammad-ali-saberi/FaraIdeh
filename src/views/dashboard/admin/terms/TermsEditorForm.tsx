'use client';

// React Imports
import { useEffect, useState, useTransition } from 'react';

// Components
import ContentEditor from '@/components/ContentEditor';
import Input from '@/components/Input';
import Toast from '@/components/Toast';

// Actions
import { getTermsPage } from '@/app/actions/getTermsPage';
import { updateTermsPage } from '@/app/actions/updateTermsPage';

// Libs
import { DEFAULT_TERMS_CONTENT, DEFAULT_TERMS_TITLE } from '@/libs/termsContent';

interface ToastState {
  show: boolean;
  message: string;
  type: 'success' | 'error';
}

const TermsEditorForm = () => {
  const [title, setTitle] = useState(DEFAULT_TERMS_TITLE);
  const [content, setContent] = useState(DEFAULT_TERMS_CONTENT);
  const [isLoading, setIsLoading] = useState(true);
  const [isPending, startTransition] = useTransition();
  const [toast, setToast] = useState<ToastState>({
    show: false,
    message: '',
    type: 'success',
  });

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const terms = await getTermsPage();

        if (!active) return;

        setTitle(terms.title);
        setContent(terms.content);
      } catch {
        if (!active) return;

        setToast({
          show: true,
          message: 'بارگذاری محتوای فعلی با خطا مواجه شد.',
          type: 'error',
        });
      } finally {
        if (active) setIsLoading(false);
      }
    };

    load();

    return () => {
      active = false;
    };
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    startTransition(async () => {
      try {
        const result = await updateTermsPage({ title, content });

        setToast({
          show: true,
          message: result.message,
          type: result.success ? 'success' : 'error',
        });
      } catch {
        setToast({
          show: true,
          message: 'ذخیره تغییرات با خطا مواجه شد.',
          type: 'error',
        });
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
        <form onSubmit={handleSubmit} className="rtl w-full">
          <div className="mx-auto max-w-5xl">
            <Input
              type="text"
              name="title"
              id="terms-title"
              placeholder=" "
              label="عنوان صفحه"
              htmlFor="terms-title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              disabled={isLoading || isPending}
              required
            />

            <div className="mt-7">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <label className="font-iranYekan text-text-services-about text-sm font-bold">
                  محتوای صفحه (Markdown)
                </label>

                <span className="font-iranYekan text-text-description text-xs">
                  با Markdown بنویسید؛ پیش‌نمایش در تب کنار قابل مشاهده است.
                </span>
              </div>

              <ContentEditor value={content} onChange={setContent} height={520} />
            </div>

            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                disabled={isLoading || isPending}
                className="font-iranYekan cursor-pointer rounded-lg border-b-4 border-orange/70 bg-orange px-8 py-4 text-lg text-white outline-none transition-all duration-200 hover:translate-y-1 hover:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isPending ? 'در حال ذخیره...' : 'ذخیره تغییرات'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default TermsEditorForm;
