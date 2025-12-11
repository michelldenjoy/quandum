import { motion } from "motion/react";

export default function FilosofiaTrayectoria() {
  return (
    <section className="w-full bg-gradient-to-b from-black via-slate-800 to-black">
      {/* Wrapper general */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">

        {/* ---------------------- FILOSOFÍA ---------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Texto */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Nuestra Filosofía
            </h2>

            <p className="text-lg text-gray-100 leading-relaxed">
              Nos mueve una idea simple:
              <span className="font-semibold text-white">
                {" "}
                la ingeniería de calidad construye el futuro.
              </span>
            </p>

            <p className="text-lg text-slate-100 leading-relaxed">
              Cada proyecto lo abordamos con una combinación única de rigor
              técnico, innovación constante y pensamiento crítico. Nuestros
              desarrollos se guían por estándares internacionales —DO-178C,
              DO-254, DO-160, MIL-STD…— que aseguran que cada sistema que
              diseñamos cumple con los niveles más exigentes de seguridad y
              rendimiento.
            </p>
          </div>

          {/* Bloque gráfico abstracto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-700/40 via-slate-500/20 to-slate-800/40"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              {/* Shapes animadas */}
              <motion.div
                animate={{ y: [-20, 20, -20] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 w-24 h-24 bg-slate-300/10 rounded-xl backdrop-blur-md"
              />

              <motion.div
                animate={{ y: [20, -20, 20] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 right-16 w-32 h-32 bg-slate-400/10 rounded-full backdrop-blur-md"
              />

              <motion.div
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 m-auto w-40 h-40 border border-slate-300/10 rounded-3xl"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ---------------------- TRAYECTORIA ---------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Bloque gráfico abstracto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl order-last lg:order-first bg-gradient-to-tr from-slate-700/30 via-slate-500/10 to-slate-900/30"
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
                className="absolute top-8 right-10 w-28 h-28 bg-slate-300/10 rounded-full backdrop-blur-md"
              />

              <motion.div
                animate={{ rotate: [0, 90, 180, 360] }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-10 left-10 w-36 h-36 border border-slate-400/10 rounded-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Texto */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Nuestra Trayectoria
            </h2>

            <p className="text-lg text-gray-100 leading-relaxed">
              A lo largo de casi dos décadas hemos participado en programas
              estratégicos para defensa, aeronáutica y sectores industriales de
              alta exigencia, siempre manteniendo una cultura de:
            </p>

            <ul className="space-y-2 text-lg text-slate-100 font-medium">
              <li>• Excelencia técnica</li>
              <li>• Mejora continua</li>
              <li>• Innovación sostenible</li>
              <li>• Compromiso absoluto con la fiabilidad</li>
            </ul>

            <p className="text-lg text-slate-100 leading-relaxed">
              No solo construimos soluciones avanzadas:
              <span className="font-semibold text-white"> construimos confianza.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}