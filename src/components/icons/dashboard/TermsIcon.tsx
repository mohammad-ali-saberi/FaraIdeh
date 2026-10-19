interface ITermsIcon {
  className?: string;
  size?: string;
}

const TermsIcon = ({ className, size = '28' }: ITermsIcon) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9 3.5h7.4L22 9.1v13.4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M16 3.5v6h6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path
        d="M10.5 14h7M10.5 18h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default TermsIcon;
