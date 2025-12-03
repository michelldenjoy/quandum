import { motion } from "motion/react";

export default function Collage() {
  return (
    <section className="w-full bg-gradient-to-r from-black/90 via-slate-800 to-black/90 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Construyendo el futuro de la aviación
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            En Quandum Aerospace trabajamos en sistemas aeronáuticos de alta precisión,
            diseñados y fabricados bajo los más altos estándares de ingeniería.
            Nuestro equipo combina innovación, excelencia técnica y décadas de experiencia
            en el sector aeroespacial y de defensa.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            Somos un entorno donde el talento crece, donde cada ingeniero puede influir
            directamente en el diseño, el rendimiento y la fiabilidad de tecnologías críticas.
          </p>
        </motion.div>

        {/* COLLAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative grid grid-cols-2 gap-4"
        >
          {/* columna izquierda */}
          <div className="space-y-4">
            <img
              src="/images/collage1.jpg"
              className="rounded-xl w-full h-56 object-cover border border-white/10"
            />
            <img
              src="/images/collage2.jpg"
              className="rounded-xl w-full h-72 object-cover border border-white/10"
            />
          </div>

          {/* columna derecha */}
          <div className="space-y-4 pt-8">
            <img
              src="/images/collage3.jpg"
              className="rounded-xl w-full h-72 object-cover border border-white/10"
            />
            <img
              src="/images/collage4.jpg"
              className="rounded-xl w-full h-56 object-cover border border-white/10"
            />
          </div>

          {/* Glow / Acabado futurista */}
          <div className="absolute -inset-4 rounded-3xl pointer-events-none opacity-40 bg-gradient-to-tr from-cyan-500/10 to-transparent blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
