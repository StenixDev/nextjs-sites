"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = "",
  hover = true,
  onClick,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-lg shadow-md p-6 
        ${hover ? "hover:shadow-xl transition-shadow duration-300" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
