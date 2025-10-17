'use client';

import { twMerge } from 'tailwind-merge';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}: ButtonProps) => {
  // Base styles - applied to all buttons
  const baseClasses =
    'font-medium rounded-md transition-colors cursor-pointer border-none';

  // Variant styles
  const variantClasses = {
    primary:
      'bg-btn-primary text-white hover:bg-btn-primary-hover active:bg-btn-primary-active',
    secondary:
      'bg-btn-secondary text-white hover:bg-btn-secondary-hover active:bg-btn-secondary-active',
    outline:
      'bg-transparent border-2 border-solid border-btn-outline text-btn-outline hover:bg-btn-outline hover:text-white',
  };

  // Size styles
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  // Disabled styles
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      className={twMerge(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabledClasses,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
