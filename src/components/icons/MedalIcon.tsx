interface IMedalIconProps {
  className?: string;
  size?: number;
}

const MedalIcon = ({ className, size }: IMedalIconProps) => {
  return (
    <svg
      width={size || 20}
      height={size || 20}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="8.5" r="5.75" />
      <path d="M15.6 13.4 17.25 22l-5.25-3-5.25 3 1.65-8.6" />
    </svg>
  );
};

export default MedalIcon;
