'use client';

type Props = {
  size?: number | string;
  className?: string;
  title?: string;
};

export default function LinkedInIcon({ size = 40, className, title = 'LinkedIn' }: Props) {
  const dimension = typeof size === 'number' ? `${size}px` : size;
  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={title}
      className={className}
    >
      <g clipPath="url(#clip0_991_960)">
        <path
          d="M20 0C8.95313 0 0 8.95313 0 20C0 31.0469 8.95313 40 20 40C31.0469 40 40 31.0469 40 20C40 8.95313 31.0469 0 20 0ZM14.4062 28.3672H10.5078V15.8906H14.4062V28.3672ZM12.3516 14.3281H12.3203C10.9062 14.3281 9.99219 13.375 9.99219 12.1641C9.99219 10.9297 10.9375 10 12.375 10C13.8125 10 14.6953 10.9297 14.7266 12.1641C14.7344 13.3672 13.8203 14.3281 12.3516 14.3281ZM30 28.3672H25.5781V21.9141C25.5781 20.2266 24.8906 19.0703 23.3672 19.0703C22.2031 19.0703 21.5547 19.8516 21.2578 20.6016C21.1484 20.8672 21.1641 21.2422 21.1641 21.625V28.3672H16.7813C16.7813 28.3672 16.8359 16.9297 16.7813 15.8906H21.1641V17.8516C21.4219 16.9922 22.8203 15.7734 25.0547 15.7734C27.8281 15.7734 30 17.5703 30 21.4297V28.3672Z"
          fill="currentColor"
        />
      </g>
      <title>{title}</title>
    </svg>
  );
}
