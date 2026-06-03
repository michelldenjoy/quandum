import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function ODSSection() {
  const { t } = useTranslation("sustainability");

  function LineReveal({ delay = 0 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    return (
      <motion.div
        ref={ref}
        className="h-px bg-black origin-left flex-1"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    );
  }

  // id, icon, image, color → iguales en todos los idiomas
  const odsMeta = [
    { id: 7,  icon: "/ods/ods07.png", image: "/ods-bg/energy.jpg",      color: "#FCC30B" },
    { id: 8,  icon: "/ods/ods08.png", image: "/ods-bg/work.jpg",         color: "#A21942" },
    { id: 9,  icon: "/ods/ods09.png", image: "/ods-bg/industry.webp",    color: "#FD6925" },
    { id: 12, icon: "/ods/ods12.png", image: "/ods-bg/production.webp",  color: "#BF8B2E" },
    { id: 13, icon: "/ods/ods13.png", image: "/ods-bg/climate.jpg",      color: "#3F7E44" },
    { id: 17, icon: "/ods/ods17.png", image: "/ods-bg/alliances.jpg",    color: "#19486A" },
  ];

  const odsTexts = t("ods.items", { returnObjects: true });

  const ods = odsMeta.map((meta, i) => ({
    ...meta,
    ...odsTexts[i],
  }));

  return (
    <section className="w-full bg-white py-32 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-xs tracking-[0.4em] font-bold uppercase text-gray-400">
              {t("ods.eyebrow")}
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extralight tracking-tight leading-[1.1] text-black">
                {t("ods.title_1")}
                <br />
                <span className="font-semibold text-black">
                  {t("ods.title_2")}
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg text-gray-500 max-w-md leading-relaxed md:text-right">
                {t("ods.subtitle")}
              </p>
            </motion.div>
          </div>

          <LineReveal delay={0.1} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {ods.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              className="group relative h-[300px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 cursor-pointer"
            >
              <div className="absolute inset-0" style={{ backgroundColor: item.color }} />

              <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
                <img
                  src={item.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="relative z-10 h-full flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={`ODS ${item.id}`}
                    className="w-40 h-40 drop-shadow-2xl translate-y-0 group-hover:-translate-y-4 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center px-10 bg-black/20 backdrop-blur-[2px]">
                <span className="text-white text-xs font-bold tracking-[0.3em] mb-4 opacity-80 uppercase">
                  ODS {item.id}
                </span>
                <h3 className="text-white text-2xl font-bold leading-tight mb-4 text-center">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed text-center font-medium">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 pt-10 border-t border-slate-50 flex justify-center"
        >
          <p className="text-[10px] text-slate-400 tracking-[0.2em] uppercase font-mono">
            {t("ods.footer")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}