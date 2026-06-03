import React from "react";
import { motion } from "framer-motion";
import { Award, Download, ChevronRight, FileBadge } from "lucide-react";
import DiagonalButton from "../DiagonalButton";
import { useTranslation } from "react-i18next";

const CertificationsSection = () => {
const { t } = useTranslation("certifications");


  const certsMeta = [
    {
      title: "AS/EN 9100",

      pdfUrl: "/certificados/EN9100_2024.pdf",
      imgUrl: "/certificados/EN9100_cert.jpg",
      sealUrl: "/certificados/eqa9100.png",
    },
    {
      title: "ISO 9001",

      pdfUrl: "/certificados/ISO9001_2024.pdf",
      imgUrl: "/certificados/ISO9001_cert.jpg",
      sealUrl: "/certificados/eqa9001.png",
    },
  ];

  const certsTexts = t("certSection.certs", { returnObjects: true });
  const certifications = certsMeta.map((meta, i) => ({
    ...meta,
    ...certsTexts[i],
  }));


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mt-16 mx-auto px-6">
        {/* TITULOS */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm tracking-[0.3em] text-gray-500 font-medium uppercase">
              {t("certSection.eyebrow")}
            </span>
          </div>

          <h2 className="text-black text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extralight  tracking-tight leading-[1.1]">
            {t("certSection.title_1")}
            <br />
            <span className="font-semibold"> {t("certSection.title_2")} </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Columna Izquierda: Política de Calidad */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 bg-gray-50 py-4 px-4 lg:p-10 border border-gray-100 rounded-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center mb-4 text-brand-blue">
                <h4 className="ml-3 font-bold uppercase text-md md:text-xl tracking-widest text-black">
                  {t("certSection.policy.heading")}
                </h4>
              </div>
              <p className="text-gray-600  leading-relaxed italic">
              {t("certSection.policy.quote")}
              </p>
            </div>

            <a
              href="/sobre-quandum/calidad"
              className="mt-12 flex items-center text-sm font-bold text-brand-blue uppercase tracking-widest hover:translate-x-2 transition-all group"
            >
              {t("certSection.policy.cta")}{" "}
              <ChevronRight
                size={14}
                className="ml-2 group-hover:ml-4 transition-all"
              />
            </a>
          </motion.div>

          {/* Columna Derecha: Certificaciones */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 grid md:grid-cols-2 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-8 border border-gray-200 hover:border-brand-blue transition-all duration-500 rounded-sm flex flex-col bg-white overflow-hidden"
              >
                <FileBadge
                  className="absolute -right-6 -bottom-6 text-gray-50 group-hover:text-blue-50/50 transition-colors duration-500"
                  size={140}
                />

                <img
                  src={cert.sealUrl}
                  alt={`Sello ${cert.title}`}
                  className="absolute top-6 right-6 w-20 h-20 object-contain opacity-80 group-hover:opacity-90 transition-opacity duration-500 drop-shadow-sm"
                />

                <div className="relative z-10 flex-grow">
                  <div className="bg-gray-100 w-12 h-12 flex items-center justify-center rounded-sm mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-500">
                    <Award size={22} />
                  </div>
                  <h4 className="text-3xl font-bold text-black mb-1 pr-20">
                    {cert.title}
                  </h4>
                  <p className="text-brand-blue text-[11px] font-bold mb-4 uppercase tracking-[0.2em]">
                    {cert.subtitle}
                  </p>
                  <p className="text-gray-500 leading-relaxed mb-8">
                    {cert.description}
                  </p>
                </div>

                <div className="relative z-10 mt-auto">
                  <div className="pt-6 border-t border-gray-100 mb-6 text-[11px] text-gray-400 uppercase tracking-tighter">
                    {cert.standard}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={cert.imgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-6 py-3 hover:scale-105 rounded-md text-sm uppercase tracking-widest text-gray-300 bg-brand-blue clip-path-diagonal border border-gray-500  hover:font-semibold hover:text-white transition-all duration-300"
                    >
                      {t("certSection.buttons.view")}
                    </a>
                    <a
                      href={cert.pdfUrl}
                      download
                      className="flex items-center justify-center px-6 py-3 hover:scale-105 rounded-md text-sm uppercase tracking-widest text-gray-300 bg-brand-blue clip-path-diagonal border border-gray-500  hover:font-semibold hover:text-white transition-all duration-300"
                    >
                      <Download size={14} /> {t("certSection.buttons.download")}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default CertificationsSection;
