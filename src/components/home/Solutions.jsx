import { motion } from "motion/react";
import StarfieldNebula from "../3d/StarfieldNebula";

const services = [
  {
    title: "Hardware Aeronáutico",
    tag: "HARDWARE",
    image: "/images/hardware.jpg",
    description:
      "Diseñamos y desarrollamos sistemas electrónicos aeronáuticos para plataformas y misiones críticas.",
    items: [
      "Arquitectura de sistemas electrónicos",
      "Electrónica embebida y de control",
      "Integración HW/SW",
      "Ensayos y soporte a certificación",
    ],
    reverse: false,
  },
  {
    title: "Software Crítico",
    tag: "SOFTWARE",
    image: "/images/software.jpeg",
    description:
      "Desarrollo de software aeronáutico conforme a procesos de seguridad, trazabilidad y verificación.",
    items: [
      "Software embebido",
      "Algoritmos y simulación",
      "Verificación y validación",
      "Cumplimiento DO-178",
    ],
    reverse: true,
  },
  {
    title: "Ingeniería Mecánica",
    tag: "MECHANICAL",
    image: "/images/mecanica.jpeg",
    description:
      "Diseño mecánico de precisión para sistemas aeronáuticos e integración estructural.",
    items: [
      "Diseño CAD y arquitectura mecánica",
      "Análisis estructural FEM",
      "Integración de sistemas",
      "Soporte a ensayos",
    ],
    reverse: false,
  },
];

export default function Solutions() {
  return (
    <section className=" py-32">
      <div className="max-w-7xl mx-auto px-6">
        <StarfieldNebula />
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
            {/* <div className="hidden md:flex flex-col items-center gap-2 pt-2">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-white to-transparent" />
              <div className="w-1.5 h-1.5 bg-white rotate-45" />
            </div> */}

            <div className="flex-1">
              {/*TITULO PRINCIPAL*/}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black" />
                  <div className="w-1 h-1 bg-gray-400" />
                  <div className="w-1 h-1 bg-gray-300" />
                </div>
                <span className="text-[11px] tracking-[0.3em] text-gray-400 font-medium uppercase">
                  Soluciones
                </span>
              </div>

              {/* TITULO PRINCIPAL */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white tracking-tight leading-[1.1]">
                Capacidades
                <br />
                <span className="font-bold">& Tecnologías</span>
              </h2>
              <p className="text-gray-400 mt-6 text-base md:text-lg leading-relaxed max-w-2xl">
                Hardware, software y mecánica concebidos como un sistema único,
                desarrollado bajo criterios de fiabilidad, seguridad y
                certificación.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Blocks */}
        <div className="space-y-32">
          {services.map((s, i) => {
            const imageFrom = s.reverse ? 60 : -60;
            const textFrom = s.reverse ? -60 : 60;

            return (
              <div
                key={i}
                className={`grid lg:grid-cols-2 gap-16 items-center`}
              >
                {/* IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: imageFrom }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className={`relative h-[420px] overflow-hidden rounded-2xl ${
                    s.reverse ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="absolute top-6 left-6 text-sm tracking-[0.4em] text-white/80">
                    {s.tag}
                  </span>
                </motion.div>

                {/* TEXT */}
                <motion.div
                  initial={{ opacity: 0, x: textFrom }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                  className={`${s.reverse ? "lg:order-1" : ""}`}
                >
                  <h3 className="text-3xl md:text-4xl text-white mb-6">
                    {s.title}
                  </h3>

                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {s.description}
                  </p>

                  <ul className="space-y-4">
                    {s.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-blue-800 mt-1">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
