import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Intro2() {
  const { t } = useTranslation("about");


  const specs = [
    { label: t("intro.specs.founded"),    value: "2006" },
    { label: t("intro.specs.standards"),  value: "DO-178C / DO-254" },
    { label: t("intro.specs.quality"),    value: "EN 9100 / ISO 9001" },
    { label: t("intro.specs.compliance"), value: "REACH / RoHS" },
  ];

  return (
    <section className="relative bg-white py-24 lg:py-14 overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_100%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="relative border border-gray-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.02)] px-8 py-16 md:px-20 md:py-20">
          {/* Esquinas dec */}
          {["tl", "tr", "bl", "br"].map((pos) => (
            <div
              key={pos}
              className={`absolute w-4 h-4 border-gray-300 ${
                pos.includes("t") ? "top-4" : "bottom-4"
              } ${pos.includes("l") ? "left-4" : "right-4"} ${
                pos === "tl" ? "border-t border-l"
                : pos === "tr" ? "border-t border-r"
                : pos === "bl" ? "border-b border-l"
                : "border-b border-r"
              }`}
            />
          ))}

          <div className="relative z-10">
            {/* Logo y Título — nombre de marca, no se traduce */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-row items-center justify-center gap-3 md:gap-2 mb-8"
              >
                <img
                  src="/lienzo.png"
                  alt="Quandum Aerospace"
                  className="h-10 sm:h-12 md:h-14 transition-all duration-500"
                />
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight whitespace-nowrap">
                  <span className="font-semibold text-brand-blue">Quandum</span>{" "}
                  <span className="font-semibold bg-gradient-to-r from-brand-pink via-red-500 to-red-700 bg-clip-text text-transparent">
                    Aerospace
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                viewport={{ once: true }}
                className="h-1 bg-brand-blue mx-auto"
              />
            </div>

            {/* Texto Principal */}
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="grid md:grid-cols-12 gap-10 items-start"
              >
                <div className="md:col-span-11">
                  <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-justify font-light">
                    {t("intro.p1_before")}{" "}
                    <span className="text-black font-semibold">
                      {t("intro.p1_highlight")}
                    </span>{" "}
                    {t("intro.p1_middle")}{" "}
                    <span className="text-brand-blue font-semibold uppercase tracking-wider text-sm">
                      {t("intro.p1_sector")}
                    </span>
                    .
                  </p>
                </div>

                <div className="md:col-span-11">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">
                    {t("intro.p2_before")}{" "}
                    <span className="text-black font-medium uppercase">
                      DO-178C
                    </span>{" "}
                    {t("intro.p2_and")}{" "}
                    <span className="text-black font-medium uppercase">
                      DO-254
                    </span>
                    , {t("intro.p2_after")}{" "}
                    <a
                    
                      href="/sobre-quandum/certificaciones"
                      className="border-b border-brand-blue text-black"
                    >
                      {t("intro.p2_certLink")}
                    </a>
                    .
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Especificaciones Técnicas */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap justify-center gap-x-12 gap-y-4"
            >
              {/* 4️⃣ El .map() no cambia — spec.label ya viene traducido del array de arriba */}
              {specs.map((spec, i) => (
                <div key={i} className="flex flex-col items-center md:items-start">
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-400">
                    {spec.label}
                  </span>
                  <span className="text-xs font-bold text-black tracking-widest">
                    {spec.value}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}