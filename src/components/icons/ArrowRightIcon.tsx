interface IArrowRightIconIconProps {
  className?: string;
  size?: number;
}

const ArrowRightIcon = ({ className, size }: IArrowRightIconIconProps) => {
  return (
    <svg
      width={size || 20}
      height={size || 20}
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33333 9.16667C2.8731 9.16667 2.5 9.53976 2.5 10C2.5 10.4602 2.8731 10.8333 3.33333 10.8333L15.0715 10.8333L11.0774 14.8274C10.752 15.1528 10.752 15.6805 11.0774 16.0059C11.4029 16.3314 11.9305 16.3314 12.2559 16.0059L17.0833 11.1785C17.7342 10.5276 17.7342 9.47236 17.0833 8.82149L12.2559 3.99408C11.9305 3.66864 11.4028 3.66864 11.0774 3.99408C10.752 4.31952 10.752 4.84715 11.0774 5.17259L15.0715 9.16667L3.33333 9.16667Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowRightIcon;
