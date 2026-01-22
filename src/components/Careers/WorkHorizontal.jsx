import { useState, Fragment } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function WorkHorizontal() {
  const [active, setActive] = useState(null);

  const sections = [
    {
      id: "autonomy",
      title: "Automatización",
      number: "01",
      description:
        "Desarrollamos sistemas autónomos avanzados que permiten a las aeronaves operar de manera inteligente y adaptativa. Nuestra tecnología de IA integrada toma decisiones críticas en tiempo real, optimizando errores con alta precisión y reduciendo la necesidad de múltiples operarios.",
      image: "/bgmilitar.jpg",
    },
    {
      id: "speed",
      title: "Rapidez",
      number: "02",
      description:
        "La velocidad define nuestra ingeniería. Desde el diseño conceptual hasta el despliegue operacional, aceleramos cada fase del desarrollo aeroespacial. Nuestros ciclos iterativos rápidos y metodologías ágiles nos permiten llevar innovaciones del laboratorio al cielo en tiempo récord, manteniendo los más altos estándares de seguridad.",
      image: "/bgmili.jpg",
    },
    {
      id: "scale",
      title: "Escala",
      number: "03",
      description:
        "Construimos pensando en el crecimiento global. Nuestra infraestructura avanzada de manufactura y nuestras cadenas de suministro robustas nos permiten producir en gran escala sistemas electrónicos aeronáuticos esenciales sin comprometer la calidad ni las certificaciones.",
      image: "/images/scale.jpg",
    },
    {
      id: "impact",
      title: "Impacto",
      number: "04",
      description:
        "Nuestro trabajo transforma industrias y salva vidas. Desde misiones de búsqueda y rescate hasta logística de emergencia y monitoreo ambiental, cada componente que construimos tiene un propósito crítico.",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    },
  ];

  const activeSection = sections.find((s) => s.id === active);

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/4 w-[900px] h-[900px] bg-brand-blue/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16  lg:mb-20">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex-1">
              {/*TITULO PRINCIPAL*/}
              <div className="flex mt-8 items-center gap-4 mb-6">
                {/* <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black" />
                  <div className="w-1 h-1 bg-gray-400" />
                  <div className="w-1 h-1 bg-gray-300" />
                </div> */}
                <span className="text-sm tracking-[0.3em] text-gray-500 font-medium uppercase">
                  Careers
                </span>
              </div>

              {/* TITULO PRINCIPAL */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-black tracking-tight leading-[1.1]">
                Cómo
                <br />
                <span className="font-bold">trabajamos</span>
              </h2>
              <p className="text-gray-600 text-justify text-base md:text-lg mt-6 leading-relaxed max-w-4xl">
                Nuestros proyectos se desarrollan bajo metodologías
                estructuradas y procesos documentados, garantizando trazabilidad
                y cumplimiento normativo en todas las fases. Fomentamos un
                entorno colaborativo donde el conocimiento se comparte, las
                decisiones se analizan con criterio técnico y cada ingeniero
                entiende el impacto de su trabajo dentro del sistema completo.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {sections.map((section, index) => (
            <Fragment key={section.id}>
              {/* Card */}
              <motion.button
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={() =>
                  setActive(active === section.id ? null : section.id)
                }
                className={`relative text-left p-8 rounded-2xl border transition-all duration-500 group overflow-hidden
                  ${
                    active === section.id
                      ? "border-black bg-gradient-to-br from-gray-50 to-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg"
                  }`}
              >
                {/* Línea superior */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-black via-brand-blue to-black transition-all duration-500 ${
                    active === section.id
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-50"
                  }`}
                />

                <div className="relative z-10">
                  {/* Número de sección */}
                  <div
                    className={`text-6xl font-black mb-4 transition-all duration-500 ${
                      active === section.id
                        ? "text-brand-blue"
                        : "text-gray-200 group-hover:text-gray-300"
                    }`}
                  >
                    {section.number}
                  </div>

                  {/* Título */}
                  <h4
                    className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                      active === section.id
                        ? "text-black"
                        : "text-gray-900 group-hover:text-black"
                    }`}
                  >
                    {section.title}
                  </h4>

                  {/* Preview  */}
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6">
                    {section.description}
                  </p>

                  {/* Indicador */}
                  <div className="flex items-center text-sm font-medium text-gray-500 group-hover:text-black transition-colors">
                    <span
                      className={`transition-all duration-300 ${
                        active === section.id ? "text-brand-blue" : ""
                      }`}
                    >
                      {active === section.id
                        ? "Ocultar información"
                        : "Ver información"}
                    </span>
                    <svg
                      className={`ml-2 w-4 h-4 transition-all duration-300 ${
                        active === section.id
                          ? "rotate-180 text-brand-blue"
                          : "group-hover:translate-x-1"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Esquinas en hover */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-brand-blue/0 group-hover:border-brand-blue/50 transition-all duration-500" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-brand-blue/0 group-hover:border-brand-blue/50 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-brand-blue/0 group-hover:border-brand-blue/50 transition-all duration-500" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-brand-blue/0 group-hover:border-brand-blue/50 transition-all duration-500" />
              </motion.button>

              {/* Panel expandido móvil */}
              <AnimatePresence>
                {active === section.id && (
                  <motion.div
                    key={`${section.id}-mobile`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="md:hidden col-span-1 overflow-hidden"
                  >
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                      <div className="relative overflow-hidden rounded-xl mb-6 group">
                        <img
                          src={section.image}
                          alt={section.title}
                          className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                        {/* Badge */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="backdrop-blur-xl bg-white/95 rounded-lg px-4 py-2 border border-black/10 shadow-lg">
                            <div className="text-xs font-bold text-black">
                              {section.number} — {section.title}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-base text-gray-700 leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Fragment>
          ))}
        </div>

        {/* Panel expandido desktop */}
        <AnimatePresence mode="wait">
          {active && activeSection && (
            <motion.div
              key={`${active}-desktop`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="hidden md:block"
            >
              <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl p-10 lg:p-12 border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Imagen */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative overflow-hidden rounded-2xl group"
                  >
                    <img
                      src={activeSection.image}
                      alt={activeSection.title}
                      className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                    {/* Esquinas técnicas */}
                    <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-white/50" />
                    <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-white/50" />
                    <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-white/50" />
                    <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-white/50" />
                  </motion.div>

                  {/* Contenido */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="flex items-baseline gap-4">
                      <div className="text-7xl font-black text-brand-blue/20">
                        {activeSection.number}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-2">
                          Proceso
                        </div>
                        <h4 className="text-3xl lg:text-4xl font-black text-black">
                          {activeSection.title}
                        </h4>
                      </div>
                    </div>

                    <div className="h-px bg-gradient-to-r from-black via-brand-blue to-transparent" />

                    <p className="text-lg text-gray-700 text-justify leading-relaxed">
                      {activeSection.description}
                    </p>

                    {/* Especificaciones técnicas */}
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div className="border border-gray-200 rounded-lg p-4 bg-white">
                        <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
                          Metodología
                        </div>
                        <div className="text-sm font-bold text-black">
                          Certificada
                        </div>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4 bg-white">
                        <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
                          Estándar
                        </div>
                        <div className="text-sm font-bold text-black">
                          DO-178C
                        </div>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4 bg-white">
                        <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
                          Nivel
                        </div>
                        <div className="text-sm font-bold text-black">
                          DAL-A
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
