import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className = '', hover = false }: CardProps) => {
  const baseClasses = 'bg-white rounded-lg shadow-md border border-gray-200';
  const hoverClasses = hover ? 'hover:shadow-lg transition-shadow duration-200' : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
