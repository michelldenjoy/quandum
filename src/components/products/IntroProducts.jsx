import { motion } from "motion/react";

export default function IntroProducts() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Columna izquierda – Título */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-black mb-6"
            >
              Capacidades para{" "}
              <span className="bg-gradient-to-r from-brand-blue via-slate-800 to-brand-blue bg-clip-text text-transparent font-bold">
                MISIONES CRÍTICAS
              </span>
            </motion.h3>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "80%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="h-0.5 bg-gradient-to-r from-transparent via-brand-blue to-transparent rounded-full"
            />
          </div>

          {/* Columna derecha – Texto */}
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-slate-900 text-base md:text-lg leading-relaxed"
          >
            En Quandum Aerospace desarrollamos proyectos donde la ingeniería no
            admite aproximaciones. Cada sistema que diseñamos responde a una
            necesidad operativa concreta, bajo requisitos estrictos de fiabilidad,
            seguridad y certificación.
            <br />
            <br />
            Nuestros proyectos integran diseño electrónico, software certificado,
            mecánica de precisión y validación en entornos reales, dando lugar a
            soluciones únicas, concebidas para operar en plataformas
            aeroespaciales y de defensa donde el fallo no es una opción.
          </motion.p>

        </div>
      </div>
    </section>
  );
}
