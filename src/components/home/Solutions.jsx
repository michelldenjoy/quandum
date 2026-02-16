import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import StarfieldNebula from "../3d/StarfieldNebula";

const services = [
  {
    title: "AEROESPACIAL",
    tag: "DO-178  DO-254",
    image: "/aeroespacial.jpg",
    description: "Seguridad, certificación y sistemas críticos de vuelo.",
    items: [
      "Sistemas de Aeronavegabilidad (Airworthy Systems): Desarrollo integral desde la especificación hasta la certificación bajo estándares RTCA/DO-178 y DO-254.",
      "Computación Embarcada: Diseño de ordenadores de abordo Full Custom (Mecánica, Electrónica y SW) adaptados a plataformas específicas.",
      "Mantenimiento y Retrofit (A/C Maintenance): Actualización de sistemas existentes, extensión de vida útil de aeronaves y gestión de documentación técnica de aeronavegabilidad.",
      "Ingeniería Inversa: Soluciones avanzadas para sistemas obsoletos, garantizando la continuidad operativa de la flota.",
    ],
    gradient: "from-brand-blue/50 to-brand-blue/40",
  },
  {
    title: "DEFENSA",
    tag: "MIL-STD-704 MIL-HBK-204",
    image: "/defensa.jpg",
    description:
      "Tecnología táctica, precisión y cumplimiento de normativas militares.",
    items: [
      "Sistemas Optrónicos Avanzados: Diseño de cámaras y algoritmos de visión con respuesta en múltiples longitudes de onda (VIS, NIR, SWIR y Térmico).",
      "Tecnología Láser: Desarrollo de iluminadores y designadores láser (CW o PW) para aplicaciones de misión.",
      "Protocolos de Misión y Comunicaciones: Sistemas de vídeo y protocolos de comunicación robustos para entornos de alta interferencia.",
      "Cumplimiento de Estándares Militares: Equipos validados bajo MIL-STD-704 y MIL-HBK-204, garantizando resistencia en condiciones extremas (EMI/EMC y ambiente).",
    ],
    gradient: "from-brand-blue/50 to-brand-blue/40",
  },
  {
    title: "INDUSTRIAL",
    tag: "MANUFACTURA AVANZADA",
    image: "/industrial.jpg",
    description:
      "Capacidad productiva, prototipado rápido y soluciones a medida.",
    items: [
      "Fabricación Aditiva y Sinterizado: Especialistas en sinterizado de metal en 3D y mecanizado de alta precisión para componentes complejos.",
      "Diseño de Envolventes Mecánicas: Desarrollo de housings y estructuras robustas para protección de electrónica crítica.",
      "Diseño y Fabricación de Cableados (Harness): Manufactura de mazos de cables específicos para sectores de alta exigencia técnica.",
      "Bancos de Ensayo (Test Branchs): Diseño y construcción de entornos de prueba personalizados para la validación de sistemas industriales.",
    ],
    gradient: "from-brand-blue/50 to-brand-blue/40",
  },
];

export default function Solutions() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
      <StarfieldNebula />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 max-w-3xl px-2 sm:px-0"
        >
          <span className="block text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.30em] font-medium text-slate-300 uppercase mb-4 sm:mb-6">
            Sectores que operamos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-white tracking-tight leading-[1.1]">
            Ingeniería de
            <br />
            <span className="font-semibold">Sistemas Críticos</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Desde el diseño conceptual hasta la certificación final de
            aeronavegabilidad. Transformamos especificaciones complejas en
            soluciones tecnológicas de alto rendimiento bajo los estándares más
            rigurosos de la industria aeroespacial y de defensa.
          </p>
        </motion.div>

       
        <div className="space-y-3 sm:space-y-4">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Glow cuando se expande */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} opacity-20 blur-xl rounded-xl sm:rounded-2xl`}
                    />
                  )}
                </AnimatePresence>

                {/* Main Card */}
                <div
                  className={`relative bg-slate-900/60 backdrop-blur-md border rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 ${
                    isExpanded
                      ? "border-white/20 shadow-2xl"
                      : "border-slate-800/50 hover:border-slate-700/70"
                  }`}
                >
                  {/* Header*/}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-4 sm:p-6 md:p-8 flex items-center justify-between gap-3 sm:gap-4 group/header transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-1 min-w-0">
                     
                      <div className="text-left flex-1 min-w-0">
                        <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2 flex-wrap">
                          <span
                            className={`text-[0.65rem] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full whitespace-nowrap ${
                              isExpanded
                                ? `bg-gradient-to-r ${service.gradient} text-white`
                                : "bg-slate-800/50 text-slate-400"
                            } transition-all duration-300`}
                          >
                            {service.tag}
                          </span>
                          <span className="text-slate-600 font-mono text-xs sm:text-sm">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h3
                          className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] transition-colors duration-300 ${
                            isExpanded ? "text-brand-pink/80" : "text-white"
                          }`}
                        >
                          {service.title}
                        </h3>
                      </div>
                    </div>

                   
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isExpanded
                          ? `border-white/30 bg-white/10`
                          : "border-slate-700 bg-slate-800/30 group-hover/header:border-slate-600"
                      }`}
                    >
                      <svg
                        className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${
                          isExpanded ? "text-white" : "text-slate-400"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.div>
                  </button>

                  {/* contenido expandido */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-slate-800/50">
                          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-5 md:p-6 lg:p-8">
                            {/* izquierda: Imagen */}
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                              className="relative h-[220px] sm:h-[280px] md:h-[320px] lg:h-[400px] rounded-lg sm:rounded-xl overflow-hidden group/image"
                            >
                              <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60" />
                            </motion.div>

                            {/* derecha: Contenido */}
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="flex flex-col justify-center"
                            >
                              
                              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                                {service.description}
                              </p>

                              
                              <div
                                className={`h-px w-full bg-gradient-to-r ${service.gradient} opacity-30 mb-4 sm:mb-6`}
                              />

                              {/* Caracteristicas (items) */}
                              <div className="space-y-2.5 sm:space-y-3">
                                {service.items.map((item, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      delay: 0.3 + idx * 0.05,
                                    }}
                                    className="flex items-start gap-2.5 sm:gap-3 group/item"
                                  >
                                    <div className="mt-1.5 sm:mt-2 flex-shrink-0">
                                      <div
                                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} group-hover/item:scale-150 transition-transform duration-300`}
                                      />
                                    </div>
                                    <span className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed group-hover/item:text-white transition-colors duration-300">
                                      {item}
                                    </span>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}