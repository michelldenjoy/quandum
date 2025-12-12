import { motion } from "motion/react";

export default function Intro() {
  return (
    <section className="relative w-full bg-black text-white py-20 overflow-hidden">
      {/* Fondo con degradado radial muy sutil para profundidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-800 to-black" />
      
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">

        {/* TÍTULO – Impacto brutal pero elegante */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-20 lg:mb-28"
        >
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-normal tracking-tighter text-center leading-none">
            <span className="bg-gradient-to-r from-brand-blue via-slate-100 to-brand-blue bg-clip-text text-transparent font-bold">
              Quandum{" "}
            </span>
            <span className="bg-gradient-to-r from-brand-pink via-red-500 to-red-700 bg-clip-text text-transparent font-bold">
              Aerospace
            </span>
          </h1>
        </motion.div>

        {/* DOS PÁRRAFOS EN COLUMNA (side-by-side en desktop) */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 max-w-none">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed tracking-wide font-light hyphens-auto text-justify"
          >
            Desde 2006, Quandum Aerospace impulsa la ingeniería avanzada en los
            sectores aeroespacial, defensa e industrial, diseñando y desarrollando
            dispositivos electrónicos, optoelectrónicos y soluciones tecnológicas
            de alta fiabilidad. Nacida a partir de los primeros contratos con
            Airbus Military, la empresa consolidó un enfoque claro hacia la
            ingeniería de precisión y el desarrollo de sistemas críticos.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed tracking-wide font-light hyphens-auto text-justify"
          >
            Con un equipo multidisciplinar altamente especializado, acompañamos al
            cliente desde las primeras fases conceptuales hasta la entrega final,
            aportando asesoramiento técnico, análisis funcional y soluciones de
            ingeniería optimizadas. Nuestro enfoque combina rigor técnico,
            innovación constante y una sólida cultura de fiabilidad orientada a
            industrias donde la seguridad y el rendimiento son innegociables.
          </motion.p>
        </div>

        {/* LÍNEA DE CIERRE – Ahora es protagonista, elegante y poderosa */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: 1, ease: "easeInOut" }}
          className="mt-20 lg:mt-20 h-px bg-gradient-to-r from-transparent via-brand-blue to-transparent 
                     max-w-5xl mx-auto shadow-2xl shadow-brand-blue/20"
          style={{
            backgroundImage: "linear-gradient(to right, transparent, #3b82f6 30%, #ef5555 70%, transparent)",
            height: "2px",
          }}
        />

        {/* Pequeño detalle extra: año de fundación flotando sutilmente debajo de la línea */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 2.2 }}
          className="mt-10 text-center text-slate-600 text-sm tracking-widest font-light uppercase"
        >
          Desde 2006 · Ingeniería de sistemas críticos
        </motion.div>
      </div>
    </section>
  );
}