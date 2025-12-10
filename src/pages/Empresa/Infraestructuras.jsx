import { motion } from "motion/react";

const facilities = [
  {
    title: "Instalaciones Generales",
    subtitle: "4,000 m² dedicados a ingeniería y fabricación",
    description: "Amplias áreas de producción y laboratorios para cubrir todas las fases del desarrollo aeroespacial, con altos estándares de seguridad y control.",
    image: "/images/facilities-general.jpg",
    bg: "bg-gray-200",
    textColor: "text-black",
  },
  {
    title: "Entorno ISO para Sistemas Críticos",
    subtitle: "100 m² para ensamblaje de componentes ópticos sensibles",
    description: "Control de partículas y temperatura para garantizar la máxima precisión en los sistemas más críticos.",
    image: "/images/clean-room.jpg",
    bg: "bg-gradient-to-b from-black via-slate-800 to-black",
    textColor: "text-white",
  },
  {
    title: "Área de Ensamblaje Final",
    subtitle: "300 m² de precisión",
    description: "Zona especializada en integración final de sistemas complejos, con equipos de última generación.",
    image: "/images/final-assembly.jpg",
    bg: "bg-gray-200",
    textColor: "text-black",
  },
  {
    title: "Laboratorio I+D",
    subtitle: "600 m² dedicados a innovación tecnológica",
    description: "Investigación y desarrollo de nuevos sistemas, prototipado rápido y certificaciones técnicas.",
    image: "/images/rnd-lab.jpg",
    bg: "bg-gradient-to-b from-black via-slate-800 to-black",
    textColor: "text-white",
  },
];

export default function Infraestructuras() {
  return (
    <div className="w-full overflow-x-hidden pt-20 md:pt-24 lg:pt-28">
      {facilities.map((f, i) => (
        <section
          key={i}
          className={`${f.bg} py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16`}
        >
          <div className={`max-w-7xl mx-auto flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-10 lg:gap-16`}>
            <motion.div
              className={`w-full md:w-1/2 space-y-4 md:space-y-6 ${f.textColor}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {f.title}
              </h2>
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium opacity-90">
                {f.subtitle}
              </h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-80">
                {f.description}
              </p>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2  flex justify-center"
              initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={f.image}
                alt={f.title}
                className="w-full max-w-md lg:max-w-lg rounded-xl md:rounded-2xl shadow-2xl object-cover aspect-square md:aspect-auto"
              />
            </motion.div>
          </div>
        </section>
      ))}

      {/* Capacidades y Tecnologías */}
      <section className="bg-gray-200  py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-8 md:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Capacidades & Tecnologías
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              "Diseño y desarrollo electrónico",
              "Diseño mecánico y fabricación",
              "Software y control de sistemas",
              "Prototipado rápido: CNC & Impresión 3D",
              "Certificaciones: DO-178, DO-254, DO-160",
              "Tecnologías avanzadas: FDM, LPBF, Carbon Fiber, Metal Printing",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-lg md:rounded-xl p-5 md:p-6 lg:p-7 shadow-lg text-black hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="font-medium text-sm sm:text-base md:text-lg">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}