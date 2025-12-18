import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const sections = [
  {
    id: "autonomy",
    title: "Automatización",
    description:
      "Desarrollamos sistemas autónomos avanzados que permiten a las aeronaves operar de manera inteligente y adaptativa. Nuestra tecnología de IA integrada toma decisiones críticas en tiempo real, optimizando errores con alta precisión y reduciendo la necesidad de múltiples operarios.",
    image: "/bgmilitar.jpg",
  },
  {
    id: "speed",
    title: "Rapidez",
    description:
      "La velocidad define nuestra ingeniería. Desde el diseño conceptual hasta el despliegue operacional, aceleramos cada fase del desarrollo aeroespacial. Nuestros ciclos iterativos rápidos y metodologías ágiles nos permiten llevar innovaciones del laboratorio al cielo en tiempo récord, manteniendo los más altos estándares de seguridad.",
    image: "/bgmili.jpg",
  },
  {
    id: "scale",
    title: "Escala",
    description:
      "Construimos pensando en el crecimiento global. Nuestra infraestructura avanzada de manufactura y nuestras cadenas de suministro robustas nos permiten producir en gran escala sistemas electrónicos aeronáuticos esenciales sin comprometer la calidad ni las certificaciones. Cada unidad está diseñada para replicarse de forma eficiente, desde un prototipo único hasta flotas de cientos o miles de plataformas operando en todo el mundo.",
    image: "images/scale.jpg",
  },
  {
    id: "impact",
    title: "Impacto",
    description:
      "Nuestro trabajo transforma industrias y salva vidas. Desde misiones de búsqueda y rescate hasta logística de emergencia y monitoreo ambiental, cada componente que construimos tiene un propósito crítico. Medimos nuestro éxito por el impacto real que generamos en operaciones que importan.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
  },
];

export default function HowWeWork() {
  const [activeSection, setActiveSection] = useState(sections[0]);

  return (
    <div className="min-h bg-white text-black py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            Cómo Trabajamos
          </h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Cuatro principios fundamentales que impulsan nuestra innovación aeroespacial
          </p>
        </motion.div>

        {/* Layout Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          {/* Panel lateral con botones */}
          <div className="flex flex-col space-y-6 md:col-span-1 lg:col-span-1">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => setActiveSection(section)}
                onMouseEnter={() => setActiveSection(section)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeSection.id === section.id
                    ? "bg-black text-white border-black shadow-xl"
                    : "bg-stone-100 text-black border-stone-200 hover:border-black/40"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h4 className="text-2xl font-semibold">{section.title}</h4>
              </motion.button>
            ))}
          </div>

          {/* Reveal panel */}
          <div className="md:col-span-1 lg:col-span-3 relative h-80 sm:h-96 md:h-[28rem] lg:h-[32rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 rounded-3xl overflow-hidden"
              >
                <img
                  src={activeSection.image}
                  alt={activeSection.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 p-6 sm:p-10 text-white space-y-4">
                  <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    {activeSection.title}
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed max-w-xl">
                    {activeSection.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
