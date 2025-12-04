'use client';

// Next Imports
import Image from 'next/image';

// Components
import Input from '@/component/Input';
import TrashIcon from '@/component/icons/dashboard/TrashIcon';

const MainSlider = () => {
  return (
    <>
      <div className="px-12 mt-7 py-5 h-181 overflow-y-scroll">
        {/* Form */}
        <form className="grid grid-cols-12 rtl w-full gap-x-5">
          {/* Photo */}
          <div className="col-span-10">
            <Input
              type="text"
              name="photo"
              id="photo"
              placeholder=" "
              required={true}
              label="لینک عکس"
              htmlFor="photo"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="col-span-2 py-3 bg-orange font-iranYekan outline-none text-lg text-white rounded-lg cursor-pointer border-b-4 border-[#a33f00] hover:border-transparent hover:translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ثبت اطلاعات
          </button>
        </form>

        <div className="grid grid-cols-3 mt-10 gap-x-12 gap-y-8">
          <div className="relative w-full h-80 overflow-hidden rounded-xl">
            <Image
              src="https://s6.uupload.ir/files/adobestock_310133662_x75l.png"
              alt="ImageSlider"
              fill
              className="object-cover object-center"
            />

            <button className="absolute top-3 left-3 bg-primary rounded-lg p-2 border border-white cursor-pointer group hover:bg-white hover:border-primary transition-all duration-200">
              <TrashIcon size="24" className="text-white group-hover:text-primary" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSlider;
