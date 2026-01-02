'use client';

type Props = {
  size?: number | string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  color?: string;
};

export default function SearchIcon({
  size = 24,
  strokeWidth = 2,
  className,
  title = 'Search',
  color = '#000000',
}: Props) {
  const dimension = typeof size === 'number' ? `${size}px` : size;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={dimension}
      height={dimension}
      fill="none"
      role="img"
      aria-label={title}
      className={className}
    >
      <circle cx="11" cy="11" r="7" stroke={color} strokeWidth={strokeWidth} />
      <path d="M20 20L16.65 16.65" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <title>{title}</title>
    </svg>
  );
}
