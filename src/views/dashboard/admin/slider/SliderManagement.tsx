'use client';

// React Imports
import { useState, useTransition } from 'react';

// Next Imports
import Image from 'next/image';

// Components
import Input from '@/component/Input';
import TrashIcon from '@/component/icons/dashboard/TrashIcon';
import LockIcon from '@/component/icons/blogs/LockIcon';
import UnlockIcon from '@/component/icons/blogs/UnlockIcon';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!photo.trim()) return;

    startTransition(async () => {
      const result = await createSlider(photo);

      if (result.success && result.data) {
        setSliders((prev) => [...prev, result.data as Slide]);
        setPhoto('');
      } else {
        alert(result.error || 'خطا در ایجاد اسلایدر');
      }
    });
  };

  const handleDelete = async (id: number) => {
    if (!confirm('آیا از حذف این اسلایدر اطمینان دارید؟')) return;

    startTransition(async () => {
      const result = await deleteSlider(id);

      if (result.success) {
        setSliders((prev) => prev.filter((slider) => slider.id !== id));
      } else {
        alert(result.error || 'خطا در حذف اسلایدر');
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
      } else {
        alert(result.error || 'خطا در تغییر وضعیت اسلایدر');
      }
    });
  };

  return (
    <>
      <div className="px-12 mt-7 py-5 h-181 overflow-y-scroll">
        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-12 rtl w-full gap-x-5">
          {/* Photo */}
          <div className="col-span-10">
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
            className="col-span-2 py-3 bg-orange font-iranYekan outline-none text-lg text-white rounded-lg cursor-pointer border-b-4 border-[#a33f00] hover:border-transparent hover:translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? 'در حال ثبت...' : 'ثبت اطلاعات'}
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
                    onClick={() => handleDelete(slider.id)}
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
    </>
  );
};

export default SliderManagement;
