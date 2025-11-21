import { motion } from "framer-motion";
import { ExternalLink, Activity } from "lucide-react";



const certData = [
  {
    title: "AS9100D",
    description:
      "The international standard for **uncompromising quality** and **critical reliability** in aviation manufacturing. Zero tolerance for error.",
    image: "/certifications/as9100.png",
    link: "#",
    recert: 2024,
    focus: "Calidad Crítica",
  },
  {
    title: "NADCAP",
    description:
      "Global aerospace accreditation for **special processes** and **product compliance**, essential for flight-critical components.",
    image: "/certifications/nadcap.png",
    link: "#",
    recert: 2023,
    focus: "Procesos Especiales",
  },
  {
    title: "ISO 9001:2015",
    description:
      "Our comprehensive Quality Management System, ensuring **standardized processes** and continuous operational improvement.",
    image: "/certifications/iso9001.png",
    link: "#",
    recert: 2024,
    focus: "Gestión Operativa",
  },
  {
    title: "ISO 27001:2022",
    description:
      "Information Security Management System, providing robust **cybersecurity** and data integrity crucial for sensitive aerospace projects.",
    image: "/certifications/iso27001.png",
    link: "#",
    recert: 2024,
    focus: "Ciberseguridad",
  },
];

export default function Certifications() {
  return (
    <section className="w-full text-white py-28 overflow-hidden relative">
      {/* FONDO 3D */}
      <div>
      
      </div>

      {/* CONTENIDO */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-cyan-500">
            Certificaciones <br /> Arquitectura de Confianza.
          </h2>
          <p className="mt-4 text-xl max-w-3xl mx-auto text-gray-200 font-light">
            Nuestra promesa de excelencia aeronáutica está avalada por las
            certificaciones más{" "}
            <span className="font-semibold text-brand-pink">
              rigurosas del mundo
            </span>
            .
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:grid lg:grid-cols-4 py-5 px-4 gap-8 overflow-x-auto pb-6">
          <div className="hidden lg:block absolute inset-x-0 mx-auto h-0.5 mt-[260px] bg-cyan-500/30"></div>

          {certData.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{
                y: -5,
                boxShadow: "0 0 25px rgba(0, 191, 255, 0.3)",
              }}
              transition={{ duration: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="group bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 transition-all duration-300 relative flex-shrink-0 w-full lg:w-auto"
            >
              <div
                className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full 
                            bg-neutral-950 border-4 border-cyan-500/70 shadow-[0_0_10px_rgba(0,191,255,0.6)] z-10 
                            flex items-center justify-center"
              >
                <Activity size={12} className="text-cyan-300 animate-pulse" />
              </div>

              <div className="w-full h-24 flex items-center justify-center mb-6 border-b border-neutral-800/50 pb-4 mt-6">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full object-contain brightness-110 contrast-110 opacity-70 group-hover:opacity-100 transition-all duration-300"
                />
              </div>

              <h3 className="text-xl font-bold text-cyan-500 tracking-wide mb-1">
                {cert.title}
              </h3>

              <p className="text-gray-400 text-xs uppercase mb-3 border-b border-neutral-800 pb-2">
                Enfoque:{" "}
                <span className="font-semibold text-gray-200">
                  {cert.focus}
                </span>
              </p>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {cert.description}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                Ver Certificado Oficial ({cert.recert})
                <ExternalLink size={16} className="ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
