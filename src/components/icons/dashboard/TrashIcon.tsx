'use client';

interface ITrashIconProps {
  size?: string;
  className?: string;
}

const TrashIcon = ({ size = '19', className }: ITrashIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.1876 8.25H4.8125"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M25.8952 11.6875L25.2627 21.1738C25.0194 24.8243 24.8977 26.6496 23.7083 27.7622C22.5189 28.875 20.6896 28.875 17.031 28.875H15.9677C12.3091 28.875 10.4798 28.875 9.29037 27.7622C8.101 26.6496 7.97931 24.8243 7.73593 21.1738L7.10352 11.6875"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13.0625 15.125L13.75 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M19.9375 15.125L19.25 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8.9375 8.25C9.01433 8.25 9.05275 8.25 9.08758 8.24912C10.2198 8.22042 11.2187 7.5005 11.6039 6.43544C11.6158 6.40267 11.6279 6.36624 11.6522 6.29333L11.7857 5.89285C11.8997 5.55098 11.9567 5.38004 12.0322 5.2349C12.3338 4.65585 12.8916 4.25375 13.5363 4.15081C13.6979 4.125 13.8781 4.125 14.2385 4.125H18.7615C19.1219 4.125 19.3021 4.125 19.4637 4.15081C20.1084 4.25375 20.6663 4.65585 20.9678 5.2349C21.0434 5.38004 21.1003 5.55098 21.2143 5.89285L21.3478 6.29333C21.372 6.36614 21.3843 6.4027 21.3961 6.43544C21.7814 7.5005 22.7802 8.22042 23.9125 8.24912C23.9473 8.25 23.9856 8.25 24.0625 8.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default TrashIcon;
