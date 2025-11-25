// Certificaciones.jsx → VERSIÓN FINAL CORREGIDA Y PERFECTA
import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download, X, ExternalLink } from "lucide-react";
import QuandumParticles from "../../components/3d/QuandumParticles";

export default function Certificaciones() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: "en9100",
      name: "EN 9100:2018",
      code: "01 117 125 200",
      entity: "TÜV Rheinland",
      year: "Rev. 2024",
      description: "Sistema de gestión de calidad específico para la industria aeroespacial, espacio y defensa",
      pdfUrl: "/certificados/EN9100_2024.pdf",
      imageUrl: "/certificados/EN9100_cert.jpg",
    },
    {
      id: "iso9001",
      name: "ISO 9001:2015",
      code: "01 100 125200",
      entity: "TÜV Rheinland",
      year: "Rev. 2024",
      description: "Norma internacional de gestión de la calidad",
      pdfUrl: "/certificados/ISO9001_2024.pdf",
      imageUrl: "/certificados/ISO9001_cert.jpg",
    },
  ];

  const currentCert = selectedCert
    ? certifications.find((c) => c.id === selectedCert)
    : null;

  return (
    <div className="w-full overflow-x-hidden">
      {/* Partículas de fondo */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <QuandumParticles
          imgUrl="/quandumletras.png"
          gatherDuration={2800}
          parallaxIntensity={0.25}
          enableParallax={true}
          opacity={1}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-50 min-h-screen w-full">
        {/* Header fijo */}

        {/* Espacio para que no tape el header */}
        <div className="pt-20 sm:pt-24 md:pt-28" />

        {/* HERO FULL SCREEN */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 -mt-20 sm:-mt-32 md:-mt-40">
          <motion.div
            initial={{ opacity: 0, y: 140 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 2.4, 
              delay: 1.6,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="text-center max-w-5xl w-full"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-white leading-none px-2">
              CERTIFICADOS
              <br />
              <span className="text-zinc-400 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">AEROESPACIAL</span>
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.8, delay: 3.4 }}
              className="h-px w-48 sm:w-72 md:w-96 bg-gradient-to-r from-transparent via-zinc-600 to-transparent mx-auto my-8 sm:my-12 origin-left"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.8, duration: 2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 font-light leading-relaxed px-4 sm:px-6"
            >
              Certificados bajo los estándares más exigentes de la industria aeroespacial, defensa y espacio
            </motion.p>
          </motion.div>
        </section>

        {/* CERTIFICACIONES */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-center text-white mb-12 sm:mb-16 md:mb-20 px-2"
            >
              CERTIFICACIONES OFICIALES
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 w-full">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="group relative bg-black/70 backdrop-blur-xl border border-zinc-800 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-zinc-600 transition-all duration-700 cursor-pointer w-full"
                  onClick={() => setSelectedCert(cert.id)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60" />
                  <div className="p-6 sm:p-8 md:p-10 lg:p-12 relative z-10">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4 break-words">
                      {cert.name}
                    </h3>
                    <p className="text-zinc-400 font-mono text-sm sm:text-base md:text-lg mb-4 sm:mb-6 break-all">
                      Código: {cert.code}
                    </p>
                    <p className="text-zinc-300 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                      {cert.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm">
                      <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-zinc-900/80 border border-zinc-700 rounded-full text-zinc-300">
                        {cert.entity}
                      </span>
                      <span className="text-zinc-400">Válida hasta {cert.year}</span>
                    </div>
                    <div className="mt-8 sm:mt-10 flex items-center gap-3 sm:gap-4 text-zinc-400 group-hover:text-white transition-all">
                      <span className="text-xs sm:text-sm tracking-wider font-medium">VER CERTIFICADO</span>
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8">
          <div className="max-w-6xl mx-auto text-center w-full">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-white mb-8 sm:mb-12 px-2 leading-tight">
              EXCELENCIA CERTIFICADA
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 font-light mb-10 sm:mb-16 px-4">
              Calidad sin compromisos para misiones que no admiten fallos
            </p>
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black text-zinc-300 tracking-widest px-4 break-words">
              EN 9100 • NATO APPROVED • TÜV CERTIFIED
            </div>
          </div>
        </section>
      </div>

      {/* Modal */}
      {currentCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[999] bg-black/98 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl w-full my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedCert(null)} 
              className="absolute -top-10 sm:-top-12 right-0 text-white hover:text-zinc-400 transition-colors z-10"
            >
              <X className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>
            <div className="bg-zinc-950/95 border-2 border-zinc-800 rounded-2xl sm:rounded-3xl overflow-hidden">
              <div className="bg-gradient-to-b from-zinc-900 to-black p-6 sm:p-8 text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white break-words">
                  {currentCert.name}
                </h3>
                <p className="text-zinc-400 mt-2 text-sm sm:text-base break-all">
                  Código: {currentCert.code}
                </p>
              </div>
              <div className="p-4 sm:p-6 md:p-8 bg-black">
                <img 
                  src={currentCert.imageUrl} 
                  alt={currentCert.name} 
                  className="w-full h-auto rounded-lg sm:rounded-xl shadow-2xl border border-zinc-800" 
                />
              </div>
              <div className="p-6 sm:p-8 bg-gradient-to-t from-black to-zinc-950 flex justify-center">
                <a 
                  href={currentCert.pdfUrl} 
                  download 
                  className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-5 bg-white text-black rounded-full font-bold text-base sm:text-lg hover:scale-105 transition"
                >
                  <Download className="w-5 h-5 sm:w-6 sm:h-6" />
                  Descargar PDF
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

<header className="w-full px-4 sm:px-6 py-4 sm:py-6 md:py-8 bg-black/30 backdrop-blur-md border-y border-zinc-800/50 mt-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4"
          >
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter text-white text-center sm:text-left">
              QUANDUM
              <span className="text-zinc-500 text-sm sm:text-base md:text-lg ml-2 tracking-widest">AEROSPACE</span>
            </div>
            <div className="block text-zinc-500 text-[10px] sm:text-xs md:text-sm tracking-widest text-center">
              ENGINEERED FOR MISSION CRITICAL
            </div>
          </motion.div>
        </header>
    </div>
  );
}