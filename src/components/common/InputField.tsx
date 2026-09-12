import React from 'react';
import { AlertCircle } from 'lucide-react';

interface InputFieldProps {
  id: string;
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: 'text' | 'number' | 'email' | 'tel';
  required?: boolean;
  error?: string;
  prefix?: string;
  helperText?: string;
  min?: number;
  max?: number;
  step?: string | number;
  disabled?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = false,
  error,
  prefix,
  helperText,
  min,
  max,
  step,
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
        {prefix && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 font-medium text-sm">
            {prefix}
          </div>
        )}
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : helperText ? `${id}-help` : undefined}
          className={`block w-full rounded-md border text-slate-900 text-sm transition-colors py-2.5 ${
            prefix ? 'pl-9 pr-3.5' : 'px-3.5'
          } ${
            error
              ? 'border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500 bg-red-50/20'
              : 'border-slate-300 hover:border-slate-400 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 bg-white'
          } ${disabled ? 'bg-slate-100 cursor-not-allowed text-slate-500' : ''}`}
        />
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
