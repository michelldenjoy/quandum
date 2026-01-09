import React from "react";
import { motion, useInView } from "motion/react";

export default function Collage() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section ref={ref} className="relative pt-16  bg-white overflow-hidden">
      {/* Sistema de fondo minimalista */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Glow azul sutil corporativo */}
        <div
          className="absolute top-1/3 left-1/4 w-[900px] h-[900px] bg-brand-blue/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
        />

        {/* Grid técnico muy sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 xl:gap-28 items-center">
          {/* Texto - Izquierda */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="space-y-8 md:space-y-10 lg:space-y-12 order-2 lg:order-1"
          >
            {/* Badge superior */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex"
            ></motion.div>

            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 1.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05]"
              >
                <span className="block text-black">Construyendo</span>
                <span className="block text-black">el futuro</span>
                <span className="block mt-2 bg-gradient-to-r from-black via-brand-blue to-black bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  de la aviación
                </span>
              </motion.h2>

              {/* Línea decorativa */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={isInView ? { width: "100%", opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 1.2 }}
                className="h-0.5 bg-gradient-to-r from-black via-brand-blue to-transparent rounded-full max-w-md"
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 1.1 }}
              className="space-y-5 md:space-y-6 text-base sm:text-lg text-justify lg:text-xl text-gray-600 leading-relaxed max-w-xl"
            >
              <p className="text-gray-700">
                
              
                  Creemos que la ingeniería es una disciplina que combina rigor
                  técnico, responsabilidad y vocación. Cada sistema que
                  diseñamos tiene un impacto real en entornos donde la
                  fiabilidad no es opcional. Trabajamos con tecnologías
                  avanzadas, procesos auditables y normativas internacionales
                  exigentes. Nuestro compromiso no es solo con la innovación,
                  sino con la seguridad, la trazabilidad y la calidad a largo
                  plazo.
                                
              </p>
              {/* <p>
                Priorizamos la{" "}
                <span className="font-semibold text-black">
                  acción sobre el proceso
                </span>
                . Cada ingeniero tiene impacto directo desde el primer día en
                proyectos reales que vuelan mañana.
              </p> */}
            </motion.div>
          </motion.div>

          {/* Collage Premium - Derecha - Con más espacio respiratorio */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.3, delay: 0.2, ease: "easeOut" }}
            className="relative order-1 lg:order-2"
          >
            {/* Contenedor con más espacio - diseño menos apilado */}
            <div className="relative w-full h-[550px] sm:h-[650px] md:h-[750px] lg:h-[700px] xl:h-[800px]">
              {/* Imagen principal grande - Derecha superior con más espacio */}
              <motion.div
                initial={{ opacity: 0, x: 60, y: -30 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  zIndex: 50,
                  transition: { duration: 0.5, ease: "easeOut" },
                }}
                className="absolute top-0 right-0 w-[55%] sm:w-[52%] lg:w-[50%] h-[58%] sm:h-[60%] lg:h-[62%] z-30 group cursor-pointer"
              >
                <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/5 transition-shadow duration-500 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] group-hover:ring-brand-blue/30">
                  <img
                    src="/images/collage4.jpg"
                    alt="Sistema en vuelo real"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-95"
                  />
                  {/* Overlay minimalista */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  {/* Badge flotante minimalista */}
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="backdrop-blur-2xl bg-white/95 rounded-xl px-4 py-2.5 border border-black/10 shadow-xl">
                      <div className="text-xs font-bold text-black">
                        Sistema en Operación
                      </div>
                      <div className="text-xs text-gray-600 mt-0.5">
                        Certificación DAL-A
                      </div>
                    </div>
                  </div>
                  {/* Esquinas técnicas minimalistas */}
                  <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-brand-blue/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-brand-blue/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>

              {/* Imagen secundaria - Izquierda superior con más separación */}
              <motion.div
                initial={{ opacity: 0, x: -60, y: 30 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{
                  duration: 1,
                  delay: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  zIndex: 50,
                  transition: { duration: 0.5, ease: "easeOut" },
                }}
                className="absolute top-[12%] sm:top-[15%] left-0 w-[48%] sm:w-[46%] lg:w-[44%] h-[50%] sm:h-[52%] lg:h-[54%] z-20 group cursor-pointer"
              >
                <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/5 transition-shadow duration-500 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] group-hover:ring-black/20">
                  <img
                    src="/images/about-1.jpg"
                    alt="Laboratorio de pruebas avanzadas"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  {/* Badge flotante */}
                  <div className="absolute bottom-3 left-3 right-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                    <div className="backdrop-blur-2xl bg-white/95 rounded-xl px-3 py-2 border border-black/10 shadow-xl">
                      <div className="text-xs font-bold text-black">
                        Laboratorio Avanzado
                      </div>
                    </div>
                  </div>
                  {/* Indicador técnico con acento azul */}
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-brand-blue shadow-lg shadow-brand-blue/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-full bg-brand-blue animate-ping" />
                  </div>
                </div>
              </motion.div>

              {/* Imagen secundaria - Abajo derecha con mejor separación */}
              <motion.div
                initial={{ opacity: 0, x: 60, y: 60 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{
                  duration: 1,
                  delay: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  zIndex: 50,
                  transition: { duration: 0.5, ease: "easeOut" },
                }}
                className="absolute bottom-0 right-[5%] sm:right-[8%] lg:right-[10%] w-[52%] sm:w-[50%] lg:w-[48%] h-[38%] sm:h-[40%] lg:h-[42%] z-10 group cursor-pointer"
              >
                <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/5 transition-shadow duration-500 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] group-hover:ring-brand-blue/30">
                  <img
                    src="/images/collage2.jpg"
                    alt="Equipo de ingeniería en acción"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tl from-black/40 via-transparent to-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  {/* Badge flotante */}
                  <div className="absolute bottom-3 left-3 right-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <div className="backdrop-blur-2xl bg-white/95 rounded-xl px-3 py-2 border border-black/10 shadow-xl">
                      <div className="text-xs font-bold text-black">
                        Ingeniería en Acción
                      </div>
                    </div>
                  </div>
                  {/* Esquinas técnicas */}
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-brand-blue/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-brand-blue/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>

              {/* Elementos decorativos minimalistas - Solo desktop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.2, duration: 1 }}
                className="hidden xl:block"
              >
                {/* Glow azul corporativo muy sutil */}
                <div
                  className="absolute  w-40 h-40 bg-brand-blue/8 rounded-full blur-3xl animate-pulse"
                  style={{ animationDuration: "6s" }}
                />
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
