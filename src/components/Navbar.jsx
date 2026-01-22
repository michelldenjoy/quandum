import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null); // null o el nombre del link
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
        { name: "Trabaja con nosotros", path: "/trabaja-con-nosotros" },
      ],
    },
    {
      name: "Soluciones",
      dropdown: [
        { name: "Hardware", path: "/servicios/hardware" },
        { name: "Software", path: "/servicios/software" },
        { name: "Mecanica", path: "/servicios/mecanica" },
      ],
    },
    { name: "Proyectos", path: "/proyectos/destacados" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-neutral-900/95 backdrop-blur-xl py-4 border-b border-neutral-800/50"
            : "bg-neutral-900/90 backdrop-blur-xl py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center group">
            <img
              src="/logo.png"
              alt="Logo Quandum"
              className="w-12 h-12 object-contain drop-shadow-lg "
            />
            <div className="flex flex-col leading-none">
              <span className="text-3xl font-bold text-white group-hover:text-brand-blue transition-colors">
                QUANDUM
              </span>
              <span className="text-xs uppercase tracking-widest text-brand-pink group-hover:text-white transition-colors">
                Aerospace
              </span>
            </div>
          </Link>

          {/* Menu escritorio*/}
          <div className="hidden lg:flex items-center gap-8 md:px-8 xl:gap-12">
            {links.map((link) => {
              const isActive = link.path
                ? location.pathname === link.path
                : link.dropdown?.some((item) =>
                    location.pathname.startsWith(item.path.split("?")[0])
                  );

              if (link.dropdown) {
                return (
                  <div key={link.name} className="relative group">
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-gradient-to-br from-blue-100 to-white blur-xl" />
                    <span
                      className={`relative z-10 text-sm xl:text-base font-medium tracking-wide whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center ${
                        isActive ? "text-brand-pink" : "text-gray-300"
                      } group-hover:text-red-400`}
                    >
                      {link.name}
                    </span>

                    <div className="absolute top-full left-0 pt-4 pointer-events-none opacity-0 invisible group-hover:pointer-events-auto group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
                      <div className="bg-neutral-900/100 backdrop-blur-sm border border-neutral-800 rounded-2xl shadow-2xl py-6 px-6 min-w-[280px] whitespace-nowrap">
                        <ul className="space-y-3">
                          {link.dropdown.map((item) => (
                            <li key={item.name}>
                              <Link
                                to={item.path}
                                className="block text-neutral-400 hover:text-white hover:translate-x-1 hover:bg-neutral-800/30 px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium"
                                onClick={() => setOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div key={link.name} className="relative group">
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-gradient-to-br from-blue-100 to-white blur-xl" />
                  <Link
                    to={link.path}
                    className={`relative z-10 text-sm xl:text-base font-medium tracking-wide whitespace-nowrap transition-all duration-300 ${
                      isActive ? "text-brand-pink" : "text-gray-300"
                    } group-hover:text-red-400`}
                  >
                    {link.name}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
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
      </nav>

      {/* Mobile Menu */}
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
        
        {/* Contenedor principal del menú con overflow hidden */}
        <div
          className={`absolute right-0 top-0 h-screen w-full sm:w-96 bg-black overflow-hidden transition-transform duration-500 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Menú Principal */}
          <div
            className={`absolute inset-0 transition-transform duration-500 ease-out ${
              submenuOpen ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="h-full overflow-y-auto py-32 pb-24 px-6 sm:px-8 space-y-6">
              {links.map((link) => {
                const isActive = link.path
                  ? location.pathname === link.path
                  : link.dropdown?.some((item) =>
                      location.pathname.startsWith(item.path)
                    );

                if (link.dropdown) {
                  return (
                    <button
                      key={link.name}
                      onClick={() => setSubmenuOpen(link.name)}
                      className="w-full flex items-center justify-between text-xl sm:text-2xl font-bold text-white border-b border-neutral-800 pb-6 hover:text-blue-400 transition-colors group"
                    >
                      <span>{link.name}</span>
                      <svg
                        className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`block py-2 px-4 rounded-lg text-xl sm:text-2xl font-bold transition-all border-b border-neutral-800 pb-6 ${
                      isActive
                        ? "text-rose-400 bg-neutral-800/40"
                        : "text-gray-300 hover:text-white hover:bg-neutral-800/20"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Submenú Deslizante */}
          <div
            className={`absolute inset-0 transition-transform duration-500 ease-out ${
              submenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="h-full overflow-y-auto py-32 pb-24 px-6 sm:px-8">
              {/* Botón Back */}
              <button
                onClick={() => setSubmenuOpen(null)}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors mb-8 group"
              >
                <svg
                  className="w-6 h-6 group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="text-lg font-medium">Back</span>
              </button>

              {/* Título del submenú */}
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 border-b border-neutral-800 pb-4">
                {submenuOpen}
              </h2>

              {/* Items del submenú */}
              <div className="space-y-4">
                {links
                  .find((link) => link.name === submenuOpen)
                  ?.dropdown?.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => {
                        setOpen(false);
                        setSubmenuOpen(null);
                      }}
                      className={`block py-4 px-4 rounded-lg text-lg sm:text-xl transition-all ${
                        location.pathname.startsWith(item.path)
                          ? "text-blue-400 font-semibold bg-neutral-800/40"
                          : "text-gray-300 hover:text-white hover:bg-neutral-800/20"
                      }`}
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