import { motion } from "motion/react";

export default function HeroVideo() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      {/* Video */}
      <video
        src="/repostaje.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay content */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="absolute bottom-12 w-full px-6 md:px-16 text-white"
      >
        <div className="max-w-xl">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight mb-3">
            Ingeniería y fabricación de sistemas aeronáuticos
          </h1>

          <p className="text-sm md:text-lg text-white/80 leading-relaxed">
            Quandum diseña y fabrica sistemas electrónicos y optoelectrónicos para el sector aeroespacial y defensa. Experiencia, certificaciones y compromiso con la fiabilidad.
          </p>
        </div>
      </motion.div> */}
    </section>
  );
}
