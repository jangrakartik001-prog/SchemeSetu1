import React from 'react';
import { AlertCircle } from 'lucide-react';

interface SelectFieldProps {
  id: string;
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[] | string[];
  placeholder?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  disabled?: boolean;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  id,
  label,
  name,
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  required = false,
  error,
  helperText,
  disabled = false,
}) => {
  return (
    <div className="w-full flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-slate-800 flex items-center gap-1">
        <span>{label}</span>
        {required && (
          <span className="text-red-600 font-bold text-base leading-none" title="Required field">
            *
          </span>
        )}
      </label>

      <div className="relative rounded-md shadow-2xs">
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : helperText ? `${id}-help` : undefined}
          className={`block w-full rounded-md border text-slate-900 text-sm transition-colors py-2.5 px-3.5 bg-white ${
            error
              ? 'border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500 bg-red-50/20'
              : 'border-slate-300 hover:border-slate-400 focus:border-blue-700 focus:ring-1 focus:ring-blue-700'
          } ${disabled ? 'bg-slate-100 cursor-not-allowed text-slate-500' : ''}`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => {
            const val = typeof opt === 'string' ? opt : opt.value;
            const lbl = typeof opt === 'string' ? opt : opt.label;
            return (
              <option key={val} value={val}>
                {lbl}
              </option>
            );
          })}
        </select>
      </div>

      {error ? (
        <p id={`${id}-error`} className="text-xs font-medium text-red-600 flex items-center gap-1 mt-0.5 animate-fadeIn">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </p>
      ) : helperText ? (
        <p id={`${id}-help`} className="text-xs text-slate-500 mt-0.5">
          {helperText}
        </p>
      ) : null}
    </div>
  );
};
