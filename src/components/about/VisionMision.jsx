import { motion } from "motion/react";

export default function FilosofiaTrayectoria() {
  return (
    <section className="w-full relative bg-aerospace overflow-hidden">
      {/* Fondo técnico aeroespacial */}


      {/* Wrapper general */}
      <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-40 space-y-32">

        {/* ---------------------- VISION ---------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Texto */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-blue-500/50"></div>
              <span className="text-xs tracking-wider text-blue-400/60 font-light">01</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight tracking-tight">
              Nuestra <span className="bg-gradient-to-r from-blue-100 via-blue-300 to-cyan-200 bg-clip-text text-transparent">Vision</span>
            </h2>


            <p className="text-base md:text-lg text-slate-300 leading-relaxed font-light">
            Nuestra visión es ser un referente internacional en ingeniería avanzada para sistemas críticos, aportando soluciones tecnológicas que impulsen el progreso en los sectores aeroespacial, defensa e industrial.
            Aspiramos a desarrollar tecnología fiable, precisa y sostenible, diseñada para operar en los entornos más exigentes, donde la seguridad, el rendimiento y la calidad no admiten concesiones. Creemos en una ingeniería que no solo resuelve desafíos técnicos, sino que construye confianza a largo plazo.
            </p>
          </div>

          {/* Bloque gráfico*/}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-950/40 via-slate-900/20 to-cyan-950/40 border border-blue-500/10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              {/* Shapes animadas con tema azul */}
              <motion.div
                animate={{ y: [-20, 20, -20] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 w-24 h-24 bg-blue-400/10 rounded-xl backdrop-blur-md border border-blue-400/20"
              />

              <motion.div
                animate={{ y: [20, -20, 20] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 right-16 w-32 h-32 bg-cyan-400/10 rounded-full backdrop-blur-md border border-cyan-400/20"
              />

              <motion.div
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 m-auto w-40 h-40 border border-blue-300/20 rounded-3xl"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ---------------------- MISION ---------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Bloque gráfico */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl order-last lg:order-first bg-gradient-to-tr from-cyan-950/40 via-slate-900/20 to-blue-950/40 border border-cyan-500/10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <motion.div
                animate={{ x: [-15, 15, -15] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-10 w-28 h-28 bg-cyan-400/10 rounded-full backdrop-blur-md border border-cyan-400/20"
              />

              <motion.div
                animate={{ rotate: [0, 90, 180, 360] }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-10 left-10 w-36 h-36 border border-blue-400/20 rounded-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Texto */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-blue-500/50"></div>
              <span className="text-xs tracking-wider text-blue-400/60 font-light">02</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight tracking-tight">
              Nuestra <span className="bg-gradient-to-r from-blue-100 via-blue-200 to-cyan-200 bg-clip-text text-transparent">Mision</span>
            </h2>

            <p className="text-base md:text-lg text-slate-300 leading-relaxed font-light">
            Nuestra misión es diseñar, desarrollar y validar soluciones tecnológicas a medida, acompañando a nuestros clientes en todo el ciclo de vida del proyecto, desde la fase conceptual hasta la entrega final.
            Trabajamos bajo estrictos estándares internacionales, aplicando rigor técnico, innovación constante y una cultura de excelencia para garantizar que cada sistema cumpla su misión de forma robusta, segura y eficiente. En Quandum, entendemos cada proyecto como único y asumimos la responsabilidad de convertir requisitos complejos en soluciones fiables y certificables.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}