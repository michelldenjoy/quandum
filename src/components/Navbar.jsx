import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; 

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSubmenuOpen(null);
  }, [location.pathname]);

  const links = [
    {
      name: "Empresa",
      dropdown: [
        { name: "Quienes somos", path: "/empresa/about" },
        { name: "Certificaciones", path: "/sobre-quandum/certificaciones" },
        { name: "Compromiso Ético y Sostenible", path: "/sobre-quandum/codigo-etico" },
        { name: "Únete a Quandum", path: "/trabaja-con-nosotros" },
      ],
    },
    {
      // name: "Soluciones",
      // dropdown: [
      //   { name: "Hardware", path: "/servicios/hardware" },
      //   { name: "Software", path: "/servicios/software" },
      //   { name: "Mecanica", path: "/servicios/mecanica" },
      // ],
    },
    { name: "Proyectos", path: "/proyectos/destacados" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? "bg-black/80 backdrop-blur-2xl py-3 border-b border-white/5 shadow-2xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between lg:grid lg:grid-cols-3">
          
          {/* LOGO — columna izquierda */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <img src="/lienzo.png" alt="Logo" className="w-10 h-10 md:w-11 md:h-11 object-contain transition-transform duration-500 group-hover:rotate-[10deg]" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white tracking-tighter leading-none">
                QUANDUM
              </span>
              <span className="text-[12px] uppercase tracking-[0.4em] text-brand-pink font-bold">
                Aerospace
              </span>
            </div>
          </Link>

          {/* MENU ESCRITORIO */}
          <div className="hidden lg:flex items-center justify-center gap-2">
            {links.map((link) => {
              if (!link.name) return null;

              const isActive = link.path
                ? location.pathname === link.path
                : link.dropdown?.some((item) => location.pathname.startsWith(item.path));

              return (
                <div key={link.name} className="relative group px-4 py-2">
                  <Link
                    to={link.path || "#"}
                    className={`relative text-[13px] uppercase tracking-[0.2em] font-bold transition-colors duration-300 flex items-center gap-1.5 ${
                      isActive ? "text-white" : "text-gray-100 group-hover:text-white"
                    }`}
                  >
                    {link.name}
                    {link.dropdown && (
                      <span className="w-1 h-1 bg-brand-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                    {isActive && (
                      <motion.div
                        layoutId="nav_active"
                        className="absolute -bottom-[26px] left-0 w-full h-[2px] bg-brand-blue"
                      />
                    )}
                  </Link>

                  {link.dropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="bg-black/90 backdrop-blur-3xl border border-white/10 p-2 min-w-[240px] shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                        <div className="flex flex-col">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="px-5 py-3 text-[11px] uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/5 transition-all flex justify-between items-center group/item"
                            >
                              {item.name}
                              <div className="w-0 group-hover/item:w-3 h-[1px] bg-brand-blue transition-all duration-300" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Columna derecha */}
          <div className="flex justify-end">
            <button onClick={() => setOpen(!open)} className="lg:hidden z-50">
              <div className="w-8 h-6 flex flex-col justify-center gap-1.5">
                <span
                  className={`h-0.5 w-full bg-blue-400 transition-all ${
                    open ? "rotate-45 translate-y-2.5" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-gray-400 transition-all ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-rose-400 transition-all ${
                    open ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
          onClick={() => {
            setOpen(false);
            setSubmenuOpen(null);
          }}
        />
        
        <div
          className={`absolute right-0 top-0 h-screen w-full sm:w-96 bg-black overflow-hidden transition-transform duration-500 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel principal  */}
          <div className={`absolute inset-0 transition-transform duration-500 ease-out ${submenuOpen ? "-translate-x-full" : "translate-x-0"}`}>
            <div className="h-full overflow-y-auto pt-24 pb-10 px-6 sm:px-8 space-y-0">
              {links.map((link) => {
                if (!link.name) return null;
                return (
                  <div key={link.name}>
                    {link.dropdown ? (
                      <button
                        onClick={() => setSubmenuOpen(link.name)}
                        className="w-full flex items-center justify-between text-xl tracking-widest uppercase font-bold text-white border-b border-neutral-800 py-5"
                      >
                        <span>{link.name}</span>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={() => setOpen(false)}
                        className="block py-5 text-xl font-bold text-white border-b border-neutral-800 uppercase tracking-widest"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Panel submenú */}
          <div className={`absolute inset-0 transition-transform duration-500 ease-out ${submenuOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="h-full overflow-y-auto pt-24 pb-10 px-6 sm:px-8">
              <button onClick={() => setSubmenuOpen(null)} className="flex items-center gap-3 text-gray-400 mb-8">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Atrás</span>
              </button>
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-neutral-800 pb-4">{submenuOpen}</h2>
              <div className="space-y-0">
                {links.find(l => l.name === submenuOpen)?.dropdown?.map(item => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-lg text-gray-300 border-b border-neutral-800/50 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}