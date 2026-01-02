'use client';

interface IArrNewsletterIconProps {
  className?: string;
}

const ArrNewsletterIcon = ({ className }: IArrNewsletterIconProps) => {
  return (
    <svg
      width="13"
      height="14"
      className={className}
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1818 6.79492H1"
        stroke="#0A2FB6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.09091 12.5896L1 6.79482L6.09091 1"
        stroke="#0A2FB6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrNewsletterIcon;
