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
              <span className="font-semibold text-black">
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

          {/* Imagen / bloque gráfico */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="/about/philosophy.jpg"
              alt="Engineering Philosophy"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay elegante */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/40" />
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
          {/* Imagen / bloque gráfico */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl order-last lg:order-first"
          >
            <img
              src="/about/history.jpg"
              alt="Company History"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent" />
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
              <span className="font-semibold text-white">
                {" "}
                construimos confianza.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
