'use client';

import { useEffect } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
  duration?: number;
}

const Toast = ({ message, type, onClose, duration = 5000 }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed top-3 right-3 md:top-6 md:right-6 z-50 animate-slideFromRight">
      <div
        className={`
          flex items-center gap-6 px-5 py-4 rounded-lg shadow-2xl
          font-iranYekan rtl backdrop-blur-sm
          ${
            type === 'success'
              ? 'bg-green-500/95 text-white border-2 border-green-400'
              : 'bg-red-500/95 text-white border-2 border-red-400'
          }
        `}
      >
        {/* Icon */}
        <div className="flex-shrink-0">
          {type === 'success' ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </div>

        {/* Message */}
        <p className="text-sm md:text-base font-medium">{message}</p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className={`flex-shrink-0 ${type === 'success' ? 'hover:bg-green-600' : 'hover:bg-red-600'} rounded-full p-1 transition-all duration-200 cursor-pointer`}
          aria-label="بستن"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;
