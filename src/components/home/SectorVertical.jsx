import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function HomeSectors() {
  const SECTORS = [
    {
      id: "aero",
      title: "Aeroespacial",
      subtitle: "Ingeniería para sistemas críticos de vuelo",
      description:
        "Diseñamos y desarrollamos sistemas electrónicos y optoelectrónicos para plataformas aéreas, cumpliendo los más altos estándares de fiabilidad, seguridad y certificación aeronáutica.",
      image: "/aeroespacial.jpg",
    },
    {
      id: "defensa",
      title: "Defensa",
      subtitle: "Tecnología robusta para entornos extremos",
      description:
        "Desarrollamos soluciones críticas certificables para programas de defensa, donde la fiabilidad, la seguridad funcional y la resistencia operativa son esenciales.",
      image: "/defensa.jpg",
    },
    {
      id: "industrial",
      title: "Industrial",
      subtitle: "Ingeniería avanzada aplicada a la industria",
      description:
        "Aplicamos nuestra experiencia aeroespacial al sector industrial mediante soluciones de automatización, control, instrumentación y sistemas electrónicos de alta fiabilidad.",
      image: "/industrial.jpg",
    },
  ];

  const [active, setActive] = useState(SECTORS[0]);

  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-black text-center"
        >
          Sectores en los que operamos
        </motion.h3>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* LEFT: Sector list */}
          <div className="space-y-6">
            {SECTORS.map((sector) => (
              <button
                key={sector.id}
                onClick={() => setActive(sector)}
                onMouseEnter={() => setActive(sector)}
                className={`w-full text-left p-8 rounded-2xl border transition-all duration-300
                  ${
                    active.id === sector.id
                      ? "bg-black text-white border-black shadow-xl"
                      : "bg-stone-100 text-black border-stone-200 hover:border-black/40"
                  }
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h4 className="text-2xl font-semibold mb-2">{sector.title}</h4>
                <p
                  className={`text-sm leading-relaxed ${
                    active.id === sector.id
                      ? "text-slate-200"
                      : "text-slate-600"
                  }`}
                >
                  {sector.subtitle}
                </p>
              </button>
            ))}
          </div>

          {/* RIGHT: Reveal panel */}
          <div className="relative h-[420px] lg:h-full rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0"
              >
                {/* Image */}
                <img
                  src={active.image}
                  alt={active.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 p-10 text-white space-y-4">
                  <h4 className="text-3xl font-bold">{active.title}</h4>
                  <p className="text-lg text-slate-200 leading-relaxed max-w-xl">
                    {active.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
