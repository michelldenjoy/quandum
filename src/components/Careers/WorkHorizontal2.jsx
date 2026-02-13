import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import StarfieldNebula from "../3d/StarfieldNebula";

const workWithUs = [
  {
    title: "Cultura de Excelencia",
    tag: "VALORES",
    image: "/images/automation.webp",
    description:
      "Formamos parte de un equipo donde la excelencia técnica y la innovación son nuestra razón de ser. Trabajamos en proyectos desafiantes que requieren lo mejor de cada ingeniero, en un entorno que valora el rigor, la precisión y el pensamiento crítico.",
    items: [
      "Proyectos de alta complejidad técnica en sector aeroespacial",
      "Equipos multidisciplinares de ingenieros especializados",
      "Cultura de mejora continua y aprendizaje",
      "Estándares de calidad y certificación aeronáutica",
      "Autonomía técnica y responsabilidad profesional",
      "Reconocimiento del talento y la especialización",
    ],
    gradient: "from-brand-blue/50 to-brand-blue/40",
    highlight: "Ambiente Técnico",
    methodology: "Colaborativo",
  },
  {
    title: "Desarrollo Profesional",
    tag: "CRECIMIENTO REAL",
    image: "/images/scale.webp",
    description:
      "Trabajamos en proyectos reales para plataformas aeronáuticas en operación. Desde el primer día formarás parte de equipos que desarrollan sistemas críticos bajo normativa certificable. Apostamos por el crecimiento sostenido, basado en responsabilidad técnica, aprendizaje continuo y experiencia práctica en entornos exigentes.",
    items: [
      "Formación aplicada en normativa aeroespacial (DO-178, DO-254, DO-160)",
      "Participación directa en proyectos certificados y programas en activo",
      "Acceso a herramientas y entornos de desarrollo utilizados en industria aeronáutica",
      "Acompañamiento técnico por ingenieros senior",
      "Plan de progresión profesional basado en competencias técnicas",
      "Exposición a revisiones de diseño, validación y procesos de certificación",
      "Colaboración con partners internacionales en programas reales",
    ],
    gradient: "from-brand-blue/50 to-brand-blue/40",
    highlight: "Formación Técnica Aplicada",
    methodology: "Experiencia en Entornos Certificados",
  },
  {
    title: "Impacto Real",
    tag: "PROPÓSITO",
    image: "/images/impact.webp",
    description:
      "Tu trabajo tendrá un impacto tangible en la industria y el mundo. Cada línea de código, cada circuito diseñado y cada sistema integrado contribuye a soluciones que salvan vidas, protegen infraestructuras críticas y avanzan el estado del arte en ingeniería aeroespacial.",
    items: [
      "Proyectos con aplicación directa en misiones críticas",
      "Contribución a sistemas de defensa y seguridad nacional",
      "Desarrollo de tecnología para emergencias y rescate",
      "Participación en programas de I+D+i aeroespacial",
      "Soluciones que operan en entornos extremos",
      "Innovación con propósito y responsabilidad",
      "Orgullo profesional por el trabajo realizado",
    ],
    gradient: "from-brand-blue/50 to-brand-blue/40",
    highlight: "Proyectos Críticos",
    methodology: "Alto Impacto",
  },
];

export default function WorkHorizontal2() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
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
          {/* <span className="block text-sm tracking-[0.30em] font-medium text-slate-300 uppercase mb-6">
            Trabaja con Nosotros
          </span> */}
          <h2 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extralight text-white tracking-tight leading-[1.1]">
            Como
            <br />
            <span className="font-semibold">Trabajamos</span>
          </h2>
          <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed">
            Buscamos ingenieros apasionados por la excelencia técnica que
            quieran formar parte de proyectos aeroespaciales de alto impacto. Un
            lugar donde el talento técnico se desarrolla, se valora y marca la
            diferencia.
          </p>
        </motion.div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {workWithUs.map((process, index) => {
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
                {/* Glow effect when expanded */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute -inset-1 bg-gradient-to-r ${process.gradient} opacity-20 blur-xl rounded-2xl`}
                    />
                  )}
                </AnimatePresence>

                {/* Main Card */}
                <div
                  className={`relative bg-slate-900/60 backdrop-blur-md border rounded-2xl overflow-hidden transition-all duration-500 ${
                    isExpanded
                      ? "border-white/20 shadow-2xl"
                      : "border-slate-800/50 hover:border-slate-700/70"
                  }`}
                >
                  {/* Header - Always Visible */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-6 md:p-8 flex items-center justify-between gap-4 group/header transition-all duration-300"
                  >
                    <div className="flex items-center gap-6 flex-1">
                      {/* Title & Tag */}
                      <div className="text-left flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className={`text-xs tracking-[0.3em] font-semibold px-3 py-1 rounded-full ${
                              isExpanded
                                ? `bg-gradient-to-r ${process.gradient} text-white`
                                : "bg-slate-800/50 text-slate-400"
                            } transition-all duration-300`}
                          >
                            {process.tag}
                          </span>
                          <span className="text-slate-400 font-mono text-sm">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h3
                          className={`text-2xl md:text-3xl lg:text-4xl font-light transition-colors duration-300 ${
                            isExpanded ? "text-white" : "text-slate-300"
                          }`}
                        >
                          {process.title}
                        </h3>
                      </div>
                    </div>

                    {/* Expand/Collapse Button */}
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isExpanded
                          ? `border-white/30 bg-white/10`
                          : "border-slate-700 bg-slate-800/30 group-hover/header:border-slate-600"
                      }`}
                    >
                      <svg
                        className={`w-6 h-6 transition-colors duration-300 ${
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
                          <div className="grid lg:grid-cols-2 gap-8 p-6 md:p-8">
                            {/* Left: Image */}
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                              className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden group/image"
                            >
                              <img
                                src={process.image}
                                alt={process.title}
                                className="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60" />
                            </motion.div>

                            {/* Right: Content */}
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="flex flex-col justify-center"
                            >
                              {/* Description */}
                              <p className="text-gray-400 text-base leading-relaxed mb-6">
                                {process.description}
                              </p>

                              {/* Divider */}
                              <div
                                className={`h-px w-full bg-gradient-to-r ${process.gradient} opacity-30 mb-6`}
                              />

                              {/* Capabilities */}
                              <div className="space-y-3 mb-6">
                                {process.items.map((item, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      delay: 0.3 + idx * 0.05,
                                    }}
                                    className="flex items-start gap-3 group/item"
                                  >
                                    <div className="mt-2 flex-shrink-0">
                                      <div
                                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${process.gradient} group-hover/item:scale-150 transition-transform duration-300`}
                                      />
                                    </div>
                                    <span className="text-gray-300 text-sm md:text-base leading-relaxed group-hover/item:text-white transition-colors duration-300">
                                      {item}
                                    </span>
                                  </motion.div>
                                ))}
                              </div>

                              {/* Metadata */}
                              <div className="flex gap-12 pt-6 border-t border-slate-800/50">
                                <div>
                                  <div className="text-xs text-gray-200 mb-2 tracking-wider uppercase">
                                    Highlight
                                  </div>
                                  <div className="text-sm font-light text-gray-400">
                                    {process.highlight}
                                  </div>
                                </div>
                                <div>
                                  <div className="text-xs text-gray-200 mb-2 tracking-wider uppercase">
                                    Enfoque
                                  </div>
                                  <div className="text-sm font-light text-gray-400">
                                    {process.methodology}
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
