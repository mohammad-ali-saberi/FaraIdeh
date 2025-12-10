'use client';

interface ITickCircleIconProps {
  size?: string;
  className?: string;
}

const TickCircleIcon = ({ size = '19', className }: ITickCircleIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_939_949)">
        <path
          d="M8.00065 14.6666C11.6673 14.6666 14.6673 11.6666 14.6673 7.99998C14.6673 4.33331 11.6673 1.33331 8.00065 1.33331C4.33398 1.33331 1.33398 4.33331 1.33398 7.99998C1.33398 11.6666 4.33398 14.6666 8.00065 14.6666Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.16602 7.99998L7.05268 9.88665L10.8327 6.11334"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default TickCircleIcon;
