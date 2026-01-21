import React from "react";
import { motion } from "framer-motion";

const Divider = () => {
  return (
    <div className="w-full flex justify-center items-center py-6 bg-white">
      <div className="max-w-6xl w-full px-6 flex items-center">
        
        {/* Línea izquierda - crece desde el centro */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-[1px] bg-gradient-to-r from-transparent to-gray-300 flex-grow"
        />

        {/* Elemento central técnico */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-4 flex items-center gap-2"
        >
          {/* Un pequeño rombo o diamante técnico en brand-blue */}
          {/* <div className="w-1.5 h-1.5 rotate-45 border border-brand-blue" /> */}
          
          {/* El nombre de la sección o un código de serie muy pequeño (opcional) */}
          <span className="text-[9px] font-mono text-gray-400 tracking-[0.4em] uppercase">
            Quandum
          </span>

          {/* <div className="w-1.5 h-1.5 rotate-45 border border-brand-blue" /> */}
          <span className="text-[9px] font-mono text-gray-400 tracking-[0.4em] uppercase">
            Aerospace
          </span>
        </motion.div>

        {/* Línea derecha - crece desde el centro */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-[1px] bg-gradient-to-l from-transparent to-gray-300 flex-grow"
        />
        
      </div>
    </div>
  );
};

export default Divider;