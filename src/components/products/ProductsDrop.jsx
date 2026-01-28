import { useState, Fragment } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function ProductsDrop() {
  const [active, setActive] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  const [lightboxProduct, setLightboxProduct] = useState(null);

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

  const activeProduct = products.find((s) => s.id === active);

  // Función para obtener todas las imágenes de un producto (hero + gallery)
  const getAllImages = (product) => {
    return [product.hero, ...product.gallery];
  };

  // Función para navegar entre imágenes
  const navigateImage = (productId, direction) => {
    const product = products.find((p) => p.id === productId);
    const images = getAllImages(product);
    const currentIndex = currentImageIndex[productId] || 0;

    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    }

    setCurrentImageIndex((prev) => ({
      ...prev,
      [productId]: newIndex,
    }));
  };

  // Componente de Slider de Imágenes
  const ImageSlider = ({ product, isMobile = false }) => {
    const images = getAllImages(product);
    const currentIndex = currentImageIndex[product.id] || 0;
    const heightClass = isMobile ? "h-[280px]" : "h-[420px]";

    return (
      <div className="relative overflow-hidden rounded-xl group">
        {/* Imagen actual con click para abrir lightbox */}
        <motion.img
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          src={images[currentIndex]}
          alt={`${product.title} - Imagen ${currentIndex + 1}`}
          className={`w-full ${heightClass} object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer`}
          onClick={(e) => {
            e.stopPropagation();
            setLightboxProduct(product);
            setLightboxImageIndex(currentIndex);
            setLightboxOpen(true);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

        {/* Indicador de Proyectos zoom */}
        <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Click para ampliar
        </div>

        {/* Controles de navegación */}
        {images.length > 1 && (
          <>
            {/* Botón anterior */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage(product.id, "prev");
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
                navigateImage(product.id, "next");
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
                    setCurrentImageIndex((prev) => ({
                      ...prev,
                      [product.id]: index,
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

  // Componente de Lightbox (Modal de imagen completa)
  const Lightbox = () => {
    if (!lightboxProduct) return null;

    const images = getAllImages(lightboxProduct);

    const navigateLightbox = (direction) => {
      if (direction === "next") {
        setLightboxImageIndex((prev) => (prev + 1) % images.length);
      } else {
        setLightboxImageIndex((prev) =>
          prev === 0 ? images.length - 1 : prev - 1
        );
      }
    };

    // Cerrar con tecla Escape
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
      } else if (e.key === "ArrowRight") {
        navigateLightbox("next");
      } else if (e.key === "ArrowLeft") {
        navigateLightbox("prev");
      }
    };

    return (
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-50 group"
              aria-label="Cerrar vista ampliada"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Info del producto */}
            <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-lg z-50">
              <div className="text-xs font-medium opacity-75">
                {lightboxProduct.subtitle}
              </div>
              <div className="text-sm font-bold">{lightboxProduct.title}</div>
              <div className="text-xs opacity-75 mt-1">
                Imagen {lightboxImageIndex + 1} de {images.length}
              </div>
            </div>

            {/* Contenedor de imagen */}
            <div
              className="relative max-w-7xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={lightboxImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={images[lightboxImageIndex]}
                alt={`${lightboxProduct.title} - Imagen ${
                  lightboxImageIndex + 1
                }`}
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Botones de navegación */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateLightbox("prev");
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateLightbox("next");
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300"
                    aria-label="Imagen siguiente"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Indicadores de puntos */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxImageIndex(index);
                        }}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          lightboxImageIndex === index
                            ? "bg-white w-8"
                            : "bg-white/40 hover:bg-white/70"
                        }`}
                        aria-label={`Ir a imagen ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Instrucciones de teclado */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-lg text-xs">
              Usa las flechas ← → para navegar • ESC para cerrar
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <section className="relative w-full bg-white py-16 lg:py-24 overflow-hidden">
      {/* Lightbox Modal */}
      <Lightbox />

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

                <p className="text-gray-600 mt-6 text-base md:text-lg leading-relaxed max-w-4xl">
                  Nos enfocamos en desarrollar proyectos que fortalecen la
                  seguridad, optimizan la eficiencia y fomentan la innovación en
                  cada solución, para llevar la ingeniería especializada en
                  vuelo más allá de los límites actuales
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
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
    if (active !== product.id) {
      setCurrentImageIndex((prev) => ({
        ...prev,
        [product.id]: 0,
      }));
    }
  }}
  className={`relative text-left p-6 sm:p-8 rounded-md border transition-all duration-500 group overflow-hidden min-h-[380px] sm:min-h-[420px]
    ${
      active === product.id
        ? "border-black shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
        : "border-gray-200 hover:border-gray-300 hover:shadow-lg"
    }`}
>
  {/* Línea superior */}
  <div
    className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-black via-brand-blue to-black transition-all duration-500 ${
      active === product.id
        ? "opacity-100"
        : "opacity-0 group-hover:opacity-50"
    }`}
  />

  {/* Imagen de fondo */}
  <div
    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
    style={{ backgroundImage: `url(${product.image})` }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 transition-opacity duration-500 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/80" />

  {/* Contenido */}
  <div className="relative z-10 flex flex-col h-full">
    {/* Título */}
    <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 drop-shadow-md text-white">
      {product.title}
    </h4>

    {/* Subtítulo */}
    <p className="text-gray-100 text-sm sm:text-base mb-4 drop-shadow-md">
      {product.subtitle}
    </p>

    {/* Certificaciones */}
    <div className="flex flex-wrap gap-2 mb-4">
      {product.certifications.map((cert) => (
        <span
          key={cert}
          className="text-xs font-mono text-gray-900 bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded border border-gray-200 shadow-sm"
        >
          {cert}
        </span>
      ))}
    </div>

    {/* Indicador */}
    <div className="flex items-center text-sm font-medium text-white drop-shadow-md mt-auto">
      <span>
        {active === product.id
          ? "Ocultar información"
          : "Ver información"}
      </span>
      <svg
        className={`ml-2 w-4 h-4 transition-all duration-300 ${
          active === product.id
            ? "rotate-180"
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

  {/* Esquinas técnicas */}
  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-6 sm:w-8 h-6 sm:h-8 border-t border-l border-brand-blue/0 group-hover:border-brand-blue/60 transition-all duration-500" />
  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-6 sm:w-8 h-6 sm:h-8 border-t border-r border-brand-blue/0 group-hover:border-brand-blue/60 transition-all duration-500" />
  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-6 sm:w-8 h-6 sm:h-8 border-b border-l border-brand-blue/0 group-hover:border-brand-blue/60 transition-all duration-500" />
  <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-6 sm:w-8 h-6 sm:h-8 border-b border-r border-brand-blue/0 group-hover:border-brand-blue/60 transition-all duration-500" />
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
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-lg relative">
                      {/* Botón de cerrar */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActive(null);
                        }}
                        className="absolute top-4 right-4 z-20 bg-black/80 hover:bg-black text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
                        aria-label="Cerrar"
                      >
                        <X className="w-5 h-5" />
                      </button>

                      <ImageSlider product={product} isMobile={true} />

                      <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line mt-6">
                        {product.description}
                      </p>

                      {/* Botones de navegación móvil */}
                      <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-gray-200">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            const currentIndex = products.findIndex(
                              (p) => p.id === product.id
                            );
                            const prevIndex =
                              currentIndex === 0
                                ? products.length - 1
                                : currentIndex - 1;
                            setActive(products[prevIndex].id);
                            setCurrentImageIndex((prev) => ({
                              ...prev,
                              [products[prevIndex].id]: 0,
                            }));
                          }}
                          className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-black text-white rounded-lg transition-all duration-300 text-sm font-medium"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          Anterior
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            const currentIndex = products.findIndex(
                              (p) => p.id === product.id
                            );
                            const nextIndex =
                              (currentIndex + 1) % products.length;
                            setActive(products[nextIndex].id);
                            setCurrentImageIndex((prev) => ({
                              ...prev,
                              [products[nextIndex].id]: 0,
                            }));
                          }}
                          className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-black text-white rounded-lg transition-all duration-300 text-sm font-medium"
                        >
                          Siguiente
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
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
              className="hidden lg:block relative"
            >
              <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl p-10 lg:p-12 border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                {/* Botón de cerrar */}
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-6 right-6 z-20 bg-black/80 hover:bg-black text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 group"
                  aria-label="Cerrar"
                >
                  <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                </button>

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

                {/* Botones de navegación desktop */}
                <div className="flex items-center justify-center gap-6 mt-10 pt-8 border-t border-gray-200">
                  <button
                    onClick={() => {
                      const currentIndex = products.findIndex(
                        (p) => p.id === active
                      );
                      const prevIndex =
                        currentIndex === 0
                          ? products.length - 1
                          : currentIndex - 1;
                      setActive(products[prevIndex].id);
                      setCurrentImageIndex((prev) => ({
                        ...prev,
                        [products[prevIndex].id]: 0,
                      }));
                    }}
                    className="flex items-center gap-3 px-6 py-3 bg-gray-900 hover:bg-black text-white rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Proyecto Anterior
                  </button>
                  <div className="flex items-center gap-2">
                    {products.map((p, idx) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          setActive(p.id);
                          setCurrentImageIndex((prev) => ({
                            ...prev,
                            [p.id]: 0,
                          }));
                        }}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          active === p.id
                            ? "bg-brand-blue w-8"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Ir a ${p.title}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      const currentIndex = products.findIndex(
                        (p) => p.id === active
                      );
                      const nextIndex = (currentIndex + 1) % products.length;
                      setActive(products[nextIndex].id);
                      setCurrentImageIndex((prev) => ({
                        ...prev,
                        [products[nextIndex].id]: 0,
                      }));
                    }}
                    className="flex items-center gap-3 px-6 py-3 bg-gray-900 hover:bg-black text-white rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Proyecto Siguiente
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
