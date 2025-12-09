import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const sections = [
  {
    id: 'autonomy',
    title: 'Autonomia',
    number: '01',
    description: 'Desarrollamos sistemas autónomos avanzados que permiten a nuestras aeronaves operar de manera inteligente y adaptativa. Nuestra tecnología de IA integrada toma decisiones críticas en tiempo real, optimizando rutas de vuelo, gestionando recursos y respondiendo a condiciones cambiantes sin intervención humana constante.',
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
    description: 'Construimos para escalar globalmente. Nuestra infraestructura de manufactura avanzada y cadenas de suministro resilientes nos permiten producir en gran serie sistemas electrónicos aeronáuticos críticos sin comprometer la calidad ni la certificación. Cada sistema está diseñado para replicarse eficientemente, desde prototipos únicos hasta despliegues de cientos de unidades.',
    image: 'images/scale.jpg'
  },
  {
    id: 'impact',
    title: 'Impacto',
    number: '04',
    description: 'Nuestro trabajo transforma industrias y salva vidas. Desde misiones de búsqueda y rescate hasta logística de emergencia y monitoreo ambiental, cada aeronave que construimos tiene un propósito crítico. Medimos nuestro éxito por el impacto real que generamos en operaciones que importan.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop'
  }
];

export default function HowWeWork() {
  const [activeSection, setActiveSection] = useState(sections[0]);

  return (
    <div className="min-h-screen bg-stone-300 text-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-16"
        >
          <h2 className="text-4xl md:text-7xl text-black font-bold mb-4">Como Trabajamos</h2>
          <p className="text-gray-600 text-base md:text-xl max-w-2xl">
            Cuatro principios fundamentales que impulsan nuestra innovación aeroespacial
          </p>
        </motion.div>

        {/* Mobile Navigation - Horizontal Scroll */}
        <div className="md:hidden mb-8 -mx-6 px-6 overflow-x-auto">
          <div className="flex gap-3 pb-4 min-w-max">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => setActiveSection(section)}
                className={`flex-shrink-0 px-6 py-4 rounded-lg transition-all duration-300 ${
                  activeSection.id === section.id
                    ? 'bg-white text-black shadow-lg'
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
                <h3 className="text-lg font-bold whitespace-nowrap">{section.title}</h3>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Mobile Content */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Number indicator */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-800"
              >
                {activeSection.number}
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative h-64 rounded-2xl overflow-hidden"
              >
                <img
                  src={activeSection.image}
                  alt={activeSection.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold mb-4">
                  {activeSection.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {activeSection.description}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Menu */}
          <div className="space-y-2">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => setActiveSection(section)}
                className={`w-full text-left p-6 rounded-lg transition-all duration-300 ${
                  activeSection.id === section.id
                    ? 'bg-white text-black shadow-lg'
                    : 'bg-zinc-900 text-white hover:bg-zinc-800'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm opacity-60 block mb-1">
                      {section.number}
                    </span>
                    <h3 className="text-2xl font-bold">{section.title}</h3>
                  </div>
                  <motion.div
                    animate={{
                      rotate: activeSection.id === section.id ? 90 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-6 h-6"
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

          {/* Right side - Content */}
          <div className="sticky top-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Number indicator */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-slate-800"
                >
                  {activeSection.number}
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="relative h-80 rounded-2xl overflow-hidden"
                >
                  <img
                    src={activeSection.image}
                    alt={activeSection.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-3xl font-bold mb-4">
                    {activeSection.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
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