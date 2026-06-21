'use client';

// Components
import EyeIcon from '@/components/icons/dashboard/EyeIcon';
import EyeSlashIcon from '@/components/icons/login/EyeSlashIcon';

interface PasswordToggleProps {
  show: boolean;
  onToggle: () => void;
  disabled?: boolean;
}

const PasswordToggle = ({ show, onToggle, disabled }: PasswordToggleProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={disabled}
      tabIndex={-1}
      className="text-gray-400 hover:text-gray-500 transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:text-gray-400"
      aria-label={show ? 'پنهان کردن رمز عبور' : 'نمایش رمز عبور'}
    >
      {show ? <EyeSlashIcon size="24" /> : <EyeIcon size="24" />}
    </button>
  );
};

export default PasswordToggle;
