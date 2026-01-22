import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/images/instalaciones.jpg",
    label: "Area de simulación y pruebas",
    specs: "Certificación ISO 9001:2015  "
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
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Grid técnico de fondo */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header con diseño técnico */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-start gap-8">
            {/* Línea vertical decorativa */}
            {/* <div className="hidden md:flex flex-col items-center gap-2 pt-2">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-black to-transparent" />
              <div className="w-1.5 h-1.5 bg-black rotate-45" />
            </div> */}

            <div className="flex-1">
              {/*TITULO PRINCIPAL*/}
              <div className="flex items-center gap-4 mb-6">
                {/* <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black" />
                  <div className="w-1 h-1 bg-gray-400" />
                  <div className="w-1 h-1 bg-gray-300" />
                </div> */}
                <span className="text-sm tracking-[0.3em] text-gray-500 font-medium uppercase">
                  Nuestro entorno
                </span>
              </div>
              
              {/* TITULO PRINCIPAL */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-black tracking-tight leading-[1.1]">
                Técnico 
                <br />
                <span className="font-semibold">& Operativo </span>
              </h2>
              <p className="text-gray-600 mt-6 text-base md:text-lg leading-relaxed max-w-4xl">
                4.000 m² de infraestructura especializada para el desarrollo, fabricación 
                y validación de sistemas aeroespaciales bajo normativas internacionales.
              </p>
            </div>
            
          </div>
        </motion.div>

        {/* Contenedor principal  */}
        <div className="relative">
         
          <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-black" />
          <div className="absolute -top-3 -right-3 w-6 h-6 border-r-2 border-t-2 border-black" />
          <div className="absolute -bottom-3 -left-3 w-6 h-6 border-l-2 border-b-2 border-black" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-black" />

          {/* Slider */}
          <div className="relative h-[320px] md:h-[500px] lg:h-[740px] bg-gray-100 overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            
            {/* Líneas */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Panel de info inferior */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                {/* Info de la imagen */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] tracking-[0.3em] text-white/50 font-mono">
                      IMG {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px w-8 bg-white/20" />
                    <span className="text-[10px] tracking-[0.3em] text-white/50 font-mono">
                      {images.length} TOTAL
                    </span>
                  </div>
                  
                  <h3 className="text-white text-lg md:text-xl font-light mb-1 tracking-wide">
                    {images[index].label}
                  </h3>
                  
                  <p className="text-white/60 text-xs md:text-sm font-light">
                    {images[index].specs}
                  </p>
                </div>

                {/* Controles */}
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
            </div>
          </div>

          {/* Indicadores*/}
          <div className="mt-8 flex items-center justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir a imagen ${i + 1}`}
                className="group relative"
              >
                <div className={`h-px transition-all duration-500 ${
                  i === index
                    ? "w-16 bg-black"
                    : "w-12 bg-gray-300 group-hover:bg-gray-400"
                }`} />
                {i === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -top-0.5 left-0 w-1 h-1 bg-black rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Contador numérico */}
          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 bg-white/50">
              <div className="w-1.5 h-1.5 bg-black rotate-45" />
              <span className="text-xs font-mono text-gray-400">
                SECTOR
              </span>
              <span className="text-sm font-mono text-black font-semibold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xs text-gray-300">/</span>
              <span className="text-xs font-mono text-gray-400">
                {String(images.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}