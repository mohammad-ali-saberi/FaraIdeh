'use client';

interface ILockIconProps {
  size?: string;
  className?: string;
}

const LockIcon = ({ size = '19', className }: ILockIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_939_932)">
        <path
          d="M1.33398 10.6667C1.33398 8.78107 1.33398 7.83827 1.91977 7.25247C2.50556 6.66667 3.44836 6.66667 5.33398 6.66667H10.6673C12.5529 6.66667 13.4957 6.66667 14.0815 7.25247C14.6673 7.83827 14.6673 8.78107 14.6673 10.6667C14.6673 12.5523 14.6673 13.4951 14.0815 14.0809C13.4957 14.6667 12.5529 14.6667 10.6673 14.6667H5.33398C3.44836 14.6667 2.50556 14.6667 1.91977 14.0809C1.33398 13.4951 1.33398 12.5523 1.33398 10.6667Z"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path d="M8 9.33333V12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path
          d="M4 6.66666V5.33333C4 3.12419 5.79086 1.33333 8 1.33333C10.2091 1.33333 12 3.12419 12 5.33333V6.66666"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default LockIcon;
