import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export default function IntroProducts() {
  const { t } = useTranslation("products");

  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-start">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl uppercase sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-normal tracking-tight text-black mt-6"
            >
              {t("introh3")} <br />
              <span className="bg-gradient-to-r from-brand-blue via-slate-800 to-brand-blue bg-clip-text text-transparent font-black animate-gradient bg-[length:200%_auto]">
                {t("introh3span")}
              </span>
            </motion.h3>
            {/*LINEA DECORATIVA*/}
            {/* <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "80%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="h-0.5 bg-gradient-to-r from-transparent via-brand-blue to-transparent rounded-full"
            /> */}
          </div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-slate-900 text-base md:text-xl text-justify mt-6 leading-relaxed"
          >
            {t("introp1")}
            <br />
            <br />
            {t("introp2")}
          </motion.p>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </section>
  );
}
