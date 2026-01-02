'use client';

// Next Imports
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Components
import CategoryAllIcon from '@/components/icons/CategoryAllIcon';

// Types
import type { ProjectCategory } from '@/features/projects/categories';
import { PROJECT_CATEGORIES, categoryLabels } from '@/features/projects/categories';

interface FiltersProps {
  selectedCategory: ProjectCategory;
}

const Filters = ({ selectedCategory }: FiltersProps) => {
  const pathname = usePathname();

  const filterItems = [
    {
      key: PROJECT_CATEGORIES.all,
      label: categoryLabels.all,
      icon: CategoryAllIcon,
    },
    {
      key: PROJECT_CATEGORIES.website,
      label: categoryLabels.website,
      icon: null,
    },
    {
      key: PROJECT_CATEGORIES.application,
      label: categoryLabels.application,
      icon: null,
    },
    {
      key: PROJECT_CATEGORIES.instagram,
      label: categoryLabels.instagram,
      icon: null,
    },
    {
      key: PROJECT_CATEGORIES.uiux,
      label: categoryLabels.uiux,
      icon: null,
    },
    {
      key: PROJECT_CATEGORIES.content,
      label: categoryLabels.content,
      icon: null,
    },
  ];

  const getFilterUrl = (category: string) => {
    if (category === 'all') {
      return pathname;
    }
    return `${pathname}?category=${category}`;
  };

  return (
    <div className="w-full border-b border-[#CBCBCB] mt-9 md:mt-11 lg:mt-20 flex justify-start lg:justify-center items-center overflow-x-auto [--webkit-overflow-scrolling:touch] px-0 sm:px-3 lg:px-0">
      <ul className="rtl font-iranYekan font-medium text-[#4C4C4C] flex w-max gap-x-10 px-4 md:px-0">
        {filterItems.map((item) => {
          const isActive = selectedCategory === item.key;
          const Icon = item.icon;

          return (
            <li key={item.key} className="whitespace-nowrap flex-shrink-0">
              <Link
                href={getFilterUrl(item.key)}
                scroll={false}
                replace
                className={`
                  flex gap-2 border-b-[3px] lg:pb-6 pb-4 group transition-all duration-200
                  ${
                    isActive
                      ? 'text-text-primary border-text-primary'
                      : 'border-transparent hover:text-text-primary hover:border-text-primary'
                  }
                `}
              >
                {Icon && (
                  <Icon
                    className={`
                      transition-colors duration-200 
                      ${isActive ? 'text-primary' : 'text-[#4C4C4C] group-hover:text-primary'}
                    `}
                  />
                )}
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filters;
