import { motion } from "motion/react";
import StarfieldNebula from "../3d/StarfieldNebula.jsx";

export default function VisionMision() {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Fondo técnico aeroespacial */}
 <StarfieldNebula />
      {/* Wrapper general */}
      <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-40 space-y-32">
        {/* ---------------------- VISION ---------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 bg-zinc-900/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Texto */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-blue-500/50"></div>
              <span className="text-xs tracking-wider text-blue-400/60 font-light">
                01
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight tracking-tight">
              Nuestra{" "}
              <span className="bg-gradient-to-r from-blue-100 via-blue-300 to-cyan-200 bg-clip-text text-transparent">
                Vision
              </span>
            </h2>

            <p className="text-base md:text-lg text-justify text-slate-300 leading-relaxed font-light">
              Nuestra visión es ser un referente internacional en ingeniería
              avanzada para sistemas críticos, aportando soluciones tecnológicas
              que impulsen el progreso en los sectores aeroespacial, defensa e
              industrial. Desarrollamos tecnología fiable, precisa y
              sostenible, diseñada para operar en los entornos más exigentes,
              donde la seguridad, el rendimiento y la calidad no admiten
              concesiones. Creemos en una ingeniería que no solo resuelve
              desafíos técnicos, sino que construye confianza a largo plazo.
            </p>
          </div>

          {/* img*/}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-950/40 via-slate-900/20 to-cyan-950/40 border border-blue-500/10"
          >
            <img
              src="/vision.jpg"
              alt="Engineering Team"
              className="w-full h-[420px] object-cover rounded-xl shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* ---------------------- MISION ---------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 bg-zinc-900/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 lg:grid-cols-2 gap-16 items-center"
        >
          {/* img */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl order-last lg:order-first bg-gradient-to-tr from-cyan-950/40 via-slate-900/20 to-blue-950/40 border border-cyan-500/10"
          >
            <img
              src="/mision.jpg"
              alt="Engineering Team"
              className="w-full h-[420px] object-cover rounded-xl shadow-2xl"
            />
          </motion.div>

          {/* contenido */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-blue-500/50"></div>
              <span className="text-xs tracking-wider text-blue-400/60 font-light">
                02
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight tracking-tight">
              Nuestra{" "}
              <span className="bg-gradient-to-r from-blue-100 via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Mision
              </span>
            </h2>

            <p className="text-base md:text-lg text-justify text-slate-300 leading-relaxed font-light">
              Nuestra misión es diseñar, desarrollar y validar soluciones
              tecnológicas a medida, acompañando a nuestros clientes en todo el
              ciclo de vida del proyecto, desde la fase conceptual hasta la
              entrega final. Trabajamos bajo estrictos estándares
              internacionales, aplicando rigor técnico, innovación constante y
              una cultura de excelencia para garantizar que cada sistema cumpla
              su misión de forma robusta, segura y eficiente. En Quandum,
              entendemos cada proyecto como único y asumimos la responsabilidad
              de convertir requisitos complejos en soluciones fiables y
              certificables.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
