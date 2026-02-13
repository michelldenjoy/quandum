import { useState, Fragment, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function SectorsSection() {
  const [active, setActive] = useState(null);

  const sectors = useMemo(
    () => [
      {
        id: "aero",
        title: "Aeroespacial",
        number: "01",
        short: "Sistemas electrónicos y optoelectrónicos para aeronaves.",
        image: "/aeroespacial.jpg",
        description: `Desarrollamos soluciones de ingeniería para plataformas aeroespaciales civiles y militares, cubriendo todo el ciclo de vida del sistema. Desde la definición de requisitos y el diseño de arquitectura hasta la verificación, validación y soporte a certificación, trabajamos conforme a los estándares más exigentes del sector.

Nuestra experiencia abarca sistemas electrónicos, software crítico y diseño mecánico, integrados bajo criterios de seguridad, fiabilidad y cumplimiento normativo (EASA, FAA, EN 9100).`,
        specs: ["ISO-9001", "AS/EN9100", "DO-178C", "DO-254"],
      },
      {
        id: "defense",
        title: "Defensa",
        number: "02",
        short: "Soluciones certificables para entornos de alta exigencia.",
        image: "/defensa.jpg",
        description: `Aplicamos ingeniería avanzada en entornos de misión crítica, donde la fiabilidad, la trazabilidad y la gestión del riesgo son determinantes. Participamos en el desarrollo e integración de sistemas para defensa, cumpliendo con requisitos técnicos, normativos y de seguridad propios de programas militares.

Nuestros procesos están alineados con estándares internacionales y permiten operar dentro de cadenas de suministro reguladas, garantizando confidencialidad, control de configuración y continuidad operativa.`,
        specs: ["MIL-STD-704", "MIL-STD-810", "RTCA", "MIL-HBK-204"],
      },
      {
        id: "industrial",
        title: "Industrial",
        number: "03",
        short: "Automatización, control e instrumentación avanzada.",
        image: "/industrial.jpg",
        description: `Transferimos el rigor de la ingeniería aeroespacial al ámbito industrial, desarrollando soluciones tecnológicas robustas, escalables y orientadas a entornos exigentes. Diseñamos sistemas electrónicos, mecánicos y de control que requieren alta fiabilidad, precisión y control de procesos.

Nuestra aproximación combina ingeniería de producto, optimización de procesos y validación técnica, aportando valor en sectores donde la calidad, la seguridad y la trazabilidad son críticas.`,
        specs: ["IEC 61508", "ISO-9001", "IEC 62061"],
      },
    ],
    []
  );

  const activeSector = useMemo(
    () => sectors.find((s) => s.id === active),
    [active, sectors]
  );

  const toggleSector = useCallback((sectorId) => {
    setActive((current) => (current === sectorId ? null : sectorId));
  }, []);

  return (
    <section 
      className="relative w-full bg-white py-12 sm:py-16 lg:py-24 overflow-hidden"
      aria-labelledby="sectors-title"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/3 right-1/4 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-brand-blue/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-start gap-4 sm:gap-8">
            <div className="flex-1">
              {/* Etiqueta superior */}
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-gray-500 uppercase font-medium">
                  Sectores
                </span>
              </div>

              {/* Título principal */}
              <h2 
                id="sectors-title"
                className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extralight text-black tracking-tight leading-[1.1]"
              >
                Áreas
                <br />
                <span className="font-semibold">Tecnológicas</span>
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-2 lg:gap-4 mb-8 sm:mb-12">
          {sectors.map((sector, index) => (
            <Fragment key={sector.id}>
              {/* Card del sector */}
              <SectorCard
                sector={sector}
                index={index}
                isActive={active === sector.id}
                onToggle={toggleSector}
              />

              {/* Panel expandido móvil */}
              <AnimatePresence>
                {active === sector.id && (
                  <MobileSectorDetail sector={sector} />
                )}
              </AnimatePresence>
            </Fragment>
          ))}
        </div>

        {/* Panel expandido desktop */}
        <AnimatePresence mode="wait">
          {active && activeSector && (
            <DesktopSectorDetail sector={activeSector} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// Componente Card del Sector
function SectorCard({ sector, index, isActive, onToggle }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }}
      onClick={() => onToggle(sector.id)}
      className={`relative text-left p-6 sm:p-8 rounded-md border transition-all duration-500 group overflow-hidden min-h-[400px] sm:min-h-[450px] focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2
        ${
          isActive
            ? "border-black shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
            : "border-gray-200 hover:border-gray-300 hover:shadow-lg"
        }`}
      aria-expanded={isActive}
      aria-controls={`sector-detail-${sector.id}`}
    >
      {/* Línea superior decorativa */}
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-black via-brand-blue to-black transition-all duration-500 ${
          isActive
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-50"
        }`}
        aria-hidden="true"
      />

      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${sector.image})` }}
        role="img"
        aria-label={`Imagen representativa del sector ${sector.title}`}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 transition-all duration-500 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/80" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Título */}
        <h3
          className={`text-4xl sm:text-2xl lg:text-4xl mt-3 font-bold mb-3 sm:mb-4 transition-colors duration-300 drop-shadow-md ${
            isActive
              ? "text-white"
              : "text-white group-hover:text-white"
          }`}
        >
          {sector.title}
        </h3>

        {/* Descripción corta */}
        <p className="text-gray-50 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 drop-shadow-md flex-grow">
          {sector.short}
        </p>

        {/* Especificaciones técnicas */}
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6" role="list" aria-label="Normativas y estándares">
          {sector.specs.map((spec) => (
            <span
              key={spec}
              role="listitem"
              className="text-xs font-mono text-gray-900 bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded border border-gray-200 shadow-sm"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Indicador de acción */}
        <div className="flex items-center text-sm font-medium text-white drop-shadow-md group-hover:text-white transition-colors mt-auto">
          <span
            className={`transition-all duration-300 ${
              isActive ? "text-white" : ""
            }`}
          >
            {isActive ? "Ocultar información" : "Ver información"}
          </span>
          <svg
            className={`ml-2 w-4 h-4 transition-all duration-300 ${
              isActive
                ? "rotate-180 text-white"
                : "group-hover:translate-x-1"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
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

      {/* Esquinas decorativas en hover */}
      <CornerDecorations />
    </motion.button>
  );
}

// Componente de esquinas decorativas
function CornerDecorations() {
  return (
    <>
      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-6 sm:w-8 h-6 sm:h-8 border-t border-l border-brand-blue/0 group-hover:border-brand-blue/60 transition-all duration-500" aria-hidden="true" />
      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-6 sm:w-8 h-6 sm:h-8 border-t border-r border-brand-blue/0 group-hover:border-brand-blue/60 transition-all duration-500" aria-hidden="true" />
      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-6 sm:w-8 h-6 sm:h-8 border-b border-l border-brand-blue/0 group-hover:border-brand-blue/60 transition-all duration-500" aria-hidden="true" />
      <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-6 sm:w-8 h-6 sm:h-8 border-b border-r border-brand-blue/0 group-hover:border-brand-blue/60 transition-all duration-500" aria-hidden="true" />
    </>
  );
}

// Panel de detalle móvil
function MobileSectorDetail({ sector }) {
  return (
    <motion.div
      key={`${sector.id}-mobile`}
      id={`sector-detail-${sector.id}`}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="md:hidden col-span-1 overflow-hidden"
    >
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-lg">
        <div className="relative overflow-hidden rounded-lg sm:rounded-xl mb-5 sm:mb-6 group">
          <img
            src={sector.image}
            alt={`Imagen detallada del sector ${sector.title}`}
            className="w-full h-[220px] sm:h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true" />
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line text-justify">
          {sector.description}
        </p>
      </div>
    </motion.div>
  );
}

// Panel de detalle desktop
function DesktopSectorDetail({ sector }) {
  return (
    <motion.div
      key={`${sector.id}-desktop`}
      id={`sector-detail-${sector.id}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="hidden md:block"
    >
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-xl sm:rounded-2xl group"
          >
            <img
              src={sector.image}
              alt={`Imagen detallada del sector ${sector.title}`}
              className="w-full h-[300px] sm:h-[360px] lg:h-[420px] object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" aria-hidden="true" />

            {/* Esquinas decorativas */}
            <ImageCorners />
          </motion.div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5 sm:space-y-6"
          >
            <div className="flex items-baseline gap-3 sm:gap-4">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-brand-blue/20" aria-hidden="true">
                {sector.number}
              </div>
              <div>
                <div className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-1.5 sm:mb-2">
                  Sector
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black">
                  {sector.title}
                </h3>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-black via-brand-blue to-transparent" aria-hidden="true" />

            <p className="text-base sm:text-lg text-gray-700 text-justify leading-relaxed whitespace-pre-line">
              {sector.description}
            </p>

            {/* Normativas y estándares */}
            <div className="pt-3 sm:pt-4">
              <h4 className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-3">
                Normativas y Estándares
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4" role="list">
                {sector.specs.map((spec) => (
                  <div
                    key={spec}
                    role="listitem"
                    className="border border-gray-200 rounded-lg p-3 sm:p-4 bg-white hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="text-sm font-mono font-bold text-black">
                      {spec}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// Esquinas decorativas para imagen
function ImageCorners() {
  return (
    <>
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-10 sm:w-12 h-10 sm:h-12 border-t-2 border-l-2 border-white/50" aria-hidden="true" />
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 sm:w-12 h-10 sm:h-12 border-t-2 border-r-2 border-white/50" aria-hidden="true" />
      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-10 sm:w-12 h-10 sm:h-12 border-b-2 border-l-2 border-white/50" aria-hidden="true" />
      <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 w-10 sm:w-12 h-10 sm:h-12 border-b-2 border-r-2 border-white/50" aria-hidden="true" />
    </>
  );
}