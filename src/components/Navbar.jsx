import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";


const Chevron = ({ isOpen }) => (
  <svg
    className={`w-5 h-5 ml-3 transition-transform duration-300 ${
      isOpen
        ? "rotate-180 text-brand-pink"
        : "text-gray-400 group-hover:text-white"
    }`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    ></path>
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false); 
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); 
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      setOpen(false);
    }
    setOpenDropdown(null);
  }, [location.pathname]);

  const toggleDropdown = (linkName) => {
    setOpenDropdown(openDropdown === linkName ? null : linkName);
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
        // { name: "Oasis", path: "/sobre-quandum/oasis" },
        // { name: "Ncage", path: "/sobre-quandum/ncage" },
        // { name: "Reach", path: "/sobre-quandum/reach" },
      ],
    },
    { name: "Prensa", path: "/prensa" },
    { name: "Trabaja Con nosotros", path: "/trabaja-con-nosotros" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
          ${
            scrolled
              ? "bg-black py-3 shadow-2xl shadow-brand-blue/20 border-b border-brand-blue/30"
              : "bg-black py-5 border-b border-transparent" // Fondo negro sólido
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="relative z-10 flex items-center group">
            <div className="relative w-10 h-10 flex items-center justify-center mr-2">
              <img
                src="/logo.png"
                alt="Logo Quandum"
                className="w-12 h-12 object-contain drop-shadow-lg"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-3xl font-extrabold tracking-tight text-white transition-colors duration-300 group-hover:text-brand-blue">
                QUANDUM
              </span>
              <span className="text-[12px] uppercase tracking-[0.25em] text-brand-pink font-light transition-colors duration-300 group-hover:text-white">
                Aerospace
              </span>
            </div>
          </Link>

          {/* menu escritorio */}
          <div className="hidden lg:flex items-center gap-10 relative">
            {links.map((link, idx) => {
              const isActive = link.path
                ? location.pathname === link.path
                : link.dropdown?.some((item) =>
                    location.pathname.startsWith(item.path)
                  );

              if (link.dropdown) {
                return (
                  <div key={link.name} className="relative group">
                    <span
                      className={`cursor-pointer text-base font-semibold transition-colors duration-300 flex items-center py-2 relative
                        ${
                          isActive
                            ? "text-brand-pink"
                            : "text-gray-300 hover:text-white"
                        }`}
                    >
                      {link.name}
                      <Chevron isOpen={false} /> {/* Indicador de dropdown */}
                      <span
                        className={`absolute -bottom-0.5 left-0 h-[2px] bg-brand-blue transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </span>

                    {/* dropdown*/}
                    <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-72 bg-black border border-brand-blue/30 rounded-xl shadow-2xl shadow-brand-blue/30 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform group-hover:translate-y-0 translate-y-3">
                      {link.dropdown.map((item, dropIdx) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-3 text-gray-100 hover:bg-brand-blue/20 hover:text-brand-pink rounded-lg transition-all text-sm font-medium relative overflow-hidden group/item"
                        >
                          {item.name}
                          {/* linea de subrayado */}
                          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-pink transition-all duration-300 group-hover/item:w-full"></span>
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
                  className={`relative group text-base font-semibold transition-colors duration-300 py-2
                    ${
                      isActive
                        ? "text-brand-pink"
                        : "text-gray-300 hover:text-white"
                    }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[2px] bg-brand-blue transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}

            <Link
              to="/contacto"
              className="ml-6 px-8 py-3 bg-brand-blue hover:bg-gradient-to-r hover:from-slate-400 hover:to-brand-blue rounded-full text-white text-base font-bold transition-all duration-500 shadow-xl hover:shadow-brand-blue/50 relative overflow-hidden
                before:content-[''] before:absolute before:inset-0 before:opacity-2 before:animate-pulse-light hover:before:opacity-100 before:transition-opacity before:duration-500"
            >
              Contacto
            </Link>
          </div>

          {/* menu big mac */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative z-50 w-8 h-8 flex items-center justify-center focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-7 flex flex-col gap-1.5">
              
              <span
                className={`h-0.5 rounded-full transition-all duration-300 origin-center bg-brand-blue
                  ${open ? "rotate-45 translate-y-[7px]" : ""}`}
              ></span>

              <span
                className={`h-0.5 bg-brand-blue rounded-full transition-all duration-300 
                  ${open ? "opacity-0 scale-x-0" : ""}`}
              ></span>

              <span
                className={`h-0.5 rounded-full transition-all duration-300 origin-center bg-brand-pink
                  ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Movil overlay  */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-700 ease-in-out 
          ${open ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 
            ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        ></div>

        <div
          className={`relative h-full flex flex-col pt-24 pb-12 px-8 overflow-y-auto transition-transform duration-700 ease-in-out bg-black 
            ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col space-y-4 text-center w-full">
            {links.map((link, idx) => {
              const isOpen = openDropdown === link.name;
              const isPathActive = link.path
                ? location.pathname === link.path
                : link.dropdown?.some((item) =>
                    location.pathname.startsWith(item.path)
                  );

              if (link.dropdown) {
                return (
                  <div
                    key={link.name}
                    className="flex flex-col text-left w-full group"
                  >
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className={`flex items-center justify-between w-full px-6 py-4 text-3xl font-extrabold transition-all rounded-xl focus:outline-none
                        ${
                          isOpen || isPathActive
                            ? "text-brand-pink bg-white/5 shadow-inner shadow-brand-pink/10"
                            : "text-gray-200 hover:text-white hover:bg-white/5"
                        }`}
                      style={{
                        transitionDelay: open ? `${idx * 70}ms` : "0ms",
                      }}
                    >
                      {link.name}
                      <Chevron isOpen={isOpen} />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "max-h-screen opacity-100 mt-2 px-4 py-2 bg-black border-l-4 border-brand-blue/50 rounded-lg shadow-inner shadow-brand-blue/20"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {link.dropdown.map((item, dropIdx) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setOpen(false)}
                          className={`block w-full text-center py-3 text-xl font-medium rounded-lg transition-all
                            ${
                              location.pathname === item.path
                                ? "text-brand-blue bg-white/10"
                                : "text-gray-300 hover:text-brand-blue hover:bg-white/5"
                            }`}
                          style={{
                            transitionDelay:
                              open && isOpen
                                ? `${idx * 70 + dropIdx * 30}ms`
                                : "0ms",
                          }}
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
                  className={`block w-full text-center px-6 py-4 text-3xl font-extrabold rounded-xl transition-all
                    ${
                      isPathActive
                        ? "text-brand-pink bg-white/5 shadow-inner shadow-brand-pink/10"
                        : "text-gray-200 hover:text-white hover:bg-white/5"
                    }`}
                  style={{ transitionDelay: open ? `${idx * 70}ms` : "0ms" }}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-12">
              <Link
                to="/contacto"
                onClick={() => setOpen(false)}
                className="inline-block px-12 py-5 bg-brand-blue hover:bg-gradient-to-r hover:from-brand-pink hover:to-brand-blue text-white text-xl font-bold rounded-full transition-all duration-500 shadow-2xl shadow-brand-pink/40 relative overflow-hidden
                  before:content-[''] before:absolute before:inset-0 before:bg-white before:opacity-0 before:animate-pulse-light hover:before:opacity-100 before:transition-opacity before:duration-500"
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
