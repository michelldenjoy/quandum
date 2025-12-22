import { motion } from "motion/react";

export default function Illuminator() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black z-0" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center z-10">

        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Category */}
          <span className="inline-block text-sm tracking-widest text-brand-blue uppercase">
            Producto · Sistemas Aeronáuticos
          </span>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            IR Illuminator Subsystem
            <span className="block font-semibold text-brand-blue mt-2">
              (IRILL)
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
            El <strong>IR Illuminator SubSystem (IRILL)</strong> es un sistema de
            iluminación basado en tecnología infrarroja, diseñado para operar en
            condiciones nocturnas y entornos de visibilidad reducida durante
            misiones de repostaje en vuelo.
          </p>

          <p className="text-slate-400 leading-relaxed max-w-xl">
            Integrado en el <strong>BEVS (Boom Enhanced Vision System)</strong>,
            el IRILL permite al <strong>Air Refuelling Operator (ARO)</strong>
            mejorar significativamente la percepción visual del área de
            repostaje, aumentando la seguridad y precisión de la operación en
            plataformas <strong>A-330 MRTT</strong> y <strong>A-310 MRTT</strong>.
          </p>

          {/* Key facts */}
          <div className="grid grid-cols-2 gap-6 pt-6">
            <div>
              <span className="block text-xs uppercase tracking-widest text-slate-400">
                Plataforma
              </span>
              <span className="text-lg font-semibold">A-330 / A-310 MRTT</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest text-slate-400">
                Integración
              </span>
              <span className="text-lg font-semibold">BEVS · ARBS</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest text-slate-400">
                Operación
              </span>
              <span className="text-lg font-semibold">Vuelos nocturnos</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest text-slate-400">
                Función
              </span>
              <span className="text-lg font-semibold">
                Mejora visual crítica
              </span>
            </div>
          </div>
        </motion.div>

        {/* ---------------- IMAGE ---------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[420px] md:h-[520px] lg:h-[620px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src="/illuminator.jpg"
            alt="IR Illuminator Subsystem"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </motion.div>
      </div>
    </section>
  );
}
