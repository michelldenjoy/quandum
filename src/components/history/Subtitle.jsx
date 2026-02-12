import { motion } from "motion/react";

const text = "Y esto a penas comienza";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut" },
  },
};

export default function Subtitle() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
      className="text-center mb-24"
    >
      <h2 className="text-5xl pt-24 md:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
        {text.split(" ").map((wordText, wordIndex) => (
          <span
            key={wordIndex}
            className="inline-block whitespace-nowrap mr-3"
          >
            {wordText.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                variants={letter}
                className="inline-block bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 bg-clip-text text-transparent"
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </h2>
    </motion.div>
  );
}