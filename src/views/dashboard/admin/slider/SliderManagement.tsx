'use client';

// React Imports
import { useState, useTransition } from 'react';

// Next Imports
import Image from 'next/image';

// Components
import Input from '@/components/Input';
import Modal from '@/components/Modal';
import Toast from '@/components/Toast';
import LockIcon from '@/components/icons/blogs/LockIcon';
import UnlockIcon from '@/components/icons/blogs/UnlockIcon';
import TrashIcon from '@/components/icons/dashboard/TrashIcon';

// Actions
import { createSlider } from '@/app/actions/createSlider';
import { deleteSlider } from '@/app/actions/deleteSlider';
import { toggleSliderActive } from '@/app/actions/toggleSliderActive';

// Types
import type { Slide } from '@/types/SlidesType';

type SliderManagementProps = {
  initialSliders: Slide[];
};

const SliderManagement = ({ initialSliders }: SliderManagementProps) => {
  const [photo, setPhoto] = useState('');
  const [sliders, setSliders] = useState<Slide[]>(initialSliders);
  const [isPending, startTransition] = useTransition();
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; id: number | null }>({
    open: false,
    id: null,
  });
  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'error';
  }>({ show: false, message: '', type: 'success' });

  const handleCloseToast = () => setToast((prev) => ({ ...prev, show: false }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!photo.trim()) return;

    startTransition(async () => {
      const result = await createSlider(photo);

      if (result.success && result.data) {
        setSliders((prev) => [...prev, result.data as Slide]);
        setPhoto('');
        setToast({ show: true, message: 'تصویر با موفقیت اضافه شد', type: 'success' });
      } else {
        setToast({
          show: true,
          message: result.error || 'خطا در ایجاد تصویر',
          type: 'error',
        });
      }
    });
  };

  const handleDeleteClick = (id: number) => {
    setDeleteModal({ open: true, id });
  };

  const handleConfirmDelete = async () => {
    if (!deleteModal.id) return;

    const id = deleteModal.id;
    setDeleteModal({ open: false, id: null });

    startTransition(async () => {
      const result = await deleteSlider(id);

      if (result.success) {
        setSliders((prev) => prev.filter((slider) => slider.id !== id));
        setToast({ show: true, message: 'تصویر با موفقیت حذف شد', type: 'success' });
      } else {
        setToast({
          show: true,
          message: result.error || 'خطا در حذف تصویر',
          type: 'error',
        });
      }
    });
  };

  const handleToggleActive = async (id: number, currentStatus: boolean) => {
    startTransition(async () => {
      const result = await toggleSliderActive(id, !currentStatus);

      if (result.success) {
        setSliders((prev) =>
          prev.map((slider) =>
            slider.id === id ? { ...slider, isActive: !currentStatus } : slider,
          ),
        );
        setToast({
          show: true,
          message: !currentStatus ? 'تصویر فعال شد' : 'تصویر غیرفعال شد',
          type: 'success',
        });
      } else {
        setToast({
          show: true,
          message: result.error || 'خطا در تغییر وضعیت تصویر',
          type: 'error',
        });
      }
    });
  };

  return (
    <>
      {/* Toast Notification */}
      {toast.show && <Toast message={toast.message} type={toast.type} onClose={handleCloseToast} />}

      <div className="px-12 mt-7 py-5 h-181 overflow-y-scroll">
        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-12 rtl w-full gap-x-5">
          {/* Photo */}
          <div className="col-span-11">
            <Input
              type="text"
              name="photo"
              id="photo"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder=" "
              required={true}
              label="لینک عکس"
              htmlFor="photo"
              disabled={isPending}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending || !photo.trim()}
            className="col-span-1 py-3 bg-orange font-iranYekan outline-none text-lg text-white rounded-lg cursor-pointer border-b-4 border-[#a33f00] hover:border-transparent hover:translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? 'در حال...' : 'افزودن'}
          </button>
        </form>

        {/* Sliders Grid */}
        <div className="grid grid-cols-3 mt-10 gap-x-12 gap-y-8">
          {sliders.length === 0 ? (
            <div className="col-span-3 flex flex-col items-center justify-center gap-3 py-12">
              <Image
                src="https://s6.uupload.ir/files/image_8_mict-removebg-preview_kxug.png"
                alt="EmptyImage"
                width={300}
                height={300}
              />
              <p className="font-iranYekan text-[#BCBCBC] text-xl">هیچ عکسی در اسلایدر ندارید!</p>
            </div>
          ) : (
            sliders.map((slider) => (
              <div key={slider.id} className="relative w-full h-80 overflow-hidden rounded-xl">
                <Image
                  src={slider.photo}
                  alt={slider.caption || 'اسلایدر'}
                  fill
                  className="object-cover object-center"
                />

                <div className="absolute top-3 left-3 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleDeleteClick(slider.id)}
                    disabled={isPending}
                    className="bg-primary rounded-lg p-2 border border-white cursor-pointer group hover:bg-white hover:border-primary transition-all duration-200 disabled:opacity-50"
                  >
                    <TrashIcon size="24" className="text-white group-hover:text-primary" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleToggleActive(slider.id, slider.isActive)}
                    disabled={isPending}
                    className="bg-primary rounded-lg p-2 border border-white cursor-pointer flex text-white font-iranYekan gap-2 font-light group hover:bg-white hover:text-primary hover:border-primary transition-all duration-200 disabled:opacity-50"
                  >
                    {slider.isActive ? (
                      <>
                        <UnlockIcon size="24" className="text-white group-hover:text-primary" />
                        فعال
                      </>
                    ) : (
                      <>
                        <LockIcon size="24" className="text-white group-hover:text-primary" />
                        غیر فعال
                      </>
                    )}
                  </button>
                </div>

                {slider.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 font-iranYekan">
                    {slider.caption}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Deleted Modal */}
      <Modal
        isOpen={deleteModal.open}
        onClose={() => setDeleteModal({ open: false, id: null })}
        title="حذف تصویر"
        size="sm"
        actions={[
          {
            label: 'انصراف',
            variant: 'secondary',
            onClick: () => setDeleteModal({ open: false, id: null }),
          },
          {
            label: isPending ? 'در حال حذف...' : 'بله، حذف شود',
            variant: 'danger',
            onClick: handleConfirmDelete,
          },
        ]}
      >
        <p>آیا از حذف این تصویر مطمئن هستید؟</p>
        <p className="text-sm text-red-500 mt-2">این عملیات غیرقابل بازگشت است.</p>
      </Modal>
    </>
  );
};

export default SliderManagement;
