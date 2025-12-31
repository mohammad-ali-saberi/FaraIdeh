'use client';

interface ICategoryIconProps {
  size?: string;
  className?: string;
}

const CategoryIcon = ({ size = '19', className }: ICategoryIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_128_324)">
        <path
          d="M3.95801 7.91668H5.54134C7.12467 7.91668 7.91634 7.12501 7.91634 5.54168V3.95834C7.91634 2.37501 7.12467 1.58334 5.54134 1.58334H3.95801C2.37467 1.58334 1.58301 2.37501 1.58301 3.95834V5.54168C1.58301 7.12501 2.37467 7.91668 3.95801 7.91668Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.458 7.91668H15.0413C16.6247 7.91668 17.4163 7.12501 17.4163 5.54168V3.95834C17.4163 2.37501 16.6247 1.58334 15.0413 1.58334H13.458C11.8747 1.58334 11.083 2.37501 11.083 3.95834V5.54168C11.083 7.12501 11.8747 7.91668 13.458 7.91668Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.458 17.4166H15.0413C16.6247 17.4166 17.4163 16.625 17.4163 15.0416V13.4583C17.4163 11.875 16.6247 11.0833 15.0413 11.0833H13.458C11.8747 11.0833 11.083 11.875 11.083 13.4583V15.0416C11.083 16.625 11.8747 17.4166 13.458 17.4166Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.95801 17.4166H5.54134C7.12467 17.4166 7.91634 16.625 7.91634 15.0416V13.4583C7.91634 11.875 7.12467 11.0833 5.54134 11.0833H3.95801C2.37467 11.0833 1.58301 11.875 1.58301 13.4583V15.0416C1.58301 16.625 2.37467 17.4166 3.95801 17.4166Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default CategoryIcon;
