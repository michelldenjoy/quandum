import { motion } from "motion/react";
import HeroVideo from "../../components/about/HeroVideo";
import FacilitiesSlider from "../../components/facilities/FacilitiesSlider";
import Capabilities from "../../components/facilities/Capabilities";

const facilities = [
  {
    title: "Área de Montaje Especializado",
    subtitle: "para ensamblaje de componentes ópticos sensibles",
    description:
      "Espacio técnico de 100 m² habilitado para el ensamblaje de óptica delicada. Cuenta con sistemas de filtrado de aire y regulación de temperatura constantes, proporcionando las condiciones estables necesarias para operar con equipos de alta sensibilidad.",
    image: "/images/about6.webp",
    bg: "bg-aerospacee",
    textColor: "text-white",
  },
  {
    title: "Área de Ensamblaje Final",
    subtitle: "300 m² de precisión",
    description:
      "Zona especializada en integración final de sistemas complejos. Equipado con herramientas de metrología y calibración de última generación, garantizamos una alineación y funcionalidad precisas antes de la entrega. Es la zona crítica donde la precisión de los componentes se traduce en el rendimiento óptimo del sistema terminado.",
    image: "/images/about5.webp",
    bg: "bg-white",
    textColor: "text-black",
  },
  {
    title: "Laboratorio I+D",
    subtitle: "600 m² dedicados a innovación tecnológica",
    description:
      "Nuestro Laboratorio de I+D de 600 m² es el motor de la próxima generación de sistemas. Enfocados en la investigación aplicada y la exploración de nuevas fronteras tecnológicas, ofrecemos una plataforma completa que abarca desde la validación conceptual y el prototipado rápido hasta la ejecución de rigurosas certificaciones técnicas. Este espacio acelera la transición de la idea al producto validado, garantizando la introducción de soluciones disruptivas al mercado.",
    image: "/images/about4.webp",
    bg: "bg-aerospacee",
    textColor: "text-white",
  },
];

export default function Infraestructuras() {
  return (
    <div>
      {/* Imagen de fondo */}
      <HeroVideo
        eyebrow="Nuestra · Infraestructura"
        title="Donde la idea se hace real"
        description="Entornos seguros y laboratorios donde la ingeniería alcanza su máximo nivel."
        backgroundImage="/images/about3.webp"
      />
      <FacilitiesSlider />

      {facilities.map((f, i) => (
        <section
          key={i}
          className={`
            ${f.bg}
            relative overflow-hidden
            py-8 sm:py-12 md:py-16 lg:py-20
            px-4 sm:px-6 md:px-8
          `}
        >
          {/* Fondo para secciones oscuras */}

          <div className="max-w-7xl mx-auto">
            <div
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-6 md:gap-8 lg:gap-12`}
            >
              {/* IMAGEN */}
              <motion.div
                className="w-full md:w-3/5 lg:w-2/3"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </motion.div>

              {/* TEXTO  */}
              <motion.div
                className={`w-full md:w-2/5 lg:w-1/3 flex flex-col justify-center space-y-3 md:space-y-4 ${f.textColor}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  {f.title}
                </h2>
                <h3 className="text-base sm:text-lg md:text-xl font-medium ">
                  {f.subtitle}
                </h3>
                <p className="text-sm sm:text-base md:text-md lg:text-xl text-justify leading-relaxed opacity-80">
                  {f.description}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <Capabilities />
    </div>
  );
}
