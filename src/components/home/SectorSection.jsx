import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function SectorsSection() {
  const [active, setActive] = useState(null);

  const sectors = [
    {
      id: "aero",
      title: "Aeroespacial",
      short: "Sistemas electrónicos y optoelectrónicos para aeronaves.",
      image: "/aeroespacial.jpg",
      description: `
        Desarrollo de sistemas críticos embarcados, electrónica certificable,
        optoelectrónica y soluciones diseñadas para operar en entornos extremos
        bajo estándares aeronáuticos internacionales.
      `,
    },
    {
      id: "defense",
      title: "Defensa",
      short: "Soluciones certificables para entornos de alta exigencia.",
      image: "/defensa.jpg",
      description: `
        Ingeniería avanzada aplicada a programas militares, con foco en
        fiabilidad, robustez y cumplimiento normativo MIL-STD y RTCA.
      `,
    },
    {
      id: "industrial",
      title: "Industrial",
      short: "Automatización, control e instrumentación avanzada.",
      image: "industrial.jpg",
      description: `
        Diseño y desarrollo de sistemas industriales especiales, integrando
        electrónica, software y mecánica para aplicaciones donde la precisión,
        la continuidad operativa y la fiabilidad son esenciales.
      `,
    },
  ];

  const activeSector = sectors.find(s => s.id === active);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-16">

        <h3 className="text-4xl font-bold text-black text-center">
          Sectores en los que operamos
        </h3>

        {/* Grid con descripción insertada en móvil */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <>
              {/* Card del sector */}
              <button
                key={sector.id}
                onClick={() =>
                  setActive(active === sector.id ? null : sector.id)
                }
                className={`text-left p-8 rounded-2xl border transition-all
                  ${active === sector.id
                    ? "border-blue-600 shadow-xl"
                    : "border-slate-200 hover:shadow-lg"
                  }`}
              >
                <h4 className="text-2xl font-semibold text-black mb-2">
                  {sector.title}
                </h4>
                <p className="text-slate-600">{sector.short}</p>
              </button>

              {/* Descripción expandida JUSTO DESPUÉS en móvil */}
              <AnimatePresence>
                {active === sector.id && (
                  <motion.div
                    key={`${sector.id}-mobile`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="md:hidden col-span-1 overflow-hidden"
                  >
                    <div className="space-y-6 pt-4">
                      <img
                        src={sector.image}
                        alt={sector.title}
                        className="rounded-2xl shadow-2xl object-cover w-full h-[280px]"
                      />
                      <div className="space-y-4">
                        <h4 className="text-2xl font-bold text-black">
                          {sector.title}
                        </h4>
                        <p className="text-base text-slate-700 leading-relaxed">
                          {sector.description}
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
              {activeSector && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8 items-center">
                  <img
                    src={activeSector.image}
                    alt={activeSector.title}
                    className="rounded-3xl shadow-2xl object-cover w-full h-[420px]"
                  />

                  <div className="space-y-6">
                    <h4 className="text-3xl font-bold text-black">
                      {activeSector.title}
                    </h4>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {activeSector.description}
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