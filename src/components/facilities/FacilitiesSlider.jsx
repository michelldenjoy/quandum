import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const images = [
  {
    src: "/images/instala.webp",
    label: "Simulación y Pruebas",
    specs: "Certificación ISO 9001:2015",
    code: "FAC-01",
    category: "TESTING",
  },
  {
    src: "/images/instalation.webp",
    label: "Áreas de Producción",
    specs: "Superficie total: 4.000 m²",
    code: "FAC-02",
    category: "PRODUCTION",
  },
  {
    src: "/images/instalation5.webp",
    label: "Laboratorios Técnicos",
    specs: "Entorno controlado clase 100K",
    code: "FAC-03",
    category: "LABORATORY",
  },
  {
    src: "/images/instalation2.webp",
    label: "Infraestructura Industrial",
    specs: "Sistemas integrados de gestión",
    code: "FAC-04",
    category: "INDUSTRIAL",
  },
  {
    src: "/images/instalation3.webp",
    label: "Fabricación Aditiva",
    specs: "Prototipado y producción avanzada",
    code: "FAC-05",
    category: "ADDITIVE MFG",
  },
];

function CounterDisplay({ value, total }) {
  return (
    <div className="flex items-baseline gap-1 font-mono">
      <motion.span
        key={value}
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -12, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="text-4xl font-light text-white tabular-nums"
        style={{ fontFamily: "'DM Mono', 'Courier New', monospace" }}
      >
        {String(value).padStart(2, "0")}
      </motion.span>
      <span className="text-sm text-white/60 font-light">
        /{String(total).padStart(2, "0")}
      </span>
    </div>
  );
}

export default function FacilitiesSlider() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const DURATION = 5000;

  // Auto-avance simple
  useEffect(() => {
    const startTime = Date.now();
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(elapsed / DURATION, 1);
      setProgress(pct);
      
      if (pct >= 1) {
        setIndex((prev) => (prev + 1) % images.length);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [index]);

  const goTo = (i) => {
    setIndex(i);
  };

  const current = images[index];

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37,99,235,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Main layout */}
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-14 items-stretch">
          {/* columna izqu */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-between"
          >
            {/* TITULO */}
            <div>
              <h2
                className="leading-[1.0] tracking-tight text-gray-900"
                style={{
                  fontFamily: "'DM Serif Display', 'Georgia', serif",
                  fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
                  fontWeight: 400,
                }}
              >
                Entorno
                <br />
                <em style={{ fontStyle: "italic", color: "#516288" }}>
                  Técnico
                </em>
                <br />
                <span
                  style={{
                    fontWeight: 700,
                    fontFamily: "'DM Serif Display', serif",
                  }}
                >
                  & Operativo
                </span>
              </h2>

              <div className="mt-6 w-16 h-px bg-gradient-to-r from-blue-600 to-transparent" />

              <p
                className="mt-6 text-gray-600 leading-relaxed text-sm md:text-base"
                style={{
                  fontFamily: "'DM Sans', 'Helvetica', sans-serif",
                  maxWidth: "34ch",
                }}
              >
                4.000 m² de infraestructura especializada para el desarrollo,
                fabricación y validación de sistemas aeroespaciales bajo
                normativas internacionales.
              </p>
            </div>

            {/* Active spec card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="mt-10 lg:mt-0"
              >
                <div className="border border-gray-200 p-5 md:mt-4 relative bg-gray-50">
                  {/* esquinas */}
                  <div className="absolute top-0 left-0 w-6 h-6">
                    <div className="absolute top-0 left-0 w-full h-px bg-blue-600" />
                    <div className="absolute top-0 left-0 h-full w-px bg-blue-600" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-6 h-6">
                    <div className="absolute bottom-0 right-0 w-full h-px bg-blue-600" />
                    <div className="absolute bottom-0 right-0 h-full w-px bg-blue-600" />
                  </div>

                  <div className="text-[10px] tracking-[0.4em] text-brand-blue mb-3 font-mono uppercase">
                    {current.code} — {current.category}
                  </div>
                  <div
                    className="text-gray-900 font-medium text-base"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {current.label}
                  </div>
                  <div
                    className="text-gray-600 text-sm mt-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {current.specs}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* SLIDER */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] lg:aspect-[16/11] overflow-hidden">
              {/* IMG */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={images[index].src}
                  alt={images[index].label}
                  variants={{
                    enter: {
                      opacity: 0,
                      scale: 1.04,
                      x: 20,
                    },
                    center: { opacity: 1, scale: 1, x: 0 },
                    exit: {
                      opacity: 0,
                      scale: 0.97,
                      x: -20,
                    },
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* overlay de slider */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />

              {/* badge de la esquina */}
              <div
                className="absolute top-4 right-4 border border-white/15 px-3 py-1.5 backdrop-blur-sm"
                style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[10px] tracking-[0.4em] text-white/60 font-mono uppercase"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {current.category}
                  </motion.span>
                </AnimatePresence>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-end justify-between">
                  {/* contador de slider*/}
                  <div className="relative overflow-hidden h-12 flex items-end">
                    <AnimatePresence mode="wait">
                      <CounterDisplay
                        key={index}
                        value={index + 1}
                        total={images.length}
                      />
                    </AnimatePresence>
                  </div>
                </div>

                {/* barra de progreso */}
                <div className="mt-3 h-px bg-white/10 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-brand-blue"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>
              </div>

              {/* esquinas */}
              <div className="absolute inset-3 pointer-events-none">
                <div className="absolute top-0 left-0 w-8 h-8">
                  <div className="absolute top-0 left-0 w-full h-px bg-brand-blue/80" />
                  <div className="absolute top-0 left-0 h-full w-px bg-brand-blue/80" />
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8">
                  <div className="absolute bottom-0 right-0 w-full h-px bg-brand-blue/80" />
                  <div className="absolute bottom-0 right-0 h-full w-px bg-brand-blue/80" />
                </div>
              </div>
            </div>

            {/* linea externa con FAC */}
            <div className="mt-3 hidden lg:flex items-center gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="flex-1 group relative h-8 flex flex-col justify-end gap-1"
                >
                  <div
                    className="text-[9px] font-mono tracking-widest transition-all duration-300 text-left"
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      color: i === index ? "#2563EB" : "rgba(0,0,0,0.3)",
                    }}
                  >
                    {img.code}
                  </div>
                  <div className="h-px w-full bg-gray-200 relative overflow-hidden">
                    {i === index && (
                      <motion.div
                        layoutId="tabIndicator"
                        className="absolute inset-y-0 left-0 right-0 bg-blue-600"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 40,
                        }}
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}