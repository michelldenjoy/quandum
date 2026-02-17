import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const services = [
  {
    number: "01",
    title: "AEROESPACIAL",
    tag: "DO-178  ·  DO-254",
    image: "/aeroespacial.jpg",
    description: "Seguridad, certificación y sistemas críticos de vuelo.",
    items: [
      {
        label: "Aeronavegabilidad",
        body: "Desarrollo integral desde la especificación hasta la certificación bajo estándares RTCA/DO-178 y DO-254.",
      },
      {
        label: "Computación Embarcada",
        body: "Diseño de ordenadores de abordo Full Custom (Mecánica, Electrónica y SW) adaptados a plataformas específicas.",
      },
      {
        label: "Mantenimiento & Retrofit",
        body: "Actualización de sistemas existentes, extensión de vida útil de aeronaves y gestión de documentación técnica.",
      },
      {
        label: "Ingeniería Inversa",
        body: "Soluciones avanzadas para sistemas obsoletos, garantizando la continuidad operativa de la flota.",
      },
    ],
  },
  {
    number: "02",
    title: "DEFENSA",
    tag: "MIL-STD-704  ·  MIL-HBK-204",
    image: "/defensa.jpg",
    description:
      "Tecnología táctica, precisión y cumplimiento de normativas militares.",
    items: [
      {
        label: "Sistemas Optrónicos",
        body: "Diseño de cámaras y algoritmos de visión con respuesta en múltiples longitudes de onda (VIS, NIR, SWIR y Térmico).",
      },
      {
        label: "Tecnología Láser",
        body: "Desarrollo de iluminadores y designadores láser (CW o PW) para aplicaciones de misión crítica.",
      },
      {
        label: "Comunicaciones de Misión",
        body: "Sistemas de vídeo y protocolos robustos para entornos de alta interferencia electromagnética.",
      },
      {
        label: "Estándares Militares",
        body: "Equipos validados bajo MIL-STD-704 y MIL-HBK-204 para condiciones extremas de EMI/EMC y ambiente.",
      },
    ],
  },
  {
    number: "03",
    title: "INDUSTRIAL",
    tag: "MANUFACTURA AVANZADA",
    image: "/industrial.jpg",
    description:
      "Capacidad productiva, prototipado rápido y soluciones a medida.",
    items: [
      {
        label: "Fabricación Aditiva",
        body: "Especialistas en sinterizado de metal en 3D y mecanizado de alta precisión para componentes complejos.",
      },
      {
        label: "Envolventes Mecánicas",
        body: "Desarrollo de housings y estructuras robustas para protección de electrónica crítica en entornos exigentes.",
      },
      {
        label: "Harness & Cableado",
        body: "Manufactura de mazos de cables específicos para sectores de alta exigencia técnica y fiabilidad.",
      },
      {
        label: "Bancos de Ensayo",
        body: "Diseño y construcción de entornos de prueba personalizados para la validación de sistemas industriales.",
      },
    ],
  },
];

export default function Solutions() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Definimos constantes de tiempo para ajustar la armonía fácilmente
  const LINE_DURATION = 1.5;
  const TITLE_DELAY = 0.8; // Empieza a aparecer a mitad del camino de la línea

  return (
    <section className="relative overflow-x-hidden bg-slate-950">
      {/* linea de tiempo con titulo */}
      <div className="relative max-w-7xl md:mt-20 mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* 1. La Línea: Primero en aparecer */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: 250, opacity: 1 }} // Reducido un poco para mejor balance visual
          viewport={{ once: true }}
          transition={{
            duration: LINE_DURATION,
            ease: [0.45, 0, 0.55, 1], // Ease mas orgánico
          }}
          className="w-px bg-gradient-to-b from-brand-blue via-blue-400 to-transparent"
        />

        {/* 2. El Título y Párrafo: Aparecen después de la línea */}
        <div className="flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: TITLE_DELAY, // Delay orquestado
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-[clamp(1.6rem,3.5vw,3.2rem)] mt-8 text-center font-light text-white tracking-[0.12em] leading-tight uppercase"
          >
            Áreas
            <br />
            <span >Tecnológicas</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: TITLE_DELAY + 0.3 }} // Aparece sutilmente después del título
            className="max-w-2xl text-center text-sm text-slate-400 tracking-[0.15em] uppercase mt-10 mb-16 px-4 leading-relaxed"
          >
            Nuestra presencia se extiende a sectores clave que impulsan el
            desarrollo tecnológico y la infraestructura del futuro.
          </motion.p>
        </div>
      </div>

      {/* Textura scan-line — sello industrial */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)",
          backgroundSize: "100% 6px",
        }}
      />

      {/* Grid rejilla */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10">
        {/* ── SECTORES ─────────────────────────────────────────── */}
        <div>
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            const isOtherOpen = expandedIndex !== null && !isExpanded;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                // Escalamos el delay de los items para que sigan la secuencia del título principal
                transition={{
                  duration: 0.6,
                  delay: TITLE_DELAY + 0.5 + index * 0.1,
                }}
              >
                {/* ── FILA TÍTULO ── */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="relative w-full group overflow-hidden"
                >
                  {/* Fondo hover*/}
                  <motion.div
                    className="absolute inset-0 bg-white/[0.025] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />

                  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex items-center gap-4 sm:gap-10">
                    {/* Acento de color izquierdo */}
                    <motion.div
                      animate={{
                        scaleY: isExpanded ? 1 : 0,
                        opacity: isExpanded ? 1 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-blue-400/60 origin-top"
                    />

                    {/* Número */}
                    <span
                      className={`font-mono text-[0.6rem] tracking-[0.25em] flex-shrink-0 w-5 sm:w-7 transition-colors duration-300 ${
                        isExpanded
                          ? "text-blue-400/60"
                          : "text-slate-700 group-hover:text-slate-500"
                      }`}
                    >
                      {service.number}
                    </span>

                    {/* Tag*/}
                    <span
                      className={`hidden lg:block text-[0.55rem] tracking-[0.2em] font-mono uppercase flex-shrink-0 w-52 transition-colors duration-300 ${
                        isExpanded
                          ? "text-blue-400/40"
                          : "text-slate-700 group-hover:text-slate-500"
                      }`}
                    >
                      {service.tag}
                    </span>

                    {/* Título */}

                    <h3
                      className={`text-[clamp(1.2rem,3vw,3.5rem)] font-light tracking-[0.1em] transition-all duration-500 ${
                        isExpanded
                          ? "text-white translate-x-4" // Se mueve un poco a la derecha al abrir
                          : "text-slate-500 group-hover:text-slate-200"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`hidden xl:block text-xs text-slate-600 max-w-[14rem] text-right leading-relaxed transition-all duration-500 flex-shrink-0 ${
                        isExpanded
                          ? "opacity-0"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {service.description}
                    </p>

                    {/* Indicador */}
                    <motion.div
                      animate={{ rotate: isExpanded ? 45 : 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className={`flex-shrink-0 w-7 h-7 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center transition-all duration-400 ${
                        isExpanded
                          ? "border-white/30 bg-white/10"
                          : "border-slate-800 group-hover:border-slate-600"
                      }`}
                    >
                      <svg
                        className={`w-3.5 h-3.5 transition-colors duration-300 ${
                          isExpanded
                            ? "text-white"
                            : "text-slate-600 group-hover:text-slate-300"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </button>

                {/* ── PANEL EXPANDIDO — con imagen de fondo ── */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px]"
                      >
                        {/* Imagen */}
                        <div className="absolute inset-0 z-0">
                          <motion.img
                            src={service.image}
                            alt={service.title}
                            initial={{ scale: 1.06 }}
                            animate={{ scale: 1 }}
                            transition={{
                              duration: 1.2,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="w-full h-full object-cover"
                          />
                          {/* Capas de oscurecimiento compuestas */}
                          <div className="absolute inset-0 bg-slate-950/70" />
                          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 via-slate-900/10 to-slate-900/10" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-slate-900/10" />
                          {/* Scan-lines sobre la imagen */}
                          <div
                            className="absolute inset-0 opacity-[0.04]"
                            style={{
                              backgroundImage:
                                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)",
                              backgroundSize: "100% 6px",
                            }}
                          />
                        </div>

                        {/* Contenido sobre la imagen */}
                        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">
                            {/* ── Columna izquierda ── */}
                            <motion.div
                              initial={{ opacity: 0, x: -24 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.15 }}
                              className="lg:col-span-4 lg:border-r lg:border-white/8 lg:pr-12 flex flex-col justify-between gap-10"
                            >
                              {/* Número grande  */}
                              <div>
                                <span className="font-mono text-[5rem] sm:text-[7rem] font-extralight text-white/[0.07] leading-none block -ml-1 -mt-3 select-none">
                                  {service.number}
                                </span>

                                <div className="-mt-4 sm:-mt-6">
                                  <span className="text-[0.55rem] tracking-[0.35em] text-blue-400/60 uppercase font-mono block mb-3">
                                    {service.tag}
                                  </span>
                                  <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed">
                                    {service.description}
                                  </p>
                                </div>
                              </div>

                              {/* Coordenadas  */}
                              <div className="hidden lg:block">
                                <div className="border-t border-white/8 pt-6">
                                  <p className="font-mono text-[0.55rem] tracking-[0.2em] text-slate-700 uppercase leading-relaxed">
                                    Sector {service.number} / {services.length}
                                    <br />
                                    {service.tag}
                                  </p>
                                </div>
                              </div>
                            </motion.div>

                            {/* ── Columna derecha ── */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.25 }}
                              className="lg:col-span-8 lg:pl-12"
                            >
                              <div className="flex items-center gap-4 mb-8">
                                <span className="text-[0.55rem] tracking-[0.35em] text-slate-600 uppercase font-mono">
                                  Capacidades
                                </span>
                                <div className="flex-1 h-px bg-white/8" />
                              </div>

                              {/* Items — 2 columnas en desktop, 1 en móvil */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                                {service.items.map((item, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                      duration: 0.45,
                                      delay: 0.3 + idx * 0.08,
                                    }}
                                    className={`group/item relative p-5 sm:p-6 border-white/[0.06] ${
                                      // Bordes en grid 2x2
                                      idx % 2 === 0 ? "sm:border-r" : ""
                                    } ${idx < 2 ? "border-b" : ""}`}
                                  >
                                    {/* Línea en hover */}
                                    <motion.div
                                      className="absolute top-0 left-0 right-0 h-px bg-blue-400/40 origin-left"
                                      initial={{ scaleX: 0 }}
                                      whileHover={{ scaleX: 1 }}
                                      transition={{ duration: 0.35 }}
                                    />

                                    <span className="font-mono text-[0.5rem] text-slate-700 tracking-[0.15em] block mb-3">
                                      {String(idx + 1).padStart(2, "0")}
                                    </span>
                                    <h4 className="text-xs sm:text-sm font-semibold text-white/80 tracking-[0.08em] uppercase mb-2 group-hover/item:text-white transition-colors duration-300">
                                      {item.label}
                                    </h4>
                                    <p className="text-xs text-slate-500 leading-relaxed group-hover/item:text-slate-300 transition-colors duration-300">
                                      {item.body}
                                    </p>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          </div>
                        </div>

                        {/* Línea azul en borde izquierdo  */}
                        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-400/60 via-blue-400/20 to-transparent" />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Divisor */}
                <div className="h-px bg-slate-800/60" />
              </motion.div>
            );
          })}
        </div>

        {/* ── PIE DE SECCIÓN ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-16 sm:pb-24 flex items-center justify-between">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="h-px w-24 sm:w-40 bg-gradient-to-r from-white/10 to-transparent"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[0.55rem] tracking-[0.35em] text-slate-700 uppercase font-mono"
          >
            Certificación · Precisión · Confianza
          </motion.p>
        </div>
      </div>
    </section>
  );
}
