'use client';

interface IMessageIconProps {
  size?: string;
  className?: string;
}

const MessageIcon = ({ size = '35', className }: IMessageIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 5H7C5.9 5 5.01 5.9 5.01 7L5 25L9 21H23C24.1 21 25 20.1 25 19V7C25 5.9 24.1 5 23 5ZM10 12H20C20.55 12 21 12.45 21 13C21 13.55 20.55 14 20 14H10C9.45 14 9 13.55 9 13C9 12.45 9.45 12 10 12ZM16 17H10C9.45 17 9 16.55 9 16C9 15.45 9.45 15 10 15H16C16.55 15 17 15.45 17 16C17 16.55 16.55 17 16 17ZM20 11H10C9.45 11 9 10.55 9 10C9 9.45 9.45 9 10 9H20C20.55 9 21 9.45 21 10C21 10.55 20.55 11 20 11Z"
        fill="#C3CAD9"
      />
    </svg>
  );
};

export default MessageIcon;
