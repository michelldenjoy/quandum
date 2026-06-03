import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const AUTOPLAY_INTERVAL = 5000;

// src y code → iguales en todos los idiomas
const imagesMeta = [
  { src: "/images/team5.webp", code: "OPS-001" },
  { src: "/images/team3.webp", code: "ENG-002" },
  { src: "/images/team2.webp", code: "TST-003" },
  { src: "/images/team4.webp", code: "TST-004" },
];

// value → número/símbolo, igual en todos los idiomas
const specsValues = ["47+", "100%", "20"];

export default function Collage() {
  const { t } = useTranslation("careers");

  // Arrays traducidos
  const imagesTexts = t("collage.images", { returnObjects: true });
  const specsTexts  = t("collage.specs",  { returnObjects: true });

  // Fusión igual que siempre
  const images = imagesMeta.map((meta, i) => ({
    ...meta,
    ...imagesTexts[i],
  }));

  const techSpecs = specsValues.map((value, i) => ({
    value,
    ...specsTexts[i],
  }));

  const ref = React.useRef(null);
  const containerRef = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [current, setCurrent]   = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef(null);

  const total = images.length;

  const goTo = useCallback((index, dir) => {
    setDirection(dir);
    setCurrent((total + index) % total);
    setProgress(0);
    startTimeRef.current = null;
  }, [total]);

  const goNext = useCallback(() => goTo(current + 1,  1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  useEffect(() => {
    if (total <= 1) return;
    let rafId;
    const tick = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const pct = Math.min((elapsed / AUTOPLAY_INTERVAL) * 100, 100);
      if (!isPaused) {
        setProgress(pct);
        if (pct >= 100) { goNext(); return; }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [current, isPaused, goNext, total]);

  const variants = {
    enter:  (dir) => ({ x: dir > 0 ? "6%" : "-6%", opacity: 0, scale: 0.98 }),
    center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    exit:   (dir) => ({ x: dir > 0 ? "-6%" : "6%", opacity: 0, scale: 0.98, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }),
  };

  return (
    <section
      ref={containerRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-white overflow-hidden"
    >
      <div
        ref={ref}
        className="relative w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 items-center lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">

          {/* COLUMNA IZQUIERDA */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-8 sm:space-y-10 md:space-y-12">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[0.95] mb-6">
                <span className="block text-black">
                  {t("collage.title_1")}
                </span>
                <span className="block mt-2 bg-gradient-to-r from-brand-blue via-gray-800 to-brand-blue bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-slow">
                  {t("collage.title_2")}
                </span>
                <div className="mt-6 w-32 h-px bg-gradient-to-r from-brand-blue to-transparent" />
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              {/* Párrafo con spans en medio — lo partimos en fragmentos */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed font-light">
                {t("collage.p1_before")}{" "}
                <span className="text-black font-medium">{t("collage.p1_rigor")}</span>
                {t("collage.p1_and1")}{" "}
                <span className="text-black font-medium">{t("collage.p1_responsibility")}</span>{" "}
                {t("collage.p1_and2")}{" "}
                <span className="text-black font-medium">{t("collage.p1_vocation")}</span>.
              </p>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t("collage.p2")}
              </p>

              <div className="pt-4 border-l-2 border-brand-blue pl-6">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed italic">
                  {t("collage.quote")}
                </p>
              </div>
            </motion.div>

            {/* Tech Specs — value no cambia, label y unit sí */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200"
            >
              {techSpecs.map((spec, i) => (
                <div key={i} className="space-y-2">
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
          </div>

          {/* COLUMNA DERECHA — SLIDER */}
          <div className="lg:col-span-7 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-black/20 z-10 pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-black/20 z-10 pointer-events-none" />

              <div
                className="relative w-full aspect-[3/2] overflow-hidden bg-gray-100"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <AnimatePresence custom={direction} initial={false}>
                  <motion.div
                    key={current}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0"
                  >
                    <img
                      src={images[current].src}
                      alt={images[current].alt}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-white/6 to-transparent h-32 pointer-events-none"
                      initial={{ y: "-100%" }}
                      animate={{ y: "300%" }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
                    />

                    {["top-3 left-3 border-l-2 border-t-2", "top-3 right-3 border-r-2 border-t-2", "bottom-3 left-3 border-l-2 border-b-2", "bottom-3 right-3 border-r-2 border-b-2"].map((cls, i) => (
                      <div key={i} className={`absolute w-5 h-5 ${cls} border-white/40`} />
                    ))}

                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="absolute bottom-0 left-0 right-0 p-5 sm:p-7"
                    >
                      <div className="flex items-end justify-between">
                        <div className="space-y-1">
                          {/* code → identificador técnico, no se traduce */}
                          <div className="text-[10px] font-mono tracking-widest text-white/50">
                            {images[current].code}
                          </div>
                          <h4 className="text-base sm:text-lg font-bold text-white leading-tight">
                            {images[current].alt}
                          </h4>
                          <p className="text-xs sm:text-sm text-white/70">
                            {images[current].specs}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="font-mono text-2xl font-bold text-white/20 tabular-nums select-none">
                            {String(current + 1).padStart(2, "0")}
                          </span>
                          <span className="font-mono text-sm text-white/20">
                            /{String(total).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {total > 1 && (
                  <>
                    {/* 1️⃣ aria-label → texto para lectores de pantalla, va al JSON */}
                    <button
                      onClick={goPrev}
                      aria-label={t("collage.prevLabel")}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 hover:border-white/50 transition-all duration-300"
                    >
                      <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" />
                    </button>
                    <button
                      onClick={goNext}
                      aria-label={t("collage.nextLabel")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 hover:border-white/50 transition-all duration-300"
                    >
                      <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" />
                    </button>
                  </>
                )}
              </div>

              {/* Barra inferior */}
              <div className="mt-4 flex items-center gap-4">
                <span className="font-mono text-[10px] tracking-widest text-gray-400 uppercase shrink-0">
                  {images[current].category}
                </span>

                <div className="flex-1 h-px bg-gray-200 relative overflow-hidden">
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-brand-blue origin-left"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0 }}
                  />
                </div>

                {total > 1 && (
                  <div className="flex items-center gap-2 shrink-0">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i, i > current ? 1 : -1)}
                        // 2️⃣ aria-label con número dinámico — concatenamos t() con el índice
                        aria-label={`${t("collage.dotLabel")} ${i + 1}`}
                        className={`transition-all duration-300 rounded-full ${
                          i === current
                            ? "w-5 h-1.5 bg-brand-blue"
                            : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-500"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
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
        .font-display { font-family: var(--font-display); }
        .font-mono    { font-family: var(--font-mono); }
        @keyframes gradient-slow {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        .animate-gradient-slow { animation: gradient-slow 10s ease infinite; }
      `}</style>
    </section>
  );
}