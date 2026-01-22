import React, { useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/images/about-1.jpeg",
    alt: "Equipo en operación",
    category: "Operations"
  },
  {
    src: "/images/collage2.jpg",
    alt: "Equipo de ingeniería",
    category: "Engineering"
  },
  {
    src: "/images/instalaciones.jpeg",
    alt: "Instalaciones técnicas",
    category: "Facilities"
  },
  {
    src: "/images/case-2.jpg",
    alt: "Laboratorio de desarrollo",
    category: "R&D"
  },
  {
    src: "/images/instalation.jpg",
    alt: "Área de producción",
    category: "Manufacturing"
  },
];

export default function Collage() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section
      ref={ref}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden"
    >
      {/* Fondo */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Glow */}
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* ContenidoIzquierdo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1"
          >
            {/* Título */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black tracking-tight leading-[1.05]"
              >
                <span className="block text-black">TALENTO TÉCNICO PARA </span>
                <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-brand-blue via-slate-800 to-brand-blue bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  MISIONES REALES
                </span>
              </motion.h2>
            </div>

            {/* Descripción */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="space-y-3 sm:space-y-4 md:space-y-5 text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed"
            >
              <p>
                Creemos que la ingeniería es una disciplina que combina rigor
                técnico, responsabilidad y vocación. Cada sistema que diseñamos
                tiene un impacto en entornos que demandan fiabilidad. Trabajamos con tecnologías avanzadas, procesos
                auditables y normativas internacionales exigentes. Nuestro
                compromiso no es solo con la innovación, sino con la seguridad,
                la trazabilidad y la calidad a largo plazo.
              </p>
            </motion.div>
          </motion.div>

          {/* Slider - Derecha */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-1 lg:order-2 w-full"
          >
            <div className="relative w-full">
              {/* Marcos */}
              <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-t-2 border-black/20 z-10" />
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-t-2 border-black/20 z-10" />
              <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-b-2 border-black/20 z-10" />
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-b-2 border-black/20 z-10" />

              {/* Contenedor del slider - Aspect ratio 16:10 (similar a 5500:3500) */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100 shadow-2xl">
               
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
                    className="absolute inset-0 group"
                  >
                    <img
                      src={images[index].src}
                      alt={images[index].alt}
                      className="w-full h-full "
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Esquinas */}
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </motion.div>
                </AnimatePresence>

                {/* Líneas decorativas */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

                {/* Panel de info inferior */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 lg:p-8 z-20">
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4">
                    {/* Info de la imagen */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                        <span className="text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-white/50 font-mono">
                          IMG {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="h-px w-6 sm:w-8 bg-white/20" />
                        <span className="text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] text-white/40 uppercase">
                          {images[index].category}
                        </span>
                      </div>
                      
                      <h3 className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-light tracking-wide">
                        {images[index].alt}
                      </h3>
                    </div>

                    {/* Controles */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      <button
                        onClick={prev}
                        aria-label="Anterior"
                        className="group w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                      >
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-0.5 transition-transform" />
                      </button>
                      
                      <button
                        onClick={next}
                        aria-label="Siguiente"
                        className="group w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                      >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Indicadores */}
              <div className="mt-4 sm:mt-6 flex items-center justify-center gap-1.5 sm:gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Ir a imagen ${i + 1}`}
                    className="group relative"
                  >
                    <div className={`h-px transition-all duration-500 ${
                      i === index
                        ? "w-12 sm:w-16 bg-black"
                        : "w-8 sm:w-12 bg-gray-300 group-hover:bg-gray-400"
                    }`} />
                    {i === index && (
                      <motion.div
                        layoutId="activeIndicatorCollage"
                        className="absolute -top-0.5 left-0 w-1 h-1 bg-black rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Contador */}
              <div className="mt-4 sm:mt-6 flex justify-center">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-200 bg-white/80 backdrop-blur-sm">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-black rotate-45" />
                  <span className="text-[10px] sm:text-xs font-mono text-gray-400">
                    VIEW
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-black font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-300">/</span>
                  <span className="text-[10px] sm:text-xs font-mono text-gray-400">
                    {String(images.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
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