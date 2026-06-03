import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import StarfieldNebula from "../3d/StarfieldNebula";

// number y accent → iguales en todos los idiomas
const pillarsMeta = [
  { number: "01", accent: "#2563EB" },
  { number: "02", accent: "#2563EB" },
  { number: "03", accent: "#2563EB" },
];

export default function WorkHorizontal2() {
  const { t } = useTranslation("careers");

  const pillarsTexts = t("workHorizontal.pillars", { returnObjects: true });

  // Fusionamos igual que siempre
  const pillars = pillarsMeta.map((meta, i) => ({
    ...meta,
    ...pillarsTexts[i],
  }));

  return (
    <section className="relative bg-gradient-to-b from-black/10 via-slate-900/70 to-black/10 py-24 sm:py-28 lg:py-32 overflow-hidden">
      <StarfieldNebula />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 lg:mb-15 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[11px] font-mono tracking-[0.3em] text-slate-400 uppercase">
              {t("workHorizontal.eyebrow")}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-white tracking-tight leading-[1.05]">
            {t("workHorizontal.title_1")}
            <br />
            <span className="font-semibold">{t("workHorizontal.title_2")}</span>
          </h2>
          <p className="mt-5 text-slate-400 text-base md:text-lg leading-relaxed font-light max-w-xl">
            {t("workHorizontal.subtitle")}
          </p>
        </motion.div>

        {/* Cards Grid — el .map() no cambia nada */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col bg-slate-900/50 backdrop-blur-sm border border-slate-800/60 hover:border-slate-600/70 rounded-2xl p-7 lg:p-8 transition-all duration-500 hover:bg-slate-900/70"
            >
              <div className="flex items-center justify-between mb-6">
                {/* number → dato estructural, no se traduce */}
                <span className="font-mono text-4xl font-bold text-white/8 select-none tabular-nums">
                  {pillar.number}
                </span>
                <span className="text-[10px] font-mono tracking-[0.28em] text-brand-blue/70 uppercase px-3 py-1 border border-brand-blue/20 rounded-full">
                  {pillar.tag}
                </span>
              </div>

              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3 leading-snug group-hover:text-white transition-colors duration-300">
                {pillar.title}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">
                {pillar.summary}
              </p>

              <div className="h-px w-full bg-gradient-to-r from-brand-blue/30 via-slate-700/40 to-transparent mb-6" />

              {/* Items — array anidado, ya lo conoces */}
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
                    <span className="mt-[7px] flex-shrink-0 w-1 h-1 rounded-full bg-brand-blue/60 group-hover/item:bg-brand-blue transition-colors duration-300" />
                    <span className="text-sm text-slate-400 leading-relaxed group-hover/item:text-slate-300 transition-colors duration-300">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Accent line — decorativa, sin texto */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-brand-blue/0 via-brand-blue/60 to-brand-blue/0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}