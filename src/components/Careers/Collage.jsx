import React, { useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";
import DiagonalButton from "../DiagonalButton";

const images = [
  {
    src: "/images/about-1.jpeg",
    alt: "Equipo en operación",
    category: "Operations",
    aspectRatio: "aspect-[3656/2313]",
    specs: "Mission Control",
    code: "OPS-001",
  },
  {
    src: "/images/collage2.jpg",
    alt: "Equipo de ingeniería",
    category: "Engineering",
    aspectRatio: "aspect-[5740/3827]",
    specs: "R&D Department",
    code: "ENG-002",
  },
];

const techSpecs = [
  { label: "Proyectos activos", value: "47+", unit: "MISIONES" },
  { label: "Normativas cumplidas", value: "100%", unit: "CERT" },
  { label: "Experiencia", value: "20", unit: "AÑOS" },
];

export default function Collage() {
  const ref = React.useRef(null);
  const containerRef = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeImage, setActiveImage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(0,0,0,0.015)_1.5px,transparent_1.5px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:8px_8px]" />

        {/* Coordinate markers */}
        <div className="absolute top-10 left-10 text-[10px] font-mono text-gray-300 tracking-wider">
          COORD: 40.4168°N, 3.7038°W
        </div>
        <div className="absolute bottom-10 right-10 text-[10px] font-mono text-gray-300 tracking-wider">
          GRID: AEROSPACE.SYS.2026
        </div>

        {/* Gradient accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-900/5 rounded-full blur-3xl" />
      </div>

      <div
        ref={ref}
        className="relative w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-brand-blue" />
            <span className="text-[11px] font-mono tracking-[0.3em] text-gray-400 uppercase">
              Careers / Join Our Team
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">
          {/* Izquierdo */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-8 sm:space-y-10 md:space-y-12">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[0.95] mb-6">
                <span className="block text-black">TALENTO</span>
                <span className="block text-black">PARA</span>
                <span className="block mt-2 bg-gradient-to-r from-brand-blue via-gray-800 to-brand-blue bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-slow">
                  MISIONES
                </span>
                <span className="block bg-gradient-to-r from-brand-blue via-gray-800 to-brand-blue bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-slow">
                  REALES
                </span>
              </h2>

              {/* Technical label */}
              {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black text-white text-[10px] font-mono tracking-wider">
                <div className="w-1.5 h-1.5 bg-brand-blue animate-pulse" />
                AEROSPACE ENGINEERING DIVISION
              </div> */}
            </motion.div>

            {/* Body Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed font-light">
                Creemos que la ingeniería es una disciplina que combina{" "}
                <span className="text-black font-medium">rigor técnico</span>,{" "}
                <span className="text-black font-medium">responsabilidad</span>{" "}
                y <span className="text-black font-medium">vocación</span>.
              </p>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Cada sistema que diseñamos tiene un impacto en entornos que
                demandan fiabilidad absoluta. Trabajamos con tecnologías
                avanzadas, procesos auditables y normativas internacionales
                exigentes.
              </p>

              <div className="pt-4 border-l-2 border-brand-blue pl-6">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed italic">
                  "Nuestro compromiso no es solo con la innovación, sino con la
                  seguridad, la trazabilidad y la calidad a largo plazo"
                </p>
              </div>
            </motion.div>

            {/* Tech Specs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200"
            >
              {techSpecs.map((spec, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-2xl sm:text-3xl font-bold text-black tabular-nums">
                    {spec.value}
                  </div>
                  <div className="text-[9px] font-mono tracking-widest text-gray-400 uppercase">
                    {spec.unit}
                  </div>
                  <div className="text-xs text-gray-600 leading-tight">
                    {spec.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="pt-6"
            >
              <DiagonalButton>Ver posiciones abiertas</DiagonalButton>
            </motion.div>
          </div>

          {/* Right Column - Images */}
          <div className="lg:col-span-7 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* Technical Frame */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-black/20" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-black/20" />

              <div className="space-y-6 sm:space-y-8">
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 0.5 + index * 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onMouseEnter={() => setActiveImage(index)}
                    className="group relative"
                  >
                    {/* Image Container */}
                    <div
                      className={`relative w-full ${image.aspectRatio} overflow-hidden bg-gray-100`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full transition-all duration-700 group-hover:scale-[1.02]"
                        style={{ imageRendering: "crisp-edges" }}
                      />

                      {/* Technical Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Corner Markers */}
                      <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-white/50" />
                      <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-white/50" />
                      <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-white/50" />
                      <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-white/50" />

                      {/* Info Panel */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-end justify-between">
                          <div className="space-y-2">
                            <div className="text-[10px] font-mono tracking-widest text-white/60">
                              {image.code}
                            </div>
                            <h4 className="text-lg font-bold text-white">
                              {image.alt}
                            </h4>
                            <p className="text-sm text-white/80">
                              {image.specs}
                            </p>
                          </div>
                          <div className="w-10 h-10 flex items-center justify-center border border-white/30 text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                            <ChevronRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>

                      {/* Scan line effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-32 pointer-events-none"
                        initial={{ y: "-100%" }}
                        animate={{ y: "300%" }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatDelay: 2,
                          ease: "linear",
                        }}
                      />
                    </div>

                    {/* Technical Label */}
                    <div className="mt-3 flex items-center justify-between text-xs">
                      <span className="font-mono text-gray-400 tracking-wider">
                        {image.category.toUpperCase()}
                      </span>
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-px flex-1 transition-all duration-500 ${
                            activeImage === index
                              ? "w-16 bg-brand-blue"
                              : "w-8 bg-gray-300"
                          }`}
                        />
                        <span className="font-mono text-gray-400 tabular-nums">
                          {String(index + 1).padStart(2, "0")}/
                          {images.length.toString().padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Floating Stats Card */}
              <motion.div
                style={{ y, opacity }}
                className="hidden xl:block absolute -right-12 top-1/2 -translate-y-1/2 w-48 bg-white p-6 shadow-2xl border border-gray-200"
              >
                <div className="space-y-4">
                  <div className="text-[10px] font-mono tracking-widest text-gray-400">
                    ACTIVE STATUS
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs text-gray-600">
                      Reclutando ahora
                    </span>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-3xl font-bold text-black tabular-nums">
                      12
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      Posiciones disponibles
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap");

        :root {
          --font-display: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          --font-mono: "Space Mono", "Courier New", monospace;
        }

        .font-display {
          font-family: var(--font-display);
        }

        .font-mono {
          font-family: var(--font-mono);
        }

        @keyframes gradient-slow {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-slow {
          animation: gradient-slow 10s ease infinite;
        }
      `}</style>
    </section>
  );
}
