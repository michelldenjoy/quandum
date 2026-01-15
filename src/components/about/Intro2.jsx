import { motion } from "motion/react";

export default function Intro2() {
  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      {/* Fondo técnico - Grid blueprint */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        
        {/* Contenedor principal con marco técnico */}
        <div className="relative border border-gray-200 bg-white/50 backdrop-blur-sm p-6 sm:p-8 md:p-10 lg:p-16">
          
          {/* Esquinas técnicas - Superior izquierda */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
          >
            <div className="absolute top-0 left-0 w-full h-3 sm:h-4 border-t-2 border-l-2 border-brand-blue" />
            <div className="absolute top-0 left-0 w-3 sm:w-4 h-full border-t-2 border-l-2 border-brand-blue" />
            <div className="absolute top-1 left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-blue" />
          </motion.div>

          {/* Esquinas técnicas - Superior derecha */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
          >
            <div className="absolute top-0 right-0 w-full h-3 sm:h-4 border-t-2 border-r-2 border-brand-blue" />
            <div className="absolute top-0 right-0 w-3 sm:w-4 h-full border-t-2 border-r-2 border-brand-blue" />
            <div className="absolute top-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-blue" />
          </motion.div>

          {/* Esquinas técnicas - Inferior izquierda */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
          >
            <div className="absolute bottom-0 left-0 w-full h-3 sm:h-4 border-b-2 border-l-2 border-brand-blue" />
            <div className="absolute bottom-0 left-0 w-3 sm:w-4 h-full border-b-2 border-l-2 border-brand-blue" />
            <div className="absolute bottom-1 left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-blue" />
          </motion.div>

          {/* Esquinas técnicas - Inferior derecha */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
          >
            <div className="absolute bottom-0 right-0 w-full h-3 sm:h-4 border-b-2 border-r-2 border-brand-blue" />
            <div className="absolute bottom-0 right-0 w-3 sm:w-4 h-full border-b-2 border-r-2 border-brand-blue" />
            <div className="absolute bottom-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-blue" />
          </motion.div>

          {/* Coordenadas técnicas - Superior izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -top-2.5 sm:-top-3 left-4 sm:left-6 md:left-8 bg-white px-1.5 sm:px-2 text-[9px] sm:text-[10px] md:text-xs font-mono text-gray-500 tracking-wider"
          >
            SEC-01
          </motion.div>

          {/* Coordenadas técnicas - Superior derecha */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -top-2.5 sm:-top-3 right-4 sm:right-6 md:right-8 bg-white px-1.5 sm:px-2 text-[9px] sm:text-[10px] md:text-xs font-mono text-gray-500 tracking-wider"
          >
            D-2006
          </motion.div>

          {/* Coordenadas técnicas - Inferior izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-2.5 sm:-bottom-3 left-4 sm:left-6 md:left-8 bg-white px-1.5 sm:px-2 text-[9px] sm:text-[10px] md:text-xs font-mono text-gray-500 tracking-wider"
          >
            QA-AER
          </motion.div>

          {/* Coordenadas técnicas - Inferior derecha */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -bottom-2.5 sm:-bottom-3 right-4 sm:right-6 md:right-8 bg-white px-1.5 sm:px-2 text-[9px] sm:text-[10px] md:text-xs font-mono text-gray-500 tracking-wider"
          >
            REV-A
          </motion.div>

          {/* Marcadores laterales - Izquierda */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden xl:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8"
          >
            <div className="flex flex-col items-end gap-2 text-[10px] font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <span>A1</span>
                <div className="w-4 h-px bg-gray-300" />
              </div>
              <div className="flex items-center gap-2">
                <span>A2</span>
                <div className="w-4 h-px bg-gray-300" />
              </div>
              <div className="flex items-center gap-2">
                <span>A3</span>
                <div className="w-4 h-px bg-gray-300" />
              </div>
            </div>
          </motion.div>

          {/* Marcadores laterales - Derecha */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-8"
          >
            <div className="flex flex-col items-start gap-2 text-[10px] font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-4 h-px bg-gray-300" />
                <span>B1</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-px bg-gray-300" />
                <span>B2</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-px bg-gray-300" />
                <span>B3</span>
              </div>
            </div>
          </motion.div>

          {/* Contenido interior */}
          <div className="relative text-center z-10">
            
            {/* Badge superior */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-center mb-6 sm:mb-8 md:mb-10"
            >
              <span className="inline-block text-[10px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] text-gray-500 font-medium uppercase relative">
                <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 border border-gray-200 bg-white">
                  Sistemas de ingeniería avanzada
                </span>
              </span>
            </motion.div>

            {/* Logo + Título - SIEMPRE HORIZONTAL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-row text-center items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10"
            >
              {/* Logo */}
              <div className="relative  flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Quandum Aerospace"
                  className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16"
                />
                <div className="absolute inset-0 bg-brand-blue/5 blur-2xl scale-150" />
              </div>

              {/* Título */}
              <h5 className="text-2xl sm:text-3xl text-center md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-[1.1] flex-shrink min-w-0">
                <span className="font-semibold text-brand-blue whitespace-nowrap">
                  QUANDUM
                </span>
                {" "}
                <span className="font-semibold bg-gradient-to-r from-brand-pink via-red-400 to-red-700 bg-clip-text text-transparent whitespace-nowrap">
                  AEROSPACE
                </span>
              </h5>
            </motion.div>

            {/* Línea técnica de medición */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6 sm:mb-8 md:mb-10 origin-center relative"
            >
              {/* Marcas de medición */}
              <div className="absolute top-0 left-1/4 w-px h-1.5 sm:h-2 bg-gray-300 -translate-y-1/2" />
              <div className="absolute top-0 left-1/2 w-px h-2 sm:h-3 bg-brand-blue -translate-y-1/2" />
              <div className="absolute top-0 left-3/4 w-px h-1.5 sm:h-2 bg-gray-300 -translate-y-1/2" />
            </motion.div>

            {/* Texto principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="text-center max-w-4xl mx-auto px-2 sm:px-4"
            >
              <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-normal">
                Somos una empresa de ingeniería especializada en el
                diseño y desarrollo de sistemas electrónicos y optoelectrónicos de
                alta fiabilidad para los sectores de aeronáutica y de defensa.
              </p>
            </motion.div>

            {/* Sello técnico inferior */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-6 sm:mt-8 md:mt-10 text-[10px] sm:text-xs text-gray-400 font-mono"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 border border-brand-blue" />
                <span>CERTIFIED</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-300" />
              <div className="flex items-center gap-2">
                <span>DO-178C</span>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-blue" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}