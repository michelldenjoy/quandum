import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../products/products"; 

export default function ProjectIMG() {
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