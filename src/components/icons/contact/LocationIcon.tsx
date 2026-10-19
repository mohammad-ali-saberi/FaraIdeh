interface ILocationIconProps {
  size?: string;
  className?: string;
}

const LocationIcon = ({ size = '20', className }: ILocationIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 21C15.5 17.4 18 14.4 18 11.5C18 8.18629 15.3137 5.5 12 5.5C8.68629 5.5 6 8.18629 6 11.5C6 14.4 8.5 17.4 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
};

export default LocationIcon;
