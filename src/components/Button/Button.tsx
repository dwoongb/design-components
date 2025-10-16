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
  const baseStyles = {
    border: 'none',
    borderRadius: '0.375rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    fontFamily: 'inherit',
  };

  const disabledStyles = {
    opacity: 0.5,
    cursor: 'not-allowed',
  };
  const variantStyles = {
    primary: {
      backgroundColor: '#3b82f6',
      color: 'white',
      '&:hover:not(:disabled)': {
        backgroundColor: '#2563eb',
      },
    },
    secondary: {
      backgroundColor: '#6b7280',
      color: 'white',
      '&:hover:not(:disabled)': {
        backgroundColor: '#4b5563',
      },
    },
    outline: {
      backgroundColor: 'transparent',
      border: '2px solid #3b82f6',
      color: '#3b82f6',
      '&:hover:not(:disabled)': {
        backgroundColor: '#3b82f6',
        color: 'white',
      },
    },
  };

  const sizeStyles = {
    sm: {
      padding: '0.375rem 0.75rem',
      fontSize: '0.875rem',
      '@media (min-width: 768px)': {
        padding: '0.5rem 1rem',
        fontSize: '0.9375rem',
      },
    },
    md: {
      padding: '0.5rem 1rem',
      fontSize: '1rem',
      '@media (min-width: 768px)': {
        padding: '0.625rem 1.25rem',
        fontSize: '1.0625rem',
      },
    },
    lg: {
      padding: '0.75rem 1.5rem',
      fontSize: '1.125rem',
      '@media (min-width: 768px)': {
        padding: '0.875rem 1.75rem',
        fontSize: '1.25rem',
      },
    },
  };
  return (
    <button
      css={{
        ...baseStyles,
        ...(disabled ? disabledStyles : {}),
        ...variantStyles[variant],
        ...sizeStyles[size],
      }}
      className={className}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
