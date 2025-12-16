import { motion } from "motion/react";

const facilities = [
  {
    title: "Instalaciones Generales",
    subtitle: "4,000 m² dedicados a ingeniería y fabricación",
    description:
      "Amplias áreas de producción y laboratorios para cubrir todas las fases del desarrollo aeroespacial, con altos estándares de seguridad y control.",
    image: "/images/instalaciones.jpg",
    bg: "bg-white",
    textColor: "text-black",
  },
  {
    title: "Área de Montaje Especializado",
    subtitle: "para ensamblaje de componentes ópticos sensibles",
    description:
      "Espacio técnico de 100 m² habilitado para el ensamblaje de óptica delicada. Cuenta con sistemas de filtrado de aire y regulación de temperatura constantes, proporcionando las condiciones estables necesarias para operar con equipos de alta sensibilidad.",
    image: "/images/montaje.jpg",
    bg: "dark",
    textColor: "text-white",
  },
  {
    title: "Área de Ensamblaje Final",
    subtitle: "300 m² de precisión",
    description:
      "Zona especializada en integración final de sistemas complejos. Equipado con herramientas de metrología y calibración de última generación, garantizamos una alineación y funcionalidad precisas antes de la entrega. Es la zona crítica donde la precisión de los componentes se traduce en el rendimiento óptimo del sistema terminado.",
    image: "/images/about-5.jpg",
    bg: "bg-white",
    textColor: "text-black",
  },
  {
    title: "Laboratorio I+D",
    subtitle: "600 m² dedicados a innovación tecnológica",
    description:
      "Nuestro Laboratorio de I+D de 600 m² es el motor de la próxima generación de sistemas. Enfocados en la investigación aplicada y la exploración de nuevas fronteras tecnológicas, ofrecemos una plataforma completa que abarca desde la validación conceptual y el prototipado rápido hasta la ejecución de rigurosas certificaciones técnicas. Este espacio acelera la transición de la idea al producto validado, garantizando la introducción de soluciones disruptivas al mercado.",
    image: "/images/about-2.jpg",
    bg: "dark",
    textColor: "text-white",
  },
];

// Fondo gradient oscuro
const DarkBackground = () => (
  <>
    {/* Fondo técnico aeroespacial */}
    <div className="absolute inset-0 opacity-[0.03]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.4)_1px,transparent_1px)] bg-[size:100px_100px]" />
    </div>
    
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600 rounded-full blur-[120px]"></div>
    </div>
   
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
  </>
);

export default function Infraestructuras() {
  return (
    <div className="w-full overflow-x-hidden pt-20 md:pt-24 lg:pt-28">
      <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/collage1.jpg')" }}
        />
        
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60" />

        {/* Contenido*/}
        <div className="relative h-full flex items-end pb-12 md:pb-10 lg:pb-12 px-6 md:px-12 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight mb-4 md:mb-6 backdrop-blur-[1px] bg-black/20 rounded-lg text-white drop-shadow-2xl">
              Donde la Ingeniería Toma Forma
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed drop-shadow-lg backdrop-blur-[1px] bg-black/20 p-4 rounded-lg">
              Nuestras instalaciones combinan ingeniería, precisión y tecnología
              avanzada para impulsar el desarrollo y la fabricación de sistemas
              críticos.
            </p>
          </motion.div>
        </div>
      </section>

      {facilities.map((f, i) => (
        <section
          key={i}
          className={`${
            f.bg === "dark" 
              ? "relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden" 
              : f.bg
          } py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8`}
        >
          {/* Fondo para secciones oscuras */}
          {f.bg === "dark" && <DarkBackground />}

          <div className={`${f.bg === "dark" ? "relative" : ""} max-w-7xl mx-auto`}>
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
                  className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] rounded-xl md:rounded-2xl shadow-2xl object-cover"
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
                <h3 className="text-base sm:text-lg md:text-xl font-medium opacity-90">
                  {f.subtitle}
                </h3>
                <p className="text-sm sm:text-base md:text-md lg:text-xl leading-relaxed opacity-80">
                  {f.description}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Capacidades y Tecnologías */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
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
                className="bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 rounded-lg md:rounded-xl p-5 md:p-6 lg:p-7 shadow-xl text-black hover:shadow-xl transition-shadow duration-300"
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