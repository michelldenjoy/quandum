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
          <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 max-w-2xl mx-auto">
              
              {/* Imagen 1 - Superior Izquierda */}
              <motion.div
                initial={{ opacity: 0, x: -40, y: -40 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10 group cursor-pointer"
              >
                <img 
                  src="/images/collage1.jpg" 
                  alt="Laboratorio aeronáutico" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Imagen 2 - Superior Derecha */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: -40 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl ring-1 ring-cyan-500/20 group cursor-pointer"
              >
                <img 
                  src="/images/collage2.jpg" 
                  alt="Equipo de ingeniería" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Imagen 3 - Inferior Izquierda */}
              <motion.div
                initial={{ opacity: 0, x: -40, y: 40 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.7 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl ring-1 ring-cyan-500/20 group cursor-pointer"
              >
                <img 
                  src="/images/collage3.jpg" 
                  alt="Sistemas de prueba" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Imagen 4 - Inferior Derecha */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 40 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.8 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10 group cursor-pointer"
              >
                <img 
                  src="/images/collage4.jpg" 
                  alt="Sistema en vuelo" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </div>

            {/* Glow sutil de fondo */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-500/5 blur-3xl rounded-full" />
            </div>
          </motion.div>
            {/* Glow */}
            {/* <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/10 blur-3xl rounded-full" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}