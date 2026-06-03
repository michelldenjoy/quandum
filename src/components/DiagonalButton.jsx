import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const CornerMark = ({ pos, visible }) => {
  const BORDER = "1px solid rgba(100, 175, 255, 0.88)";
  const map = {
    tl: { top: 5, left: 5, borderTop: BORDER, borderLeft: BORDER, transform: visible ? "none" : "translate(4px,4px)" },
    tr: { top: 5, right: 5, borderTop: BORDER, borderRight: BORDER, transform: visible ? "none" : "translate(-4px,4px)" },
    bl: { bottom: 5, left: 5, borderBottom: BORDER, borderLeft: BORDER, transform: visible ? "none" : "translate(4px,-4px)" },
    br: { bottom: 5, right: 5, borderBottom: BORDER, borderRight: BORDER, transform: visible ? "none" : "translate(-4px,-4px)" },
  };
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        width: 8,
        height: 8,
        pointerEvents: "none",
        zIndex: 20,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.22s ease, transform 0.32s ease",
        ...map[pos],
      }}
    />
  );
};


const VARIANT_STYLES = {
  primary: {
    base: {
      background: "#070b14",
      borderColor: "rgba(28, 78, 200, 0.32)",
    },
    hovered: {
      background: "linear-gradient(135deg, #091225 0%, #0d1e3c 60%, #091225 100%)",
      borderColor: "rgba(58, 138, 255, 0.65)",
      boxShadow: "inset 0 0 40px rgba(0, 65, 220, 0.07)",
    },
    sweepColor: "rgba(80, 160, 255, 0.11)",
    // tailwind text class
    textClass: "text-white",
  },
  secondary: {
    base: {
      background: "transparent",
      borderColor: "rgba(255, 255, 255, 0.28)",
      color: "rgba(255,255,255,0.82)",
    },
    hovered: {
      background: "rgba(255, 255, 255, 0.96)",
      borderColor: "rgba(255, 255, 255, 0.75)",
      color: "#07090d",
    },
    sweepColor: "rgba(255, 255, 255, 0.12)",
    textClass: "text-white",
  },
  blue: {
    base: {
      background: "#0043e8",
      borderColor: "rgba(80, 140, 255, 0.42)",
    },
    hovered: {
      background: "linear-gradient(135deg, #0038c6 0%, #0052ff 60%, #0038c6 100%)",
      borderColor: "rgba(130, 190, 255, 0.72)",
      boxShadow: "inset 0 0 30px rgba(255,255,255,0.04)",
    },
    sweepColor: "rgba(255, 255, 255, 0.10)",
    textClass: "text-white",
  },
  outline: {
    base: {
      background: "transparent",
      borderColor: "rgba(255, 255, 255, 0.11)",
      color: "rgba(255,255,255,0.40)",
    },
    hovered: {
      background: "rgba(18, 65, 175, 0.10)",
      borderColor: "rgba(80, 160, 255, 0.44)",
      color: "rgba(115, 175, 255, 0.95)",
    },
    sweepColor: "rgba(80, 160, 255, 0.09)",
    textClass: "text-white/40",
  },
};


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
  const [hovered, setHovered] = useState(false);

  const sizes = {
    sm: "px-6 py-2.5 text-xs",
    md: "px-8 py-4 text-sm",
    lg: "px-10 py-5 text-base",
  };

  const cfg = VARIANT_STYLES[variant] || VARIANT_STYLES.primary;
  const dynStyle = {
    transition: "background 0.42s ease, color 0.32s ease, border-color 0.42s ease, box-shadow 0.42s ease",
    ...(hovered ? cfg.hovered : cfg.base),
  };

  const baseClasses = `
    group relative inline-flex items-center justify-center gap-2
    font-mono tracking-widest uppercase overflow-hidden
    border clip-path-diagonal
    ${sizes[size]}
    ${cfg.textClass}
    ${className}
  `;

  const interactionProps = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };

  const content = (
    <>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          width: "46%",
          background: `linear-gradient(90deg, transparent, ${cfg.sweepColor}, transparent)`,
          transform: hovered ? "translateX(280%)" : "translateX(-120%)",
          transition: hovered ? "transform 0.78s cubic-bezier(0.25, 0.1, 0.25, 1)" : "none",
          pointerEvents: "none",
          zIndex: 5,
        }}
      />

      {/* HUD corner reticle marks */}
      {["tl", "tr", "bl", "br"].map((p) => (
        <CornerMark key={p} pos={p} visible={hovered} />
      ))}

      {/* Text + arrow */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <ArrowRight
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        )}
      </span>
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={baseClasses}
        style={dynStyle}
        {...interactionProps}
        {...props}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        style={dynStyle}
        {...interactionProps}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={baseClasses}
      style={dynStyle}
      {...interactionProps}
      {...props}
    >
      {content}
    </button>
  );
}