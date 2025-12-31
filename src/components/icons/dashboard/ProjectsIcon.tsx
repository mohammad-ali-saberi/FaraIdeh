'use client';

interface IProjectsIcon {
  className?: string;
  size?: string;
}

const ProjectsIcon = ({ className, size = '28' }: IProjectsIcon) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 19.125C25 19.6 24.7317 20.0125 24.3228 20.225L14.2283 25.775C14.0239 25.925 13.7683 26 13.5 26C13.2317 26 12.9761 25.925 12.7717 25.775L2.67723 20.225C2.47237 20.1197 2.30094 19.9615 2.18154 19.7675C2.06215 19.5736 1.99936 19.3514 2 19.125V7.875C2 7.4 2.26834 6.9875 2.67723 6.775L12.7717 1.225C12.9761 1.075 13.2317 1 13.5 1C13.7683 1 14.0239 1.075 14.2283 1.225L24.3228 6.775C24.7317 6.9875 25 7.4 25 7.875V19.125ZM13.5 3.6875L5.88445 7.875L13.5 12.0625L21.1156 7.875L13.5 3.6875Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ProjectsIcon;
