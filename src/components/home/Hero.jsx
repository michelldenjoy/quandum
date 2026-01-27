import { motion } from "motion/react";
import { useState } from "react";

const title = "Tecnología que impulsa el vuelo"

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  const [muted, setMuted] = useState(true);

  return (
    <section className="relative w-full h-[95vh] min-h-[640px] overflow-hidden">
     
      <video
        src="/herovideo.mp4"
        autoPlay
        loop
        playsInline
        muted={muted}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay  */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none 
                   bg-[linear-gradient(rgba(56,189,248,0.5)_1px,transparent_1px),
                        linear-gradient(90deg,rgba(56,189,248,0.5)_1px,transparent_1px)]
                   bg-[size:140px_140px]"
      />

      {/* Botón sonido */}
      <button
        onClick={() => setMuted(!muted)}
        className="absolute bottom-6 right-6 z-20 
                   bg-black/30 backdrop-blur
                   text-slate-200 text-xs px-4 py-2 rounded-full
                   border border-white/10 hover:border-cyan-400/40
                   transition-all"
      >
        {muted ? "Activar sonido" : "Silenciar"}
      </button>

      {/* Contenido */}
      <div className="relative z-10 h-full flex items-end">
        <div className="w-full max-w-7xl lg:mx-9 px-6 pb-20 md:pb-28">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
           
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-sm tracking-[0.35em] uppercase mb-6"
            >
              Aerospace · Defense · Engineering
            </motion.p>

           
            <h1 className="flex flex-wrap text-white text-5xl md:text-8xl lg:text-9xl tracking-tight font-light">
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

            {/* Descripción */}
            {/* <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              className="mt-8 text-lg md:text-xl text-justify text-slate-200 leading-relaxed max-w-3xl"
            >
              Diseñamos y fabricamos sistemas electrónicos y optoelectrónicos
              críticos para el sector aeronáutico, cumpliendo los más
              exigentes estándares de fiabilidad, certificación y rendimiento.
            </motion.p> */}

            {/* BOTONES */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="mt-10 flex gap-6"
            >
              <a
                href="/empresa/about"
                className="px-8 py-3 hover:scale-105 rounded-md text-sm uppercase tracking-widest text-gray-200 bg-brand-blue clip-path-diagonal border border-gray-500 hover:font-semibold hover:bg-gradient-to-r  from-red-500 via-brand-pink to-red-700 transition-all duration-300"
              >
                Conócenos
              </a>

              {/* <a
                href="/contacto"
                className="px-8 py-3 hover:scale-105 rounded-md text-sm uppercase hover:font-semibold hover:bg-gradient-to-r  from-red-500 via-brand-pink to-red-700 tracking-widest text-white clip-path-diagonal border border-gray-500 hover:bg-brand-blue hover:text-white transition-all duration-300"
              >
                Contacto
              </a> */}
            </motion.div>
          </motion.div>
        </div>
      </div>

     
      <div className="absolute bottom-0 left-0 right-0 h-px 
                      bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
    </section>
  );
}
