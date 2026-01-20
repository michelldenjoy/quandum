import { useState, Fragment } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductsDrop() {
  const [active, setActive] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const products = [
    {
      id: 1,
      title: "IR Illuminator SubSystem",
      subtitle: "IRILL",
      hero: "/products/illuminator.jpg",
      gallery: [
        "/products/illuminator1.jpg",
        "/products/illuminator2.jpg",
      ],
      description:
        "Sistema de iluminación por infrarrojos basado en tecnología láser, integrado en el sistema BEVS. Proporciona iluminación infrarroja de alta potencia para aplicaciones de visión nocturna y sistemas de vigilancia aeroespacial. Diseñado para cumplir con los más altos estándares de la industria aeronáutica, garantizando fiabilidad y rendimiento en condiciones extremas.",
      certifications: ["DO-178 DAL B"],
    },
    {
      id: 2,
      title: "Nozzle",
      subtitle: "Sistema de Tobera",
      hero: "/products/nozzle.jpg",
      gallery: [
        "/products/nozzle1.jpg",
        "/products/nozzle2.jpg",
      ],
      description: "Sistema de tobera de alta precisión diseñado para aplicaciones aeroespaciales críticas. Optimizado para control de flujo y máxima eficiencia operativa. Incorpora tecnología avanzada de materiales resistentes a altas temperaturas y presiones extremas, cumpliendo con normativas internacionales de seguridad y calidad.",
      certifications: ["DO-178 DAL B", "AS9100"],
    },
    {
      id: 3,
      title: "Encoder",
      subtitle: "Sistema de Codificación",
      hero: "/products/encoder.jpg",
      gallery: [
        "/products/encoder1.jpg",
        "/products/encoder2.jpg",
      ],
      description: "Encoder de precisión para sistemas de navegación y control aeroespacial. Proporciona medición angular y lineal de alta resolución con mínima latencia. Diseñado para entornos de alta vibración y temperatura variable, garantizando lecturas exactas en condiciones operativas exigentes.",
      certifications: ["DO-178 DAL B", "DO-254"],
    },
    {
      id: 4,
      title: "Radiation",
      subtitle: "Sistema de Protección",
      hero: "/products/radiation.jpg",
      gallery: [
        "/products/radiation1.jpg",
        "/products/radiation2.jpg",
      ],
      description: "Sistema avanzado de protección contra radiación para componentes electrónicos críticos en aplicaciones aeroespaciales. Proporciona blindaje efectivo contra radiación cósmica y partículas de alta energía, asegurando la integridad operativa de sistemas electrónicos sensibles en entornos de alta altitud.",
      certifications: ["DO-178 DAL B", "MIL-STD-883"],
    }
  ];

  const activeProduct = products.find((s) => s.id === active);

  // Función para obtener todas las imágenes de un producto (hero + gallery)
  const getAllImages = (product) => {
    return [product.hero, ...product.gallery];
  };

  // Función para navegar entre imágenes
  const navigateImage = (productId, direction) => {
    const product = products.find(p => p.id === productId);
    const images = getAllImages(product);
    const currentIndex = currentImageIndex[productId] || 0;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    }
    
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: newIndex
    }));
  };

  // Componente de Slider de Imágenes
  const ImageSlider = ({ product, isMobile = false }) => {
    const images = getAllImages(product);
    const currentIndex = currentImageIndex[product.id] || 0;
    const heightClass = isMobile ? "h-[280px]" : "h-[420px]";

    return (
      <div className="relative overflow-hidden rounded-xl group">
        {/* Imagen actual */}
        <motion.img
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          src={images[currentIndex]}
          alt={`${product.title} - Imagen ${currentIndex + 1}`}
          className={`w-full ${heightClass} object-cover transition-transform duration-700 group-hover:scale-105`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Controles de navegación */}
        {images.length > 1 && (
          <>
            {/* Botón anterior */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage(product.id, 'prev');
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Botón siguiente */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage(product.id, 'next');
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Indicadores de puntos */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(prev => ({
                      ...prev,
                      [product.id]: index
                    }));
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-white w-6"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Badge técnico */}
        {isMobile && (
          <div className="absolute bottom-12 left-4 right-4">
            <div className="backdrop-blur-xl bg-white/95 rounded-lg px-4 py-2 border border-black/10 shadow-lg">
              <div className="text-xs font-bold text-black">
                0{product.id} — {product.title}
              </div>
            </div>
          </div>
        )}

        {/* Esquinas técnicas para desktop */}
        {!isMobile && (
          <>
            <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-white/50" />
            <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-white/50" />
            <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-white/50" />
            <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-white/50" />
          </>
        )}
      </div>
    );
  };

  return (
    <section className="relative w-full bg-white py-16 lg:py-24 overflow-hidden">
      {/* Sistema de fondo minimalista técnico */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute top-1/3 right-1/4 w-[900px] h-[900px] bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            {/* Línea vertical decorativa */}
            {/* <div className="hidden md:flex flex-col items-center gap-2 pt-2">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-black to-transparent" />
              <div className="w-1.5 h-1.5 bg-black rotate-45" />
            </div> */}

            <div className="flex-1">
              {/*TITULO PRINCIPAL*/}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black" />
                  <div className="w-1 h-1 bg-gray-400" />
                  <div className="w-1 h-1 bg-gray-300" />
                </div>
                <span className="text-[11px] tracking-[0.3em] text-gray-400 font-medium uppercase">
                  Soluciones
                </span>
              </div>

              {/* TITULO PRINCIPAL */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-black tracking-tight leading-[1.1]">
                Nuestros
                <br />
                <span className="font-bold">Proyectos</span>
              </h2>

              <p className="text-gray-600 mt-6 text-base md:text-lg leading-relaxed max-w-4xl">
              Nos enfocamos en desarrollar proyectos que fortalecen la seguridad, optimizan la eficiencia y fomentan la innovación en cada solución, para llevar la ingeniería especializada en vuelo más allá de los límites actuales
              </p>
            </div>
          </div>
        </motion.div>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {products.map((product, index) => (
            <Fragment key={product.id}>
              {/* Card del product */}
              <motion.button
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={() => {
                  setActive(active === product.id ? null : product.id);
                  // Reset image index when opening
                  if (active !== product.id) {
                    setCurrentImageIndex(prev => ({
                      ...prev,
                      [product.id]: 0
                    }));
                  }
                }}
                className={`relative text-left p-6 rounded-2xl border transition-all duration-500 group overflow-hidden
                  ${
                    active === product.id
                      ? "border-black bg-gradient-to-br from-gray-50 to-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg"
                  }`}
              >
                {/* Línea superior decorativa */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-black via-brand-blue to-black transition-all duration-500 ${
                    active === product.id
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-50"
                  }`}
                />

                <div className="relative z-10">
                  {/* Número de producto */}
                  <div
                    className={`text-5xl font-black mb-3 transition-all duration-500 ${
                      active === product.id
                        ? "text-brand-blue"
                        : "text-gray-200 group-hover:text-gray-300"
                    }`}
                  >
                    0{product.id}
                  </div>

                  {/* Título */}
                  <h4
                    className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                      active === product.id
                        ? "text-black"
                        : "text-gray-900 group-hover:text-black"
                    }`}
                  >
                    {product.title}
                  </h4>

                  {/* Subtítulo */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {product.subtitle}
                  </p>

                  {/* Certificaciones */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded border border-gray-200"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>

                  {/* Indicador */}
                  <div className="flex items-center text-sm font-medium text-gray-500 group-hover:text-black transition-colors">
                    <span
                      className={`transition-all duration-300 ${
                        active === product.id ? "text-brand-blue" : ""
                      }`}
                    >
                      {active === product.id
                        ? "Ocultar información"
                        : "Ver información"}
                    </span>
                    <svg
                      className={`ml-2 w-4 h-4 transition-all duration-300 ${
                        active === product.id
                          ? "rotate-180 text-brand-blue"
                          : "group-hover:translate-x-1"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Esquinas técnicas en hover */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-brand-blue/0 group-hover:border-brand-blue/50 transition-all duration-500" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-brand-blue/0 group-hover:border-brand-blue/50 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-brand-blue/0 group-hover:border-brand-blue/50 transition-all duration-500" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-brand-blue/0 group-hover:border-brand-blue/50 transition-all duration-500" />
              </motion.button>

              {/* Panel expandido móvil */}
              <AnimatePresence>
                {active === product.id && (
                  <motion.div
                    key={`${product.id}-mobile`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="lg:hidden col-span-1 overflow-hidden"
                  >
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                      <ImageSlider product={product} isMobile={true} />

                      <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line mt-6">
                        {product.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Fragment>
          ))}
        </div>

        {/* Panel expandido desktop */}
        <AnimatePresence mode="wait">
          {active && activeProduct && (
            <motion.div
              key={`${active}-desktop`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="hidden lg:block"
            >
              <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl p-10 lg:p-12 border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Slider de Imágenes */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <ImageSlider product={activeProduct} isMobile={false} />
                  </motion.div>

                  {/* Contenido */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="flex items-baseline gap-4">
                      <div className="text-7xl font-black text-brand-blue/20">
                        0{activeProduct.id}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-2">
                          {activeProduct.subtitle}
                        </div>
                        <h4 className="text-3xl lg:text-4xl font-black text-black">
                          {activeProduct.title}
                        </h4>
                      </div>
                    </div>

                    <div className="h-px bg-gradient-to-r from-black via-brand-blue to-transparent" />

                    <p className="text-lg text-gray-700 text-justify leading-relaxed whitespace-pre-line">
                      {activeProduct.description}
                    </p>

                    {/* Normativas y estándares */}
                    <div className="pt-4">
                      <div className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-3">
                        Normativas y Estándares
                      </div>
                      <div className="flex flex-wrap gap-4">
                        {activeProduct.certifications.map((cert) => (
                          <div
                            key={cert}
                            className="border border-gray-200 rounded-lg p-4 bg-white"
                          >
                            <div className="text-sm font-mono font-bold text-black">
                              {cert}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}