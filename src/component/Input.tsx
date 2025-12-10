'use client';

interface InputProps {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  label?: string;
  htmlFor: string;
  disabled?: boolean;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  type,
  label,
  name,
  id,
  htmlFor,
  placeholder,
  required,
  disabled,
  value,
  onChange,
}: InputProps) => {
  return (
    <div
      className={`flex items-center justify-center pr-4 w-full bg-white rounded-lg transition ring-0
        focus-within:ring-2 focus-within:ring-blue-500
        focus-within:ring-offset-2 focus-within:ring-offset-white
        focus-within:shadow-lg ${disabled ? 'opacity-50 cursor-not-allowed border border-[#BEBEBE]' : 'opacity-100 shadow-md shadow-[#EDEFF1]'}`}
    >
      <div className="relative w-full pr-3">
        <input
          className={`peer ${type === 'number' ? 'font-yekanBakhFaNum' : 'font-iranYekan'} outline-none bg-transparent w-full p-3 py-5
            ${disabled ? 'cursor-not-allowed text-[#7D8FB3]' : 'text-text-description placeholder:text-text-description'}
          `}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder || ' '}
          required={required}
          disabled={disabled}
          value={value}
          onChange={onChange}
        />

        <label
          htmlFor={htmlFor}
          className="absolute right-0
            px-2 rounded py-1 bg-white pointer-events-none
            transition-all duration-200 ease-out
            text-text-description
            top-1/2 -translate-y-1/2 text-base
            peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm
            peer-[&:not(:placeholder-shown)]:top-0
            peer-[&:not(:placeholder-shown)]:-translate-y-1/2
            peer-[&:not(:placeholder-shown)]:text-xs font-iranYekan"
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default Input;
