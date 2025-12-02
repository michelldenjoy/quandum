import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileDropdowns({});
  }, [location.pathname]);

  const toggleMobileDropdown = (linkName) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [linkName]: !prev[linkName],
    }));
  };

  const links = [
    {
      name: "Empresa",
      dropdown: [
        { name: "About", path: "/empresa/about" },
        { name: "Infraestructuras", path: "/empresa/infraestructuras" },
        { name: "Historia", path: "/empresa/historia" },
      ],
    },
    {
      name: "Servicios",
      dropdown: [
        { name: "Hardware", path: "/servicios/hardware" },
        { name: "Software", path: "/servicios/software" },
        { name: "Mecanica", path: "/servicios/mecanica" },
      ],
    },
    {
      name: "Proyectos",
      dropdown: [
        { name: "Proyectos Destacados", path: "/proyectos/destacados" },
      ],
    },
    {
      name: "Sobre Quandum",
      dropdown: [
        { name: "Calidad", path: "/sobre-quandum/calidad" },
        { name: "Certificaciones", path: "/sobre-quandum/certificaciones" },
        { name: "Código Ético", path: "/sobre-quandum/codigo-etico" },
        {
          name: "Entorno Responsable",
          path: "/sobre-quandum/entorno-responsable",
        },
      ],
    },
    { name: "Prensa", path: "/prensa" },
    { name: "Trabaja Con nosotros", path: "/trabaja-con-nosotros" },
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
              className="w-12 h-12 object-contain drop-shadow-lg mr-3"
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

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            {links.map((link) => {
              const isActive = link.path
                ? location.pathname === link.path
                : link.dropdown?.some((item) =>
                    location.pathname.startsWith(item.path.split("?")[0])
                  );

              if (link.dropdown) {
                return (
                  <div key={link.name} className="relative group">
                    {/* Trigger */}
                    <span
                      className={`text-sm xl:text-base font-medium tracking-wide transition-all duration-300 cursor-pointer flex items-center relative ${
                        isActive
                          ? "text-rose-400"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </span>

                    {/* Dropdown */}
                    <div className="absolute top-full left-0 pt-4 pointer-events-none opacity-0 invisible group-hover:pointer-events-auto group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
                      <div className="bg-neutral-900/98 backdrop-blur-xl border border-neutral-800/60 rounded-2xl shadow-2xl py-6 px-6 min-w-[280px] whitespace-nowrap">
                        <h3 className="text-base font-bold text-white mb-4 tracking-wide border-b border-neutral-800 pb-3">
                          {link.name}
                        </h3>
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
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm xl:text-base font-medium tracking-wide transition-all duration-300 relative ${
                    isActive
                      ? "text-rose-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            <Link
              to="/contacto"
              className="ml-4 xl:ml-8 px-6 xl:px-8 py-3 xl:py-3.5 rounded-tl-3xl  bg-gradient-to-r from-brand-blue via-slate-500 to-brand-blue hover:from-slate-900 hover:via-slate-500 hover:to-slate-900 text-white font-semibold text-sm xl:text-base transition-all duration-300 shadow-lg hover:shadow-blue-300/30 hover:scale-105"
            >
              Contacto
            </Link>
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
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-screen w-full sm:w-96 bg-neutral-900/98 backdrop-blur-2xl overflow-y-auto transition-transform duration-500 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="pt-24 pb-24 px-6 sm:px-8 space-y-6">
            {links.map((link) => {
              const isActive = link.path
                ? location.pathname === link.path
                : link.dropdown?.some((item) =>
                    location.pathname.startsWith(item.path)
                  );

              if (link.dropdown) {
                const isOpen = mobileDropdowns[link.name];

                return (
                  <div
                    key={link.name}
                    className="border-b border-neutral-800 pb-6"
                  >
                    {/* Título con botón + */}
                    <button
                      onClick={() => toggleMobileDropdown(link.name)}
                      className="w-full flex items-center justify-between text-xl sm:text-2xl font-bold text-white mb-4 hover:text-blue-400 transition-colors"
                    >
                      <span>{link.name}</span>
                      <span
                        className={`text-2xl transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>

                    {/* Dropdown items */}
                    <div
                      className={`space-y-2 overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setOpen(false)}
                          className={`block py-3 px-4 rounded-lg text-base sm:text-lg transition-all ${
                            location.pathname.startsWith(item.path)
                              ? "text-blue-400 font-semibold bg-neutral-800/40"
                              : "text-gray-400 hover:text-white hover:bg-neutral-800/20"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
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
            <div className="pt-8">
              <Link
                to="/contacto"
                onClick={() => setOpen(false)}
                className="block w-full text-center py-4 rounded-tl-2xl bg-gradient-to-r from-brand-blue via-slate-500 to-brand-blue hover:from-slate-900 hover:via-slate-500 hover:to-slate-900 hover:shadow-blue-300/30 hover:scale-105 text-white transition-all"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
