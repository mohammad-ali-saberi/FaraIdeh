interface IBlogShortcutIconProps {
  size?: string;
  className?: string;
}

const BlogShortcutIcon = ({ size = '28', className }: IBlogShortcutIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 6.6C10.4 5.3 8.4 4.7 6 4.7H4.6C3.7 4.7 3 5.4 3 6.3v10.9c0 .9.7 1.6 1.6 1.6H6c2.4 0 4.4.6 6 1.8" />
      <path d="M12 6.6c1.6-1.3 3.6-1.9 6-1.9h1.4c.9 0 1.6.7 1.6 1.6v10.9c0 .9-.7 1.6-1.6 1.6H18c-2.4 0-4.4.6-6 1.8" />
      <path d="M12 6.6v14" />
    </svg>
  );
};

export default BlogShortcutIcon;
