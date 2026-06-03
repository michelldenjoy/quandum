import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { products } from "../products/products";
import Image from "../home/Image";

const Projection = () => {
  const { t } = useTranslation("products");

  const [hoveredId, setHoveredId] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      rotateY: 5,
      boxShadow: "0 0 20px rgba(0, 148, 255, 0.5)",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black/20 via-slate-900 to-black/20 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-start gap-8 mb-12"
        >
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm tracking-[0.3em] text-slate-300 font-medium uppercase">
                {t("projection.experience")}
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extralight text-white tracking-tight leading-[1.1] font-montserrat">
              {t("projection.our")}
              <br />
              <span className="font-semibold">
                {t("projection.projects")}
              </span>
            </h2>

            <p className="text-gray-400 mt-8 mb-20 text-base md:text-lg leading-relaxed max-w-4xl">
              {t("projection.description")}
            </p>
          </div>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/proyectos/destacados/${product.id}`}
                className="group relative block bg-gray-900 overflow-hidden rounded-lg border border-blue-500/20 transition-all duration-300 hover:border-sky-950"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* IMAGE */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={product.image}
                    alt={t(`${product.translationKey}.title`)}
                    className={`w-full h-full transition-all object-cover duration-700 ${
                      hoveredId === product.id
                        ? "scale-110 brightness-60"
                        : "scale-100 brightness-80"
                    }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl uppercase font-bold italic text-white mb-4 font-montserrat">
                      {t(`${product.translationKey}.title`)}
                    </h3>
                  </div>
                </div>

                {/* OVERLAY */}
                <motion.div
                  className="absolute inset-0 bg-black/90 backdrop-blur-md"
                  initial={{ y: "100%" }}
                  animate={{
                    y: hoveredId === product.id ? 0 : "100%",
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                >
                  <div className="h-full flex flex-col justify-between p-8 text-white">
                    
                    {/* TOP */}
                    <div>
                      <div className="mb-3">
                        <span className="text-sm font-semibold text-blue-400/90 tracking-wider uppercase">
                          {t(`${product.translationKey}.subtitle`)}
                        </span>
                      </div>

                      <h3 className="text-3xl font-bold mb-6 font-montserrat">
                        {t(`${product.translationKey}.title`)}
                      </h3>

                      <p className="text-blue-100 leading-relaxed line-clamp-6">
                        {t(`${product.translationKey}.description`)}
                      </p>
                    </div>

                    {/* BOTTOM */}
                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.certifications.map((cert, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-brand-blue text-white text-xs font-medium rounded"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center font-semibold">
                        <span className="mr-2">
                          {t("projection.viewMore")}
                        </span>

                        <svg
                          className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <Image />
      </div>
    </div>
  );
};

export default Projection;