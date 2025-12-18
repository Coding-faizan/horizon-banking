import { cn } from '@/lib/utils';
import * as React from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export function Input({
  label,
  error,
  id,
  icon,
  className = '',
  ...props
}: TextInputProps) {
  const inputId = id ?? React.useId();

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium">
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</div>
        )}
        <input
          id={inputId}
          className={cn(
            'rounded-lg pr-2.5 py-2.5 pl-2.5 text-sm',
            'input-border rounded-lg',
            'focus:outline-none focus:ring-1 focus:ring-blue-500',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            icon && 'pl-9',
            error && 'border-red-500 focus:ring-red-500'
          )}
          {...props}
        />
      </div>

      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
}
