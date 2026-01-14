import { motion } from "motion/react";

export default function Intro2() {
  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      {/* Fondo técnico - Grid blueprint */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative">
        
        {/* Contenedor principal con marco técnico */}
        <div className="relative border border-gray-200 bg-white/50 backdrop-blur-sm p-8 md:p-12 lg:p-16">
          
          {/* Esquinas técnicas - Superior izquierda */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20"
          >
            <div className="absolute top-0 left-0 w-full h-4 border-t-2 border-l-2 border-brand-blue" />
            <div className="absolute top-0 left-0 w-4 h-full border-t-2 border-l-2 border-brand-blue" />
            <div className="absolute top-1 left-1 w-2 h-2 bg-brand-blue" />
          </motion.div>

          {/* Esquinas técnicas - Superior derecha */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20"
          >
            <div className="absolute top-0 right-0 w-full h-4 border-t-2 border-r-2 border-brand-blue" />
            <div className="absolute top-0 right-0 w-4 h-full border-t-2 border-r-2 border-brand-blue" />
            <div className="absolute top-1 right-1 w-2 h-2 bg-brand-blue" />
          </motion.div>

          {/* Esquinas técnicas - Inferior izquierda */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 left-0 w-16 h-16 md:w-20 md:h-20"
          >
            <div className="absolute bottom-0 left-0 w-full h-4 border-b-2 border-l-2 border-brand-blue" />
            <div className="absolute bottom-0 left-0 w-4 h-full border-b-2 border-l-2 border-brand-blue" />
            <div className="absolute bottom-1 left-1 w-2 h-2 bg-brand-blue" />
          </motion.div>

          {/* Esquinas técnicas - Inferior derecha */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20"
          >
            <div className="absolute bottom-0 right-0 w-full h-4 border-b-2 border-r-2 border-brand-blue" />
            <div className="absolute bottom-0 right-0 w-4 h-full border-b-2 border-r-2 border-brand-blue" />
            <div className="absolute bottom-1 right-1 w-2 h-2 bg-brand-blue" />
          </motion.div>

          {/* Coordenadas técnicas - Superior izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -top-3 left-6 md:left-8 bg-white px-2 text-[10px] md:text-xs font-mono text-gray-500 tracking-wider"
          >
            SEC-01
          </motion.div>

          {/* Coordenadas técnicas - Superior derecha */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -top-3 right-6 md:right-8 bg-white px-2 text-[10px] md:text-xs font-mono text-gray-500 tracking-wider"
          >
            D-2006
          </motion.div>

          {/* Coordenadas técnicas - Inferior izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-3 left-6 md:left-8 bg-white px-2 text-[10px] md:text-xs font-mono text-gray-500 tracking-wider"
          >
            QA-AER
          </motion.div>

          {/* Coordenadas técnicas - Inferior derecha */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -bottom-3 right-6 md:right-8 bg-white px-2 text-[10px] md:text-xs font-mono text-gray-500 tracking-wider"
          >
            REV-A
          </motion.div>

          {/* Marcadores laterales - Izquierda */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8"
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
            className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-8"
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
          <div className="relative z-10">
            
            {/* Badge superior */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-center mb-10"
            >
              <span className="inline-block text-xs md:text-sm tracking-[0.25em] text-gray-500 font-medium uppercase relative">
                <span className="inline-block px-3 py-1 border border-gray-200 bg-white">
                  Sistemas de ingeniería avanzada
                </span>
              </span>
            </motion.div>

            {/* Logo + Título */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10"
            >
              {/* Logo */}
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="Quandum Aerospace"
                  className="h-12 md:h-14 lg:h-16"
                />
                <div className="absolute inset-0 bg-brand-blue/5 blur-2xl scale-150" />
              </div>

              {/* Título */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] text-center sm:text-left">
                <span className="font-semibold text-brand-blue">
                  QUANDUM
                </span>
                {" "}
                <span className="font-semibold bg-gradient-to-r from-brand-pink via-red-400 to-red-700 bg-clip-text text-transparent">
                  AEROSPACE
                </span>
              </h1>
            </motion.div>

            {/* Línea técnica de medición */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-10 origin-center relative"
            >
              {/* Marcas de medición */}
              <div className="absolute top-0 left-1/4 w-px h-2 bg-gray-300 -translate-y-1/2" />
              <div className="absolute top-0 left-1/2 w-px h-3 bg-brand-blue -translate-y-1/2" />
              <div className="absolute top-0 left-3/4 w-px h-2 bg-gray-300 -translate-y-1/2" />
            </motion.div>

            {/* Texto principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="text-center max-w-3xl mx-auto"
            >
              <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed font-normal">
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
              className="flex items-center justify-center gap-4 mt-10 text-xs text-gray-400 font-mono"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 border border-brand-blue" />
                <span>CERTIFIED</span>
              </div>
              <div className="w-px h-4 bg-gray-300" />
              <div className="flex items-center gap-2">
                <span>DO-178C</span>
                <div className="w-2 h-2 bg-brand-blue" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}