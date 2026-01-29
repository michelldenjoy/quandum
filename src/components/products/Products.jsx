{/* ***************************************************************************** MODAL REVEAL ***************************************************************************** */}
// import { useState } from "react";
// import { motion, AnimatePresence } from "motion/react";

// const products = [
//   {
//     id: 1,
//     title: "IR Illuminator SubSystem",
//     subtitle: "IRILL",
//     description: `La plataforma del A-330 incorpora el Air Refuelling Boom System (ARBS), que permite el repostaje en vuelo. El sistema IRILL es un subsistema integrado en BEVS que mejora la visión nocturna para el operador durante repostajes en vuelo. Certificación de software: DO178 DALB.`,
//     images: [
//       "/products/illuminator.jpg",
//       "/products/illuminator2.jpg",
      
//     ]
//   },
//   {
//     id: 2,
//     title: "Nozzle",
//     subtitle: "Subtitulo",
//     description: "Descripción para el Nozzle.",
//     images: [
//       "/products/nozzle.jpg",
//       "/products/nozzle_side.jpg"
//     ]
//   },
//   {
//     id: 3,
//     title: "Encoder",
//     subtitle: "Subtitulo",
//     description: "Descripción para el Encoder.",
//     images: [
//       "/products/encoder1.jpg",
//       "/products/encoder2.jpg"
//     ]
//   },
//   {
//     id: 4,
//     title: "Radiation",
//     subtitle: "Subtitulo",
//     description: "Descripción para el Radiation.",
//     images: [
//       "/products/radiation.jpg",
//       "/products/radiation_side.jpg"
//     ]
//   }
// ];

// export default function Products() {
//   const [activeProduct, setActiveProduct] = useState(products[0]);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <section className="relative w-full my-20 py-40">
      
//       <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="group cursor-pointer relative p-6 bg-black/40 rounded-xl flex flex-col justify-end h-64 hover:bg-black/30 transition-all duration-300"
//             onMouseEnter={() => setActiveProduct(product)}
//             onClick={() => setIsModalOpen(true)}
//           >
//             <h3 className="text-white text-xl font-bold mb-1">{product.title}</h3>
//             <p className="text-white/80 text-sm">{product.subtitle}</p>
//           </div>
//         ))}
//       </div>

      
//       <AnimatePresence mode="wait">
//         <motion.img
//           key={activeProduct.id}
//           src={activeProduct.images[0]}
//           alt={activeProduct.title}
//           className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//         />
//       </AnimatePresence>

      
//       <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />

      
//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-8 overflow-y-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setIsModalOpen(false)}
//           >
           
//             <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-black/95 to-slate-900/95 backdrop-blur-sm" />
            
//             <motion.div
//               className="relative w-full max-w-6xl bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
//               initial={{ scale: 0.95, y: 20 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.95, y: 20 }}
//               transition={{ type: "spring", duration: 0.5 }}
//               onClick={(e) => e.stopPropagation()}
//             >
              
//               <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent" />
              
              
//               <div className="relative p-6 sm:p-8 border-b border-white/10">
//                 <div className="flex items-start justify-between gap-4">
//                   <div className="flex-1">
//                     <motion.h2 
//                       className="text-3xl sm:text-4xl font-bold text-white mb-2"
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.1 }}
//                     >
//                       {activeProduct.title}
//                     </motion.h2>
//                     <motion.p 
//                       className="text-lg sm:text-xl text-cyan-400 font-medium"
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.2 }}
//                     >
//                       {activeProduct.subtitle}
//                     </motion.p>
//                   </div>
                  
                  
//                   <button
//                     onClick={() => setIsModalOpen(false)}
//                     className="flex-shrink-0 group relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
//                     aria-label="Cerrar modal"
//                   >
//                     <svg 
//                       className="w-5 h-5 text-white/70 group-hover:text-white group-hover:rotate-90 transition-all duration-300" 
//                       fill="none" 
//                       viewBox="0 0 24 24" 
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>

              
//               <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
                
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
//                   {activeProduct.images.map((img, index) => (
//                     <motion.div
//                       key={index}
//                       className="relative group overflow-hidden rounded-xl bg-slate-800/50 border border-white/10"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.1 * index, duration: 0.4 }}
//                     >
//                       <img
//                         src={img}
//                         alt={`${activeProduct.title}-${index}`}
//                         className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
//                       />
                      
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
//                     </motion.div>
//                   ))}
//                 </div>

                
//                 <div className="relative mb-8">
//                   <div className="absolute inset-0 flex items-center">
//                     <div className="w-full border-t border-white/10"></div>
//                   </div>
//                   <div className="relative flex justify-center">
//                     <span className="px-4 text-sm text-white/50 bg-gradient-to-br from-slate-900 to-slate-950">ESPECIFICACIONES</span>
//                   </div>
//                 </div>

                
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                   className="prose prose-invert max-w-none"
//                 >
//                   <p className="text-white/80 text-base sm:text-lg leading-relaxed whitespace-pre-line">
//                     {activeProduct.description}
//                   </p>
//                 </motion.div>

//               </div>
//             </motion.div>

            
//             <style>{`
//               .custom-scrollbar::-webkit-scrollbar {
//                 width: 8px;
//               }
//               .custom-scrollbar::-webkit-scrollbar-track {
//                 background: rgba(255, 255, 255, 0.05);
//                 border-radius: 10px;
//               }
//               .custom-scrollbar::-webkit-scrollbar-thumb {
//                 background: rgba(255, 255, 255, 0.2);
//                 border-radius: 10px;
//               }
//               .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//                 background: rgba(255, 255, 255, 0.3);
//               }
//             `}</style>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }









{/* ***************************************************************************** SIDE REVEAL *********************************************************************************** */}
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../products/products"; 

export default function Products() {
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(null);

  const currentIndex = active
    ? products.findIndex((p) => p.id === active.id)
    : -1;

  const goNext = () =>
    setActive(products[(currentIndex + 1) % products.length]);

  const goPrev = () =>
    setActive(
      products[(currentIndex - 1 + products.length) % products.length]
    );

  return (
    <section className="relative w-full h-[80vh] overflow-hidden bg-black">
      
      <AnimatePresence>
        {(hovered || products[0]) && (
          <motion.img
            key={(hovered || products[0]).id}
            src={(hovered || products[0]).hero}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/50" />

      
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {products.map((product) => (
            <div
              key={product.id}
              onMouseEnter={() => setHovered(product)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setActive(product)}
              className="cursor-pointer p-6 bg-black/40  rounded-xl h-64 flex flex-col justify-end border border-white/10 hover:border-brand-blue transition"
            >
              
              <h3 className="text-white text-lg font-semibold">
                {product.title}
              </h3>
              
              <p className="text-white/70 text-sm">{product.subtitle}</p>
              
            </div>
          ))}
        </div>
      </div>

      
      <AnimatePresence>
        {active && (
          <>
            
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            />

            
            <motion.aside
              className="fixed right-0 top-0 h-full w-full md:w-[720px] bg-zinc-950 z-50 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              
              <div className="relative h-80">
                <img
                  src={active.hero}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                <button
                  onClick={() => setActive(null)}
                  className="absolute top-6 right-6 p-2 bg-black/50 rounded-full text-white hover:bg-black"
                >
                  <X />
                </button>
              </div>

              
              <div className="p-8 space-y-6">
                <h2 className="text-3xl font-bold text-white">
                  {active.title}
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  {active.description}
                </p>

                
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-slate-400 mb-2">
                    Certificaciones
                  </h4>
                  <ul className="flex gap-3">
                    {active.certifications.map((c) => (
                      <li
                        key={c}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded text-sm text-white"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div> 

                
                <div className="grid grid-cols-2 gap-4">
                  {active.gallery.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="rounded-lg object-cover h-40 w-full"
                    />
                  ))}
                </div>

               
                <div className="flex justify-between pt-6 border-t border-white/10">
                  <button
                    onClick={goPrev}
                    className="flex items-center gap-2 text-slate-300 hover:text-white"
                  >
                    <ChevronLeft /> Anterior
                  </button>
                  <button
                    onClick={goNext}
                    className="flex items-center gap-2 text-slate-300 hover:text-white"
                  >
                    Siguiente <ChevronRight />
                  </button>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}




{/* ***************************************************************************** MODAL CENTRAL ***************************************************************************** */} 
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ChevronLeft, ChevronRight } from "lucide-react";

// const products = [
//   {
//     id: 1,
//     title: "IR Illuminator SubSystem",
//     subtitle: "IRILL",
//     hero: "/products/illuminator.jpg",
//     gallery: [
//       "/products/illuminator1.jpg",
//       "/products/illuminator2.jpg",
//     ],
//     description:
//       "Sistema de iluminación por infrarrojos basado en tecnología láser, integrado en el sistema BEVS...",
//     certifications: ["DO-178 DAL B"],
//   },
//   {
//     id: 2,
//     title: "Nozzle",
//     subtitle: "Subtitulo",
//     hero: "/products/illuminator.jpg",
//     gallery: [
//       "/products/illuminator1.jpg",
//       "/products/illuminator2.jpg",
//     ],
//     description: "Descripción profesional en español para el Nozzle.",
//     certifications: ["DO-178 DAL B"],
//   },
//   {
//     id: 3,
//     title: "Encoder",
//     subtitle: "Subtitulo",
//     hero: "/products/illuminator.jpg",
//     gallery: [
//       "/products/illuminator1.jpg",
//       "/products/illuminator2.jpg",
//     ],
//     description: "Descripción profesional en español para el Encoder.",
//     certifications: ["DO-178 DAL B"],
//   },
//   {
//     id: 4,
//     title: "Radiation",
//     subtitle: "Subtitulo",
//     hero: "/products/illuminator.jpg",
//     gallery: [
//       "/products/illuminator1.jpg",
//       "/products/illuminator2.jpg",
//     ],
//     description: "Descripción profesional en español para el Radiation.",
//     certifications: ["DO-178 DAL B"],
//   }
// ];

// export default function Products() {
//   const [hovered, setHovered] = useState(null);
//   const [active, setActive] = useState(null);

//   const currentIndex = active
//     ? products.findIndex((p) => p.id === active.id)
//     : -1;

//   const goNext = () =>
//     setActive(products[(currentIndex + 1) % products.length]);

//   const goPrev = () =>
//     setActive(
//       products[(currentIndex - 1 + products.length) % products.length]
//     );

//   return (
//     <section className="relative w-full h-[80vh] overflow-hidden bg-black">
//       <AnimatePresence>
//         {(hovered || products[0]) && (
//           <motion.img
//             key={(hovered || products[0]).id}
//             src={(hovered || products[0]).hero}
//             className="absolute inset-0 w-full h-full object-cover"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.9 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.6 }}
//           />
//         )}
//       </AnimatePresence>

//       <div className="absolute inset-0 bg-black/50" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               onMouseEnter={() => setHovered(product)}
//               onMouseLeave={() => setHovered(null)}
//               onClick={() => setActive(product)}
//               className="cursor-pointer p-8 bg-black/40 backdrop-blur-md rounded-2xl h-72 flex flex-col justify-end border border-white/20 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
//             >
//               <h3 className="text-white text-xl font-bold tracking-wide">
//                 {product.title}
//               </h3>
//               <p className="text-white/60 text-base mt-2">{product.subtitle}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <AnimatePresence>
//         {active && (
//           <>
//             <motion.div
//               className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setActive(null)}
//             />

//             <motion.div
//               className="fixed inset-0 flex items-center justify-center z-50 p-6"
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               transition={{ duration: 0.4, ease: "easeInOut" }}
//             >
//               <div className="bg-zinc-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10">
//                 <div className="relative h-96">
//                   <img
//                     src={active.hero}
//                     className="absolute inset-0 w-full h-full object-cover rounded-t-3xl"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />

//                   <button
//                     onClick={() => setActive(null)}
//                     className="absolute top-4 right-4 p-3 bg-zinc-800/70 rounded-full text-white hover:bg-zinc-800 transition"
//                   >
//                     <X size={24} />
//                   </button>
//                 </div>

//                 <div className="p-10 space-y-8">
//                   <h2 className="text-4xl font-extrabold text-white tracking-tight">
//                     {active.title}
//                   </h2>
//                   <p className="text-slate-200 text-lg leading-loose">
//                     {active.description}
//                   </p>

//                   <div>
//                     <h4 className="text-base uppercase tracking-widest text-slate-400 mb-4">
//                       Certificaciones
//                     </h4>
//                     <ul className="flex flex-wrap gap-4">
//                       {active.certifications.map((c) => (
//                         <li
//                           key={c}
//                           className="px-5 py-3 bg-white/5 border border-white/10 rounded-lg text-base text-white"
//                         >
//                           {c}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {active.gallery.map((img, i) => (
//                       <img
//                         key={i}
//                         src={img}
//                         className="rounded-2xl object-cover h-64 w-full shadow-md"
//                       />
//                     ))}
//                   </div>

//                   <div className="flex justify-between pt-8 border-t border-white/10">
//                     <button
//                       onClick={goPrev}
//                       className="flex items-center gap-3 text-slate-300 hover:text-white text-lg transition"
//                     >
//                       <ChevronLeft size={24} /> Anterior
//                     </button>
//                     <button
//                       onClick={goNext}
//                       className="flex items-center gap-3 text-slate-300 hover:text-white text-lg transition"
//                     >
//                       Siguiente <ChevronRight size={24} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }






{/* ***************************************************************************** nifunifa *********************************************************************************** */} 
// import { useState, useRef } from "react";
// import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
// import { X, ChevronLeft, ChevronRight } from "lucide-react";

// const products = [
  
//   {
//     id: 1,
//     title: "IR Illuminator SubSystem",
//     subtitle: "IRILL",
//     hero: "/products/illuminator.jpg",
//     gallery: [
//       "/products/illuminator1.jpg",
//       "/products/illuminator2.jpg",
//     ],
//     description:
//       "Sistema de iluminación por infrarrojos basado en tecnología láser, integrado en el sistema BEVS...",
//     certifications: ["DO-178 DAL B"],
//   },
//   {
//     id: 2,
//     title: "Nozzle",
//     subtitle: "Subtitulo",
//     hero: "/products/nozzle.jpg",
//     gallery: [
//       "/products/illuminator1.jpg",
//       "/products/illuminator2.jpg",
//     ],
//     description: "Descripción profesional en español para el Nozzle.",
//     certifications: ["DO-178 DAL B"],
//   },
//   {
//     id: 3,
//     title: "Encoder",
//     subtitle: "Subtitulo",
//     hero: "/products/encoder.jpg",
//     gallery: [
//       "/products/illuminator1.jpg",
//       "/products/illuminator2.jpg",
//     ],
//     description: "Descripción profesional en español para el Encoder.",
//     certifications: ["DO-178 DAL B"],
//   },
//   {
//     id: 4,
//     title: "Radiation",
//     subtitle: "Subtitulo",
//     hero: "/products/radiation.jpg",
//     gallery: [
//       "/products/illuminator1.jpg",
//       "/products/illuminator2.jpg",
//     ],
//     description: "Descripción profesional en español para el Radiation.",
//     certifications: ["DO-178 DAL B"],
//   }
// ];

// function Card({ product, onSelect, isActive, hovered }) {
//   const ref = useRef(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const rotateX = useSpring(useTransform(y, [-100, 100], [5, -5]));
//   const rotateY = useSpring(useTransform(x, [-100, 100], [-5, 5]));

//   const handleMouseMove = (e) => {
//     if (!ref.current) return;
//     const rect = ref.current.getBoundingClientRect();
//     x.set(e.clientX - rect.left - rect.width / 2);
//     y.set(e.clientY - rect.top - rect.height / 2);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <motion.div
//       ref={ref}
//       className="relative cursor-pointer perspective-1000"
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       onClick={() => onSelect(product)}
//       style={{
//         rotateX: isActive ? 0 : rotateX,
//         rotateY: isActive ? 0 : rotateY,
//         scale: hovered?.id === product.id || isActive ? 1.05 : 1,
//         zIndex: isActive ? 20 : 1,
//       }}
//       transition={{ duration: 0.4 }}
//     >
//       <motion.div
//         className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/20 p-8 flex flex-col justify-end h-72 overflow-hidden shadow-2xl"
//         whileHover={{ boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)" }}
//       >
//         <h3 className="text-white text-xl font-bold tracking-wide">{product.title}</h3>
//         <p className="text-white/60 text-base mt-2">{product.subtitle}</p>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default function Products() {
//   const [hovered, setHovered] = useState(null);
//   const [active, setActive] = useState(null);

//   const currentIndex = active ? products.findIndex((p) => p.id === active.id) : -1;

//   const goNext = () => setActive(products[(currentIndex + 1) % products.length]);
//   const goPrev = () => setActive(products[(currentIndex - 1 + products.length) % products.length]);

//   return (
//     <section className="relative w-full h-[80vh] overflow-hidden bg-black">
//       <AnimatePresence>
//         {(hovered || products[0]) && (
//           <motion.img
//             key={(hovered || products[0]).id}
//             src={(hovered || products[0]).hero}
//             className="absolute inset-0 w-full h-full object-cover"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.9 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           />
//         )}
//       </AnimatePresence>

//       <div className="absolute inset-0 bg-black/60" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
//           {products.map((product) => (
//             <Card
//               key={product.id}
//               product={product}
//               onSelect={setActive}
//               isActive={active?.id === product.id}
//               hovered={hovered}
//             />
//           ))}
//         </div>
//       </div>

//       <AnimatePresence>
//         {active && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-md"
//             initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
//             animate={{ opacity: 1, scale: 1, rotateX: 0 }}
//             exit={{ opacity: 0, scale: 0.9, rotateX: -20 }}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//           >
//             <motion.div
//               className="bg-zinc-900/90 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-blue-500/30 shadow-2xl relative"
//               style={{ perspective: 1500 }}
//             >
//               <button
//                 onClick={() => setActive(null)}
//                 className="absolute top-4 right-4 z-10 p-3 bg-zinc-800/70 rounded-full text-white hover:bg-zinc-700"
//               >
//                 <X size={24} />
//               </button>

//               <div className="relative h-96">
//                 <img
//                   src={active.hero}
//                   className="absolute inset-0 w-full h-full object-cover rounded-t-3xl"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
//               </div>

//               <div className="p-10 space-y-8">
//                 <h2 className="text-4xl font-extrabold text-white tracking-tight">{active.title}</h2>
//                 <p className="text-slate-200 text-lg leading-loose">{active.description}</p>

//                 <div>
//                   <h4 className="text-base uppercase tracking-widest text-slate-400 mb-4">Certificaciones</h4>
//                   <ul className="flex flex-wrap gap-4">
//                     {active.certifications.map((c) => (
//                       <li key={c} className="px-5 py-3 bg-white/5 border border-white/10 rounded-lg text-base text-white">
//                         {c}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {active.gallery.map((img, i) => (
//                     <motion.img
//                       key={i}
//                       src={img}
//                       className="rounded-2xl object-cover h-64 w-full shadow-md"
//                       whileHover={{ scale: 1.05, rotateY: 10 }}
//                       transition={{ duration: 0.4 }}
//                     />
//                   ))}
//                 </div>

//                 <div className="flex justify-between pt-8 border-t border-white/10">
//                   <button onClick={goPrev} className="flex items-center gap-3 text-slate-300 hover:text-white text-lg">
//                     <ChevronLeft size={24} /> Anterior
//                   </button>
//                   <button onClick={goNext} className="flex items-center gap-3 text-slate-300 hover:text-white text-lg">
//                     Siguiente <ChevronRight size={24} />
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }
