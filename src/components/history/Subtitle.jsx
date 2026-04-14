import { motion } from "motion/react";

const words = [
  { text: "Y",      accent: false },
  { text: "esto",   accent: false },
  { text: "apenas", accent: false },
  { text: "comienza", accent: true },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.17,
      delayChildren: 0.5,
    },
  },
};

const word = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.88,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay },
  },
});

export default function Subtitle() {
  return (
    <div className="relative pt-24 pb-28">
      
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[320px] bg-gradient-to-r from-violet-600/8 to-brand-blue/8 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4">

        {/* Conector de timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center mb-14"
        >
          <div className="w-px h-14 bg-gradient-to-b from-transparent to-violet-400/50" />
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-2.5 h-2.5 rounded-full border border-violet-400/60 bg-violet-500/15"
          >
            <span className="absolute inset-[-5px] rounded-full border border-violet-400/20 animate-ping" />
          </motion.div>
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(0.15)}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="h-px w-7 bg-violet-400/40" />
          <span className="text-[10px] tracking-[0.28em] uppercase italic text-violet-400/60 font-bold">
            Presente · Futuro
          </span>
          <div className="h-px w-7 bg-violet-400/40" />
        </motion.div>

        {/* Título */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="flex flex-wrap justify-center items-baseline gap-x-[0.32em] gap-y-2 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-center tracking-tight leading-[1.12] mb-0"
        >
          {words.map((w, i) => (
            <span key={i} className="overflow-hidden inline-block">
              <motion.span
                variants={word}
                className={`inline-block font-light ${
                  w.accent
                    ? "bg-gradient-to-r from-violet-500 via-indigo-400 to-brand-blue bg-clip-text text-transparent italic"
                    : "bg-gradient-to-br from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
                }`}
              >
                {w.text}
              </motion.span>
            </span>
          ))}
        </motion.h2>

        {/* Línea divisoria */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.1, ease: [0.65, 0, 0.35, 1] }}
          className="mt-9 mx-auto origin-center max-w-[200px]"
        >
          <div className="relative h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-violet-400/70" />
          </div>
        </motion.div>

        {/* Footer — terminal del timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(1.4)}
          className="mt-14 flex flex-col items-center gap-0"
        >
          {/* Cola final del timeline */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 1.5, ease: [0.65, 0, 0.35, 1] }}
            className="w-px h-14 bg-gradient-to-b from-violet-400/50 to-transparent origin-top"
          />
          {/* Punto terminal */}
          <motion.div
            animate={{ boxShadow: ["0 0 8px rgba(167,139,250,0.3)", "0 0 20px rgba(167,139,250,0.7)", "0 0 8px rgba(167,139,250,0.3)"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-violet-400 to-indigo-400"
          />

          {/* Label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 1.8 }}
            className="mt-5 text-[11px] tracking-[0.24em] uppercase text-slate-500/60 font-bold"
          >
            El futuro está en construcción
          </motion.p>
        </motion.div>

      </div>
    </div>
  );
}