import React from "react";
import { ArrowRight } from "lucide-react";

/**
 * DiagonalButton - Botón reutilizable con forma diagonal
 * 
 * @param {string} children - Texto del botón
 * @param {string} variant - 'primary' (negro) | 'secondary' (blanco) | 'blue' (brand-blue)
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {boolean} icon - Mostrar icono de flecha
 * @param {function} onClick - Función al hacer click
 * @param {string} className - Clases adicionales
 * @param {string} href - Si es un enlace, usar href
 */
export default function DiagonalButton({ 
  children, 
  variant = "primary",
  size = "md",
  icon = true,
  onClick,
  className = "",
  href,
  ...props 
}) {
  
  // Tamaños
  const sizes = {
    sm: "px-6 py-2.5 text-xs",
    md: "px-8 py-4 text-sm",
    lg: "px-10 py-5 text-base"
  };

  // Variantes de color
  const variants = {
    primary: {
      base: "bg-black/70 text-white border-black",
      hover: "bg-brand-blue border-brand-blue"
    },
    secondary: {
      base: "bg-white text-black border-black",
      hover: "bg-black text-white border-black"
    },
    blue: {
      base: "bg-brand-blue text-white border-brand-blue",
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
      {/* Fondo hover */}
      <div 
        className={`
          absolute inset-0 clip-path-diagonal transition-transform duration-500 
          transform translate-x-[-101%] group-hover:translate-x-0
          ${variant === 'primary' ? 'bg-brand-blue' : ''}
          ${variant === 'secondary' ? 'bg-black' : ''}
          ${variant === 'blue' ? 'bg-black' : ''}
          ${variant === 'outline' ? 'bg-black' : ''}
        `}
      />
      
      {/* Contenido */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </>
  );

  // Si tiene href, renderizar como enlace
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

  // Si no, renderizar como botón
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