'use client';

import React from 'react';

type Props = {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  className?: string;
  title?: string;
};

export default function CustomIconEmoji({
  size,
  width,
  height,
  className,
  title = 'Custom icon',
}: Props) {
  const w = size
    ? typeof size === 'number'
      ? `${size}px`
      : size
    : (typeof width === 'number' ? `${width}px` : width) || '29px';
  const h = size
    ? typeof size === 'number'
      ? `${(Number(size) / 29) * 30}px`
      : undefined
    : (typeof height === 'number' ? `${height}px` : height) || '30px';

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 29 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
    >
      <path
        d="M18.783 13.644C19.7631 13.644 20.5577 12.8494 20.5577 11.8693C20.5577 10.8892 19.7631 10.0946 18.783 10.0946C17.8029 10.0946 17.0083 10.8892 17.0083 11.8693C17.0083 12.8494 17.8029 13.644 18.783 13.644Z"
        fill="white"
      />
      <path
        d="M10.501 13.644C11.4811 13.644 12.2757 12.8494 12.2757 11.8693C12.2757 10.8892 11.4811 10.0946 10.501 10.0946C9.52087 10.0946 8.72632 10.8892 8.72632 11.8693C8.72632 12.8494 9.52087 13.644 10.501 13.644Z"
        fill="white"
      />
      <path
        d="M14.642 21.9259C17.3395 21.9259 19.6348 19.9619 20.5576 17.1934H8.72632C9.64916 19.9619 11.9444 21.9259 14.642 21.9259Z"
        fill="white"
      />
      <path
        d="M14.6301 2.99585C8.09925 2.99585 2.81067 8.29626 2.81067 14.8271C2.81067 21.358 8.09925 26.6584 14.6301 26.6584C21.1728 26.6584 26.4732 21.358 26.4732 14.8271C26.4732 8.29626 21.1728 2.99585 14.6301 2.99585ZM14.6419 24.2921C9.41252 24.2921 5.17692 20.0566 5.17692 14.8271C5.17692 9.5977 9.41252 5.3621 14.6419 5.3621C19.8714 5.3621 24.107 9.5977 24.107 14.8271C24.107 20.0566 19.8714 24.2921 14.6419 24.2921Z"
        fill="white"
      />
    </svg>
  );
}
