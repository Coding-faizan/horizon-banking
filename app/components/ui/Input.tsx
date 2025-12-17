import { cn } from "@/lib/utils";
import * as React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({
  label,
  error,
  id,
  className = "",
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

      <input
        id={inputId}
        className={cn(
          "rounded-lg px-2.5 h-10 text-sm",
          "input-border rounded-lg",
          "focus:outline-none focus:ring-1 focus:ring-blue-500",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          error && "border-red-500 focus:ring-red-500",
          className
        )}
        {...props}
      />

      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
}
