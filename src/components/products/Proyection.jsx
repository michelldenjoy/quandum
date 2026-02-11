import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "motion/react";
import { products } from "../products/products"; 
import { delay } from 'motion';

const Projection = () => {

  const [hoveredId, setHoveredId] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: {  rotateY: 5, boxShadow: "0 0 20px rgba(0, 148, 255, 0.5)" },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-sky-950 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPGRlZnM+CiAgICAgICAgPHBhdHRlcm5faWQ9InBhcnRpY2xlcyIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj4KICAgICAgICAgICAgPGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjEiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjIiLz4KICAgICAgICAgICAgPGNpcmNsZSBjeD0iMjUiIGN5PSIxNSIgcj0iMSIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMyIvPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIzNSIgY3k9IjM1IiByPSIxIiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC4xIi8+CiAgICAgICAgPC9wYXR0ZXJuPgogICAgPC9kZWZzPgogICAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXJ0aWNsZXMpIiAvPgo8L3N2Zz4=')] opacity-30 animate-twinkle"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-start gap-8 mb-12"
        >
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm tracking-[0.3em] text-blue-300 font-medium uppercase">
                Experiencia
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extralight text-white tracking-tight leading-[1.1] font-montserrat">
              Nuestros
              <br />
              <span className="font-semibold">Proyectos</span>
            </h2>
            <p className="text-gray-400 mt-8 mb-20 text-base md:text-lg leading-relaxed max-w-4xl">
              Nos enfocamos en desarrollar proyectos que fortalecen la
              seguridad, optimizan la eficiencia y fomentan la innovación en
              cada solución, para llevar la ingeniería especializada en
              vuelo más allá de los límites actuales
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ delay: index * 0.1 }} 
            >
              <Link
                to={`/proyectos/destacados/${product.id}`}
                className="group relative block bg-gray-900 overflow-hidden rounded-lg border border-blue-500/20 transition-all duration-300 hover:border-sky-950"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Contenedor de Img */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className={`w-full h-full transition-all object-cover duration-700 ${
                      hoveredId === product.id ? 'scale-110 brightness-60' : 'scale-100 brightness-80'
                    }`}
                  />
                  {/* Gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>
                
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="mb-3">

                    </div>
                    <h3 className="text-3xl uppercase font-bold italic text-white mb-4 font-montserrat">
                      {product.title}
                    </h3>
                
                    
                  </div>
                </div>

                {/* Overlay  */}
                <motion.div
                  className="absolute inset-0 bg-black/90 backdrop-blur-md"
                  initial={{ y: '100%' }}
                  animate={{ y: hoveredId === product.id ? 0 : '100%' }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <div className="h-full flex flex-col justify-between p-8 text-white">
                    {/* arriba */}
                    <div>
                      <div className="mb-3">
                        <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
                          {product.subtitle}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold mb-6 font-montserrat">
                        {product.title}
                      </h3>
                      <p className="text-blue-100 leading-relaxed line-clamp-6">
                        {product.description}
                      </p>
                    </div>

                    {/* abajo */}
                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.certifications.map((cert, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-600/80 text-white text-xs font-medium rounded"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-blue-300 font-semibold">
                        <span className="mr-2">Ver más detalles</span>
                        <svg
                          className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* badge */}
        {/* <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 pt-12 border-t border-blue-900/50"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-blue-200">Certificación Aeronáutica</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-blue-200">Soporte Técnico</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">+20</div>
              <div className="text-blue-200">Años de Experiencia</div>
            </div>
          </div>
        </motion.div> */}
      </div>

      
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.1; }
        }
        .animate-twinkle {
          animation: twinkle 5s infinite alternate;
        }
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap');
      `}</style>
    </div>
  );
};

export default Projection;