import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section className="relative w-full pt-32 overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-slate-900 to-black/40 pointer-events-none" />

      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none" />


      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7"
          >
            <span className="block text-sm tracking-[0.4em] font-semibold text-slate-300 uppercase mb-8">
              Trayectoria Consolidada
            </span>

            <h1 className="bg-gradient-to-r text-4xl md:text-6xl lg:text-7xl from-red-300 via-white to-sky-300 bg-clip-text font-thin text-transparent">
              Ingeniería de Precisión
              <span className="block mt-2 text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.05] tracking-tight">
                Elevando los Estándares de Aeronavegabilidad
              </span>
            </h1>
          </motion.div>

          {/* Derecha */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 lg:mt-20"
          >
            <div
              className="space-y-6 border-l border-white/10 pl-8 
                            backdrop-blur-md bg-white/[0.02] 
                            rounded-2xl p-8 
                            shadow-[0_0_60px_rgba(59,130,246,0.05)]"
            >
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                Fundada tras la consolidación de contratos estratégicos con
                <span className="text-white font-medium italic">
                  {" "}
                  Airbus Defence & Space
                </span>
                , Quandum Aerospace se posiciona como un partner de confianza en
                el sector de defensa y aeronáutica.
              </p>

              <p className="text-base text-gray-400 leading-relaxed">
                Nos especializamos en el ciclo de vida completo del producto:
                desde la especificación inicial hasta la certificación final de
                sistemas aptos para el vuelo
                <span className="text-blue-400/80 font-mono text-sm">
                  {" "}
                  (Airworthy Systems)
                </span>
                .
              </p>

              <div className="pt-6">
                <p className="text-[10px] tracking-[0.2em] text-gray-500 uppercase mb-4">
                  Programas de Referencia
                </p>

                <div className="flex flex-wrap gap-4">
                  {["A-310MRTT", "A-330MRTT", "C-295"].map((program) => (
                    <span
                      key={program}
                      className="px-4 py-1.5 rounded-full text-xs font-mono
                                 border border-blue-400/20 
                                 bg-blue-500/5 
                                 text-blue-300
                                 backdrop-blur-sm
                                 hover:bg-blue-500/10
                                 transition-colors duration-300"
                    >
                      {program}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
