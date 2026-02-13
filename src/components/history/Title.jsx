import { motion } from "motion/react";

const text = "Hitos que nos han transformado";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.025,
      delayChildren: 0.2,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export default function Title() {
  const words = text.split(" ");

  return (
    <div className="relative mb-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-brand-blue/10 to-brand-pink/10 blur-[100px] rounded-full" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="max-w-5xl mx-auto"
      >
        {/* Main title */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight text-center tracking-tight leading-[1.1] px-4">
          {words.map((wordText, wordIndex) => (
            <span
              key={wordIndex}
              className="inline-block whitespace-nowrap mr-4 md:mr-6"
            >
              {wordText.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  variants={letter}
                  className="inline-block relative"
                  style={{
                    perspective: "1000px",
                  }}
                >
                  <span className="relative inline-block">
                    {/* Main text with gradient */}
                    <span className="relative z-10 bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-transparent font-light">
                      {char}
                    </span>

                    {/* Subtle glow effect on certain letters */}
                    {(wordIndex === words.length - 1 || wordIndex === 0) && (
                      <span className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-pink/20 blur-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </span>
                </motion.span>
              ))}
            </span>
          ))}
        </h2>

        {/* Decorative underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="mt-8 h-px w-full max-w-md mx-auto origin-center"
        >
          <div className="h-full w-full bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />
        </motion.div>

        {/* Optional subtitle or description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center text-slate-400 text-base md:text-lg mt-8 max-w-2xl mx-auto px-4 leading-relaxed"
        >
          Momentos clave que han definido nuestra trayectoria.
        </motion.p>
      </motion.div>
    </div>
  );
}
