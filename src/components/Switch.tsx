'use client';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

const Switch = ({ checked, onChange, label }: SwitchProps) => {
  return (
    <div className="flex items-center justify-between w-full bg-white rounded-lg shadow-md shadow-[#EDEFF1] px-4 py-4">
      {label && <span className="text-text-description font-iranYekan text-sm">{label}</span>}

      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative w-12 h-7 rounded-full transition-colors duration-300 cursor-pointer ${
          checked ? 'bg-primary' : 'bg-gray-300'
        }`}
      >
        <span
          className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
            checked ? 'translate-x-0' : 'translate-x-5'
          }`}
        />
      </button>
    </div>
  );
};

export default Switch;
