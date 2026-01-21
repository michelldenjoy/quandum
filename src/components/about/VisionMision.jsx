import { motion } from "motion/react";

export default function VisionMision() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mt-10 mx-auto px-6 sm:px-10 md:px-16 lg:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* VISIÓN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
              <div className="flex-1">
                {/*TITULO PRINCIPAL*/}
                {/* <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black" />
                    <div className="w-1 h-1 bg-gray-400" />
                    <div className="w-1 h-1 bg-gray-300" />
                  </div>
                  <span className="text-[13px] tracking-[0.3em] text-gray-400 font-medium uppercase">
                    Sectores
                  </span>
                </div> */}

                {/* TITULO PRINCIPAL */}
                <h3 className="text-3xl md:text-5xl lg:text-4xl font-extralight text-white tracking-tight leading-[1.1]">
                  Nuestra 
                  <br />
                  <span className="font-normal text-4xl md:text-5xl lg:text-5xl bg-gradient-to-r from-brand-blue via-slate-200 to-brand-blue bg-clip-text text-transparent  animate-gradient bg-[length:200%_auto]">Visión</span>
                </h3>
              </div>
            
            <p className="text-slate-100 text-base  text-justify leading-relaxed">
              Ser un referente internacional en ingeniería avanzada para sistemas críticos, aportando soluciones tecnológicas que impulsen el progreso en los sectores aeroespacial, defensa e industrial.
              <br />
              <br />
              Desarrollamos tecnología fiable, precisa y sostenible, diseñada para operar en los entornos más exigentes, donde la seguridad, el rendimiento y la calidad no admiten concesiones. Creemos en una ingeniería que no solo resuelve desafíos técnicos, sino que construye confianza a largo plazo.
            </p>
          </motion.div>

          {/* MISIÓN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
                <h3 className="text-3xl md:text-5xl lg:text-4xl font-extralight text-white tracking-tight leading-[1.1]">
                  Nuestra 
                  <br />
                  <span className="font-normal text-4xl md:text-5xl lg:text-5xl bg-gradient-to-r from-brand-blue via-slate-200 to-brand-blue bg-clip-text text-transparent  animate-gradient bg-[length:200%_auto]">Misión</span>
                </h3>
            
            <p className="text-slate-100 text-base  text-justify leading-relaxed">
              Diseñar, desarrollar y validar soluciones tecnológicas a medida, acompañando a nuestros clientes en todo el ciclo de vida del proyecto, desde la fase conceptual hasta la entrega final.
              <br />
              <br />
              Trabajamos bajo estrictos estándares internacionales, aplicando rigor técnico, innovación constante y una cultura de excelencia para garantizar que cada sistema cumpla su misión de forma robusta, segura y eficiente. En Quandum, entendemos cada proyecto como único y asumimos la responsabilidad de convertir requisitos complejos en soluciones fiables y certificables.
            </p>
          </motion.div>

        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </section>
  );
}