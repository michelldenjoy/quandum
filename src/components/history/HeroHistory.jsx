import { motion } from "motion/react";

const title = "Trayectoria, innovación y excelencia aeronáutica";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function HeroHistory() {
  return (
    <div className="w-full overflow-x-hidden pt-20 md:pt-24 lg:pt-28 bg-black">
      <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
        {/* Imagen de fondo */}
        <img
          src="/images/history.jpg"
          alt="Historia y trayectoria de la compañía aeronáutica"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay oscuro + degradado */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-slate-900/60 to-slate-950/90" />

        {/* Grid técnico sutil */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none 
                     bg-[linear-gradient(rgba(59,130,246,0.4)_1px,transparent_1px),
                          linear-gradient(90deg,rgba(59,130,246,0.4)_1px,transparent_1px)]
                     bg-[size:120px_120px]"
        />

        {/* Contenido */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="max-w-4xl"
            >
              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-cyan-400 text-sm tracking-[0.3em] uppercase mb-6"
              >
                Nuestra historia
              </motion.p>

              {/* Título animado */}
              <h1 className="flex flex-wrap text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
                {title.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordAnimation}
                    className="mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              {/* Descripción */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
                className="mt-6 text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl"
              >
                Desde nuestros inicios, hemos desarrollado soluciones
                aeronáuticas de alto valor tecnológico, consolidando una cultura
                basada en la calidad, la precisión y la mejora continua.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Línea inferior decorativa */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px 
                        bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"
        />
      </section>
    </div>
  );
}
