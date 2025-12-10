import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const sections = [
  {
    id: 'autonomy',
    title: 'Automatización',
    number: '01',
    description: 'Desarrollamos sistemas autónomos avanzados que permiten a nuestras aeronaves operar de manera inteligente y adaptativa. Nuestra tecnología de IA integrada toma decisiones críticas en tiempo real, optimizando errores con alta precisión y reduciendo la necesidad de múltiples operarios.',
    image: '/bgmilitar.jpg'
  },
  {
    id: 'speed',
    title: 'Rapidez',
    number: '02',
    description: 'La velocidad define nuestra ingeniería. Desde el diseño conceptual hasta el despliegue operacional, aceleramos cada fase del desarrollo aeroespacial. Nuestros ciclos iterativos rápidos y metodologías ágiles nos permiten llevar innovaciones del laboratorio al cielo en tiempo récord, manteniendo los más altos estándares de seguridad.',
    image: 'images/rapidez.jpg'
  },
  {
    id: 'scale',
    title: 'Escala',
    number: '03',
    description: 'Construimos pensando en el crecimiento global. Nuestra infraestructura avanzada de manufactura y nuestras cadenas de suministro robustas nos permiten producir en gran escala sistemas electrónicos aeronáuticos esenciales sin comprometer la calidad ni las certificaciones. Cada unidad está diseñada para replicarse de forma eficiente, desde un prototipo único hasta flotas de cientos o miles de plataformas operando en todo el mundo.',
    image: 'images/scale.jpg'
  },
  {
    id: 'impact',
    title: 'Impacto',
    number: '04',
    description: 'Nuestro trabajo transforma industrias y salva vidas. Desde misiones de búsqueda y rescate hasta logística de emergencia y monitoreo ambiental, cada componente que construimos tiene un propósito crítico. Medimos nuestro éxito por el impacto real que generamos en operaciones que importan.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop'
  }
];

export default function HowWeWork() {
  const [activeSection, setActiveSection] = useState(sections[0]);

  return (
    <div className="min-h bg-gray-200 text-black py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-black font-bold mb-3 sm:mb-4">
            Cómo Trabajamos
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl mx-auto text-center max-w-3xl leading-relaxed px-4">
            Cuatro principios fundamentales que impulsan nuestra innovación aeroespacial
          </p>
        </motion.div>

        {/* Scroll Horizontal MÓVIL/TABLET */}
        <div className="lg:hidden mb-8 overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex gap-3 pb-4 min-w-max">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => setActiveSection(section)}
                className={`flex-shrink-0 px-5 sm:px-6 py-3 sm:py-4 rounded-lg transition-all duration-300 ${
                  activeSection.id === section.id
                    ? 'bg-white text-black shadow-lg scale-105'
                    : 'bg-zinc-900 text-white'
                }`}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-xs opacity-60 block mb-1">
                  {section.number}
                </span>
                <h3 className="text-base sm:text-lg font-bold whitespace-nowrap">
                  {section.title}
                </h3>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Contenido MÓVIL/TABLET */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-5 sm:space-y-6"
            >
              {/* Título con número integrado */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-baseline gap-3"
              >
                <span className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-black">
                  {activeSection.number}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  {activeSection.title}
                </h3>
              </motion.div>

              {/* Imagen */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative h-56 sm:h-64 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src={activeSection.image}
                  alt={activeSection.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>

              {/* Descripción */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                  {activeSection.description}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Layout ESCRITORIO */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-8 xl:gap-12">
          {/* Lado izquierdo - 2 columnas */}
          <div className="col-span-2 space-y-3 xl:space-y-4">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => setActiveSection(section)}
                className={`w-full text-left p-5 xl:p-6 rounded-xl transition-all duration-300 ${
                  activeSection.id === section.id
                    ? 'bg-white text-black shadow-xl'
                    : 'bg-zinc-800 text-white hover:bg-black'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs xl:text-sm opacity-60 block mb-1 xl:mb-2 font-semibold">
                      {section.number}
                    </span>
                    <h3 className="text-xl xl:text-2xl font-bold">{section.title}</h3>
                  </div>
                  <motion.div
                    animate={{
                      rotate: activeSection.id === section.id ? 90 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-5 h-5 xl:w-6 xl:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Lado Derecho - 3 columnas */}
          <div className="col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 xl:space-y-8"
              >
                {/* Título con número integrado */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-baseline gap-4"
                >
                  <span className="text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-black leading-none">
                    {activeSection.number}
                  </span>
                  <h3 className="text-3xl xl:text-4xl font-bold leading-tight">
                    {activeSection.title}
                  </h3>
                </motion.div>

                {/* Imagen */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="relative h-80 xl:h-96 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={activeSection.image}
                    alt={activeSection.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>

                {/* Descripción */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-gray-800 text-base xl:text-lg leading-relaxed font-medium">
                    {activeSection.description}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}