import { motion } from "motion/react";
import HeroVideo from "../../components/about/HeroVideo";
import FacilitiesSlider from "../../components/facilities/FacilitiesSlider";
import Capabilities from "../../components/facilities/Capabilities";
import PolicyWhite from "../../components/etico/PolicyWhite";
import { useTranslation } from "react-i18next";





export default function Infraestructuras() {
const { t } = useTranslation("about");


const facilities = [
  {
    title: t("facilitiespage.title1"),
    subtitle: t("facilitiespage.subtitle1"),
    description: t("facilitiespage.description1"),
    image: "/images/about6.webp",
    bg: "bg-aerospacee",
    textColor: "text-white",
  },
  {
    title: t("facilitiespage.title2"),
    subtitle: t("facilitiespage.subtitle2"),
    description: t("facilitiespage.description2"),
    image: "/images/about5.webp",
    bg: "bg-white",
    textColor: "text-black",
  },
  {
    title: t("facilitiespage.title3"),
    subtitle: t("facilitiespage.subtitle3"),
    description: t("facilitiespage.description3"),
    image: "/images/about4.webp",
    bg: "bg-aerospacee",
    textColor: "text-white",
  },
];

  return (
    <div>
      {/* Imagen de fondo */}
      <HeroVideo
        eyebrow={t("herofacilities.eyebrow")}
        title={t("herofacilities.title")}
        description={t("herofacilities.description")}
        backgroundImage="/images/about3.webp"
      />
      <FacilitiesSlider />
     

      {facilities.map((f, i) => (
        <section
          key={i}
          className={`
            ${f.bg}
            relative overflow-hidden
            py-8 sm:py-12 md:py-16 lg:py-20
            px-4 sm:px-6 md:px-8
          `}
        >
          {/* Fondo para secciones oscuras */}

          <div className="max-w-7xl mx-auto">
            <div
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-6 md:gap-8 lg:gap-12`}
            >
              {/* IMAGEN */}
              <motion.div
                className="w-full md:w-3/5 lg:w-2/3"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </motion.div>

              {/* TEXTO  */}
              <motion.div
                className={`w-full md:w-2/5 lg:w-1/3 flex flex-col justify-center space-y-3 md:space-y-4 ${f.textColor}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  {f.title}
                </h2>
                <h3 className="text-base sm:text-lg md:text-xl font-medium ">
                  {f.subtitle}
                </h3>
                <p className="text-sm sm:text-base md:text-md lg:text-xl text-justify leading-relaxed opacity-80">
                  {f.description}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
 
       
      <Capabilities />
      <PolicyWhite />
    </div>
  );
}
