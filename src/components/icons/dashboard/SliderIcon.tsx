'use client';

interface ISliderIcon {
  className?: string;
}

const SliderIcon = ({ className }: ISliderIcon) => {
  return (
    <svg
      width="28"
      height="28"
      className={className}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.4444 4.55556V22.4444H4.55556V4.55556H22.4444ZM22.4444 2H4.55556C3.15 2 2 3.15 2 4.55556V22.4444C2 23.85 3.15 25 4.55556 25H22.4444C23.85 25 25 23.85 25 22.4444V4.55556C25 3.15 23.85 2 22.4444 2ZM16.2344 13.3211L12.4011 18.2661L9.66667 14.9567L5.83333 19.8889H21.1667L16.2344 13.3211Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SliderIcon;
