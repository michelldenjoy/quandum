import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export default function VisionMision() {
  const { t } = useTranslation("about");

  return (
    <section className="relative py-20 bg-gradient-to-b from-black/10 via-slate-900/70 to-black/10">
      <div className="max-w-7xl my-4 mx-auto px-6 sm:px-10 md:px-16 lg:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* VISIÓN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex-1">

              <h3 className="text-3xl md:text-5xl lg:text-4xl font-extralight text-white tracking-tight leading-[1.1]">
                {t("visionMision.vision.label")}
                <br />
                <span className="font-normal text-4xl md:text-5xl lg:text-5xl bg-gradient-to-r from-brand-blue via-slate-200 to-brand-blue bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  {t("visionMision.vision.title")}
                </span>
              </h3>
            </div>

            <p className="text-slate-100 text-base text-justify leading-relaxed">
              {t("visionMision.vision.p1")}
              <br />
              <br />
              {t("visionMision.vision.p2")}
            </p>
          </motion.div>

          {/* MISIÓN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-5xl lg:text-4xl font-extralight text-white tracking-tight leading-[1.1]">
              {t("visionMision.mision.label")}
              <br />
              <span className="font-normal text-4xl md:text-5xl lg:text-5xl bg-gradient-to-r from-brand-blue via-slate-200 to-brand-blue bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                {t("visionMision.mision.title")}
              </span>
            </h3>

            <p className="text-slate-100 text-base text-justify leading-relaxed">
              {t("visionMision.mision.p1")}
              <br />
              <br />
              {t("visionMision.mision.p2")}
            </p>
          </motion.div>

        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </section>
  );
}