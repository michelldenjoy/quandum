import React from "react";
import { motion, useInView } from "motion/react";
import { Rocket, Beaker, TestTube, Users } from "lucide-react";
import CountUp from "react-countup";
import StarfieldNebula from "../3d/StarfieldNebula";
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
    <section className="py-20 text-white overflow-hidden">
      <StarfieldNebula />
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
            <h3 className="text-6xl font-extrabold tracking-tight">
              Nuestra forma de trabajar
            </h3>
            <p className="text-xl text-slate-300 text-justify leading-relaxed">
              Tratamos cada proyecto como un desafío único en el cielo y el
              espacio. Desde el concepto inicial hasta la certificación final,
              integramos ingeniería avanzada, simulación digital y pruebas
              exhaustivas para entregar soluciones fiables y de vanguardia.
            </p>
            <p className="text-xl text-slate-300 text-justify leading-relaxed">
              Nuestro enfoque se basa en la innovación sostenible, la seguridad
              absoluta y la excelencia técnica, alineado con estándares
              internacionales como FAA, EASA y AS9100.
            </p>
          </div>

          {/* Lado derecho */}
          {/* Lado derecho – enfoque ingeniería */}
<div className="relative">
  <div className="rounded-2xl border border-slate-800 bg-slate-900/40 px-10 py-12">
    <h4 className="text-sm uppercase tracking-widest text-slate-400 mb-10">
      Engineering workflow
    </h4>

    <ol className="space-y-10">
      {[
        {
          step: "01",
          title: "Mission & System Requirements",
          desc: "Definición funcional, análisis de riesgos, normativa aplicable y criterios de certificación.",
        },
        {
          step: "02",
          title: "Preliminary & Detailed Design",
          desc: "Arquitectura de sistema, diseño mecánico y eléctrico, simulación y análisis estructural.",
        },
        {
          step: "03",
          title: "Verification & Validation",
          desc: "Ensayos funcionales, ambientales y de vuelo conforme a estándares aeronáuticos.",
        },
        {
          step: "04",
          title: "Certification & Lifecycle Support",
          desc: "Soporte en certificación, documentación técnica y continuidad operativa.",
        },
      ].map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          className="grid grid-cols-[60px_1fr] gap-6"
        >
          {/* Número */}
          <div className="text-3xl font-light text-blue-500 tracking-tight">
            {item.step}
          </div>

          {/* Contenido */}
          <div>
            <h5 className="text-lg font-semibold text-slate-100">
              {item.title}
            </h5>
            <p className="mt-2 text-slate-400 leading-relaxed">
              {item.desc}
            </p>

            {/* Línea técnica */}
            <div className="mt-6 h-px bg-gradient-to-r from-blue-500/40 via-slate-700/40 to-transparent" />
          </div>
        </motion.li>
      ))}
    </ol>
  </div>
</div>

        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center my-20 max-w-4xl mx-auto"
        >
          <p className="text-3xl text-white overflow-hidden leading-relaxed">
            Desarrollamos tecnología que no se reemplaza.
            <br />
            Se diseña para cumplir su misión.
          </p>
        </motion.div> */}

        {/* Footer con compromiso */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-24 pb-12"
        >
          <p className="text-slate-400 text-3xl tracking-wider italic max-w-3xl mx-auto">
            Desarrollamos tecnología que no se reemplaza. <br />
            Se diseña para cumplir su misión.
          </p>
        </motion.div>

        {/* Cajones */}
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
                className="relative w-full rounded-xl bg-gradient-to-b from-slate-900/40 to-transparent 
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
