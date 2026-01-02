'use client';

interface ITimeIconProps {
  size?: string;
  className?: string;
}

const TimeIcon = ({ size = '19', className }: ITimeIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.7913 14.0006C24.7913 19.9611 19.9602 24.7922 13.9997 24.7922C8.03917 24.7922 3.20801 19.9611 3.20801 14.0006C3.20801 8.04006 8.03917 3.20889 13.9997 3.20889C19.9602 3.20889 24.7913 8.04006 24.7913 14.0006Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.0038 17.4334L13.6055 14.8095V9.15469"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TimeIcon;
