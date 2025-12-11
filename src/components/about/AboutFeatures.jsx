import React from 'react'
import { motion } from "motion/react";

export default function AboutFeatures() {
  return (
    <div>
      <section className="w-full overflow-hidden bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 pt-28 pb-32">
        {/* ------------ CONTAINER ------------ */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* ------------ FEATURE BLOCK ------------ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* --- Texto izquierda --- */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <h4 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
                Excelencia técnica.
              </h4>

              <p className="text-slate-900 text-lg leading-relaxed mb-6">
                Contamos con casi dos décadas de experiencia colectiva
                en ingeniería aeronáutica, electrónica avanzada y diseño de
                sistemas críticos. Trabajamos bajo una premisa central: la
                innovación no es un objetivo, es un estándar diario.
              </p>

              <p className="text-slate-900 text-lg leading-relaxed">
                El 95% de nuestro equipo está formado por ingenieros y
                especialistas altamente cualificados que desarrollan soluciones
                para aviación, defensa, espacio e industria. La cultura interna
                se basa en el rigor, la trazabilidad, la mejora continua y una
                obsesión absoluta por la calidad.
              </p>
            </motion.div>

            {/* --- Imagen derecha --- */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative order-1 lg:order-2"
            >
              {/* imagen principal */}
              <img
                src="/images/about-3.jpg"
                alt="Engineering Team"
                className="w-full h-[420px] object-cover rounded-xl shadow-2xl"
              />

              {/* overlay decorativo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl pointer-events-none" />
            </motion.div>
          </div>

          {/* ------------ SECOND BLOCK ------------ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-28 ">
            {/* Imagen izquierda */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img
                src="/images/about-4.jpg"
                alt="Aerospace Design"
                className="w-full h-[420px] object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl pointer-events-none" />
            </motion.div>

            {/* Texto derecha */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h4 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
                Compromiso con la precisión y la fiabilidad.
              </h4>

              <p className="text-slate-900 text-lg leading-relaxed mb-6">
                Cada proyecto se desarrolla con una disciplina estricta:
                procesos auditables, diseño seguro, ingeniería certificable y
                soluciones robustas adaptadas a entornos operacionales
                exigentes.
              </p>

              <p className="text-slate-900 text-lg leading-relaxed">
                Nuestro enfoque multidisciplinar nos permite trabajar con
                sistemas complejos, integrar tecnologías avanzadas y entregar
                resultados que cumplen los requisitos más estrictos de los
                sectores aeroespacial, defensa e industrial.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
