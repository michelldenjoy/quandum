import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import StarfieldNebula from "../3d/StarfieldNebula";

const services = [
  {
    title: "Hardware Aeronáutico",
    tag: "HARDWARE",
    image: "/images/hardware.jpg",
    description:
      "Diseño y desarrollo de hardware crítico y sistemas electrónicos embarcados para aplicaciones aeroespaciales, defensa e industriales de alta fiabilidad, siguiendo procesos orientados a certificación.",
    items: [
      "Arquitectura de sistemas electrónicos y hardware complejo",
      "Diseño de PCBs y electrónica embebida",
      "Integración HW/SW y computadores embarcados custom",
      "Diseño y fabricación de arneses y cableado",
      "Integración de sensores, actuadores y sistemas ópticos",
      "Ensayos funcionales, ambientales y EMI/EMC (DO-160)",
      "Soporte a certificación RTCA/DO-254",
    ],
    accentColor: "blue",
  },
  {
    title: "Software Crítico",
    tag: "SOFTWARE",
    image: "/images/software.jpeg",
    description:
      "Desarrollo de software crítico y embebido para sistemas de misión, diseñado desde el inicio bajo criterios de seguridad, trazabilidad y verificación aeronáutica.",
    items: [
      "Software embebido para sistemas aeronáuticos",
      "Arquitecturas de control y gestión de sistemas",
      "Algoritmos de visión y procesado de imagen",
      "Sistemas de vídeo y protocolos de comunicación",
      "Fusión de sensores VIS, NIR, SWIR y térmicos",
      "Verificación y validación basada en requisitos",
      "Cumplimiento RTCA/DO-178",
    ],
    accentColor: "pink",
  },
  {
    title: "Ingeniería Industrial & Manufactura Avanzada",
    tag: "INDUSTRIAL",
    image: "/images/mecanica.webp",
    description:
      "Ingeniería mecánica, fabricación avanzada y soluciones industriales aplicando metodologías aeroespaciales de precisión, trazabilidad y control del ciclo de vida.",
    items: [
      "Diseño mecánico CAD y arquitectura estructural",
      "Mecanizado CNC de alta precisión",
      "Fabricación aditiva: polímeros técnicos y metal",
      "Prototipado rápido y utillaje funcional",
      "Reverse engineering de sistemas obsoletos",
      "Retrofit y upgrade de sistemas existentes",
      "Diseño y fabricación de bancos de prueba",
    ],
    accentColor: "slate",
  },
];

export default function Solutions3() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getAccentClasses = (color, isExpanded) => {
    const styles = {
      blue: {
        border: isExpanded ? "border-brand-blue/40" : "border-slate-700/50",
        tag: isExpanded ? "bg-brand-blue/20 text-brand-blue border-brand-blue/30" : "bg-slate-800/50 text-slate-400 border-slate-700/50",
        bullet: "bg-brand-blue",
        line: "bg-brand-blue",
      },
      pink: {
        border: isExpanded ? "border-brand-pink/40" : "border-slate-700/50",
        tag: isExpanded ? "bg-brand-pink/20 text-brand-pink border-brand-pink/30" : "bg-slate-800/50 text-slate-400 border-slate-700/50",
        bullet: "bg-brand-pink",
        line: "bg-brand-pink",
      },
      slate: {
        border: isExpanded ? "border-slate-500/40" : "border-slate-700/50",
        tag: isExpanded ? "bg-slate-600/20 text-slate-300 border-slate-500/30" : "bg-slate-800/50 text-slate-400 border-slate-700/50",
        bullet: "bg-slate-400",
        line: "bg-slate-400",
      },
    };
    return styles[color];
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <StarfieldNebula />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <span className="block text-sm tracking-[0.30em] font-medium text-slate-300 uppercase mb-6">
            Soluciones
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extralight text-white tracking-tight leading-[1.1]">
            Capacidades
            <br />
            <span className="font-semibold">y Tecnologías</span>
          </h2>
          <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed">
            Ingeniería desarrollada bajo estándares aeroespaciales, donde
            hardware, software y manufactura avanzada se integran como un único
            sistema certificado.
          </p>
        </motion.div>

        {/* Horizontal Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            const accentClasses = getAccentClasses(service.accentColor, isExpanded);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group h-full"
              >
                {/* Main Card */}
                <div
                  className={`relative bg-slate-900/60 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-500 h-full flex flex-col ${accentClasses.border} hover:border-slate-600/70`}
                >
                  {/* Header - Always Visible */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-6 flex flex-col gap-4 text-left transition-all duration-300"
                  >
                    {/* Tag & Number */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs tracking-[0.3em] font-semibold px-3 py-1.5 rounded-full border transition-all duration-300 ${accentClasses.tag}`}
                      >
                        {service.tag}
                      </span>
                      <span className="text-slate-600 font-mono text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-xl md:text-2xl font-light transition-colors duration-300 ${
                        isExpanded ? "text-white" : "text-slate-300"
                      }`}
                    >
                      {service.title}
                    </h3>

                    {/* Expand/Collapse Indicator */}
                    <div className="flex items-center justify-between mt-2">
                      <div className={`h-px flex-1 ${accentClasses.line} ${isExpanded ? 'opacity-30' : 'opacity-10'} transition-opacity duration-300`} />
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-3"
                      >
                        <svg
                          className={`w-5 h-5 transition-colors duration-300 ${
                            isExpanded ? "text-white" : "text-slate-500"
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
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-slate-800/50 p-6 pt-6">
                          {/* Image */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="relative h-48 rounded-lg overflow-hidden mb-6 group/image"
                          >
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover transform group-hover/image:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                          </motion.div>

                          {/* Description */}
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="text-gray-400 text-sm leading-relaxed mb-6"
                          >
                            {service.description}
                          </motion.p>

                          {/* Capabilities */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="space-y-2.5"
                          >
                            {service.items.map((item, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay: 0.35 + idx * 0.04,
                                }}
                                className="flex items-start gap-2.5 group/item"
                              >
                                <div className="mt-1.5 flex-shrink-0">
                                  <div
                                    className={`w-1 h-1 rounded-full ${accentClasses.bullet} group-hover/item:scale-150 transition-transform duration-300`}
                                  />
                                </div>
                                <span className="text-gray-300 text-xs leading-relaxed group-hover/item:text-white transition-colors duration-300">
                                  {item}
                                </span>
                              </motion.div>
                            ))}
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Helper text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-slate-500 text-sm mt-8"
        >
          Haz clic en cada tarjeta para explorar nuestras capacidades
        </motion.p>
      </div>
    </section>
  );
}