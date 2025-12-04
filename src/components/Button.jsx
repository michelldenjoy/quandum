import { Link } from "react-router-dom";

export default function Button({
  to,             // si existe → usa <Link>
  type = "button",
  onClick,
  disabled,
  children,
  className = "",
}) {
  const baseClasses = `
    relative overflow-hidden
    block w-full text-center py-4 rounded-xl
    text-white font-medium
    bg-slate-800/40
    border border-brand-blue/30
    backdrop-blblur-sm

    before:absolute before:inset-0 
    before:bg-gradient-to-r before:from-brand-blue/20 before:via-slate-500/40 before:to-brand-blue/20
    before:opacity-0 before:transition-opacity before:duration-500

    hover:before:opacity-100
    hover:border-brand-blue/60
    hover:bg-slate-800/70
    hover:shadow-2xl hover:shadow-brand-blue/20
    hover:scale-[1.02]
    transition-all duration-500

    disabled:opacity-40
    disabled:cursor-not-allowed

    ${className}
  `;

  // 👉 si hay "to", renderiza un <Link>
  if (to) {
    return (
      <Link to={to} onClick={onClick} className={baseClasses}>
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  // 👉 si NO hay "to", renderiza un <button>
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
