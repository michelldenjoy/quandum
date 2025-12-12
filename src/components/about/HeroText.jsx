import React, { useMemo } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Users, Check } from "lucide-react";



export default function HeroText() {

    const { scrollY } = useScroll();
    const y2 = useTransform(scrollY, [0, 800], [0, -60]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
    const scale = useTransform(scrollY, [0, 300], [1, 0.97]);


      const scaleOnHover = useMemo(
        () => ({
          whileHover: { scale: 1.05, y: -5 },
          transition: { duration: 0.3 },
        }),
        []
      );

      const fadeInUp = useMemo(
        () => ({
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
        }),
        []
      );
  return (
    <div>
          
      {/* ---------------- HERO ---------------- */}
      <header className="relative overflow-hidden min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] flex items-center">
        <div className="absolute inset-0">
          <motion.div
            style={{
              y: y2,
              backgroundImage: "url('/images/about-hero-bg.jpg')",
            }}
            className="absolute inset-0 bg-cover bg-center opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/0.5 via-black/5 to-black/5" />
        </div>

        <motion.div
          style={{ opacity, scale }}
          className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-32 lg:py-40 z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="pt-9 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6"
              >
                QUANDUM AEROSPACE: ingeniería que impulsa el futuro
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed"
              >
                QUANDUM AEROSPACE nace en 2006 con un objetivo claro:
                transformar la ingeniería en soluciones de alto valor donde la
                precisión y la fiabilidad son esenciales. Hoy integramos diseño,
                fabricación y soporte dentro de un ecosistema altamente
                especializado.
              </motion.p>

              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center"
              >
                <a
                  href="#ingenieria"
                  className="px-6 py-3 bg-gradient-to-r from-brand-blue via-slate-500 to-brand-blue hover:from-slate-900 hover:via-slate-500 hover:to-slate-900 hover:shadow-blue-300/30 hover:scale-105 text-white font-semibold text-lg rounded transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-blue-500/20 overflow-hidden group active:scale-[0.98]"
                >
                  Nuestro enfoque
                </a>
                <a
                  href="/contacto"
                  className="px-6 py-3 border border-white/10 rounded-lg text-sm text-slate-200 hover:bg-white/5 text-center transition-all duration-300 hover:border-white/30"
                >
                  Contacto
                </a>
              </motion.div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0"
            >
              <motion.div
                {...scaleOnHover}
                className="p-4 sm:p-6 bg-zinc-900/60 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-cyan-500/50 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600" />
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold">
                      Profesionales
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300">
                      Expertos
                    </div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm md:text-lg text-slate-300 leading-relaxed">
                  El 95% del equipo está formado por ingenieros especializados.
                </p>
              </motion.div>

              <motion.div
                {...scaleOnHover}
                className="p-4 sm:p-6 bg-zinc-900/60 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-blue-500/50 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3">
                  <Check className="w-6 h-6 sm:w-8 sm:h-8 text-brand-blue" />
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold">20+</div>
                    <div className="text-xs sm:text-sm text-slate-300">
                      Años de experiencia
                    </div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Amplia trayectoria en el sector aeroespacial, defensa e industria.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </header>
    </div>
  )
}
