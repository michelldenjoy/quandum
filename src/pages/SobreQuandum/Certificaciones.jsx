// Certificaciones.jsx - Sin scroll horizontal
import React, { useState } from "react";
import { motion } from "motion/react";
import { Download, X, ExternalLink } from "lucide-react";
import QuandumParticles from "../../components/3d/QuandumParticles";

export default function Certificaciones() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: "en9100",
      name: "EN 9100:2018",
      code: "01 117 125 200",
      description:
        "Sistema de gestión de calidad específico para la industria aeroespacial, espacio y defensa",
      pdfUrl: "/certificados/EN9100_2024.pdf",
      imageUrl: "/certificados/EN9100_cert.jpg",
    },
    {
      id: "iso9001",
      name: "ISO 9001:2015",
      code: "01 100 125200",
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
      {/* Partículas */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <QuandumParticles
          imgUrl="/quandumletras.png"
          gatherDuration={2800}
          parallaxIntensity={0.25}
          enableParallax={true}
          opacity={1}
        />
      </div>

      {/* hero principal */}
      <div className="w-full max-w-[100vw] overflow-hidden">
        <section className="flex flex-col items-center justify-center min-h-[500px] relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 140 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2.4,
              delay: 1.0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-center max-w-5xl w-full"
          >
            <h1 className="text-4xl md:text-6xl lg:text-6xl xl:text-7xl md:py-6 font-black tracking-tighter text-white leading-none">
              CERTIFICADOS
              <br />
              <span className="text-zinc-400 text-3xl md:text-5xl lg:text-5xl xl:text-6xl">
                AEROESPACIAL
              </span>
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.8, delay: 3.4 }}
              className="h-px w-48 sm:w-72 md:w-80 lg:w-96 max-w-full bg-gradient-to-r from-transparent via-zinc-600 to-transparent mx-auto origin-left"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.0, duration: 2 }}
              className="text-base px-4 sm:text-xl md:text-4xl lg:text-3xl text-zinc-400 font-light leading-relaxed"
            >
              Certificados bajo los estándares más exigentes de la industria
              aeroespacial, defensa y espacio
            </motion.p>
          </motion.div>
        </section>

        {/* CERTIFICACIONES */}
        <section className="py-12 sm:py-10 md:py-28 px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-center text-white mb-12 sm:mb-16 md:mb-20 px-2"
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
                    <p className="text-zinc-400 font-mono text-sm sm:text-base md:text-lg mb-4 sm:mb-6 break-words">
                      Código: {cert.code}
                    </p>
                    <p className="text-zinc-300 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                      {cert.description}
                    </p>

                    <div className="mt-8 sm:mt-10 flex items-center gap-3 sm:gap-4 text-zinc-400 group-hover:text-white transition-all">
                      <span className="text-xs sm:text-sm tracking-wider font-medium">
                        VER CERTIFICADO
                      </span>
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* INFORMACIÓN CORPORATIVA Y REGISTROS INTERNACIONALES */}
        <section className="py-20 sm:py-24 md:py-32 px-6 sm:px-10 md:px-16 bg-black/40 backdrop-blur-xl border-y border-zinc-800/50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white text-center mb-14"
            >
              COMPROMISO Y GARANTÍAS INTERNACIONALES
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* OASIS / IAQG */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-black/60 border border-zinc-800 rounded-2xl p-8 backdrop-blur-xl"
              >
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                  Miembro oficial OASIS – IAQG
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                  Quandum forma parte del sistema{" "}
                  <strong>
                    OASIS (Online Aerospace Supplier Information System)
                  </strong>
                  , gestionado por la organización internacional{" "}
                  <strong>IAQG</strong>, que reúne a los principales fabricantes
                  y proveedores aeroespaciales del mundo.
                  <br />
                  <br />
                  IAQG establece los requisitos comunes para garantizar la
                  calidad y seguridad en toda la cadena de suministro
                  aeroespacial. La presencia de Quandum en este sistema
                  demuestra cumplimiento, transparencia y validación
                  internacional.
                </p>

                <div className="mt-6 text-zinc-300 font-mono text-sm sm:text-base">
                  <span className="font-bold">Código OASIS:</span> 6130438025
                </div>
              </motion.div>

              {/* NATO / NCAGE */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-black/60 border border-zinc-800 rounded-2xl p-8 backdrop-blur-xl"
              >
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                  Suministrador oficial de la OTAN
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                  Quandum está registrado como proveedor autorizado de la OTAN,
                  cumpliendo con los estrictos requisitos de calidad,
                  trazabilidad, seguridad y control necesarios para la industria
                  militar y aeronáutica.
                  <br />
                  <br />
                  Este registro aprueba formalmente a Quandum como suministrador
                  cualificado para organismos y empresas vinculadas a defensa.
                </p>

                <div className="mt-6 text-zinc-300 font-mono text-sm sm:text-base">
                  <span className="font-bold">Código NCAGE:</span> 9359B
                </div>
              </motion.div>

              {/* REACH */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 bg-black/60 border border-zinc-800 rounded-2xl p-8 backdrop-blur-xl"
              >
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                  Compromiso ambiental – Normativa REACH
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                  En el marco de la sostenibilidad y la responsabilidad
                  ambiental, Quandum garantiza que todos los materiales
                  utilizados en sus procesos cumplen con la normativa{" "}
                  <strong>REACH</strong> de la Unión Europea.
                  <br />
                  <br />
                  REACH regula sustancias químicas potencialmente peligrosas,
                  asegurando que los componentes empleados en aplicaciones
                  aeroespaciales sean seguros, trazables y respetuosos con el
                  entorno.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-16 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8">
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

      {/* Modal de certificados */}
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
                <p className="text-zinc-400 mt-2 text-sm sm:text-base break-words">
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

      {/* minifooter */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        className="fixed bottom-0 left-0 right-0 z-50 px-6 py-5 bg-black/80 backdrop-blur-2xl border-t border-zinc-800/70"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <div className="text-2xl md:text-3xl font-black tracking-tighter text-white">
            QUANDUM<span className="text-zinc-500 ml-2">AEROSPACE</span>
          </div>
          <div className="text-zinc-500 text-xs md:text-sm tracking-widest uppercase">
            Engineered for mission critical
          </div>
        </div>
      </motion.div>
    </div>
  );
}
