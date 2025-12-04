import React from "react";
import { motion, useInView } from "motion/react";
import { Target, Users, Zap, UserCheck } from "lucide-react";

export default function Valores() {
  const values = [
    {
      icon: Target,
      title: "Precisión",
      desc: "Diseñamos sistemas críticos con tolerancia cero a errores. DO-254 y DO-178C son nuestro estándar diario.",
      gradient: "from-blue-600 to-brand-blue",
      delay: 0.1,
    },
    {
      icon: Users,
      title: "Equipo",
      desc: "Colaboramos con ingenieros, certificadores y pilotos para innovar en aviación sostenible.",
      gradient: "from-blue-600 to-brand-blue",
      delay: 0.2,
    },
    {
      icon: Zap,
      title: "Velocidad",
      desc: "Lanzamos proyectos en meses, no años, manteniendo la máxima seguridad aeronáutica.",
      gradient: "from-brand-pink to-red-700",
      delay: 0.3,
    },
    {
      icon: UserCheck,
      title: "Responsabilidad",
      desc: "Esta compañía es tuya. Asume la propiedad extrema de cada proyecto aeronáutico.",
      gradient: "from-brand-pink to-red-700",
      delay: 0.4,
    },
  ];

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-black via-slate-800 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título con entrada elegante */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-zinc-900 text-cyan-400 border border-cyan-500/20 rounded-full mb-6">
            Nuestros Valores
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Así volamos más alto
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            No son palabras en una pared. Son los principios que guían cada decisión técnica y cada línea de código.
          </p>
        </motion.div>

        {/* Grid de valores con animación escalonada + efecto "card lift" original */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, i) => {
            const Icon = val.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: val.delay }}
                whileHover={{ y: -12 }}
                className="group relative"
              >
                {/* Card principal */}
                <div className="relative h-full p-8 bg-gradient-to-br from-zinc-900/80 via-zinc-950 to-black border border-zinc-800 rounded-2xl backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-500/40 group-hover:shadow-2xl group-hover:shadow-cyan-500/10">
                  {/* Fondo con gradiente sutil que se activa en hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 bg-gradient-to-br ${val.gradient} blur-3xl scale-10`}
                  />

                  {/* Icono con anillo luminoso */}
                  <div className="relative z-10 mb-8">
                    <div className="w-20 h-20 mx-auto rounded-full bg-black/50 backdrop-blur-sm border-2 border-zinc-700 flex items-center justify-center group-hover:border-cyan-500/60 transition-all duration-500">
                      <div className="relative">
                        <Icon className="w-10 h-10 text-white transition-all duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl scale-0 group-hover:scale-100 transition-transform duration-700" />
                      </div>
                    </div>
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                    {val.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {val.desc}
                  </p>

                  {/* Línea decorativa inferior */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA sutil al final (opcional pero muy elegante) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-center mt-20"
        >
          <p className="text-slate-400 text-lg">
            Si compartes estos valores,{" "}
            <a
              // href="/careers"
              className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition-colors duration-300"
            >
              queremos conocerte
              {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg> */}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}