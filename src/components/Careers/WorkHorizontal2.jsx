import { motion } from "motion/react";
import StarfieldNebula from "../3d/StarfieldNebula";

const pillars = [
  {
    number: "01",
    tag: "VALORES",
    title: "Cultura de Excelencia",
    summary: "Rigor técnico, pensamiento crítico y mejora continua en cada proyecto.",
    items: [
      "Proyectos de alta complejidad aeroespacial",
      "Equipos multidisciplinares especializados",
      "Estándares de certificación aeronáutica",
      "Autonomía y responsabilidad profesional",
    ],
    accent: "#2563EB", // brand-blue
  },
  {
    number: "02",
    tag: "CRECIMIENTO",
    title: "Desarrollo Real",
    summary: "Desde el primer día, formas parte de sistemas críticos bajo normativa certificable.",
    items: [
      "Normativa aeroespacial: DO-178, DO-254, DO-160",
      "Acompañamiento por ingenieros senior",
      "Progresión basada en competencias técnicas",
      "Partners internacionales en programas activos",
    ],
    accent: "#2563EB",
  },
  {
    number: "03",
    tag: "PROPÓSITO",
    title: "Impacto Tangible",
    summary: "Tu trabajo opera en entornos extremos y misiones donde la precisión es vital.",
    items: [
      "Sistemas críticos de defensa y seguridad",
      "I+D+i aeroespacial de vanguardia",
      "Tecnología para emergencias y rescate",
      "Innovación con propósito y trazabilidad",
    ],
    accent: "#2563EB",
  },
];

export default function WorkHorizontal2() {
  return (
    <section className="relative bg-gradient-to-b from-black/10 via-slate-900/70 to-black/10 py-24 sm:py-28 lg:py-32 overflow-hidden">
      <StarfieldNebula />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 lg:mb-15 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-5">
           
            <span className="text-[11px] font-mono tracking-[0.3em] text-slate-400 uppercase">
              ¿Por qué Quandum?
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-white tracking-tight leading-[1.05]">
            Desarrolla tu
            <br />
            <span className="font-semibold">potencial aquí</span>
          </h2>
          <p className="mt-5 text-slate-400 text-base md:text-lg leading-relaxed font-light max-w-xl">
            Tres razones por las que los ingenieros eligen quedarse y crecer con nosotros.
          </p>
        </motion.div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col bg-slate-900/50 backdrop-blur-sm border border-slate-800/60 hover:border-slate-600/70 rounded-2xl p-7 lg:p-8 transition-all duration-500 hover:bg-slate-900/70"
            >
              {/* Top row: number + tag */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-4xl font-bold text-white/8 select-none tabular-nums">
                  {pillar.number}
                </span>
                <span className="text-[10px] font-mono tracking-[0.28em] text-brand-blue/70 uppercase px-3 py-1 border border-brand-blue/20 rounded-full">
                  {pillar.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3 leading-snug group-hover:text-white transition-colors duration-300">
                {pillar.title}
              </h3>

              {/* Summary */}
              <p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">
                {pillar.summary}
              </p>

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-brand-blue/30 via-slate-700/40 to-transparent mb-6" />

              {/* Key points */}
              <ul className="space-y-3 flex-1">
                {pillar.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 + idx * 0.06 }}
                    className="flex items-start gap-3 group/item"
                  >
                    {/* Dot */}
                    <span className="mt-[7px] flex-shrink-0 w-1 h-1 rounded-full bg-brand-blue/60 group-hover/item:bg-brand-blue transition-colors duration-300" />
                    <span className="text-sm text-slate-400 leading-relaxed group-hover/item:text-slate-300 transition-colors duration-300">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom accent line — slides in on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-brand-blue/0 via-brand-blue/60 to-brand-blue/0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom strip ── */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-800/50"
        >
          <div className="flex items-center gap-8">
            {[
              { value: "47+", label: "Misiones activas" },
              { value: "100%", label: "Certificaciones" },
              { value: "20 años", label: "De experiencia" },
            ].map((stat, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">{stat.value}</div>
                <div className="text-[11px] font-mono tracking-wider text-slate-500 uppercase mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-400 font-light">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Buscamos talento ahora
          </div>
        </motion.div> */}

      </div>
    </section>
  );
}