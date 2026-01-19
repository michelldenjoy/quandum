import { useState, Fragment } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function SectorsSection() {
  const [active, setActive] = useState(null);

  const sectors = [
    {
      id: "aero",
      title: "Aeroespacial",
      number: "01",
      short: "Sistemas electrónicos y optoelectrónicos para aeronaves.",
      image: "/aeroespacial.jpg",
      description: `Desarrollo de sistemas críticos embarcados, electrónica certificable, optoelectrónica y soluciones diseñadas para operar en entornos extremos bajo estándares aeronáuticos internacionales.`,
      specs: ["DO-178C", "DO-254", "ARP4754A"],
    },
    {
      id: "defense",
      title: "Defensa",
      number: "02",
      short: "Soluciones certificables para entornos de alta exigencia.",
      image: "/defensa.jpg",
      description: `Ingeniería avanzada aplicada a programas militares, con foco en fiabilidad, robustez y cumplimiento normativo MIL-STD y RTCA.`,
      specs: ["MIL-STD-810", "MIL-STD-461", "RTCA"],
    },
    {
      id: "industrial",
      title: "Industrial",
      number: "03",
      short: "Automatización, control e instrumentación avanzada.",
      image: "industrial.jpg",
      description: `Diseño y desarrollo de sistemas industriales especiales, integrando electrónica, software y mecánica para aplicaciones donde la precisión, la continuidad operativa y la fiabilidad son esenciales.`,
      specs: ["IEC 61508", "ISO 13849", "IEC 62061"],
    },
  ];

  const activeSector = sectors.find((s) => s.id === active);

  return (
    <section className="relative w-full bg-white py-16 lg:py-24 overflow-hidden">
     
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute top-1/3 right-1/4 w-[900px] h-[900px] bg-brand-blue/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-start gap-8">
            {/* Línea vertical decorativa */}
            <div className="hidden md:flex flex-col items-center gap-2 pt-2">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-black to-transparent" />
              <div className="w-1.5 h-1.5 bg-black rotate-45" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-[10px] tracking-[0.25em] text-gray-400 font-medium uppercase">
                  Sectores
                </span>
                <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-gray-300 to-transparent" />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black mb-4 tracking-tight">
                 <span className="font-semibold">Sectores</span> en los que operamos
              </h2>
              
              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
              Hardware, software y mecánica concebidos como un sistema único,
              desarrollado bajo criterios de fiabilidad, seguridad y certificación.
              </p>
            </div>
          </div>
        </motion.div>

          {/* linea decorativa de titulo */}

          {/* <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "60%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-brand-steel to-transparent rounded-full mb-8 mx-auto"
            style={{
              backgroundImage:
                "linear-gradient(to right, transparent, #A9A9A9, transparent), repeating-linear-gradient(to right, transparent 0%, transparent 10%, #A9A9A9 10%, #A9A9A9 12%)", // Patrón de dashes metálicos
            }}
          /> */}
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {sectors.map((sector, index) => (
            <Fragment key={sector.id}>
              {/* Card del sector */}
              <motion.button
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={() =>
                  setActive(active === sector.id ? null : sector.id)
                }
                className={`relative text-left p-8 rounded-2xl border transition-all duration-500 group overflow-hidden
                  ${
                    active === sector.id
                      ? "border-black bg-gradient-to-br from-gray-50 to-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg"
                  }`}
              >
                {/* Línea superior decorativa */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-black via-brand-blue to-black transition-all duration-500 ${
                    active === sector.id
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-50"
                  }`}
                />

                <div className="relative z-10">
                  {/* Número de sector */}
                  <div
                    className={`text-6xl font-black mb-4 transition-all duration-500 ${
                      active === sector.id
                        ? "text-brand-blue"
                        : "text-gray-200 group-hover:text-gray-300"
                    }`}
                  >
                    {sector.number}
                  </div>

                  {/* Título */}
                  <h4
                    className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                      active === sector.id
                        ? "text-black"
                        : "text-gray-900 group-hover:text-black"
                    }`}
                  >
                    {sector.title}
                  </h4>

                  {/* Descripción corta */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {sector.short}
                  </p>

                  {/* Especificaciones técnicas */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {sector.specs.map((spec) => (
                      <span
                        key={spec}
                        className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded border border-gray-200"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Indicador */}
                  <div className="flex items-center text-sm font-medium text-gray-500 group-hover:text-black transition-colors">
                    <span
                      className={`transition-all duration-300 ${
                        active === sector.id ? "text-brand-blue" : ""
                      }`}
                    >
                      {active === sector.id
                        ? "Ocultar información"
                        : "Ver información"}
                    </span>
                    <svg
                      className={`ml-2 w-4 h-4 transition-all duration-300 ${
                        active === sector.id
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

                {/* Esquinas técnicas en hover */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-brand-blue/0 group-hover:border-brand-blue/50 transition-all duration-500" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-brand-blue/0 group-hover:border-brand-blue/50 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-brand-blue/0 group-hover:border-brand-blue/50 transition-all duration-500" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-brand-blue/0 group-hover:border-brand-blue/50 transition-all duration-500" />
              </motion.button>

              {/* Panel expandido móvil */}
              <AnimatePresence>
                {active === sector.id && (
                  <motion.div
                    key={`${sector.id}-mobile`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="md:hidden col-span-1 overflow-hidden"
                  >
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                      <div className="relative overflow-hidden rounded-xl mb-6 group">
                        <img
                          src={sector.image}
                          alt={sector.title}
                          className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                        {/* Badge técnico */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="backdrop-blur-xl bg-white/95 rounded-lg px-4 py-2 border border-black/10 shadow-lg">
                            <div className="text-xs font-bold text-black">
                              {sector.number} — {sector.title}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
                        {sector.description}
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
          {active && activeSector && (
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
                      src={activeSector.image}
                      alt={activeSector.title}
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
                        {activeSector.number}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-2">
                          Sector
                        </div>
                        <h4 className="text-3xl lg:text-4xl font-black text-black">
                          {activeSector.title}
                        </h4>
                      </div>
                    </div>

                    <div className="h-px bg-gradient-to-r from-black via-brand-blue to-transparent" />

                    <p className="text-lg text-gray-700 text-justify leading-relaxed whitespace-pre-line">
                      {activeSector.description}
                    </p>

                    {/* Normativas y estándares */}
                    <div className="pt-4">
                      <div className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-3">
                        Normativas y Estándares
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        {activeSector.specs.map((spec) => (
                          <div
                            key={spec}
                            className="border border-gray-200 rounded-lg p-4 bg-white"
                          >
                            <div className="text-sm font-mono font-bold text-black">
                              {spec}
                            </div>
                          </div>
                        ))}
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
