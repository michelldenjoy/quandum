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
    accentColor: "brand-blue",
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
    accentColor: "brand-pink",
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

export default function Solutions2() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getAccentClass = (color) => {
    switch (color) {
      case "brand-blue":
        return {
          border: "border-brand-blue/50",
          bg: "bg-brand-blue/5",
          text: "text-brand-blue",
          dot: "bg-brand-blue",
        };
      case "brand-pink":
        return {
          border: "border-brand-pink/50",
          bg: "bg-brand-pink/5",
          text: "text-brand-pink",
          dot: "bg-brand-pink",
        };
      case "slate":
        return {
          border: "border-slate-400/50",
          bg: "bg-slate-400/5",
          text: "text-slate-900",
          dot: "bg-slate-400",
        };
      default:
        return {
          border: "border-slate-700",
          bg: "bg-slate-800/50",
          text: "text-slate-400",
          dot: "bg-slate-500",
        };
    }
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
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
            Especializacion
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extralight text-white tracking-tight leading-[1.1]">
            Soluciones de 
            <br />
            <span className="font-semibold">Ingeniería</span>
          </h2>
          <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed">
            Ingeniería desarrollada bajo estándares aeroespaciales, donde
            hardware, software y manufactura avanzada se integran como un único
            sistema certificado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            const accent = getAccentClass(service.accentColor);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative transition-all duration-300 ${
                  isExpanded ? "md:col-span-3" : ""
                }`}
              >
                <div
                  className={`relative bg-black/40 backdrop-blur-sm border border-slate-800/50 rounded-md overflow-hidden hover:border-slate-700/70 transition-all duration-300 h-full ${
                    isExpanded ? "shadow-2xl" : ""
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left transition-all duration-300 group"
                  >
                    <div
                      className={`relative overflow-hidden transition-all duration-500 ${
                        isExpanded ? "h-auto" : "h-80"
                      }`}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className={`w-full transition-all duration-500 ${
                          isExpanded
                            ? "h-auto object-contain"
                            : "h-full object-cover"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />

                      <div className="absolute top-4 left-4">
                        <span
                          className={`text-xs tracking-[0.25em] font-medium px-3 py-1.5 rounded ${accent.bg} ${accent.text} border ${accent.border}`}
                        >
                          {service.tag}
                        </span>
                      </div>

                      <div className="absolute bottom-4 right-4">
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center"
                        >
                          <svg
                            className="w-4 h-4 text-white"
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
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-light text-white mb-2 group-hover:text-slate-100 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-500 line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-slate-800/50 p-6">
                          <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                            >
                              <p className="text-slate-400 text-base leading-relaxed mb-6">
                                {service.description}
                              </p>

                              <div
                                className={`h-px w-20 ${accent.dot} opacity-50 mb-6`}
                              />

                              <h4 className="text-sm font-medium text-white uppercase tracking-wider mb-4">
                                Capacidades Técnicas
                              </h4>
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="space-y-3"
                            >
                              {service.items.map((item, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: 0.3 + idx * 0.05,
                                  }}
                                  className="flex items-start gap-3 group/item"
                                >
                                  <div className="mt-2 flex-shrink-0">
                                    <div
                                      className={`w-1 h-1 rounded-full ${accent.dot} opacity-70`}
                                    />
                                  </div>
                                  <span className="text-slate-300 text-sm leading-relaxed">
                                    {item}
                                  </span>
                                </motion.div>
                              ))}
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
