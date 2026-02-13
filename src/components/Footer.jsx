import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800 w-full">
      <div className="w-full px-6 py-16">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto"
        >
          <div className="space-y-6">
            <Link
              to="/"
              className="text-2xl font-black tracking-tight text-white"
            >
              QUANDUM
              <span className="text-zinc-500 ml-2 font-semibold">
                AEROSPACE
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-zinc-500">
              Advanced aerospace systems engineering for mission-critical
              environments. Precision, reliability and certified performance.
            </p>
          </div>

          {/* EMPRESA + CAPACIDADES (2 columnas en móvil) */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-2">
            {/* EMPRESA */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-6">
                Empresa
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/proyectos/destacados"
                    className="hover:text-white transition-colors"
                  >
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sobre-quandum/certificaciones"
                    className="hover:text-white transition-colors"
                  >
                    Certificados
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contacto"
                    className="hover:text-white transition-colors"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* CAPACIDADES */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-6">
                Capacidades
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/proyectos/destacados/1"
                    className="hover:text-white transition-colors"
                  >
                    IR y Visión
                  </Link>
                </li>
                <li>
                  <Link
                    to="/proyectos/destacados/3"
                    className="hover:text-white transition-colors"
                  >
                    Codificación
                  </Link>
                </li>
                <li>
                  <Link
                    to="/proyectos/destacados/6"
                    className="hover:text-white transition-colors"
                  >
                    Iluminación
                  </Link>
                </li>
                <li>
                  <Link
                    to="/proyectos/destacados/7"
                    className="hover:text-white transition-colors"
                  >
                    Inspección IA
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* CONTACTO / LEGAL */}
          <div>
            <div>
              <Link to="/contacto" className="inline-block mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-white hover:text-zinc-300 transition-colors">
                  Contacto
                </h4>
              </Link>

              <div className="space-y-3 text-sm mb-8">
                <p>info@quandum.com</p>
                <p>España</p>
              </div>
            </div>

            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-6">
              Legal
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacidad
                </Link>
              </li>
              <li>
                <Link
                  to="/legal-notice"
                  className="hover:text-white transition-colors"
                >
                  Aviso Legal
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
          <p>
            © {new Date().getFullYear()} Quandum Aerospace. Todos los derechos
            reservados.
          </p>
          <p className="mt-2 md:mt-0 tracking-widest uppercase">
            Engineered for Mission-Critical Systems
          </p>
        </div>
      </div>
    </footer>
  );
}
