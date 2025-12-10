import React from "react";
import { motion, useInView } from "motion/react";

export default function Collage() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative w-full bg-black py-10 overflow-hidden"
    >
      {/* Fondo sutil con textura metálica */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-800 to-black" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="space-y-8"
          >
            <div>
              {/* <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full mb-6"
              >
                El futuro se construye aquí
              </motion.span> */}

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.9 }}
                className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
              >
                Construyendo el futuro
                
                <span className="bg-gradient-to-r from-brand-blue via-slate-300 to-brand-blue bg-clip-text text-transparent font-bold"> de la aviación</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 1 }}
              className="space-y-5 text-lg lg:text-2xl text-slate-300 leading-relaxed"
            >
              <p>
                En Quandum Aerospace diseñamos y certificamos sistemas que operan en los entornos más exigentes del planeta: reabastecimiento en vuelo, visión nocturna, electrónica de potencia embarcada y software DO-178C DAL-A.
              </p>
              <p>
              Priorizamos la acción sobre el proceso. Cada trabajador tiene impacto directo desde el día uno, en proyectos reales que vuelan mañana.
              </p>
            </motion.div>

            {/* Micro-CTA */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <a
                href="/careers"
                className="group inline-flex items-center gap-3 text-cyan-400 font-medium hover:text-cyan-300 transition-colors duration-300"
              >
                Descubre las posiciones abiertas
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div> */}
          </motion.div>

        
          {/* COLLAGE*/}
          <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] w-full">
            {/* Imagen 1 – superior izquierda */}
            <motion.div
              initial={{ opacity: 0, x: -80, y: 60, rotate: -8 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0, rotate: -4 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute top-0 left-0 w-[45%] sm:w-52 lg:w-64 h-48 sm:h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 z-10"
            >
              <img src="/images/collage1.jpg" alt="Laboratorio" className="w-full h-full object-cover" />
            </motion.div>

            {/* Imagen 2 – superior derecha */}
            <motion.div
              initial={{ opacity: 0, y: -80, rotate: 6 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 3 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute top-0 right-0 w-[45%] sm:w-56 lg:w-72 h-56 sm:h-72 lg:h-96 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-cyan-500/20 z-20"
            >
              <img src="/images/collage2.jpg" alt="Equipo" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>

            {/* Imagen 3 – inferior izquierda */}
            <motion.div
              initial={{ opacity: 0, x: -80, y: 40, rotate: -8 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0, rotate: -4 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute bottom-0 left-0 w-[45%] sm:w-52 lg:w-64 h-48 sm:h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 z-10"
            >
              <img src="/images/collage3.jpg" alt="Pruebas" className="w-full h-full object-cover" />
            </motion.div>

            {/* Imagen 4 – inferior derecha (la más prominente) */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 1.1, delay: 1 }}
              whileHover={{ scale: 1.02 }}
              className="absolute bottom-0 right-0 w-[50%] sm:w-64 lg:w-80 h-56 sm:h-72 lg:h-96 rounded-2xl overflow-hidden shadow-2xl ring-2 ring-cyan-500/30 z-30 cursor-pointer group"
            >
              <img src="/images/collage4.jpg" alt="Sistema en vuelo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 sm:p-6 lg:p-8">
                {/* <p className="text-white font-medium text-sm sm:text-base lg:text-lg">Sistema BEVS en pruebas de vuelo reales</p> */}
              </div>
            </motion.div>

            {/* Glow */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/10 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}