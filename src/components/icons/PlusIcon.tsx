'use client';

type Props = {
  size?: number | string;
  className?: string;
};

const PlusIcon = ({ size, className }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_132_724)">
        <path
          d="M19.1072 8.27737H11.0777V0.247803H8.40115V8.27737H0.371582V10.9539H8.40115V18.9835H11.0777V10.9539H19.1072V8.27737Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_132_724">
          <rect width="19" height="19" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlusIcon;
