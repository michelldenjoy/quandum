import { motion } from "motion/react";
import { ExternalLink, PlayCircle } from "lucide-react";

export default function Press() {
  return (
    <section className="relative bg-white py-20 sm:py-24 md:py-32 overflow-hidden">
      {/* Fondo técnico sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header                 <span className="font-semibold text-brand-blue">
                  Quandum
                </span>{" "}
                <span className="font-semibold bg-gradient-to-r from-brand-pink via-red-400 to-red-700 bg-clip-text text-transparent">
                  Aerospace
                </span> */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-gray-500 font-medium">
            Reconocimiento externo
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-light text-black leading-tight">
          <span className="font-semibold text-brand-blue">
                  Quandum
                </span>{" "}
                <span className="font-semibold bg-gradient-to-r from-brand-pink via-red-500 to-red-700 bg-clip-text text-transparent">
                  Aerospace
                </span> <br /> en medios especializados
          </h2>
          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            Nuestra actividad y crecimiento industrial han sido reconocidos por
            medios institucionales y especializados del sector, reforzando
            nuestro posicionamiento tecnológico y productivo.
          </p>
        </motion.div>

        {/* Card principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative grid md:grid-cols-2 gap-10 border border-gray-200 bg-white hover:shadow-2xl transition-all duration-500"
        >
          {/* VIDEO */}
          <div className="relative aspect-video bg-black overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/sfvdNIjqZoU"
              title="Quandum Aerospace - Capacidad de Producción"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Contenido */}
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <span className="text-xs font-mono tracking-widest text-gray-500 mb-4">
              REVISTA IDEA · AGENCIA IDEA · JUNTA DE ANDALUCÍA
            </span>

            <h3 className="text-2xl sm:text-3xl font-semibold text-black mb-6 leading-tight">
              Quandum Aerospace aumenta su capacidad de producción en piezas
              aeronáuticas
            </h3>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
              El reportaje recoge la ampliación de nuestras instalaciones y la
              incorporación de nueva maquinaria industrial en el marco de una
              subvención pública destinada al fortalecimiento del tejido
              industrial aeroespacial andaluz.
            </p>

            <a
              href="https://revistaideadigital.es/quandum-aerospace-aumenta-su-capacidad-de-produccion-en-piezas-aeronauticas/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-semibold text-black hover:text-blue-700 transition-colors"
            >
              <span>Ver artículo completo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Nota técnica inferior */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-xs text-gray-500 font-mono tracking-wide"
        >
          Fuente externa · Publicación institucional · Contenido editorial
        </motion.div>
      </div>
    </section>
  );
}
