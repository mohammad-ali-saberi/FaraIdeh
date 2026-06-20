'use client';

// React Imports
import { useEffect, useRef } from 'react';

// Components
import EditIcon from '@/components/icons/blogs/EditIcon';
import TrashIcon from '@/components/icons/dashboard/TrashIcon';

interface RowContextMenuProps {
  x: number;
  y: number;
  onEdit: () => void;
  onDelete: () => void;
  onClose: () => void;
}

const RowContextMenu = ({ x, y, onEdit, onDelete, onClose }: RowContextMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      style={{ top: y, left: x }}
      className="fixed z-50 bg-white rounded-lg shadow-xl border border-gray-200 py-2 w-40 font-iranYekan rtl animate-fadeIn"
    >
      <button
        onClick={onEdit}
        className="w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer flex items-center gap-2"
      >
        <EditIcon size="20" className="text-gray-700" />
        ویرایش
      </button>

      <button
        onClick={onDelete}
        className="w-full text-right px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors cursor-pointer flex items-end gap-2"
      >
        <TrashIcon size="22" className="text-red-500" />
        حذف
      </button>
    </div>
  );
};

export default RowContextMenu;
