import { motion } from "motion/react";
import { useState } from "react";

export default function Hero() {
  const [muted, setMuted] = useState(true);

  return (
    <section className="relative w-full h-[95vh] overflow-hidden">
      <video
        src="/herovideo.mp4"
        autoPlay
        loop
        playsInline
        muted={muted}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover"
      />
 <div className="absolute inset-0 bg-black/30" />
      <button
        onClick={() => setMuted(!muted)}
        className="absolute bottom-6 right-6 bg-black/20 text-gray-200 px-2 py-2 rounded-full"
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
        <h1 className="text-3xl md:text-7xl font-bold tracking-tight mb-3">
          Ingeniería que impulsa el futuro del vuelo
        </h1>

        {/* <p className="text-sm md:text-base  text-white/80 leading-relaxed">
          Sistemas aeronáuticos de alta precisión, desarrollados para redefinir
          la eficiencia y la sostenibilidad en la aviación moderna.
        </p> */}
      </motion.div>
    </section>
  );
}
