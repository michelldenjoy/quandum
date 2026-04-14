import { motion } from "motion/react";

const words = [
  { text: "Los", accent: false },
  { text: "hitos", accent: false },
  { text: "que", accent: false },
  { text: "forjaron", accent: true },
  { text: "nuestra", accent: false },
  { text: "excelencia", accent: false },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const word = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1], 
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay,
    },
  }),
};

export default function Title() {
  return (
    <div className="relative mb-32">
      {/* Ambient glow de fondo */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-gradient-to-r from-brand-blue/8 to-brand-pink/8 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4">
        {/* Eyebrow label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0.1}
          variants={fadeUp}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="h-px w-8 bg-brand-blue/40" />
          <span className="text-[11px] tracking-[0.25em] uppercase italic text-brand-blue/60 font-light">
            Nuestra historia
          </span>
          <div className="h-px w-8 bg-brand-blue/40" />
        </motion.div>

        {/* Título principal */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="flex flex-wrap justify-center gap-x-[0.3em] gap-y-2 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-center tracking-tight leading-[1.1]"
        >
          {words.map((w, i) => (
            <span key={i} className="overflow-hidden inline-block">
              <motion.span
                variants={word}
                className={`inline-block ${
                  w.accent
                    ? "bg-brand-blue bg-clip-text text-transparent"
                    : "bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-transparent"
                }`}
              >
                {w.text}
              </motion.span>
            </span>
          ))}
        </motion.h2>

        {/* Línea divisoria con punto central */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 1.0, ease: [0.65, 0, 0.35, 1] }}
          className="mt-10 mx-auto origin-center max-w-xs"
        >
          <div className="relative h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-brand-blue/70" />
          </div>
        </motion.div>

        {/* Subtítulo */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1.2}
          variants={fadeUp}
          className="text-center text-slate-400/70 text-base md:text-lg mt-9 max-w-xl mx-auto leading-relaxed italic font-light tracking-wide"
        >
          Una trayectoria de precisión, innovación y visión
          <br className="hidden md:block" /> que continúa elevándose.
        </motion.p>
      </div>
    </div>
  );
}