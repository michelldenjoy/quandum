import React from "react";
import { motion, useInView } from "motion/react";
import { Rocket, Beaker, TestTube, Users } from "lucide-react";
import CountUp from "react-countup";
import { useRef } from "react";

const steps = [
  {
    icon: Rocket,
    title: "Análisis de misión y requisitos",
    desc: "Evaluación técnica profunda de objetivos, riesgos y certificación aeronáutica.",
  },
  {
    icon: Beaker,
    title: "Diseño y desarrollo optimizado",
    desc: "Ingeniería concurrente con simulación avanzada y estándares AS9100/EASA.",
  },
  {
    icon: TestTube,
    title: "Validación y pruebas rigurosas",
    desc: "Ensayos en tierra, vuelo y soporte de ciclo de vida completo.",
  },
  {
    icon: Users,
    title: "Colaboración directa con el cliente",
    desc: "Comunicación técnica constante para soluciones a medida.",
  },
];

export default function OurWorkingWay() {
  return (
    <section className="py-20 bg-aerospacee text-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Lado texto */}
          <div className="space-y-8">
            <h3 className="text-5xl font-extrabold tracking-tight">
              Nuestra forma de trabajar en aeronáutica
            </h3>
            <p className="text-xl text-slate-300 leading-relaxed">
              Tratamos cada proyecto como un desafío único en el cielo y el
              espacio. Desde el concepto inicial hasta la certificación final,
              integramos ingeniería avanzada, simulación digital y pruebas
              exhaustivas para entregar soluciones fiables y de vanguardia.
            </p>
            <p className="text-xl text-slate-300 leading-relaxed">
              Nuestro enfoque se basa en la innovación sostenible, la seguridad
              absoluta y la excelencia técnica, alineado con estándares
              internacionales como FAA, EASA y AS9100.
            </p>
          </div>

          {/* Lado pasos visuales */}
          <div className="relative">
            {/* Fondo sutil con imagen (reemplaza con tu URL real) */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20 rounded-3xl"
              style={{
                backgroundImage:
                  "url('https://example.com/futuristic-rocket-launch.jpg')",
              }}
            ></div>

            <div className="relative bg-slate-800/80 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-slate-700">
              <h4 className="text-2xl font-bold mb-8 text-center">
                Nuestro proceso paso a paso
              </h4>
              <ul className="space-y-8">
                {steps.map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    className="flex items-start gap-6 group hover:translate-x-4 transition-transform"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <step.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h5 className="text-xl font-semibold text-blue-300">
                        {step.title}
                      </h5>
                      <p className="text-slate-400 mt-2">{step.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center my-20 max-w-4xl mx-auto"
        >
          <p className="text-2xl text-white overflow-hidden leading-relaxed">
            Desarrollamos tecnología que no se reemplaza.
            <br />
            Se diseña para cumplir su misión.
          </p>
        </motion.div>

        {/* FEATURES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 pt-20 border-t border-slate-800/60"
        >
          {[
            { value: 2006, suffix: "", label: "Año de fundación" },
            { value: 20, suffix: "+", label: "Años de experiencia" },
            { value: 100, suffix: "%", label: "Sistemas críticos" },
            { value: 100, suffix: "%", label: "Proyectos a medida" },
          ].map((stat, i) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                ref={ref}
                key={i}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative w-full rounded-xl bg-gradient-to-b from-slate-900/80 to-slate-950/90 
                   border border-slate-800/60 px-6 py-8 text-center lg:text-left
                   shadow-lg shadow-black/20"
              >
                {/* Línea decorativa */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

                {/* Valor animado */}
                <div className="text-3xl md:text-4xl font-light tracking-tight text-blue-400 mb-3">
                  {isInView && (
                    <CountUp
                      end={stat.value}
                      duration={2.4}
                      separator=""
                      suffix={stat.suffix}
                    />
                  )}
                </div>

                {/* Separador */}
                <div className="w-10 h-px bg-blue-500/40 mb-4 mx-auto lg:mx-0" />

                {/* Label */}
                <div className="text-xs md:text-sm text-slate-400 uppercase tracking-widest font-light">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
