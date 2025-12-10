'use client';

interface IEditIconProps {
  size?: string;
  className?: string;
}

const EditIcon = ({ size = '19', className }: IEditIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_239_1255)">
        <path
          d="M14.1866 4.26672L7.8266 10.6267C7.19327 11.26 5.31325 11.5534 4.89325 11.1334C4.47325 10.7134 4.75991 8.83335 5.39325 8.20002L11.7599 1.83337C11.9169 1.66207 12.107 1.52438 12.3187 1.42858C12.5304 1.33278 12.7593 1.28085 12.9917 1.27595C13.2239 1.27107 13.4549 1.31329 13.6704 1.4001C13.8859 1.48691 14.0817 1.61651 14.2457 1.78104C14.4098 1.94557 14.5389 2.14164 14.6251 2.35741C14.7113 2.57319 14.7529 2.80419 14.7474 3.03649C14.7419 3.26879 14.6893 3.49759 14.5929 3.70902C14.4965 3.92045 14.3583 4.11018 14.1866 4.26672Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.33398 2.66669H4.00065C3.2934 2.66669 2.61517 2.94763 2.11507 3.44773C1.61498 3.94783 1.33398 4.62611 1.33398 5.33335V12C1.33398 12.7073 1.61498 13.3856 2.11507 13.8856C2.61517 14.3858 3.2934 14.6667 4.00065 14.6667H11.334C12.8073 14.6667 13.334 13.4667 13.334 12V8.66669"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default EditIcon;
