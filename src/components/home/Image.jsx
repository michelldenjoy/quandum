import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const hotspots = [
  {
    id: 1,
    title: "IR Illuminator",
    description: "Sistema de iluminación infrarroja para misiones nocturnas.",
    x: "32.3%",
    y: "59.7%",
    image: "/products/illuminator.webp",
    align: "center",
  },
  {
    id: 2,
    title: "Nozzle",
    description: "Sistema de Tobera.",
    x: "10.5%",
    y: "18%",
    image: "/products/nozzle.webp",
    align: "bottom",
  },
  {
    id: 3,
    title: "Encoder",
    description: "Sistema de Tobera.",
    x: "80%",
    y: "86%",
    image: "/products/encoder.webp",
    align: "left",
  },
  {
    id: 4,
    title: "P.O.D",
    description: "Sistema de Iluminación.",
    x: "18.5%",
    y: "82%",
    image: "/products/POD.webp",
    align: "top",
  },
  {
    id: 5,
    title: "D.C.D",
    description: "Sistema de Iluminación.",
    x: "48%",
    y: "79.5%",
    image: "/products/dimming.webp",
    align: "top",
  },
];

export default function Image() {
  const [activeId, setActiveId] = useState(null);
  const LINE_DURATION = 1.5;
  const TITLE_DELAY = 0.9; // tiempo en aparecer el titulo

  const getCardAlignment = (align) => {
    switch (align) {
      case "left":
        return "left-0 translate-x-0 mb-4 bottom-full";
      case "right":
        return "right-0 translate-x-0 mb-4 bottom-full";
      case "bottom":
        return "left-1/2 -translate-x-1/2 mt-4 top-full";
      default:
        return "left-1/2 -translate-x-1/2 mb-4 bottom-full";
    }
  };

  return (
    <section className="bg-gradient-to-b from-black/10 via-slate-900 to-black py-10 w-full overflow-hidden">
      <div className="relative max-w-7xl md:mt-10 mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* 1. La Línea: Primero en aparecer */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: 160, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-px bg-gradient-to-b from-slate-800 via-slate-500 to-brand-blue"
          style={{ originY: 0 }}
        />

        {/* 2. El Nodo/Portal de Transición */}
        <div className="relative flex flex-col items-center">
          {/* Círculos (Efecto Radar) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute -top-2 w-12 h-12 bg-brand-blue/50 blur-xl rounded-full"
          />
          {/* El Punto de Anclaje */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            className="w-2 h-2 bg-brand-blue rounded-full z-10 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 flex flex-col items-center"
          ></motion.div>
        </div>

        {/* El Título  Párrafo*/}
        <div className="flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: TITLE_DELAY,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-[clamp(1.6rem,3.5vw,3.2rem)] mt-8 text-center font-light text-white tracking-[0.12em] leading-tight uppercase"
          >
            Nuestro
            <br />
            <span className="font-normal">Sistema a bordo</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: TITLE_DELAY + 0.3 }} // Aparece sutilmente después del título
            className="max-w-2xl text-center text-sm text-slate-400 tracking-[0.15em] uppercase mt-10 mb-16 px-4 leading-relaxed"
          >
            {/* Nuestra presencia se extiende a sectores clave que impulsan el
            desarrollo tecnológico y la infraestructura del futuro. */}
          </motion.p>
        </div>
      </div>

      <div className="relative mx-auto" style={{ maxWidth: "1000px" }}>
        <div className="relative w-full shadow-2xl border border-white/5 bg-slate-900 rounded-lg">
          <img
            src="/componente-1.png"
            className="w-full h-auto block opacity-90 rounded-lg"
          />

          {hotspots.map((spot) => (
            <div
              key={spot.id}
              className="absolute z-20"
              style={{
                top: spot.y,
                left: spot.x,
                transform: "translate(-50%, -50%)",
              }}
            >
              <button
                onMouseEnter={() => setActiveId(spot.id)}
                onMouseLeave={() => setActiveId(null)}
                className="relative group p-4"
              >
                <motion.div
                  animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute inset-0 m-auto w-5 h-5 bg-red-500 rounded-full"
                />
                <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
              </button>

              {activeId === spot.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`absolute w-64 bg-slate-900/95 border border-blue-500/40 p-4 rounded-xl backdrop-blur-xl z-50 pointer-events-none shadow-2xl ${getCardAlignment(
                    spot.align
                  )}`}
                >
                  {/* Triángulo indicador (Opcional) */}
                  {/* <div className={`absolute w-3 h-3 bg-slate-900 border-b border-r border-blue-500/40 rotate-45 
                      ${spot.align === 'left' ? 'left-4' : spot.align === 'right' ? 'right-4' : 'left-1/2 -translate-x-1/2'} 
                      ${spot.align === 'bottom' ? '-top-1.5 border-t border-l border-b-0 border-r-0' : '-bottom-1.5'}`} 
                    /> */}

                  <div className="relative overflow-hidden rounded-lg mb-3">
                    <img
                      src={spot.image}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1">
                    {spot.title}
                  </h4>
                  <p className="text-slate-400 text-[10px] leading-relaxed uppercase tracking-wider">
                    {spot.description}
                  </p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
        <div className="relative flex flex-col items-center pb-32">
          {/* 1. La Línea Conectora */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: 160, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-px bg-gradient-to-b from-slate-800 via-slate-500 to-brand-blue"
            style={{ originY: 0 }}
          />

          {/* 2. El Nodo/Portal de Transición */}
          <div className="relative flex flex-col items-center">
            {/* Círculos concéntricos de fondo (Efecto Radar/Pulso) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute -top-2 w-12 h-12 bg-brand-blue/50 blur-xl rounded-full"
            />

            <Link
              to="/proyectos/destacados"
              className="group relative flex flex-col items-center"
            >
              {/* El Punto de Anclaje */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                className="w-2 h-2 bg-brand-blue rounded-full z-10 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
              />

              {/* CONTENIDO FINAL "Explorar proyectos" */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="mt-8 flex flex-col items-center"
              >
                <div className="relative overflow-hidden px-8 py-4">
                
                  <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-md border border-white/5 rounded-sm transition-all duration-500 group-hover:border-brand-blue/40 group-hover:bg-brand-blue/5" />

                 
                  <span className="relative z-10 text-[11px] sm:text-[13px] tracking-[0.5em] text-slate-400 uppercase font-light transition-colors duration-500 group-hover:text-white">
                    Explora algunos de nuestros{" "}
                    <span className="font-semibold text-slate-200 group-hover:text-brand-blue transition-colors">
                      Proyectos
                    </span>
                  </span>

                  {/* esquinas*/}
                  <div className="absolute top-0 left-0 w-2 h-[1px] bg-brand-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 left-0 w-[1px] h-2 bg-brand-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-2 h-[1px] bg-brand-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-[1px] h-2 bg-brand-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* flecha */}
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  className="mt-6 text-brand-blue/50 group-hover:text-brand-blue transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                  </svg>
                </motion.div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
