import { motion } from "motion/react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function HeroVideo({
  eyebrow,
  title,
  description,
  backgroundImage,
  children,
}) {
  return (
    <div className="w-full overflow-x-hidden bg-black pt-20 md:pt-24 lg:pt-28">
      <section className="relative h-[85vh] w-full overflow-hidden">
        {/* Background */}
        <img
          src={backgroundImage}
          alt={title}
          className="absolute inset-0 w-full"
        />

        {/* Overlay técnico */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-slate-900/20 to-slate-950/80" />

        {/* Grid técnico */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none 
          bg-[linear-gradient(rgba(56,189,248,0.4)_1px,transparent_1px),
               linear-gradient(90deg,rgba(56,189,248,0.4)_1px,transparent_1px)]
          bg-[size:120px_120px]"
        />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="max-w-4xl"
            >
              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-cyan-400 text-sm font-medium tracking-[0.3em] uppercase mb-6"
              >
                {eyebrow}
              </motion.p>

              {/* Title */}
              <h1 className="flex flex-wrap max-w-full lg:max-w-8xl xl:max-w-7xl text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                {title.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordAnimation}
                    className="mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              {/* Description */}
              {description && (
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.9,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="mt-6 text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl"
                >
                  {description}
                </motion.p>
              )}
              {/* Botón Integrado (Children) */}
              {children && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }} // Aparece después de la descripción
                  className="mt-10"
                >
                  {children}
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Línea identitaria */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px 
          bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"
        />
      </section>
    </div>
  );
}
