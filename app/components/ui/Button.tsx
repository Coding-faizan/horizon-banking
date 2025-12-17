import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
}

export const Button = ({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg text-base font-semibold transition focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants: Record<string, string> = {
    primary: "bg-primary text-white focus:ring-blue-500",
    ghost: "text-primary bg-transparent hover:bg-gray-100 focus:ring-gray-400",
  };

  return (
    <button
      className={`
        ${variant !== "ghost" && baseStyles}
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${variant === "ghost" ? "" : "py-2.5 px-4"}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
