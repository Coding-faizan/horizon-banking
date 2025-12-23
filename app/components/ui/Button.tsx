import { cn } from '@/lib/utils';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

type ButtonVariant = 'primary' | 'link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  asChild?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  fullWidth = false,
  asChild = false,
  className,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';

  const baseStyles =
    'inline-flex items-center justify-center rounded-lg text-base font-semibold transition focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-primary text-white focus:ring-blue-500',
    link: 'text-primary text-sm font-semibold',
  };

  return (
    <Comp
      className={cn(
        baseStyles,
        variants[variant],
        fullWidth && 'w-full',
        variant !== 'link' && 'py-2.5 px-4',
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
