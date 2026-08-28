import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  ...props
}) {
  const baseStyles = "relative inline-flex items-center justify-center font-medium tracking-wide uppercase transition-all duration-300 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] focus-visible:ring-offset-2 focus-visible:ring-offset-[#14100E] disabled:opacity-50 disabled:cursor-not-allowed select-none group";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-xs tracking-widest px-7 py-3.5 gap-2.5",
    lg: "text-sm tracking-widest px-9 py-4 gap-3",
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-[#E5C590] via-[#C5A880] to-[#A88758] text-[#14100E] font-semibold hover:shadow-[0_0_25px_rgba(197,168,128,0.35)] hover:brightness-105 active:scale-[0.98]",
    secondary: "border border-[#C5A880]/60 text-[#F7F3EB] bg-transparent hover:bg-[#C5A880]/10 hover:border-[#C5A880] hover:text-[#E5C590] active:scale-[0.98]",
    dark: "bg-[#1E1815] text-[#F7F3EB] border border-[#C5A880]/20 hover:border-[#C5A880]/50 hover:bg-[#2A221E] active:scale-[0.98]",
    ghost: "text-[#E5C590] bg-transparent hover:text-white hover:underline underline-offset-8 p-0",
    goldText: "text-[#C5A880] bg-transparent hover:text-[#E5C590] p-0"
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClass} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClass} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
      {...props}
    >
      {content}
    </button>
  );
}
