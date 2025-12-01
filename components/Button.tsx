import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center relative overflow-hidden transition-all duration-300 font-medium tracking-wider uppercase text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-primary text-secondary hover:bg-primary/90 border border-primary shadow-lg hover:shadow-xl hover:shadow-primary/20 before:absolute before:inset-0 before:bg-gradient-to-r before:from-accent/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
    secondary: "bg-secondary text-primary hover:bg-secondary/90 border border-secondary shadow-lg hover:shadow-xl hover:shadow-secondary/20 before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
    outline: "bg-transparent text-white border-2 border-white/40 hover:bg-white hover:text-primary backdrop-blur-md shadow-lg hover:shadow-xl hover:shadow-white/10 hover:border-white before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
    ghost: "bg-transparent text-primary hover:bg-primary/10 hover:text-primary/80 before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-xs min-h-[36px]",
    md: "px-7 py-3.5 min-h-[44px]",
    lg: "px-10 py-4 text-base min-h-[52px]",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};