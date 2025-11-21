import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Definimos los links y dropdowns
  const links = [
    {
      name: "Empresa",
      dropdown: [
        { name: "Quienes Somos", path: "/empresa/about" },
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
        { name: "Entorno Responsable", path: "/sobre-quandum/entorno-responsable" },
        { name: "Oasis", path: "/sobre-quandum/oasis" },
        { name: "Ncage", path: "/sobre-quandum/ncage" },
        { name: "Reach", path: "/sobre-quandum/reach" },
      ],
    },
    { name: "Prensa", path: "/prensa" },
    { name: "Trabaja Con Nosotros", path: "/trabaja-con-nosotros" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/30 backdrop-blur-xl py-3 shadow-2xl shadow-cyan-500/5"
            : "bg-black/10 backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="relative z-10 group flex items-center">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-12 h-12 object-contain drop-shadow"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-bold tracking-tight text-brand-blue">
                QUANDUM
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-brand-pink font-light">
                Aerospace
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8 relative">
            {links.map((link) => {
              const isActive = location.pathname.startsWith(link.path);

              if (link.dropdown) {
                return (
                  <div key={link.name} className="relative group">
                    <span
                      className={`cursor-pointer text-sm font-medium transition-colors duration-300 ${
                        isActive ? "text-brand-pink" : "text-gray-400 group-hover:text-white"
                      }`}
                    >
                      {link.name}
                    </span>

                    {/* Dropdown */}
                    <div className="absolute left-0 mt-2 w-56 bg-black/90 backdrop-blur-lg rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-6 py-3 text-gray-200 hover:bg-cyan-500 hover:text-white rounded-xl transition-all"
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
                  className={`relative group text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-brand-pink" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-brand-blue transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}

            <Link
              to="/contacto"
              className="ml-4 px-6 py-2.5  bg-gradient-to-l from-brand-blue to-slate-700 hover:from-slate-700 hover:to-slate-900 rounded-lg text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Contacto
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`h-0.5 bg-brand-blue rounded-full transition-all duration-300 ${
                  open ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`h-0.5 bg-brand-blue rounded-full transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`h-0.5 bg-brand-pink rounded-full transition-all duration-300 ${
                  open ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          open ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/95 backdrop-blur-2xl transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        ></div>

        <div
          className={`relative h-full flex flex-col items-center justify-center transition-all duration-500 delay-100 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="space-y-8 text-center">
            {links.map((link, idx) => {
              if (link.dropdown) {
                return (
                  <div key={link.name} className="space-y-2">
                    <span className="block text-2xl font-semibold text-gray-400">
                      {link.name}
                    </span>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setOpen(false)}
                        className="block ml-4 text-xl text-gray-300 hover:text-white transition-all py-2"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="block text-2xl font-semibold text-gray-400 hover:text-white transition-all py-2"
                  style={{ transitionDelay: open ? `${idx * 50}ms` : "0ms" }}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-8">
              <Link
                to="/contacto"
                onClick={() => setOpen(false)}
                className="inline-block px-10 py-4 bg-gradient-to-r from-brand-blue to-slate-700 text-white text-lg font-bold rounded-lg hover:from-brand-pink hover:to-slate-700 transition-all duration-300 shadow-2xl shadow-cyan-500/30"
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
