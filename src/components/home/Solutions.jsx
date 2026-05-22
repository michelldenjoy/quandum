import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import StarfielNebula from "../3d/StarfieldNebula";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Solutions() {

  const { t } = useTranslation("home");

  const [expandedIndex, setExpandedIndex] = useState(null);


  const services = [
    {
      number: "01",
      title: t("solutions.services.aeroespacial.title"),
      tag: t("solutions.services.aeroespacial.tag"),
      image: "/aeroespacial.webp",
      description: t("solutions.services.aeroespacial.description"),
      items: [
        {
          label: t("solutions.services.aeroespacial.items.aeronavegabilidad.label"),
          body: t("solutions.services.aeroespacial.items.aeronavegabilidad.body"),
        },
        {
          label: t("solutions.services.aeroespacial.items.computacion.label"),
          body: t("solutions.services.aeroespacial.items.computacion.body"),
        },
        {
          label: t("solutions.services.aeroespacial.items.mantenimiento.label"),
          body: t("solutions.services.aeroespacial.items.mantenimiento.body"),
        },
        {
          label: t("solutions.services.aeroespacial.items.ingenieria.label"),
          body: t("solutions.services.aeroespacial.items.ingenieria.body"),
        },
      ],
    },
    {
      number: "02",
      title: t("solutions.services.defensa.title"),
      tag: t("solutions.services.defensa.tag"),
      image: "/defensa.webp",
      description: t("solutions.services.defensa.description"),
      items: [
        {
          label: t("solutions.services.defensa.items.optronica.label"),
          body: t("solutions.services.defensa.items.optronica.body"),
        },
        {
          label: t("solutions.services.defensa.items.laser.label"),
          body: t("solutions.services.defensa.items.laser.body"),
        },
        {
          label: t("solutions.services.defensa.items.comunicaciones.label"),
          body: t("solutions.services.defensa.items.comunicaciones.body"),
        },
        {
          label: t("solutions.services.defensa.items.estandares.label"),
          body: t("solutions.services.defensa.items.estandares.body"),
        },
      ],
    },
    {
      number: "03",
      title: t("solutions.services.industrial.title"),
      tag: t("solutions.services.industrial.tag"),
      image: "/industrial.webp",
      description: t("solutions.services.industrial.description"),
      items: [
        {
          label: t("solutions.services.industrial.items.fabricacion.label"),
          body: t("solutions.services.industrial.items.fabricacion.body"),
        },
        {
          label: t("solutions.services.industrial.items.envolventes.label"),
          body: t("solutions.services.industrial.items.envolventes.body"),
        },
        {
          label: t("solutions.services.industrial.items.harness.label"),
          body: t("solutions.services.industrial.items.harness.body"),
        },
        {
          label: t("solutions.services.industrial.items.bancos.label"),
          body: t("solutions.services.industrial.items.bancos.body"),
        },
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const LINE_DURATION = 1.5;
  const TITLE_DELAY = 0.9;

  return (
    <section className="relative overflow-x-hidden">
      <StarfielNebula />
      <div className="relative max-w-7xl md:mt-10 mx-auto px-4 sm:px-6 flex flex-col items-center">
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: 160, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-px bg-gradient-to-b from-slate-800 via-slate-500 to-brand-blue"
          style={{ originY: 0 }}
        />

        <div className="relative flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute -top-2 w-12 h-12 bg-brand-blue/50 blur-xl rounded-full"
          />
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            className="w-2 h-2 bg-brand-blue rounded-full z-10 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 flex flex-col items-center"
          />
        </div>

        <div className="flex flex-col items-center">
          {/* 3️⃣ Textos sueltos: simplemente envuelves el texto con t("clave") */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: TITLE_DELAY, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(1.6rem,3.5vw,3.2rem)] mt-8 text-center font-light text-white tracking-[0.12em] leading-tight uppercase"
          >
            {t("solutions.heading_1")}
            <br />
            <span className="font-normal">{t("solutions.heading_2")}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: TITLE_DELAY + 0.3 }}
            className="max-w-2xl text-center text-sm text-slate-400 tracking-[0.15em] uppercase mt-10 mb-16 px-4 leading-relaxed"
          >
            {t("solutions.subtitle")}
          </motion.p>
        </div>
      </div>

      <div className="relative z-10">
        <div>

          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            const isOtherOpen = expandedIndex !== null && !isExpanded;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: TITLE_DELAY + 0.5 + index * 0.1 }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="relative w-full group overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/[0.025] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />

                  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex items-center gap-4 sm:gap-10">
                    <motion.div
                      animate={{ scaleY: isExpanded ? 1 : 0, opacity: isExpanded ? 1 : 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-blue-400/60 origin-top"
                    />

                    <span
                      className={`font-mono text-sm tracking-[0.25em] flex-shrink-0 w-5 sm:w-7 transition-colors duration-300 ${
                        isExpanded ? "text-blue-400/60" : "text-slate-700 group-hover:text-slate-500"
                      }`}
                    >
                      {service.number}
                    </span>

                    <span
                      className={`hidden lg:block text-sm tracking-[0.2em] font-mono uppercase flex-shrink-0 w-52 transition-colors duration-300 ${
                        isExpanded ? "text-blue-400/50" : "text-slate-700 group-hover:text-slate-500"
                      }`}
                    >
                      {service.tag}
                    </span>

                    <h3
                      className={`text-[clamp(1.2rem,3vw,3.5rem)] font-light tracking-[0.1em] transition-all duration-500 ${
                        isExpanded ? "text-white translate-x-4" : "text-slate-500 group-hover:text-slate-200"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`hidden xl:block text-sm text-slate-600 max-w-[14rem] text-right leading-relaxed transition-all duration-500 flex-shrink-0 ${
                        isExpanded ? "opacity-0" : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {service.description}
                    </p>

                    <motion.div
                      animate={{ rotate: isExpanded ? 45 : 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className={`ml-auto flex-shrink-0 w-7 h-7 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center transition-all duration-400 ${
                        isExpanded ? "border-white/30 bg-white/10" : "border-slate-600 group-hover:border-slate-600"
                      }`}
                    >
                      <svg
                        className={`w-3.5 h-3.5 transition-colors duration-300 ${
                          isExpanded ? "text-white" : "text-slate-300 group-hover:text-slate-300"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[540px]"
                      >
                        <div className="absolute inset-0 z-0">
                          <motion.img
                            src={service.image}
                            alt={service.title}
                            initial={{ scale: 1.06 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-slate-950/70" />
                          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 via-slate-900/10 to-slate-900/10" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-slate-900/10" />
                        </div>

                        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">
                            <motion.div
                              initial={{ opacity: 0, x: -24 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.15 }}
                              className="lg:col-span-4 lg:border-r lg:border-white/8 lg:pr-12 flex flex-col justify-between gap-10"
                            >
                              <div>
                                <span className="font-mono text-[5rem] sm:text-[7rem] font-extralight text-white/[0.07] leading-none block -ml-1 -mt-3 select-none">
                                  {service.number}
                                </span>
                                <div className="-mt-4 sm:-mt-6">
                                  <span className="text-xs tracking-[0.35em] text-blue-400/60 uppercase font-mono block mb-3">
                                    {service.tag}
                                  </span>
                                  <p className="text-base sm:text-2xl text-slate-200 font-light leading-relaxed">
                                    {service.description}
                                  </p>
                                </div>
                              </div>
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.25 }}
                              className="lg:col-span-8 lg:pl-12"
                            >
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                                {service.items.map((item, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.45, delay: 0.3 + idx * 0.08 }}
                                    className={`group/item relative p-5 sm:p-6 border-white/[0.09] ${
                                      idx % 2 === 0 ? "sm:border-r" : ""
                                    } ${idx < 2 ? "border-b" : ""}`}
                                  >
                                    <motion.div
                                      className="absolute top-0 left-0 right-0 h-px bg-blue-400/40 origin-left"
                                      initial={{ scaleX: 0 }}
                                      whileHover={{ scaleX: 1 }}
                                      transition={{ duration: 0.35 }}
                                    />
                                    <span className="font-mono text-[0.5rem] text-slate-500 tracking-[0.15em] block mb-3">
                                      {String(idx + 1).padStart(2, "0")}
                                    </span>
                                    <h4 className="text-xs sm:text-sm font-bold text-blue-400/90 tracking-[0.08em] uppercase mb-2 transition-colors duration-300">
                                      {item.label}
                                    </h4>
                                    <p className="text-lg text-white leading-relaxed transition-colors duration-300">
                                      {item.body}
                                    </p>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          </div>
                        </div>

                        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-400/60 via-blue-400/20 to-transparent" />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="h-px bg-slate-800/60" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* PIE DE SECCIÓN */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-8 flex items-center justify-between">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left" }}
          className="h-px w-12 sm:w-24 bg-gradient-to-r from-white/10 to-transparent"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[0.55rem] tracking-[0.35em] text-slate-700 uppercase font-mono"
        >
          {t("solutions.footer")}
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "right" }}
          className="h-px w-12 sm:w-24 bg-gradient-to-l from-white/10 to-transparent"
        />
      </div>
    </section>
  );
}