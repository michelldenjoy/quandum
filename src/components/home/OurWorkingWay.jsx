import React from "react";
import { motion } from "motion/react";


export default function OurWorkingWay() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
      >
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-black">
            Nuestra forma de trabajar
          </h3>
          <p className="text-lg text-slate-700 leading-relaxed">
            Abordamos cada proyecto como un sistema único. Analizamos la misión,
            definimos requisitos, evaluamos riesgos y desarrollamos soluciones
            optimizadas desde la fase conceptual hasta la validación final.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Nuestro enfoque está orientado a la fiabilidad a largo plazo,
            integrando ingeniería, certificación y calidad en un único flujo de
            trabajo.
          </p>
        </div>
        <div className="bg-stone-100 rounded-3xl p-10 shadow-xl">
          <ul className="space-y-5 text-lg text-slate-800">
            <li>• Análisis técnico y funcional de cada misión</li>
            <li>• Desarrollo a medida bajo estándares internacionales</li>
            <li>• Validación, pruebas y soporte de ciclo de vida</li>
            <li>• Relación técnica directa con el cliente</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
