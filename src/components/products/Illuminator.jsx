import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const products = [
  {
    id: 1,
    title: "IR Illuminator SubSystem",
    subtitle: "IRILL",
    image: "/illuminator.jpg",
  },
  {
    id: 2,
    title: "Nozzle",
    subtitle: "Subtitulo",
    image: "/nozzle.jpg",
  },
  {
    id: 3,
    title: "Encoder",
    subtitle: "Subtitulo",
    image: "/encoder.jpg",
  },
  {
    id: 4,
    title: "Radiation",
    subtitle: "Subtitulo",
    image: "/radiation.jpg",
  },
];

export default function Illuminator() {
  const [activeProduct, setActiveProduct] = useState(products[0]);

  return (
    <section className="relative w-full my-20 py-40 bg-gray-100">
      {/* Fondo grande con animación */}
      <AnimatePresence mode="wait">
        <motion.img
          key={activeProduct.id}
          src={activeProduct.image}
          alt={activeProduct.title}
          className="absolute inset-0 w-full h-full object-cover z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {/* Overlay oscuro para contraste */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Contenedor de cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer relative p-6 bg-black/40 rounded-xl flex flex-col justify-end h-64 hover:bg-black/30 transition-all duration-300"
            onMouseEnter={() => setActiveProduct(product)}
            onMouseLeave={() => setActiveProduct(products[0])} // opcional: vuelve al default
          >
            <h3 className="text-white text-xl font-bold mb-1">{product.title}</h3>
            <p className="text-white/80 text-sm">{product.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
