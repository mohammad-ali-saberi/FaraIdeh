'use client';

interface ILargeLabelProps {
  label: string;
  subLabel: string;
  color?: string;
}

const LargeLabel = ({ label, subLabel, color }: ILargeLabelProps) => {
  return (
    <>
      {/* Desktop */}
      <div className="relative w-full xl:flex items-center justify-center -mt-14 hidden">
        <p className="text-[#F7F8FB] font-bold text-[200px]" style={{ color: color }}>
          {label}
        </p>
        <p className="absolute top-1/2 font-iranYekan font-black text-[#4D5E80] text-3xl">
          {subLabel}
        </p>
      </div>

      {/* Mobile/Tablet */}
      <div className="xl:hidden mt-3 mb-1 lg:mb-12">
        <h2
          className="text-[#F7F8FB] font-bold text-5xl sm:text-7xl md:text-8xl text-center relative"
          style={{ color: color }}
        >
          {label}
          <span className="absolute inset-0 flex items-center justify-center font-iranYekan font-black text-[#4D5E80] text-sm sm:text-xl md:text-2xl">
            {subLabel}
          </span>
        </h2>
      </div>
    </>
  );
};

export default LargeLabel;
