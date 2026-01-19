import React from "react";
import { motion, useInView } from "motion/react";

export default function Collage() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 bg-white overflow-hidden"
    >
      {/* Fondo */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Grid técnico sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Glow*/}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 xl:gap-20 items-center">
          {/* Contenido de texto - Izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 md:space-y-8 order-1"
          >
            {/* Título principal */}
            <div className="space-y-4 md:space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05]"
              >
                <span className="block text-black">TALENTO TÉCNICO PARA </span>
                <span className="block mt-2 bg-gradient-to-r from-brand-blue to-black bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  MISIONES REALES
                </span>
              </motion.h2>
            </div>

            {/* Descripción */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="space-y-4 md:space-y-5 text-base text-justify sm:text-lg lg:text-xl text-slate-500 leading-relaxed"
            >
              <p>
                Creemos que la ingeniería es una disciplina que combina rigor
                técnico, responsabilidad y vocación. Cada sistema que diseñamos
                tiene un impacto en entornos que demandan fiabilidad. Trabajamos con tecnologías avanzadas, procesos
                auditables y normativas internacionales exigentes. Nuestro
                compromiso no es solo con la innovación, sino con la seguridad,
                la trazabilidad y la calidad a largo plazo.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-2"
          >
            <div className="flex flex-col gap-4 sm:gap-6">
              {/* Imagen 1 - Arriba */}
              <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-2"
          >
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
              {/* Imagen 1 - Arriba */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="relative group"
              >
                <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[280px] xl:h-[300px] overflow-hidden bg-gray-100 shadow-xl">
                  <img
                    src="/images/collage4.jpg"
                    alt="Sistema aeronáutico en operación"
                    className="w-full rounded  h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay  */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute top-2 left-2 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute top-2 right-2 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-2 left-2 w-6 h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
              </motion.div>

              {/* Imagen 2 - Abajo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="relative group"
              >
                <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[280px] xl:h-[300px] overflow-hidden bg-gray-100 shadow-xl">
                  <img
                    src="/images/collage2.jpg"
                    alt="Equipo de ingeniería"
                    className="w-full h-full rounded object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay  */}
                  <div className="absolute inset-0 bg-gradient-to-tl from-black/30 via-transparent to-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Esquinas técnicas */}
                  <div className="absolute top-2 left-2 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute top-2 right-2 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-2 left-2 w-6 h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
              </motion.div>
            </div>
          </motion.div>
            </div>
          </motion.div>
        </div>

      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </section>
  );
}
