'use client';

// Components
import Container from './Container';

interface ILineProps {
  className?: string;
}

const Line = ({ className }: ILineProps) => {
  return (
    <Container>
      <div className={`w-full border-b border-[#EBEBEB] ${className}`}></div>
    </Container>
  );
};

export default Line;
