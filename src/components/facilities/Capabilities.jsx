import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";

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

// 1️⃣ Solo src y code se quedan — iguales en todos los idiomas
const imagesMeta = [
  { src: "/images/torneado.webp",      code: "EQP-01" },
  { src: "/images/torneado.jpeg",      code: "EQP-02" },
  { src: "/images/fresado.webp",       code: "EQP-03" },
  { src: "/images/impresora.webp",     code: "EQP-06" },
  { src: "/images/about1.webp",        code: "EQP-05" },
  { src: "/images/cuttinglaser.webp",  code: "EQP-07" },
];

export default function CapabilitiesSlider() {
  const { t } = useTranslation("about");

  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const startRef = useRef(Date.now());
  const DURATION = 5500;

  useEffect(() => {
    startRef.current = Date.now();
    setProgress(0);
  }, [index]);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.min(elapsed / DURATION, 1);
      setProgress(pct);
      if (pct >= 1) setIndex((prev) => (prev + 1) % facilityImages.length);
    }, 16);
    return () => clearInterval(interval);
  }, [paused, index]);

  // 2️⃣ Leemos ambos arrays del JSON con returnObjects: true
  //    capabilities tiene objetos con array anidado dentro (items),
  //    returnObjects: true funciona igual sin importar la profundidad
  const imagesTexts     = t("capabilities.images",  { returnObjects: true });
  const capabilitiesData = t("capabilities.groups",  { returnObjects: true });

  // 3️⃣ Fusionamos igual que en el timeline y FacilitiesSlider
  const facilityImages = imagesMeta.map((meta, i) => ({
    ...meta,
    ...imagesTexts[i],
  }));

  const current = facilityImages[index];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-tr from-slate-900 to-black/80"
      style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
    >


      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex items-end justify-between"
        >
          <div>
            <p className="text-[10px] tracking-[0.5em] text-slate-400 font-mono uppercase mb-2">
              {t("capabilities.eyebrow")}
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight text-white leading-tight">
              {t("capabilities.title_before")}{" "}
              <span className="font-semibold">
                {t("capabilities.title_highlight")}
              </span>
            </h2>
          </div>

          {/* Contador — sin texto, no cambia */}
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

        {/* GRID PRINCIPAL */}
        <div className="grid lg:grid-cols-[1fr_1.9fr] gap-6 lg:gap-8 items-start">

          {/* COLUMNA IZQUIERDA */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            {/*
              5️⃣ CONCEPTO NUEVO — array anidado:
              capabilitiesData es un array de objetos donde cada uno
              tiene a su vez un array "items" dentro. El doble .map()
              funciona exactamente igual — el exterior recorre los grupos
              y el interior recorre los items de cada grupo.
            */}
            <div className="space-y-7">
              {capabilitiesData.map((cap, i) => (
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

            {/* Tarjeta activa */}
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
                  {t("capabilities.hardwareLabel")}
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


          </motion.div>

          {/* COLUMNA DERECHA — el .map() no cambia nada */}
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
                style={{ background: "linear-gradient(to right, rgba(0,0,0,0.3) 0%, transparent 40%)" }}
              />

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

              <div className="absolute top-5 right-5">
                <span className="text-[9px] font-mono text-white/30 tracking-widest">
                  {current.code}
                </span>
              </div>

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

            {/* Thumbnail strip */}
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
                    border: i === index ? "1.5px solid #3b82f6" : "1px solid rgba(255,255,255,0.06)",
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