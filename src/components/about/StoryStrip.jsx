import { motion } from "motion/react";

export default function StoryStrip() {
  return (
    <section className="relative w-full bg-white h-[40vh]  overflow-hidden">
      {/* Imagen de fondo */}
      <img
        src="/images/" // pon aquí tu imagen
        alt="Company history"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 " />

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        {/* Título */}
        <h2 className="text-black text-4xl md:text-6xl font-semibold tracking-[0.25em] mb-8">
          NUESTRA HISTORIA
        </h2>

        {/* Botón */}
        <a
          href="/empresa/historia"
          className="px-8 py-3 w-80 rounded-md text-sm uppercase tracking-widest text-slate-800 clip-path-diagonal border border-gray-500 hover:bg-brand-blue hover:text-white transition-all duration-300"
        >
          Ver  
        </a>
      </motion.div>
    </section>
  );
}
