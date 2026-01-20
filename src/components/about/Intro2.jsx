import { motion } from "motion/react";

export default function Intro2() {
  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
     
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
       
        <div className="relative border border-gray-200 bg-white/70 backdrop-blur-sm px-8 py-12 md:px-14 md:py-16">

          {/* Esquinas técnicas */}
          {["tl", "br"].map((pos, i) => (
            <motion.div
              key={pos}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`absolute ${pos === "tl" ? "top-0 left-0" : "bottom-0 right-0"} w-16 h-16`}
            >
              <div
                className={`absolute ${
                  pos === "tl"
                    ? "top-0 left-0 border-t-2 border-l-2"
                    : "bottom-0 right-0 border-b-2 border-r-2"
                } w-full h-4 border-brand-blue`}
              />
              <div
                className={`absolute ${
                  pos === "tl"
                    ? "top-0 left-0 border-t-2 border-l-2"
                    : "bottom-0 right-0 border-b-2 border-r-2"
                } w-4 h-full border-brand-blue`}
              />
            </motion.div>
          ))}

          
          <div className="absolute -top-3 left-6 bg-white px-2 text-[11px] font-mono tracking-wider text-gray-500">
            SEC-ABOUT ·
          </div>

          {/* CONTENIDO */}
          <div className="relative z-10 text-center">

            {/* Badge  */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-block text-[11px] tracking-[0.25em] uppercase text-gray-500 border border-gray-200 px-4 py-1">
                Advanced Engineering Systems
              </span>
            </motion.div>

            {/* Logo, Nombre */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex items-center justify-center md:gap-2 lg:gap-2 mb-10"
            >
              <img
                src="/logo.png"
                alt="Quandum Aerospace"
                className="h-12 md:h-14"
              />

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                <span className="font-semibold text-brand-blue">
                  QUANDUM
                </span>{" "}
                <span className="font-semibold bg-gradient-to-r from-brand-pink via-red-400 to-red-700 bg-clip-text text-transparent">
                  AEROSPACE
                </span>
              </h1>
            </motion.div>

            
            <div className="relative h-px bg-gray-300 max-w-xl mx-auto mb-10">
              <span className="absolute left-1/2 -top-1.5 w-px h-3 bg-brand-blue" />
            </div>

            {/* Texto */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="max-w-4xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed"
            >
              Quandum Aerospace es una empresa de ingeniería especializada en el
              diseño, desarrollo y fabricación de sistemas electrónicos y
              optoelectrónicos de alta fiabilidad para aplicaciones
              aeroespaciales, defensa e industriales. Desde 2006, participamos en
              programas donde la precisión, la seguridad y la certificación son
              requisitos fundamentales. Nuestro enfoque integral cubre todo el
              ciclo de vida del sistema, desde la definición funcional hasta la
              validación final, respaldado por un Sistema de Gestión de la
              Calidad conforme a EN 9100 e ISO 9001.
            </motion.p>

            {/* Footer */}
            <div className="mt-10 flex justify-center gap-6 text-[11px] font-mono text-gray-400">
              <span>EN 9100</span>
              <span>ISO 9001</span>
              <span>DO-178C</span>
              <span>DO-254</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
