import React, { useState } from 'react';
import { Link } from 'react-router-dom';






const Projection = () => {

    const products = [
        {
          id: 1,
          title: "IR Illuminator SubSystem",
          subtitle: "IRILL",
          hero: "/products/illuminator.jpg",
          gallery: ["/products/illuminator1.jpg", "/products/illuminator2.jpg"],
          image: "/products/illuminator.jpg",
          description:
            "Sistema de iluminación por infrarrojos basado en tecnología láser, integrado en el sistema BEVS. Proporciona iluminación infrarroja de alta potencia para aplicaciones de visión nocturna y sistemas de vigilancia aeroespacial. Diseñado para cumplir con los más altos estándares de la industria aeronáutica, garantizando fiabilidad y rendimiento en condiciones extremas.",
          certifications: ["DO-178 DAL B"],
        },
        {
          id: 2,
          title: "Nozzle",
          subtitle: "Sistema de Tobera",
          hero: "/products/nozzle.jpg",
          gallery: ["/products/nozzle1.jpg", "/products/nozzle2.jpg"],
          image: "/products/nozzle.jpg",
          description:
            "Sistema de tobera de alta precisión diseñado para aplicaciones aeroespaciales críticas. Optimizado para control de flujo y máxima eficiencia operativa. Incorpora tecnología avanzada de materiales resistentes a altas temperaturas y presiones extremas, cumpliendo con normativas internacionales de seguridad y calidad.",
          certifications: ["DO-178 DAL B", "AS/EN9100"],
        },
        {
          id: 3,
          title: "Encoder",
          subtitle: "Sistema de Codificación",
          hero: "/products/encoder.jpg",
          gallery: ["/products/encoder1.jpg", "/products/encoder2.jpg"],
          image: "/products/encoder.jpg",
          description:
            "Encoder de precisión para sistemas de navegación y control aeroespacial. Proporciona medición angular y lineal de alta resolución con mínima latencia. Diseñado para entornos de alta vibración y temperatura variable, garantizando lecturas exactas en condiciones operativas exigentes.",
          certifications: ["DO-178 DAL B", "DO-254"],
        },
        {
          id: 4,
          title: "Radiation",
          subtitle: "Sistema de Protección",
          hero: "/products/radiation.jpg",
          gallery: ["/products/radiation1.jpg", "/products/radiation2.jpg"],
          image: "/products/radiation.jpg",
          description:
            "Sistema avanzado de protección contra radiación para componentes electrónicos críticos en aplicaciones aeroespaciales. Proporciona blindaje efectivo contra radiación cósmica y partículas de alta energía, asegurando la integridad operativa de sistemas electrónicos sensibles en entornos de alta altitud.",
          certifications: ["DO-178 DAL B", "MIL-STD-883"],
        },
      ];


  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start gap-8">
              <div className="flex-1">
                {/* **********************************TITULO PRINCIPAL***************************** */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm tracking-[0.3em] text-gray-500 font-medium uppercase">
                    Experiencia
                  </span>
                </div>

                {/* TITULO PRINCIPAL */}
                <h2 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extralight text-black tracking-tight leading-[1.1]">
                  Nuestros
                  <br />
                  <span className="font-semibold">Proyectos</span>
                </h2>

                <p className="text-gray-600 mt-8 mb-20 text-base md:text-lg leading-relaxed max-w-4xl">
                  Nos enfocamos en desarrollar proyectos que fortalecen la
                  seguridad, optimizan la eficiencia y fomentan la innovación en
                  cada solución, para llevar la ingeniería especializada en
                  vuelo más allá de los límites actuales
                </p>
              </div>
            </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/proyectos/destacados/${product.id}`}
              className="group relative block bg-white overflow-hidden transition-all duration-300 hover:shadow-2xl"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    hoveredId === product.id
                      ? 'scale-110 brightness-50'
                      : 'scale-100 brightness-75'
                  }`}
                />

                {/* Always Visible Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent pointer-events-none">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="mb-3">
                      <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
                        {product.subtitle}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {product.title}
                    </h3>
                    
                    {/* Certifications */}
                    <div className="flex flex-wrap gap-2">
                      {product.certifications.map((cert, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-800/60 backdrop-blur-sm text-white text-xs font-medium rounded border border-slate-600/40"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Overlay with Description */}
                <div
                  className={`absolute inset-0 bg-slate-900/95 backdrop-blur-sm transition-all duration-500 ${
                    hoveredId === product.id
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-full'
                  }`}
                >
                  <div className="h-full flex flex-col justify-between p-8">
                    {/* Top Content */}
                    <div>
                      <div className="mb-3">
                        <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
                          {product.subtitle}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-6">
                        {product.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed line-clamp-6">
                        {product.description}
                      </p>
                    </div>

                    {/* Bottom Content */}
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
                      
                      <div className="flex items-center text-white font-semibold">
                        <span  className="mr-2">Ver más detalles</span>
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
                </div>

                {/* Blue accent line on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-blue-600 transition-all duration-500 ${
                    hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-slate-600">Certificación Aeronáutica</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-slate-600">Soporte Técnico</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">+20</div>
              <div className="text-slate-600">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projection;