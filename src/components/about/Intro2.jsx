import { motion } from "framer-motion";

export default function Intro2() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Patrón de fondo: Rejilla técnica de ingeniería */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_100%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="relative border border-gray-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.02)] px-8 py-16 md:px-20 md:py-20">
          
          {/* Marcadores de Calibración (Esquinas Técnicas) */}
          {["tl", "tr", "bl", "br"].map((pos) => (
            <div
              key={pos}
              className={`absolute w-4 h-4 border-gray-300 ${
                pos.includes("t") ? "top-4" : "bottom-4"
              } ${pos.includes("l") ? "left-4" : "right-4"} ${
                pos === "tl" ? "border-t border-l" : 
                pos === "tr" ? "border-t border-r" : 
                pos === "bl" ? "border-b border-l" : "border-b border-r"
              }`}
            />
          ))}


          <div className="relative z-10">
            {/* Encabezado: Logo y Título */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 mb-8"
              >
                <img
                  src="/logo.png"
                  alt="Quandum Aerospace"
                  className="h-10 md:h-12  transition-all duration-500"
                />
                <div className="w-px h-10 bg-gray-200" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                <span className="font-semibold text-brand-blue">
                  Quandum
                </span>{" "}
                <span className="font-semibold bg-gradient-to-r from-brand-pink via-red-500 to-red-700 bg-clip-text text-transparent">
                  Aerospace
                </span>
              </h1>
              </motion.div>
              
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                viewport={{ once: true }}
                className="h-1 bg-brand-blue mx-auto"
              />
            </div>

            {/* Texto Principal: Justificado y con ritmo de lectura */}
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="grid md:grid-cols-12 gap-10 items-start"
              >
                <div className="md:col-span-1 text-brand-blue font-mono text-sm hidden md:block">
                  [01]
                </div>
                <div className="md:col-span-11">
                  <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-justify font-light">
                    Empresa de ingeniería especializada en el <span className="text-black font-semibold">diseño, desarrollo y fabricación</span> de sistemas electrónicos y optoelectrónicos de alta fiabilidad. 
                    Desde 2006, nuestra trayectoria se define por la participación en programas críticos de los sectores <span className="text-brand-blue font-semibold uppercase tracking-wider text-sm">Aeroespacial y Defensa</span>.
                  </p>
                </div>

                <div className="md:col-span-1 text-brand-blue font-mono text-sm hidden md:block">
                  [02]
                </div>
                <div className="md:col-span-11">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">
                    Cubrimos el ciclo de vida completo del sistema: desde la definición funcional hasta la validación final. Operamos bajo estándares de seguridad <span className="text-black font-medium uppercase">DO-178C</span> y <span className="text-black font-medium uppercase">DO-254</span>, garantizando una excelencia técnica respaldada por nuestras certificaciones <span className="border-b border-brand-blue text-black">EN 9100 e ISO 9001</span>.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Especificaciones Técnicas (Footer de la sección) */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap justify-center gap-x-12 gap-y-4"
            >
              {[
                { label: "Founded", value: "2006" },
                { label: "Standards", value: "DO-178C / DO-254" },
                { label: "Quality", value: "EN 9100 / ISO 9001" },
                { label: "Compliance", value: "REACH / RoHS" }
              ].map((spec, i) => (
                <div key={i} className="flex flex-col items-center md:items-start">
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-400">{spec.label}</span>
                  <span className="text-xs font-bold text-black tracking-widest">{spec.value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}