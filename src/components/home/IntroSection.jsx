import { motion } from "motion/react";
import DiagonalButton from "../DiagonalButton";

// Programas reales en los que Quandum tiene presencia o certificación
const programs = ["A310-MRTT", "A330-MRTT", "C-295", "Eurofighter"];

const IntroSection = () => {
  return (
    <section className="relative w-full lg:flex lg:flex-col lg:justify-end pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-24 px-6 sm:px-6 overflow-hidden">

      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.07),transparent)] pointer-events-none" />

      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Marca de agua de fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="sm:text-[clamp(5rem,14vw,13rem)] text-6xl font-extralight text-white/[0.07] tracking-[0.30em] uppercase leading-none text-center whitespace-nowrap "
        >
          QUANDUM
        </motion.p>
      </div>

      {/* ── Contenido principal ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">

        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="block text-xs tracking-[0.35em] font-medium text-slate-400 uppercase mb-8"
        >
          Elevando los estándares aeroespaciales
        </motion.span>

        {/* Título - Línea 1 */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.8rem,7vw,7rem)] font-extralight md:mb-2 text-white tracking-tight leading-[1.0]"
          >
            Quandum Aerospace
          </motion.h1>
        </div>

        {/* Título - Línea 2 */}
        <div className="overflow-hidden mb-14 sm:mb-20">
          <motion.h1
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.8rem,7vw,7rem)] mb-4 font-semibold text-white tracking-tight leading-[1.0]"
          >
            Ingeniería Crítica
          </motion.h1>
        </div>

        {/* ── Fila inferior ── */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 sm:gap-4 text-justify items-end">

          {/* Texto principal en primera persona */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="sm:col-span-5"
          >
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light">
              Somos arquitectos de soluciones para entornos de alta exigencia. En Quandum, 
              diseñamos y desarrollamos sistemas electrónicos y software de control que 
              garantizan el éxito en misiones críticas. Desde la concepción de la idea 
              hasta la certificación final, aportamos el rigor técnico necesario para 
              convertir desafíos complejos en sistemas operativos fiables.{" "} <br/>
              <span className="text-blue-400/70 font-mono text-xs">
                (Sistemas de Control y Telemetría Avanzada).
              </span> <br/>
              <div className="mt-8">
                <DiagonalButton variant="blue" href="/empresa/about">Nuestra Misión</DiagonalButton>
              </div>
            </p>
          </motion.div>

          {/* Espacio central */}
          <div className="hidden sm:block sm:col-span-3" />

          {/* Columna derecha — Programas y Certificación */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="sm:col-span-4 flex flex-col gap-6 items-start sm:items-end"
          >
            <div className="text-left sm:text-right">
              <p className="text-[0.6rem] tracking-[0.3em] text-slate-600 uppercase font-semibold mb-3">
                Experiencia en Plataformas
              </p>
              <div className="flex flex-wrap gap-2 justify-start sm:justify-end">
                {programs.map((program, i) => (
                  <motion.span
                    key={program}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                    className="px-3 py-1 rounded-full
                               text-[0.65rem] font-mono tracking-[0.1em]
                               border border-blue-400/20
                               bg-blue-500/5 text-blue-300
                               hover:bg-blue-500/10 hover:border-blue-400/35
                               transition-all duration-300"
                  >
                    {program}
                  </motion.span>
                ))}
              </div>
            </div>

            <p className="text-[0.6rem] tracking-[0.25em] text-slate-600 uppercase text-left sm:text-right leading-relaxed">
              Ingeniería de Sistemas
              <br />
              Defensa &amp; Espacio
            </p>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default IntroSection;