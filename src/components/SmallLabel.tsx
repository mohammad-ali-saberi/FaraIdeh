'use client';

interface ISmallLabelProps {
  title: string;
  color: string;
  bgColor: string;
}

const SmallLabel = ({ title, color, bgColor }: ISmallLabelProps) => {
  return (
    <div
      className={`px-3 sm:px-4 py-2 flex items-center justify-center rounded-full`}
      style={{ backgroundColor: bgColor }}
    >
      <p className={`font-bold text-xs sm:text-sm`} style={{ color: color }}>
        {title}
      </p>
    </div>
  );
};

export default SmallLabel;
