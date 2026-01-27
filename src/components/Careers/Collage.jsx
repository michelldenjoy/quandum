import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 segundos
  
    return () => clearInterval(interval); // cleanup
  }, []);
  

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
          {/* Izquierdo  */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1"
          >
          
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight leading-[1.05]"
              >
                <span className="block text-black">TALENTO PARA </span>
                <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-brand-blue via-slate-800 to-brand-blue bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  MISIONES REALES
                </span>
              </motion.h2>
            </div>

            
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="space-y-3 sm:space-y-4 md:space-y-5 text-sm sm:text-base lg:text-lg xl:text-xl text-justify text-gray-600 leading-relaxed"
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

            {/* Info adicional de la imagen */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="mt-8 space-y-4"
            >
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-black rotate-45 mt-2" />
                <div>
                  <h4 className="text-sm font-semibold text-black mb-1">
                    {images[index].alt}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {images[index].category}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Controles en mobile */}
            <div className="mt-10 lg:hidden">
              <div className="flex items-center gap-3 mb-4">
                <button
                  onClick={prev}
                  aria-label="Anterior"
                  className="group w-11 h-11 flex items-center justify-center border border-black/20 text-black hover:border-black hover:bg-black/5 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                </button>
                
                <div className="flex-1 flex items-center justify-center gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      aria-label={`Ir a imagen ${i + 1}`}
                      className="group relative"
                    >
                      <div className={`h-px transition-all duration-500 ${
                        i === index
                          ? "w-12 bg-black"
                          : "w-8 bg-gray-300 group-hover:bg-gray-400"
                      }`} />
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={next}
                  aria-label="Siguiente"
                  className="group w-11 h-11 flex items-center justify-center border border-black/20 text-black hover:border-black hover:bg-black/5 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
              
            </div>
          </motion.div>

          {/* Derecho - order Slider */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-2 relative"
          >
            {/* Slider */}
            <div className="relative  w-full aspect-[16/10] overflow-hidden bg-gray-100 shadow-2xl">
              {/* Imagen */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={images[index].src}
                  alt={images[index].alt}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className="absolute inset-0 w-full h-full "
                />
              </AnimatePresence>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
              
              {/* Líneas decorativas */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              {/* Controles en desktop */}
              <div className="hidden lg:block absolute bottom-6 left-6 right-6">
                <div className="flex items-end justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] tracking-[0.3em] text-white/50 font-mono">
                        IMG {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={prev}
                      aria-label="Anterior"
                      className="group w-11 h-11 flex items-center justify-center border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                    >
                      <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                    </button>
                    
                    <button
                      onClick={next}
                      aria-label="Siguiente"
                      className="group w-11 h-11 flex items-center justify-center border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                    >
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      aria-label={`Ir a imagen ${i + 1}`}
                      className="group relative"
                    >
                      <div className={`h-px transition-all duration-500 ${
                        i === index
                          ? "w-12 bg-white"
                          : "w-8 bg-white/30 group-hover:bg-white/50"
                      }`} />
                      {i === index && (
                        <motion.div
                          layoutId="activeIndicatorCollage"
                          className="absolute -top-0.5 left-0 w-1 h-1 bg-white rounded-full"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </button>
                  ))}
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