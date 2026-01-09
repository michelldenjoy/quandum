import { motion, useScroll, useTransform } from "motion/react";
import { div } from "motion/react-client";
import HeroVideo from "../../components/about/HeroVideo";


export default function Calidad() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0.3]);



  return (

<div>

      <HeroVideo
        eyebrow="Nuestra · Politica de Calidad"
        title="Compromiso con la calidad"
        description="Excelencia aeronáutica respaldada por estándares internacionales."
        backgroundImage="/images/about-1.jpg"
      />

    <section >
      
      {/* linea decorativa vertical */}
       <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 right-10 w-96 h-96 border border-cyan-500/10 rounded-full" />
        <div className="absolute bottom-40 left-20 w-72 h-72 border border-sky-400/10 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-1 h-64 bg-gradient-to-b from-transparent via-brand-blue/60 to-transparent" />
      </motion.div> 

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 md:py-32">


        <motion.article
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-cyan-500/20 rounded-2xl p-8 md:p-14 mb-20"
        >
          {/* Acento decorativo */}
          {/* <div className="absolute top-0 left-8 w-24 h-1 bg-gradient-to-r from-cyan-400 to-transparent" /> */}

          <div className="space-y-6 text-slate-200">
            <p className="text-lg md:text-xl leading-relaxed">
              La Dirección de{" "}
              <span className="text-white bg-clip-text font-extrabold text-transparent">
                Quandum{" "}
              </span>{" "}
              <span className="bg-gradient-to-r from-brand-pink via-red-400 to-red-700 bg-clip-text font-semibold text-transparent">
                Aerospace
              </span>{" "}
              busca obtener la excelencia en todas sus actividades y
              consolidarse como empresa líder del sector aeronáutico, militar e
              industrial. Para ello, siendo consciente de la importancia de la
              calidad y la satisfacción del cliente, la empresa ha implantado un
              Sistema de Gestión de la Calidad basado en las normas{" "}
              <span className="font-bold text-cyan-300">EN 9100:2018</span> e{" "}
              <span className="font-bold text-cyan-300">ISO 9001:2015</span>.
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent my-8" />

            <p className="text-lg md:text-xl leading-relaxed">
              <span className="font-bold text-white">Quandum Aerospace</span>{" "}
              asume el compromiso de identificar y satisfacer los requisitos del
              cliente y los normativos y legales asociados, impulsando la mejora
              continua a todos los niveles de la organización.
            </p>
          </div>

          {/* Acento decorativo inferior */}
          {/* <div className="absolute bottom-0 right-8 w-24 h-1 bg-gradient-to-l from-cyan-400 to-transparent" /> */}
        </motion.article>

        {/* GRID DE OBJETIVOS Y VALORES - MEJORADO */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {/* Objetivos Estratégicos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-sky-600/20 rounded-2xl blur-xl 
                          group-hover:blur-2xl transition-all duration-500"
            />

            <div
              className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 
                          border border-cyan-500/30 rounded-2xl p-8 md:p-10 
                          hover:border-cyan-400/50 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-8">
                {/* <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div> */}
                <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
                  <span className="text-white">Objetivos</span>
                  <span className="bg-gradient-to-r from-blue-100 via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                    {" "}
                    Estrategicos
                  </span>
                </h2>
              </div>

              <ul className="space-y-5">
                {[
                  "Concienciar al equipo directivo sobre la calidad",
                  "Establecer indicadores medibles en procesos clave",
                  "Fomentar la participación activa del personal",
                  "Garantizar la formación continua del equipo",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start gap-4 group/item"
                  >
                    <span className="text-cyan-400 text-xl mt-1 group-hover/item:scale-110 transition-transform">
                      ▸
                    </span>
                    <span className="text-slate-200 text-lg leading-relaxed group-hover/item:text-cyan-100 transition-colors">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Valores Fundamentales */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-cyan-600/20 rounded-2xl blur-xl 
                          group-hover:blur-2xl transition-all duration-500"
            />

            <div
              className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 
                          border border-sky-500/30 rounded-2xl p-8 md:p-10 
                          hover:border-sky-400/50 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-sky-400">
                  <span className="text-white">Valores</span>
                  <span className="bg-gradient-to-r from-blue-100 via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                    {" "}
                    Fundamentales
                  </span>
                </h2>
              </div>

              <ul className="space-y-5">
                {[
                  "Enfoque absoluto al cliente",
                  "Gestión integral por procesos",
                  "Análisis y gestión de riesgos",
                  "Formación continua y especializada",
                  "Cultura de mejora continua",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start gap-4 group/item"
                  >
                    <span className="text-sky-400 text-xl mt-1 group-hover/item:scale-110 transition-transform">
                      ▸
                    </span>
                    <span className="text-slate-200 text-lg leading-relaxed group-hover/item:text-sky-100 transition-colors">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CERTIFICACIONES  */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 60 }}
          className="relative py-20"
        >
          {/* Líneas decorativas */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

          <div className="flex flex-col items-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-cyan-400 text-sm tracking-[0.3em] uppercase mb-8"
            >
              Certificación
            </motion.p>

            <div className="relative group">
              {/* Glow externo */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-sky-500/30 rounded-full blur-3xl 
                            scale-150 group-hover:scale-[1.7] transition-all duration-700"
              />

              {/* Sello principal */}
              <motion.div
                whileHover={{ scale: 1.035 }}
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: 22,
                  mass: 1,
                }}
                className="relative w-72 h-72 rounded-full 
                         bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
                         shadow-2xl border-2 border-cyan-500/40
                         flex flex-col items-center justify-center
                         group-hover:border-cyan-400/60 transition-all duration-500"
              >
                {/* Patrón técnico de fondo */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.3),transparent_70%)]" />
                </div>

                {/* Anillos decorativos */}
                <div className="absolute inset-8 border border-cyan-500/20 rounded-full" />
                <div className="absolute inset-16 border border-cyan-500/10 rounded-full" />

                {/* Contenido */}
                <div className="relative text-center z-10">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 0.4,
                      duration: 1,
                      ease: "easeOut",
                    }}
                  >
                    <p className="text-6xl font-bold bg-gradient-to-br from-cyan-400 to-sky-500 bg-clip-text text-transparent tracking-wider">
                      EN 9100
                    </p>
                    <p className="text-2xl text-slate-400 mt-3 font-light">
                      Rev. 2018
                    </p>
                  </motion.div>

                  <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent w-32 mx-auto mt-6 mb-6" />

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-xs text-cyan-400/80 tracking-[0.3em] font-semibold"
                  >
                    CERTIFIED SYSTEM
                  </motion.p>
                </div>

                {/* Badges en los bordes */}
                <motion.div
                  initial={{ scale: 0.85, rotate: -45, opacity: 0 }}
                  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{
                    delay: 0.8,
                    type: "spring",
                    stiffness: 80,
                    damping: 24,
                    mass: 1,
                  }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 
                           bg-gradient-to-r from-cyan-500 to-sky-500 
                           text-white text-xs font-bold px-6 py-2 rounded-full 
                           shadow-lg shadow-cyan-500/50"
                >
                  ISO 9001:2015
                </motion.div>

                <motion.div
                  initial={{ scale: 0.85, rotate: 45, opacity: 0 }}
                  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{
                    delay: 1,
                    type: "spring",
                    stiffness: 80,
                    damping: 24,
                    mass: 1,
                  }}
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 
                           bg-gradient-to-r from-sky-600 to-cyan-600 
                           text-white text-xs font-bold px-6 py-2 rounded-full 
                           shadow-lg shadow-sky-500/50"
                >
                  QUANDUM AEROSPACE
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Footer con compromiso */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-24 pb-12"
        >
          <p className="text-slate-400 text-sm tracking-wider italic max-w-2xl mx-auto">
            "Nuestra misión es entregar soluciones aeroespaciales que superen
            las expectativas, manteniendo los más altos estándares de calidad y
            seguridad en cada proyecto"
          </p>
        </motion.div>
      </div>

      {/* Estilos CSS para bg-aerospace */}
      <style jsx>{`
        .bg-aerospace {
          @apply relative overflow-hidden;
          background: linear-gradient(
            to bottom,
            rgb(2 6 23),
            rgb(15 23 42),
            rgb(2 6 23)
          );
        }

        .bg-aerospace::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
              rgba(59, 130, 246, 0.15) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(59, 130, 246, 0.15) 1px,
              transparent 1px
            );
          background-size: 100px 100px;
          opacity: 0.035;
          pointer-events: none;
        }

        .bg-aerospace::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
              circle at 25% 0%,
              rgba(56, 189, 248, 0.25),
              transparent 45%
            ),
            radial-gradient(
              circle at 75% 100%,
              rgba(34, 211, 238, 0.25),
              transparent 45%
            );
          pointer-events: none;
        }

        .bg-aerospace > * {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </section>
    
    </div>
  );
}
