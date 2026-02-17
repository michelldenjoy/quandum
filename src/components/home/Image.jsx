import { useState } from "react";
import { motion } from "motion/react";


const hotspots = [
    {
      id: 1,
      title: "IR Illuminator",
      description: "Sistema de iluminación infrarroja para misiones nocturnas.",
      x: "32.3%",
      y: "59.7%",
      image: "/products/illuminator.webp",
      align: "center" 
    },
    {
      id: 2,
      title: "Nozzle",
      description: "Sistema de Tobera.",
      x: "10.5%",
      y: "18%",
      image: "/products/nozzle.webp",
      align: "bottom" 
    },
    {
      id: 3,
      title: "Encoder",
      description: "Sistema de Tobera.",
      x: "80%",
      y: "86%",
      image: "/products/encoder.webp",
      align: "top" 
    },
    {
      id: 4,
      title: "P.O.D",
      description: "Sistema de Iluminación.",
      x: "18.5%",
      y: "82%",
      image: "/products/POD.webp",
      align: "top" 
    },
    {
      id: 5,
      title: "D.C.D",
      description: "Sistema de Iluminación.",
      x: "48%",
      y: "79.5%",
      image: "/products/dimming.webp",
      align: "top" 
    },
  ];
  
  export default function Image() {
    const [activeId, setActiveId] = useState(null);
  
    
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
      <section className="bg-slate-950 py-10 w-full overflow-hidden">
        <div className="relative mx-auto" style={{ maxWidth: "1200px" }}>

          <div className="relative w-full shadow-2xl border border-white/5 bg-slate-900 rounded-lg">
            
            <img 
              src="/componente-1.png" 
              className="w-full h-auto block opacity-90 rounded-lg"
            />
  
            {hotspots.map((spot) => (
              <div
                key={spot.id}
                className="absolute z-20"
                style={{ top: spot.y, left: spot.x, transform: "translate(-50%, -50%)" }}
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
  
                {/* Tooltip */}
                {activeId === spot.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`absolute w-64 bg-slate-900/95 border border-blue-500/40 p-4 rounded-xl backdrop-blur-xl z-50 pointer-events-none shadow-2xl ${getCardAlignment(spot.align)}`}
                  >
                    {/* Triángulo indicador (Opcional) */}
                    {/* <div className={`absolute w-3 h-3 bg-slate-900 border-b border-r border-blue-500/40 rotate-45 
                      ${spot.align === 'left' ? 'left-4' : spot.align === 'right' ? 'right-4' : 'left-1/2 -translate-x-1/2'} 
                      ${spot.align === 'bottom' ? '-top-1.5 border-t border-l border-b-0 border-r-0' : '-bottom-1.5'}`} 
                    /> */}
  
                    <div className="relative overflow-hidden rounded-lg mb-3">
                      <img src={spot.image} className="w-full h-32 object-cover" />
                    </div>
                    <h4 className="text-white font-bold text-sm mb-1">{spot.title}</h4>
                    <p className="text-slate-400 text-[10px] leading-relaxed uppercase tracking-wider">
                      {spot.description}
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }