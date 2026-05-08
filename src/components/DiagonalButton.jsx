import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function DiagonalButton({
  children,
  variant = "primary",
  size = "md",
  icon = true,
  onClick,
  className = "",
  href,
  to,
  ...props
}) {

  const sizes = {
    sm: "px-6 py-2.5 text-xs",
    md: "px-8 py-4 text-sm",
    lg: "px-10 py-5 text-base"
  };

  const variants = {
    primary: {
      base: "bg-black/70 text-white border border-none",
      hover: "bg-brand-blue border-brand-blue"
    },
    secondary: {
      base: "bg-white text-black border-black",
      hover: "bg-black text-white border-black"
    },
    blue: {
      base: "bg-brand-blue/80 text-white border-brand-blue",
      hover: "bg-brand-pink border-brand-pink"
    },
    outline: {
      base: "bg-transparent text-black border-black",
      hover: "bg-black text-white border-black"
    }
  };

  const baseClasses = `
    group relative inline-flex items-center justify-center gap-2 
    font-mono tracking-wider uppercase overflow-hidden
    border transition-all duration-500
    clip-path-diagonal
    ${sizes[size]}
    ${variants[variant].base}
    ${className}
  `;

  const content = (
    <>
      <div
        className={`
          absolute inset-0 clip-path-diagonal transition-transform duration-500 
          transform translate-x-[-101%] group-hover:translate-x-0
          ${variant === "primary" ? "bg-gradient-to-b from-slate-900 via-slate-700 to-slate-900" : ""}
          ${variant === "secondary" ? "bg-black" : ""}
          ${variant === "blue" ? "bg-brand-blue" : ""}
          ${variant === "outline" ? "bg-black" : ""}
        `}
      />

      <span className="relative z-10 flex items-center gap-2">
        {children}

        {icon && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </>
  );

  // React Router interno
  if (to) {
    return (
      <Link
        to={to}
        className={baseClasses}
        {...props}
      >
        {content}
      </Link>
    );
  }

  // Link externo
  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        {...props}
      >
        {content}
      </a>
    );
  }

  // Botón normal
  return (
    <button
      onClick={onClick}
      className={baseClasses}
      {...props}
    >
      {content}
    </button>
  );
}