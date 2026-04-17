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
          className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-7xl mx-auto text-center md:text-left"
        >
         
          <div className="md:col-span-6 space-y-6 flex flex-col items-center md:items-start pr-0 md:pr-16">
            <Link
              to="/"
              className="text-2xl font-black tracking-tight text-white"
            >
              QUANDUM
              <span className="text-zinc-500 ml-2 font-semibold">
                AEROSPACE
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-zinc-500 max-w-md">
              Advanced aerospace systems engineering for mission-critical
              environments. Precision, reliability and certified performance.
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col items-center md:items-start md:pl-8">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-6">
              Empresa
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/empresa/historia"
                  className="hover:text-white transition-colors"
                >
                  Historia
                </Link>
              </li>

              <li>
                <Link
                  to="/empresa/infraestructuras"
                  className="hover:text-white transition-colors"
                >
                  Infraestructura
                </Link>
              </li>

              <li>
                <Link
                  to="/sobre-quandum/calidad"
                  className="hover:text-white transition-colors"
                >
                  Política de Calidad
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
            </ul>
          </div>

       
          <div className="md:col-span-3 flex flex-col items-center md:items-start md:pl-8">
            <Link to="/contacto" className="inline-block mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white hover:text-zinc-300 transition-colors">
                Contacto
              </h4>
            </Link>

            <div className="space-y-2 text-sm mb-8">
              <p>info@quandum.com</p>
              <p>España</p>
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
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-zinc-600 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} Quandum Aerospace. Todos los derechos
            reservados.
          </p>

          <p className="tracking-widest uppercase">
            Engineered for Mission-Critical Systems
          </p>
        </div>
      </div>
    </footer>
  );
}