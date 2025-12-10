'use client';

// React Imports
import { useEffect } from 'react';

// Next Imports
import Link from 'next/link';

// Components
import CloseCircleIcon from './icons/blogs/CloseCircleIcon';
import EyeIcon from './icons/dashboard/EyeIcon';

export interface ModalAction {
  label: string;
  onClick?: () => void;
  link?: string;
  variant?: 'primary' | 'secondary' | 'danger';
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  actions?: ModalAction[];
  linkButtons?: ModalAction[];
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  actions = [],
  linkButtons = [],
  size = 'md',
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'w-96',
    md: 'w-[600px]',
    lg: 'w-[800px]',
    xl: 'w-[1000px]',
  };

  const getButtonClasses = (variant: string) => {
    switch (variant) {
      case 'danger':
        return 'bg-red-500 hover:bg-red-600 text-white';
      case 'secondary':
        return 'bg-gray-300 hover:bg-gray-400 text-gray-800';
      default:
        return 'bg-primary hover:bg-primary/80 text-white';
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="
            fixed inset-0 z-40 
            bg-black/5
            backdrop-blur-md 
            backdrop-saturate-150
            transition-opacity
        "
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div
          className={`${sizeClasses[size]} bg-white rounded-xl shadow-xl max-h-[80vh] overflow-y-auto`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white z-30 shadow-xs border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <h2 className="font-iranYekan font-extrabold text-2xl text-gray-800">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold cursor-pointer"
            >
              <CloseCircleIcon size="28" />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-4">{children}</div>

          {/* Footer with Actions */}
          {actions.length > 0 && (
            <div className="border-t border-gray-200 px-6 py-4 flex gap-3 justify-end">
              {linkButtons.length > 0 &&
                linkButtons.map((linkButton, index) => (
                  <Link
                    key={index}
                    href={linkButton.link || '#'}
                    target="_blank"
                    className={`${getButtonClasses(linkButton.variant || 'primary')} font-iranYekan font-semibold px-6 py-2 rounded-md transition-colors flex items-center gap-2`}
                  >
                    <EyeIcon size="20" />
                    {linkButton.label}
                  </Link>
                ))}

              {actions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.onClick}
                  className={`${getButtonClasses(action.variant || 'primary')} font-iranYekan font-semibold px-6 py-2 rounded-md transition-colors cursor-pointer`}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
