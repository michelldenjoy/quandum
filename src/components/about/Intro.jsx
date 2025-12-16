import { motion } from "motion/react";

export default function Intro() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Fondo técnico aeroespacial */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.4)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600 rounded-full blur-[120px]"></div>
      </div>
      
      {/* Viñeta sutil para profundidad */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Línea decorativa */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent max-w-2xl mx-auto shadow-lg shadow-brand-blue/30"
        />
        
        {/* titulo entrada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center my-4"
        >
          <span className="text-sm tracking-[0.3em] text-blue-400/80 font-light uppercase">
            Advanced Engineering Systems
          </span>
        </motion.div>

        {/* TÍTULO*/}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mb-24 lg:mb-32"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-center leading-[1.1]">
            <span className="block mb-2">
              <span className="text-white font-extralight">Quandum</span>
            </span>
            <span className="block">
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent font-normal">
                Aerospace
              </span>
            </span>
          </h1>
          
         
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center text-slate-400 text-sm md:text-base mt-6 tracking-wide font-light"
          >
            Sistemas críticos · Ingeniería de precisión · Desde 2006
          </motion.p>
        </motion.div>

        
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Texto 1 */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-blue-500/50"></div>
                <span className="text-xs tracking-wider text-blue-400/60 font-light">01</span>
              </div>
              
              <p className="text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed font-light">
                Desde 2006, Quandum Aerospace impulsa la <span className="text-slate-100">ingeniería avanzada</span> en los
                sectores aeroespacial, defensa e industrial, diseñando y
                desarrollando dispositivos electrónicos, optoelectrónicos y
                soluciones tecnológicas de alta fiabilidad. Nacida a partir de los
                primeros contratos con Airbus Military, la empresa consolidó un
                enfoque claro hacia la <span className="text-slate-100">ingeniería de precisión</span> y el desarrollo de
                sistemas críticos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="space-y-6"
            >
              {/* Texto 2 */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-blue-500/50"></div>
                <span className="text-xs tracking-wider text-blue-400/60 font-light">02</span>
              </div>
              
              <p className="text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed font-light">
                Con un <span className="text-slate-100">equipo multidisciplinar altamente especializado</span>, acompañamos
                al cliente desde las primeras fases conceptuales hasta la entrega
                final, aportando asesoramiento técnico, análisis funcional y
                soluciones de ingeniería optimizadas. Nuestro enfoque combina rigor
                técnico, innovación constante y una sólida cultura de fiabilidad
                orientada a industrias donde la <span className="text-slate-100">seguridad y el rendimiento</span> son
                innegociables.
              </p>
            </motion.div>
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-16 border-t border-slate-800/50"
          >
            {[
              { value: "2006", label: "Año de fundación" },
              { value: "20+", label: "Años de experiencia" },
              { value: "100%", label: "Sistemas críticos" },
              { value: "DO-178 / DO-254", label: "Normativas aeronáuticas" }
            ].map((stat, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-light text-blue-400 mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-slate-500 tracking-wide uppercase font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Línea de cierre*/}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.3, ease: "easeInOut" }}
          className="mt-24 lg:mt-32 relative"
        >
          <div className="h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent max-w-2xl mx-auto shadow-lg shadow-brand-blue/30" />
          <div className="absolute inset-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent max-w-4xl mx-auto blur-sm" />
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 text-xs tracking-[0.2em] font-light uppercase">
            Ingeniería aeroespacial de precisión
          </p>
        </motion.div>
      </div>
    </section>
  );
}