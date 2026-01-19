// Certificaciones.jsx - Rediseño profesional aeroespacial
import React, { useState } from "react";
import { motion } from "motion/react";
import { Download, X, ExternalLink } from "lucide-react";
import HeroVideo from "../../components/about/HeroVideo";

export default function Certificaciones() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: "en9100",
      name: "EN 9100:2018",
      code: "01 117 125 200",
      pdfUrl: "/certificados/EN9100_2024.pdf",
      imageUrl: "/certificados/EN9100_cert.jpg",
      scope:
        "Aplicable a organizaciones que operan en los sectores aeroespacial, defensa y espacio, con control de procesos críticos, trazabilidad completa y gestión de riesgos del producto.",
      bullets: [
        "Gestión de configuración y cambios",
        "Control de producto no conforme",
        "Gestión de riesgos y seguridad del producto",
        "Trazabilidad de materiales y procesos especiales",
      ],
    },
    {
      id: "iso9001",
      name: "ISO 9001:2015",
      code: "01 100 125200",
      pdfUrl: "/certificados/ISO9001_2024.pdf",
      imageUrl: "/certificados/ISO9001_cert.jpg",
      scope:
        "Sistema de gestión de calidad orientado a la estandarización de procesos, mejora continua y control operativo en entornos industriales y tecnológicos.",
      bullets: [
        "Enfoque basado en procesos",
        "Mejora continua sistemática",
        "Satisfacción del cliente garantizada",
        "Documentación y trazabilidad estandarizada",
      ],
    },
  ];

  const currentCert = selectedCert
    ? certifications.find((c) => c.id === selectedCert)
    : null;

  return (
    <div className="w-full overflow-x-hidden relative">
      {/* Fondo fijo */}
      <div className="fixed inset-0 -z-10">
        <HeroVideo
          eyebrow=""
          title=""
          description=""
          backgroundImage="/images/certifications.jpeg"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <section className="relative py-32 px-6 sm:px-10 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white  text-center mb-6 mt-12 md:mt-28 lg:mt-28"
        >
          CERTIFICACIONES OFICIALES
        </motion.h2>
        <motion.div >

          <p className="max-w-3xl text-center mx-auto text-slate-100 font-medium text-base sm:text-lg md:text-xl  leading-relaxed mb-16">
          Nuestra empresa cuenta con las certificaciones ISO 9001 e ISO 9100, que acreditan la implementación de un Sistema de Gestión de la Calidad alineado con los más altos estándares internacionales del sector aeronáutico.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto md:mt-24 lg:mt-36 space-y-16">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="grid lg:grid-cols-3 gap-8 items-start bg-zinc-900/80 backdrop-blur-xl border border-zinc-700 rounded-2xl p-8 lg:p-10 cursor-pointer hover:border-cyan-500 transition-all duration-500"
              onClick={() => setSelectedCert(cert.id)}
            >
              {/* Texto */}
              <div className="lg:col-span-2 flex flex-col justify-start gap-4">
                <span className="text-xs tracking-[0.3em] text-cyan-400 font-bold uppercase">
                  Sistema de gestión certificado
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                  {cert.name}
                </h3>
                <p className="text-zinc-400 font-mono text-sm sm:text-base">
                  Código: {cert.code}
                </p>
                <p className="text-zinc-200 leading-relaxed text-base sm:text-lg font-medium">
                  {cert.scope}
                </p>

                <ul className="space-y-2 text-zinc-400 text-sm sm:text-base">
                  {cert.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center gap-4 text-cyan-400 font-bold">
                  <span>VER DOCUMENTO</span>
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>

              {/* Preview  */}
              <div className="relative max-w-xs h-60 lg:h-72 overflow-hidden rounded-xl border border-zinc-700 shadow-lg">
                <img
                  src={cert.imageUrl}
                  alt={cert.name}
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal con certificado*/}
      {currentCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl overflow-y-auto p-4 sm:p-6"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="relative max-w-2xl w-full mx-auto mt-10 mb-16"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cerrar */}
            <button
              onClick={() => setSelectedCert(null)}
              className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[1001] bg-white/10 backdrop-blur-xl p-3 rounded-full border border-white/20 hover:bg-white/20 transition"
            >
              <X className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </button>

            {/* Contenido modal */}
            <div className="bg-zinc-950/95 border border-zinc-800 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-b from-zinc-900 to-black p-6 sm:p-8 text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                  {currentCert.name}
                </h3>
                <p className="text-zinc-400 mt-2 text-sm sm:text-base">
                  Código: {currentCert.code}
                </p>
              </div>

              <div className="p-4 sm:p-6 bg-black">
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
                  className="px-8 flex py-3 hover:scale-105 rounded-md text-sm uppercase tracking-widest text-white clip-path-diagonal border border-gray-500 hover:bg-brand-blue hover:text-white transition-all duration-300"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Descargar certificado
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

<section className="py-20 sm:py-24 md:py-32 px-6 sm:px-10 md:px-16 bg-black/30 backdrop-blur-sm border-y border-zinc-800/50">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-zinc-950 border border-zinc-800 rounded-2xl p-8"
              >
                <span className="absolute top-6 right-6 text-xs tracking-widest text-zinc-500 border border-zinc-700 px-3 py-1 rounded-full">
                  IAQG
                </span>

                <h3 className="text-2xl font-black text-white mb-4">
                  OASIS – IAQG
                </h3>

                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                  Registro oficial en el sistema <strong>OASIS</strong> de la
                  International Aerospace Quality Group, utilizado por los
                  principales OEMs y proveedores aeroespaciales para la
                  validación de suministradores.
                </p>

                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>▸ Auditorías EN 9100 registradas</li>
                  <li>▸ Transparencia y trazabilidad internacional</li>
                  <li>▸ Validación de sistema de calidad</li>
                </ul>

                <div className="mt-6 font-mono text-sm text-zinc-300">
                  Código OASIS: <span className="font-bold">6130438025</span>
                </div>
              </motion.div>

              {/* NATO / NCAGE */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-zinc-950 border border-zinc-800 rounded-2xl p-8"
              >
                <span className="absolute top-6 right-6 text-xs tracking-widest text-zinc-500 border border-zinc-700 px-3 py-1 rounded-full">
                  NATO
                </span>

                <h3 className="text-2xl font-black text-white mb-4">
                  Registro OTAN – NCAGE
                </h3>

                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                  Proveedor registrado oficialmente en el sistema de
                  codificación
                  <strong> NCAGE</strong>, habilitado para operar dentro del
                  entorno OTAN y la cadena de suministro de defensa.
                </p>

                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>▸ Aprobación para suministro militar</li>
                  <li>▸ Requisitos de seguridad y trazabilidad</li>
                  <li>▸ Identificación logística estandarizada</li>
                </ul>

                <div className="mt-6 font-mono text-sm text-zinc-300">
                  NCAGE Code: <span className="font-bold">9359B</span>
                </div>
              </motion.div>

              {/* REACH */}
              <div className="lg:col-span-2 bg-zinc-950 border border-zinc-800 rounded-2xl p-10">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-6">
                  Conformidad regulatoria – REACH & RoHS
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    En <strong className="text-white">Quandum Aerospace</strong>{" "}
                    cumplimos plenamente con la normativa europea{" "}
                    <strong>REACH</strong> y la directiva
                    <strong> RoHS</strong>, garantizando el control de
                    sustancias químicas y la restricción de materiales
                    peligrosos en todos nuestros procesos.
                  </p>

                  <ul className="space-y-3 text-zinc-400 text-sm sm:text-base">
                    <li>▸ Control de sustancias SVHC</li>
                    <li>▸ Cumplimiento ambiental europeo</li>
                    <li>▸ Responsabilidad en la cadena de suministro</li>
                    <li>▸ Alineación con estándares OEM</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="pb-28 sm:pb-32 md:pb-40 lg:pb-44 xl:pb-48 pt-16 sm:pt-28 md:pt-32 px-4 sm:px-6 md:px-8">
          <div className="max-w-6xl mx-auto text-center w-full">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-white mb-8 sm:mb-12 px-2 leading-tight">
              EXCELENCIA CERTIFICADA
            </h2>

            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black text-slate-200 tracking-widest px-4 break-words">
              EN 9100 • NATO APPROVED • EQA CERTIFIED
            </div>
          </div>
        </section>
    </div>
  );
}
