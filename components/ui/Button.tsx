import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  href?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  href,
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium transition-all duration-300 active:scale-[0.98] text-base sm:text-lg";
  
  const variants = {
    primary: "bg-indigo-700 hover:bg-indigo-800 text-white shadow-lg shadow-indigo-200 border border-transparent",
    secondary: "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-transparent",
    outline: "bg-transparent border border-slate-300 text-slate-600 hover:border-slate-400 hover:bg-slate-50",
    ghost: "bg-transparent text-slate-500 hover:text-indigo-700 hover:bg-indigo-50/50"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <motion.a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
        whileHover={{ y: -2 }}
      >
        {children}
        {icon}
      </motion.a>
    );
  }

  return (
    <motion.button 
      className={combinedClasses}
      whileHover={{ y: -2 }}
      {...props}
    >
      {children}
      {icon}
    </motion.button>
  );
};