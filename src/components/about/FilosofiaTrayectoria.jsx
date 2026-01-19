// import { Star } from "lucide-react";
// import { motion } from "motion/react";
// import StarfieldNebula from "../3d/StarfieldNebula.jsx";

// export default function FilosofiaTrayectoria() {
//   return (
//     <section className="w-full relative  overflow-hidden">
//       <StarfieldNebula />
      
//       <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-40 space-y-32">

        
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="grid grid-cols-1 lg:grid-cols-2 bg-zinc-900/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 gap-16 items-center"
//         >
         
//           <div className="space-y-6">
//             <div className="flex items-center gap-4 mb-6">
//               <div className="w-12 h-[1px] bg-blue-500/50"></div>
//               <span className="text-xs tracking-wider text-blue-400/60 font-light">01</span>
//             </div>

//             <h2 className="text-4xl md:text-5xl font-light text-white leading-tight tracking-tight">
//               Nuestra <span className="bg-gradient-to-r from-blue-100 via-blue-300 to-cyan-200 bg-clip-text text-transparent">Filosofía</span>
//             </h2>

//             <p className="text-lg text-slate-300 leading-relaxed font-light">
//               Nos mueve una idea simple:
//               <span className="font-normal text-white">
//                 {" "}
//                 la ingeniería de calidad construye el futuro.
//               </span>
//             </p>

//             <p className="text-base md:text-lg text-justify text-slate-300 leading-relaxed font-light">
//               Cada proyecto lo abordamos con una combinación única de rigor
//               técnico, innovación constante y pensamiento crítico. Nuestros
//               desarrollos se guían por estándares internacionales: DO-178C,
//               DO-254, DO-160, MIL-STD, que aseguran que cada sistema que
//               diseñamos cumple con los niveles más exigentes de seguridad y
//               rendimiento.
//             </p>
//           </div>

         
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-950/40 via-slate-900/20 to-cyan-950/40 border border-blue-500/10"
//           >
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1.5 }}
//               className="absolute inset-0"
//             >
              
//               <motion.div
//                 animate={{ y: [-20, 20, -20] }}
//                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute top-10 left-10 w-24 h-24 bg-blue-400/10 rounded-xl backdrop-blur-md border border-blue-400/20"
//               />

//               <motion.div
//                 animate={{ y: [20, -20, 20] }}
//                 transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute bottom-10 right-16 w-32 h-32 bg-cyan-400/10 rounded-full backdrop-blur-md border border-cyan-400/20"
//               />

//               <motion.div
//                 animate={{ rotate: [0, 180, 360] }}
//                 transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
//                 className="absolute inset-0 m-auto w-40 h-40 border border-blue-300/20 rounded-3xl"
//               />
//             </motion.div>
//           </motion.div>
//         </motion.div>

        
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="grid grid-cols-1 lg:grid-cols-2 bg-zinc-900/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 gap-16 items-center"
//         >
          
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, amount: 0.4 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl order-last lg:order-first bg-gradient-to-tr from-cyan-950/40 via-slate-900/20 to-blue-950/40 border border-cyan-500/10"
//           >
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1.5 }}
//               className="absolute inset-0"
//             >
//               <motion.div
//                 animate={{ x: [-15, 15, -15] }}
//                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute top-8 right-10 w-28 h-28 bg-cyan-400/10 rounded-full backdrop-blur-md border border-cyan-400/20"
//               />

//               <motion.div
//                 animate={{ rotate: [0, 90, 180, 360] }}
//                 transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
//                 className="absolute bottom-10 left-10 w-36 h-36 border border-blue-400/20 rounded-2xl"
//               />
//             </motion.div>
//           </motion.div>

          
//           <div className="space-y-6">
//             <div className="flex items-center gap-4 mb-6">
//               <div className="w-12 h-[1px] bg-blue-500/50"></div>
//               <span className="text-xs tracking-wider text-blue-400/60 font-light">02</span>
//             </div>

//             <h2 className="text-4xl md:text-5xl font-light text-white leading-tight tracking-tight">
//               Nuestra <span className="bg-gradient-to-r from-blue-100 via-blue-200 to-cyan-200 bg-clip-text text-transparent">Trayectoria</span>
//             </h2>

//             <p className="text-base md:text-lg text-justify text-slate-300 leading-relaxed font-light">
//               A lo largo de dos décadas hemos participado en programas
//               estratégicos para defensa, aeronáutica y sectores industriales de
//               alta exigencia, siempre manteniendo una cultura de:
//             </p>

//             <ul className="space-y-3 text-base md:text-lg text-slate-300 font-light">
//               <li className="flex items-start gap-3">
//                 <span className="text-cyan-400 mt-1">•</span>
//                 <span>Excelencia técnica</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-cyan-400 mt-1">•</span>
//                 <span>Mejora continua</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-cyan-400 mt-1">•</span>
//                 <span>Innovación sostenible</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-cyan-400 mt-1">•</span>
//                 <span>Compromiso absoluto con la fiabilidad</span>
//               </li>
//             </ul>

//             <p className="text-base md:text-lg text-slate-300 leading-relaxed font-light">
//               No solo construimos soluciones avanzadas:
//               <span className="font-normal text-white"> construimos confianza.</span>
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }







import { motion } from "motion/react";

export default function FilosofiaTrayectoria() {
  return (
    <section className="relative py-24">
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
            <h3 className="text-4xl uppercase sm:text-3xl md:text-4xl  tracking-tight text-white">
              Nuestra{" "}
              <span className="bg-gradient-to-r from-brand-blue via-slate-200 to-brand-blue bg-clip-text text-transparent  animate-gradient bg-[length:200%_auto]">
                FILOSOFÍA
              </span>
            </h3>
            
            <p className="text-slate-100 text-base  text-justify leading-relaxed">
            Cada proyecto lo abordamos con una combinación única de rigor
              técnico, innovación constante y pensamiento crítico. Nuestros
              desarrollos se guían por estándares internacionales: DO-178C,
              DO-254, DO-160, MIL-STD, que aseguran que cada sistema que
              diseñamos cumple con los niveles más exigentes de seguridad y
              rendimiento.
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
            <h3 className="text-4xl uppercase sm:text-3xl md:text-4xl  tracking-tight text-white">
              Nuestra{" "}
              <span className="bg-gradient-to-r from-brand-blue via-slate-200 to-brand-blue bg-clip-text text-transparent  animate-gradient bg-[length:200%_auto]">
                TRAYECTORIA
              </span>
            </h3>
            
            <p className="text-slate-100 text-base  text-justify leading-relaxed">
            A lo largo de dos décadas hemos participado en programas
              estratégicos para defensa, aeronáutica y sectores industriales de
              alta exigencia, siempre manteniendo una cultura de: <br />
              <ul className="space-y-3 text-base md:text-lg text-slate-300 font-light">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 ">•</span>
                <span>Excelencia técnica</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 ">•</span>
                <span>Mejora continua</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 ">•</span>
                <span>Innovación sostenible</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 ">•</span>
                <span>Compromiso absoluto con la fiabilidad</span>
              </li>
            </ul>
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
