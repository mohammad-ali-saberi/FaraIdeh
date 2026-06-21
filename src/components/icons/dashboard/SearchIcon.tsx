'use client';

interface ISearchIcon {
  size?: string;
  className?: string;
}

const SearchIcon = ({ size = '32', className = 'text-[#BBBBBB]' }: ISearchIcon) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="17.6489"
        cy="17.6499"
        r="13.4828"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.0273 27.7277L32.3134 33"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
