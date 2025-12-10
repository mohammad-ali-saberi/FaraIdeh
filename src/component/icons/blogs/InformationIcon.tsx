'use client';

interface IInformationIconProps {
  size?: string;
  className?: string;
}

const InformationIcon = ({ size = '19', className }: IInformationIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0375 4.96243 13.5 8 13.5C11.0375 13.5 13.5 11.0375 13.5 8C13.5 4.96243 11.0375 2.5 8 2.5ZM1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8ZM8 7.5C8.27613 7.5 8.5 7.72387 8.5 8V10.3333C8.5 10.6095 8.27613 10.8333 8 10.8333C7.72387 10.8333 7.5 10.6095 7.5 10.3333V8C7.5 7.72387 7.72387 7.5 8 7.5ZM8 5.33333C7.6318 5.33333 7.33333 5.63181 7.33333 6C7.33333 6.36819 7.6318 6.66667 8 6.66667H8.00667C8.37487 6.66667 8.67333 6.36819 8.67333 6C8.67333 5.63181 8.37487 5.33333 8.00667 5.33333H8Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default InformationIcon;
