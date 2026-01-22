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
    <div className="w-full overflow-x-hidden bg-black pt-16 sm:pt-20 md:pt-24 lg:pt-28">
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh]  w-full overflow-hidden">
        {/* Background Image **************   
  min-h-[70vh]
  sm:min-h-[75vh]
  md:min-h-[70vh]
  lg:min-h-[65vh]
  xl:min-h-[60vh]*/}
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt={title}
            className="w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
            style={{
              objectPosition: imagePosition,
              imageRendering: 'high-quality',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
            }}
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-slate-900/20 to-slate-950/80 sm:from-black/70 sm:via-slate-900/20 sm:to-slate-950/80" />

        {/* Grid*/}
        <div
          className="absolute inset-0 opacity-[0.03] sm:opacity-[0.04] pointer-events-none 
          bg-[linear-gradient(rgba(56,189,248,0.4)_1px,transparent_1px),
               linear-gradient(90deg,rgba(56,189,248,0.4)_1px,transparent_1px)]
          bg-[size:60px_60px] sm:bg-[size:80px_80px] md:bg-[size:100px_100px] lg:bg-[size:120px_120px]"
        />

        {/* Content - Centrado vertical */}
        <div className="relative z-10 h-full flex items-center pb-20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="max-w-full sm:max-w-4xl"
            >
              {/* Eyebrow  */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-blue-200 text-lg  font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6"
              >
                {eyebrow}
              </motion.p>

              {/* Title  */}
              <h1 className="flex flex-wrap text-white text-5xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-9xl  tracking-tight leading-[1.1] sm:leading-tight">
                {title.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordAnimation}
                    className="mr-2 sm:mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              {/* Description  */}
              {description && (
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.9,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-full sm:max-w-2xl lg:max-w-3xl"
                >
                  {description}
                </motion.p>
              )}

              {/* Children (Botones)  */}
              {children && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="mt-6 sm:mt-8 md:mt-10"
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

