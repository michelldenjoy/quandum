import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Title from "../history/Title";
import Subtitle from "../history/Subtitle";

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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "110%"]);

  return (
    <section
      ref={ref}
      className="relative w-full text-white py-32  overflow-hidden"
    >
      {/* Fondo con textura metálica muy sutil */}
      <div className="absolute inset-0 " />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Título superior */}
        <Title />

        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
            <span className="text-slate-300">Hitos que</span>{" "}
            <span className="bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 bg-clip-text text-transparent ">
              nos han transformado
            </span>
          </h2>
        </motion.div> */}

        {/* Línea de tiempo */}
        <div className="relative">
          {/* Línea central progresiva */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2 md:translate-x-0">
            <motion.div
              style={{
                height: lineHeight,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
              }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-brand-blue via-brand-pink to-red-600 origin-top"
              //   style={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
            />
          </div>

          {/* Eventos */}
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: index * 0.15 }}
              className={`relative flex items-center mb-32 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Contenido */}
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? "text-right pr-16" : "pl-16"
                }`}
              >
                <div
                  className={`p-8 rounded-lg border ${
                    item.highlight
                      ? "border-brand-blue/60 bg-brand-blue/5 shadow-2xl shadow-brand-blue/20"
                      : item.current
                      ? "border-red-600/60 bg-red-950/20 shadow-2xl shadow-red-600/20"
                      : "border-slate-950 bg-slate-950/30"
                  } backdrop-blur-sm`}
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

              {/* Punto en la línea */}
              <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-gradient-to-br from-brand-blue to-brand-pink rounded-full -translate-x-1/2 md:translate-x-0 border-4 border-black shadow-lg shadow-brand-blue/50 z-10">
                {item.highlight && (
                  <div className="absolute inset-0 rounded-full animate-ping bg-brand-blue/50" />
                )}
              </div>

              {/* Espacio vacío para el otro lado (mantiene simetría) */}
              <div className="hidden md:block md:w-5/12" />
            </motion.div>
          ))}
        </div>

        <Subtitle />
      </div>
    </section>
  );
}
