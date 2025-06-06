import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick 
}) => {
  const baseClasses = "font-medium font-['Afacad'] rounded-full transition-all duration-300 inline-block text-center";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-[#b87d2e] via-[#f1d3a0] to-[#b87d2e] hover:from-amber-700 hover:via-yellow-500 hover:to-amber-700 text-black",

    secondary: "bg-white hover:bg-gray-100 text-black border border-gray-200"
  };
  
  const sizeClasses = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button 
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;