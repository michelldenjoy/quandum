import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/images/instalaciones.jpeg",
    label: "Area de simulación y pruebas",
    specs: "Certificación ISO 9001:2015"
  },
  {
    src: "/images/instalation.jpg",
    label: "Áreas de producción",
    specs: "Superficie total: 4.000 m²"
  },
  {
    src: "/images/instalations.jpg",
    label: "Zonas técnicas y laboratorios",
    specs: "Entorno controlado clase 100K"
  },
  {
    src: "/images/instalation2.jpg",
    label: "Infraestructura industrial",
    specs: "Sistemas integrados de gestión"
  },
  {
    src: "/images/instalation3.jpg",
    label: "Fabricacion Aditiva",
    specs: "Impresión 3D para prototipado y producción avanzada"
  },
];

export default function FacilitiesSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative py-20  bg-white overflow-hidden">
      {/* Grid técnico de fondo */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Contenedor principal con grid */}
        <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Columna izquierda - Texto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm tracking-[0.3em] text-gray-500 font-medium uppercase">
                Nuestro entorno
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-black tracking-tight leading-[1.1]">
              Técnico 
              <br />
              <span className="font-semibold">& Operativo</span>
            </h2>
            
            <p className="text-gray-600 mt-6 text-base md:text-lg leading-relaxed">
              4.000 m² de infraestructura especializada para el desarrollo, fabricación 
              y validación de sistemas aeroespaciales bajo normativas internacionales.
            </p>

           
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-black rotate-45 mt-2" />
                <div>
                  <h4 className="text-sm font-semibold text-black mb-1">
                    {images[index].label}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {images[index].specs}
                  </p>
                </div>
              </div>
            </div>

            {/* Controles e indicadores en mobile */}
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

          {/* Columna derecha - Slider */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Slider */}
            <div className="relative  w-full aspect-[16/10] overflow-hidden bg-gray-100 shadow-2xl">
              {/* Imagen */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={images[index].src}
                  alt={images[index].label}
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
                          layoutId="activeIndicator"
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
    </section>
  );
}