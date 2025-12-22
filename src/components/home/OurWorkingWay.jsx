import React from "react";
import { motion } from "motion/react";
import { Rocket, Beaker, TestTube, Users } from "lucide-react"; // Íconos futuristas (instala lucide-react)

const steps = [
  { icon: Rocket, title: "Análisis de misión y requisitos", desc: "Evaluación técnica profunda de objetivos, riesgos y certificación aeronáutica." },
  { icon: Beaker, title: "Diseño y desarrollo optimizado", desc: "Ingeniería concurrente con simulación avanzada y estándares AS9100/EASA." },
  { icon: TestTube, title: "Validación y pruebas rigurosas", desc: "Ensayos en tierra, vuelo y soporte de ciclo de vida completo." },
  { icon: Users, title: "Colaboración directa con el cliente", desc: "Comunicación técnica constante para soluciones a medida." },
];

export default function OurWorkingWay() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-slate-900 text-white overflow-hidden">
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
              Tratamos cada proyecto como un desafío único en el cielo y el espacio. Desde el concepto inicial hasta la certificación final, integramos ingeniería avanzada, simulación digital y pruebas exhaustivas para entregar soluciones fiables y de vanguardia.
            </p>
            <p className="text-xl text-slate-300 leading-relaxed">
              Nuestro enfoque se basa en la innovación sostenible, la seguridad absoluta y la excelencia técnica, alineado con estándares internacionales como FAA, EASA y AS9100.
            </p>
          </div>

          {/* Lado pasos visuales */}
          <div className="relative">
            {/* Fondo sutil con imagen (reemplaza con tu URL real) */}
            <div className="absolute inset-0 bg-cover bg-center opacity-20 rounded-3xl" 
                 style={{ backgroundImage: "url('https://example.com/futuristic-rocket-launch.jpg')" }}></div>
            
            <div className="relative bg-slate-800/80 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-slate-700">
              <h4 className="text-2xl font-bold mb-8 text-center">Nuestro proceso paso a paso</h4>
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
                      <h5 className="text-xl font-semibold text-blue-300">{step.title}</h5>
                      <p className="text-slate-400 mt-2">{step.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}