import { motion } from "motion/react";

const programs = ["A-310MRTT", "A-330MRTT", "C-295"];

const IntroSection = () => {
  return (
    <section className="relative w-full  lg:flex lg:flex-col lg:justify-end pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden">

      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-slate-800 to-black/10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.07),transparent)] pointer-events-none" />

      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ── HEADLINE central absoluta ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-[clamp(5rem,14vw,13rem)] font-extralight text-white/[0.07] tracking-[0.30em] uppercase leading-none text-center whitespace-nowrap "
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
          Trayectoria Consolidada
        </motion.span>

        {/* Título display — ocupa el ancho y rompe con intención */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.8rem,7vw,7rem)] font-extralight md:mb-2 text-white tracking-tight leading-[1.0]"
          >
            Ingeniería de Precisión
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-14 sm:mb-20">
          <motion.h1
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.8rem,7vw,7rem)] font-semibold text-white tracking-tight leading-[1.0]"
          >
            Elevando Estándares
          </motion.h1>
        </div>

        {/* Separador con línea + año */}


        {/* ── Fila inferior — tres columnas asimétricas ── */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 sm:gap-4 items-end">

          {/* Texto principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="sm:col-span-5"
          >
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light">
              Fundada tras la consolidación de contratos estratégicos con{" "}
              <span className="text-white font-normal">
                Airbus Defence &amp; Space
              </span>
              . Especializados en el ciclo de vida completo del producto: desde
              la especificación inicial hasta la certificación de sistemas aptos
              para el vuelo{" "}
              <span className="text-blue-400/70 font-mono text-xs">
                (Airworthy Systems)
              </span>
              .
            </p>
          </motion.div>

          {/* Espacio central intencional */}
          <div className="hidden sm:block sm:col-span-3" />

          {/* Columna derecha — partner + programas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="sm:col-span-4 flex flex-col gap-6 items-start sm:items-end"
          >
            <div className="text-left sm:text-right">
              <p className="text-[0.6rem] tracking-[0.3em] text-slate-600 uppercase font-semibold mb-3">
                Programas de Referencia
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
              Partner certificado
              <br />
              Defensa &amp; Aeronáutica
            </p>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default IntroSection;