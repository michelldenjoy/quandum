import { motion } from "motion/react";

const title = "Ingeniería y fabricación de sistemas aeronáuticos";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const wordAnimation = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function HeroVideo() {
  return (
    <section className="relative w-full h-[80vh] object-top overflow-hidden">
      {/* Imagen fondo */}
      <img
        src="/images/about-hero.jpg"
        alt="Military Aircraft"
        
      />

      {/* capa oscura */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

      {/* Contenido */}
      <div className="absolute bottom-12 w-full px-6 md:px-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 text-sm uppercase tracking-[0.3em] text-slate-300"
          >
            Aerospace · Defense · Engineering
          </motion.span>
          <h1 className="flex flex-wrap text-white text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
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

          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-6 text-sm md:text-lg text-slate-300 max-w-3xl"
          >
            Sistemas electrónicos y optoelectrónicos de alta fiabilidad para
            aeroespacial y defensa.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
