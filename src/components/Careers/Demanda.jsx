import React from "react";
import {
  Rocket,
  Users,
  Clock,
  Shield,
  Zap,
  ArrowRight,
  Award,

} from "lucide-react";

//OPORTUNIDADES ABIERTAS 

export default function Demanda() {

  const positions = [
    {
      title: "Ingeniero/a Aeronáutico Senior",
      dept: "Estructuras & Aerodinámica",
      location: "Málaga, España",
      icon: Rocket,
    },
    {
      title: "Ingeniero/a Software Embebido",
      dept: "Aviónica DO-178C",
      location: "Málaga, España",
      icon: Zap,
    },
    {
      title: "Ingeniero/a Electrónica de Potencia",
      dept: "Sistemas Eléctricos",
      location: "Málaga, España",
      icon: Zap,
    },
    {
      title: "Técnico/a Superior de Producción",
      dept: "Montaje & Integración",
      location: "Málaga, España",
      icon: Users,
    },
    {
      title: "Ingeniero/a de Certificación",
      dept: "EASA / FAA Part 21",
      location: "Málaga, España",
      icon: Shield,
    },
    {
      title: "Diseñador/a Mecánico CAD",
      dept: "Diseño 3D & Simulación",
      location: "Málaga, España",
      icon: Award,
    },
  ];



  return (
    <div>
      <section className="relative w-full py-24 px-6 bg-gradient-to-r from-black/90 via-slate-800 to-black/90 text-white left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Oportunidades Abiertas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions.map((job, i) => {
              const Icon = job.icon;
              return (
                <div
                  key={i}
                  className="group bg-black border border-gray-800 rounded-xl p-8 hover:border-blue-600 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <Icon className="w-6 h-6 text-brand-pink group-hover:text-white transition-colors" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-3">
                    {job.dept}
                  </p>
                  <p className="text-gray-600 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {job.location}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
