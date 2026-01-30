import { motion } from "motion/react";
import DiagonalButton from "../DiagonalButton";

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
        
        <h2 className="text-white text-2xl md:text-5xl font-semibold tracking-[0.25em] mb-4">
          NUESTRA INFRAESTRUCTURA
        </h2>

        
        <DiagonalButton
          href="/empresa/infraestructuras"
          className="px-8 py-4 w-80 mb-4"
        >
          Ver  
        </DiagonalButton>
      </motion.div>
    </section>
  );
}
