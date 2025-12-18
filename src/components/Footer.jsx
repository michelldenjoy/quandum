import { motion } from "motion/react";

export default function Footer() {
  return (
<footer className="bg-black text-zinc-500 border-t border-zinc-800/50 w-full">
  {/* Main Footer Content */}
  <div className="w-full px-6 py-12">
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
    >
      {/* Brand Section */}
      <div className="space-y-4">
        <a
          href="/"
          className="text-2xl md:text-3xl font-black tracking-tighter text-white"
        >
          QUANDUM
          <span className="text-zinc-500 ml-2 font-semibold">
            AEROSPACE
          </span>
        </a>
        <p className="text-zinc-400 text-sm tracking-widest uppercase">
          Diseñado para sistemas de misión crítica
        </p>
      </div>

      {/* Legal Links */}
      <nav
        aria-label="Legal"
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:justify-end text-sm"
      >
        <a 
        href="privacy-policy"
        className="text-zinc-400 hover:text-white transition-colors uppercase tracking-wide">
          Política de Privacidad
        </a>
        <a href="legal-notice"
        className="text-zinc-400 hover:text-white transition-colors uppercase tracking-wide">
          Aviso Legal
        </a>
      </nav>
    </motion.div>
  </div>

  {/* Copyright */}
  <div className="border-t border-zinc-800/50 bg-black/60 backdrop-blur-sm">
    <div className="w-full px-6 py-4">
      <p className="text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Quandum Aerospace. Todos los derechos reservados.
      </p>
    </div>
  </div>
</footer>

  );
}
