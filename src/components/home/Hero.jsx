import { motion } from "motion/react";
import { useState } from "react";

export default function Hero() {
  const [muted, setMuted] = useState(true);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        src="/herovideo.mp4"
        autoPlay
        loop
        playsInline
        muted={muted}
        className="w-full h-full object-cover"
      />

      <button
        onClick={() => setMuted(!muted)}
        className="absolute bottom-6 right-6 bg-black/50 text-white px-4 py-2 rounded-full"
      >
        {muted ? "Activar sonido" : "Silenciar"}
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="
          absolute bottom-12 left-8 md:left-16 
          text-white max-w-md
        "
      >
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
          Ingeniería que impulsa el futuro del vuelo
        </h1>

        <p className="text-sm md:text-base  text-white/80 leading-relaxed">
          Sistemas aeronáuticos de alta precisión, desarrollados para redefinir
          la eficiencia y la sostenibilidad en la aviación moderna.
        </p>
      </motion.div>
    </section>
  );
}
