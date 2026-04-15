import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const facilityImages = [
  {
    src: "/images/torneado.webp",
    label: "Centro de Torneado",
    specs: "Mecanizado de alta precisión para componentes rotativos críticos.",
    code: "EQP-01",
    category: "MACHINING",
  },
  {
    src: "/images/torneado.jpeg",
    label: "DMG MORI CLX 550",
    specs: "Tecnología de vanguardia para torneado universal de alto rendimiento.",
    code: "EQP-02",
    category: "CNC",
  },
  {
    src: "/images/fresado.webp",
    label: "Fresado CNC",
    specs: "Capacidad multi-eje para geometrías aeroespaciales complejas.",
    code: "EQP-03",
    category: "PRODUCTION",
  },
  {
    src: "/images/impresora.webp",
    label: "Impresión 3D",
    specs: "Fabricación aditiva industrial de gran volumen para prototipado estructural y utillaje.",
    code: "EQP-06",
    category: "ADDITIVE",
  },
  {
    src: "/images/soldadura.webp",
    label: "Soldadura Especializada",
    specs: "Procesos certificados de unión para estructuras de alta resistencia.",
    code: "EQP-05",
    category: "ASSEMBLY",
  },
  {
    src: "/images/cuttinglaser.webp",
    label: "Corte Láser de Fibra",
    specs: "Tecnología de precisión para corte de metal con alta velocidad, bordes limpios y distorsión térmica mínima.",
    code: "EQP-07",
    category: "LASER",
  },
];

const capabilities = [
  {
    group: "Advanced Manufacturing",
    items: ["Axis Precision Machining", "High-Definition Machining", "Laser Cutting"],
  },
  {
    group: "Engineering & Design",
    items: ["Electronic & Mechanical Development", "Software Design", "Hardness & Cables"],
  },
  {
    group: "Prototyping",
    items: ["Fast Machining", "3D Metal Sintering"],
  },
];

/* esquinas */
function HUDBrackets() {
  const SIZE = 20;
  const THICK = 2;
  const COLOR = "rgba(59,130,246,0.65)";
  const style = { position: "absolute", width: SIZE, height: SIZE };
  const border = `${THICK}px solid ${COLOR}`;
  return (
    <>
      <div style={{ ...style, top: 16, left: 16, borderTop: border, borderLeft: border }} />
      <div style={{ ...style, top: 16, right: 16, borderTop: border, borderRight: border }} />
      <div style={{ ...style, bottom: 16, left: 16, borderBottom: border, borderLeft: border }} />
      <div style={{ ...style, bottom: 16, right: 16, borderBottom: border, borderRight: border }} />
    </>
  );
}

export default function CapabilitiesSlider() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const startRef = useRef(Date.now());
  const DURATION = 5500;

  /* barra de progreso reinicia */
  useEffect(() => {
    startRef.current = Date.now();
    setProgress(0);
  }, [index]);

  /* temporizador */
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.min(elapsed / DURATION, 1);
      setProgress(pct);
      if (pct >= 1) {
        setIndex((prev) => (prev + 1) % facilityImages.length);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [paused, index]);

  const current = facilityImages[index];

  return (
    <section
      className="relative overflow-hidden bg-[#080808]"
      style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 relative z-10">

        {/*  HEADER  */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex items-end justify-between"
        >
          <div>
            <p className="text-[10px] tracking-[0.5em] text-blue-500 font-mono uppercase mb-2">
              Core Capabilities
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight text-white leading-tight">
              Excelencia en{" "}
              <span className="font-semibold italic">Ingeniería</span>
            </h2>
          </div>
          {/* Contador grande en header */}
          <div className="hidden md:flex items-baseline gap-1 font-mono select-none">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-5xl font-thin text-white/15 tabular-nums"
              >
                {String(index + 1).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
            <span className="text-base text-white/10 font-light">
              /{String(facilityImages.length).padStart(2, "0")}
            </span>
          </div>
        </motion.div>

        {/* GRID PRINCIPAL  */}
        <div className="grid lg:grid-cols-[1fr_1.9fr] gap-6 lg:gap-8 items-start">

          {/*COLUMNA IZQUIERDA */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            
            <div className="space-y-7">
              {capabilities.map((cap, i) => (
                <div key={i} className="border-l border-white/10 pl-5">
                  <h4 className="text-[9px] uppercase tracking-widest text-slate-500 font-bold mb-3">
                    {cap.group}
                  </h4>
                  <ul className="space-y-2">
                    {cap.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-slate-300 text-sm font-light flex items-center gap-2.5"
                      >
                        <span className="w-1 h-1 bg-blue-500 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="relative p-5 rounded-sm overflow-hidden"
                style={{
                  background: "rgba(59,130,246,0.05)",
                  border: "1px solid rgba(59,130,246,0.18)",
                }}
              >
                <div
                  className="absolute top-0 right-0 px-2 py-1 text-[9px] font-mono uppercase italic"
                  style={{ color: "rgba(59,130,246,0.4)" }}
                >
                  Hardware Tech Unit
                </div>
                <p className="text-white text-sm font-medium mb-1.5">{current.label}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{current.specs}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span
                    className="px-2 py-0.5 text-[9px] font-mono tracking-widest rounded-sm"
                    style={{ background: "rgba(59,130,246,0.12)", color: "#60a5fa" }}
                  >
                    {current.category}
                  </span>
                  <span className="text-[9px] font-mono text-slate-600">{current.code}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Status indicator */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
                All Systems Operational
              </span>
            </div>
          </motion.div>

          {/*  COLUMNA DERECHA */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            
            <div
              className="relative overflow-hidden rounded-sm"
              style={{
                aspectRatio: "16/10",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(59,130,246,0.06)",
              }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {/* Imagen con animación */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={current.src}
                  alt={current.label}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

             
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.08) 70%, transparent 100%)",
                }}
              />
              
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.3) 0%, transparent 40%)",
                }}
              />

              {/* HUD corners */}
              <HUDBrackets />

              
              <AnimatePresence mode="wait">
                <motion.div
                  key={`badge-${index}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-5 left-5"
                >
                  <span
                    className="px-2.5 py-1 text-[9px] font-mono tracking-[0.3em] uppercase rounded-sm"
                    style={{
                      background: "rgba(59,130,246,0.2)",
                      border: "1px solid rgba(59,130,246,0.35)",
                      color: "#93c5fd",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {current.category}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Código equipo (top-right) */}
              <div className="absolute top-5 right-5">
                <span className="text-[9px] font-mono text-white/30 tracking-widest">
                  {current.code}
                </span>
              </div>

              {/* Info en la imagen */}
              <div className="absolute bottom-0 left-0 right-0 px-7 pb-7 pt-14">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`info-${index}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                  >
                    <h3 className="text-2xl md:text-3xl font-light text-white mb-2 leading-tight">
                      {current.label}
                    </h3>
                    <p className="text-sm text-slate-300/80 font-light max-w-sm leading-relaxed">
                      {current.specs}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <motion.div
                  className="h-full"
                  style={{
                    width: `${progress * 100}%`,
                    background: "linear-gradient(to right, #3b82f6, #60a5fa)",
                  }}
                />
              </div>
            </div>

            {/* Thumbnail strip  */}
            <div className="mt-3 grid grid-cols-6 gap-2">
              {facilityImages.map((img, i) => (
                <motion.button
                  key={i}
                  onClick={() => setIndex(i)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative overflow-hidden rounded-sm focus:outline-none"
                  style={{
                    aspectRatio: "16/10",
                    border:
                      i === index
                        ? "1.5px solid #3b82f6"
                        : "1px solid rgba(255,255,255,0.06)",
                    transition: "border-color 0.3s, opacity 0.3s",
                    opacity: i === index ? 1 : 0.45,
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover"
                    style={{
                      filter: i === index ? "none" : "grayscale(40%)",
                      transition: "filter 0.4s",
                    }}
                  />
               
                  {i === index && (
                    <div
                      className="absolute inset-0"
                      style={{ background: "rgba(59,130,246,0.12)" }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}