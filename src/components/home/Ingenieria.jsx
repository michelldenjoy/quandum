import React, { useRef, useMemo } from "react";
import { motion, useInView } from "motion/react";


export default function Ingenieria() {
  // Motion 11 parallax


  const caseStudies = useMemo(
    () => [
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
    ],
    []
  );

  const checklistItems = useMemo(
    () => [
      "Integración HW–SW–Mecánica completa",
      "Ensayos ambientales MIL-STD / RTCA DO-160",
      "Control de configuración y trazabilidad total",
      "Documentación para certificación EASA/FAA",
    ],
    []
  );




  return (
    <main className="text-white">
      



      {/* ******************************* INGENIERÍA & PROCESO ******************************* */}
      <section id="ingenieria" className="py-16 sm:py-24 lg:py-32 bg-militar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-4xl md:text-7xl text-center text-white font-bold mb-4">
              Ingeniería & Proceso
            </h2>
            <p className="text-gray-200 text-base mx-auto text-center md:text-xl max-w-2xl">
              Flujo disciplinado end-to-end con trazabilidad completa y
              cumplimiento aeronáutico.
            </p>
          </motion.div>

          <div className="space-y-20 sm:space-y-24 lg:space-y-32">
            {caseStudies.map((c, i) => (
              <CaseStudyItem
                key={i}
                caseStudy={c}
                index={i}
                checklistItems={checklistItems}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// GALERIA
const GalleryImage = React.memo(
  ({ src, alt, className = "", label, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.03 }}
      className={`rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 group relative ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {label && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 sm:p-6">
          <p className="text-white font-medium text-sm sm:text-base">{label}</p>
        </div>
      )}
    </motion.div>
  )
);

// Componente optimizado para casos de estudio
const CaseStudyItem = React.memo(({ caseStudy, index, checklistItems }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 bg-black/40 px-6 py-6 rounded-2xl lg:gap-16 items-center ${
        index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
      }`}
    >
      <motion.div
        whileHover={{ scale: 1.14 }}
        transition={{ duration: 0.6 }}
        className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
      >
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          loading="lazy"
          className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-2xl ring-1 ring-white/10"
        />
      </motion.div>

      <div
        className={`${
          index % 2 === 1 ? "lg:order-1" : ""
        } space-y-4 sm:space-y-6`}
      >
        {/* <div className="flex items-center gap-3 text-cyan-500">
          <Award className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase">
            {caseStudy.subtitle}
          </span>
        </div> */}

        <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
          {caseStudy.title}
        </h3>
        <p className="text-base sm:text-lg  text-slate-300 leading-relaxed">
          {caseStudy.text}
        </p>

        {/* <ul className="space-y-3  px-4 text-white">
          {checklistItems.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 flex-shrink-0" />
              <span className="text-sm sm:text-base">{item}</span>
            </motion.li>
          ))}
        </ul> */}
      </div>
    </motion.div>
  );
});
