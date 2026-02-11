import { useState, Fragment } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function WorkHorizontal() {
  const [active, setActive] = useState(null);

  const sections = [
    {
      id: "autonomy",
      title: "Automatización",
      number: "01",
      description:
        "Desarrollamos sistemas autónomos avanzados que permiten a las aeronaves operar de manera inteligente y adaptativa. Nuestra tecnología de IA integrada toma decisiones críticas en tiempo real, optimizando errores con alta precisión y reduciendo la necesidad de múltiples operarios.",
      image: "/images/automation.webp",
    },
    {
      id: "scale",
      title: "Escala",
      number: "02",
      description:
        "Construimos pensando en el crecimiento global. Nuestras capacidades industriales avanzadas y cadenas de suministro robustas nos permiten producir a gran escala sistemas electrónicos aeronáuticos críticos sin comprometer la calidad ni las certificaciones.",
      image: "/images/scale.webp",
    },
    {
      id: "impact",
      title: "Impacto",
      number: "03",
      description:
        "Nuestro trabajo tiene un impacto en la industria y el mundo. Desde misiones de búsqueda y rescate hasta logística de emergencia y monitoreo ambiental, cada sistema que construimos tiene un propósito.",
      image:
        "/images/impact.webp",
    },
  ];

  const activeSection = sections.find((s) => s.id === active);

  return (
    <section className="relative bg-aer py-16 lg:py-24  overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
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
                <span className="text-sm tracking-[0.3em] text-blue-300 font-medium uppercase">
                  Metodología
                </span>
              </div>

              {/* TITULO PRINCIPAL */}
              <h2 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extralight text-white tracking-tight leading-[1.1]">
                Cómo
                <br />
                <span className="font-semibold">Trabajamos</span>
              </h2>
              <p className="text-gray-400 mt-6 text-base md:text-lg leading-relaxed max-w-3xl">
              Nuestros proyectos se desarrollan bajo metodologías estructuradas 
              y procesos documentados, garantizando trazabilidad y cumplimiento 
              normativo en todas las fases.
                </p>
            </div>
          </motion.div>
        </div>

        {/* Sections Grid */}
        <div className="space-y-2 mb-16">
          {sections.map((section, index) => (
            <Fragment key={section.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <button
                  onClick={() => setActive(active === section.id ? null : section.id)}
                  className="group w-full text-left py-8 border-t border-gray-200 hover:border-black transition-all duration-500"
                >
                  <div className="flex items-center justify-between gap-8">
                    <div className="flex items-baseline gap-8 flex-1">
                      <span className="text-sm font-mono text-gray-400 tabular-nums min-w-[2rem]">
                        {section.number}
                      </span>
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white group-hover:translate-x-2 transition-transform duration-500">
                        {section.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className={`hidden sm:block text-sm font-light transition-all duration-500 ${
                        active === section.id 
                          ? 'text-black opacity-100' 
                          : 'text-gray-400 opacity-0 group-hover:opacity-100'
                      }`}>
                        {active === section.id ? 'Cerrar' : 'Ver más'}
                      </div>
                      <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${
                        active === section.id
                          ? 'border-black bg-black text-white rotate-45'
                          : 'border-gray-300 text-gray-400 group-hover:border-black group-hover:text-black'
                      }`}>
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {active === section.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-12 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Image */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.6 }}
                          className="relative aspect-[4/3] rounded-md overflow-hidden bg-gray-100"
                        >
                          <img
                            src={section.image}
                            alt={section.title}
                            className="w-full h-full "
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </motion.div>

                        {/* Content */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                          className="flex flex-col justify-center space-y-8"
                        >
                          <div className="space-y-6">
                            <div className="inline-block px-4 text- bg-slate-700 py-1.5 border border-black text-xs tracking-[0.2em] uppercase font-light">
                              Proceso {section.number}
                            </div>
                            
                            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed font-light">
                              {section.description}
                            </p>
                          </div>

                          {/* Metadata */}
                          <div className="flex gap-12 pt-6 border-t border-gray-200">
                            <div>
                              <div className="text-xs text-gray-200 mb-2 tracking-wider uppercase">
                                Certificación
                              </div>
                              <div className="text-sm font-light text-gray-400">
                                DO-178C / DAL-A
                              </div>
                            </div>
                            <div>
                              <div className="text-xs text-gray-200 mb-2 tracking-wider uppercase">
                                Metodología
                              </div>
                              <div className="text-sm font-light text-gray-400">
                                Auditable
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Fragment>
          ))}
        </div>

        {/* Bottom border */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      {/* <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;600;700&display=swap');
        
        * {
          font-family: 'Josefin Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }
      `}</style> */}
    </section>
  );
}