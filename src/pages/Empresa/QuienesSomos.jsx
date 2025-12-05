import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { Award, Users, Check } from "lucide-react";

export default function QuienesSomos() {
  // Motion 11 parallax
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 800], [0, -60]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // imágenes oficiales
  const gallery = [
    "/images/about-1.jpg",
    "/images/about-2.jpg",
    "/images/about-3.jpg",
    "/images/about-4.jpg",
    "/images/about-6.jpg",
  ];

  const caseStudies = [
    {
      title: "Diseño e integración de sistemas optoelectrónicos",
      subtitle: "Iluminación IR & BEVS",
      text: "Desarrollo de subsistemas optoelectrónicos integrados para visión mejorada en reabastecimiento aéreo. Diseño de hardware, firmware y ensayos ambientales para entornos críticos.",
      image: "/images/case-1.jpg",
    },
    {
      title: "Electrónica de potencia y control",
      subtitle: "Sistemas aeronáuticos de alimentación",
      text: "Diseño de electrónica de potencia con alta fiabilidad, placas multicapa y mitigación EMI/EMC. Integración con unidades embarcadas y verificación completa.",
      image: "/images/case-2.jpg",
    },
    {
      title: "Software embebido y certificación",
      subtitle: "RTOS & SW crítico",
      text: "Desarrollo de software en tiempo real con prácticas robustas de verificación, trazabilidad y preparación de entregables para certificación aeronáutica.",
      image: "/images/case-3.jpg",
    },
  ];

  const checklistItems = [
    "Integración HW–SW–Mecánica completa",
    "Ensayos ambientales MIL-STD / RTCA DO-160",
    "Control de configuración y trazabilidad total",
    "Documentación para certificación EASA/FAA",
  ];

  return (
    <main className="text-white ">
      {/* ---------------- HERO ---------------- */}
      <header className="relative overflow-hidden min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] flex items-center">
        <div className="absolute inset-0">
          {/* img de fondo */}
          <motion.div
            style={{
              y: y2,
              backgroundImage: "url('/images/about-hero-bg.jpg')",
            }}
            className="absolute inset-0 bg-cover bg-center opacity-50"
          />
          {/* capa oscura */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/5 via-black/5 to-black/10" />
        </div>

        <motion.div
          style={{ opacity, scale }}
          className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-32 lg:py-40 z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center"
              >
                <a
                  href="#ingenieria"
                  className="px-6 py-3 bg-gradient-to-r from-brand-blue via-slate-500 to-brand-blue hover:from-slate-900 hover:via-slate-500 hover:to-slate-900 hover:shadow-blue-300/30 hover:scale-105 text-white font-semibold text-lg rounded transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20 overflow-hidden group active:scale-[0.98] "
                >
                  Nuestro enfoque
                </a>
                <a
                  href="/contacto"
                  className="px-6 py-3 border border-white/10 rounded-lg text-sm text-slate-200 hover:bg-white/5 text-center transition-all duration-300 hover:border-white/30"
                >
                  Contacto
                </a>
              </motion.div>
            </motion.div>

            {/* bloque space-betwen de hero */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="p-4 sm:p-6 bg-zinc-900/60 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-cyan-500/50 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600" />
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold">30</div>
                    <div className="text-xs sm:text-sm text-slate-300">
                      Empleados
                    </div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  El 95% del equipo está formado por ingenieros especializados.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
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
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Amplia trayectoria en aeroespacial, defensa e industria.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </header>

      {/* ---------------- GALLERIA ----------------  */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-l from-stone-800 via-stone-500 to-black/10">
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-10"
          >
            {/* <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-zinc-900 text-slate-200 border border-cyan-500/20 rounded-full mb-6">
              Instalaciones & Proyectos
            </span> */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
              Laboratorio de alta precisión
            </h2>
            <p className="text-slate-200 mt-4 max-w-2xl font-extrabold mx-auto text-sm sm:text-base px-4">
              Espacios diseñados para el desarrollo de sistemas críticos: salas
              limpias, bancos de pruebas EMI/EMC y estaciones de integración
              HW/SW.
            </p>
          </motion.div>

          {/* Grid de img soldadura*/}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 auto-rows-[150px] sm:auto-rows-[250px] md:auto-rows-[350px] lg:auto-rows-[420px]">
            {/* Imagen soldadura */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="col-span-2 row-span-2 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 group relative"
            >
              <img
                src={gallery[0]}
                alt="Laboratorio principal"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 sm:p-6">
                <p className="text-white font-medium text-sm sm:text-base">
                  Sala de integración de sistemas
                </p>
              </div>
            </motion.div>

            {/* Imagen mediana Jhon*/}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl ring-1 ring-cyan-500/20 group relative"
            >
              <img
                src={gallery[1]}
                alt="Equipo"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>

            {/* Imagen vertical Isa y Merche*/}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="row-span-1 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10 group relative"
            >
              <img
                src={gallery[2]}
                alt="Pruebas"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>

            {/* Imagen extra*/}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="row-span-1 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10 group relative"
            >
              <img
                src={gallery[4]}
                alt="Pruebas"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>

            {/* Imagen mediana 2 Impresora3D*/}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10 group relative"
            >
              <img
                src={gallery[3]}
                alt="Proyecto"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- INGENIERÍA & PROCESO ---------------- */}
      <section id="ingenieria" className="py-16 sm:py-24 lg:py-32 bg-militar ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Ingeniería & Proceso
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-4xl mx-auto px-4">
              Flujo disciplinado end-to-end con trazabilidad completa y
              cumplimiento aeronáutico.
            </p>
          </motion.div>

          <div className="space-y-20 sm:space-y-24 lg:space-y-32">
            {caseStudies.map((c, i) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, margin: "-100px" });

              return (
                <motion.div
                  key={i}
                  ref={ref}
                  initial={{ opacity: 0, y: 100 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8  sm:gap-12 lg:gap-16 items-center ${
                    i % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.14 }}
                    transition={{ duration: 0.6 }}
                    className={`${i % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-2xl ring-1 ring-white/10"
                    />
                  </motion.div>

                  <div
                    className={`${
                      i % 2 === 1 ? "lg:order-1" : ""
                    } space-y-4 sm:space-y-6`}
                  >
                    <div className="flex items-center gap-3 text-cyan-500">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase">
                        {c.subtitle}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                      {c.title}
                    </h3>
                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                      {c.text}
                    </p>

                    <ul className="space-y-3 text-white">
                      {checklistItems.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm sm:text-base">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
