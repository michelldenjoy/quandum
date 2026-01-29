import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { products } from "../products/products";
import { useNavigate } from "react-router-dom"; // o Next router

export default function ProjectIMG() {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-full overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-start gap-8">
            <div className="flex-1">
              {/* **********************************TITULO PRINCIPAL***************************** */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm tracking-[0.3em] text-gray-500 font-medium uppercase">
                  Experiencia
                </span>
              </div>

              {/* TITULO PRINCIPAL */}
              <h2 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extralight text-white tracking-tight leading-[1.1]">
                Nuestros
                <br />
                <span className="font-semibold">Proyectos</span>
              </h2>

              <p className="text-gray-600 mt-6 text-base md:text-lg leading-relaxed max-w-4xl">
                Nos enfocamos en desarrollar proyectos que fortalecen la
                seguridad, optimizan la eficiencia y fomentan la innovación en
                cada solución, para llevar la ingeniería especializada en vuelo
                más allá de los límites actuales
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* HERO PROJECTION (solo en hover) */}
      <AnimatePresence>
        {hovered && (
          <motion.img
            key={hovered.id}
            src={hovered.hero}
            className="absolute inset-0 w-full h-full object-cover z-0"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1.06 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* Oscurecimiento general SOLO cuando hay hover */}
      {hovered && <div className="absolute inset-0 bg-black/10 z-[1]" />}

      {/* GRID */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-end pb-24">
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-px w-full bg-white/10">
          {products.map((product) => {
            const isActive = hovered?.id === product.id;

            return (
              <div
                key={product.id}
                onMouseEnter={() => setHovered(product)}
                onMouseLeave={() => setHovered(null)}
                className={`relative h-64 overflow-hidden cursor-pointer transition-opacity duration-300 
                ${hovered && !isActive ? "opacity-5" : "opacity-100"}`}
              >
                {/* TILE IMAGE */}
                <img
                  src={product.hero}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* TILE OVERLAY */}
                <div className="absolute inset-0 bg-black/20" />

                {/* CONTENT */}
                <div className="relative h-full p-6 flex flex-col justify-between">
                  <h3 className="text-white text-lg font-medium">
                    {product.title}
                  </h3>

                  <AnimatePresence>
                    {isActive && (
                      <motion.button
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => navigate(`/proyectos/destacados/${product.id}`)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-white"
                      >
                        
                        Read more <ArrowUpRight size={16} />
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
