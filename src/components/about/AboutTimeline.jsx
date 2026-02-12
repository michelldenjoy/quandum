import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Title from "../history/Title";
import Subtitle from "../history/Subtitle";
import StarfieldNebula from "../3d/StarfieldNebula";

const timelineData = [
  {
    year: "2006",
    title: "Fundación",
    detail:
      "Comienzos de la empresa y sus primeros contratos con Airbus Military.",
  },
  {
    year: "2009",
    title: "Certificaciones",
    detail:
      "Implantación de sistemas de gestión y obtención de certificaciones según los estándares del sector aeronáutico e industrial (EN 9100 / ISO 9001).",
    highlight: true,
  },
  {
    year: "2012",
    title: "Consolidación",
    detail:
      "Desarrollo de líneas de producto en electrónica y optoelectrónica para plataformas aéreas.",
  },
  {
    year: "2015",
    title: "Expansión tecnológica",
    detail:
      "Incorporación de sistemas de prototipado rápido y procesos de fabricación de precisión.",
  },
  {
    year: "2022",
    title: "Proyectos estratégicos",
    detail:
      "Participación en programas de defensa y sistemas de visión/IR integrados.",
  },
  {
    year: "2024",
    title: "Madurez operativa",
    detail:
      "Equipo consolidado y procesos orientados a certificación y suministro internacional.",
    current: true,
  },
];

export default function AboutTimeline() {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  // linea 
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full text-white py-32 overflow-hidden"
    >
      
      <StarfieldNebula />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        
        <Title />

        {/* linea de tiempo */}
        <div ref={timelineRef} className="relative py-12">
          {/* linea gris de fondo */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-800/50 -translate-x-1/2 md:translate-x-0" />

          {/* progreso linea */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 w-px -translate-x-1/2 md:translate-x-0 origin-top"
            style={{
              height: lineHeight,
            }}
          >
            <div
              className="w-full h-full bg-gradient-to-b from-brand-blue via-brand-pink to-red-600"
              style={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
            />
          </motion.div>

        
          <div className="space-y-0">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index !== timelineData.length - 1 ? "mb-32" : "mb-0"
                } ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* CONTENIDO */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0
                      ? "md:text-right md:pr-16 pl-16 md:pl-0"
                      : "md:text-left md:pl-16 pl-16"
                  }`}
                >
                  <div
                    className={`p-8 rounded-lg border ${
                      item.highlight
                        ? "border-brand-blue/60 bg-brand-blue/5 shadow-2xl shadow-brand-blue/20"
                        : item.current
                        ? "border-red-600/60 bg-red-950/20 shadow-2xl shadow-red-600/20"
                        : "border-slate-950 bg-slate-950/30"
                    } backdrop-blur-sm transition-all duration-300 hover:border-brand-blue/40 hover:shadow-xl`}
                  >
                    <span
                      className={`block text-4xl md:text-5xl font-bold mb-3 ${
                        item.current ? "text-red-500" : "text-brand-blue"
                      }`}
                    >
                      {item.year}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-light text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {item.detail}
                    </p>
                    {item.current && (
                      <div className="mt-4 inline-block px-4 py-2 bg-red-600/20 border border-red-500/50 rounded-full text-red-400 text-sm font-medium">
                        Hoy
                      </div>
                    )}
                  </div>
                </div>

                {/* punto en linea */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 md:translate-x-0 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="relative"
                  >
                    <div
                      className={`w-6 h-6 rounded-full border-4 border-black shadow-lg ${
                        item.current
                          ? "bg-gradient-to-br from-red-500 to-red-600 shadow-red-500/50"
                          : "bg-gradient-to-br from-brand-blue to-brand-pink shadow-brand-blue/50"
                      }`}
                    >
                      {item.highlight && (
                        <div className="absolute inset-0 rounded-full animate-ping bg-brand-blue/50" />
                      )}
                      {item.current && (
                        <div className="absolute inset-0 rounded-full animate-pulse bg-red-500/50" />
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* espacio */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        <Subtitle />
      </div>
    </section>
  );
}