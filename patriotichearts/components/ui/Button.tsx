'use client';

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  target?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  target = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-bold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary:
      'bg-patriotic-red text-white hover:bg-red-700 focus:ring-patriotic-red',
    secondary:
      'bg-patriotic-navy text-white hover:bg-blue-800 focus:ring-patriotic-navy',
    outline:
      'border-2 border-patriotic-navy text-white hover:bg-patriotic-navy hover:text-white focus:ring-patriotic-navy',
    gold: 'bg-patriotic-gold text-white hover:bg-amber-700 focus:ring-patriotic-gold',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (target) {
      return (
        <a href={href} className={styles} target={target}>
          {children}
        </a>
      );
    }

    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
