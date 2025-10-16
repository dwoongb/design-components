'use client';

import { semanticTokens } from '@styles/semanticTokens';

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
  const btn = semanticTokens.button;

  return (
    <button
      css={{
        ...btn.base,
        backgroundColor: btn[variant].backgroundColor,
        color: btn[variant].color,
        ...btn.size[size],

        border:
          variant === 'outline'
            ? `${btn[variant].borderWidth} ${btn[variant].borderStyle} ${btn[variant].borderColor}`
            : btn.base.border,

        '&:not(:disabled):hover': {
          backgroundColor: btn[variant].hover.backgroundColor,
          color:
            variant === 'outline'
              ? btn[variant].hover.color
              : btn[variant].color,
        },
        ...(disabled ? btn.disabled : {}),
      }}
      className={className}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
