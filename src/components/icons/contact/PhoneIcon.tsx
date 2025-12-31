'use client';

interface IPhoneIconProps {
  size?: string;
}

const PhoneIcon = ({ size = '35' }: IPhoneIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.2037 18.25L19.6637 17.96C19.0537 17.89 18.4537 18.1 18.0237 18.53L16.1837 20.37C13.3537 18.93 11.0337 16.62 9.59367 13.78L11.4437 11.93C11.8737 11.5 12.0837 10.9 12.0137 10.29L11.7237 7.77C11.6037 6.76 10.7537 6 9.73367 6H8.00367C6.87367 6 5.93367 6.94 6.00367 8.07C6.53367 16.61 13.3637 23.43 21.8937 23.96C23.0237 24.03 23.9637 23.09 23.9637 21.96V20.23C23.9737 19.22 23.2137 18.37 22.2037 18.25Z"
        fill="#C3CAD9"
      />
    </svg>
  );
};

export default PhoneIcon;
