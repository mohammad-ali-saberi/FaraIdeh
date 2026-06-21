'use client';

// React Imports
import { useEffect, useState } from 'react';

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
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
      document.body.style.overflow = 'hidden';
    } else if (shouldRender) {
      setIsClosing(true);
      document.body.style.overflow = 'unset';
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, 180);
      return () => clearTimeout(timer);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, shouldRender]);

  if (!shouldRender) return null;

  const sizeClasses = {
    sm: 'w-full max-w-sm',
    md: 'w-full max-w-xl',
    lg: 'w-full max-w-3xl',
    xl: 'w-full max-w-5xl',
  };

  const getButtonClasses = (variant: string) => {
    switch (variant) {
      case 'danger':
        return 'bg-red-500 hover:bg-red-600 text-white shadow-sm shadow-red-200';
      case 'secondary':
        return 'bg-gray-100 hover:bg-gray-200 text-gray-700';
      default:
        return 'bg-primary hover:bg-primary/90 text-white shadow-sm shadow-primary/20';
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-200 ${
          isClosing ? 'opacity-0' : 'opacity-100 animate-modal-backdrop'
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div
          className={`${sizeClasses[size]} bg-white rounded-2xl shadow-2xl shadow-black/10 max-h-[85vh] overflow-y-auto transition-all duration-200 ${
            isClosing ? 'opacity-0 scale-95 translate-y-2' : 'opacity-100 animate-modal-content'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white/95 backdrop-blur-sm z-30 border-b border-gray-100 px-7 py-5 flex items-center justify-between">
            <h2 className="font-iranYekan font-extrabold text-xl text-gray-800">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-1 transition-all duration-200 cursor-pointer"
              aria-label="بستن"
            >
              <CloseCircleIcon size="26" />
            </button>
          </div>

          {/* Content */}
          <div className="px-7 py-5 font-iranYekan text-gray-600">{children}</div>

          {/* Footer with Actions */}
          {(actions.length > 0 || linkButtons.length > 0) && (
            <div className="border-t border-gray-100 px-7 py-4 flex gap-3 justify-end bg-gray-50/50">
              {linkButtons.length > 0 &&
                linkButtons.map((linkButton, index) => (
                  <Link
                    key={index}
                    href={linkButton.link || '#'}
                    target="_blank"
                    className={`${getButtonClasses(linkButton.variant || 'primary')} font-iranYekan font-medium text-sm px-5 py-2.5 rounded-lg transition-all duration-200 flex items-center gap-2`}
                  >
                    <EyeIcon size="18" />
                    {linkButton.label}
                  </Link>
                ))}

              {actions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.onClick}
                  className={`${getButtonClasses(action.variant || 'primary')} font-iranYekan font-medium text-sm px-5 py-2.5 rounded-lg transition-all duration-200 cursor-pointer`}
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
