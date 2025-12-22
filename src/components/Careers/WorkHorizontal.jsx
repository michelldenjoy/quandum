import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function WorkHorizontal() {
  const [active, setActive] = useState(null);

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
        "Construimos pensando en el crecimiento global. Nuestra infraestructura avanzada de manufactura y nuestras cadenas de suministro robustas nos permiten producir en gran escala sistemas electrónicos aeronáuticos esenciales sin comprometer la calidad ni las certificaciones.",
      image: "/images/scale.jpg",
    },
    {
      id: "impact",
      title: "Impacto",
      description:
        "Nuestro trabajo transforma industrias y salva vidas. Desde misiones de búsqueda y rescate hasta logística de emergencia y monitoreo ambiental, cada componente que construimos tiene un propósito crítico.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    },
  ];

  const activeSection = sections.find(s => s.id === active);

  return (
    <section className="max-w-screen-2xl bg-white">
      <div className="max-w-7xl mx-auto px-6 my-28">

        <h3 className="text-4xl font-bold mb-16 text-black text-center">
          Cómo Trabajamos
        </h3>

        {/* Grid con descripción insertada en móvil */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <>
              {/* Card de la sección */}
              <button
                key={section.id}
                onClick={() =>
                  setActive(active === section.id ? null : section.id)
                }
                className={`text-left p-8 rounded-2xl border transition-all
                  ${
                    active === section.id
                      ? "border-blue-600 shadow-xl"
                      : "border-slate-200 hover:shadow-lg"
                  }`}
              >
                <h4 className="text-2xl font-semibold text-black mb-2">
                  {section.title}
                </h4>
                <p className="text-slate-600 line-clamp-3">
                  {section.description}
                </p>
              </button>

              {/* Descripción expandida JUSTO DESPUÉS en móvil */}
              <AnimatePresence>
                {active === section.id && (
                  <motion.div
                    key={`${section.id}-mobile`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="md:hidden col-span-1 overflow-hidden"
                  >
                    <div className="space-y-6 pt-4">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="rounded-2xl shadow-2xl object-cover w-full h-[280px]"
                      />
                      <div className="space-y-4">
                        <h4 className="text-2xl font-bold text-black">
                          {section.title}
                        </h4>
                        <p className="text-base text-slate-700 leading-relaxed">
                          {section.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ))}
        </div>

        {/* Descripción expandida para DESKTOP (debajo del grid completo) */}
        <AnimatePresence>
          {active && (
            <motion.div
              key={`${active}-desktop`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="hidden md:block overflow-hidden"
            >
              {activeSection && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 items-center">
                  <img
                    src={activeSection.image}
                    alt={activeSection.title}
                    className="rounded-3xl shadow-2xl object-cover w-full h-[420px]"
                  />

                  <div className="space-y-6">
                    <h4 className="text-3xl font-bold text-black">
                      {activeSection.title}
                    </h4>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {activeSection.description}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}