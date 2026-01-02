'use client';

interface IEmailIconProps {
  width?: string;
  height?: string;
}

const EmailIcon = ({ width = '35', height = '30' }: IEmailIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 7H7C5.9 7 5 7.9 5 9V21C5 22.1 5.9 23 7 23H23C24.1 23 25 22.1 25 21V9C25 7.9 24.1 7 23 7ZM22.6 11.25L16.06 15.34C15.41 15.75 14.59 15.75 13.94 15.34L7.4 11.25C7.15 11.09 7 10.82 7 10.53C7 9.86 7.73 9.46 8.3 9.81L15 14L21.7 9.81C22.27 9.46 23 9.86 23 10.53C23 10.82 22.85 11.09 22.6 11.25Z"
        fill="#C3CAD9"
      />
    </svg>
  );
};

export default EmailIcon;
