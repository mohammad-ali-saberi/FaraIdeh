'use client';

interface IUserIconProps {
  size?: string;
}

const UserIcon = ({ size = '35' }: IUserIconProps) => {
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
        d="M15 5C9.48 5 5 9.48 5 15C5 20.52 9.48 25 15 25C20.52 25 25 20.52 25 15C25 9.48 20.52 5 15 5ZM15 8C16.66 8 18 9.34 18 11C18 12.66 16.66 14 15 14C13.34 14 12 12.66 12 11C12 9.34 13.34 8 15 8ZM15 22.2C12.5 22.2 10.29 20.92 9 18.98C9.03 16.99 13 15.9 15 15.9C16.99 15.9 20.97 16.99 21 18.98C19.71 20.92 17.5 22.2 15 22.2Z"
        fill="#C3CAD9"
      />
    </svg>
  );
};

export default UserIcon;
