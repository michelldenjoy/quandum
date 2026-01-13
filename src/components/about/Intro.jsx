import { motion } from "motion/react";
import { Users, Check, Microchip } from "lucide-react"; // Ejemplo de iconos, puedes cambiar

const features = [
  {
    id: 1,
    title: "Fundación",
    text: "Desde 2006, Quandum Aerospace impulsa la ingeniería avanzada en los sectores aeroespacial, defensa e industrial. Nacida a partir de los primeros contratos con Airbus Military, la empresa consolidó un enfoque claro hacia la ingeniería de precisión y sistemas críticos.",
  },
  {
    id: 2,
    title: "Equipo Multidisciplinar",
    text: "Contamos con un equipo altamente especializado que acompaña al cliente desde las fases conceptuales hasta la entrega final, aportando asesoramiento técnico, análisis funcional y soluciones de ingeniería optimizadas.",
  },
  {
    id: 3,
    title: "Calidad y Certificación",
    text: "Aplicamos estándares internacionales rigurosos, asegurando que todos nuestros productos cumplan con normativas aeroespaciales y de defensa. La mejora continua y la fiabilidad son nuestra prioridad en cada proyecto.",
  },
];

export default function Intro() {
  return (
    <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center my-4"
        >
          <span className="text-sm tracking-[0.3em] text-white font-normal uppercase">
            Sistemas de ingeniería avanzada
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-center leading-[1.1]">
            <span className="font-medium text-white bg-clip-text text-transparent">
              Quandum{" "}
            </span>
            <span className="font-medium bg-gradient-to-r from-brand-pink via-red-400 to-red-700 bg-clip-text text-transparent ">
              Aerospace
            </span>
          </h1>

          {/* <p className="text-slate-300 text-sm md:text-base lg:text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
            Ingeniería aeronáutica de precisión, sistemas críticos y soluciones
            a medida desde 2006.
          </p> */}
        </motion.div>

        {/* Feature Blocks */}
        <div className="grid lg:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: idx * 0.2 }}
              className="bg-zinc-900/40 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                
                <span className="text-xs tracking-wider text-blue-400/60 font-light">{`0${feature.id}`}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-300 text-justify text-base leading-relaxed">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// import { motion } from "motion/react";

// export default function Intro() {
//   return (
//     <section className="relative py-20 bg-aerospace overflow-hidden">

//       <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

//         <motion.div
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.4, ease: "easeInOut" }}
//           className="h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent max-w-2xl mx-auto shadow-lg shadow-brand-blue/30"
//         />

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center my-4"
//         >
//           <span className="text-sm tracking-[0.3em] text-blue-400/80 font-light uppercase">
//           Sistemas de ingeniería avanzada
//           </span>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
//           className="mb-24 lg:mb-32"
//         >
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-center leading-[1.1]">
//             <span className="block">
//               <span className="font-extralight text-white bg-clip-text text-transparent">Quandum</span>
//             </span>
//             <span className="block">
//               <span className="bg-gradient-to-r from-brand-pink via-red-400 to-red-700 bg-clip-text text-transparent font-normal">
//                 Aerospace
//               </span>
//             </span>
//           </h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="text-center text-slate-400 text-sm md:text-base mt-6 tracking-wide -mb-6 font-light"
//           >
//             Sistemas críticos · Ingeniería de precisión · Desde 2006
//           </motion.p>
//         </motion.div>

//         <div className="max-w-6xl mx-auto">

//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.9, delay: 0.3 }}
//               className="space-y-6"
//             >

//               <div className="flex items-center gap-4 mb-6">
//                 <div className="w-12 h-[1px] bg-blue-500/50"></div>
//                 <span className="text-xs tracking-wider text-blue-400/60 font-light">01</span>
//               </div>

//               <p className="text-base text-justify md:text-lg lg:text-xl text-slate-300 leading-relaxed font-light">
//                 Desde 2006, Quandum Aerospace impulsa la <span className="text-slate-100">ingeniería avanzada</span> en los
//                 sectores aeroespacial, defensa e industrial, diseñando y
//                 desarrollando dispositivos electrónicos, optoelectrónicos y
//                 soluciones tecnológicas de alta fiabilidad. Nacida a partir de los
//                 primeros contratos con Airbus Military, la empresa consolidó un
//                 enfoque claro hacia la <span className="text-slate-100">ingeniería de precisión</span> y el desarrollo de
//                 sistemas críticos.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.9, delay: 0.5 }}
//               className="space-y-6"
//             >

//               <div className="flex items-center gap-4 mb-6">
//                 <div className="w-12 h-[1px] bg-blue-500/50"></div>
//                 <span className="text-xs tracking-wider text-blue-400/60 font-light">02</span>
//               </div>

//               <p className="text-base text-justify md:text-lg lg:text-xl text-slate-300 leading-relaxed font-light">
//                 Con un <span className="text-slate-100">equipo multidisciplinar altamente especializado</span>, acompañamos
//                 al cliente desde las primeras fases conceptuales hasta la entrega
//                 final, aportando asesoramiento técnico, análisis funcional y
//                 soluciones de ingeniería optimizadas. Nuestro enfoque combina rigor
//                 técnico, innovación constante y una sólida cultura de fiabilidad
//                 orientada a industrias donde la <span className="text-slate-100">seguridad y el rendimiento</span> son
//                 innegociables.
//               </p>
//             </motion.div>
//           </div>

//         </div>

//         <motion.div
//           initial={{ scaleX: 0, opacity: 0 }}
//           whileInView={{ scaleX: 1, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.6, delay: 0.3, ease: "easeInOut" }}
//           className="mt-14 lg:mt-22 relative"
//         >
//           <div className="h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent max-w-2xl mx-auto shadow-lg shadow-brand-blue/30" />
//           <div className="absolute inset-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent max-w-4xl mx-auto blur-sm" />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="mt-12 text-center"
//         >
//           <p className="text-slate-600 text-xs tracking-[0.2em] font-light uppercase">
//             Ingeniería aeroespacial de precisión
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
