'use client';

interface IArrToTopIconProps {
  size?: string;
  className?: string;
}

const ArrToTopIcon = ({ size = '38', className }: IArrToTopIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.9231 25.3812C30.5015 25.8028 29.8418 25.8411 29.3769 25.4962L29.2437 25.3812L19 15.1381L8.7564 25.3812C8.33481 25.8028 7.67509 25.8411 7.2102 25.4962L7.07702 25.3812C6.65543 24.9596 6.6171 24.2999 6.96204 23.835L7.07702 23.7018L18.1604 12.6185C18.5819 12.1969 19.2417 12.1586 19.7065 12.5035L19.8397 12.6185L30.9231 23.7018C31.3868 24.1656 31.3868 24.9174 30.9231 25.3812Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrToTopIcon;
