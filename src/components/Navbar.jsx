import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", path: "/about" },
    { name: "Products & Services", path: "/products" },
    { name: "Certifications", path: "/certifications" },
    { name: "Careers", path: "/careers" },
    { name: "Sustainability", path: "/sustainability" },
    { name: "News", path: "/news" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-black/80 backdrop-blur-xl py-3 shadow-2xl shadow-cyan-500/5" 
            : "bg-transparent backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
          
          {/* LOGO */}
          <Link 
            to="/" 
            className="relative z-10 group flex items-center gap-3"
          >
            {/* Hexágono decorativo */}
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300"></div>
              <svg className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-colors" viewBox="0 0 100 100">
                <polygon 
                  points="50 5, 95 27.5, 95 72.5, 50 95, 5 72.5, 5 27.5" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="animate-pulse"
                />
                <circle cx="50" cy="50" r="8" fill="currentColor" className="opacity-80" />
              </svg>
            </div>
            
            {/* Texto del logo */}
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-bold tracking-tight text-white">
                QUANDUM
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-cyan-400 font-light">
                Aerospace
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map(link => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group"
                >
                  <span className={`text-sm font-medium transition-colors duration-300 ${
                    isActive 
                      ? "text-cyan-400" 
                      : "text-gray-400 group-hover:text-white"
                  }`}>
                    {link.name}
                  </span>
                  
                  {/* Indicador inferior */}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-cyan-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </Link>
              );
            })}
            
            {/* CONTACT BUTTON */}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-semibold rounded transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
            >
              Contact
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`h-0.5 bg-cyan-400 rounded-full transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}></span>
              <span className={`h-0.5 bg-cyan-400 rounded-full transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}></span>
              <span className={`h-0.5 bg-cyan-400 rounded-full transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}></span>
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
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/95 backdrop-blur-2xl transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        ></div>
        
        {/* Menu content */}
        <div 
          className={`relative h-full flex flex-col items-center justify-center transition-all duration-500 delay-100 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="space-y-8 text-center">
            {links.map((link, idx) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`block text-2xl font-semibold transition-all duration-300 ${
                    isActive 
                      ? "text-cyan-400 scale-110" 
                      : "text-gray-400 hover:text-white hover:scale-105"
                  }`}
                  style={{ 
                    transitionDelay: open ? `${idx * 50}ms` : "0ms" 
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <div className="pt-8">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-bold rounded hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-2xl shadow-cyan-500/30"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}