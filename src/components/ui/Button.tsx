import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  size?: 'sm' | 'md' | 'lg';
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}: ButtonProps) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-slate-800 text-white hover:bg-slate-700 focus:ring-slate-500 shadow-md hover:shadow-lg',
    secondary: 'bg-slate-200 text-slate-800 hover:bg-slate-300 focus:ring-slate-500 shadow-md hover:shadow-lg',
    outline: 'border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white focus:ring-slate-500 shadow-md hover:shadow-lg',
    gold: 'bg-amber-500 text-slate-800 hover:bg-amber-600 focus:ring-amber-500 shadow-md hover:shadow-lg font-semibold',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
