import { motion } from "motion/react";

export default function InfraStrip() {
  return (
    <section className="relative w-full  h-[30vh]  overflow-hidden">
      {/* Imagen de fondo */}
      {/* <img
        src="/images/" 
        alt="Company history"
        className="absolute inset-0 w-full h-full object-cover"
      /> */}

      {/* Overlay */}
      <div className="absolute inset-0 " />

     
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        
        <h2 className="text-white text-2xl md:text-5xl font-semibold tracking-[0.25em] mb-8">
          NUESTRA INFRAESTRUCTURA
        </h2>

        
        <a
          href="/empresa/infraestructuras"
          className="px-8 py-4 w-80 rounded-md text-sm uppercase bg-brand-blue/60 tracking-widest text-slate-100 clip-path-diagonal border border-gray-500 hover:scale-105 hover:bg-brand-pink/60 hover:text-white transition-all duration-300"
        >
          Ver  
        </a>
      </motion.div>
    </section>
  );
}
