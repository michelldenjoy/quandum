import { motion } from "motion/react";
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
    reverse: false,
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
    reverse: true,
  },
  {
    title: "Ingeniería Industrial & Manufactura Avanzada",
    tag: "INDUSTRIAL",
    image: "/images/mecanica.jpeg",
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
    reverse: false,
  },
];

export default function Solutions() {
  return (
    <section className="relative py-32 overflow-hidden">
      <StarfieldNebula />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 max-w-3xl"
        >
          <span className="block text-sm tracking-[0.30em] text-gray-400 uppercase mb-6">
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

        {/* Blocks */}
        <div className="space-y-40">
          {services.map((s, i) => {
            const imageFrom = s.reverse ? 80 : -80;
            const textFrom = s.reverse ? -40 : 40;

            return (
              <div key={i} className="grid lg:grid-cols-12 gap-12 items-center">
                {/* IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: imageFrom }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`relative h-[480px] lg:h-[520px] col-span-7 ${
                    s.reverse ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover rounded-sm"
                  />
                  <span
                    className={`absolute top-6 left-6 text-xs tracking-[0.4em] font-mono ${
                      s.tag === "INDUSTRIAL" ? "text-black" : "text-white/70"
                    }`}
                  >
                    {s.tag}
                  </span>
                </motion.div>

                {/* TEXT */}
                <motion.div
                  initial={{ opacity: 0, x: textFrom }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                    ease: "easeOut",
                    delay: 0.15,
                  }}
                  className={`col-span-7 lg:col-span-5  ${
                    s.reverse ? "lg:order-1" : ""
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl text-white mb-5">
                    {s.title}
                  </h3>

                  <p className="text-gray-400 text-justify mb-8 text-sm md:text-base leading-relaxed">
                    {s.description}
                  </p>

                  <ul className="space-y-3 text-sm md:text-base">
                    {s.items.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-300">
                        <span className="text-gray-500 font-mono">—</span>
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
