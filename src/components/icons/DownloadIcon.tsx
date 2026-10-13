interface IDownloadIconProps {
  className?: string;
  size?: number;
}

const DownloadIcon = ({ className, size }: IDownloadIconProps) => {
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
      <path d="M12 3.25v11.5" />
      <path d="M7.5 10.25 12 14.75l4.5-4.5" />
      <path d="M4.25 18.25v.75a2.25 2.25 0 0 0 2.25 2.25h11a2.25 2.25 0 0 0 2.25-2.25v-.75" />
    </svg>
  );
};

export default DownloadIcon;
