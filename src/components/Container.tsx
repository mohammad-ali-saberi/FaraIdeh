'use client';

interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: IContainerProps) => {
  return <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
};

export default Container;
