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
  imagePosition = "center",
}) {
  return (
    // Eliminamos el padding superior excesivo para controlar mejor la altura
    <div className="w-full overflow-x-hidden bg-black pt-28">
      <section className="relative h-[55vh] sm:h-[60vh] md:h-[65vh] lg:h-[80vh] max-h-[800px] w-full overflow-hidden">
        {/* Background IMG CONTAINER */}
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt={title}
            className="w-full h-full object-cover will-change-transform"
            loading="eager"
            decoding="async"
            style={{
              objectPosition: imagePosition,
              imageRendering: 'crisp-edges', // Ayuda con fotos de gran formato
            }}
          />
        </div>

        {/* Overlay Gradiente*/}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/40 to-black/60 md:bg-gradient-to-r md:from-black/60 md:to-black/75" />

        {/* Grid Decorativo */}
        <div
          className="absolute inset-0 z-[2] opacity-[0.03] pointer-events-none 
          bg-[linear-gradient(rgba(56,189,248,0.3)_1px,transparent_1px),
               linear-gradient(90deg,rgba(56,189,248,0.3)_1px,transparent_1px)]
          bg-[size:40px_40px] md:bg-[size:80px_80px]"
        />

        {/* Content - Centrado Vertical */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-7xl lg:mt-6 mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="max-w-4xl"
            >
              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-sm tracking-[0.30em] text-slate-200 font-semibold uppercase mb-6"
              >
                {eyebrow}
              </motion.p>

              {/* Title*/}
              <h1 className="flex flex-wrap text-white  text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-[1.1]">
                {title.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordAnimation}
                    className="mr-3 sm:mr-4"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              {/* Description */}
              {description && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="mt-6 text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl"
                >
                  {description}
                </motion.p>
              )}

              {/* Botones */}
              {children && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="mt-8 flex flex-wrap gap-4"
                >
                  {children}
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}